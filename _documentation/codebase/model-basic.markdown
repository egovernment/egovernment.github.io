---
layout: doc-pages
permalink: /framework/model-basic/
title: 'Database Model: Basic Types'
category: 'codebase'
lang: en
ref: model-basic
weight: 6
---

# Database Basics

This is complementary documentation to one that can be found at [dbjs](https://github.com/medikoo/dbjs)

## Descriptor properties

List of all predefined descriptor properties in eRegistrations configuration.
If you feel some of the properties are not documented, please report it or document it yourself.

### Common Descriptor properties

Properties that apply to all types:

#### `type: <DbjsType>`

Type of the property, defaults to `db.Base` which technically means no forced type (value can be saved as either number, string, object etc). _There should be no property definitions that omit `type` setting_.

#### `required: <Boolean>`

Is property required. Setting this to `true` means two things in practice:
- You won't be able to delete (or set to `null`) this property using public API
- If property is used in form section it will be marked as `required`.

#### `multiple: <Boolean>`

Whether property exposes multiple value. If set to `true`, the value at all times is expressed with [Set](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set).
No saved values resolve with an empty set.
It cannot be used together with `nested: true`. Using together `required: true` will not allow to empty set that contains some values.

#### `nested <Boolean>`

Whether property is destined to expose a namespace object. A namespaced object will allow for nested definitions as e.g. `object.address.street`. It's never expressed with any physical record on instances as its existence is purely forced by model definition.
Naturally cannot be used together with `multiple: true`. Must be used together with `type` that is or extends `Object` type.

#### `value <any|getterFunction>`

Default value for a property, or if a function (with 0 `length`, or `length` 1 and `_observe` named argument) then a _getter_ for computed property.

#### `label <String>`

Human friendly name of a property, technically a _label_ that is displayed by filed if it's part of the form or table.

#### `inputHint <String>`

When property is part of a form section, the value of this property is displayed under input control

### Type specific descriptor properties

#### `min <Number>`

For `Number` and `DateTime` types indicates minimum value, for `String` type indicates minimum allowed length

#### `max <Number>`

For `Number` and `DateTime` types indicates maximum value, for `String` type indicates maximum allowed length

#### `step <Number>`

For `Number` and `DateTime` types indicates allowed granularity. e.g. to express _integer_ we may provide `step: 1` (still mind we have dedicated `Integer` type)`


#### `pattern <RegExp>`

Applicable to `String` type. Format of a string expressed with regular expression. if string doesn't match format it will be considered invalid. When providing, to ensure whole string is strictly matched, it's important to include start (`^`) and end (`$`) marks as e.g. if we want to valid Polish zip-code, pattern should be: `/^\d{2}-\d{3}$/`

#### `inuptMask <String>`

If we want to support form input control with special mask guide, we should express it's format with this property. Naturally it should match provided pattern.
Rules are that:

- `X` Character from range of `0-1` and `a-z` (case insensitive)  
- `A` Character from range `a-z` (case insensitive)  
- `8` Character from range `0-1`  
)_- `?` Marks any previous character as optional  
- _(any other)_  Specifically this character.

Therefore to e.g. Polish zip-code could be expressed as `88-888`

#### `inputPlaceholder <String>`

Applicable to types: `StringLine`, `Email`, `Url`, `Password`

Value for eventual placeholder exposed when input is empty

#### `trueLabel <String>`

Applicable to `Boolean` type. Label to be shown by the _true_ radio button

#### `falseLabel <String>`

Applicable to `Boolean` type. Label to be shown by the _false_ radio button

#### `selectField <String>`

Applicable to property that resolves out of values from two other files, usually serves predefined `slectOther` component. Where we have a `<select>` control with `Other..` option and if this option is selected we ask user in free form to enter the value into text input.
Through this property we indicate which property is responsible for `select` value.
It comes together with `otherField` setting which states which property is responsible for text input value.

#### `otherField <String>`

See `selectField` (it's used together with it)

## Basic types

The [dbjs](https://github.com/medikoo/dbjs) on it's own comes with following basic types, which reflect JavaScript language basic types.

#### `Boolean`

A boolean value

#### `Number`

Number value (follows JavaScript `Number` characteristics)

#### `String`

Unrestricted string value. This type should be used for properties that we intend to reflect with `<textarea>` form control

#### `DateTime`

Date and time representation with milliseconds accuracy.

#### `RegExp`

Regular expression type. Not used for normal properties, but used to describe it's characteristics (e.g. `pattern` property)
### `Function`

Function type. Very rarely used to define methods. It's important that `function` must accept at least one argument. Anything that doesn't accept arguments is in dbjs considered as a getter so normal computed property that should be reflected with type that represents value to be returned.

#### `Object`

A generic object type. Base for any other object extensions (`User`, `BusinessProcess` etc.)

## Basic extension types

The basic extension types are defined and grouped in [dbjs-ext](https://github.com/medikoo/dbjs-ext#dbjs-ext) project

### List of commonly used types:

#### `Date` (extends `DateTime`)

Date representation (with not time information). Its value purely means given calendar date, with no inclination of time-zones. In every timezone given date value will represent same calendar date value.

#### `Integer` (extends `Number`)

Integer number value

#### `UInteger` (extends `Integer`)

Natural number value

#### `Percentage` (extends `Number`)

Percentage value (in raw form `100%` is represented by value `1`)

#### `SquareMeters` (extends `Number`)

Square meters value

#### `Currency` (extends `Number`)

An abstract extends `Number` in end system specific currency (type that derives from `Currency) should be used, as e.g. `UsDollar`, `ArgentinePeso` etc.

#### `StringLine` (extends `String`)

String restricted to not have new line characters. This type is commonly used for properties that we intend to express with normal (single line) text inputs (e.g. "First Name" etc.)

#### `Email` (extends `StringLine`)

Email address

#### `Password` (extends `StringLine`)

Password

#### `Url` (extends `StringLine`)

Url address

#### `Filename` (extends `StringLine`)

System filename

#### `Gender` (extends `StringLine`)

Enum restricted to `M` and `F` strings

#### `Country` (extends `StringLine`)

Enum restricted to list of country codes.
Note: `Country` would serve better if it would actually be represented as an extension to `Object` type.

#### `File` (extends `Object`)

Representation of system file.


### Enum types

[dbjs-ext](https://github.com/medikoo/dbjs-ext) also exposes utility that allows us to create an enum types.

They can be defined as follows:


```javascript

var createEnum = require('dbjs-ext/create-enum');

// Ensure enum utils on db types
createEnum(db);

var Gender = db.StringLine.createEnum(
  <// Name of a new type
  'Gender',
  // Allowed values
  ['F', 'M'],
  // Meta data (labels for allowed values)
  { F: { label: "Female" }, M: { label: "Male" } }
);

```

Technically we can use any type as base for _enum_ still common use cases drive from `StringLine`, as in example above.
