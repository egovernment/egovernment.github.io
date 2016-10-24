---
layout: recipe
permalink: /how-to/create-a-new-tab-in-the-form/
title: 'Create a new tab in tabbed view of forms page'
category: '1. Part A'
sub-category: 'Data'
rate: '4'
number: '170'
introduction-text: "This recipe is about adding a new tab (in a tabbed view) to a service's forms."
introduction-img: '170.png'
prevUrl: 168
nextUrl: 171
done: ''
lang: en
ref: 171
---

1. Create file `model/business-process-<your-service>/data-forms/<your-section>.js`.
2. Require the section type you want to use, usually it's `FormSectionGroup` (`eregistrations/model/form-section-group`).
3. Define a new section using your sections class on the `<YourBusinessProcess>.prototype.dataForms.map` property (See example below for details).
4. Make sure to set `pageUrl` property.
5. Open file `apps/business-process-<your-service>/routes.js`.
6. Using `eregistrations/routes/utils/define-tabbed-form` util, define route for the new section (See example below for details).

## Example

In the branch "[create-a-new-tab-in-the-form](https://github.com/egovernment/eregistrations-demo/tree/create-a-new-tab-in-the-form)" of eregistrations-demo :

Add new tab with section *"Company's representative"* to the *"Business Process Demo"* service. Section should include the following fields of `representative` object: *"firstName"*, *"lastName"*, *"email"*

### Solution

<div id="files" class="diff-view " onclick="window.open('https://github.com/egovernment/eregistrations-demo/compare/create-a-new-tab-in-the-form...create-a-new-tab-in-the-form-solution#files')">


<a name="diff-9f7fb156fbef3919167ccc39157b524c"></a>
<div id="diff-0" class="file js-details-container




             show-inline-notes
           ">
  <div class="file-header" data-path="apps/business-process-demo/routes.js">
    <div class="file-actions">
        <span class="show-file-notes">
          <label>
            <input checked="checked" class="js-toggle-file-notes" type="checkbox">
            Show comments
          </label>
        </span>

          <a href="/egovernment/eregistrations-demo/blob/7f8e4f1c9c07a30522a75e8ba0e0255a9b552475/apps/business-process-demo/routes.js" class="btn btn-sm tooltipped tooltipped-nw" rel="nofollow" aria-label="View the whole file at version 7f8e4f1 ">View</a>


    </div>
    <div class="file-info">
        <span class="diffstat tooltipped tooltipped-e" aria-label="1 addition &amp; 0 deletions">1 <span class="block-diff-added"></span><span class="block-diff-neutral"></span><span class="block-diff-neutral"></span><span class="block-diff-neutral"></span><span class="block-diff-neutral"></span></span>

      <span class="user-select-contain" title="apps/business-process-demo/routes.js">
        apps/business-process-demo/routes.js
      </span>

    </div>
  </div>

      <div class="data highlight blob-wrapper">
        <table class="diff-table tab-size  " data-tab-size="8">

      <tbody><tr class="js-expandable-line" data-position="0">
    <td class="blob-num blob-num-expandable" colspan="2">
      <a href="#diff-9f7fb156fbef3919167ccc39157b524c" class="diff-expander js-expand" title="Expand" aria-label="Expand" data-url="/egovernment/eregistrations-demo/blob_excerpt/aa1c0f45fcae2b44789eeb7e7737228590b5d99e?diff=unified&amp;in_wiki_context=&amp;left_hunk_size=3&amp;mode=100644&amp;next_line_num_left=11&amp;next_line_num_right=11&amp;path=apps%2Fbusiness-process-demo%2Froutes.js&amp;prev_line_num_left=&amp;prev_line_num_right=&amp;right_hunk_size=4" data-left-range="1-10" data-right-range="1-10">
        <svg aria-hidden="true" class="octicon octicon-unfold" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path d="M11.5 7.5L14 10c0 .55-.45 1-1 1H9v-1h3.5l-2-2h-7l-2 2H5v1H1c-.55 0-1-.45-1-1l2.5-2.5L0 5c0-.55.45-1 1-1h4v1H1.5l2 2h7l2-2H9V4h4c.55 0 1 .45 1 1l-2.5 2.5zM6 6h2V3h2L7 0 4 3h2v3zm2 3H6v3H4l3 3 3-3H8V9z"></path></svg>
      </a>
    </td>
    <td class="blob-code blob-code-inner blob-code-hunk">@@ -11,3 +11,4 @@ require('../../view/user-base');</td>
  </tr>

    <tr>
    <td id="diff-9f7fb156fbef3919167ccc39157b524cL11" data-line-number="11" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-9f7fb156fbef3919167ccc39157b524cR11" data-line-number="11" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner"> <span class="pl-en">assign</span>(<span class="pl-c1">exports</span>, <span class="pl-c1">require</span>(<span class="pl-s"><span class="pl-pds">'</span>eregistrations/routes/business-process<span class="pl-pds">'</span></span>));</span>

  </td>
