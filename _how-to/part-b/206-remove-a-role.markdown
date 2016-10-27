---
layout: recipe
permalink: /how-to/remove-a-role/
title: 'Remove a role (processing step)'
category: '2. Part B'
sub-category: 'Roles'
rate: '3'
number: '206'
introduction-text: ''
introduction-img: '206.png'
prevUrl: 205
nextUrl: 221
done: ''
lang: en
ref: 206
---

The operation of full removal of an officialRole and a processingStep associated with it, requires adjustments in several places.

In order to remove a officialRole and a processingStep:

1. Remove directory `apps/<your-official-role>`.
2. Remove directory `view/<your-official-role>`.
3. Remove file `model/business-<your-service>/processing-steps/<your-step>.js`.
<br>Mind that the step can appear and more than one service. If that is the case you have to remove it from each service directory.
4. Remove `require` of `model/business-<your-service>/processing-steps/<your-step>.js` from `model/business-<your-service>/processing-steps/index.js`.
5. You need to find the place where where your step was used in the flow and adjust it.
<br>So, you need to remove your step from the proper `previousSteps` collection (the collection you're looking for is defined on the step, which was directly after the removed step in the flow).
<br>Most likely you will have to replace the step you are removing with some other step, on which the flow will now rely.
6. Remove role definition associated with your step from `model/user/roles.js`.
7. Search the project for occurrences of `yourStep` and `your-step` and adjust them as needed.
<br>You will mostly encounter several requires to the modules that you have just removed, so you need to remove the requires as well.


## Example

In the branch "[remove-a-role](https://github.com/egovernment/eregistrations-demo/tree/remove-a-role)" of eregistrations-demo :

Remove the `socialSecurity` processing step and the `officialSocialSecurity` role associated with it. 

### Solution

[See here](https://github.com/egovernment/eregistrations-demo/compare/remove-a-role...remove-a-role-solution#files)
