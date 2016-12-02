---
layout: doc-pages
permalink: /fundamentals/inheritance/
title: 'Prototypal Inheritance'
category: 'fundamentals'
lang: en
ref: inheritance
weight: 7
---

# Prototypal inheritance

JavaScript does have typical classes. Instead of _object-class_ we have an _object-object_ inheritance.

In prototype inheritance, the object shares properties of its underlying _prototype_ object. The _prototype_ object can have other _prototype_ and so on, usually until `Object.prototype` is reached which do not have any _prototype_.

When we access properties on an object, implementation first searched for that properties on that object directly, if it's not set there, then it tries to find it on it's _prototype_, then on _prototype_ of _prototype_ and so on, until it reaches first object on which property is declared or there's no more _prototype_ to explore (in such case `undefined` is returned).

It's dynamic relation that is subject to changes through course of life of objects, e.g. properties added to _prototype_ object are instantly visible on any of its extensions (unless shadowed by same named property).

Which object would be a prototype of an object is determined at object construction:

## Prototype resolution

### 1. Default prototype binding (via `new`)

```javascript
var obj = new Object(); // Same as: obj = {}
Object.getPrototypeOf(obj);  // Object.prototype

obj = new Array(); // Same as: obj = []
Object.getPrototypeOf(obj);  // Array.prototype

obj = new SomeFunction();
Object.getPrototypeOf(obj);  // SomeFunction.prototype
```

When we create an objects using `new` constructor (or one of language aliases that behind the scenes introduce same construction method), then newly crated object is made as an extension of `Fn.prototype` where `Fn` was a constructor used after `new` keyword.

It's important to differentiate between two terms:
- a `'prototype'` property of a _function_ (every JavaScript function has `'prototype'` property, and object value accessible at that property, serves as _prototype_ candidate for objects creating using `new` constructor.
- a `prototype` of an object, which in that sense is object which given object extends. The `prototype` is not accessible at any property, we can retrieve only via `Object.getPrototypeOf(object)`

### 2. Explicit prototype binding (via Object.create)

```javascript
obj = Object.create(Object.prototype); // Does not invoke constructor
Object.getPrototypeOf(obj); // Object.prototype
```

ES5 introduced an `Object.create` object constructor, Through which we can create new objects not using `new` construct.

The only information we provide is _prototype_ object, which we want to be a _prototype_ for our newly created object.

Through that way we can also create _prototype-less_ objects, which same as `Object.prototype` do not extend any object. That can be achieved through:

```javascript
var prototypeLessObj = Object.create(null);
Object.getPrototypeOf(prototypeLessObj); // null
```

Occasionally when browsing eRegistrations stack you may approach that construct. The use case is to have object with zero properties, that can server as generic dictionary where we do not have to worry about accidental name collision e.g.:

```javascript
var plainObject = {}, prototypeLessObject = Object.create(null);

Boolean(plainObject.hasOwnProperty); // true, such property exists
Boolean(prototypeLessObject.hasOwnProperty); // false, no such property exists
```

Still usage of `null` based objects, is now in demise. In more recent code, it's more likely you'll see `Map` used for that, as it also appears as even faster dictionary handler than objects created through `Object.create(null)`.

### 3. Changing prototype of already created object

Technically since ES2015 it's possible to change prototype of object. There's a dedicated `Object.setPrototypeOf` function for that. It can be used to objects that share core characteristics of some type, but do not extend prototype of that (as demonstrated in [Other Object Types](/fundamentals/other-objects/) chapter

Still in normal code there you'll find no use-cases to imply such changes. It's mostly fine to not be aware that such possibility exists.


## Working with class-like constructs

New standard ES2015, offers native `class` notation, still it's mostly just a sugar over functionalities already existing in language in older versions. It still implies object to object prototypal inheritance as implied above.

In eRegistrations for compatibility reasons we do not rely on new syntax as introduced with ES2015. If we want to use class-like construct we work purely with what ES5 has to offer.

Below is an example of class like constructs written with ES5, which you may approach at some places in eRegistrations stack.

_Example `Animal` class:_

```javascript
var d = require('d'); // ECMAScript descriptor generator

// Constructor
var Animal = function (dateOfBirth) {
  this.dateOfBirth = dateOfBirth;
};

// Prototype (properties to be accessible on each instance)
Object.defineProperties(Animal.prototype, {
  dateOfBirth: d(null),
  say: d(function (what) { console.log(what); }),
  getAge: d(function () { return new Date() - this.dateOfBirth; })
});
```

_Example of `Dog` class, which extends `Animal`:_

```javascript
var setPrototypeOf = require('es5-ext/object/set-prototype-of'); // ES2015 shim for Object.setPrototypeOf
var d = require('d'); // ECMAScript descriptor generator

// Constructor
var Dog = setPrototypeOf(function (dateOfBirth, breed) {
  Animal.call(this, dateOfBirth); // Call super
  if (breed)  this.breed = breed;
}, Animal); // Ensure Dog constructor inherits directly from Animal

// Create `prototype` that inherits from `Animal.prototype`
Dog.prototype = Object.create(Animal.prototype, {
  // Ensure that prototype.constructor points right constructor
  constructor: d(Dog),
  // Override say method
  say: d(function () {
    Animal.prototype.say.call(this, 'woof woof');
  }),
	// Introduce Dog specific property
  breed: d('mongrel')
});
```

_Example of instance creation:_

```javascript
var sparky = new Dog(new Date('2008-02-23'), 'Terrier');
```

Overview of inheritance chain between `sparky` instance and underlying prototypes:

---

<img src="/img/inheritance.png" />
