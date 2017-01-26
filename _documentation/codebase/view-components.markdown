---
layout: doc-pages
permalink: /framework/views/
title: 'View Components'
category: codebase
weight: 9
lang: en
ref: views
---

# Views

_This section applies strictly to system pages (pages you see once you're logged in as a user). Public pages are configured with plain HTML using different utilities. Information on them can be found in [Public Pages](/framework/public-pages/) section_.

---

All application views are configured with help of [SiteTree](https://github.com/medikoo/site-tree) engine and can be found in [view](https://github.com/egovernment/eregistrations/tree/master/view) folder.

In general, idea is that all application views are configured as tree of nodes, where each node describes differences against parent node. Difference can describe new content or new attribute for specific element (elements are addressed via `id` attribute). See [View map values](https://github.com/medikoo/site-tree#view-map-values) for all possibilities.

Description of Root node of view tree can be found at [base.js](https://github.com/egovernment/eregistrations/blob/master/view/base.js) as you see it defines some default containers for `<body>` element. At this level we also define content for `<head>` element, still it's done in end systems in module which extends `base.js` with system specific customizations.

Then we can see [user.js](https://github.com/egovernment/eregistrations/blob/master/view/user-base.js) view which extends `base.js` with content for specified elements, and so one other views extend other views etc. etc.

There is __one view tree__ for all eRegistrations pages, and pages used in all applications map to different nodes of it. URL to view tree node mapping is done in `apps/{ appName }/routes.js`.

See below diagram that shows relationship between few main view nodes:

<a href="/img/view-engine.png" download="view-engine.png"><img src="/img/view-engine.png" width="1100" /></a>

For template language we use [domjs](https://github.com/medikoo/domjs), therefore we use [domjs-site-tree](https://github.com/medikoo/domjs-site-tree) as our `site-tree` engine. For more information get familiar with documentation of following projects:

- [site-tree](https://github.com/medikoo/site-tree) - Base view engine
- [domjs](https://github.com/medikoo/domjs) - DOM template language
- [domjs-site-tree](https://github.com/medikoo/domjs-site-tree) - `domjs` extension to `site-tree` view engine
- [controller-router](https://github.com/medikoo/controller-router) - Base (url -> controller) router
- [site-tree-router](https://github.com/medikoo/site-tree-router) - `site-tree` extension to `controller-router`. It's the router that provides us with `view -> url` mappings.

## System specific customizations

In eRegistrations we provide default view structure but we allow to customize chosen elements on system level.

It is achieved by exposing a `_` prefixed exported function in view, which can be overridden in specific system. e.g. in eRegistrations in `user.js` view we expose [empty service box list](https://github.com/egovernment/eregistrations/blob/master/view/user.js#L83) then in end system will fill it, as e.g. in [demo project](https://github.com/egovernment/eregistrations-demo/blob/master/view/user.js#L23-L44)

## Reusable view components

Reusable DOM structures are usually configured as view independent components in `view/components` folder. Thing is that view nodes itself or its direct content cannot be used in two different places of view tree. Therefore any components that may appear in more than one view node are generalized to `view/components` folder.

## Styles for view components

CSS rules are maintained separately in CSS files, and that is well documented in [CSS Guidelines](/framework/styles) section.

## Template functions

### Basic DOM elements  generation methods:

For template language we use [domjs](https://github.com/medikoo/domjs), it exposes the functions that create all possible HTML DOM elements: `a`, `abbr`, `address`, `area`, `article`, `aside`, `audio`, `b`, `bdi`, `bdo`, `blockquote`, `br`, `button`, `canvas`, `caption`, `cite`, `code`, `col`, `colgroup`, `command`, `content`, `data`, `datalist`, `dd`, `del`, `details`, `dfn`, `dialog`, `div`, `dl`, `dt`, `em`, `embed`, `fieldset`, `figcaption`, `figure`, `footer`, `form`, `h1`, `h2`, `h3`, `h4`, `h5`, `h6`, `header`, `hr`, `i`, `iframe`, `img`, `input`, `ins`, `kbd`, `keygen`, `label`, `legend`, `li`, `link`, `main`, `map`, `mark`, `menu`, `meta`, `menuitem`, `meter`, `nav`, `noscript`, `object`, `ol`, `optgroup`, `option`, `output`, `p`, `param`, `pre`, `progress`, `q`, `rp`, `rt`, `ruby`, `s`, `samp`, `script`, `section`, `select`, `small`, `source`, `span`, `strong`, `style`, `sub`, `summary`, `sup`, `table`, `tbody`, `td`, `template`, `textarea`, `tfoot`, `th`, `thead`, `time`, `tr`, `track`, `u`, `ul`, `var`, `video`, `wbr`.

Each element function has signature as `[[attributes], item1, ...itemn`

- `attributes` can be provided as plain object with first argument. It may look as `{ class: 'some-component' }`
- `item1, ...itemn` DOM elements, as generated by other domjs functions, or created directly using DOM API. Additionally supported are strings (will be converted to text nodes), and any other objects providing `toDOM` method (through this method desired DOM will be rendered and injected)

e.g. following calls will behave as expected:

```javascript
div({ class: 'foo' }, p("Paragraph text"));

div(p("Paragraph text"));
```

### DOM Lists

The elements as `ol`, `optgroup`, `select`, `tbody` and `ul`, support dedicated list signature (one similar to `Array's` `map` method): `list, callback[, thisArg]`

- `list` - list of objects for which we want to generate individual elements (e.g. `li` in case of `ul` or `ol`). This can be [observable list](https://github.com/medikoo/observable-set#observable-set), in such case the DOM will update automatically with list.
- `callback` - Render function for list item
- `thisArg` - (optional) eventual `this` context for render function.

#### `list(list, callback[, thisArg])`

Container agnostic list configurator. It follows mechanisms described above. Still it doesn't come with a container. It means we can use this mechanisms for not list dedicated elements (e.g. `div`) or use two list configurations for one list container (e.g. `ul(list(...), list(...))`)

### Form controls generation for DBJS properties

Normally you generate forms through `section.toDOMForm` (see [Form Sections](http://localhost:4001/framework/model-form-sections/) documentation for more info on sections).

Internally all controls are generated with renders configured at [dbjs-dom](https://github.com/medikoo/dbjs-dom#input-bindings) project. See it's documentation for description of each kind of control.

Occasionally you may be forced to generate input for a property individually.
There are two special ways to do that:

- `field({ dbjs: obj._propertyName })` will generate input control together with label and statuses reflecting on whether value is required and whether it was saved. All other options aside `dbjs` will be passed directly to [dbjs-dom](https://github.com/medikoo/dbjs-dom#input-bindings) project
- `input({ dbjs: obj._propertyName })` . All other options aside `dbjs` will be passed directly to [dbjs-dom](https://github.com/medikoo/dbjs-dom#input-bindings) project.

### Form button - `postButton(attrs[, ...sideContent]`

It will generate a button wrapped with a `<form>` element, and with `attrs` we pass attributes for `<form>` and content for a `<button>` (via `attrs.value`).
Additionally we can designate specific `class` for a button via `attrs.buttonClass`.
If `attrs.method` is not provided then `method` of `<form>` will be set to `post`.

Additionally we may provide `attrs.confirm` (can be observable), through which we accompany button with `confirm` alert (`attrs.confirm` is expected to resolve with message we want to show).  If we rely on `attrs.confirm` we need to ensure that `domjs-ext/post-button.legacy` is loaded into `client/legacy` of app.

Eventual `sideContent` is added aside a button (after `<button>` into wrapping `<p>` element, therefore it's expected to have _inline_ semantics).

### Script generation

Additional special handling is configured for `script` element. To it we may pass normal function and it's body will be serialized and unserialized into result script content.
It's important that within this function you should not relate in anyway to outer scope (serialization/unserialization process doesn't preserve [closure](http://help.eregistrations.org/fundamentals/closures/) context).

Side way we can pass arguments into script function. They can also be reactive observable values (handling of such is backed by [domjs-reactive-script](https://github.com/medikoo/domjs-reactive-script) handler.

```javascript
// Internal function receives unserialized variables that were send after function
script(function (containerId, formId) { 
   // .. script content
}, containerId, formId); // We send values to be provided to script functions
```

### HTML string injection

It is possible to generate dom out of HTML string. Still this method should be used only for well justified use-cases:

```javascript
html('<div>Some html string </div>); // Returns list of DOM nodes
```

### Shortcut for calling `$` utils

When we want to decorate some generated DOM with `$` util (e.g. `$.selectMatch`), then instead of writing something as;

```javascript
script(function () { $.selectMatch(arg1, arg2); });
```

We can rely on `legacy` shortcut:

```javascript
legacy('selectMatch', arg1, arg2);
```

It will be translated to DOM as generated directly with `script` function.

### URL builder - `url([pathToken1[, pathToken2[, ..pathTokenN]]])`

With `url` we can provide dynamically resolved url to `href` or `action`, or we can just use it for clarity of providing url tokens as separate arguments.
Each token can be observable. If token starts with `?` it is assumed it contains part designated for _query_ part, if token starts with `# it is assumed to contain `hash` that needs to be added at end of url.

### Observability related extensions

In all below extensions observables values and sets (where list is expected) are supported as arguments. If any of the involved arguments was observable, the result of the function is also observable value

#### `_if(condition, onTrue, onFalse)`

Reactive equivalent of `if`.

_It is named `_if` and not `if` as `if` is reserved ECMAScript keyword_

#### `and(value1, value2, ...valuen)`

Equivalent of `&&` operator, and similarly it will resolve with first falsy item or item provided as last if no falsy item was provided.

#### `eq-sloppy(a, b)`

Equivalent of sloppy equality (`==`) operator.

#### `eq-some(list, value)`

Resolves to true if `list` (can by dynamic) contains `value`

#### `eq(a, b)`

Equivalent of strict equality (`===`) operator.

#### `gtOrEq(a, b)`

Equivalent of greater or equal (`>=`) operator.

#### `gt(a, b)`

Equivalent of greater (`>`) operator.

#### `ltOrEq(a, b)`

Equivalent of less or equal (`<=`) operator.

#### `lt(a, b)`

Equivalent of less (`<`) operator.

#### `mmap(value, callback)`

Mapping function for observable value. It's `mmap` and not `map` to not shadow `map` domjs function that generates `<map>` element.

#### `not(value)`

Equivalent of `!` operator.

#### `or(value1, value2, ...valuen)`

Equivalent of `||` operator, and similarly it will resolve with first truthy item or if not truthy item was provided, the last item

#### `resolve(value[, propName1[, propName2[, ...propNameN]]])`

Resolves property chain dynamically. It's helpful in situation where some properties returning objects may at some point resolve to `null` (e.g. `resolve(user, 'currentBusinessProcess', 'businessName')` will resolve to `undefined` if there's no `currentBusinessProcess` assigned to user, but once it's set it will resolve with businessProcess `businessName`).
