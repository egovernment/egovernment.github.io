---
layout: recipe
permalink: /how-to/configure-a-determinant-for-a-field/
title: 'Configure a determinant for a field'
category: '1. Part A'
sub-category: 'Data'
rate: '2'
number: '167'
introduction-text: 'Some fields appear only if certain determinant(s) are fulfilled. Those determinant can be a registration  that is selected or the value(s) of a field of the form. This receipt explains how to set such determinant(s) to a field, or to remove it.'
introduction-img: '169.gif'
prevUrl: 166
nextUrl: 168
done: 'yes'
lang: en
ref: 167
---

We want to make a form field (let's call it slave) depend on some other field (let's call it master). First we have to know whether slave and master are in the same form.

If slave and master are in the same form:

1. Open the file `model/business-process-<your-service>/data-forms/<the-section-to-which-your-slave-and-master-belong-to>.js`.
2. Define a new property on the same object (usually `<YourBusinessProcess>.prototype`) as your slave field. <br>
The new field should be named (`is<Slave>Applicable`) and should be a getter returning `true` or `false`.<br>
Whenever `is<Slave>Applicable`* getter returns `true`, the field `<slave>` will be shown, otherwise it will be hidden.
Please see the example below for better overview.

*- You should use `db.Object.getApplicablePropName` method to create the new field (see the example on how to use it).

If the slave is not in the same form as it's master:

1. Open the file `model/business-process-<your-service>/data-forms/<the-section-to-which-your-slave-belongs-to>.js`.
2. Define a new property on the same object (usually `<YourBusinessProcess>.prototype`) as your slave field. <br>
The new field should be named (`is<Slave>FormApplicable`) and should be a getter returning `true` or `false`.<br>
Whenever `is<Slave>FormApplicable`\** getter returns `true`, the field `<slave>` will be shown, otherwise it will be hidden.

\**- You should use `db.Object.getFormApplicablePropName` method to create the new field (see the example on how to use it).

Also, please note that there is a a slight difference in the behavior between the two situations described above.

In the case of slave and master being in the same form, the state changes of master will immediately affect the slave.

