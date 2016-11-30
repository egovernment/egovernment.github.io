---
layout: doc-pages
permalink: /fundamentals/other-objects/
title: 'Other Object Types'
category: 'fundamentals'
lang: en
ref: other-objects
weight: 4
---

# Other Object Types

All other types (non-coercible and which do not follow duck typing recognition) are internally
recognized purely by _internal slots_ (not accessible at language level). At implementation level this mechanism is very similar to _duck typing_, as technically instances of same type even if initialized by different constructor (from different realms, e.g. different window frames), are recognized without issues.
Still on language level those object can be successfully created only using native constructor, as it's only their internal logic which applies mentioned _internal slots_.

Some example, e.g. any `Date` instance shares internal `[[DateValue]]` slot, that simply host primitive number milliseconds stamp value.
We're not capable to emulate `Date` instance without using native constructor as e.g.:

```javascript
var dateLike = {
  valueOf: function () { return 1475929220298; }
};
Date.prototype.getFullYear.call(dateLike); // Crash!
```

The object must be created via `new Date(..)` to receive `[[DateValue]]` slot.

Still we can somehow walk around this, and e.g. create valid `Date` instances that do not share `Date.prototype`, as e.g.:

```javascript
var dateLike = Object.setPrototypeOf(new Date(1475929220298),
  Object.prototype);
dateLike.getFullYear; // undefined
Date.prototype.getFullYear.call(dateLike); // 2016
```

This method can be applied on any type that works through _internal slots_, still it's rare you'll find this method in practice. It can actually be troublesome to deal with such objects, and there not really use cases for doing that.

Single use case I approached is when we want to create _callable_ entities, which derive from different _prototype_ than `Function.prototype`. For example instances of _promises_ in [deferred](https://github.com/medikoo/deferred#deferred) are such _callable_ entities (calling `promise()` is an alias for calling `promise.then()`), and that was achieved as with date example above. Anyway it's extremely rare you'll find such examples in user land.
