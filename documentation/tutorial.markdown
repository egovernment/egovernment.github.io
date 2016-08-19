---
layout: doc-pages
permalink: /tutorial/
title: 'eRegistrations - Tutorial'
---


# Tutorial

## Exercises

### Assumptions

In the exercises we assume that we work in `eregistrations-demo` project [https://github.com/egovernment/eregistrations-demo](https://github.com/egovernment/eregistrations-demo).


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

[Solution](https://github.com/egovernment/eregistrations-demo/compare/add-new-form-section...add-new-form-section-solution)


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

[Solution](https://github.com/egovernment/eregistrations-demo/compare/configure-extra-determinant-for-registration...configure-extra-determinant-for-registration-solution)

### Configure extra requirement that happens only for given registration and given determinant

A new requirement has been added for `companyRegistration`.

The new required document is called "Social security certificate".

It is required to upload this document when a user wants to register

a company and will employ at least 5 people (`workers` field).


To begin go to your project root directory and type: 

`git checkout configure-extra-requirement-that-happens-only-for-given-registration-and-determinant`

[Solution](https://github.com/egovernment/eregistrations-demo/compare/configure-extra-requirement-that-happens-only-for-given-registration-and-determinant...configure-extra-requirement-that-happens-only-for-given-registration-and-determinant-solution)



### Configure requirement that may resolve to two different uploads

We have a new `requirement` for `certificateOfIncentives`.

We also have one new field to add to the model and to the "Representative details" section

and one new document.

The new field is called `isCitizen` and is a property of `representative`.

Field requirements:

1. Value is `true` or `false`.
2. Label: "Are you a citizen of our country?"
3. The field is mandatory.
4. Field should be visible at the end of `representativeDetails` section.

The new document is called `NationalId` and has the label... "National id"!

Let's now specify the new requirement. The requirement is associated with `certificateOfIncentives` registration.

It has the following label: "National Id for citizens or passport for foreigners".

The resolution logic:

If the user chooses `certificateOfIncentives` registration in the guide, he should see the new requirement.

If the value of our newly added field `isCitizen` is `true` and the new requirement is visible in the guide,

we should ask the user to upload the `NationalId` document (this should be visible in uploads sections).

In other case (`isCitizen` is not `true` and the new requirement is visible) the user should not be asked to upload

`NationalId`, he should be instead asked to upload `Passport`.

####Hint

You can (in this case you should) create a requirement

as a stand alone class, let's call it `IdDocumentRequirement`. Let's also put this class in 

`model/business-process/requirements/id-document.js` so we can reuse it for other services.
 

To begin go to your project root directory and type: 

`git checkout configure-requirement-that-may-resolve-to-two-different-uploads`

[Solution](https://github.com/egovernment/eregistrations-demo/compare/configure-requirement-that-may-resolve-to-two-different-uploads...configure-requirement-that-may-resolve-to-two-different-uploads-solution)


### Configure some new email notification

We want to add new email notfication.

The email should be sent to a regular user (to his email address as given by registration).

Notification requirements:

1. Email should be sent when user has successfully completed forms.
2. Email subject: "Form completion"
3. Email text: "Congratulations ${ fullName }.\n\nYou have completed the form. You are one step closer to complete following requests: ${ registrations }"

Where ${ fullName } is the name of the user of the given `businessProcess`

and where ${ registrations } is a list of registrations requested in the given businessProcess.

Example of filled in email text as seen in console (notice the formatting of requested registrations):

"Congratulations test1 test1.\n\nYou have completed the form. You are one step closer to complete following requests: \n- Company registration\n- Certificate of incentives"


To begin go to your project root directory and type: 

`git checkout configure-new-email-notification`

[Solution](https://github.com/egovernment/eregistrations-demo/commit/756783c09d94c1110e6ec15e0744fd7c9f10e4fe)


### Configure some new status log

We want to have a new `statusLog`.

Requirements for the `statusLog`:

1. Trigger only once after a reviewer has started his work (when a first `requirementUpload` has been reviewed).
2. `statusLog` has following label: "Review in progress"
3. `statusLog` has the following body: "A review of your request has been started"

To begin go to your project root directory and type: 

`git checkout configure-new-status-log`

[Solution](https://github.com/egovernment/eregistrations-demo/commit/a269ee6b48eb3b0a9271b272e4cb157d3e8b3e12)