</tr>


    <tr>
    <td id="diff-9f7fb156fbef3919167ccc39157b524cL12" data-line-number="12" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-9f7fb156fbef3919167ccc39157b524cR12" data-line-number="12" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner"> </span>

  </td>
</tr>


    <tr>
    <td id="diff-9f7fb156fbef3919167ccc39157b524cL13" data-line-number="13" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-9f7fb156fbef3919167ccc39157b524cR13" data-line-number="13" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner"> <span class="pl-en">defineTabbedForm</span>(<span class="pl-s"><span class="pl-pds">'</span>company<span class="pl-pds">'</span></span>, { isDefault<span class="pl-k">:</span> <span class="pl-c1">true</span>, context<span class="pl-k">:</span> <span class="pl-c1">exports</span> });</span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-9f7fb156fbef3919167ccc39157b524cR14" data-line-number="14" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+<span class="pl-en">defineTabbedForm</span>(<span class="pl-s"><span class="pl-pds">'</span>representative<span class="pl-pds">'</span></span>, { context<span class="pl-k">:</span> <span class="pl-c1">exports</span> });</span>

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
            <input checked="checked" class="js-toggle-file-notes" type="checkbox">
            Show comments
          </label>
        </span>

          <a href="/egovernment/eregistrations-demo/blob/7f8e4f1c9c07a30522a75e8ba0e0255a9b552475/model/business-process-demo/data-forms/index.js" class="btn btn-sm tooltipped tooltipped-nw" rel="nofollow" aria-label="View the whole file at version 7f8e4f1 ">View</a>


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
      <a href="#diff-960d5db1ab734414c600cd4f2c248dd5" class="diff-expander js-expand" title="Expand" aria-label="Expand" data-url="/egovernment/eregistrations-demo/blob_excerpt/4cc5d513ea2015f6e4c88186577b20e648ab4c31?diff=unified&amp;in_wiki_context=&amp;left_hunk_size=3&amp;mode=100644&amp;next_line_num_left=3&amp;next_line_num_right=3&amp;path=model%2Fbusiness-process-demo%2Fdata-forms%2Findex.js&amp;prev_line_num_left=&amp;prev_line_num_right=&amp;right_hunk_size=4" data-left-range="1-2" data-right-range="1-2">
        <svg aria-hidden="true" class="octicon octicon-unfold" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path d="M11.5 7.5L14 10c0 .55-.45 1-1 1H9v-1h3.5l-2-2h-7l-2 2H5v1H1c-.55 0-1-.45-1-1l2.5-2.5L0 5c0-.55.45-1 1-1h4v1H1.5l2 2h7l2-2H9V4h4c.55 0 1 .45 1 1l-2.5 2.5zM6 6h2V3h2L7 0 4 3h2v3zm2 3H6v3H4l3 3 3-3H8V9z"></path></svg>
      </a>
    </td>
    <td class="blob-code blob-code-inner blob-code-hunk">@@ -3,3 +3,4 @@</td>
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
    <td id="diff-960d5db1ab734414c600cd4f2c248dd5L5" data-line-number="5" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-960d5db1ab734414c600cd4f2c248dd5R5" data-line-number="5" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner"> <span class="pl-c1">require</span>(<span class="pl-s"><span class="pl-pds">'</span>./company<span class="pl-pds">'</span></span>);</span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-960d5db1ab734414c600cd4f2c248dd5R6" data-line-number="6" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+<span class="pl-c1">require</span>(<span class="pl-s"><span class="pl-pds">'</span>./representative<span class="pl-pds">'</span></span>);</span>

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
            <input checked="checked" class="js-toggle-file-notes" type="checkbox">
            Show comments
          </label>
        </span>

          <a href="/egovernment/eregistrations-demo/blob/7f8e4f1c9c07a30522a75e8ba0e0255a9b552475/model/business-process-demo/data-forms/representative.js" class="btn btn-sm tooltipped tooltipped-nw" rel="nofollow" aria-label="View the whole file at version 7f8e4f1 ">View</a>


    </div>
    <div class="file-info">
        <span class="diffstat tooltipped tooltipped-e" aria-label="22 additions &amp; 0 deletions">22 <span class="block-diff-added"></span><span class="block-diff-added"></span><span class="block-diff-added"></span><span class="block-diff-added"></span><span class="block-diff-added"></span></span>

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
    <td class="blob-code blob-code-inner blob-code-hunk">@@ -0,0 +1,22 @@</td>
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

    <span class="blob-code-inner">+  , _                   <span class="pl-k">=</span> <span class="pl-c1">require</span>(<span class="pl-s"><span class="pl-pds">'</span>../../../i18n<span class="pl-pds">'</span></span>).<span class="pl-en">bind</span>(<span class="pl-s"><span class="pl-pds">'</span>Model: Sections<span class="pl-pds">'</span></span>)</span>

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

    <span class="blob-code-inner">+  , BusinessProcessDemo <span class="pl-k">=</span> <span class="pl-c1">require</span>(<span class="pl-s"><span class="pl-pds">'</span>../base<span class="pl-pds">'</span></span>)</span>

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

    <span class="blob-code-inner">+  , representative;</span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-fb616cc6400aead124d5998dc3c4af25R9" data-line-number="9" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+</span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-fb616cc6400aead124d5998dc3c4af25R10" data-line-number="10" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+<span class="pl-smi">BusinessProcessDemo</span>.<span class="pl-c1">prototype</span>.<span class="pl-smi">dataForms</span>.<span class="pl-smi">map</span>.<span class="pl-en">define</span>(<span class="pl-s"><span class="pl-pds">'</span>representative<span class="pl-pds">'</span></span>, {</span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-fb616cc6400aead124d5998dc3c4af25R11" data-line-number="11" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+ nested<span class="pl-k">:</span> <span class="pl-c1">true</span>,</span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-fb616cc6400aead124d5998dc3c4af25R12" data-line-number="12" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+ type<span class="pl-k">:</span> FormSection</span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-fb616cc6400aead124d5998dc3c4af25R13" data-line-number="13" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+});</span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-fb616cc6400aead124d5998dc3c4af25R14" data-line-number="14" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+</span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-fb616cc6400aead124d5998dc3c4af25R15" data-line-number="15" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+representative <span class="pl-k">=</span> <span class="pl-smi">BusinessProcessDemo</span>.<span class="pl-c1">prototype</span>.<span class="pl-smi">dataForms</span>.<span class="pl-smi">map</span>.<span class="pl-smi">representative</span>;</span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-fb616cc6400aead124d5998dc3c4af25R16" data-line-number="16" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+</span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-fb616cc6400aead124d5998dc3c4af25R17" data-line-number="17" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+<span class="pl-smi">representative</span>.<span class="pl-en">setProperties</span>({</span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-fb616cc6400aead124d5998dc3c4af25R18" data-line-number="18" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+ label<span class="pl-k">:</span> <span class="pl-en">_</span>(<span class="pl-s"><span class="pl-pds">"</span>Company's representative<span class="pl-pds">"</span></span>),</span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-fb616cc6400aead124d5998dc3c4af25R19" data-line-number="19" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+ pageUrl<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>representative<span class="pl-pds">'</span></span>,</span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-fb616cc6400aead124d5998dc3c4af25R20" data-line-number="20" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+ actionUrl<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>representative-information<span class="pl-pds">'</span></span>,</span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-fb616cc6400aead124d5998dc3c4af25R21" data-line-number="21" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+ propertyNames<span class="pl-k">:</span> [<span class="pl-s"><span class="pl-pds">'</span>representative/firstName<span class="pl-pds">'</span></span>, <span class="pl-s"><span class="pl-pds">'</span>representative/lastName<span class="pl-pds">'</span></span>, <span class="pl-s"><span class="pl-pds">'</span>representative/email<span class="pl-pds">'</span></span>]</span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-fb616cc6400aead124d5998dc3c4af25R22" data-line-number="22" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+});</span>

  </td>
</tr>



        </tbody></table>
      </div>

</div>


</div>
