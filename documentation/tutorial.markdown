---
layout: doc-pages
permalink: /tutorial/
title: 'eRegistrations - Tutorial'
---


# Tutorial

## Exercises

###Assumptions

In the exercises we assume that we work with `businessProcessDemo` service unless explictly stated otherwise.

All texts that appear to user should be translatable (wrapped in the `_` [`i18n2`] function).

### Add new field to section

Add a field `expectedIncome` to the `companyInformation` section in the `businessProcessDemo` service.

Requirements:

1. The field should be added after `businessName` field and before address.
2. The field should accept values in us dollars.
3. The minimum value accepted should be `0`.
4. The field is mandatory, and has label "Expected income".
5. The field should have defined step (the amount by which it changes) - the step should be set to `1`.
6. The field should have an `inputHint`: "If your organization is non-profit, put '0'".

To begin go to your project root directory and type: 

`git checkout add-new-field-to-section`

[Solution](https://github.com/egovernment/eregistrations-demo/commit/e095edadbea1d6896c255c6b7008a56efa5a1c0a)

### Add new form section

Add new section (regular form section) `representativeDetails` to the `businessProcessDemo` service.

Section should display data of company's `representative`.

The `representative` is a nested defined already in `eregistrations` [system](https://github.com/egovernment/eregistrations/blob/master/model/business-process-new/representative.js).

For this task you will have to use some fields that already exist in the model,
but there is also one new field you need to configure on the representative.

Section's specification:

1. Section should display following fields (of the representative): `firstName`, `lastName`, `email`, `idNumber` (in this order).
2. Section's controller should be under this url: `representative-details`.
3. Section should have label: "Representative details".
4. Section should be the first section displayed in the forms.
5. Section should have legend: "The data of the contact person".

`representative.idNumber` field requirements:

1. It should be string type (no new lines).
2. Label: "Identification number".
3. The valid pattern for the input is DDDD-DDD-LL (where D - digit (0-9), L - capital latin letter (A-Z)).
4. The input mask should reflect the pattern.
5. Input hint should state: "The required format is: 0000-0000-AA".
6. The field is mandatory.

To begin go to your project root directory and type: 

`git checkout add-new-form-section`

Solution commits:
[
[1](https://github.com/egovernment/eregistrations-demo/commit/cc29ee53f53d26447a908c5aea6c95569b4cd1a7),
[2](https://github.com/egovernment/eregistrations-demo/commit/814d1e322ad8d0c09baa098674ef2017689735b0),
[3](https://github.com/egovernment/eregistrations-demo/commit/671bd683f1a0bd2c2d04fc283a0058be1414286f)
]

### Split one section form into form section group with two sections

This task is about changing the `companyInformation` section.

We want to make `companyInformation` section a group section with two 

sub sections (each a regular FormSection).

First section should be called `details`.

Section's specification:

1. Fields: `businessName`, `expectedIncome`,
2. No label

Second section shall be called `address`.

Section's specification:

1. Fields (as defined on businessProcessDemo.address nested): `country`, `city`, `street`
2. Label: "Address"

The label of the parent section (`companyInformation`) remains unchanged.

####Additional notes

For the proper setup you will need to include this line: `require('eregistrations/view/dbjs/form-section-group-to-dom');`
in this [file](https://github.com/egovernment/eregistrations-demo/blob/master/apps/business-process-demo/client/dbjs-dom.js). It's a DOM binding for client (so that the browser knows how to render group sections).

To begin go to your project root directory and type: 

`git checkout split-one-section-form-into-form-section-group-with-two-sections`

[Solution](https://github.com/egovernment/eregistrations-demo/commit/4105a4dce63c797b4c872dfea74f3f65bd2089d4)

### Update cost value

The cost of company registration has changed. We need to adjust it.

The new cost is 2% of `assets` but not less than 25 USD.

To begin go to your project root directory and type: 

`git checkout update-cost-value`

[Solution](https://github.com/egovernment/eregistrations-demo/commit/cf17c913e3d6281e1d37764773c7869f648cf299)

### Configure extra determinant for registration

We want to add a new field in the guide form.

Requirements:

1. The field should be added after `workers`.
2. The field's value can be `true` or `false`.
3. The field is mandatory, and has label "Is the investment local or foreign?".
4. The field should have an `inputHint`: "Answer 'Yes' for local".
5. If the value of the field is `true`, then the cost of the `companyRegistration` is: 1% of `assets` but not less than 25 USD.


To begin go to your project root directory and type: 

`git checkout configure-extra-determinant-for-registration`

Solution commits:
[
[1](https://github.com/egovernment/eregistrations-demo/commit/5c6b6e413882ac70e818163c9a93d33b2428f572),
[2](https://github.com/egovernment/eregistrations-demo/commit/e9c5e3c73b90f4e6f1c867a89a10ba226b08ef85)
]

### Configure extra requirement that happens only for given registration and given determinant

A new requirement has been added for `companyRegistration`.

The new required document is called "Social security certificate".

It is required to upload this document when a user wants to register

a company and will employ at least 5 people (`workers` field).


To begin go to your project root directory and type: 

`git checkout configure-extra-requirement-that-happens-only-for-given-registration-and-determinant`

Solution commits:
[
[1](https://github.com/egovernment/eregistrations-demo/commit/919c8fec1c8c09c35040a9a185f7490e00adfe5a),
[2](https://github.com/egovernment/eregistrations-demo/commit/c9a2a2dfd5899719f74eefcf0881fda021682b1c),
[3](https://github.com/egovernment/eregistrations-demo/commit/f82dfcbe2af1a0b84a221ce775e453fbf7357fcf)
]
