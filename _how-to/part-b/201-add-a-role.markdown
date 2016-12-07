---
layout: recipe
permalink: /how-to/add-a-role/
title: 'Add a role (processing step)'
category: '2. Part B'
sub-category: 'Roles'
rate: '4'
number: '201'
introduction-text: 'The official role (processing step) is a piece of part b flow. Actually you can think of part b as a collection of processing steps.'
introduction-img: '201.png'
prevUrl: 181
nextUrl: 202
done: 'yes'
lang: en
ref: 201
---

Every processing step is associated with at least one service. Each processing step has its own application (a directory in `apps` directory).

Processing steps models are defined for a given service. There is a good reference point available which shows how a processing step is configured.

I will reference it in the steps below:

1. At the root of your project type: `node node_modules/eregistrations/bin/generate-app official-<your-step-name>` (be sure not to make a typo, especially in *"official"*). This will create most of the files needed by your step. You can check here to see what files should be created at this point: [(A) Official Processing app & role](https://github.com/egovernment/eregistrations-demo/commit/b1d460489c70093bf0cc58af54b011434d989594).
2. Open file `model/user/roles.js`.
3. Add new role; one entry in `db.Role.members`, setup `db.Role.meta.get('<yourStepName>').label`. You can see how it's done [here](https://github.com/egovernment/eregistrations-demo/commit/3256210ab5f2284418ffee5e8f1468b3c2cad009).
4. Create a file `model/<your-service>/processing-steps/<your-step-name>.js`.
5. Define a model for a step in the file you created. You can check an example [here](https://github.com/egovernment/eregistrations-demo/blob/577c87c07a8077af1e849218c89f8f249774f890/model/business-process-demo/processing-steps/processing.js).
6. Setup paths for meta and map file. [See here](https://github.com/egovernment/eregistrations-demo/commit/577c87c07a8077af1e849218c89f8f249774f890) for reference.
7. Ensure binding with Demo service. [See here](https://github.com/egovernment/eregistrations-demo/commit/0dbb6e43db3a599fe3274da9d14f02a088602579) for reference.
8. Register controllers for your app. [See here](https://github.com/egovernment/eregistrations-demo/commit/fbdf2890eea6689c418187f8d58187733552fcbf) for reference.
9. Your processing step will most likely have a form, which needs to be filled and submitted.
So we need to configure it (provide controller, view, and form section definition). [See here](https://github.com/egovernment/eregistrations-demo/commit/15c01b74497816510f055b674c2c6787dc7cbf63) for reference.

---

## Example

In the branch "[add-a-role-processing-step](https://github.com/egovernment/eregistrations-demo/tree/add-a-role-processing-step)" of eregistrations-demo :

Add a new processing step.

* The step will be called "Social Security".
* The step should be included in the part b flow after `processing` and before `frontDesk`.
* The step has a form with two fields which needs to be filled before approval of the step is possible.
    * The fields of the form are:
        1. `isSealConfirmed` (Boolean, required, label: *"Are the seals of the certificates confirmed?"*).
        2. `sealDate` (DateType, required, label: *"What is the date of sealing the last certificate?"*).
    * The form will be created via section (`FormSection` labeled *"Seals confirmation"*).
    * The sections form will be submitted under this route: `[0-9][a-z0-9]+/social-security-form`.
* After the form is completed (sections `status` equals 1), the *"Approve"* button appears.
    * When the button is clicked the step becomes approved.
* After the step is approved a status log entry should be added and the flow will proceed to `frontDesk`.
    * The status log entry will be triggered only once (after the step is approved).
    * The status log entry will have the label *"Social Security"* and the following text: *"Approved by social security"*.

### Solution

[See here](https://github.com/egovernment/eregistrations-demo/compare/add-a-role-processing-step...add-a-role-processing-step-solution#files)
