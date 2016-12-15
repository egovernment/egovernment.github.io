---
layout: doc-pages
permalink: /framework/architecture/
title: 'Architecture Overview'
category: 'codebase'
lang: en
ref: architecture
weight: 1
---

<span class="label label-warning">To be updated</span>

# eRegistrations Application Architecture

## Programming language

**eRegistrations** is full-stack JavaScript project, that means both **client** and **server** side logic is programmed in **JavaScript**.

Server-side processes are run on [Node.js](https://nodejs.org/en/) platform, client-side interfaces are configured with goods of HTML5+ API's.

When JavaScript language standard (ECMAScript) is concerned, framework is written in ECMAScript 5, and [shimable]() ECMAScript2015+ compliant code.

In modern engines supporting the ECMAScript5 and needed HTML5 interfaces application runs in "Single Page" mode, for older the server-side rendered HTML version is provided.

There's also small subset of code written for ECMAScript3+ compliant engines, which ensures that some dynamic interface behaviors also work in legacy browsers as IE8 (e.g. modal show/hide, form field show/hide). To this layer of code we internally refer as _legacy layer_.

While  code of _legacy layer_ is also run in "Single Page" mode, it's the only JavaScript code coming from our origin that is run on client when application is served through server-side rendering mechanism.

## Codebase format

Whole project codebase is organized through [NCJS modules](/fundamentals/modules)

External dependencies are organized [npm](https://npmjs.org/) packages and placed in `node_modules` folder. Code of those dependencies is also committed to system main repository and version controlled with project codebase.

## Processes architecture

### 1. Environments

System code is run on both _server_ and _numerous clients_ (modern browsers), both can be seen as __environments__.

### 2. Processes

Each _environment_ runs JavaScript __processes__.

On server we have:

- Main process (running various services, e.g. HTTP server)
- In-memory database process, running on demand database rules (out of which state of files is computed) and services that depend on them
- Server-side renderer process which renders on-demand HTML for legacy browsers
- (optionally) system specific processes

Server processes main programs are usually located in `/server/processes`

On client each window/tab opened in given browser will constitute separate application __process__.
There are no other individual processes (e.g. created through workers) that are configured for application to run.

Client processes main programs are organized per application and are located in `apps/{ appName }/client/program.js`

### 3. Services

Each _process_ runs various __services__.

On server the processes may run services as:

- HTTP server
- Persistent Database Driver
- Authentication service
- Reminders malier
- Application Number generator
- In-Memory Database
- Images processor (thumbs and previews generator)
- Notifications mailer
- Server-side HTML renderer (modern SPA client emulator)

While on client it would be:

- Persistent Database Driver
- (M) In-Memory Database
- (V) View engine
- (C) Requests controller

This list is by no means complete, it's just short overview to provide the idea of services as implemented in eRegistrations framework.

### 4. Other resources

Our application processes handles data coming from other resources as:

- File system
- Persistent Database (on server it can be: MongoDB, any *SQL or LevelDb, on client: localStorage)
- Cloudfront (external CDN that allows us to reduce latency for static files serving)

---

Below there's a diagram exposing a very general overview of our architecture, where you can see:

- _Environments_: in light green
- _Processes_: in yellow
- _Services_: in red
- _Other resources_: in grey

<img src="/img/eregistrations-processes.png" style="width:100%"/>
