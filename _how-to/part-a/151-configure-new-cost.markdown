---
layout: recipe
permalink: /how-to/configure-new-cost/
title: 'Configure new cost'
category: '1. Part A'
sub-category: 'Costs'
rate: '2'
number: '151'
introduction-text: 'Cost name is used for both Part A and Part B as well as print views. Changing it will affect all of those places.'
introduction-img: '151.png'
prevUrl: /how-to/add-a-determinant-to-a-requirement/
nextUrl: /how-to/add-a-tooltip-in-front-of-a-cost-in-the-guide/
done: ''
---

Every cost is associated with a service, so to change it's name, we have to know the service to which it applies.

1. Open file `model/<business-process-your-service>/costs/<your-cost>.js`.
2. Set the value of the label property of the cost to the desired name.

## Example

In the branch "[change-the-name-of-a-cost](https://github.com/egovernment/eregistrations-demo/tree/change-the-name-of-a-cost)" of eregistrations-demo :

Let's change the name of the `companyRegistration` cost for `BusinessProcessDemo` service to `Company registration in the Neverland`.

### Solution
