---
layout: recipe
permalink: /how-to/configure-the-determinant-of-a-service/
title: 'Define a new field for the guide'
category: '1. Part A'
sub-category: 'Determinants'
rate: '2'
number: '121'
introduction-text: ''
introduction-img: '106.png'
prevUrl: /how-to/add-a-service/
nextUrl: /how-to/change-the-name-and-the-short-name-of-a-registration/
done: ''
---

To acomplish this task we need two things:

1. A field in the model
2. Entry in the guide section

To define the field:

1. Open file `model/<business-process-your-service>/fields.js`.
2. Add new definition on `<BusinessProcessYourService>.prototype` (e.g. `myField: { type: db.Boolean, label: _("My field name", required: true }` )).

After the new field is defined, include the new field in the guide section:

1. Open file `model/<business-process-your-service>/guide.js`.
2. Add your field's name to the `propertyNames` property of the `determinants` section (e.g. `propertyNames: ['myField']`).

### Example

Starting Branch: [configure-the-determinant-of-a-service](https://github.com/egovernment/eregistrations-demo/tree/configure-the-determinant-of-a-service)

Let's add a new determinant to the guide.

#### characteristics of the new field:

1. Name: `isLocalInvestment`.
2. Label: "Is the investment local?".
3. Type: `Boolean` (dbjs).
4. Is `required`.

The field should be included in the guide's form as the last property.

[Solution](https://github.com/egovernment/eregistrations-demo/compare/configure-the-determinant-of-a-service...configure-the-determinant-of-a-service-solution?expand=1)
