---
layout: doc-pages
permalink: /fundamentals/modules/
title: 'NCJS Modules'
category: 'fundamentals'
lang: en
ref: modules
weight: 9
---

# NCJS Modules

Node.js was introduced together with its variant of CommonJS modules implementation.
Back then CommonJS was movement to standardize various aspects of JavaScript ecosystem, with goal of interoperability on server side, and author of Node.js decided to rely on one of the proposed standards.

Version of CommonJS modules that comes with Node.js derives slightly from proposed standard, however in a good way. Still it's not perfectly precise to refer to it as _CommonJS modules implementation_, and Node.js contributors tend to refer to it as NCJS modules.

NCJS modules system uses traditional JavaScript syntax, is backed by simple resolution rules (explained below), and with help of dedicated bundler, they are perfectly applicable to any non Node.js ECMAScript3 environment (without a need of module code recompilation).

In eRegistrations all codebase dedicated for both client and server-side is organized with NCJS modules. As a client-side bundler [Webmake](https://github.com/medikoo/modules-webmake#modules-webmake) is used.

You can follow extensive documentation of modules in [Node.js documentation](https://nodejs.org/dist/latest-v7.x/docs/api/modules.html), still mind that it also cover characteristics which is very specific to Node.js environment, and on which we should not rely when writing cross-environment NCJS modules.

See below documentation on concepts that are important to work successfully with modules writing code for both server and client side.

## Module environment characteristics

At resolution point module body is resolved as [function body context](https://nodejs.org/dist/latest-v7.x/docs/api/modules.html#modules_the_module_wrapper), and while technically, same as in function we can refer to `return`, `arguments` and `this` constructs, those should never be used (having them available should be treated as side-effect implementation result). `this` object equals to  `exports` (more on `exports` in _export_ rules below). Still in module main scope we should never refer to `this`. Convention is to refer to `exports` or `module.exports` only.

List of local module variables provided to module body by implementation (it's important to note that they're not *global* variables, as some assume).

- `module` - Hosts some implementation specific properties, and most importantly `exports` property which after module evaluation becomes an exported value of a module (see exports values section below)
- `exports` - Initially an alias for `module.exports` (see exports values section below for more info)
- `require` - Function through which we can import other modules (see import section for more info)
- `__dirname` - (only on server-side) full path to folder in which module file resides
- `__filename` - (only on server-side) full path to module file

## 1. Exporting chosen value(s)

Via `module.exports` or `exports` we decide which values we want to export out of module, so they're accessible to module that imports it.

There are two common patterns:

### 1.1 Export dictionary of values

Used more rarely,  in such case we rely strictly on initially provided `exports` object and assign to it properties we want to export as e.g.

```javascript
exports.foo = fooValue;
exports.bar = barValue;
// etc.
```

### 1.2 Export single value (of any kind)

To make module's export value a specific single value, we should rely on `module.exports`.

It's the only way we can export directly value of other type than plain object (as initially provided via `exports`).

We can export a function:

```javascript
module.exports = function (...) { ... }
```

any primitive:

```javascript
module.exports = 'some string';
```

or even _nothing_ (though use cases are rare):

```javascript
module.exports = null;
```

It's important to acknowledge that with this kind of export __we should never rely on `exports` variable__, as: with moment or reassignment of `module.exports`, the `exports` stops being its direct alias and what we assign to leftover `exports`objects stops having any effect.  
Sometimes when we want to use `module.exports` and afterwards for convenience still rely on `exports`, the notation we may use is:

```javascript
module.exports = exports = exportedObject
```

## 2. Importing other modules

We import other modules via `require` function.

We can import either _local_ (relative to folder in which module resides) module or _external_ (installed externally and placed in one of `node_modules` folders).

The _local_ and _external_ require is distinguished by fact that _local_ require always starts with relative or absolute path reference, so either `./`, `../` or `/`. If path provided to `require` doesn't start with neither of those, it means it's about require of _external_ dependency.
It's important to note, that while supported, we should never really use _absolute_ path references (as obviously those won't work if we want to run our code on other computer).

### 2.1 Local import

As mentioned above, starts with `./`, `../` (for relative reference) or `/` (for absolute resolution), still that variant should never be used)

```javascript
var moduleFromSamePath = require('./module-in-same-path');
var moduleFromParentPath = require('../module-in-upper-path');
```

The generic implementation of modules resolution doesn't prevent in anyway reaching for modules that are out of project path, or are in one of `node_modules` folder. Still _local_ requires should be used only for modules that reside in same package in which the module that requires it is in.

### 2.2 External dependency import

All require paths which do not start with `./`, `../` or `/` are treated as external.

In such case external dependency is searched in `node_modules` folders, up to the file-system root.

e.g. in case of:

```javascript
var extModule = require('ext-dependency/foo');
```

Search would go as:

- if there's a `./node_modules/ext-dependency` folder
  - require in it `./foo` module
- else: if there's a `../node_modules/ext-dependency` folder
  - require in it `./foo` module
- etc. (until there's no further parent folder in which we can search for `./node_modules/ext-dependency`)

### File extensions preference

It's common to not provide the file extension with require path, so e.g. `foo.js` module is usually required writing simply `require('./foo')`.

Still it's important to know that Node.js aside of supporting JavaScript files, also supports few other module types, and search of required module doesn't end with search for file that ends with `.js` extension.

Exact flow of file resolution, assuming that e.g. we required `./foo`:

- if there's a file exactly named `foo`:
  - Load it as JavaScript module
- else: if there's a file exactly named: `foo.js`
  - Load it as JavaScript module
- else: if there's a file exactly named: `foo.json`
  - Load it as JSON module
- else: if there's a file exactly named: `foo.node`
  - Load it as binary (node C compiled) module
- else: if there's a folder exactly named: `foo`
  - Follow with folder module resolution (explained in next section)

### Folder import

If provided path to `require` doesn't match any existing file (of which resolution is explained section above), then (assuming that folder of given name exists) resolver tries to apply folder resolution logic, which goes as follows in folder path:

- if there's a `package.json` JSON file, with value provided at `main` property:
  - Load module at path provided at `main` property
- else: if there's an `index.js` file
  - Load it as JavaScript module
- else: if there's an `index.json` file
  - Load it as JSON module
- else: if there's an `index.node` file
  - Load it as binary (node C compiled) module

Node.js documentation hosts: [High-level resolution algorithm in pseudo code](https://nodejs.org/dist/latest-v7.x/docs/api/modules.html#modules_all_together) which should answer most questions.
