---
layout: doc-pages
permalink: /core/
title: 'eRegistrations Framework'
lang: en
ref: core
---

# Description of the core of the system

eRegistrations is a full-stack JavaScript project, on server-side backed by [Node.js](https://nodejs.org/en/) processes and on front-end side taking advantage of the modern HTML5 API’s.

In modern browser engines it runs in a single-page mode with its state mostly being independent of a server. In other words: traversing application does not invoke page reloads and in many cases is independent of state of a network connection. Support for older engines (going down to as low as Internet Explorer 8) is ensured via SSR (Server-Side Rendering) technique, through which pre-generated HTML pages are served to the users.

Advantage of using one programming language for both server and client environments allowed to increase code reuse among both sides to best possible level. Any model schemas, validation rules, views, controllers utilities, which might be used on either of sides are written once and maintained in single place.

At the heart it stands on unique data handling approach, where all data at persistent layer level is expressed with key-value pairs, exposing just very basic relational forms (but which still allow in logical manner access any intended filtered and reduced data collections), and in application itself it reaches fully relational, validated form that allows to work with data using natural language forms (sets, maps, properties backed by common and intuitive type definitions)

This design choice was driven by a requirement of having a generic, easily configurable, solution that can support any kind of registration process, with any processing steps or complex rules it may require. Additionally goal was to be able on published instance without a hassle, on-spot, change the rules of preconfigured registration services (add new ones, remove, tweak existing), all that with respect to the files which are in a middle of a process or have it already completed. Incorporating such changes is possible without pursuing challenging back-end work as e.g. schema reconfiguration or data migration which usually is required in other solutions that serve similar use case.

The benefits of used event-based database engine (and adding to this extensive codebase versioning) go even beyond mentioned characteristics, as it also exposes, very important from security point of view, capability to restore any previous (down to microsecond level accuracy) state of application, covering all layers of a stack: configured model rules, codebase in general  and stored database data.
All record modifications are naturally stored and tracked down at fine grain level, where we not only know when every individual property of an object was updated and have all the history of its changes, but we also know which client or server session is responsible for any of this change. This, with additional server logs provides very powerful mechanism that allows to successfully investigate eventual data inconsistency issues or events of malicious nature.

The working eRegistrations instance can be configured by trained JavaScript developer (of intermediate level), with a time frame that can be as short as one week when we assume simple case. In reality configuration time depends on complexity of intended registration process.

All system components are open sourced on permissive [MIT license](http://choosealicense.com/licenses/mit/). More technical details about our stack can be found at [framework documentation section](http://help.eregistrations.org/codebase/).

The system currently has four production instances and serves as slick business registration service to citizens of [Salvador](https://miempresa.gob.sv/), [Guatemala](https://minegocio.gt/), [Argentina](http://elomas.gob.ar/) and [Tanzania](http://tiw.tic.co.tz/).

If you’re interested in deploying an eRegistrations system for your own needs, and you’d like to receive our support please contact us at [info at eregistrations . org](mailto:info@eregistrations.org).
