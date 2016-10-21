---
layout: recipe
permalink: /how-to/create-a-new-section-in-the-form/
title: 'Create a new section in the form'
category: '1. Part A'
sub-category: 'Data'
rate: '3'
number: '171'
introduction-text: "This recipe is about adding a new section to a service's forms." 
introduction-img: '171.png'
prevUrl: 171
nextUrl: 173
done: ''
lang: en
ref: 172
---

The sections are a mechanism which provides abstraction layer between model an the view, and allows for quick creation of the forms.

For exhaustive overview of sections please see [https://github.com/egovernment/eregistrations/blob/master/documentation/sections.md](https://github.com/egovernment/eregistrations/blob/master/documentation/sections.md).

In order to add a new section to a service's forms:

1. Create file `model/business-process-<your-service>/data-forms/<your-section>.js`.
2. Require the section type you want to use, usually it's `FormSection` (`eregitrations/model/form-section`).
3. Define a new section using your sections class on the `<YourBusinessProcess>.prototype.dataForms.map` property (See example below for details).

## Example

In the branch "[create-a-new-section-in-the-form](https://github.com/egovernment/eregistrations-demo/tree/create-a-new-section-in-the-form)" of eregistrations-demo :

Add new section *"Company's representative"* to the *"Business Process Demo"* service. Section should include the following fields of `representative` object: *"firstName"*, *"lastName"*, *"email"*

### Solution

<div id="files" class="diff-view " onclick="window.open('https://github.com/egovernment/eregistrations-demo/compare/create-a-new-section-in-the-form...create-a-new-section-in-the-form-solution#files')">

    
<a name="diff-460a570d8b7f45987bb96d6ab0146a1e"></a>
<div id="diff-0" class="file js-details-container
             
             
             
             
             show-inline-notes
           ">
  <div class="file-header" data-path="apps/business-process-demo/controller/index.js">
    <div class="file-actions">
        <span class="show-file-notes">
          <label>
            <input type="checkbox" checked="checked" class="js-toggle-file-notes">
            Show comments
          </label>
        </span>

          <a href="/egovernment/eregistrations-demo/blob/e90431a57f5afc51e854a111ee2dc771d167b5ff/apps/business-process-demo/controller/index.js" class="btn btn-sm tooltipped tooltipped-nw" rel="nofollow" aria-label="View the whole file at version e90431a ">View</a>


    </div>
    <div class="file-info">
        <span class="diffstat tooltipped tooltipped-e" aria-label="1 addition &amp; 0 deletions">1 <span class="block-diff-added"></span><span class="block-diff-neutral"></span><span class="block-diff-neutral"></span><span class="block-diff-neutral"></span><span class="block-diff-neutral"></span></span>

      <span class="user-select-contain" title="apps/business-process-demo/controller/index.js">
        apps/business-process-demo/controller/index.js
      </span>
      
    </div>
  </div>

      <div class="data highlight blob-wrapper">
        <table class="diff-table tab-size  " data-tab-size="8">
          
      <tbody><tr class="js-expandable-line" data-position="0">
    <td class="blob-num blob-num-expandable" colspan="2">
      <a href="#diff-460a570d8b7f45987bb96d6ab0146a1e" class="diff-expander js-expand" title="Expand" aria-label="Expand" data-url="/egovernment/eregistrations-demo/blob_excerpt/a274e0460f7e983371ae47aeb18d825aa2f21724?diff=unified&amp;in_wiki_context=&amp;left_hunk_size=5&amp;mode=100644&amp;next_line_num_left=6&amp;next_line_num_right=6&amp;path=apps%2Fbusiness-process-demo%2Fcontroller%2Findex.js&amp;prev_line_num_left=&amp;prev_line_num_right=&amp;right_hunk_size=6" data-left-range="1-5" data-right-range="1-5">
        <svg aria-hidden="true" class="octicon octicon-unfold" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path d="M11.5 7.5L14 10c0 .55-.45 1-1 1H9v-1h3.5l-2-2h-7l-2 2H5v1H1c-.55 0-1-.45-1-1l2.5-2.5L0 5c0-.55.45-1 1-1h4v1H1.5l2 2h7l2-2H9V4h4c.55 0 1 .45 1 1l-2.5 2.5zM6 6h2V3h2L7 0 4 3h2v3zm2 3H6v3H4l3 3 3-3H8V9z"></path></svg>
      </a>
    </td>
    <td class="blob-code blob-code-inner blob-code-hunk">@@ -6,5 +6,6 @@ var assign = require('es5-ext/object/assign');</td>
  </tr>

    <tr>
    <td id="diff-460a570d8b7f45987bb96d6ab0146a1eL6" data-line-number="6" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-460a570d8b7f45987bb96d6ab0146a1eR6" data-line-number="6" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner"> </span>

  </td>
</tr>


    <tr>
    <td id="diff-460a570d8b7f45987bb96d6ab0146a1eL7" data-line-number="7" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-460a570d8b7f45987bb96d6ab0146a1eR7" data-line-number="7" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner"> <span class="pl-en">assign</span>(<span class="pl-c1">exports</span>, <span class="pl-c1">require</span>(<span class="pl-s"><span class="pl-pds">'</span>eregistrations/controller/registration<span class="pl-pds">'</span></span>));</span>

  </td>
</tr>


    <tr>
    <td id="diff-460a570d8b7f45987bb96d6ab0146a1eL8" data-line-number="8" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-460a570d8b7f45987bb96d6ab0146a1eR8" data-line-number="8" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner"> </span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-460a570d8b7f45987bb96d6ab0146a1eR9" data-line-number="9" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+<span class="pl-c1">exports</span>.<span class="pl-smi">representative</span> <span class="pl-k">=</span> <span class="pl-c1">true</span>;</span>

  </td>
</tr>


    <tr>
    <td id="diff-460a570d8b7f45987bb96d6ab0146a1eL9" data-line-number="9" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-460a570d8b7f45987bb96d6ab0146a1eR10" data-line-number="10" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner"> <span class="pl-c1">exports</span>[<span class="pl-s"><span class="pl-pds">'</span>company-information<span class="pl-pds">'</span></span>] <span class="pl-k">=</span> <span class="pl-c1">true</span>;</span>

  </td>
</tr>


    <tr>
    <td id="diff-460a570d8b7f45987bb96d6ab0146a1eL10" data-line-number="10" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-460a570d8b7f45987bb96d6ab0146a1eR11" data-line-number="11" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner"> <span class="pl-c1">exports</span>.<span class="pl-smi">attorney</span> <span class="pl-k">=</span> <span class="pl-c1">true</span>;</span>

  </td>
</tr>



        </tbody></table>
      </div>

</div>

    
<a name="diff-960d5db1ab734414c600cd4f2c248dd5"></a>
<div id="diff-1" class="file js-details-container
             
             
             
             
             show-inline-notes
           ">
  <div class="file-header" data-path="model/business-process-demo/data-forms/index.js">
    <div class="file-actions">
        <span class="show-file-notes">
          <label>
            <input type="checkbox" checked="checked" class="js-toggle-file-notes">
            Show comments
          </label>
        </span>

          <a href="/egovernment/eregistrations-demo/blob/e90431a57f5afc51e854a111ee2dc771d167b5ff/model/business-process-demo/data-forms/index.js" class="btn btn-sm tooltipped tooltipped-nw" rel="nofollow" aria-label="View the whole file at version e90431a ">View</a>


    </div>
    <div class="file-info">
        <span class="diffstat tooltipped tooltipped-e" aria-label="1 addition &amp; 0 deletions">1 <span class="block-diff-added"></span><span class="block-diff-neutral"></span><span class="block-diff-neutral"></span><span class="block-diff-neutral"></span><span class="block-diff-neutral"></span></span>

      <span class="user-select-contain" title="model/business-process-demo/data-forms/index.js">
        model/business-process-demo/data-forms/index.js
      </span>
      
    </div>
  </div>

      <div class="data highlight blob-wrapper">
        <table class="diff-table tab-size  " data-tab-size="8">
          
      <tbody><tr class="js-expandable-line" data-position="0">
    <td class="blob-num blob-num-expandable" colspan="2">
      <a href="#diff-960d5db1ab734414c600cd4f2c248dd5" class="diff-expander js-expand" title="Expand" aria-label="Expand" data-url="/egovernment/eregistrations-demo/blob_excerpt/c67484fb451d4c9ae931f14076067c2735e06fda?diff=unified&amp;in_wiki_context=&amp;left_hunk_size=5&amp;mode=100644&amp;next_line_num_left=2&amp;next_line_num_right=2&amp;path=model%2Fbusiness-process-demo%2Fdata-forms%2Findex.js&amp;prev_line_num_left=&amp;prev_line_num_right=&amp;right_hunk_size=6" data-left-range="1-1" data-right-range="1-1">
        <svg aria-hidden="true" class="octicon octicon-unfold" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path d="M11.5 7.5L14 10c0 .55-.45 1-1 1H9v-1h3.5l-2-2h-7l-2 2H5v1H1c-.55 0-1-.45-1-1l2.5-2.5L0 5c0-.55.45-1 1-1h4v1H1.5l2 2h7l2-2H9V4h4c.55 0 1 .45 1 1l-2.5 2.5zM6 6h2V3h2L7 0 4 3h2v3zm2 3H6v3H4l3 3 3-3H8V9z"></path></svg>
      </a>
    </td>
    <td class="blob-code blob-code-inner blob-code-hunk">@@ -2,5 +2,6 @@</td>
  </tr>

    <tr>
    <td id="diff-960d5db1ab734414c600cd4f2c248dd5L2" data-line-number="2" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-960d5db1ab734414c600cd4f2c248dd5R2" data-line-number="2" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner"> </span>

  </td>
</tr>


    <tr>
    <td id="diff-960d5db1ab734414c600cd4f2c248dd5L3" data-line-number="3" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-960d5db1ab734414c600cd4f2c248dd5R3" data-line-number="3" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner"> <span class="pl-c1">module</span>.<span class="pl-smi">exports</span> <span class="pl-k">=</span> <span class="pl-c1">require</span>(<span class="pl-s"><span class="pl-pds">'</span>./base<span class="pl-pds">'</span></span>);</span>

  </td>
</tr>


    <tr>
    <td id="diff-960d5db1ab734414c600cd4f2c248dd5L4" data-line-number="4" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-960d5db1ab734414c600cd4f2c248dd5R4" data-line-number="4" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner"> </span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-960d5db1ab734414c600cd4f2c248dd5R5" data-line-number="5" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+<span class="pl-c1">require</span>(<span class="pl-s"><span class="pl-pds">'</span>./representative<span class="pl-pds">'</span></span>);</span>

  </td>
</tr>


    <tr>
    <td id="diff-960d5db1ab734414c600cd4f2c248dd5L5" data-line-number="5" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-960d5db1ab734414c600cd4f2c248dd5R6" data-line-number="6" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner"> <span class="pl-c1">require</span>(<span class="pl-s"><span class="pl-pds">'</span>./company-information<span class="pl-pds">'</span></span>);</span>

  </td>
</tr>


    <tr>
    <td id="diff-960d5db1ab734414c600cd4f2c248dd5L6" data-line-number="6" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-960d5db1ab734414c600cd4f2c248dd5R7" data-line-number="7" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner"> <span class="pl-c1">require</span>(<span class="pl-s"><span class="pl-pds">'</span>./attorney<span class="pl-pds">'</span></span>);</span>

  </td>
</tr>



        </tbody></table>
      </div>

</div>

    
<a name="diff-fb616cc6400aead124d5998dc3c4af25"></a>
<div id="diff-2" class="file js-details-container
             
             
             
             
             show-inline-notes
           ">
  <div class="file-header" data-path="model/business-process-demo/data-forms/representative.js">
    <div class="file-actions">
        <span class="show-file-notes">
          <label>
            <input type="checkbox" checked="checked" class="js-toggle-file-notes">
            Show comments
          </label>
        </span>

          <a href="/egovernment/eregistrations-demo/blob/e90431a57f5afc51e854a111ee2dc771d167b5ff/model/business-process-demo/data-forms/representative.js" class="btn btn-sm tooltipped tooltipped-nw" rel="nofollow" aria-label="View the whole file at version e90431a ">View</a>


    </div>
    <div class="file-info">
        <span class="diffstat tooltipped tooltipped-e" aria-label="20 additions &amp; 0 deletions">20 <span class="block-diff-added"></span><span class="block-diff-added"></span><span class="block-diff-added"></span><span class="block-diff-added"></span><span class="block-diff-added"></span></span>

      <span class="user-select-contain" title="model/business-process-demo/data-forms/representative.js">
        model/business-process-demo/data-forms/representative.js
      </span>
      
    </div>
  </div>

      <div class="data highlight blob-wrapper">
        <table class="diff-table tab-size  " data-tab-size="8">
          
      <tbody><tr data-position="0">
    <td id="diff-fb616cc6400aead124d5998dc3c4af25L-1" class="blob-num blob-num-hunk non-expandable" data-line-number="..."></td>
    <td id="diff-fb616cc6400aead124d5998dc3c4af25R0" class="blob-num blob-num-hunk non-expandable" data-line-number="..."></td>
    <td class="blob-code blob-code-inner blob-code-hunk">@@ -0,0 +1,20 @@</td>
  </tr>

    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-fb616cc6400aead124d5998dc3c4af25R1" data-line-number="1" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+<span class="pl-s"><span class="pl-pds">'</span>use strict<span class="pl-pds">'</span></span>;</span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-fb616cc6400aead124d5998dc3c4af25R2" data-line-number="2" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+</span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-fb616cc6400aead124d5998dc3c4af25R3" data-line-number="3" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+<span class="pl-k">var</span> db                  <span class="pl-k">=</span> <span class="pl-c1">require</span>(<span class="pl-s"><span class="pl-pds">'</span>../../../db<span class="pl-pds">'</span></span>)</span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-fb616cc6400aead124d5998dc3c4af25R4" data-line-number="4" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+  , _                   <span class="pl-k">=</span> <span class="pl-c1">require</span>(<span class="pl-s"><span class="pl-pds">'</span>../../../i18n<span class="pl-pds">'</span></span>)</span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-fb616cc6400aead124d5998dc3c4af25R5" data-line-number="5" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+  , FormSection         <span class="pl-k">=</span> <span class="pl-c1">require</span>(<span class="pl-s"><span class="pl-pds">'</span>eregistrations/model/form-section<span class="pl-pds">'</span></span>)(db)</span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-fb616cc6400aead124d5998dc3c4af25R6" data-line-number="6" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+  , BusinessProcessDemo <span class="pl-k">=</span> <span class="pl-c1">require</span>(<span class="pl-s"><span class="pl-pds">'</span>../fields<span class="pl-pds">'</span></span>);</span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-fb616cc6400aead124d5998dc3c4af25R7" data-line-number="7" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+</span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-fb616cc6400aead124d5998dc3c4af25R8" data-line-number="8" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+<span class="pl-smi">BusinessProcessDemo</span>.<span class="pl-c1">prototype</span>.<span class="pl-smi">dataForms</span>.<span class="pl-smi">map</span>.<span class="pl-en">define</span>(<span class="pl-s"><span class="pl-pds">'</span>representative<span class="pl-pds">'</span></span>, {</span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-fb616cc6400aead124d5998dc3c4af25R9" data-line-number="9" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+	nested<span class="pl-k">:</span> <span class="pl-c1">true</span>,</span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-fb616cc6400aead124d5998dc3c4af25R10" data-line-number="10" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+	type<span class="pl-k">:</span> FormSection</span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-fb616cc6400aead124d5998dc3c4af25R11" data-line-number="11" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+});</span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-fb616cc6400aead124d5998dc3c4af25R12" data-line-number="12" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+</span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-fb616cc6400aead124d5998dc3c4af25R13" data-line-number="13" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+<span class="pl-smi">BusinessProcessDemo</span>.<span class="pl-c1">prototype</span>.<span class="pl-smi">dataForms</span>.<span class="pl-smi">map</span>.<span class="pl-smi">representative</span>.<span class="pl-en">setProperties</span>({</span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-fb616cc6400aead124d5998dc3c4af25R14" data-line-number="14" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+	label<span class="pl-k">:</span> <span class="pl-en">_</span>(<span class="pl-s"><span class="pl-pds">"</span>Company's representative<span class="pl-pds">"</span></span>),</span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-fb616cc6400aead124d5998dc3c4af25R15" data-line-number="15" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+	actionUrl<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>representative<span class="pl-pds">'</span></span>,</span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-fb616cc6400aead124d5998dc3c4af25R16" data-line-number="16" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+	propertyNames<span class="pl-k">:</span> [<span class="pl-s"><span class="pl-pds">'</span>representative/firstName<span class="pl-pds">'</span></span>, <span class="pl-s"><span class="pl-pds">'</span>representative/lastName<span class="pl-pds">'</span></span>,</span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-fb616cc6400aead124d5998dc3c4af25R17" data-line-number="17" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+		<span class="pl-s"><span class="pl-pds">'</span>representative/email<span class="pl-pds">'</span></span>]</span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-fb616cc6400aead124d5998dc3c4af25R18" data-line-number="18" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+});</span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-fb616cc6400aead124d5998dc3c4af25R19" data-line-number="19" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+</span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-fb616cc6400aead124d5998dc3c4af25R20" data-line-number="20" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+<span class="pl-c1">module</span>.<span class="pl-smi">exports</span> <span class="pl-k">=</span> BusinessProcessDemo;</span>

  </td>
</tr>



        </tbody></table>
      </div>

</div>


</div>

