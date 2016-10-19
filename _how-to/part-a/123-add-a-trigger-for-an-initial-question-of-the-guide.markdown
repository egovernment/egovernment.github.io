---
layout: recipe
permalink: /how-to/add-a-trigger-for-an-initial-question-of-the-guide/
title: 'Add a trigger for an initial question of the guide'
category: '1. Part A'
sub-category: 'Determinants'
rate: '3'
number: '123'
introduction-text: 'In this recipe we will show how to make one field dependent on the other in context of the guide form.'
introduction-img: '123.png'
prevUrl: 122
nextUrl: 131
done: ''
lang: en
ref: 123
---

In order to hide one field depending on the value of some other field in the guide:

1. Open the file `model/business-process-<your-service>/guide.js`.
2. Define a new property on the same object (usually `<YourBusinessProcess>.prototype`) that the field you want your field to be dependent from. <br>
The new field should be named (`is<TheDependentFieldName>Applicable`) and should be a getter returning `true` or `false`.<br>
Whenever `is<TheDependentFieldName>Applicable`* getter returns `true`, the field `<theDependentFieldName>` will be shown, otherwise it will be hidden.
Please see the example below for better overview.

*- You should use `db.Object.getApplicablePropName` method to create the new field (see the example on how to use it).


## Example

In the branch "[add-a-trigger-for-an-initial-question-of-the-guide](https://github.com/egovernment/eregistrations-demo/tree/add-a-trigger-for-an-initial-question-of-the-guide)" of eregistrations-demo :

Make `workers` field of *"Business Process demo"* service appear only when `assets` field has value greater than 2000.

### Solution

<div id="files" class="diff-view " onclick="window.open('https://github.com/egovernment/eregistrations-demo/compare/add-a-trigger-for-an-initial-question-of-the-guide...add-a-trigger-for-an-initial-question-of-the-guide-solution#files')">

    
<a name="diff-63609d9a9982bcc003a06719b83e3026"></a>
<div id="diff-0" class="file js-details-container
             
             
             
             
             show-inline-notes
           ">
  <div class="file-header" data-path="model/business-process-demo/guide.js">
    <div class="file-actions">
        <span class="show-file-notes">
          <label>
            <input type="checkbox" checked="checked" class="js-toggle-file-notes">
            Show comments
          </label>
        </span>

          <a href="/egovernment/eregistrations-demo/blob/bf37b0283a1f67193a441e18f2a60d94111258fc/model/business-process-demo/guide.js" class="btn btn-sm tooltipped tooltipped-nw" rel="nofollow" aria-label="View the whole file at version bf37b02 ">View</a>


    </div>
    <div class="file-info">
        <span class="diffstat tooltipped tooltipped-e" aria-label="6 additions &amp; 1 deletion">7 <span class="block-diff-added"></span><span class="block-diff-added"></span><span class="block-diff-added"></span><span class="block-diff-added"></span><span class="block-diff-neutral"></span></span>

      <span class="user-select-contain" title="model/business-process-demo/guide.js">
        model/business-process-demo/guide.js
      </span>
      
    </div>
  </div>

      <div class="data highlight blob-wrapper">
        <table class="diff-table tab-size  " data-tab-size="8">
          
      <tbody><tr class="js-expandable-line" data-position="0">
    <td class="blob-num blob-num-expandable" colspan="2">
      <a href="#diff-63609d9a9982bcc003a06719b83e3026" class="diff-expander js-expand" title="Expand" aria-label="Expand" data-url="/egovernment/eregistrations-demo/blob_excerpt/effa6e686e0641237fe5f05723442134b8287deb?diff=unified&amp;in_wiki_context=&amp;left_hunk_size=7&amp;mode=100644&amp;next_line_num_left=4&amp;next_line_num_right=4&amp;path=model%2Fbusiness-process-demo%2Fguide.js&amp;prev_line_num_left=&amp;prev_line_num_right=&amp;right_hunk_size=8" data-left-range="1-3" data-right-range="1-3">
        <svg aria-hidden="true" class="octicon octicon-unfold" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path d="M11.5 7.5L14 10c0 .55-.45 1-1 1H9v-1h3.5l-2-2h-7l-2 2H5v1H1c-.55 0-1-.45-1-1l2.5-2.5L0 5c0-.55.45-1 1-1h4v1H1.5l2 2h7l2-2H9V4h4c.55 0 1 .45 1 1l-2.5 2.5zM6 6h2V3h2L7 0 4 3h2v3zm2 3H6v3H4l3 3 3-3H8V9z"></path></svg>
      </a>
    </td>
    <td class="blob-code blob-code-inner blob-code-hunk">@@ -4,7 +4,8 @@</td>
  </tr>

    <tr>
    <td id="diff-63609d9a9982bcc003a06719b83e3026L4" data-line-number="4" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-63609d9a9982bcc003a06719b83e3026R4" data-line-number="4" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner"> </span>

  </td>
