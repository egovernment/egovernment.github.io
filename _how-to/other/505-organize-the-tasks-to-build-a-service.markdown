---
layout: recipe
permalink: /how-to/organize-tasks-to-build-service
title: 'Organize the tasks to build a service'
category: '5. Other'
sub-category: ''
rate: '1'
number: '505'
introduction-text: "This recipe is for product owners. It shows what tasks should be created in what order, to develop a service."
prevUrl: 504
nextUrl:
done: ''
lang: en
ref: 505
---

The eregistrations systems are divided into Part A (end user forms) and Part B (certification procedure performed by officials).


## Tasks

### Part A

* Generate new service (after this step the new service should be accessible (without breaking) from my account page
  but it should not contain anything besides steps menu)
* Create guide
* Create the forms
* Create documents & payments (optional - may not be needed if no customizations)
* Create submission form (optional - may not be needed if no customizations)


### Part B

* Add revision role (optional)
* Add Processing 1...N (A separate task for each processing role)
* Front desk role


The above flow is exhaustive description of tasks which need to be done for a typical service.
Sometimes additional customizations are needed (like external payment service integration).
Such tasks should be created separately in the order discussed with developer.
Note that every customization can potentially prolong the delivery process.
