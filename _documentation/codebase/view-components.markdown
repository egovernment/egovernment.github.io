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

In eRegistrations we provide default view structure but we allow to customise chosen elements on system level.

It is achieved by exposing a `_` prefixed exported function in view, which can be overriden in specific system. e.g. in eRegistrations in `user.js` view we expose [empty service box list](https://github.com/egovernment/eregistrations/blob/master/view/user.js#L83) then in end system will fill it, as e.g. in [demo project](https://github.com/egovernment/eregistrations-demo/blob/master/view/user.js#L23-L44)

## Reusable view components

Reausable DOM structures are usually configured as view independent components in `view/components` folder. Thing is that view nodes itself or its direct content cannot be used in two different places of view tree. Therefore any components that may appear in more than one view node are generalized to `view/components` folder.

## Styles for view components

CSS rules are maintained separetely in CSS files, and that is well documented in [CSS Guideliness](/framework/styles) section.
