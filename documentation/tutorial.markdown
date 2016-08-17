---
layout: doc-pages
permalink: /tutorial/
title: 'eRegistrations - Tutorial'
---

<span class="label label-info">Coming soon</span>

# Tutorial

## Exercises

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

1. `git pull`
2. `git checkout add-new-field-to-section`

[Solution](https://github.com/egovernment/eregistrations-demo/commit/e095edadbea1d6896c255c6b7008a56efa5a1c0a)

### Add new form section

Add new section (regular form section) `representativeDetails` to the `businessProcessDemo` service.
Section should display data of company's `representative`.
The `representative` is a nested defined already in `eregistrations` [system](https://github.com/egovernment/eregistrations/blob/master/model/business-process-new/representative.js).
For this task you will have to use some fields that already exist in the model,
but there is also one new field you need to configure on the representative.

Section's specification:

1. Section should display following fields: `representative/firstName`, `representative/lastName`, `representative/email`, `representative/idNumber` (in this order).
2. Section's controller should be under this url: `representative-details`.
3. Section should have label: "Representative details".
4. Section should be the first section displayed in the forms.

`representative/idNumber` field requirements:

1. It should be string type (no new lines).
2. Label: "Identification number".
3. The valid pattern for the input is DDDD-DDD-LL (where D - digit (0-9), L - capital latin letter (A-Z)).
4. The input mask should reflect the pattern.
5. Input hint should state: "The required format is: 0000-0000-AA".
6. The field is mandatory.

To begin go to your project root directory and type: 

1. `git pull`
2. `git checkout add-new-form-section`

Solution commits:
[
[1](https://github.com/egovernment/eregistrations-demo/commit/cc29ee53f53d26447a908c5aea6c95569b4cd1a7),
[2](https://github.com/egovernment/eregistrations-demo/commit/814d1e322ad8d0c09baa098674ef2017689735b0)
]
