---
layout: recipe
permalink: /how-to/change-the-icon-of-a-service-and-it-tooltip/
title: 'Set the icon that represents a service'
category: '1. Part A'
sub-category: 'Service'
rate: '1'
number: '103'
introduction-text: ''
introduction-img: '103.png'
prevUrl: /how-to/change-the-description-of-a-service-from-myAccount/
nextUrl: /how-to/make-a-service-unavailable/
done: 'yes'
---

The service icon is a font character.

We assume that the icon (proper font character) already exists and has associated css class i.e. 'fa fa-file'.

Go to: `view/user.js`, find the proper `<i>` element and set it's css class to the proper class i.e. ('fa fa-file').

# Exercise

Change the icon of the "Demo" service. Use 'fa fa-file' as new icon classes.

Start with:

`git checkout change-the-icon-of-a-service`

[Solution](https://github.com/egovernment/eregistrations-demo/compare/change-the-icon-of-a-service...change-the-icon-of-a-service-solution)
