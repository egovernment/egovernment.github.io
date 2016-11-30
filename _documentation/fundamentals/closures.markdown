---
layout: doc-pages
permalink: /fundamentals/closures/
title: 'Closures & Variables Visibility'
category: 'fundamentals'
lang: en
ref: closures
weight: 5
---

# Function Closures & Variables Visibility

In eRegistrations we strictly rely on [strict mode](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode), and at this point we do not use introduced with ES2015 `let` and `const` statements. Therefore in below documentation we ignore characteristics of`sloppy` mode, and focus purely on `var` declarations.

Variables are declared with `var` keyword

All variables must be declared (trying to use undeclared variable will crash execution)

As in eRegistrations we work strictly with [NCJS modules format](http://localhost:4001/fundamentals/modules/), we never expose or rely on custom global variables. The only values that we access from global scope are native JavaScript language constructs, and extra local variables implied through NCJS modules format (`require`, `module`, `exports`, and on server-side `__dirname` and `__filename`).


Closure (which also translates as scope) is a mean to describe a variables visibility. Closures are created purely by `function` expressions or declarations (no `if`, `switch` or other statement creates a new closure).

Variables are visible only in closure in which they were created and child closures but no parent closures, as explained in below example:


```javascript
var outVar = 'foo'; // Visible everywhere

var aFn = function (aArg) {
  var aVar = 'foo'; // Visible only scope of aFn and bFn

  var bFn = function (bArg) {
    var bVar = 'bar'; // Visible only in bFn scope
  };
};
```
