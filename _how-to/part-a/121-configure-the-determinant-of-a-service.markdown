---
layout: recipe
permalink: /how-to/configure-the-determinant-of-a-service/
title: 'Define a new field'
category: '1. Part A'
sub-category: 'Determinants'
rate: '2'
number: '121'
introduction-text: 'This recipe is about adding new field to the model. Please note that adding a field to model is not enough to render it anywhere.'
introduction-img: '121-1.png'
prevUrl: 113
nextUrl: 122
done: ''
lang: en
ref: 121
---

All the model fields belong to some service. So, prior to adding a field, you need to know for which service it is going to be set.

All the fields in the model are configured through [dbjs](https://github.com/medikoo/dbjs) engine.

Please read the [dbjs documentation](https://github.com/medikoo/dbjs/blob/master/README.md) before modifying model.

Especially important part is about [basic types](https://github.com/medikoo/dbjs/blob/master/README.md#basic-types).

Dbjs is already configured in all eregistrations systems, so there is no need to install it.

1. Open file `model/<your-service>/fields.js`.

It is here where most model definitions are created.

A typical definition looks something like this:


```javascript
BusinessProcessDemo.prototype.defineProperties({
    isLocalCapital: {
        type: db.Boolean,
        label: _("Is the capital local or foreign?"),
        inputHint: _("Choose 'yes' for local")
    }
});
```

Where `db` is a dbjs database. In order to reference `db` from within project you just need to require `<project-root>db.js`.

So from `model/<your-service>/fields.js` you can do:

```javascript
var db = require('../../db');
```

When you add a new field, you first need to know to which object will the field belong. The most basic case is when you want to add a field to a business process.

This is the case we have in the snippet above (note that the field `isLocalCapital` is defined on the `prototype` NOT on the constructor).

In our example the created field is of the type `db.Boolean`. If you followed this recipe carefully you should already know that `db.Boolean` is a basic dbjs type.

It follows that for every instance of dbjs you will have `db.Boolean` accessible. So, for every field that is of the basic dbjs type, you only need to make sure you have dbjs object (`db` in our example)

and do `type: db.<TypeForNewField>` in the definition.

Quite often you will find yourself needing some more specific type than the basic dbjs type. Such types are defined either in `dbjs-ext` module, or in `eregistrations` module, or even in your project's model.

Such more specific types need to be required independently on per case basis.

A good example of a widely used non basic type is `dbjs-ext/string/string-line` [See here](https://github.com/medikoo/dbjs-ext/tree/master/string/string-line) (this type represents a line of text without new line characters).

Here is how you require `dbjs-ext` type:

```javascript
var StringLine = require('dbjs-ext/string/string-line')(db);
```

Were, again, `db` is dbjs object. Two important things to note here are:
1. You need to pass db object to the required module
2. You have to (by convention) call your local variable as the camelCased version of the module name (e.g. `StringLine` for `string-line`).


### Common `dbjs-ext` types:

`dbjs-ext/string/string-line`        - A string without new line characters.

`dbjs-ext/number/integer/u-integer`  - A non negative integer [0, Infinity).

`dbjs-ext/date-time/date`            - A dbjs representation of date (when using this, you should name your local variable `DateType`).

`dbjs-ext/string/string-line/email`  - An email.

`dbjs-ext/number/currency/us-dollar` - Representation of USD currency (note it extends generic currency class).

`dbjs-ext/number/percentage`         - A percentage (expressed as a number in range [0, 1] where 0 means 0% and 1 means 100%).


As mentioned earlier you sometimes want to use types that are `eregistrations` specific.


### Common `eregistrations` types:

`eregistrations/model/person`            - Represents a human being (the `User` class extends this one, often used as base type for individuals associated with a service (partners, representatives, auditors)).

`eregistrations/model/lib/progress-rule` - Used to setup some custom validation logic for section.

`eregistrations/model/document`          - Base class for the documents setup in the end system.

`eregistrations/model/cost`              - Base class for costs setup in the end system.

`eregistrations/model/institution`       - Base class for institutions setup in the end system.

`eregistrations/model/file`              - Represents a file.


Finally there is a group of types that are most likely defined in the end system:


### Common end system types:

`<project-root>model/lib/country`               - A set of countries (Used e.g. for creating a select with countries to choose from).

`<project-root>model/lib/gender`                - A set of values determining the gender.

`<project-root>model/lib/town`                  - A set of available towns (Used e.g. for creating a select with towns to choose from).

`<project-root>model/lib/<your-country>address` - This object contains properties which enable gathering of address data as required by your country.

---

## Example

In the branch "[](https://github.com/egovernment/eregistrations-demo/tree/)" of eregistrations-demo :


### Solution
