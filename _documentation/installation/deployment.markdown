---
layout: doc-pages
permalink: /installation/deployment/
title: 'Production Server Deployment'
category: 'installation'
weight: 8
lang: en
ref: deployment
---

# Production Server Deployment

All eRegistrations applications that are hosted on UNCTAD server are served from `eregistrations.org` server.

## Server Access

Access to that server is provided to chosen developers, by adding developer's public key to `.ssh/authorized_keys` for `eregistrations@eregistrations.org` account.

It's the only way access is provided (`eregistrations` account has no password setup)

Application processes are maintained via [pm2](http://pm2.keymetrics.io/) process manager.

[Monitoring panel](https://app.keymetrics.io/#/bucket/579218e1b913defd31e25c1d/dashboard) showcasing health of all application proceses is accessible for invited users.

## Deploy assignments

The deployment role for each production instance is assigned to one developer (to avoid eventual conflits).

Below is a table presenting current assignments:

- __Guatemala__: Marek Tuchowski
- __Lomas__: Kamil Gruca
- __Salvador__: Marek Tuchowski
- __Tanzania__: Kamil Gruca

## How often do restarts should be handled?

### Production systems

If there any updates pending, then __once a day__, at time when there's lowest traffic on system (so e.g. for central america, in the morning or midday CET time).
Additional restarts may be requested in some urgent cases, e.g. critical bug fixing

### Development systems

If there any updates pending, then ideally __twice a day__, before lunch and before an end of a day.

## How to restart applications

When logged in to server, we can see the list of all running applications via running command `pm2 list`

```
$ pm2 list
● Agent online - public key: 9y5fsl6wlc8ybt3 - machine name: Ubuntu-1404-trusty-64-minimal - Web access: https://app.keymetrics.io/
┌─────────────────┬────┬──────┬───────┬────────┬─────────┬────────┬──────────────┬──────────┐
│ App name        │ id │ mode │ pid   │ status │ restart │ uptime │ memory       │ watching │
├─────────────────┼────┼──────┼───────┼────────┼─────────┼────────┼──────────────┼──────────┤
│ els             │ 0  │ fork │ 19491 │ online │ 0       │ 62m    │ 622.043 MB   │ disabled │
│ gt-dev          │ 1  │ fork │ 19500 │ online │ 0       │ 62m    │ 311.262 MB   │ disabled │
│ gt              │ 2  │ fork │ 24991 │ online │ 0       │ 46m    │ 350.273 MB   │ disabled │
│ ldz-dev         │ 3  │ fork │ 19526 │ online │ 0       │ 62m    │ 125.492 MB   │ disabled │
│ ldz-old         │ 4  │ fork │ 19535 │ online │ 0       │ 62m    │ 92.164 MB    │ disabled │
│ ldz             │ 5  │ fork │ 19556 │ online │ 0       │ 62m    │ 193.238 MB   │ disabled │
│ proto           │ 6  │ fork │ 19593 │ online │ 0       │ 62m    │ 199.742 MB   │ disabled │
│ tz-dev          │ 7  │ fork │ 19610 │ online │ 0       │ 62m    │ 117.992 MB   │ disabled │
│ tz              │ 8  │ fork │ 19643 │ online │ 0       │ 62m    │ 371.363 MB   │ disabled │
│ notify-on-crash │ 9  │ fork │ 19664 │ online │ 0       │ 62m    │ 31.395 MB    │ disabled │
└─────────────────┴────┴──────┴───────┴────────┴─────────┴────────┴──────────────┴──────────┘
```

Application name reflects path at which it is located in home folder. To fully update running application we need to pursue following steps:

__Important: It should be ensured that application offline time is as short as possible__

##### 1. Confirm on pending changes of translations or global data

It can be confirmed using `git status` command. If there are no pending changes we can follow with point __2__, otherwise we need to submit pending changes to master, and that can be done as follows:

- Stop server with `pm2 stop {app-name}` command
- Then being at application root run `update-translations`. It'll commit changes to `server-translations` branch, push it to orign repository and automatically pull request for this change will be created
-  We need to briefly review created pull request on Github. There can be a rare scenario when: Messages that relate to model values of type `StringLine` (e.g. `legend`) was translated using new line characters. This issue is hard to spot by eye, but can be easily validated (in your dev envorment) by running `npm run quick-start` or simply requiring `server/model.js`. If there is such issue, server will crash at model initialization.
- After changes are succesfully merged into master, we can follow with point __2__

#### 2. Run `pm2-deploy {app-name}`

It will ensure that code is at latest master commit, and run consequently `npm run setup` and `pm2 start {app-name}` commands.
Be sure not to close terminal session until last command is run.
