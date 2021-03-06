---
layout: doc-pages
permalink: /fundamentals/coercion/
title: 'Coercion & Operators'
category: 'fundamentals'
lang: en
ref: coercion
weight: 2
---

# Coercion & Operators

JavaScript is a dynamic language where type coercion (in case of primitives) and duck typing (in case of objects) plays extensive role in internals handling.

Those mechanisms while not always reflected in user-land libraries and utilities are very important to understand for fluent work with JavaScript.

## What is Coercion?

Coercion happens when function or operator expects a value of certain type, but receives value of different type.
For example imagine `add` function that's meant to for adding two numbers. What happens when we pass to it two strings (not numbers): `'2'`, and `'3'`?  
In native JavaScript world both arguments would be _coerced_ to numbers, so it's `2` and `3` numbers that are resolved as final arguments, and function will return as expected number `5`.
In languages with strict typing such operation will crash stating that received arguments where not of expected type.

In JavaScript there are four predefined coercion mechanisms: _toBoolean_, _toString_, _toNumber_ and _toObject_. Most of language values are coercible to any of those types (when being coercible means that _coercion_ trial will not result with an exception but with some value of end type)

In next chapters, I'll briefly explain all coercion mechanism, and explain which values are coercible which are not.

## Boolean Coercion

All language values are Boolean coercible

Values that coerce to `false` (in other words: _falsy values_):

- `null`
- `undefined`
- `""`
- `0`
- `NaN`
- `false`

Any other values coerces to `true`.

Programmatically we can describe `toBoolean` coercion with following function:

```javascript
function toBoolean(value) {
  if (value == null) return false;
  if (value === false) return false;
  if (value === "") return false;
  if (value === 0) return false;
  if (Number.isNaN(value)) return false;
}
```

This mechanism is also reflected by `Boolean(value)` call, and happens behind the scenes in all conditional operators (e.g. `if (value) doA() else doB()` or `value ? doA() : doB()`).

## String Coercion

String coercion can be described with following function:

```javascript
function toString(value) {
  if (value === undefined) return 'undefined';
  if (value === null) return 'null';
  return value.toString();
};
```

Any string taking operator or function, will imply above `toString` coercion on input value, this logic is also exactly reproducible by `String(value)` constructor call.

As all objects that inherit from `Object.prototype` share `toString` method, therefore we can say that (nearly) all values are string coercible. The only exception would be objects that do not share `Object.prototype` object as prototype, and do not expose `toString` method.
There's no values like that provided natively by the language, but we can create ones via e.g. `Object.create(null)` (see [Prototypal Inheritance](/fundamentals/inheritance) chapter for more information), so we're not safe from such exceptions.

## Number Coercion

Number coercion can be described with following function:

```javascript
function toNumber(value) {
  if (value === undefined) return NaN;
  if (value === null) return 0;
  if (typeof value === 'boolean') return value ? 1 : 0;
  if (typeof value === 'string') return strToNumber(value);
  if (typeof value === 'number') return value;
  if (typeof value === 'symbol') throw new TypeError();
  if (isObject(value.valueOf())) return strToNumber(value.toString());
  return toNumber(value.valueOf());
};
```

Any number taking operator or function, will imply above `toNumber` coercion on input value.

Some notes:
- Above logic is exactly reproducible through `Number(value)` constructor call
- As we may observe `undefined` and `null` coerce differently, which is controversial (inspiration may go to languages which do not have non-values and express `null` with `0`). Still although that in native functions `null` will coerce to `0`, it's not great advice to follow it (assuming numeric value we take is not optional but required)
- The undisclosed (for simplicity reasons) `strToNumber` logic could be described as: _if string looks as a number, then it resolves to given number, otherwise it resolves to `NaN`_.
- Values of newly introduced primitive type `symbol` are no number coercible. It's controversial seeing that all other theoretically _non-coercible_ values coerce to `NaN`. This design inconsistency was intentional and reasoning can be found in [comment on es-discuss group](http://mozilla.6506.n7.nabble.com/Why-Number-symbol-crashes-td359554.html#a359643)
- Excluding `symbol` exception, similarly as in case of _strings_ we may say that all values are _number_ coercible. The exception would be values with no primitive returning `valueOf` and not exposed `toString` method.

## Operators (Implicit Boolean, String and Number coercion).

Contrary to some other languages, JavaScript doesn't provide any language operators for objects handling as e.g. arrays concatenation, or objects merging.

__All language operators that imply some computation work strictly with primitives: booleans, strings or numbers. Whenever value of different type is provided then value is coerced to supported type.__

No object dedicated operators and implicit coercion is usually confusing for developers coming from other environments. Nice demonstration of that can be seen in (otherwise excellent) [Wat presentation](https://www.destroyallsoftware.com/talks/wat) by Gary Bernhardt

## Object Coercion

Object coercion can be described with following function:

```javascript
function toObject(value) {
  if (value === undefined) throw new TypeError();
  if (value === null) throw new TypeError();
  if (typeof value === 'boolean') return new Boolean(value);
  if (typeof value === 'string') return new String(value);
  if (typeof value === 'number') return new Number(value);
  if (typeof value === 'symbol') return createSymbolObject(value);
  return value; // obviously an object already
}
```

All values aside of _non-value's_ (so `undefined` and `null`) are object coercible.

Some notes:

- In this case `Object(value)` constructor follows the coercion logic, with only exception of not throwing for `null` or `undefined` (for such case `Object(value)` returns a new plain object)
- As we can see, `toObject` coercion (reproducible nearly 1:1 through `Object(value)`) is the only way to create object representations of symbols (as `new Symbol()` notation was specified to crash, to prevent eventual programmer mistakes). Still it doesn't mean there are use cases to do that.

