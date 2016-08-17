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

To begin go to your project root directory and type: 
1. `git pull`
2. `git checkout add-new-field-to-section`

[Solution](https://github.com/egovernment/eregistrations-demo/commit/e095edadbea1d6896c255c6b7008a56efa5a1c0a)
