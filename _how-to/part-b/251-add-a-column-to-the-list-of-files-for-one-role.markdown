---
layout: recipe
permalink: /how-to/add-a-column-to-the-list-of-files-for-one-role/
title: 'Add a column to the list of files for one role'
category: '2. Part B'
sub-category: 'Other'
rate: '3'
number: '251'
introduction-text: ''
introduction-img: '251.png'
prevUrl: 243
nextUrl: 252
done: 'yes'
lang: en
ref: 251
---

Every processing step will come with default columns setup for the files table.

In order to add a column to a files table:

1. Open file `view/<your-official-role>/business-processes-table.js`.
2. Make sure that you have a local copy of `columns` exported property from `eregistrations/view/components/business-process-table-columns`.
<br>(If it's not there already, just copy its value to local variable (you can use `es5-ext/array/from` for copying)).
3. Once you have a local copy of `columns` property add your new column definition* at a desired place in the array.

*- The column definition is an object which looks like this:

``` javascript
{
	head: "Title of the column",
	class: 'submitted-user-data-table-service', // css classes used
	data: function (businessProcess) { // a function returning table cell content
		return span(businessProcess._businessName);
	}
}
```

## Example

In the branch "[add-a-column-to-the-list-of-files-for-one-role](https://github.com/egovernment/eregistrations-demo/tree/add-a-column-to-the-list-of-files-for-one-role)" of eregistrations-demo:

Add column displaying `sealDate` for the business processes table of *"Social Security"* step.

### Solution

<div id="files" class="diff-view " onclick="window.open('https://github.com/egovernment/eregistrations-demo/compare/add-a-column-to-the-list-of-files-for-one-role...add-a-column-to-the-list-of-files-for-one-role-solution#files')">


<a name="diff-855d5a90e18da14963222196bc59a4e9"></a>
<div id="diff-0" class="file js-details-container




             show-inline-notes
           ">
  <div class="file-header" data-path="apps-common/business-process-list-properties.js">
    <div class="file-actions">
        <span class="show-file-notes">
          <label>
            <input type="checkbox" checked="checked" class="js-toggle-file-notes">
            Show comments
          </label>
        </span>

          <a href="/egovernment/eregistrations-demo/blob/15565ec8c0ce8656a7198c0159b41525ff29553d/apps-common/business-process-list-properties.js" class="btn btn-sm tooltipped tooltipped-nw" rel="nofollow" aria-label="View the whole file at version 15565ec ">View</a>


    </div>
    <div class="file-info">
        <span class="diffstat tooltipped tooltipped-e" aria-label="1 addition &amp; 1 deletion">2 <span class="block-diff-added"></span><span class="block-diff-deleted"></span><span class="block-diff-neutral"></span><span class="block-diff-neutral"></span><span class="block-diff-neutral"></span></span>

      <span class="user-select-contain" title="apps-common/business-process-list-properties.js">
        apps-common/business-process-list-properties.js
      </span>

    </div>
  </div>

      <div class="data highlight blob-wrapper">
        <table class="diff-table tab-size  " data-tab-size="8">

      <tbody><tr class="js-expandable-line" data-position="0">
    <td class="blob-num blob-num-expandable" colspan="2">
      <a href="#diff-855d5a90e18da14963222196bc59a4e9" class="diff-expander js-expand" title="Expand" aria-label="Expand" data-url="/egovernment/eregistrations-demo/blob_excerpt/d313b06735fc9453de182cc59dd9a57290cf6cb7?diff=unified&amp;in_wiki_context=&amp;left_hunk_size=4&amp;mode=100644&amp;next_line_num_left=6&amp;next_line_num_right=6&amp;path=apps-common%2Fbusiness-process-list-properties.js&amp;prev_line_num_left=&amp;prev_line_num_right=&amp;right_hunk_size=4" data-left-range="1-5" data-right-range="1-5">
        <svg aria-hidden="true" class="octicon octicon-unfold" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path d="M11.5 7.5L14 10c0 .55-.45 1-1 1H9v-1h3.5l-2-2h-7l-2 2H5v1H1c-.55 0-1-.45-1-1l2.5-2.5L0 5c0-.55.45-1 1-1h4v1H1.5l2 2h7l2-2H9V4h4c.55 0 1 .45 1 1l-2.5 2.5zM6 6h2V3h2L7 0 4 3h2v3zm2 3H6v3H4l3 3 3-3H8V9z"></path></svg>
      </a>
    </td>
    <td class="blob-code blob-code-inner blob-code-hunk">@@ -6,4 +6,4 @@ var Set = require('es6-set');</td>
  </tr>

    <tr>
    <td id="diff-855d5a90e18da14963222196bc59a4e9L6" data-line-number="6" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-855d5a90e18da14963222196bc59a4e9R6" data-line-number="6" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner"> </span>

  </td>
</tr>


    <tr>
    <td id="diff-855d5a90e18da14963222196bc59a4e9L7" data-line-number="7" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-855d5a90e18da14963222196bc59a4e9R7" data-line-number="7" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner"> <span class="pl-c1">module</span>.<span class="pl-smi">exports</span> <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-en">Set</span>([</span>

  </td>
</tr>


    <tr>
    <td id="diff-855d5a90e18da14963222196bc59a4e9L8" data-line-number="8" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-855d5a90e18da14963222196bc59a4e9R8" data-line-number="8" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner"> 	<span class="pl-s"><span class="pl-pds">'</span>certificates/dataSnapshot/jsonString<span class="pl-pds">'</span></span>, <span class="pl-s"><span class="pl-pds">'</span>filesArchiveUrl<span class="pl-pds">'</span></span>,</span>

  </td>
</tr>


    <tr>
    <td id="diff-855d5a90e18da14963222196bc59a4e9L9" data-line-number="9" class="blob-num blob-num-deletion js-linkable-line-number"></td>

    <td class="blob-num blob-num-deletion empty-cell"></td>

  <td class="blob-code blob-code-deletion">

    <span class="blob-code-inner">-	<span class="pl-s"><span class="pl-pds">'</span>isApproved<span class="pl-pds">'</span></span>, <span class="pl-s"><span class="pl-pds">'</span>isRejected<span class="pl-pds">'</span></span>, <span class="pl-s"><span class="pl-pds">'</span>isSubmitted<span class="pl-pds">'</span></span>]);</span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-855d5a90e18da14963222196bc59a4e9R9" data-line-number="9" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+	<span class="pl-s"><span class="pl-pds">'</span>isApproved<span class="pl-pds">'</span></span>, <span class="pl-s"><span class="pl-pds">'</span>isRejected<span class="pl-pds">'</span></span>, <span class="pl-s"><span class="pl-pds">'</span>isSubmitted<span class="pl-pds">'</span></span><span class="x x-first">, </span><span class="pl-s"><span class="pl-pds x">'</span><span class="x">processingSteps/map/socialSecurity/sealDate</span><span class="pl-pds x x-last">'</span></span>]);</span>

  </td>
