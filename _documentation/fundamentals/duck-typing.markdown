---
layout: doc-pages
permalink: /fundamentals/duck-typing/
title: 'Duck Typing'
category: 'fundamentals'
lang: en
ref: duck-typing
weight: 3
---

# Duck Typing

JavaScript language internals (its methods) for many cases relies on Duck typing, when it comes to recognition of value.

## What is duck-typing?

In short it's about detecting type of values by characteristics of their properties and not by detection of their origin (_if it quacks like a duck, then it is a duck_).

More on that on [Wikipedia](https://en.wikipedia.org/wiki/Duck_typing)

Below there's short description of all JavaScript types, that are handled that way.

In many eRegistrations related utilities same methods are used to detect and handle input values.

## Duck typed JavaScript "Types"

### 1. `Array`

In JavaScript not only instances of `Array` constructor are recognized as valid arrays, but also any [object coercible](/fundamentals/coercion/#object-coercion) values with [number coercible](http://localhost:4001/fundamentals/coercion/#number-coercion) `length` property.

In JavaScript community such values are also commonly called _array-likes_. Aside of `Array` the other native values that are commonly identified with that group are _string_ primitives and _arguments_ instances (object accessible within any function body, that represents arguments collection).

It's important to understand that in case of `Array` instances, _indexes_ are normal object properties (there's nothing special about them, they're technically not _numeric_ indexes, but normal _string_ properties, that are just recognized as consecutive _numeric_ indexes).

The only differences between an array that's created using native form: `['foo', 'bar']` and plain array-like object created as: `{ '0': 'foo', '1': 'bar', length: 2 }`, is that later do not extend `Array.prototype` therefore doesn't expose _array_ native methods, and that internally it's `length` property is not adjusted automatically. While first characteristics can be easily ensure via `Object.setPrototypeOf(arrayLike, Array.prototype)`, the later is not achievable using language constructs. That's why there's technically no way to reproduce full _array_ characteristics writing custom constructor.

All native methods which involve working with arrays in reality are specified to work with array-like's:

```javascript
var arrayLike = { '0': 'foo', '1': 'bar', length: 2 };

Array.prototype.slice.call(arrayLike, 1); // ['bar']

Array.prototype.pop.call(arrayLike); // 'bar'
arrayLike; // { '0': 'foo', length: 1 };

Array.prototype.forEach.call(arrayLike, function (value) {
  console.log(value, index); // 'foo', 0
});
```

### 2. `Iterable` and `Iterator`

These are new protocols introduced with ES2015. New types (of which popularity emerges) that share `Iterable` prototype are `Set` and `Map`.


#### `Iterable`

Any object exposing a `[Symbol.iterator]` method (which is expected to return an `iterator` instance) is accepted as valid `iterable`

#### Iterator

Any [object coercible](/fundamentals/coercion/#object-coercion) values that exposes a `next` method (expecting to return an [object coercible]((/fundamentals/coercion/#object-coercion)) value) is accepted as valid `iterator`.

Low-level handling of `iterator` value (it's not common you would approach this is normal code) may look as:

```javascript
var iterable = ['foo', 'bar'];
var iterator = iterable[Symbol.iterator]();
iterator.next(); // { done: false, value: 'foo' }
iterator.next(); // { done: false, value: 'bar' }
iterator.next(); // { done: true, value: undefined }
```
As we can see the `next` method is expected to return an object with two properties:
- `done` - stating whether we iterated of all values already
- `value` - exposing collection value (at given iteration step)

#### `for.of`

There's a dedicated statement for iteration over iterables, it's `for..of`:

```javascript
for (var value of iterable) { ... }
```

Still it's implemented only in engines providing ES2015 support, and to ensure compliance with older engines __never rely on this in eRegistrations project__. This rule should be complied until further notice

#### Iterable types

All native ES5 array-like types (instances of `Array`, instances of `String`, `arguments`) were upgraded to also share an `iterable` protocol.

ES2015 introduced also new types as `Set` and `Map`, they're purely `iterables` (not array-likes).
As they're natively available only in engines supporting ES2015, in eRegistrations whenever we want to use the, we fallback to eventual polyfills.
Which means access to this types, should be initialized as:

```javascript
var Set = require('es6-set');
var Map = require('es6-map');

var someSet = new Set([0, 2,3]);
var someMap = new Map([[1, 'one'], [2, 'two']]);
```

If that's not ensured then application will break in engines which not support those types natively (engines which we want to support).

#### Common handling of Iterables and Array-likes

In APIs we write we should support both array-like's and iterables.

To achieve it cleanly we may rely on `Array.from` (which again is ES2015 construct and should be initialized through eventual polyfill):

```javascript
var aFrom = require('es5-ext/array/from'); // an alias for Array.from

arrayLikeAndIterable = aFrom(arrayLikeOrIterable);
```

`Array.from` takes input that can be either an _iterable_ or _array-like_ and returns us with value that's both _iterable_ and _array-like_, more precisely instance of an array.

In eRegistrations code you may see `aFrom` used in many places.

### 3. `Promise`

Any [object coercible](/fundamentals/coercion/#object-coercion) value exposing a `then` method is accepted as valid `promise`.

While promises are provided natively with ES2015, in eRegistrations we purely rely on [deferred](https://github.com/medikoo/deferred#deferred) utility. _Main reasons for that are controversial and limited design of native implementation. `Deferred` provides us with many extensions which are a must in effective work with promises and which are not shared by native implementation._

