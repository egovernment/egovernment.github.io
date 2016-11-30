---
layout: doc-pages
permalink: /fundamentals/this/
title: 'Understanding "this"'
category: 'fundamentals'
lang: en
ref: this
weight: 6
---

# Understanding "this"

`this` value is decided dynamically, when function is called, and depends on way by which function was called.

Therefore just by looking at function body declaration we cannot with 100% assurance state what would be `this` when it's invoked.

It's also very important to acknowledge, that in JavaScript function is first-class object, as any other. Which can be passed as value. There's no real _function_ and _method_ distinction. Whether it's function or method is purely decided by way it has been called. Same _function_ object can be invoked as stand alone function, and as _method_ when it's assigned to one of object properties.

To understand this well, let's revise all ways through which function/method can be called.

Firstly let's define an `fn` function, which we will call in many different ways:

```javascript
var fn = function () { return this; };

```

## 1. Default binding

```javascript
fn(); // undefined
```

When function is called plain way as above, the `this` is simply `undefined. Note: it applies strictly to [strict mode](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode) (as we never work in _sloppy mode_ in eRegistrations stack, this subject is not covered).

```javascript
var obj = { method: fn };
obj.method(); // obj
```

When we call function as _method_ (which can be achieved as above), then `this` refers to instance on which method was invoked.

## 2. Explicit binding

```javascript
fn.call(obj, arg1, arg2); // obj
fn.apply(obj, [arg1, arg2]); // obj
```

There are function methods in javascript which allow us to explicitly state what value should land at `this`. Those are `call` and `apply` methods as presented above.

## 3. Hard binding

```javascript
var boundFn = fn.bind(obj);
boundFn(); // obj
boundFn.call('foo'); // obj
```

We can pre-prepare functions with already _fixed_ (non overridable in any way) `this` value.
That can be achieved through `bind` function method as presented above.

## 4. New (constructor) binding

```javascript
var newObj = new fn(); // new object (instance of fn)
Object.getPrototypeOf(newObj);  // fn.prototype
```

When we create new instances of given classes (technically constructors), then what lands at `this`, is newly created object which extends `fn.prototype` object (`fn.prototype` was set as its prototype, more on that at [Prototypal inheritance](/fundamentals/inheritance/) chapter).

