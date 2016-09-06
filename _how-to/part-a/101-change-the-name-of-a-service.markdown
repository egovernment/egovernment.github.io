---
layout: recipe
permalink: /how-to/change-the-name-of-a-service/
title: 'Change name of a service on My Account page'
category: '1. Part A'
sub-category: 'Service'
rate: '1'
number: '101'
introduction-text: 'This recipe explains how to change the name of a service on the MyAccount page.'
introduction-img: '101.png'
prevUrl: 
nextUrl: /how-to/change-the-description-of-a-service-from-myAccount/
done: 'yes'
---

1. Open file `view/user.js`
2. In a `exports._servicesBoxList` block (it's responsible for "Available Services") find name of service which should be changed and update it.

### Example

Starting Branch: [change-the-name-of-the-service](https://github.com/egovernment/eregistrations-demo/tree/change-the-name-of-the-service)

Let's change the name of the service from "Register Demo" to "Register company".

[Solution](https://github.com/egovernment/eregistrations-demo/compare/change-the-name-of-the-service...change-the-name-of-the-service-solution?expand=1)
