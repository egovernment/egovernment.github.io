---
layout: recipe
permalink: /how-to/add-the-legend-text-of-a-section-of-the-form/
title: 'Add the legend text to the section of the form'
category: '1. Part A'
sub-category: 'Data'
rate: '1'
number: '162'
introduction-text: 'Section legends are used for Part A forms to provide additional explanation for the user.'
introduction-img: '162.png'
prevUrl: /how-to/change-the-name-of-a-section-of-the-form/
nextUrl: /how-to/change-the-label-of-a-field-in-the-form/
done: ''
---

Every section in Part A is associated with a service, so to change it's legend, we have to know the service to which it applies. Additionally, sections can be defined in one of two places, as part of a business process or as part of a nested entity (for example branch, legal representative, etc.) of a business process.

**For sections that are part of a business process:**

1. Open file `model/<business-process-your-service>/data-forms/<your-section>.js`.
2. Set the value of the legend property of the section.

**For sections of a nested entity:**

1. Open file `model/<business-process-your-service>/nested-entities/<your-nested-entity>/data-forms/<your-section>.js`.
2. Set the value of the legend property of the section.

## Example

In the branch "[add-the-legend-text-of-a-section-of-the-form](https://github.com/egovernment/eregistrations-demo/tree/add-the-legend-text-of-a-section-of-the-form)" of eregistrations-demo :

Add a legend to the `companyInformation` section for `BusinessProcessDemo` service to *"Provide address of the company headquarters"*.

### Solution

