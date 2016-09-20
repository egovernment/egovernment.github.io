---
layout: recipe
permalink: /how-to/add-new-field-to-form-section/
title: 'Add field to form section'
category: '1. Part A'
sub-category: 'Data'
rate: '1'
number: '161'
introduction-text: 'This recipe explains how to add a new field to the form section.'
introduction-img: '161.png'
prevUrl: 159
nextUrl: 162
done: ''
lang: en
ref: 161
---

This recipe details adding a field to form sections defined as part of either a business process or a nested entity of a business process. For explanation on how to add a field to form section of a processing step, see ['How to 223 - Add a field in a processing role'](/how-to/add-a-field-in-a-processing-role/).

Additionally, the field we are going to include in form section has to be defined on the model, to do that, check ['How to 121 - Define a new field'](/how-to/configure-the-determinant-of-a-service/).

**For form sections that are part of a business process:**

1. Open file `model/<business-process-your-service>/data-forms/<your-form-section>.js`.
2. Locate the `propertyNames` property and append new field name to it.

**For form sections of a nested entity:**

1. Nested entities can have either one, or many form sections. Depending on that, open either:
    - `model/<business-process-your-service>/nested-entities/<your-nested-entity>/data-forms.js`
    - `model/<business-process-your-service>/nested-entities/<your-nested-entity>/data-forms/<your-form-section>.js`
2. Locate the `propertyNames` property and append new field name to it.

## Example

In the branch "[add-new-field-to-form-section](https://github.com/egovernment/eregistrations-demo/tree/add-new-field-to-form-section)" of eregistrations-demo:

Add `abbreviation` field to *"Company Information"* form section.

### Solution

<div id="files" class="diff-view " onclick="window.open('https://github.com/egovernment/eregistrations-demo/compare/add-new-field-to-form-section...add-new-field-to-form-section-solution#files')">


