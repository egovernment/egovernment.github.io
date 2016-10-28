---
layout: doc-pages
permalink: /fundamentals/value-types
title: 'Value Types'
category: 'fundamentals'
lang: en
ref: values
weight: 1
---

# Value Types

Generally speaking in the language there are two categories of values: __Primitives__ (Immutable) and __Objects__ (Mutable). Still, it's good to acknowledge __three__ kinds (where in _immutable_ we distinguish two different types).

- Immutable:
  - __Primitive non-value__ - Values representing lack of value
  - __Primitive value__ - Immutable values
- Mutable:
  - __Object__ - Mutable object values

To operate with language fluently it's very important to understand differences between those groups.

## Primitive non-value

There are two values representing _lack of value_:

- `undefined`
- `null`

Those values do not have properties or methods, and unlike other primitives do not come with alternative object representation, which means that any property access will crash:

```javascript
null.foo // TypeError
```

This is what makes them significantly different from other primitives.

### Why two non-values?

Normally language comes with one non-value representation. Why in JavaScript we have two?

It goes down to fact that JavaScript (contrary to most of other languages) doesn't crash when you try to access non existent property, or doesn't provide arguments to function, in such case `undefined` is returned/passed to receiver.

As there was a need to differentiate such cases from ones where we want to intentionally mark some property as having "no-value", an alternative `null` "no-value" was introduced.

#### Usage recommendation

It is recommended to intentionally set empty values only with `null`:

```javascript
obj.foo = null
```

and expose `undefined` only via deletion of property

```javascript
delete obj.foo
```

_Note: In eRegistrations framework we handle data using [dbjs](https://github.com/medikoo/dbjs#dbjs) objects, and on them deletion is achieved via using `delete` method as `obj.delete('foo')`_

## Primitive value

Into that group we have all other primitives:

- __boolean primitives__
- __string primitives__
- __number primitives__
- __symbol primitives__ ( ECMAScript 2015+ standard only)

They theoretically do not have properties or methods, but they come with alternative object representation, and through auto-boxing mechanism (explained below) feeling is that they come as read-only mon modifiable values with properties and methods.

### Auto-boxing

Whenever we try to access property on primitive values as e.g.:

```javascript
var str = 'foo';
str.length; // 3
str.foo; // undefined
str.foo = 'bar'; // has no effect
str.foo; // undefined
```

The access operations are internally resolved as:

```javascript
var str = 'foo';
(new String(str)).length; // 3
(new String(str)).foo; // undefined
(new String(str)).foo = 'bar'; // has no effect
(new String(str)).foo; // undefined
```

Where `new String(str)` returns object (non primitive) string representation.
Then on that object properties are resolved. As for each access it creates new object box, any try to set property results as having no effect

## Object

Which values belong here? The easiest way to put it that this type covers __every other value__ that was not covered by previous two types.

Characteristics is that objects can have properties or methods. They're also prototoype based, and are extensible (can serve as prototype for other objects). See [Prototypal Inheritance](/fundamentals/inheritance) for more info.

```javascript
object.foo = 'bar';
object.foo; // 'bar';

var extObject = Object.create(object);
Object.getPrototypeOf(extObject); // object
extObject.foo; // 'bar
```

## Value type detection

When working with code, especially in case of arguments validation, there are two questions we may want to ask

- Is value not a non-value (so neither `undefined` nor `null`)
- Is value an object

How to best form those conditions?

### Is value not a non-value:

```javascript
value != null
```

This is the expression you'll find that checks that, and it's one you should use for that

### Is value an object:

```javascript
if (typeof value === 'object') return (value !== null);
return (typeof value === 'function');
```

Any value for which either `typeof` returns an `'object'` (but excluding `null`) or for which `typeof` returns `'function'` is an object.

In application code to not repeat above formula, we usually rely on [es5-ext/object/is-object](https://github.com/medikoo/es5-ext/blob/master/object/is-object.js) or even more likely if we want to abort exection (in case of invalid arguments input) on [es5-ext/object/valid-object](https://github.com/medikoo/es5-ext/blob/master/object/valid-object.js)


```javascript
var ensureObject = require('es5-ext/object/valid-object')

module.exports = function (someObject) {
  ensureObject(someObject);
  ...
};
```