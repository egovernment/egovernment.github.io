---
layout: recipe
permalink: /how-to/change-the-description-of-a-service-from-my-account/
title: 'Change the description of a service at My Account homepat'
category: '1. Part A'
sub-category: 'Service'
rate: '1'
number: '102'
introduction-text: ''
introduction-img: '102.png'
prevUrl: /how-to/change-the-name-of-a-service/
nextUrl: /how-to/change-the-icon-of-a-service-and-it-tooltip/
done: 'yes'
---

1. Open file `view/user.js`.
2. In a `exports._servicesBoxList` block (it's responsible for "Available Services") find description of service which should be changed and update it.

### Example

Starting Branch: [change-the-description-of-the-service](https://github.com/egovernment/eregistrations-demo/tree/change-the-description-of-the-service)

Let's change the description of the service from "Short description of demo registration process" to "Demo service was created for demo purposes only.".

[Solution](https://github.com/egovernment/eregistrations-demo/compare/change-the-description-of-the-service...change-the-description-of-the-service-solution?expand=1)


