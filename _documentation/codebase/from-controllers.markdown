---
layout: doc-pages
permalink: /framework/form-controllers/
title: 'Form (POST) Controllers'
category: 'codebase'
lang: en
ref: form-controllers
weight: 12
---

# Form (POST) Controllers

All user invoked changes are triggered via `<form>` submissions, where each `<form>` has configured controller which is meant to validate and process request.


Controllers that handle POST submissions are configured with help of two generic utilities: [controller-router](https://github.com/medikoo/controller-router), [post-controller-router](https://github.com/medikoo/post-controller-router) and two handler modules, configured in mano, one for [client](https://github.com/egovernment/eregistrations-starter/blob/master/node_modules/mano/client/post-router.js) and one for [server](https://github.com/egovernment/eregistrations-starter/blob/master/node_modules/mano/server/post-router.js).

This document complement documentation of above utilities, with information that's needed to configure controllers in eRegistrations systems.

## How to configure controllers

We configure controllers only in _controller_ folder of an [application](/framework/authentication/#user-applications).

The controllers are configured with _route key_ (described below) which indicates for which action path given controller is configured, and controller configuration, which can be empty (in such case we pass `true`) if we're fine to rely on defaults.

Internally controller resolution goes through following steps:

1. __Match__ (optional), if url contains some dynamic token, then we match whether the url address any valid entity, if so we resolve such entity and expose on provided context (named also _controller event_).
2. __Validate__, at this stage we validate whether requested changes are valid and do not break data consistency or touch data which we do not allow to change.
3. __Submit__, given change is applied to database.
3. __Redirect URL resolution__ (optional), if we wish to redirect user to some other page, then at this stage redirect url is resolved


### Route keys

Controllers are configured via routes configuration, where key is a path route for POST request, and value is controller configuration.

If path is static e.g. `/guide/` then key is `guide`, if path is dynamic, e.g. `/branch/9sdf323034/` (where second token is specific branch id), then key is mix of static string and content to be used for regular expression, in that case:
`branch/[0-9][0-9a-z]+`.

### Controller configuration options

#### match
Should be provided when we deal with a dynamic key.  
`match` function would be called with tokens resolved from url. It should return _false_ if url seems malformed and doesn't address a valid entity. In other case _true_ should be returned.

Any resolved objects within `match` function, should be assigned on the context (`this`), that way they're accessible to `validate` and `submit` functions which will be called with same context.

#### validate
Optional. Defaults to common [validate](https://github.com/egovernment/eregistrations-starter/blob/master/node_modules/mano/utils/validate.js) logic.

#### submit
Optional. Defaults to common [submit](https://github.com/egovernment/eregistrations-starter/blob/master/node_modules/mano/utils/save.js) logic.

#### redirectUrl
Optional. Redirection url, if we want to switch interface to other page after successful submission.
This can also be a function, where we conditionally resolve to which url we want to redirect the user.

#### formHtmlId
Optional. If from is placed in a dialog (as e.g. login or inventory), or is in non initially visible part of a page (e.g. bottom of it), we should provide a html id of it. This it to assure that in legacy mode, after page reloaded user is presented again with form in front of him. (_#{formHtmlId}_ would be added to redirection url).

---

All options apart of `match` (when we deal with dynamic key) are optional, if we don't plan to override any of it. We may make our configuration as:

```javascript
exports['some-action'] = true;
```

### Server handled submissions

If given request is meant to be always processed by server (e.g. login, or payment processing) then additional separate configurations for it are placed in _client.js_ and _server.js_.

e.g. we may say to client, that this request should be processed remotely:

_client.js_

```javascript
exports['server-only-action'] = {
  remoteSubmit: true
}
```

#### remoteSubmit
If we pass _true_, handler proceeds with [default remote submit](https://github.com/egovernment/eregistrations-starter/blob/master/node_modules/mano/client/post-router.js#L19) logic. We can override that behavior, by passing our own function handler.

#### processResponse
Additionally we may provide special response handler. Normally application does nothing after server propagated request, but if we want to react to it in specific way, or need to parse message send from server, then we need to provide `processResponse` function.  
e.g. after login, we want to [wait for data sync and reload page](https://github.com/egovernment/eregistrations-starter/blob/master/node_modules/mano-auth/controller/client/register-and-login.js#L4)


### Pre-prepared configurations

Thanks to them, we don't have to repeat same configuration across different applications. All of them grouped by context applications can b found in [eregistrations/controller](https://github.com/egovernment/eregistrations/tree/master/controller) folder.
