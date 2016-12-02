---
layout: doc-pages
permalink: /fundamentals/asynchrony/
title: 'Asynchronous Interfaces'
category: 'fundamentals'
lang: en
ref: asynchrony
weight: 8
---

# Asynchronous Interfaces

In JavaScript since its very beginning asynchronicity is a first class citizen.

Asynchronous handling is mainly about multi-tasking. While using single-threaded architecture,
we can handle external tasks intelligently, as instead of introducing locks (handling common to non JS environments)  while we wait for some external data (e.g. from external database) we can register a callback and proceed with other tasks.

Handling asynchronicity tends to also be difficult (it's definitely more challenging then working with linear synchronous flow). Below we shortly describe popular patterns for handling asynchronicity in JavaScript ecosystem.

## 1. Event emitter

Introduced initially very early with first DOM implementation. It's representation of _observer_ pattern known from OOP languages.

Ideal for handling repetitive actions that can occur multiple times, however in DOM used also for one time events (e.g. `window.onload`).

Standardized DOM implementation goes as:

```javascript
// Register listener
obj.addEventListener('load', listener = function (event) {
  // Loaded
});

// Unregister listener
obj.removeEventListener('load', listener);

// Dispatch event
obj.dispatchEvent('load', …args);
```

It can be found on browser native DOM elements.

In non DOM related code, we rely on simpler event emitter implementation (which does not involve [bubbling](http://stackoverflow.com/questions/4616694/what-is-event-bubbling-and-capturing)), which is also very familiar to one used in [Node.js](https://nodejs.org/dist/latest-v7.x/docs/api/events.html#events_events).

Most often we rely on [event-emitter](https://github.com/medikoo/event-emitter#event-emitter) implementation, which usage goes as:

```javascript
// Register listener
obj.on('load', listener = function (event) {
  // Loaded
});

// Unregister listener
obj.off('load', listener);

// Dispatch event
obj.emit('load', …args);
```

It's exposed on most non-DOM event emitting interfaces you'll deal with in eRegistrations stack.

## 2. Node.js style callback

Dedicated for one time calls, introduced with Node.js callback style, is probably simplest representation of asynchronous request you can get, and it attributes to success of Node.js platform.

It goes as simple as:

```javascript
asyncFn(arg1, ..argN, function (err, data) {
    if (err) {
      // Handle error
      return;
    }
    // Process data
});
```

- Resolution callback is passed as last argument to asynchronous function
- First argument taken by callback is eventual error, which needs to handled in all cases
- Second argument is success result, assuming asynchronous call didn't resolve with error.

This notation is used extensively in Node.js API, and you're forced to work with it when working with Node.js API directly. Still this pattern is difficult to work with, when we deal with complex asynchronous flows, and running into that's quite common when working with Node.js

As a remedial for that, the Promise pattern that is way more composable was accepted in community as standard for asynchronous handling, also in eRegistrations stack we rely on promises heavily.

If you need to work with Node.js API, more specifically file system, then you should rely on [fs2](https://github.com/medikoo/fs2) package, it provides you all asynchronous functions of Node.js [fs](https://nodejs.org/dist/latest-v7.x/docs/api/fs.html) but in promise returning form.

## 3. Promise

As mentioned in previous section, the promises are currently de facto standard in asynchrony handling, and this pattern is what we rely on heavily in eRegistrations stack.

Promise is an object that represents eventual value which may already be available or is expected to be available in a future. One promise can be passed to many observers, also promise host methods that makes easy further processing of result declarative way.
Additional advantage is that success and error flows are separated in case of promises, and are handled with different callbacks

```javascript
var promise = readFile(path);

promise.done(function (content) {
 // Work with file content
}, function (err) {
  // Handle eventual file read error
});
```

In this chapter I'm not going to disclose details on promises. For more information check resources available on web, and:

- [Asynchronous JavaScript Interfaces: Promises](https://medikoo.com/asynchronous-javascript-interfaces/promises/?notes) Presentation in which we can learn about promises API by writing simple implementation of that pattern
-  [Deferred project](https://github.com/medikoo/deferred#deferred). Documentation of library that we use extensively in eRegistrations stack