<div id="files" class="diff-view " onclick="window.open('https://github.com/egovernment/eregistrations-demo/compare/add-the-legend-text-of-a-section-of-the-form...add-the-legend-text-of-a-section-of-the-form-solution#files')">

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

          <a href="/egovernment/eregistrations-demo/blob/6fa9a9346cdc2fcd1b31f3c4abf85ebb81a617a8/model/business-process-demo/data-forms/company-information.js" class="btn btn-sm tooltipped tooltipped-nw" rel="nofollow" aria-label="View the whole file at version 6fa9a93 ">View</a>

          <a class="btn-octicon tooltipped tooltipped-n" href="https://windows.github.com" aria-label="Open this file in GitHub Desktop" data-ga-click="Repository, open with desktop, type:windows">
              <svg aria-hidden="true" class="octicon octicon-device-desktop" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M15 2H1c-.55 0-1 .45-1 1v9c0 .55.45 1 1 1h5.34c-.25.61-.86 1.39-2.34 2h8c-1.48-.61-2.09-1.39-2.34-2H15c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm0 9H1V3h14v8z"></path></svg>
          </a>

    </div>
    <div class="file-info">
        <span class="diffstat tooltipped tooltipped-e" aria-label="1 addition &amp; 0 deletions">1 <span class="block-diff-added"></span><span class="block-diff-neutral"></span><span class="block-diff-neutral"></span><span class="block-diff-neutral"></span><span class="block-diff-neutral"></span></span>

      <span class="user-select-contain" title="model/business-process-demo/data-forms/company-information.js">
        model/business-process-demo/data-forms/company-information.js
      </span>

    </div>
  </div>

      <div class="data highlight blob-wrapper">
        <table class="diff-table tab-size  " data-tab-size="8">

      <tbody><tr class="js-expandable-line" data-position="0">
    <td class="blob-num blob-num-expandable" colspan="2">
      <a href="#diff-53f79c542766de850c2eaad74abdae0b" class="diff-expander js-expand" title="Expand" aria-label="Expand" data-url="/egovernment/eregistrations-demo/blob_excerpt/489c0e150d25927c83c04897f64c8ea648463e09?diff=unified&amp;in_wiki_context=&amp;left_hunk_size=6&amp;mode=100644&amp;next_line_num_left=12&amp;next_line_num_right=12&amp;path=model%2Fbusiness-process-demo%2Fdata-forms%2Fcompany-information.js&amp;prev_line_num_left=&amp;prev_line_num_right=&amp;right_hunk_size=7" data-left-range="1-11" data-right-range="1-11">
        <svg aria-hidden="true" class="octicon octicon-unfold" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path d="M11.5 7.5L14 10c0 .55-.45 1-1 1H9v-1h3.5l-2-2h-7l-2 2H5v1H1c-.55 0-1-.45-1-1l2.5-2.5L0 5c0-.55.45-1 1-1h4v1H1.5l2 2h7l2-2H9V4h4c.55 0 1 .45 1 1l-2.5 2.5zM6 6h2V3h2L7 0 4 3h2v3zm2 3H6v3H4l3 3 3-3H8V9z"></path></svg>
      </a>
    </td>
    <td class="blob-code blob-code-inner blob-code-hunk">@@ -12,6 +12,7 @@ BusinessProcessDemo.prototype.dataForms.map.define('companyInformation', {</td>
  </tr>

    <tr>
    <td id="diff-53f79c542766de850c2eaad74abdae0bL12" data-line-number="12" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-53f79c542766de850c2eaad74abdae0bR12" data-line-number="12" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner"> </span>

  </td>
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
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-53f79c542766de850c2eaad74abdae0bR15" data-line-number="15" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+ legend<span class="pl-k">:</span> <span class="pl-en">_</span>(<span class="pl-s"><span class="pl-pds">"</span>Provide address of the company headquarters<span class="pl-pds">"</span></span>),</span>

  </td>
</tr>


    <tr>
    <td id="diff-53f79c542766de850c2eaad74abdae0bL15" data-line-number="15" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-53f79c542766de850c2eaad74abdae0bR16" data-line-number="16" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner">  actionUrl<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>company-information<span class="pl-pds">'</span></span>,</span>

  </td>
</tr>


    <tr>
    <td id="diff-53f79c542766de850c2eaad74abdae0bL16" data-line-number="16" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-53f79c542766de850c2eaad74abdae0bR17" data-line-number="17" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner">  propertyNames<span class="pl-k">:</span> [<span class="pl-s"><span class="pl-pds">'</span>businessName<span class="pl-pds">'</span></span>, <span class="pl-s"><span class="pl-pds">'</span>address/country<span class="pl-pds">'</span></span>, <span class="pl-s"><span class="pl-pds">'</span>address/city<span class="pl-pds">'</span></span>, <span class="pl-s"><span class="pl-pds">'</span>address/street<span class="pl-pds">'</span></span>]</span>

  </td>
</tr>


    <tr>
    <td id="diff-53f79c542766de850c2eaad74abdae0bL17" data-line-number="17" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-53f79c542766de850c2eaad74abdae0bR18" data-line-number="18" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner"> });</span>

  </td>
</tr>


  <tr class="js-expandable-line">
   <td class="blob-num blob-num-expandable" colspan="2">
     <a href="#diff-53f79c542766de850c2eaad74abdae0b" class="diff-expander js-expand" title="Expand" aria-label="Expand" data-url="/egovernment/eregistrations-demo/blob_excerpt/489c0e150d25927c83c04897f64c8ea648463e09?diff=unified&amp;in_wiki_context=&amp;mode=100644&amp;path=model%2Fbusiness-process-demo%2Fdata-forms%2Fcompany-information.js&amp;prev_line_num_left=17&amp;prev_line_num_right=18" data-left-range="18-20" data-right-range="19-20">
       <svg aria-hidden="true" class="octicon octicon-unfold" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path d="M11.5 7.5L14 10c0 .55-.45 1-1 1H9v-1h3.5l-2-2h-7l-2 2H5v1H1c-.55 0-1-.45-1-1l2.5-2.5L0 5c0-.55.45-1 1-1h4v1H1.5l2 2h7l2-2H9V4h4c.55 0 1 .45 1 1l-2.5 2.5zM6 6h2V3h2L7 0 4 3h2v3zm2 3H6v3H4l3 3 3-3H8V9z"></path></svg>
     </a>
   </td>
   <td class="blob-code blob-code-expandable"></td>
  </tr>

        </tbody></table>
      </div>
</div>

</div>
