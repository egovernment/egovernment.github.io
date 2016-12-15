---
layout: doc-pages
permalink: /configuration-tutorial/
title: 'eRegistrations - Tutorial'
lang: en
ref: tutorial
---


# Tutorial

## Exercises

### Assumptions

In the exercises we assume that we work in `eregistrations-demo` project [https://github.com/egovernment/eregistrations-demo](https://github.com/egovernment/eregistrations-demo).


### 1. Add new field to section

#### `git checkout upstream/add-new-field-to-section`

Add a field `expectedIncome` to the `companyInformation` section in the `businessProcessDemo` service.

Requirements:

1. The field should be added after `businessName` field and before address.
2. The field should accept values in us dollars.
3. The minimum value accepted should be `0`.
4. The field is mandatory, and has label "Expected income".
5. The field should have defined step (the amount by which it changes) - the step should be set to `1`.
6. The field should have an `inputHint`: "If your organization is non-profit, put '0'".

### 2. Add new form section

#### `git checkout upstream/add-new-form-section`

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
3. The valid pattern for the input is DDDD-DDDD-LL (where D - digit (0-9), L - capital latin letter (A-Z)).
4. The input mask should reflect the pattern.
5. Input hint should state: "The required format is: 0000-0000-AA".
6. The field is mandatory.

#### Overview:

<a href="/img/exercises/add-new-form-section-solution.png"><img width="1000" src="/img/exercises/add-new-form-section-solution.png" /></a>

### 3. Split one section form into form section group with two sections

#### `git checkout upstream/split-one-section-form-into-form-section-group-with-two-sections`

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

#### Additional notes

For the proper setup you will need to include this line: `require('eregistrations/view/dbjs/form-section-group-to-dom');`
in this [file](https://github.com/egovernment/eregistrations-demo/blob/master/apps/business-process-demo/client/dbjs-dom.js). It's a DOM binding for client (so that the browser knows how to render group sections).

#### Overview

<a href="/img/exercises/split-one-section-form-into-form-section-group-with-two-sections-solution.png"><img width="1000" src="/img/exercises/split-one-section-form-into-form-section-group-with-two-sections-solution.png" /></a>


### 4. Update cost value

#### `git checkout upstream/update-cost-value`

The cost of company registration has changed. We need to adjust it.

The new cost is 2% of `assets` but not less than 25 USD.

### 5. Configure extra determinant for registration

#### `git checkout upstream/configure-extra-determinant-for-registration`

We want to add a new field in the guide form.

Requirements:

1. The field should be added after `workers`.
2. The field's value can be `true` or `false`.
3. The field is mandatory, and has label "Is the investment local or foreign?".
4. The field should have an `inputHint`: "Answer 'Yes' for local".
5. If the value of the field is `true`, then the cost of the `companyRegistration` is: 1% of `assets` but not less than 25 USD.

### 6. Configure extra requirement that happens only for given registration and given determinant

#### `git checkout upstream/configure-extra-requirement-that-happens-only-for-given-registration-and-determinant`

A new requirement has been added for `companyRegistration`.

The new required document is called "Social security certificate".

It is required to upload this document when a user wants to register

a company and will employ at least 5 people (`workers` field).

### 7. Configure requirement that may resolve to two different uploads

#### `git checkout upstream/configure-requirement-that-may-resolve-to-two-different-uploads`

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

#### Overview

<a href="/img/exercises/configure-requirement-that-may-resolve-to-two-different-uploads-1.png"><img width="1000" src="/img/exercises/configure-requirement-that-may-resolve-to-two-different-uploads-1.png" /></a>

Flow 1

<a href="/img/exercises/configure-requirement-that-may-resolve-to-two-different-uploads-2a.png"><img width="1000" src="/img/exercises/configure-requirement-that-may-resolve-to-two-different-uploads-2a.png" /></a>

<a href="/img/exercises/configure-requirement-that-may-resolve-to-two-different-uploads-3a.png"><img width="1000" src="/img/exercises/configure-requirement-that-may-resolve-to-two-different-uploads-3a.png" /></a>


Flow 2

<a href="/img/exercises/configure-requirement-that-may-resolve-to-two-different-uploads-2b.png"><img width="1000" src="/img/exercises/configure-requirement-that-may-resolve-to-two-different-uploads-2b.png" /></a>

<a href="/img/exercises/configure-requirement-that-may-resolve-to-two-different-uploads-3b.png"><img width="1000" src="/img/exercises/configure-requirement-that-may-resolve-to-two-different-uploads-3b.png" /></a>



### 8. Configure some new email notification

#### `git checkout upstream/configure-new-email-notification`

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

#### Hints

Email notifications that relate to some status changes, are always configured by configuring triggers for two states. It's dictated by nature of in-memory engine, which doesn't recognize whether incoming update was invoked by _store_ or _restore_ action.
The final trigger is resolved only when there was some time (technically _event loop_) gap between first (`preTrigger`) and second (`trigger`) trigger (and that won't happen in case of _restore_ action, where in one batch all object records are restored, so there's no _event loop_ gap between triggered events).

- In case of Part A events it's agreed convention to set `preTrigger` to `guideProgress` property equaling `1` (that states guide was filled)
- `trigger` should be about _progress_ property of data forms, which path is `dataForms/progress`

### 9. Configure some new status log

#### `git checkout upstream/configure-new-status-log`

We want to have a new preconfigured entry in  `statusLog`. Where by "statusLog" we call history log, which is displayed by a file in Part B:

<a href="/img/exercises/status-log.png"><img width="1000" src="/img/exercises/status-log.png" /></a>

Requirements for the new `statusLog` entry:

1. Trigger only once after a reviewer has started his work (when a first `requirementUpload` has been reviewed).
2. `statusLog` has following label: "Review in progress"
3. `statusLog` has the following body: "A review of your request has been started"

#### Hints

- It is about action that happens at _revision_ step, therefore configuration should take place in `apps/official-revision/server/status-log.js` file
- Progress of _revision_ process is exposed at `processingSteps/map/revision/revisionProgress` property
- Configuration of logs is provided as an array, and that's what's assigned to `module.exports`, therefore to add our configuration we may just do:

```
module.exports.push({
  // our configuration
});
```

- Configration is a hash object, made of following options:
  - `preTrigger` - Same as in case of email notifications (in this case this can indicate revision progress being `0`)
  - `trigger` - Same as in case of email notifications a final trigger that marks that log should happen
  - `label` - Log label
  - `text` - Log text

### 10. Add new processing role

#### `git checkout upstream/add-new-processing-role-new`

We want to add whole new `processingStep` (official role that is part of Part B flow).

The new step will be called `socialSecurity`.

Requirements for the `socialSecurity`:

1. Label: "Social Security"
2. Step should be in the flow right after revision (before processing).
3. Step is applicable only when user was required to upload `SocialSecurityCertificate` (see `Configure extra requirement that happens only for given registration and given determinant` exercise).
4. The step should have following fields:
5. `isSealConfirmed` (Boolean, required, label: "Is the seal of the certificate confirmed")
6. `sealDate` (DateType, required, label: "When was the document sealed")
7. The step has a form which needs to be filled before the step can be approved.
8. The form should be defined with `FormSection` labeled `Seal Confirmation`.
9. The section's controller should be under this url: `[0-9][a-z0-9]+/social-security-form`.
10. The section should contain following fields (of `socialSecurity` step): `isSealConfirmed`, `sealDate`.
11. When the step is ready for approval (the form has been completed) the "Approve" button appears.
12. When the official clicks the "Approve" button the step besomes approved and moves to the next step.
13. The step has `statusLog`:
14. `statusLog` is triggered once, when the step becomes approved.
15. `statusLog` has label: "Social Security"
16. `statusLog` has text: "Approved by social security"

All natural mechanisms for `processingStep` should work (businessPorcess goes to next step after approval).

After approval the user should not be able to edit step's form anymore etc.

#### Guidelines

Start by generating app, go to project's root directory and type:

`node node_modules/eregistrations/bin/generate-app official-social-security`

In the console you will see a list of things that need to be done in order for the app to work.

Don't worry if you don't understand it all (You will be guided through this part in case of problems).

We're working on making the process more automated, but right now you still need to setup some things manually.

When you're done with the listed steps you should be able to launch the system with the new step added to it.

It doesn't have to contain the form, and can have only very basic model, but it should run without errors and be visible.

Now you should configure model, form (section), view and controllers.

If everything works as expected you have just completed the first part of the exercises, congratulations!

#### Overview:

Initial

<a href="/img/exercises/add-new-processing-role-solution-1.png"><img width="1000" src="/img/exercises/add-new-processing-role-solution-1.png" /></a>

After form has been completed

<a href="/img/exercises/add-new-processing-role-solution-2.png"><img width="1000" src="/img/exercises/add-new-processing-role-solution-2.png" /></a>

After approval

<a href="/img/exercises/add-new-processing-role-solution-3.png"><img width="1000" src="/img/exercises/add-new-processing-role-solution-3.png" /></a>



### 11. Configure new service

#### `git checkout upstream/configure-new-service`

This task is a final test. It's about adding whole new service.

The service shall be called "Final Test".

Service specification:

1. The service has exactly one registration (`eregistrationsDeveloperCertificate`).
2. The registration has 3 requirements.
3. First requirement is passport (this document is already defined in documents).
4. Second requirement is `GraduationDiplomaRequirement` (to be specified later).
5. Third requirement is `TransportationTicketRequirement` (to be specified later).
6. The registrtion is associated with the certificate (`EregistratonsDeveloperCertificate`).

The service's model should have following fields defined:

1. `hasDegreeInComputerScience` (Bollean, label: "Do you have a degree in computer science?", is mandatory).
2. `isTrainingAbroad` (Boolean, label: "Is this training performed abroad, or in your country?", inputHint: _("Choose yes for abroad"), is mandatory).
3. `yearsOfExperience` (positive integer, label: "How many years of experience in IT do you have?", is manadatory).
4. `programmingLanguage` (type: `ProgrammingLanguage` (to be defined later), label: "What is your favourite programming language?", is manadatory).
5. `hobby` (StringLine, label: "Hobby").
6. `businessName` (as defined in core, label: "Nickname", is mandatory).
7. `birthDate` (Date, label: "Date of birth", is mandatory).
8. `quiz` (Object, is nested).

`ProgrammingLanguage` enum (`'value' - 'label'`):

1. `c`          - "C"
2. `java`       - "Java"
3. `javaScript` - "JavaScript"
4. `php`        - "PHP"
5. `python`     - "Python"

`quiz` properties:

1. `howManyNonValues` (positive integer, label: "How many non values are there?", is mandatory).
2. `nullToUndefinedComparison` (Boolean, label: "Is the result of: null == undefined; true?", is mandatory).
3. `concatOperator` (StringLine, "What is the concatenation operator?", is mandatory).

#### Forms

Guide

1. Is regular `FormSection`.
2. properies: `yearsOfExperience`, `programmingLanguage`, `hasDegreeInComputerScience`, `isTrainingAbroad`.

Forms

There are two form sections which constitute `dataForms`: `personalInformation`, `quiz`

`personalInformation`

1. label: "Personal Information".
2. url to submit: `personal-information`.
3. properties: `businessName`, `hobby`, `birthDate`.

`quiz`

1. label: "JavaScript Quiz".
2. url to submit: `quiz`.
3. properties: `quiz/howManyNonValues`, `quiz/nullToUndefinedComparison`, `quiz/concatOperator`.

#### Requirements

`GraduationDiplomaRequirement`

1. Based on the same document (label: "Any School Graduation Diploma").
2. Is applicable only when `hasDegreeInComputerScience` === true.

`TransportationTicketRequirement`

1. Based on the same document (label: "Transportation ticket").
2. Is applicable only when `isTrainingAbroad` === true.

The registration has one cost (`eregistrationsDeveloperCertificate`).

#### Cost requirements

1. label: "Eregistrations Developer Certificate".
2. the amount of cost (in USD) is given by the following formula:
3. If chosen `programmingLanguage` is `javaScript`, then cost is 0.
4. Otherwise the cost is: 5 * `yearsOfExperience`.

#### Part B

The service should reuse the already existing steps `revision` and `frontDesk`.
For the processing we need to configure a new step called `edcProcessing`.

`edcProcessing` step specification

1. label: "EDC Processing".
2. One field in the form - `socre` (positive integer, maximum value: 3, label: "Certificate score").
3. The form should be exposed on a section with label: "EDC approval".