</tr>



        </tbody></table>
      </div>

</div>


<a name="diff-8cf097ee0a9820ce4bd82250eab720f4"></a>
<div id="diff-1" class="file js-details-container




             show-inline-notes
           ">
  <div class="file-header" data-path="view/official-social-security/business-processes-table.js">
    <div class="file-actions">
        <span class="show-file-notes">
          <label>
            <input type="checkbox" checked="checked" class="js-toggle-file-notes">
            Show comments
          </label>
        </span>

          <a href="/egovernment/eregistrations-demo/blob/15565ec8c0ce8656a7198c0159b41525ff29553d/view/official-social-security/business-processes-table.js" class="btn btn-sm tooltipped tooltipped-nw" rel="nofollow" aria-label="View the whole file at version 15565ec ">View</a>


    </div>
    <div class="file-info">
        <span class="diffstat tooltipped tooltipped-e" aria-label="9 additions &amp; 1 deletion">10 <span class="block-diff-added"></span><span class="block-diff-added"></span><span class="block-diff-added"></span><span class="block-diff-added"></span><span class="block-diff-neutral"></span></span>

      <span class="user-select-contain" title="view/official-social-security/business-processes-table.js">
        view/official-social-security/business-processes-table.js
      </span>

    </div>
  </div>

      <div class="data highlight blob-wrapper">
        <table class="diff-table tab-size  " data-tab-size="8">

      <tbody><tr data-position="0">
    <td id="diff-8cf097ee0a9820ce4bd82250eab720f4L0" class="blob-num blob-num-hunk non-expandable" data-line-number="..."></td>
    <td id="diff-8cf097ee0a9820ce4bd82250eab720f4R0" class="blob-num blob-num-hunk non-expandable" data-line-number="..."></td>
    <td class="blob-code blob-code-inner blob-code-hunk">@@ -1,6 +1,7 @@</td>
  </tr>

    <tr>
    <td id="diff-8cf097ee0a9820ce4bd82250eab720f4L1" data-line-number="1" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-8cf097ee0a9820ce4bd82250eab720f4R1" data-line-number="1" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner"> <span class="pl-s"><span class="pl-pds">'</span>use strict<span class="pl-pds">'</span></span>;</span>

  </td>
</tr>


    <tr>
    <td id="diff-8cf097ee0a9820ce4bd82250eab720f4L2" data-line-number="2" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-8cf097ee0a9820ce4bd82250eab720f4R2" data-line-number="2" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner"> </span>

  </td>