</tr>


    <tr>
    <td id="diff-63609d9a9982bcc003a06719b83e3026L5" data-line-number="5" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-63609d9a9982bcc003a06719b83e3026R5" data-line-number="5" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner"> <span class="pl-k">var</span> db          <span class="pl-k">=</span> <span class="pl-c1">require</span>(<span class="pl-s"><span class="pl-pds">'</span>../../db<span class="pl-pds">'</span></span>)</span>

  </td>
</tr>


    <tr>
    <td id="diff-63609d9a9982bcc003a06719b83e3026L6" data-line-number="6" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-63609d9a9982bcc003a06719b83e3026R6" data-line-number="6" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner">   , FormSection <span class="pl-k">=</span> <span class="pl-c1">require</span>(<span class="pl-s"><span class="pl-pds">'</span>eregistrations/model/form-section<span class="pl-pds">'</span></span>)(db)</span>

  </td>
</tr>


    <tr>
    <td id="diff-63609d9a9982bcc003a06719b83e3026L7" data-line-number="7" class="blob-num blob-num-deletion js-linkable-line-number"></td>

    <td class="blob-num blob-num-deletion empty-cell"></td>

  <td class="blob-code blob-code-deletion">

    <span class="blob-code-inner">-  , BusinessProcessDemo <span class="pl-k">=</span> <span class="pl-c1">require</span>(<span class="pl-s"><span class="pl-pds">'</span>./fields<span class="pl-pds">'</span></span>);</span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-63609d9a9982bcc003a06719b83e3026R7" data-line-number="7" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+  , BusinessProcessDemo   <span class="pl-k">=</span> <span class="pl-c1">require</span>(<span class="pl-s"><span class="pl-pds">'</span>./fields<span class="pl-pds">'</span></span>)</span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-63609d9a9982bcc003a06719b83e3026R8" data-line-number="8" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+  , getApplicablePropName <span class="pl-k">=</span> <span class="pl-smi">db</span>.<span class="pl-smi">Object</span>.<span class="pl-smi">getApplicablePropName</span>;</span>

  </td>
</tr>


    <tr>
    <td id="diff-63609d9a9982bcc003a06719b83e3026L8" data-line-number="8" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-63609d9a9982bcc003a06719b83e3026R9" data-line-number="9" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner"> </span>

  </td>
</tr>


    <tr>
    <td id="diff-63609d9a9982bcc003a06719b83e3026L9" data-line-number="9" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-63609d9a9982bcc003a06719b83e3026R10" data-line-number="10" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner"> <span class="pl-c1">require</span>(<span class="pl-s"><span class="pl-pds">'</span>eregistrations/model/business-process-new/guide<span class="pl-pds">'</span></span>)(db);</span>

  </td>
</tr>


    <tr>
    <td id="diff-63609d9a9982bcc003a06719b83e3026L10" data-line-number="10" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-63609d9a9982bcc003a06719b83e3026R11" data-line-number="11" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner"> </span>

  </td>
