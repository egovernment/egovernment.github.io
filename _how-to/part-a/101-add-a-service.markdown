---
layout: recipe
permalink: /how-to/add-a-service/
title: 'Initialize (add) new service'
category: '1. Part A'
sub-category: 'Service'
rate: '4'
number: '101'
introduction-text: ''
introduction-img: '105.png'
prevUrl:
nextUrl: 102
done: ''
lang: en
ref: 101
---

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

[See here](https://github.com/egovernment/eregistrations-demo/compare/add-a-service...add-a-service-solution#files).