</tr>


    <tr>
    <td id="diff-8cf097ee0a9820ce4bd82250eab720f4L3" data-line-number="3" class="blob-num blob-num-deletion js-linkable-line-number"></td>

    <td class="blob-num blob-num-deletion empty-cell"></td>

  <td class="blob-code blob-code-deletion">

    <span class="blob-code-inner">-<span class="pl-k">var</span> from        <span class="pl-k">=</span> <span class="pl-c1">require</span>(<span class="pl-s"><span class="pl-pds">'</span>es5-ext/array/from<span class="pl-pds">'</span></span>)</span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-8cf097ee0a9820ce4bd82250eab720f4R3" data-line-number="3" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+<span class="pl-k">var</span> _           <span class="pl-k">=</span> <span class="pl-c1">require</span>(<span class="pl-s"><span class="pl-pds">'</span>../../i18n<span class="pl-pds">'</span></span>).<span class="pl-en">bind</span>(<span class="pl-s"><span class="pl-pds">"</span>Social Security table<span class="pl-pds">"</span></span>)</span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-8cf097ee0a9820ce4bd82250eab720f4R4" data-line-number="4" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+  , from        <span class="pl-k">=</span> <span class="pl-c1">require</span>(<span class="pl-s"><span class="pl-pds">'</span>es5-ext/array/from<span class="pl-pds">'</span></span>)</span>

  </td>
</tr>


    <tr>
    <td id="diff-8cf097ee0a9820ce4bd82250eab720f4L4" data-line-number="4" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-8cf097ee0a9820ce4bd82250eab720f4R5" data-line-number="5" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner">   , getTable    <span class="pl-k">=</span> <span class="pl-c1">require</span>(<span class="pl-s"><span class="pl-pds">'</span>eregistrations/view/components/business-processes-table<span class="pl-pds">'</span></span>)</span>

  </td>
</tr>


    <tr>
    <td id="diff-8cf097ee0a9820ce4bd82250eab720f4L5" data-line-number="5" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-8cf097ee0a9820ce4bd82250eab720f4R6" data-line-number="6" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner">   , tableCols   <span class="pl-k">=</span> <span class="pl-c1">require</span>(<span class="pl-s"><span class="pl-pds">'</span>eregistrations/view/components/business-process-table-columns<span class="pl-pds">'</span></span>)</span>

  </td>
</tr>


    <tr>
    <td id="diff-8cf097ee0a9820ce4bd82250eab720f4L6" data-line-number="6" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-8cf097ee0a9820ce4bd82250eab720f4R7" data-line-number="7" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner">   , statusMap   <span class="pl-k">=</span> <span class="pl-c1">require</span>(<span class="pl-s"><span class="pl-pds">'</span>../../apps/official-social-security/business-processes/map<span class="pl-pds">'</span></span>)</span>

  </td>
</tr>


      <tr class="js-expandable-line" data-position="9">
    <td class="blob-num blob-num-expandable" colspan="2">
      <a href="#diff-8cf097ee0a9820ce4bd82250eab720f4" class="diff-expander js-expand" title="Expand" aria-label="Expand" data-url="/egovernment/eregistrations-demo/blob_excerpt/65fd5d8d2fb1b7d632b2b6e8f70fcc5760823f6b?diff=unified&amp;in_wiki_context=&amp;left_hunk_size=6&amp;mode=100644&amp;next_line_num_left=12&amp;next_line_num_right=13&amp;path=view%2Fofficial-social-security%2Fbusiness-processes-table.js&amp;prev_line_num_left=6&amp;prev_line_num_right=7&amp;right_hunk_size=13" data-left-range="7-11" data-right-range="8-12">
        <svg aria-hidden="true" class="octicon octicon-unfold" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path d="M11.5 7.5L14 10c0 .55-.45 1-1 1H9v-1h3.5l-2-2h-7l-2 2H5v1H1c-.55 0-1-.45-1-1l2.5-2.5L0 5c0-.55.45-1 1-1h4v1H1.5l2 2h7l2-2H9V4h4c.55 0 1 .45 1 1l-2.5 2.5zM6 6h2V3h2L7 0 4 3h2v3zm2 3H6v3H4l3 3 3-3H8V9z"></path></svg>
      </a>
    </td>
    <td class="blob-code blob-code-inner blob-code-hunk">@@ -12,6 +13,13 @@ var from        = require('es5-ext/array/from')</td>
  </tr>

    <tr>
    <td id="diff-8cf097ee0a9820ce4bd82250eab720f4L12" data-line-number="12" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-8cf097ee0a9820ce4bd82250eab720f4R13" data-line-number="13" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner"> </span>

  </td>
