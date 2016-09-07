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
prevUrl: /how-to/change-the-description-of-a-service-from-my-account/
nextUrl: /how-to/make-a-service-unavailable/
done: ''
---

The service icon is a font character.

We assume that the icon (proper font character) already exists and has associated css class i.e. 'fa fa-file'.

1. Open file `view/user.js`.
2. Find the proper `<i>` element and set it's css class to the proper class i.e. ('fa fa-file').

### Example

Starting Branch: [change-the-icon-of-a-service](https://github.com/egovernment/eregistrations-demo/tree/change-the-icon-of-a-service)

Let's change the icon of the "Demo" service. Use 'fa fa-file' as new icon classes.

[Solution](https://github.com/egovernment/eregistrations-demo/compare/change-the-icon-of-a-service...change-the-icon-of-a-service-solution)