<a name="diff-53f79c542766de850c2eaad74abdae0b"></a>
<div id="diff-0" class="file js-details-container




             show-inline-notes
           ">
  <div class="file-header" data-path="model/business-process-demo/data-forms/company-information.js">
    <div class="file-actions">
        <span class="show-file-notes">
          <label>
            <input checked="checked" class="js-toggle-file-notes" type="checkbox">
            Show notes
          </label>
        </span>

          <a href="/egovernment/eregistrations-demo/blob/be44a275ac8cde34ec558300a0a96a3f9f25bd4b/model/business-process-demo/data-forms/company-information.js" class="btn btn-sm tooltipped tooltipped-nw" rel="nofollow" aria-label="View the whole file at version be44a27 ">View</a>


    </div>
    <div class="file-info">
        <span class="diffstat tooltipped tooltipped-e" aria-label="1 addition &amp; 1 deletion">2 <span class="block-diff-added"></span><span class="block-diff-deleted"></span><span class="block-diff-neutral"></span><span class="block-diff-neutral"></span><span class="block-diff-neutral"></span></span>

      <span class="user-select-contain" title="model/business-process-demo/data-forms/company-information.js">
        model/business-process-demo/data-forms/company-information.js
      </span>

    </div>
  </div>

      <div class="data highlight blob-wrapper">
        <table class="diff-table tab-size  " data-tab-size="8">

      <tbody><tr class="js-expandable-line" data-position="0">
    <td class="blob-num blob-num-expandable" colspan="2">
      <a href="#diff-53f79c542766de850c2eaad74abdae0b" class="diff-expander js-expand" title="Expand" aria-label="Expand" data-url="/egovernment/eregistrations-demo/blob_excerpt/323612b6bcb7352f9e4d5fef89ca4a1433c0a533?diff=unified&amp;in_wiki_context=&amp;left_hunk_size=7&amp;mode=100644&amp;next_line_num_left=13&amp;next_line_num_right=13&amp;path=model%2Fbusiness-process-demo%2Fdata-forms%2Fcompany-information.js&amp;prev_line_num_left=&amp;prev_line_num_right=&amp;right_hunk_size=7" data-left-range="1-12" data-right-range="1-12">
        <svg aria-hidden="true" class="octicon octicon-unfold" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path d="M11.5 7.5L14 10c0 .55-.45 1-1 1H9v-1h3.5l-2-2h-7l-2 2H5v1H1c-.55 0-1-.45-1-1l2.5-2.5L0 5c0-.55.45-1 1-1h4v1H1.5l2 2h7l2-2H9V4h4c.55 0 1 .45 1 1l-2.5 2.5zM6 6h2V3h2L7 0 4 3h2v3zm2 3H6v3H4l3 3 3-3H8V9z"></path></svg>
      </a>
    </td>
    <td class="blob-code blob-code-inner blob-code-hunk">@@ -13,7 +13,7 @@ BusinessProcessDemo.prototype.dataForms.map.define('companyInformation', {</td>
  </tr>

    <tr>
    <td id="diff-53f79c542766de850c2eaad74abdae0bL13" data-line-number="13" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-53f79c542766de850c2eaad74abdae0bR13" data-line-number="13" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner"> <span class="pl-smi">BusinessProcessDemo</span>.<span class="pl-c1">prototype</span>.<span class="pl-smi">dataForms</span>.<span class="pl-smi">map</span>.<span class="pl-smi">companyInformation</span>.<span class="pl-en">setProperties</span>({</span>

  </td>
</tr>


    <tr>
    <td id="diff-53f79c542766de850c2eaad74abdae0bL14" data-line-number="14" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-53f79c542766de850c2eaad74abdae0bR14" data-line-number="14" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner">  label<span class="pl-k">:</span> <span class="pl-en">_</span>(<span class="pl-s"><span class="pl-pds">"</span>Company Information<span class="pl-pds">"</span></span>),</span>

  </td>
</tr>


    <tr>
    <td id="diff-53f79c542766de850c2eaad74abdae0bL15" data-line-number="15" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-53f79c542766de850c2eaad74abdae0bR15" data-line-number="15" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner">  actionUrl<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>company-information<span class="pl-pds">'</span></span>,</span>

  </td>
</tr>


    <tr>
    <td id="diff-53f79c542766de850c2eaad74abdae0bL16" data-line-number="16" class="blob-num blob-num-deletion js-linkable-line-number"></td>

    <td class="blob-num blob-num-deletion empty-cell"></td>

  <td class="blob-code blob-code-deletion">

    <span class="blob-code-inner">- propertyNames<span class="pl-k">:</span> [<span class="pl-s"><span class="pl-pds">'</span>businessName<span class="pl-pds">'</span></span>, <span class="pl-s"><span class="pl-pds">'</span>address/country<span class="pl-pds">'</span></span>, <span class="pl-s"><span class="pl-pds">'</span>address/city<span class="pl-pds">'</span></span>, <span class="pl-s"><span class="pl-pds">'</span>address/street<span class="pl-pds">'</span></span>]</span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-53f79c542766de850c2eaad74abdae0bR16" data-line-number="16" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+ propertyNames<span class="pl-k">:</span> [<span class="pl-s"><span class="pl-pds">'</span>businessName<span class="pl-pds">'</span></span>, <span class="pl-s"><span class="pl-pds">'</span><span class="x x-first">abbreviation</span><span class="pl-pds x">'</span></span><span class="x">, </span><span class="pl-s"><span class="pl-pds x x-last">'</span>address/country<span class="pl-pds">'</span></span>, <span class="pl-s"><span class="pl-pds">'</span>address/city<span class="pl-pds">'</span></span>, <span class="pl-s"><span class="pl-pds">'</span>address/street<span class="pl-pds">'</span></span>]</span>

  </td>
</tr>


    <tr>
    <td id="diff-53f79c542766de850c2eaad74abdae0bL17" data-line-number="17" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-53f79c542766de850c2eaad74abdae0bR17" data-line-number="17" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner"> });</span>

  </td>
</tr>


    <tr>
    <td id="diff-53f79c542766de850c2eaad74abdae0bL18" data-line-number="18" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-53f79c542766de850c2eaad74abdae0bR18" data-line-number="18" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner"> </span>

  </td>
</tr>


    <tr>
    <td id="diff-53f79c542766de850c2eaad74abdae0bL19" data-line-number="19" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-53f79c542766de850c2eaad74abdae0bR19" data-line-number="19" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner"> <span class="pl-c1">module</span>.<span class="pl-smi">exports</span> <span class="pl-k">=</span> BusinessProcessDemo;</span>

  </td>
</tr>



        </tbody></table>
      </div>
</div>

</div>
