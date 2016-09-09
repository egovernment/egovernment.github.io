---
layout: recipe
permalink: /how-to/change-the-name-and-the-short-name-of-a-registration/
title: 'Change the label of a registration'
category: '1. Part A'
sub-category: 'Registration'
rate: '1'
number: '112'
introduction-text: 'The name of a registration appears in the guide, in the email sent to the users, in the history of the file... The name change will take place in all those places.<br>It is recommended to name the registration as "Name-of-certificate at Institution-in-charge".'
introduction-img: '111.png'
prevUrl: 111
nextUrl: 113
done: 'yes'
lang: en
ref: 112
---

The name of a registeration is by default inherited from the document corresponding to it. We must first determine if we want to change the name of a document or just the name of the registration.

Here we will focus on the scenario where we want to change only the name of the registration, not of the document.

Every registration is associated with a service. So, first we have to determine the service in which registration occurs. Let's assume that the service's model class name is `BusinessProcessMyService` and your registrations name is `myRegistration`.

Registrations can be found either together under `model/business-process-my-service/registrations.js`, or in separate files in the following directory `model/business-process-my-service/registrations` (the file name should be hyphened version of the registration's name (in our example `my-registration.js`)).

1. Depending on your case, go to: `model/business-process-my-service/registrations.js`, or to `model/business-process-my-service/registrations/my-registration.js`.

2. Set the value of the label property of `myRegistration` to the name you want your registration to have.

If you want to change the short name of the service, then to the above steps but instead of `label` edit `shortLabel` property.

# Exercise

Change the name of the `certificateOfIncentives` registration to *"Certificate of incentives (business facilitation program)"*.

Start with:

`git checkout change-the-name-of-the-registration`

[Solution](https://github.com/egovernment/eregistrations-demo/compare/change-the-name-of-the-registration...change-the-name-of-the-registration-solution)


