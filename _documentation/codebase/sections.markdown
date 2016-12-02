---
layout: doc-pages
permalink: /framework/sections/
title: 'Sections (mechanism for forms configuration)'
category: 'codebase'
lang: en
ref: sections
weight: 7
---

# Sections

**Sections** are a set of components which organize most of the application's forms. Unless your form is custom there is a good chance you should use **Sections** to create it.

**Sections should be used for building:**

- User forms (second step, after guide of user application)

- Send application forms (last step of user application)

- Certificate forms in part B

## Overview

**Sections** are used as an abstraction layer over models to group model data for usage in client. They are then used in views to generate forms or display data systematically.

Let's say we have a form in which we want to use fields from different models and we need to add some (show/hide) logic between those fields, without **Sections** we would write it all directly in views. We would also need to include some legacy handling with radio/select matches etc, with **Sections** we can define all of this in a concise way in model.

## Working With Sections

Sections are objects, hence they can be defined as nesteds on any `dbjs` object. However, most of the time you will work with predefined collections of sections.

The most common collections are: `User.prototype.dataForms` and `BusinessProcess.prototype.dataForms`.

In both cases `dataForms` is of type `PropertyGroupsProcess` (`eregistrations/model/lib/property-groups-process.js`).

This means that you can easily browse the collection of applicable sections (ones which need to be filled by user) at a given time by calling

`<yourBusinessProcess>.dataForms.applicable`.

Most of the time you will need to configure sections on `<YourBusinessProcess>.prototype.dataForms` (add new ones, change applicability, change form fields which contribute to section).

OK, this all sounds fantastic, but let's get down to business of actually configuring sections.

First we need a model to which we refer (remember, that sections are abstractions over regular model fields):

```javascript
var db          = require('../../db')
  , _           = require('../../i18n').bind("Section example")
  , StringLine  = require('dbjs-ext/string/string-line')(db)
  , FormSection = require('eregistrations/model/form-section')(db)
  , User        = require('eregistrations/model/user')(db);

db.Object.extend('SimpleAddress', {
	country: { type: StringLine, required: true, label: _("Country") },
	street: { type: StringLine, label: _("Street") }
});

db.Object.extend('Partner', {
	name: { type: StringLine, label: _("Name") },
	isShareholder: { type: db.Boolean, label: _("Is the partner shareholder?") }
});

User.prototype.defineProperties({
	name: { type: StringLine, required: true, label: _("Name") },
	isNice: { type: db.Boolean, value: true, required: true, label: _("Is the user nice") },
	explainWhyNotNice: { type: db.String, required: true, label: _("Why is user not nice?") },
	address: { type: db.SimpleAddress, nested: true },
	partners: { type: db.Partner, multiple: true }
});
```

