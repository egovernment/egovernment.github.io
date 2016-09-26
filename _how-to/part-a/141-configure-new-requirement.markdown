---
layout: recipe
permalink: /how-to/configure-new-rquirement/
title: 'Configure new requirement'
category: '1. Part A'
sub-category: 'Requirements'
rate: '2'
number: '141'
introduction-text: 'A requirement is associated with a document or group of documents that needs to be uploaded with the registrations file. Very often this document needs to be shown at the Front Desk to withdraw the certificate(s). The requirement belongs to a registration.<br>Here we will see how to add a requirement to a registration so the user must upload it in the "Documents" page, bring the original copy of the required document to the Front Desk for withdrawal.'
introduction-img: '145.png'
prevUrl: 133
nextUrl: 142
done: ''
lang: en
ref: 141
---

A requirement is a rule about providing certain document to the officials.

Every requirement belongs to a registration. Requirement is not a document, it resolves to a document. It is an important distinction.

The requirement can resolve to a document from a group of documents (Such situation happens when a requirement is something like: user needs to bring his passport (when a foreigner) or his id-document otherwise).

Most of the times there is exactly one document which must be uploaded due to a requirement.

There are two scenarios here:

1. The document for which you have to create a requirement is already defined in `model/<your-service>/documents/<your-document>.js`
2. The document is not yet defined

[See how to add document here]

After you have created a document you can proceed to creation of requirement (point 2)

1. Open file `model<business-process-your-service>/requirements.js`.
2. Locate the array passed to `eregistrations/model/business-process-new/utils/define-requirements` helper function.
3. Add entry to the array. In most basic scenario it's just a `require` to the source document (e.g. `require('../documents/passport')`).

---

## Example

In the branch "[](https://github.com/egovernment/eregistrations-demo/tree/)" of eregistrations-demo :

Add a new requirement to `BusinessProcessDemo` service.

### Solution