For the other case (salve is in a different form than master) however, the changes will not take place until the form is saved (so only after master's state is saved to database, the slave will react).


## Example

In the branch "[configure-a-determinant-for-a-field](https://github.com/egovernment/eregistrations-demo/tree/configure-a-determinant-for-a-field)" of eregistrations-demo :

Ensure that the `city` and `street` of `address` are shown only when `BusinessProcessDemo.prototype.address.country` is *"PL"* (*"Poland"*).

### Solution

<div id="files" class="diff-view " onclick="window.open('https://github.com/egovernment/eregistrations-demo/compare/configure-a-determinant-for-a-field...configure-a-determinant-for-a-field-solution#files')">


<a name="diff-53f79c542766de850c2eaad74abdae0b"></a>
<div id="diff-0" class="file js-details-container




             show-inline-notes
           ">
  <div class="file-header" data-path="model/business-process-demo/data-forms/company-information.js">
    <div class="file-actions">
        <span class="show-file-notes">
          <label>
            <input type="checkbox" checked="checked" class="js-toggle-file-notes">
            Show comments
          </label>
        </span>

          <a href="/egovernment/eregistrations-demo/blob/1b6a9d6bd6aaafa03c87396daab089d64b9d48d6/model/business-process-demo/data-forms/company-information.js" class="btn btn-sm tooltipped tooltipped-nw" rel="nofollow" aria-label="View the whole file at version 1b6a9d6 ">View</a>


    </div>
    <div class="file-info">
        <span class="diffstat tooltipped tooltipped-e" aria-label="10 additions &amp; 1 deletion">11 <span class="block-diff-added"></span><span class="block-diff-added"></span><span class="block-diff-added"></span><span class="block-diff-added"></span><span class="block-diff-neutral"></span></span>

      <span class="user-select-contain" title="model/business-process-demo/data-forms/company-information.js">
        model/business-process-demo/data-forms/company-information.js
      </span>

    </div>
  </div>

      <div class="data highlight blob-wrapper">
        <table class="diff-table tab-size  " data-tab-size="8">

      <tbody><tr class="js-expandable-line" data-position="0">
    <td class="blob-num blob-num-expandable" colspan="2">
      <a href="#diff-53f79c542766de850c2eaad74abdae0b" class="diff-expander js-expand" title="Expand" aria-label="Expand" data-url="/egovernment/eregistrations-demo/blob_excerpt/6c9983e9d73f709ed198a647f6e38c7283b24822?diff=unified&amp;in_wiki_context=&amp;left_hunk_size=7&amp;mode=100644&amp;next_line_num_left=3&amp;next_line_num_right=3&amp;path=model%2Fbusiness-process-demo%2Fdata-forms%2Fcompany-information.js&amp;prev_line_num_left=&amp;prev_line_num_right=&amp;right_hunk_size=8" data-left-range="1-2" data-right-range="1-2">
        <svg aria-hidden="true" class="octicon octicon-unfold" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path d="M11.5 7.5L14 10c0 .55-.45 1-1 1H9v-1h3.5l-2-2h-7l-2 2H5v1H1c-.55 0-1-.45-1-1l2.5-2.5L0 5c0-.55.45-1 1-1h4v1H1.5l2 2h7l2-2H9V4h4c.55 0 1 .45 1 1l-2.5 2.5zM6 6h2V3h2L7 0 4 3h2v3zm2 3H6v3H4l3 3 3-3H8V9z"></path></svg>
      </a>
    </td>
    <td class="blob-code blob-code-inner blob-code-hunk">@@ -3,7 +3,8 @@</td>
  </tr>

    <tr>
    <td id="diff-53f79c542766de850c2eaad74abdae0bL3" data-line-number="3" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-53f79c542766de850c2eaad74abdae0bR3" data-line-number="3" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner"> <span class="pl-k">var</span> db                  <span class="pl-k">=</span> <span class="pl-c1">require</span>(<span class="pl-s"><span class="pl-pds">'</span>../../../db<span class="pl-pds">'</span></span>)</span>

  </td>
</tr>


    <tr>
    <td id="diff-53f79c542766de850c2eaad74abdae0bL4" data-line-number="4" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-53f79c542766de850c2eaad74abdae0bR4" data-line-number="4" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner">   , _                   <span class="pl-k">=</span> <span class="pl-c1">require</span>(<span class="pl-s"><span class="pl-pds">'</span>../../../i18n<span class="pl-pds">'</span></span>)</span>

  </td>
</tr>


    <tr>
    <td id="diff-53f79c542766de850c2eaad74abdae0bL5" data-line-number="5" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-53f79c542766de850c2eaad74abdae0bR5" data-line-number="5" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner">   , FormSection         <span class="pl-k">=</span> <span class="pl-c1">require</span>(<span class="pl-s"><span class="pl-pds">'</span>eregistrations/model/form-section<span class="pl-pds">'</span></span>)(db)</span>

  </td>
</tr>


    <tr>
    <td id="diff-53f79c542766de850c2eaad74abdae0bL6" data-line-number="6" class="blob-num blob-num-deletion js-linkable-line-number"></td>

    <td class="blob-num blob-num-deletion empty-cell"></td>

  <td class="blob-code blob-code-deletion">

    <span class="blob-code-inner">-  , BusinessProcessDemo <span class="pl-k">=</span> <span class="pl-c1">require</span>(<span class="pl-s"><span class="pl-pds">'</span>../fields<span class="pl-pds">'</span></span>);</span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-53f79c542766de850c2eaad74abdae0bR6" data-line-number="6" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+  , BusinessProcessDemo <span class="pl-k">=</span> <span class="pl-c1">require</span>(<span class="pl-s"><span class="pl-pds">'</span>../fields<span class="pl-pds">'</span></span>)</span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-53f79c542766de850c2eaad74abdae0bR7" data-line-number="7" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+  , getApplicablePropName <span class="pl-k">=</span> <span class="pl-smi">db</span>.<span class="pl-smi">Object</span>.<span class="pl-smi">getApplicablePropName</span>;</span>

  </td>
</tr>


    <tr>
    <td id="diff-53f79c542766de850c2eaad74abdae0bL7" data-line-number="7" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-53f79c542766de850c2eaad74abdae0bR8" data-line-number="8" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner"> </span>

  </td>
</tr>


    <tr>
    <td id="diff-53f79c542766de850c2eaad74abdae0bL8" data-line-number="8" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-53f79c542766de850c2eaad74abdae0bR9" data-line-number="9" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner"> <span class="pl-smi">BusinessProcessDemo</span>.<span class="pl-c1">prototype</span>.<span class="pl-smi">dataForms</span>.<span class="pl-smi">map</span>.<span class="pl-en">define</span>(<span class="pl-s"><span class="pl-pds">'</span>companyInformation<span class="pl-pds">'</span></span>, {</span>

  </td>
</tr>


    <tr>
    <td id="diff-53f79c542766de850c2eaad74abdae0bL9" data-line-number="9" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-53f79c542766de850c2eaad74abdae0bR10" data-line-number="10" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner"> 	nested<span class="pl-k">:</span> <span class="pl-c1">true</span>,</span>

  </td>
</tr>


      <tr class="js-expandable-line" data-position="10">
    <td class="blob-num blob-num-expandable" colspan="2">
      <a href="#diff-53f79c542766de850c2eaad74abdae0b" class="diff-expander js-expand" title="Expand" aria-label="Expand" data-url="/egovernment/eregistrations-demo/blob_excerpt/6c9983e9d73f709ed198a647f6e38c7283b24822?diff=unified&amp;in_wiki_context=&amp;left_hunk_size=4&amp;mode=100644&amp;next_line_num_left=16&amp;next_line_num_right=17&amp;path=model%2Fbusiness-process-demo%2Fdata-forms%2Fcompany-information.js&amp;prev_line_num_left=9&amp;prev_line_num_right=10&amp;right_hunk_size=12" data-left-range="10-15" data-right-range="11-16">
        <svg aria-hidden="true" class="octicon octicon-unfold" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path d="M11.5 7.5L14 10c0 .55-.45 1-1 1H9v-1h3.5l-2-2h-7l-2 2H5v1H1c-.55 0-1-.45-1-1l2.5-2.5L0 5c0-.55.45-1 1-1h4v1H1.5l2 2h7l2-2H9V4h4c.55 0 1 .45 1 1l-2.5 2.5zM6 6h2V3h2L7 0 4 3h2v3zm2 3H6v3H4l3 3 3-3H8V9z"></path></svg>
      </a>
    </td>
    <td class="blob-code blob-code-inner blob-code-hunk">@@ -16,4 +17,12 @@ BusinessProcessDemo.prototype.dataForms.map.companyInformation.setProperties({</td>
  </tr>

    <tr>
    <td id="diff-53f79c542766de850c2eaad74abdae0bL16" data-line-number="16" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-53f79c542766de850c2eaad74abdae0bR17" data-line-number="17" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner"> 	propertyNames<span class="pl-k">:</span> [<span class="pl-s"><span class="pl-pds">'</span>businessName<span class="pl-pds">'</span></span>, <span class="pl-s"><span class="pl-pds">'</span>address/country<span class="pl-pds">'</span></span>, <span class="pl-s"><span class="pl-pds">'</span>address/city<span class="pl-pds">'</span></span>, <span class="pl-s"><span class="pl-pds">'</span>address/street<span class="pl-pds">'</span></span>]</span>

  </td>
</tr>


    <tr>
    <td id="diff-53f79c542766de850c2eaad74abdae0bL17" data-line-number="17" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-53f79c542766de850c2eaad74abdae0bR18" data-line-number="18" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner"> });</span>

  </td>
</tr>


    <tr>
    <td id="diff-53f79c542766de850c2eaad74abdae0bL18" data-line-number="18" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-53f79c542766de850c2eaad74abdae0bR19" data-line-number="19" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner"> </span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-53f79c542766de850c2eaad74abdae0bR20" data-line-number="20" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+<span class="pl-k">var</span> <span class="pl-en">isPoland</span> <span class="pl-k">=</span> <span class="pl-k">function</span> () {</span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-53f79c542766de850c2eaad74abdae0bR21" data-line-number="21" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+	<span class="pl-k">return</span> <span class="pl-v">this</span>.<span class="pl-smi">country</span> <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">'</span>PL<span class="pl-pds">'</span></span>;</span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-53f79c542766de850c2eaad74abdae0bR22" data-line-number="22" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+};</span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-53f79c542766de850c2eaad74abdae0bR23" data-line-number="23" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+</span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-53f79c542766de850c2eaad74abdae0bR24" data-line-number="24" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+<span class="pl-smi">BusinessProcessDemo</span>.<span class="pl-c1">prototype</span>.<span class="pl-smi">address</span>.<span class="pl-c1">set</span>(<span class="pl-en">getApplicablePropName</span>(<span class="pl-s"><span class="pl-pds">'</span>street<span class="pl-pds">'</span></span>), isPoland);</span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-53f79c542766de850c2eaad74abdae0bR25" data-line-number="25" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+</span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-53f79c542766de850c2eaad74abdae0bR26" data-line-number="26" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+<span class="pl-smi">BusinessProcessDemo</span>.<span class="pl-c1">prototype</span>.<span class="pl-smi">address</span>.<span class="pl-c1">set</span>(<span class="pl-en">getApplicablePropName</span>(<span class="pl-s"><span class="pl-pds">'</span>city<span class="pl-pds">'</span></span>), isPoland);</span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-53f79c542766de850c2eaad74abdae0bR27" data-line-number="27" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+</span>

  </td>
</tr>


    <tr>
    <td id="diff-53f79c542766de850c2eaad74abdae0bL19" data-line-number="19" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-53f79c542766de850c2eaad74abdae0bR28" data-line-number="28" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner"> <span class="pl-c1">module</span>.<span class="pl-smi">exports</span> <span class="pl-k">=</span> BusinessProcessDemo;</span>

  </td>
</tr>



        </tbody></table>
      </div>

</div>


</div>