</tr>


    <tr>
    <td id="diff-8cf097ee0a9820ce4bd82250eab720f4L13" data-line-number="13" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-8cf097ee0a9820ce4bd82250eab720f4R14" data-line-number="14" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner"> <span class="pl-c1">module</span>.<span class="pl-smi">exports</span> <span class="pl-k">=</span> <span class="pl-c1">exports</span> <span class="pl-k">=</span> <span class="pl-c1">require</span>(<span class="pl-s"><span class="pl-pds">'</span>eregistrations/view/business-processes-table<span class="pl-pds">'</span></span>);</span>

  </td>
</tr>


    <tr>
    <td id="diff-8cf097ee0a9820ce4bd82250eab720f4L14" data-line-number="14" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-8cf097ee0a9820ce4bd82250eab720f4R15" data-line-number="15" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner"> </span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-8cf097ee0a9820ce4bd82250eab720f4R16" data-line-number="16" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+<span class="pl-smi">columns</span>.<span class="pl-c1">splice</span>(<span class="pl-k">-</span><span class="pl-c1">1</span>, <span class="pl-c1">0</span>, {</span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-8cf097ee0a9820ce4bd82250eab720f4R17" data-line-number="17" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+	head<span class="pl-k">:</span> <span class="pl-en">_</span>(<span class="pl-s"><span class="pl-pds">"</span>Sealed at<span class="pl-pds">"</span></span>),</span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-8cf097ee0a9820ce4bd82250eab720f4R18" data-line-number="18" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+	class<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>submitted-user-data-table-service<span class="pl-pds">'</span></span>,</span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-8cf097ee0a9820ce4bd82250eab720f4R19" data-line-number="19" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+	<span class="pl-en">data</span><span class="pl-k">:</span> <span class="pl-k">function</span> (<span class="pl-smi">businessProcess</span>) {</span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-8cf097ee0a9820ce4bd82250eab720f4R20" data-line-number="20" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+		<span class="pl-k">return</span> <span class="pl-en">span</span>(<span class="pl-smi">businessProcess</span>.<span class="pl-smi">processingSteps</span>.<span class="pl-smi">map</span>.<span class="pl-smi">socialSecurity</span>.<span class="pl-smi">_sealDate</span>);</span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-8cf097ee0a9820ce4bd82250eab720f4R21" data-line-number="21" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+	}</span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-8cf097ee0a9820ce4bd82250eab720f4R22" data-line-number="22" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+});</span>

  </td>
</tr>


    <tr>
    <td id="diff-8cf097ee0a9820ce4bd82250eab720f4L15" data-line-number="15" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-8cf097ee0a9820ce4bd82250eab720f4R23" data-line-number="23" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner"> <span class="pl-smi">columns</span>.<span class="pl-c1">push</span>(<span class="pl-smi">tableCols</span>.<span class="pl-smi">archiverColumn</span>);</span>

  </td>
</tr>


    <tr>
    <td id="diff-8cf097ee0a9820ce4bd82250eab720f4L16" data-line-number="16" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-8cf097ee0a9820ce4bd82250eab720f4R24" data-line-number="24" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner"> <span class="pl-smi">columns</span>.<span class="pl-c1">push</span>(<span class="pl-smi">tableCols</span>.<span class="pl-smi">goToColumn</span>);</span>

  </td>
</tr>


    <tr>
    <td id="diff-8cf097ee0a9820ce4bd82250eab720f4L17" data-line-number="17" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-8cf097ee0a9820ce4bd82250eab720f4R25" data-line-number="25" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner"> </span>

  </td>
</tr>


  <tr class="js-expandable-line">
   <td class="blob-num blob-num-expandable" colspan="2">
     <a href="#diff-8cf097ee0a9820ce4bd82250eab720f4" class="diff-expander js-expand" title="Expand" aria-label="Expand" data-url="/egovernment/eregistrations-demo/blob_excerpt/65fd5d8d2fb1b7d632b2b6e8f70fcc5760823f6b?diff=unified&amp;in_wiki_context=&amp;mode=100644&amp;path=view%2Fofficial-social-security%2Fbusiness-processes-table.js&amp;prev_line_num_left=17&amp;prev_line_num_right=25" data-left-range="18-40" data-right-range="26-40">
       <svg aria-hidden="true" class="octicon octicon-unfold" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path d="M11.5 7.5L14 10c0 .55-.45 1-1 1H9v-1h3.5l-2-2h-7l-2 2H5v1H1c-.55 0-1-.45-1-1l2.5-2.5L0 5c0-.55.45-1 1-1h4v1H1.5l2 2h7l2-2H9V4h4c.55 0 1 .45 1 1l-2.5 2.5zM6 6h2V3h2L7 0 4 3h2v3zm2 3H6v3H4l3 3 3-3H8V9z"></path></svg>
     </a>
   </td>
   <td class="blob-code blob-code-expandable"></td>
  </tr>

        </tbody></table>
      </div>

</div>


</div>