You can find this example in the demo project on branch [`playground`](https://github.com/egovernment/eregistrations-demo/tree/playground).

If you want to see it displayed, start the app and go to a user account. Once there, click the "playground" from the upper menu.


Let's say we want to have a form which will allow edition of following fields: `user.name`, `user.isNice`, `user.explainWhyNotNice`, `user.address.country`, `user.address.street`.

Obviously, when someone is _nice_ we don't want to show the field asking for explanation why the user is not _nice_ (_if !user.isNice -> show user.explainWhyNotNice_).

We can either create one form with all the fields or break it into sub sections. Let's see how we would have created a form with no subsections. This case is handled by FormSection class:

### FormSection

```javascript
// Define a Type that would represent a specific section
FormSection.extend('GeneralInfoFormSection', {
	// Section label
	label: { value: "User information" },
	// Form POST url
	actionUrl: { value: 'general' },
	// Property names of all involved fields (order is significant)
	propertyNames: { value: ['name', 'isNice', 'explainWhyNotNice',
		'address/country', 'address/street'] }
});

// We define section, so that it's usable in the context of User instance.
User.prototype.defineProperties({
	section: {
		type: db.GeneralInfoFormSection,
		nested: true
	}
});

// As explainWhyNotNice field should be shown conditionally, we define a condition for it.
// This condition is a getter and it's name should follow convention.
// The convention to create such getter's name // is: is<CapitalizedNameOfProperty>Applicable, so
// in our example it's isExplainWhyNotNiceApplicable. If we wanted to show name field conditionally
// it would have been isNameApplicable.
User.prototype.define('isExplainWhyNotNiceApplicable', {
	value: function () {
		return !this.isNice;
	}
});
```

To display a section in a view (note that you need to provide the client with the proper binding in order for that to work):

```javascript
var generateFormSections = require('eregistrations/components/generate-form-sections');

h1('User Data');
div(User.prototype.section.toDOMForm(document));
```

We import section's view generator and use it on the formSections field which we defined for user.
This should lead to display of desired form. If the controllers are working (they still need to be configured manually) and we configured correct url in GeneralInfoFormSection.actionUrl, we should have fully working form by now.

What if we want to have the same form but grouped in two subsections: Personal Information, Address Details? We would use FormSectionGroup for that:

### FormSectionGroup

Let's assume we want to have two subsections: _Personal Information_ and _Address Details_.  
In _Personal Information_ we want to have: `user.name`, `user.isNice`, `user.explainWhyNotNice`.  
In _Address Details_ we'll have: `user.address.country`, `user.address.street`:

```javascript
var db                    = require('../../db')
  , _                     = require('../../i18n').bind("Section example")
  , FormSection           = require('eregistrations/model/form-section')(db)
  , FormSectionGroup      = require('eregistrations/model/form-section-group')(db)
  , getApplicablePropName = db.Object.getApplicablePropName
  , User                  = require('./user');

// We define section, so that it's usable in the context of User instance.
User.prototype.defineProperties({
	sectionGroup: {
		type: FormSectionGroup,
		nested: true
	}
});

User.prototype.sectionGroup.sections.defineProperties({
	personalInformation: { type: FormSection, nested: true },
	addressDetails: { type: FormSection, nested: true }
});

var subSections = User.prototype.sectionGroup.sections;

subSections.personalInformation.setProperties({
	label: _("Personal Information"),
	propertyNames: ['name', 'isNice', 'explainWhyNotNice']
});

subSections.addressDetails.setProperties({
	label: _("Address Details"),
	propertyNames: ['address/country', 'address/street']
});

// As explainWhyNotNice field should be shown conditionally, we define a condition for it.
// This condition is a getter and it's name should follow convention.
// The convention to create such getter's name // is: is<CapitalizedNameOfProperty>Applicable, so
// in our example it's isExplainWhyNotNiceApplicable. If we wanted to show name field conditionally
// it would have been isNameApplicable.
// Here, we use helper method getApplicablePropName, which expects the name of the original property

User.prototype.set(getApplicablePropName('explainWhyNotNice'), function () {
	return !this.isNice;
});
```

Note, how we approached the sections defining a bit differently. Instead of defining the whole class we simply defined a nested on `User.prototype` with a desired type (`FormSectionGroup`).

This classless approach is more common. Actually you should define sections as classes only when you want to reuse them across several contexts.

Let's look more closely at what happened above. We defined `sectionGroup` nested as `FormSectionGroup`.

Every `FormSectionGroup` has property `sections` which is a nested map. Later on we defined two entries on `User.prototype.sectionGroup.sections` map:

`personalInformation` and `addressDetails`, both representing regular `FormSection`s.

From there on we simply did the setup for those 2 sections.

Take a look at the end of listing. We have the same applicability setup for explainWhyNotNice, but we used a different approach to define it.

Actually, it's this time when we did it as we should, with the usage of `getApplicablePropName` helper.


### FormEntitiesTable

In eregistrations we usually need to create a table which groups objects of certain type/types which belong to `businessProcess`.
For example a table of _partners_. There is a section class to handle such cases `FormEntitiesTable`.

`FormEntitiesTable` is used for display of already created entities, but it does not provide configuration for forms with which we add or update given entity, as this again is done with _Sections_ configuration based on model of given entity (we just need to follow the same steps we used for user).

As a matter of fact we should begin our work with partners (or any any other external entities we need to assign to `businessProcess`) with preparation of **Sections** config for them.
Such setup might look like this:

```javascript
// Some model to which we'll refer
Partner.prototype.defineProperties({
    name: { type: db.StringLine }
    isShareholder: { type: db.Boolean }
});

var defineFormSections = require('eregistrations/model/form-sections')
  , FormSection        = require('eregistrations/model/form-section');

defineFormSections(Partner, 'formSections');

FormSection.extend('PartnerFormSection', {
    label: { value: "Partner information" },
    actionUrl: { value: 'partner' },
    propertyNames: { value: ['name', 'isShareholder'] }
});

Partner.prototype.formSections.define('partnerFormSection', { type: db.PartnerFormSection });
```

We need to pass `isChildEntity` option to `eregistrations/components/generate-form-sections` invocation in order for the partner form to build it's forms urls correctly.

```javascript
var generateFormSections = require('eregistrations/components/generate-form-sections');

h1('Add Partner');
div(generateFormSections(Partner.prototype.formSections, { isChildEntity: true }));

```

Form created around the above form section definition will have `section.actionUrl + '-add'` url (in that case `partner-add`) url for partner creation  and `section.actionUrl + '/' + <partnerId>` url for edition of existing partner.


Let's now create **FormEntitiesTable** for partners.

```javascript
var EntitiesTable = require('eregistrations/model/form-entities-table')(db)
  , TabularEntity = require('eregistrations/model/form-tabular-entity')(db)

EntitiesTable.extend('PartnersTableSection', {
    baseUrl: { value: 'partner' },
	propertyName: { value: 'partners' },
	entityTitleProperty: { value: 'name' },
	sectionProperty: { value: 'formSections' }
});

db.PartnersTableSection.prototype.entities.add(new TabularEntity({
	propertyName: 'name'
}));
db.PartnersTableSection.prototype.entities.add(new TabularEntity({
	propertyName: 'isShareholder'
}));

user.formSections.define('partnersTableSection', { type: db.PartnersTableSection });
```

Explanation of some `EntitiesTable` properties:

**propertyName** tells us on what user's property are defined our entities (in this example it leads us to `User.prototype.partners`).  
**sectionProperty** which should expose the property name under which the form sections are defined on our partner, in our case it's `formSections`.  
**entityTitleProperty** is where we tell **EntitiesTable** from which partner's property it should read every entity's title (it will be used after user has been submitted).  
**baseUrl** url base for add/edit form views. After defining this, table links and postButtons will have the correct action urls, so that all is left to do is to configure routing and controllers.

#### Defining FormEntitiesTable layout

`EntitiesTable` is used to display in a tabular fashion certain entities defined on user (in our example these entities are partners). The table will need to have columns, and with `TabularEntity` class you define characteristics of each column

`TabularEntity` just needs to have one property: `propertyName`, which tells us what partner's property will be displayed in a given column.

The order of adding `TabularEntity` to `EntitiesTable.prototype.entities` property determines the order of table columns. If everything worked well, you should now see an entities table in your view, together with other sections you defined previously.


### Conditional section resolution

Sometimes we have a section, that's displayed conditionally only if user explicitly decides so. Very common use case is _Business Address_ section, which is optional, and by default we leave user with preselected choice _It's same as home address_, still user may opt-out and fill custom address for his business.

Such sections can be configured with help of `resolventValue` property.

#### Example:

Let's add 'isResident' property to our User model. It will show/hide all the address depending on true/false value.

```javascript

User.prototype.defineProperty(
    'isResident': { type: db.Boolean, required: true}
)

```

Now we need to adjust our sections definitions.
 
 ```javascript
 FormSection.extend('PersonalInformationSection', {
     label: { value: "Personal Information" }
 }, {
     propertyNames: { value: ['name', 'isNice', 'explainWhyNotNice', 'isResident'] }
 });
 
 FormSection.extend('AddressDetailsSection', {
     label: { value: "Address Details" },
     resolventValue: { value: true },
     resolventProperty: { value: 'isResident' }
 }, {
     propertyNames: { value: ['address/country', 'address/street'] }
 });

 ```
 
Aside of `resolventProperty`, we also should define `resolventValue` (it tells us what value will trigger section visibility).

So, we can resolve form's conditional logic with the help of `is<CapitalizedNameOfProperty>Applicable` or with `resolventProperty`. But none of these two techniques will cover the case when a form's field presence depends on something completely external to this form i.e. a property defined in another form (like guide). Such dependency can be covered with usage of another convention. let's add a `isPrivateCompany` property to our user model. Let's assume this property is filled in the guide form, so we don't use it in our sections.

```javascript

User.prototype.define('isPrivateCompany', {
	type: db.Boolean
})

```

We now want to say that the `name` field should be present in our forms only if the company is private. 

```javascript

User.prototype.define('isNameFormApplicable', {
	value: function () {
		this.isPrivateCompany;
	}
});

```

As you can see the convention for resolving such logic is to create a property of the form `is<CapitalizedNameOfProperty>FormApplicable`.

### Status tracking ###

In eregistrations we use statuses (given as values of type `dbjs-ext/number/percentage`). They determine completion level of steps in _Part A_.
Every section has `status` property. Sections can calculate their statuses automatically. Automatic status calculation can save you some time but it's
good to remember that calculation is quite simplistic and you may encounter situations where you want to override it
(the `status` method is defined on section's prototype).

You don't have to (and usually shouldn't) iterate manually over `formSections` (the section's collection) to get overall section's status.
That's because once you define `formSections` property, another property with the name `yourSectionsPropertyNameStatus` (in our example `formSectionsStatus`)
will be created as well. The `formSectionsStatus` will give you the total status of sections it contains.
Sometimes your form is prefilled with some values like for example user's email. It may happen that you don't want to calculate status for such prefilled property, in other words you want the status to ignore email as long as email is ok. In that case you can use use `excludedFromStatusIfFilled` method.

#### Status weight ####

One more property which is automatically created together with `<nameOfSectionsCollection>Status` is `<nameOfSectionsCollection>Weight`.
This property is responsible for automatic calculation of weight of a given section collection status.
Just as we have `status` on each section's prototype, we also have `weight`. Weight is used to give importence to a section (by default each weight point corresponds to one property which is considered by status). So for example a section which has status calculation based on 3 fields will by default have a weight of 3, hence it will be less "imporatant" than a section with weight 4.


### View customization ###

Ok, so you can render forms seemlesly with sections. But what if you have a very custom form in a view and sections just will not render it? You will need to tweak `toDOMForm` or `toDOMFieldset` method of the section you want to customize. In an extreme situation you can overwrite it completely in `view/dbjs`. This way you can create completely custom markup. There is more subtle solution available if you don't need to rewrite everything and your section extends `FormSection`. You may call your section's super class `toDOMForm` or `toDOMFieldset` and pass to it an object as a last argument. This object must have a property called `customize` which is a function. Let's see an example:

```javascript
var db = require('mano').db;

module.exports = Object.defineProperty(db.CustomSection.prototype, 'toDOMForm',
	d(function (document/*, options */) {
		  return db.FormSection.prototype.toDOMForm.call(this, document, { customize: function (data) {
		  	var fieldset = data.fieldset, container = data.container, data.arrayResult;
		  	...
		  	container.appendChild(....)
		   }
		  });
		};
	})
);
```

In the above code the `data.fieldset` is the fieldset of the section, `data.container` is the whole section dom, `data.arrayResult` is an array of all elements returned from `toDOMForm` (section and legacy scripts).
The `customize` function will be called with the below arguments (depending on section class):


`FormSection`: `data.fieldset`, `data.container`, `data.arrayResult`, `data.form`


`FormGroupSection`: `data.subSections.<nameOfSubsectionAsInSectionMap>.fieldset`, `data.container`, `data.arrayResult`, `data.form`


`FormEntitiesTable`: `data.addButton`, `data.container`, `data.arrayResult`


`toDOMFieldset` method can be used on `FormSection`. It passes the following to customize:


`FormSection`: `data.arrayResult`, `data.fieldset`


### Sections after submission ###

Once user has submitted his application we display his data in _read-only_ view, both in the user-submitted's and official's view. There are also prepared DOM bindings for that:

```javascript
var generateSections = require('eregistrations/components/generate-sections');

h1('User Data');
div(generateSections(User.prototype.formSections));

```

### API ###

#### FormSectionBase (base class) ####

_prototype_

**isApplicable** The section will not by visible on view if false

**label** The label of the section (can be translated to form header, or header of data in user submitted)

**propertyMaster** The master object for property paths resolution.
    
**status** Status as used in steps for a given section, type dbjs-ext/number/percentage, default 1.

**weight** The weight of the section status. It is used to determine weighed status across sections. It is usually equal to number of fields covered by the section.
    
**resolventValue** Value to check against in resolving section visiblity, section is visible when section.master[section.resolventProperty] === section.resolventValue
    
**onIncompleteMessage** Used to overwrite default message which is shown through view/components/incomplete-form-nav.

**excludedFromStatusIfFilled** a multiple for which you can pass names of the properties you want excluded from status calculation if they were already provided for the form (for example from guide).

**actionUrl** The url to which the the form created around the section will be submitted.
	
**resolventProperty** This property is used together with `resolventValue`, to check if the fields section fields should be displayed.

**resolventProperty** The name of a property defined on section's master object.

#### FormSection ####

_prototype_

**formPropertyNames** Only for internal usage
    
**propertyNames** Only for internal usage
    
**inputOptions** Used to set input options for form. Note that in order to use it, you need to set every option separately i.e: `db.SomeFormClass.prototype.inputOptions.get('someProperty').set('disabled', true)`

**propertyNames** This is were the set containing all property names to be used in form is set.
    
#### FormSectionGroup ####

_prototype_

**sections** Used to setup child sections. Note that in order to use it, you need to set every child section separately i.e: `User.prototype.formSections.generalInfoFormSection.sections.define('personalInformatioSection', type: db.PersonalInformationSection })`
    
#### FormEntitiesTable ####

_prototype_

**baseUrl** the base url around which links and postButtons to entities will be created. By convention following links to following urls will be created: `section.baseUrl + '-add'`, `section.baseUrl + '/' + <entityId>`.
By convention url to delete an entity will be created: `section.baseUrl + '/' + <entityId> + '/delete'`
    
**propertyName** The name of section's master property to which the section refers i.e: `partners`. 
    
**entityTitleProperty** The name of property of entity from which the header will be taken i.e: `name` (the header will be taken from partner.name)
	
**entities** Set of objects of type `FormTabularEntity` which represent the table columns
	
**generateFooter** A placeholder for custom footer definition. If you want to create custom definition of footer, you should do it on `section.generateFooter` (this must be ecmaScript, not dbjs definition, so place it in view/dbjs). Your custom `generateFooter` function will receive one argument (with the value of `propertyName` of section's master i.e. the partners set of given user). 
	
**sectionProperty** The name of the property on which the sections collection has been defined on the entity. For example `formSections`.
	
**onEmptyMessage** The text of message displayed when there are no entities.