</tr>


      <tr class="js-expandable-line" data-position="10">
    <td class="blob-num blob-num-expandable" colspan="2">
      <a href="#diff-63609d9a9982bcc003a06719b83e3026" class="diff-expander js-expand" title="Expand" aria-label="Expand" data-url="/egovernment/eregistrations-demo/blob_excerpt/effa6e686e0641237fe5f05723442134b8287deb?diff=unified&amp;in_wiki_context=&amp;left_hunk_size=4&amp;mode=100644&amp;next_line_num_left=15&amp;next_line_num_right=16&amp;path=model%2Fbusiness-process-demo%2Fguide.js&amp;prev_line_num_left=10&amp;prev_line_num_right=11&amp;right_hunk_size=8" data-left-range="11-14" data-right-range="12-15">
        <svg aria-hidden="true" class="octicon octicon-unfold" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path d="M11.5 7.5L14 10c0 .55-.45 1-1 1H9v-1h3.5l-2-2h-7l-2 2H5v1H1c-.55 0-1-.45-1-1l2.5-2.5L0 5c0-.55.45-1 1-1h4v1H1.5l2 2h7l2-2H9V4h4c.55 0 1 .45 1 1l-2.5 2.5zM6 6h2V3h2L7 0 4 3h2v3zm2 3H6v3H4l3 3 3-3H8V9z"></path></svg>
      </a>
    </td>
    <td class="blob-code blob-code-inner blob-code-hunk">@@ -15,4 +16,8 @@ BusinessProcessDemo.prototype.determinants.setProperties({</td>
  </tr>

    <tr>
    <td id="diff-63609d9a9982bcc003a06719b83e3026L15" data-line-number="15" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-63609d9a9982bcc003a06719b83e3026R16" data-line-number="16" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner"> 	propertyNames<span class="pl-k">:</span> [<span class="pl-s"><span class="pl-pds">'</span>assets<span class="pl-pds">'</span></span>, <span class="pl-s"><span class="pl-pds">'</span>workers<span class="pl-pds">'</span></span>]</span>

  </td>
</tr>


    <tr>
    <td id="diff-63609d9a9982bcc003a06719b83e3026L16" data-line-number="16" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-63609d9a9982bcc003a06719b83e3026R17" data-line-number="17" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner"> });</span>

  </td>
</tr>


    <tr>
    <td id="diff-63609d9a9982bcc003a06719b83e3026L17" data-line-number="17" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-63609d9a9982bcc003a06719b83e3026R18" data-line-number="18" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner"> </span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-63609d9a9982bcc003a06719b83e3026R19" data-line-number="19" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+<span class="pl-smi">BusinessProcessDemo</span>.<span class="pl-c1">prototype</span>.<span class="pl-c1">set</span>(<span class="pl-en">getApplicablePropName</span>(<span class="pl-s"><span class="pl-pds">'</span>workers<span class="pl-pds">'</span></span>), <span class="pl-k">function</span> () {</span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-63609d9a9982bcc003a06719b83e3026R20" data-line-number="20" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+	<span class="pl-k">return</span> <span class="pl-v">this</span>.<span class="pl-smi">assets</span> <span class="pl-k">&gt;</span> <span class="pl-c1">2000</span>;</span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-63609d9a9982bcc003a06719b83e3026R21" data-line-number="21" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+});</span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-63609d9a9982bcc003a06719b83e3026R22" data-line-number="22" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+</span>

  </td>
</tr>


    <tr>
    <td id="diff-63609d9a9982bcc003a06719b83e3026L18" data-line-number="18" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-63609d9a9982bcc003a06719b83e3026R23" data-line-number="23" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner"> <span class="pl-c1">module</span>.<span class="pl-smi">exports</span> <span class="pl-k">=</span> BusinessProcessDemo;</span>

  </td>
</tr>



        </tbody></table>
      </div>

</div>


</div>
