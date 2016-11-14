---
layout: recipe
permalink: /how-to/create-a-new-section-with-tables-in-the-form/
title: 'Create a new section with tables in the form'
category: '1. Part A'
sub-category: 'Data'
rate: '4'
number: '172'
introduction-text: ''
introduction-img: '172.png'
prevUrl: 171
nextUrl: 173
done: 'yes'
lang: en
ref: 172
---

The sections are a mechanism which provides abstraction layer between model an the view, and allows for quick creation of the forms.

For exhaustive overview of sections please see [https://github.com/egovernment/eregistrations/blob/master/documentation/sections.md](https://github.com/egovernment/eregistrations/blob/master/documentation/sections.md).

In order to add a new nested entity section to a service's forms:

1. Create a `model/business-process-<your-service>/nested-entities` directory if it's missing.
2. Create a `model/business-process-<your-service>/nested-entities/<some-entity>` directory.
3. Add `model/business-process-<your-service>/nested-entities/<some-entity>/fields.js` file (See the listing #1 below).
4. Add `model/business-process-<your-service>/nested-entities/<some-entity>/data-forms/base.js` file (See the listing #2 below).
5. Add other entity sections in `model/business-process-<your-service>/nested-entities/<some-entity>/data-forms/` directory. Remember to define them on `SomeEntity.prototype.dataForms.map`.
6. Add `model/business-process-<your-service>/nested-entities/<some-entity>/data-forms/index.js` file (See the listing #3 below).
7. Add `model/business-process-<your-service>/nested-entities/<some-entity>/index.js` file (See the listing #4 below).
8. Add a require for the new nested entity in `model/business-process-<your-service>/nested-entities/index.js` (create the file if missing).
9. Add a require for the `model/business-process-<your-service>/nested-entities/index.js` in `model/business-process-<your-service>/index.js` if it's missing.
10. Create file `model/business-process-<your-service>/data-forms/<some-entities>.js` (See the listing #5 below).
11. Add a require for the new section in `model/business-process-<your-service>/data-forms/index.js`.
12. In file `apps/business-process-<your-service>/routes.js` add a new route for entity add/edit view (See the listing #6 below).
13. In file `apps/business-process-<your-service>/controller/index.js` add a new controller for the entity section (See the listing #7 below).
14. In `apps/business-process-<your-service>/client/dbjs-dom.js` add a require for `eregistrations/view/dbjs/form-entities-table-to-dom` if it's not already there.

### Listings

**1. `model/business-process-<your-service>/nested-entities/<some-entity>/fields.js` example:**

```javascript
'use strict';

var db              = require('../../../../db')
  , _               = require('../../../../i18n').bind('Model')
  , BusinessProcess = require('../../base')
  , SomeEntity;

module.exports = SomeEntity = db.Object.extend('SomeEntity', {
    // Both label and name are needed by add-edit-entity view.
    label: {
        value: _("Some entity")
    },
    name: {
        type: StringLine
    }
    // Other properties
});

BusinessProcess.prototype.defineNestedMap('someEntities', {
    itemType: SomeEntity,
    cardinalPropertyKey: 'name'
});
```

**2. `model/business-process-<your-service>/nested-entities/<some-entity>/data-forms/base.js` example:**

```javascript
'use strict';

var db                    = require('../../../../../db')
  , PropertyGroupsProcess = require('eregistrations/model/lib/property-groups-process')(db)
  , SomeEntity            = require('../fields');

SomeEntity.prototype.defineProperties({
    dataForms: {
        type: PropertyGroupsProcess,
        nested: true
    }
});

module.exports = SomeEntity;
```

**3. `model/business-process-<your-service>/nested-entities/<some-entity>/data-forms/index.js` example:**

```javascript
'use strict';

module.exports = require('./base');

// Entity sections
// require('./some-entity-section');
```

**4. `model/business-process-<your-service>/nested-entities/<some-entity>/index.js` example:**

```javascript
'use strict';

module.exports = require('./fields');

require('./data-forms');
```

**5. `model/business-process-<your-service>/data-forms/<some-entities>.js` example:**

```javascript
'use strict';

var db                = require('../../../db')
  , _                 = require('../../../i18n').bind('Model: Sections')
  , FormEntitiesTable = require('eregistrations/model/form-entities-table')(db)
  , TabularEntity     = require('eregistrations/model/form-tabular-entity')(db)
  , BusinessProcess   = require('../fields')
  , dataFormsMap      = BusinessProcess.prototype.dataForms.map;

require('eregistrations/model/business-process-new/data-forms')(db);

dataFormsMap.defineProperties({
    someEntities: {
        type: FormEntitiesTable,
        nested: true
    }
});

dataFormsMap.someEntities.setProperties({
    label: _("Some entities"),
    baseUrl: 'some-entity',
    propertyName: 'someEntities',
    sectionProperty: 'dataForms',
    entityTitleProperty: 'name'
});

['name'].forEach(function (prop) {
    dataFormsMap.someEntities.entities.add(new TabularEntity({
        propertyName: prop
    }));
});

module.exports = BusinessProcess;
```

**6. `apps/business-process-<your-service>/routes.js` example:**

```javascript
assign(exports, require('eregistrations/routes/business-process'), {
    'some-entity/[a-z0-9]+': {
        match: function (entity) {
            this.entity = this.businessProcess.someEntities.map.get(entity);
            return true;
        },
        view: require('eregistrations/view/business-process-add-edit-entity')
    }
});
```

**7. `apps/business-process-<your-service>/controller/index.js` example:**

```javascript
var entitiesController = require('eregistrations/controller/generate-entities-controllers');

entitiesController(exports, {
    name: 'some-entity',
    targetMap: function () { return this.businessProcess.someEntities; },
    pageUrl: '/forms/',
    tableHtmlId: db.BusinessProcessDemo.prototype.dataForms.map.someEntities.domId,
    targetEntityPrototype: db.Branch.prototype
});
```

## Example

In the branch "[create-a-new-section-with-tables-in-the-form](https://github.com/egovernment/eregistrations-demo/tree/create-a-new-section-with-tables-in-the-form)" of eregistrations-demo :

Add new nested entity *"Branch"* to the *"Business Process Demo"* service. It's section should include the fields *"businessName"*, *"address/country"*, *"address/city"*, *"address/street"*.

### Solution

[See here](https://github.com/egovernment/eregistrations-demo/compare/create-a-new-section-with-tables-in-the-form...create-a-new-section-with-tables-in-the-form-solution#files).
