---
layout: doc-pages
permalink: /framework/database/
title: 'Database Data Format and Propagation Methods'
category: 'codebase'
lang: en
ref: database
weight: 4
---

# Database Data Format


Our data handling is centered around [dbjs](https://github.com/medikoo/dbjs) in-memory engine.

__To have good understanding of how data is handled in eRegistrations stack, it's very important to get acustomed with [dbjs documentation](https://github.com/medikoo/dbjs#dbjs)__.

## Persistent layer

At persistent layer the data format has simple form of _key/value_ pairs, where _key_ is address of specific property on a specific object and value is either serialzed value (when primitive) or it's address (if reference to other object). Such _key/value_ record is acompanied with timestamp reflected with microseconds accuracy.

Main reason for that design is that data model (schema) of eRegistrations is treated as something fluent, as not only business rules are subject to constant changes, but the project itself is meant to be easily adaptible for any business registry case.

Changing rules, introducing (or removing) a service doesn't require any specific persistent database maintanance it just works.
Other benefits that come with dbjs, is that data handling is network independent and technically data can also be easily handled in decentralized manner. Still in case of eRegistrations project that characteristics doesn't play any significant role.

While the data representation at persistent layer is of form _key/value_ (with accompanied _stamp_), the numerous engines, even relational (SQL) can be used as a storage. See [Database Engine Configuration](/installation/database-engine/) chapter and specific drivers pages for more information on that.

When using SQL engine the tables you'll see won't expose typical relational structures as you usually see in SQL, still with help of dedicated engine functionalities as e.g. views you can create a table maps which will expose data in meaningful relational form even at this layer.

## Application Process

In application processes data is loaded into [dbjs](https://github.com/medikoo/dbjs) instance, where we work with data being in meaninguful, relational form, natural JavaScript structures.

In all cases when we load data from persistent data, the data gets loaded in into dbjs instance, and it's the in-memory database objects where we can access the data

# Database Data Propagation

## Live Data Channel

There's a preconfigured live data propagation channel, through which server transmits live data to clients.

This channel is configured through Server Sent Events API (see [server](https://github.com/egovernment/eregistrations-lomas/blob/master/node_modules/mano/lib/server/sse-driver.js) and [client](https://github.com/egovernment/eregistrations-lomas/blob/master/node_modules/mano/lib/client/sse-driver.js) drivers).

Data fragment that is propagated live is decided per [application](/framework/authentication/#user-applications), and configured as what we _access rules_, with default configuration at [eregistrations/server/configure-apps-access-rules.js](https://github.com/egovernment/eregistrations/blob/master/server/configure-apps-access-rules.js#L464-L624)

## On Demand Data Channel

The database records which are not propagated via live data channel, are propaged with on-demand means, usually via typical AJAX calls, e.g. it's what happens when we browse pages of business processes table as official.
