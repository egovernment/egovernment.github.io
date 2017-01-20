---
layout: doc-pages
permalink: /framework/model-eregistrations/
title: 'Database Model: eRegistrations (Service Rules Configuration)'
category: 'codebase'
lang: en
ref: model-eregistrations
weight: 7
---

# Model

## Organization

The basic model types can be found in [dbjs](https://github.com/medikoo/dbjs) and [dbjs-ext](https://github.com/medikoo/dbjs) projects, and are documented in [Basic types](/framework/model-basic/) section.

The types specific to eRegistrations project are defined in eRegistrations package in [model](https://github.com/egovernment/eregistrations/tree/master/model) folder. This is where all reusable (not system specific) definitions for any eRegistrations system are placed.
As eRegistrations came through many changes and not all systems reflect latest version, the model folder may contain definitions adequate for old version of systems (e.g. [business-process](https://github.com/egovernment/eregistrations/tree/master/model/business-process) folder contains old definition of `BusinessProcess` model, that's still in use by Lomas system, while recent one, as described by the diagram can be found in [business-process-new](https://github.com/egovernment/eregistrations/tree/master/model/business-process-new) folder).

### Import of model definitions

What model definitions land in given process is decided in one central file.
It is `server/model.js` for server processes and `apps/{ appName }/client/model.js` for client processes. It's the only place were model definitions should be imported (required). In all other application modules all types should just be directly accessed on `db` object.

### Configuring computed properties

Many of eRegistrations rules are configured through computed properties, which allow us express how given constrain changes together with values of some other properties.
Computed properties are configured through funtion values, see e.g. below example for `fullName` resolution

```javascript
db.User.prototype.defineProperties({
  fullName: { type: db.String, value: function () {
    return this.firstName + " " + this.lastName;
  }
});

var user = new User({ firstName: "John", lastName: "Smith" });
user.fullName; // "John Smith"```
```

Provided functions should be [pure](https://en.wikipedia.org/wiki/Pure_function) in sense, that:

- Result is determinist against state of other properties
- It doesn't change values of any properties (it's just resolution logic, introducing any updates in it may have quite enexpected consequences and may lead to destabilization of a system)
- You cannot rely on any variables from outer scope of a function. While it may feel natural that within a function you have access to them, in reality it's not the case as function when incorporated into engine is serialized and deserialized, therefore it's [closure](/fundamentals/closures/) context is lost.

In a function you have only access to what natively language gives plus `this` context, on which additionally you have exposed following means:

- `database` - Access to database instance, through that you can access some constructors directly if needed
- `master` - Applicable to computed properties on nested object. `master` will refer to top most object, e.g. in computed defintion for `user.address.street.type` it will refer `user` object.
- `parent` - Applicable to computed properties on nested object. `parent` will refer to parent object, e.g. in computed defintion for `user.address.street.type` it will refer `user.address` object (`this` refers to `user.address.street`)

### Observability of computed properties

Computed properties were designed to be observable in same way as those set with values directly, still there are some limitations which can be woraround with below described methods.

#### Marking properties that influence result of computed property

By default all properties accessed direclty on `this` are resolved by static analysis and behind the scenes are observed as triggers that invoke recomputation of computed value.

If the result is influenced by some deeper property as e.g. `this.address.street` or `this.master.hasBranches`, then we need to wrap observables for this properties with `_observe` function (which we receives as first argument to getter). See below example:

```javascript
db.User.prototype.defineProperties({
  fullName: { type: db.String, value: function (_observe) {
    var fullName = this.firstName + " " + this.lastName;

    if (_observe(this.address._city) === 'San Salvador') {
      fullName += " (from San Salvador)";
    }

    return fullName;
  }
});
```

Mind that it's __observable__ for property and not property _value_ that we need to pass to `_observe_.
The `_observe` will return us property _value_ that's read from observable, so we can naturally write our getters.

#### Preparing getters to work in non-DBJS environemnts

Some getters are extracted from database to power some legacy code that runs in old browsers.
In those browsers we never run dbjs engine, we just reuse the getter functions to reevaluate same once written rules.

This applies to getters that are:

- Used in guide, so together with changes of values in form, the sets of requirements, costs, etc. are updated live also in old browsers
- Used to state applicability of a form field against other fields in same form, so e.g. if we want to expose control (field) B, only if control (field) A has specified value. Properties that back such rules are named as `is{propertyName}Applicable` so they're easily to detect.

In such getters we need to consider two scenarios, one in which getter is run in context of dbjs engine (so we have access to observables of properties) and one in which we do not (there are no observable object). The convention to detect the environement is to check existence for `_get` method on any database object, if it doesn't exist, the we're not in dbjs context.

Therefore applying above constrains to above `fullName` computed property, may look as:

```javascript
db.User.prototype.defineProperties({
  fullName: { type: db.String, value: function (_observe) {
    var fullName = this.firstName + " " + this.lastName;
    var city = this._get ? _observe(this.address._city) : this.address.city;
    if (city === 'San Salvador') {
      fullName += " (from San Salvador)";
    }
    return fullName;
  }
});
```

## eRegistrations specific model

Below you can find UML diagram showcasing eRegistrations model and also description of each core type

<a href="/img/eregistrations-business-process.png" download="eregistrations-business-process.png"><img width="1000" src="/img/eregistrations-business-process.png" /></a>

#### [`Person`](https://github.com/egovernment/eregistrations/blob/master/model/person.js)

An abstract type to represent a human person role.

#### [`User`](https://github.com/egovernment/eregistrations/tree/master/model/user) (extends `Person`)

System account, comes with mandatory `email` and `password` properties. Each registered user in a system is represented as instance of a `User`

#### [`Institution`](https://github.com/egovernment/eregistrations/blob/master/model/institution.js)

Specific institutions are defined in specific projects as _named_ objects (so instances of `Institution` class)

#### [`BusinessProcess`](https://github.com/egovernment/eregistrations/tree/master/model/business-process-new)

Business process is a main class in a system, that represents a registration service, that may include multiple registrations, resulting with multiple certificates issued by multiple institutions.

Business process is technically a registration flow that can be split into two parts:

- Part `A`, it's where user provides necessary data, uploads needed documents and pays necessary fees to obtain desired registration. When all his steps are complete he sends the file for official processing:
- Part `B` It's the official part of a process where we have all data we need from investor and officers in institution look at them and issue requested certificates if application satisfies the requirements. In this part officer may send back file to investor for corrections, in such scenario while investor is again presented with Part A screen, logically we treat file as still being in Part B.

##### Core components of Business Process service:

###### Registrations (represented at `registrations` namespace)

Core entities of a service are __registrations__ which dictate full shape of a service (what data we request, what documents we ask to upload, what payments we ask to cover).

They also dictate (by analysis) what questions do we ask in top left box of guide..

All possible service registrations are defined on `registrations.map` map.
Then depending on configured rules we resolve all registrations that are:

- _applicable_ (accessible at `registrations.applicable`) All registrations that we know are applicable after having investor answers in questions section.
- _mandatory_ (accessible at `registrations.mandatory`). Out of applicable all that are _mandatory_. This collection doesn't have any influence on further flow. Its just to differentiate _mandatory_ registrations from _optional_ so they can be displayed in adequate section in guide
- _optional_ (accessible at `registrations.optional`). Out of applicable all that are _not mandatory_. This collection doesn't have any influence on further flow. Its just to differentiate _mandatory_ registrations from _optional_ so they can be displayed in adequate section in guide.
- _requested_ (accessible at `registrations.requested`). Out of applicable all that were _requested_ (checked in guide) by user. This is the collection out of which we resolve further requirements on which documents we expect investor to upload or payments to cover.

Some services are purely about one registration that by all means in this context is applicable, and naturally should be assumed as requested for process to make sense. In such scenario we do not show _Registrations_ box in a guide, and model wise the only registration is both _applicable_ and _requested_.

In further turn set of _requested_ registrations directly influences outcome of following entities collections:

###### Certificates (represented at `certificates` namespace)

`certificates.map` has predefined all possible certificates for given services, and `certificates.applicable` reflect subset of all _applicable_ certificates which is resolved out of `registrations.requested` collection.

Certificate usually reflects 1 to 1 mapping to registration (e.g. NIT registrations resolves with NIT certificate), still there may be cases when one registration resolves with two different certificates, or that it resolves with some conditionally (e.g. in past in Salvador system we had NIT registration, which resolved either with NIT certificate or NITi if investor declared himself as importer)

Resolved (applicable) certificates list is also not reflected in guide or any other page of Part B. It becomes a base for displaying certificate labels in table of business processes in Part B.

###### Requirements (represented at `requirements` namespace)

All (non payment) requirements we will have towards investor. In most common cases it's about documents to be further uploaded in documents section.
Sometimes it can be just general information that we will require an `id` but what specifically _id_ (whether national id or passport etc.) would have to be resolved in later part of a flow.

Resolved requirements are listed in top left part of a guide. Sometimes directly in this box given requirement may come with additional questions, e.g. in Salvador we have a requirement in which user have to decide which one of the 12 documents he wishes to provide to receive registration.

`requirements.map` has predefined all possible requirements. Then we have subset collections as:

- _resolved_ (accessible at `requirements.resolved`) All requirements resolved out of `registrations.requested`. It's _applicable_ and no this list that it's treated as a final
- _applicable_ (accessible at `requirements.applicable`) All _resolved_ requirements that have own `isApplicable` resolved to `true`.
Normally this collection equals _resolved_ collection. Still there can be rare cases where some requirements are applicable conditionally depending on resolution of some other requirements (e.g. we have requirement as general _Utility bill_ and other more specific _Electricity bill_, we don't want to request _Utility Bill_ when we also require _Electricity bill). It's strictly to address such cases why separation of `resolved` and `applicable` was made

###### Costs (represented at `costs` namespace)

All costs that investor has to cover to apply for requested registrations. All resolved costs are listed in bottom right part of Guide.
`costs.map` has predefined all possible costs. Then we have subset collections as:

- _applicable_ (accessible at `costs.applicable`) All costs resolves out of `registrations.requested`
- _payable_ (accessible at `costs.payable`) All _applicable_ and non-zero costs. There can be situation where given cost resolves as applicable, but it's `amount` computes to `0`, in such case we do not cover that cost in further processing. That's why it's _payable_ that's collection that's treated as final collection of costs.

###### Data forms (represented at `dataForms` namespace)

All form sections we require investor to fill. They're presented on next page after guide, marked as step `1` (guide is treated as step `0`).
`dataForms.map` has predefined all possible data form sections, the final set of forms that is displayed at the user is accessible at `dataForms.applicable`

###### Requirement uploads (represented at `requirementUploads` namespace)

All documents which we require to upload by investor in step `2`.
`requirementUploads.map` has predefined all possible uploads, the final set of requirement uploads is resolved out of `requirements.applicable` and is accessible at `requirementUploads.applicable`.

###### Payment receipt uploads (represented at `paymentReceiptUploads` namespace)

If there's no online payment integration we may require investor to upload payment receipts.
In interface list of payment receipt is handled very similarly as requirement uploads, and it's presented on step that follows requirement uploads.

`paymentReceiptUploads.map` has predefined all possible payment receipt uploads, the final applicable set is resolved out of `costs.applicable` and is accessible at `paymentReceiptUploads.applicable`.

###### Submission forms (represented at `submissionForms` namespace)

Final form sections that we require investor to fill. This sections are not about pursued registration specifically, but more about who will pick the registrations in the counter and at which institution.

They are organized similarly to Data Forms.  `submissionForms.map` has predefined all possible form sections, the final set of forms that is displayed to the user is accessible at `submissionForms.applicable`.

In addition `submissionForms` come with `submissionForms.isAffidavitSigned` property at which we mark that user send the file to official part (Part B) confirming that all data is true.

###### Processing Steps (represented at `processingSteps` namespace)

The flow of Part B is fully represented by Processing steps. Steps can be configured to run in any order and also to be in parallel against each other.

All service steps are defined at `processingSteps.map`, then all _applicable_ steps are accessible at `processingSteps.applicable` collection.

When file (business process) passes all steps, it is marked as an _approved_, which makes it _closed_.
Other scenario of getting file closed is to reject it. It may happen if e.g. someone sends registration as a joke (e.g. sending pictures of Mickey Mouse). In such case officers do not ask for corrections but just permanently reject the file.
