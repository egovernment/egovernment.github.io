---
layout: recipe
permalink: /how-to/configure-the-determinant-of-a-service/
title: 'Define a new field'
category: '1. Part A'
sub-category: 'Determinants'
rate: '2'
number: '121'
introduction-text: 'This recipe is about adding new field to the model. Please note that adding a field to model is not enough to render it anywhere.'
introduction-img: '121-1.png'
prevUrl: 113
nextUrl: 122
done: ''
lang: en
ref: 121
---

All the model fields in part a belong to some service. So, prior to adding a field, you need to know for which service it is going to be set.

All the fields in the model are configured through [dbjs](https://github.com/medikoo/dbjs) engine.

Please read the [dbjs documentation](https://github.com/medikoo/dbjs/blob/master/README.md) before modifying model.

Especially important part is about [basic types](https://github.com/medikoo/dbjs/blob/master/README.md#basic-types).

Dbjs is already configured in all eregistrations systems, so there is no need to install it.

1. Open file `model/<your-service>/fields.js`.

It is here where most model definitions are created.

A typical definition looks something like this:


```javascript
BusinessProcessDemo.prototype.defineProperties({
    isLocalCapital: {
        type: db.Boolean,
        label: _("Is the capital local or foreign?"),
        inputHint: _("Choose 'yes' for local")
    }
});
```

Where `db` is a dbjs database. In order to reference `db` from within project you just need to require `<project-root>/db.js`.

So from `model/<your-service>/fields.js` you can do:

```javascript
var db = require('../../db');
```

When you add a new field, you first need to know to which object will the field belong. The most basic case is when you want to add a field to a business process.

This is the case we have in the snippet above (note that the field `isLocalCapital` is defined on the `prototype` NOT on the constructor).

In our example the created field is of the type `db.Boolean`. If you followed this recipe carefully you should already know that `db.Boolean` is a basic dbjs type (if you didn't, please read about [dbjs basic types](https://github.com/medikoo/dbjs/blob/master/README.md#basic-types)).

It follows that for every instance of dbjs you will have `db.Boolean` accessible. So, for every field that is of the basic dbjs type, you only need to make sure you have dbjs object (`db` in our example)

and do `type: db.<TypeForNewField>` in the definition.

Quite often you will find yourself needing some more specific type than the basic dbjs type. Such types are defined either in [`dbjs-ext`](https://github.com/medikoo/dbjs-ext) module, or in [`eregistrations`](https://github.com/egovernment/eregistrations) module, or even in your project's model.

Such more specific types need to be required independently on per case basis.

A good example of a widely used non basic type is `dbjs-ext/string/string-line` [See here](https://github.com/medikoo/dbjs-ext/blob/master/string/string-line.js) (this type represents a line of text without new line characters).

Here is how you require `dbjs-ext` type:

```javascript
var StringLine = require('dbjs-ext/string/string-line')(db);
```

Were, again, `db` is dbjs object. Two important things to note here are:
1. You need to pass db object to the required module.
2. You have to (by convention) call your local variable as the camelCased version of the module name (e.g. `StringLine` for `string-line`).


### Common `dbjs-ext` types:

* [`dbjs-ext/string/string-line`](https://github.com/medikoo/dbjs-ext/blob/master/string/string-line.js) - A string without new line characters.

* [`dbjs-ext/number/integer/u-integer`](https://github.com/medikoo/dbjs-ext/blob/master/number/integer/u-integer.js) - A non negative integer [0, Infinity).

* [`dbjs-ext/date-time/date`](https://github.com/medikoo/dbjs-ext/blob/master/date-time/date.js) - A dbjs representation of date (when using this, you should name your local variable `DateType`).

* [`dbjs-ext/string/string-line/email`](https://github.com/medikoo/dbjs-ext/blob/master/string/string-line/email.js) - An email.

* [`dbjs-ext/number/currency/us-dollar`](https://github.com/medikoo/dbjs-ext/blob/master/number/currency/us-dollar.js) - Representation of USD currency (note it extends generic currency class).

* [`dbjs-ext/number/percentage`](https://github.com/medikoo/dbjs-ext/blob/master/number/percentage.js) - A percentage (expressed as a number in range [0, 1] where 0 means 0% and 1 means 100%).

For the full overview [see](https://github.com/medikoo/dbjs-ext/blob/master/README.md).

As mentioned earlier you sometimes want to use types that are [`eregistrations`](https://github.com/egovernment/eregistrations) specific.


### Common `eregistrations` types:

* [`eregistrations/model/person`](https://github.com/egovernment/eregistrations/blob/master/model/person.js) - Represents a human being (the `User` class extends this one, often used as base type for individuals associated with a service (partners, representatives, auditors)).

* [`eregistrations/model/lib/progress-rule`](https://github.com/egovernment/eregistrations/blob/master/model/lib/progress-rule.js) - Used to setup some custom validation logic for section.

* [`eregistrations/model/document`](https://github.com/egovernment/eregistrations/blob/master/model/document.js) - Base class for the documents setup in the end system.

* [`eregistrations/model/cost`](https://github.com/egovernment/eregistrations/blob/master/model/cost.js) - Base class for costs setup in the end system.

* [`eregistrations/model/institution`](https://github.com/egovernment/eregistrations/blob/master/model/institution.js) - Base class for institutions setup in the end system.

* [`eregistrations/model/file`](https://github.com/egovernment/eregistrations/blob/master/model/file.js) - Represents a file.


Finally there is a group of types that are most likely defined in the end system:


### Common end system types:

* `<project-root>model/lib/country`               - A set of countries (Used e.g. for creating a select with countries to choose from).

* `<project-root>model/lib/gender`                - A set of values determining the gender.

* `<project-root>model/lib/town`                  - A set of available towns (Used e.g. for creating a select with towns to choose from).

* `<project-root>model/lib/<your-country>address` - This object contains properties which enable gathering of address data as required by your country.


The field's type is it's most important property as it will determine most of the property's behaviour.

Other common properties of fields which you will encounter are:

* `falseLabel` (`String`)  - Makes sense only when the `type` of the field is `Boolean`. Value of this property will be associated with input representing `false` value of the field.
* `inputHint`  (`String`)  - Value of this is rendered near the field and provides additional information for the user filling in the form.
* `label`      (`String`)  - Defines a label used later in the form.
* `nested`     (`Boolean`) - Determines if a property is a nested object (`nested: true`). [See this article about nested objects]().
* `multiple`   (`Boolean`) - Set this to `true` when you have a collection (note: the `type` of the field references a single item, not the type of the whole collection - collections are slightly extended [sets](https://github.com/medikoo/es6-set))
* `required`   (`Boolean`) - Determines if the field has to be non empty upon submission (`true` for when the field cannot be empty).
* `trueLabel`  (`String`)  - Makes sense only when the `type` of the field is `Boolean`. Value of this property will be associated with input representing `true` value of the field.
* `value`                  - Can be a static like `{ type: db.Number, value: 5 }` or a function (which is automatically transformed into getter). [See article about dbjs getters]()


---

## Example

In the branch "[define-a-new-field](https://github.com/egovernment/eregistrations-demo/tree/define-a-new-field)" of eregistrations-demo :

Add a new field `isLocalCapital` (type: `Boolean`, label:  *"Is the capital local or foreign?"*, inputHint: *"Choose 'yes' for local"*) to Business Process Demo service.

### Solution

<div id="files" class="diff-view " onclick="window.open('https://github.com/egovernment/eregistrations-demo/compare/define-a-new-field...define-a-new-field-solution#files')">

        
<a name="diff-ff865e3a54b66a1c0895c04cc66fa0d4"></a>
<div id="diff-0" class="file js-details-container
             
             
             
             
             show-inline-notes
           ">
  <div class="file-header" data-path="model/business-process-demo/fields.js">
    <div class="file-actions">
        <span class="show-file-notes">
          <label>
            <input type="checkbox" checked="checked" class="js-toggle-file-notes">
            Show notes
          </label>
        </span>

          <a href="/egovernment/eregistrations-demo/blob/ea85fb535beb1cbd8662b6f05c5381d07eb47ad2/model/business-process-demo/fields.js" class="btn btn-sm tooltipped tooltipped-nw" rel="nofollow" aria-label="View the whole file at version ea85fb5 ">View</a>


    </div>
    <div class="file-info">
        <span class="diffstat tooltipped tooltipped-e" aria-label="5 additions &amp; 0 deletions">5 <span class="block-diff-added"></span><span class="block-diff-added"></span><span class="block-diff-added"></span><span class="block-diff-added"></span><span class="block-diff-added"></span></span>

      <span class="user-select-contain" title="model/business-process-demo/fields.js">
        model/business-process-demo/fields.js
      </span>
      
    </div>
  </div>

      <div class="data highlight blob-wrapper">
        <table class="diff-table tab-size  " data-tab-size="8">
          
      <tbody><tr class="js-expandable-line" data-position="0">
    <td class="blob-num blob-num-expandable" colspan="2">
      <a href="#diff-ff865e3a54b66a1c0895c04cc66fa0d4" class="diff-expander js-expand" title="Expand" aria-label="Expand" data-url="/egovernment/eregistrations-demo/blob_excerpt/315b4df969b251e28cae10fa81bcb97818b19488?diff=unified&amp;in_wiki_context=&amp;left_hunk_size=5&amp;mode=100644&amp;next_line_num_left=31&amp;next_line_num_right=31&amp;path=model%2Fbusiness-process-demo%2Ffields.js&amp;prev_line_num_left=&amp;prev_line_num_right=&amp;right_hunk_size=10" data-left-range="1-30" data-right-range="1-30">
        <svg aria-hidden="true" class="octicon octicon-unfold" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path d="M11.5 7.5L14 10c0 .55-.45 1-1 1H9v-1h3.5l-2-2h-7l-2 2H5v1H1c-.55 0-1-.45-1-1l2.5-2.5L0 5c0-.55.45-1 1-1h4v1H1.5l2 2h7l2-2H9V4h4c.55 0 1 .45 1 1l-2.5 2.5zM6 6h2V3h2L7 0 4 3h2v3zm2 3H6v3H4l3 3 3-3H8V9z"></path></svg>
      </a>
    </td>
    <td class="blob-code blob-code-inner blob-code-hunk">@@ -31,5 +31,10 @@ BusinessProcessDemo.prototype.defineProperties({</td>
  </tr>

    <tr>
    <td id="diff-ff865e3a54b66a1c0895c04cc66fa0d4L31" data-line-number="31" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-ff865e3a54b66a1c0895c04cc66fa0d4R31" data-line-number="31" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner"> 	attorney<span class="pl-k">:</span> {</span>

  </td>
</tr>


    <tr>
    <td id="diff-ff865e3a54b66a1c0895c04cc66fa0d4L32" data-line-number="32" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-ff865e3a54b66a1c0895c04cc66fa0d4R32" data-line-number="32" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner"> 		type<span class="pl-k">:</span> <span class="pl-smi">db</span>.<span class="pl-smi">Person</span>,</span>

  </td>
</tr>


    <tr>
    <td id="diff-ff865e3a54b66a1c0895c04cc66fa0d4L33" data-line-number="33" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-ff865e3a54b66a1c0895c04cc66fa0d4R33" data-line-number="33" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner"> 		nested<span class="pl-k">:</span> <span class="pl-c1">true</span></span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-ff865e3a54b66a1c0895c04cc66fa0d4R34" data-line-number="34" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+	},</span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-ff865e3a54b66a1c0895c04cc66fa0d4R35" data-line-number="35" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+	isLocalCapital<span class="pl-k">:</span> {</span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-ff865e3a54b66a1c0895c04cc66fa0d4R36" data-line-number="36" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+		type<span class="pl-k">:</span> <span class="pl-smi">db</span>.<span class="pl-smi">Boolean</span>,</span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-ff865e3a54b66a1c0895c04cc66fa0d4R37" data-line-number="37" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+		label<span class="pl-k">:</span> <span class="pl-en">_</span>(<span class="pl-s"><span class="pl-pds">"</span>Is the capital local or foreign?<span class="pl-pds">"</span></span>),</span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-ff865e3a54b66a1c0895c04cc66fa0d4R38" data-line-number="38" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+		inputHint<span class="pl-k">:</span> <span class="pl-en">_</span>(<span class="pl-s"><span class="pl-pds">"</span>Choose 'yes' for local<span class="pl-pds">"</span></span>)</span>

  </td>
</tr>


    <tr>
    <td id="diff-ff865e3a54b66a1c0895c04cc66fa0d4L34" data-line-number="34" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-ff865e3a54b66a1c0895c04cc66fa0d4R39" data-line-number="39" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner"> 	}</span>

  </td>
</tr>


    <tr>
    <td id="diff-ff865e3a54b66a1c0895c04cc66fa0d4L35" data-line-number="35" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-ff865e3a54b66a1c0895c04cc66fa0d4R40" data-line-number="40" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner"> });</span>

  </td>
</tr>



        </tbody></table>
      </div>
</div>

</div>
