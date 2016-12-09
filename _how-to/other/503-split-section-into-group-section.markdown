---
layout: recipe
permalink: /how-to/split-section-into-group-section
title: 'Split normal section to group section'
category: '5. Other'
sub-category: ''
rate: '2'
number: '503'
prevUrl: 502
nextUrl:
done: 'yes'
lang: en
ref: 503
---

This recipe shows how to split a regular section (`FormSection` instance) into two sub-sections of a `FormSectionGroup` instance. For exhaustive overview of sections please see [Sections overview](/framework/sections/).

In order to transform a regular `FormSection` into `FormSectionGroup`:

1. Open the file containing section's definition, e.g. for a section that is part of a business process `model/<business-process-your-service>/data-forms/<your-form-section>.js`.
2. Change the section type to [`eregistratons/model/form-section-group`](https://github.com/egovernment/eregistrations/blob/master/model/form-section-group.js).
3. Define new sections on `<YourGroupSection>.prototype.sections` map (set their type to `FormSection` and make them nested).
4. Set all fields required for your regular sections (which are now subsections) such as: `propertyNames`, `label` etc.
5. Make sure that your new group section has `actionUrl` property set to the url handled by controller. Also, make sure that the subSections do not have `actionUrl` property set.
6. Make sure that the `apps/<your-app>/client/dbjs-dom.js` contains `toDOMForm` binding for your new section. The binding for group sections is here [eregistrations/view/dbjs/form-section-group-to-dom](https://github.com/egovernment/eregistrations/blob/master/view/dbjs/form-section-group-to-dom.js).


## Example

In the branch "[split-normal-section-into-group](https://github.com/egovernment/eregistrations-demo/tree/split-normal-section-into-group)" of eregistrations-demo :

Transform the `companyInformation` section of `BusinessProcessDemo` into `FormSectionGroup` containing two subsections ("Personal Details", "Adress").
First section shall contain one field: `businessName` previously belonging to the regular `companyInformation` section. The rest of old fields shall belong to the "Adress" section.

### Solution

<div id="files" class="diff-view " onclick="window.open('https://github.com/egovernment/eregistrations-demo/compare/split-normal-section-into-group...split-normal-section-into-group-solution#files')">
  <div class="js-diff-progressive-container">

<a name="diff-def80378be4cf10b44ffd1567c98f60b"></a>
<div id="diff-0" class="file js-file js-details-container





              show-inline-notes
           ">
  <div class="file-header" data-path="apps/business-process-demo/client/dbjs-dom.js" data-short-path="def8037" data-anchor="diff-def80378be4cf10b44ffd1567c98f60b">
    <div class="file-actions">

        <span class="show-file-notes pt-1">
          <label>
            <input type="checkbox" checked="checked" class="js-toggle-file-notes">
            Show comments
          </label>
        </span>

          <a href="/egovernment/eregistrations-demo/blob/59d85ab45fb748e6620e18bb0e5dc65d73570832/apps/business-process-demo/client/dbjs-dom.js" class="btn btn-sm tooltipped tooltipped-nw" rel="nofollow" aria-label="View the whole file at version 59d85ab ">View</a>


    </div>
    <div class="file-info">
        <span class="diffstat tooltipped tooltipped-e" aria-label="1 addition &amp; 0 deletions">1 <span class="block-diff-added"></span><span class="block-diff-neutral"></span><span class="block-diff-neutral"></span><span class="block-diff-neutral"></span><span class="block-diff-neutral"></span></span>

      <a href="#diff-def80378be4cf10b44ffd1567c98f60b" class="link-gray-dark" title="apps/business-process-demo/client/dbjs-dom.js">
        apps/business-process-demo/client/dbjs-dom.js
      </a>


    </div>
  </div>
  <div class="js-file-content">

        <div class="data highlight blob-wrapper">
          <table class="diff-table tab-size  " data-tab-size="8">

      <tbody><tr class="js-expandable-line" data-position="0">
    <td class="blob-num blob-num-expandable" colspan="2">
      <a href="#diff-def80378be4cf10b44ffd1567c98f60b" class="diff-expander js-expand" title="Expand" aria-label="Expand" data-url="/egovernment/eregistrations-demo/blob_excerpt/40c9536ef33cd6c99b70bc7dea5c0e8be16869bc?diff=unified&amp;in_wiki_context=&amp;left_hunk_size=6&amp;mode=100644&amp;next_line_num_left=23&amp;next_line_num_right=23&amp;path=apps%2Fbusiness-process-demo%2Fclient%2Fdbjs-dom.js&amp;prev_line_num_left=&amp;prev_line_num_right=&amp;right_hunk_size=7" data-left-range="1-22" data-right-range="1-22">
        <svg aria-hidden="true" class="octicon octicon-unfold" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M11.5 7.5L14 10c0 .55-.45 1-1 1H9v-1h3.5l-2-2h-7l-2 2H5v1H1c-.55 0-1-.45-1-1l2.5-2.5L0 5c0-.55.45-1 1-1h4v1H1.5l2 2h7l2-2H9V4h4c.55 0 1 .45 1 1l-2.5 2.5zM6 6h2V3h2L7 0 4 3h2v3zm2 3H6v3H4l3 3 3-3H8V9z"></path></svg>
      </a>
    </td>
    <td class="blob-code blob-code-inner blob-code-hunk">@@ -23,6 +23,7 @@ db.StringLine.DOMInput.prototype.dbAttributes.inputMask = 'data-mask';</td>
  </tr>

    <tr>
    <td id="diff-def80378be4cf10b44ffd1567c98f60bL23" data-line-number="23" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-def80378be4cf10b44ffd1567c98f60bR23" data-line-number="23" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner"> <span class="pl-k">if</span> (<span class="pl-k">!</span>isReadOnlyRender) <span class="pl-c1">require</span>(<span class="pl-s"><span class="pl-pds">'</span>dbjs-file/client<span class="pl-pds">'</span></span>)(db, <span class="pl-c1">FormData</span>, <span class="pl-c1">XMLHttpRequest</span>, <span class="pl-c1">File</span>, <span class="pl-s"><span class="pl-pds">'</span>/upload/<span class="pl-pds">'</span></span>);</span>

  </td>
</tr>


    <tr>
    <td id="diff-def80378be4cf10b44ffd1567c98f60bL24" data-line-number="24" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-def80378be4cf10b44ffd1567c98f60bR24" data-line-number="24" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner"> </span>

  </td>
</tr>


    <tr>
    <td id="diff-def80378be4cf10b44ffd1567c98f60bL25" data-line-number="25" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-def80378be4cf10b44ffd1567c98f60bR25" data-line-number="25" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner"> <span class="pl-c1">require</span>(<span class="pl-s"><span class="pl-pds">'</span>eregistrations/view/dbjs/form-section-to-dom<span class="pl-pds">'</span></span>);</span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-def80378be4cf10b44ffd1567c98f60bR26" data-line-number="26" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+<span class="pl-c1">require</span>(<span class="pl-s"><span class="pl-pds">'</span>eregistrations/view/dbjs/form-section-group-to-dom<span class="pl-pds">'</span></span>);</span>

  </td>
</tr>


    <tr>
    <td id="diff-def80378be4cf10b44ffd1567c98f60bL26" data-line-number="26" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-def80378be4cf10b44ffd1567c98f60bR27" data-line-number="27" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner"> <span class="pl-c1">require</span>(<span class="pl-s"><span class="pl-pds">'</span>eregistrations/view/dbjs/requirement-upload-to-dom-form<span class="pl-pds">'</span></span>);</span>

  </td>
</tr>


    <tr>
    <td id="diff-def80378be4cf10b44ffd1567c98f60bL27" data-line-number="27" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-def80378be4cf10b44ffd1567c98f60bR28" data-line-number="28" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner"> </span>

  </td>
</tr>


    <tr>
    <td id="diff-def80378be4cf10b44ffd1567c98f60bL28" data-line-number="28" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-def80378be4cf10b44ffd1567c98f60bR29" data-line-number="29" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner"> <span class="pl-en">domEnum</span>(<span class="pl-smi">db</span>.<span class="pl-smi">Country</span>);</span>

  </td>
</tr>



          </tbody></table>
        </div>

  </div>
</div>


<a name="diff-53f79c542766de850c2eaad74abdae0b"></a>
<div id="diff-1" class="file js-file js-details-container





              show-inline-notes
           ">
  <div class="file-header" data-path="model/business-process-demo/data-forms/company-information.js" data-short-path="53f79c5" data-anchor="diff-53f79c542766de850c2eaad74abdae0b">
    <div class="file-actions">

        <span class="show-file-notes pt-1">
          <label>
            <input type="checkbox" checked="checked" class="js-toggle-file-notes">
            Show comments
          </label>
        </span>

          <a href="/egovernment/eregistrations-demo/blob/59d85ab45fb748e6620e18bb0e5dc65d73570832/model/business-process-demo/data-forms/company-information.js" class="btn btn-sm tooltipped tooltipped-nw" rel="nofollow" aria-label="View the whole file at version 59d85ab ">View</a>


    </div>
    <div class="file-info">
        <span class="diffstat tooltipped tooltipped-e" aria-label="20 additions &amp; 3 deletions">23 <span class="block-diff-added"></span><span class="block-diff-added"></span><span class="block-diff-added"></span><span class="block-diff-added"></span><span class="block-diff-neutral"></span></span>

      <a href="#diff-53f79c542766de850c2eaad74abdae0b" class="link-gray-dark" title="model/business-process-demo/data-forms/company-information.js">
        model/business-process-demo/data-forms/company-information.js
      </a>


    </div>
  </div>
  <div class="js-file-content">

        <div class="data highlight blob-wrapper">
          <table class="diff-table tab-size  " data-tab-size="8">

      <tbody><tr class="js-expandable-line" data-position="0">
    <td class="blob-num blob-num-expandable" colspan="2">
      <a href="#diff-53f79c542766de850c2eaad74abdae0b" class="diff-expander js-expand" title="Expand" aria-label="Expand" data-url="/egovernment/eregistrations-demo/blob_excerpt/c6a086241c255035e6e0d62b763ba23fc88e7bd2?diff=unified&amp;in_wiki_context=&amp;left_hunk_size=18&amp;mode=100644&amp;next_line_num_left=2&amp;next_line_num_right=2&amp;path=model%2Fbusiness-process-demo%2Fdata-forms%2Fcompany-information.js&amp;prev_line_num_left=&amp;prev_line_num_right=&amp;right_hunk_size=35" data-left-range="1-1" data-right-range="1-1">
        <svg aria-hidden="true" class="octicon octicon-unfold" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M11.5 7.5L14 10c0 .55-.45 1-1 1H9v-1h3.5l-2-2h-7l-2 2H5v1H1c-.55 0-1-.45-1-1l2.5-2.5L0 5c0-.55.45-1 1-1h4v1H1.5l2 2h7l2-2H9V4h4c.55 0 1 .45 1 1l-2.5 2.5zM6 6h2V3h2L7 0 4 3h2v3zm2 3H6v3H4l3 3 3-3H8V9z"></path></svg>
      </a>
    </td>
    <td class="blob-code blob-code-inner blob-code-hunk">@@ -2,18 +2,35 @@</td>
  </tr>

    <tr>
    <td id="diff-53f79c542766de850c2eaad74abdae0bL2" data-line-number="2" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-53f79c542766de850c2eaad74abdae0bR2" data-line-number="2" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner"> </span>

  </td>
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
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-53f79c542766de850c2eaad74abdae0bR5" data-line-number="5" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+  , FormSectionGroup    <span class="pl-k">=</span> <span class="pl-c1">require</span>(<span class="pl-s"><span class="pl-pds">'</span>eregistrations/model/form-section-group<span class="pl-pds">'</span></span>)(db)</span>

  </td>
</tr>


    <tr>
    <td id="diff-53f79c542766de850c2eaad74abdae0bL5" data-line-number="5" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-53f79c542766de850c2eaad74abdae0bR6" data-line-number="6" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner">   , FormSection         <span class="pl-k">=</span> <span class="pl-c1">require</span>(<span class="pl-s"><span class="pl-pds">'</span>eregistrations/model/form-section<span class="pl-pds">'</span></span>)(db)</span>

  </td>
</tr>


    <tr>
    <td id="diff-53f79c542766de850c2eaad74abdae0bL6" data-line-number="6" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-53f79c542766de850c2eaad74abdae0bR7" data-line-number="7" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner">   , BusinessProcessDemo <span class="pl-k">=</span> <span class="pl-c1">require</span>(<span class="pl-s"><span class="pl-pds">'</span>../fields<span class="pl-pds">'</span></span>);</span>

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


    <tr>
    <td id="diff-53f79c542766de850c2eaad74abdae0bL10" data-line-number="10" class="blob-num blob-num-deletion js-linkable-line-number"></td>

    <td class="blob-num blob-num-deletion empty-cell"></td>

  <td class="blob-code blob-code-deletion">

    <span class="blob-code-inner">-	type<span class="pl-k">:</span> <span class="x x-first x-last">FormSection</span></span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-53f79c542766de850c2eaad74abdae0bR11" data-line-number="11" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+	type<span class="pl-k">:</span> <span class="x x-first x-last">FormSectionGroup</span></span>

  </td>
</tr>


    <tr>
    <td id="diff-53f79c542766de850c2eaad74abdae0bL11" data-line-number="11" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-53f79c542766de850c2eaad74abdae0bR12" data-line-number="12" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner"> });</span>

  </td>
