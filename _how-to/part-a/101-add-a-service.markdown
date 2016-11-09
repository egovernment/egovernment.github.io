---
layout: recipe
permalink: /how-to/add-a-service/
title: 'Initialize (add) new service'
category: '1. Part A'
sub-category: 'Service'
rate: '4'
number: '101'
introduction-text: 'This page explains the steps needed to add a new service to the application. This covers running included app generator and configuring steps needed to fully set up a service. The further service configuration, like adding section and payments, is not covered here.'
introduction-img: '105.png'
prevUrl:
nextUrl: 102
done: ''
lang: en
ref: 101
---

The framework comes with a handy app generator included that, given the application name, creates a directory structure and adds a default configuration for a new app. The name of the app is used by the generator to figure out what type of configuration to use. For a new service like company creation or tax payment, the name should start with `business-process-` prefix. This will guide the generator to include default model config and properly setup routes and controllers.

In order to add a new service:

1. Run included generator providing a full name of the new service (hyphenated) `node_modules/eregistrations/bin/generate-app business-process-<service-name>`.
2. Follow all the steps needed to setup the application mentioned by generator:
    1. Ensure app configuration added in POST controllers configuration at: `server/processes/master/apps-post-controllers.js` and `server/processes/memory-db/apps-post-controllers.js`.
    2. Register server GET routes for new app in `server/apps/routers.js`.
    3. Register the storage for the new service in `server/services/db/storage-names.js` and `server/business-process-storages.js`.
    4. Register the business process flow handler for new service in `server/services/business-process-flow.js`.
    5. Add new service to collection utils. You need to add them to both default util list and submitted one. Create `apps-common/business-processes/business-process-<service-name>` and `apps-common/business-processes/submitted/business-process-<service-name>`. Don't forget to include them in matching `index.js` files.
    6. Ensure that the `model/business-process-<service-name>/index.js` is required in `server/model.js`
    7. Ensure that the `model/business-process-<service-name>/index.js` is required in `apps/user/client/model.js`, `apps/business-process-submitted/client/model.js` and `model/statistics.js`; also, for each official app that will process the new service in `apps/official-*/client/model.js`.
    8. After model for new BusinessProcess is complete, make sure to provide necessary DOM bindings (for sections and properties (e.g. enum)) in `client/dbjs-dom.js` for user and official applications.
    9. Add new service legacy model mock generator to setup in `scripts/setup.js`
    10. Configure model for new service in `model/business-process-<service-name>/` directory.
3. Add a new service button in `view/user.js` and configure controller to handle it's action in `apps/user/controller/index.js`.

## Example

In the branch "[add-a-service](https://github.com/egovernment/eregistrations-demo/tree/add-a-service)" of eregistrations-demo :

Add a new service called *"Other One"*

### Solution

Check the list for the specific commits implementing the steps described above:

1. [Run generator](https://github.com/egovernment/eregistrations-demo/commit/b9377da25b530ce5c5531726c02285e62d6af9aa).
2. [Ensure app configuration added in POST controllers](https://github.com/egovernment/eregistrations-demo/commit/b2483c91993d3411962900285682e62186b1949a).
3. [Register server GET routes for new app](https://github.com/egovernment/eregistrations-demo/commit/c5d5b34bfa5c6d9f7fe1d5a1196eed4dccd9b09d).
4. [Register the storage for the new service](https://github.com/egovernment/eregistrations-demo/commit/c44bb93e58964892f0c4e1c6a8ebbb57d1a20e9e).
5. [Register the business process flow handler](https://github.com/egovernment/eregistrations-demo/commit/a3fe04c7df15eb94b609f2898446ec85a9b6cda4).
6. [Add new service to collection utils](https://github.com/egovernment/eregistrations-demo/commit/46ba5964c296d4a41d74e221cc1a8a58833c94c6).
7. [Ensure that the underlying businessProcess model is required in `server/model.js`](https://github.com/egovernment/eregistrations-demo/commit/3120cb90cb5470c3445cf230b8a1aec91c7eb1f7).
8. [Ensure that the underlying businessProcess model is required for clients](https://github.com/egovernment/eregistrations-demo/commit/c1c76fa2f3e89ba99649937cd4809be892499cd3).
9. [Add new service legacy model mock generator to setup](https://github.com/egovernment/eregistrations-demo/commit/add5a10a2c73f918899d54532fd458de57bd2704).
10. [Add a new service button](https://github.com/egovernment/eregistrations-demo/commit/17efc0edd97bfc4b85b1e61f1ff2b628d9f483e1).

For the whole solution diff, [see here](https://github.com/egovernment/eregistrations-demo/compare/add-a-service...add-a-service-solution#files).