</tr>


    <tr>
    <td id="diff-53f79c542766de850c2eaad74abdae0bL12" data-line-number="12" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-53f79c542766de850c2eaad74abdae0bR13" data-line-number="13" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner"> </span>

  </td>
</tr>


    <tr>
    <td id="diff-53f79c542766de850c2eaad74abdae0bL13" data-line-number="13" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-53f79c542766de850c2eaad74abdae0bR14" data-line-number="14" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner"> <span class="pl-smi">BusinessProcessDemo</span>.<span class="pl-c1">prototype</span>.<span class="pl-smi">dataForms</span>.<span class="pl-smi">map</span>.<span class="pl-smi">companyInformation</span>.<span class="pl-en">setProperties</span>({</span>

  </td>
</tr>


    <tr>
    <td id="diff-53f79c542766de850c2eaad74abdae0bL14" data-line-number="14" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-53f79c542766de850c2eaad74abdae0bR15" data-line-number="15" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner"> 	label<span class="pl-k">:</span> <span class="pl-en">_</span>(<span class="pl-s"><span class="pl-pds">"</span>Company Information<span class="pl-pds">"</span></span>),</span>

  </td>
</tr>


    <tr>
    <td id="diff-53f79c542766de850c2eaad74abdae0bL15" data-line-number="15" class="blob-num blob-num-deletion js-linkable-line-number"></td>

    <td class="blob-num blob-num-deletion empty-cell"></td>

  <td class="blob-code blob-code-deletion">

    <span class="blob-code-inner">-	actionUrl<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>company-information<span class="pl-pds">'</span></span>,</span>

  </td>
</tr>


    <tr>
    <td id="diff-53f79c542766de850c2eaad74abdae0bL16" data-line-number="16" class="blob-num blob-num-deletion js-linkable-line-number"></td>

    <td class="blob-num blob-num-deletion empty-cell"></td>

  <td class="blob-code blob-code-deletion">

    <span class="blob-code-inner">-	propertyNames<span class="pl-k">:</span> [<span class="pl-s"><span class="pl-pds">'</span>businessName<span class="pl-pds">'</span></span>, <span class="pl-s"><span class="pl-pds">'</span>address/country<span class="pl-pds">'</span></span>, <span class="pl-s"><span class="pl-pds">'</span>address/city<span class="pl-pds">'</span></span>, <span class="pl-s"><span class="pl-pds">'</span>address/street<span class="pl-pds">'</span></span>]</span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-53f79c542766de850c2eaad74abdae0bR16" data-line-number="16" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+	actionUrl<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>company-information<span class="pl-pds">'</span></span></span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-53f79c542766de850c2eaad74abdae0bR17" data-line-number="17" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+});</span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-53f79c542766de850c2eaad74abdae0bR18" data-line-number="18" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+</span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-53f79c542766de850c2eaad74abdae0bR19" data-line-number="19" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+<span class="pl-k">var</span> companyInformation <span class="pl-k">=</span> <span class="pl-smi">BusinessProcessDemo</span>.<span class="pl-c1">prototype</span>.<span class="pl-smi">dataForms</span>.<span class="pl-smi">map</span>.<span class="pl-smi">companyInformation</span>;</span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-53f79c542766de850c2eaad74abdae0bR20" data-line-number="20" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+</span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-53f79c542766de850c2eaad74abdae0bR21" data-line-number="21" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+<span class="pl-smi">companyInformation</span>.<span class="pl-smi">sections</span>.<span class="pl-en">defineProperties</span>({</span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-53f79c542766de850c2eaad74abdae0bR22" data-line-number="22" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+	personalDetails<span class="pl-k">:</span> { type<span class="pl-k">:</span> FormSection, nested<span class="pl-k">:</span> <span class="pl-c1">true</span> },</span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-53f79c542766de850c2eaad74abdae0bR23" data-line-number="23" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+	address<span class="pl-k">:</span> { type<span class="pl-k">:</span> FormSection, nested<span class="pl-k">:</span> <span class="pl-c1">true</span> }</span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-53f79c542766de850c2eaad74abdae0bR24" data-line-number="24" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+});</span>

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

    <span class="blob-code-inner">+<span class="pl-smi">companyInformation</span>.<span class="pl-smi">sections</span>.<span class="pl-smi">personalDetails</span>.<span class="pl-en">setProperties</span>({</span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-53f79c542766de850c2eaad74abdae0bR27" data-line-number="27" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+	label<span class="pl-k">:</span> <span class="pl-en">_</span>(<span class="pl-s"><span class="pl-pds">"</span>Personal Details<span class="pl-pds">"</span></span>),</span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-53f79c542766de850c2eaad74abdae0bR28" data-line-number="28" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+	propertyNames<span class="pl-k">:</span> [<span class="pl-s"><span class="pl-pds">'</span>businessName<span class="pl-pds">'</span></span>]</span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-53f79c542766de850c2eaad74abdae0bR29" data-line-number="29" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+});</span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-53f79c542766de850c2eaad74abdae0bR30" data-line-number="30" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+</span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-53f79c542766de850c2eaad74abdae0bR31" data-line-number="31" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+<span class="pl-smi">companyInformation</span>.<span class="pl-smi">sections</span>.<span class="pl-smi">address</span>.<span class="pl-en">setProperties</span>({</span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-53f79c542766de850c2eaad74abdae0bR32" data-line-number="32" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+	label<span class="pl-k">:</span> <span class="pl-en">_</span>(<span class="pl-s"><span class="pl-pds">"</span>Address<span class="pl-pds">"</span></span>),</span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-53f79c542766de850c2eaad74abdae0bR33" data-line-number="33" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+	propertyNames<span class="pl-k">:</span> [<span class="pl-s"><span class="pl-pds">'</span>address/country<span class="pl-pds">'</span></span>, <span class="pl-s"><span class="pl-pds">'</span>address/city<span class="pl-pds">'</span></span>, <span class="pl-s"><span class="pl-pds">'</span>address/street<span class="pl-pds">'</span></span>]</span>

  </td>
</tr>


    <tr>
    <td id="diff-53f79c542766de850c2eaad74abdae0bL17" data-line-number="17" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-53f79c542766de850c2eaad74abdae0bR34" data-line-number="34" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner"> });</span>

  </td>
</tr>


    <tr>
    <td id="diff-53f79c542766de850c2eaad74abdae0bL18" data-line-number="18" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-53f79c542766de850c2eaad74abdae0bR35" data-line-number="35" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner"> </span>

  </td>
</tr>


    <tr>
    <td id="diff-53f79c542766de850c2eaad74abdae0bL19" data-line-number="19" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-53f79c542766de850c2eaad74abdae0bR36" data-line-number="36" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner"> <span class="pl-c1">module</span>.<span class="pl-smi">exports</span> <span class="pl-k">=</span> BusinessProcessDemo;</span>

  </td>
</tr>



          </tbody></table>
        </div>

  </div>
</div>

  </div>

</div>
