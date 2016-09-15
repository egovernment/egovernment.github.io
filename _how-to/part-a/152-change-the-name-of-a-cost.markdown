---
layout: recipe
permalink: /how-to/change-the-name-of-a-cost/
title: 'Change the name of a cost'
category: '1. Part A'
sub-category: 'Costs'
rate: '1'
number: '152'
introduction-text: 'Cost name is used for both Part A and Part B as well as print views. Changing it will affect all of those places.'
introduction-img: '151.png'
prevUrl: 151
nextUrl: 153
done: 'yes'
lang: en
ref: 152
---

Every cost is associated with a service, so to change it's name, we have to know the service to which it applies.

1. Open file `model/<business-process-your-service>/costs/<your-cost>.js`.
2. Set the value of the label property of the cost to the desired name.

## Example

In the branch "[change-the-name-of-a-cost](https://github.com/egovernment/eregistrations-demo/tree/change-the-name-of-a-cost)" of eregistrations-demo :

Change the name of the `companyRegistration` cost for `BusinessProcessDemo` service to *"Company registration in the Neverland"*.

### Solution

<div id="files" class="diff-view " onclick="window.open('https://github.com/egovernment/eregistrations-demo/compare/change-the-name-of-a-cost...change-the-name-of-a-cost-solution#files')">

<a name="diff-dc845e55fef0dbbb6d5cd1ddf322aeec"></a>
<div id="diff-0" class="file js-details-container




             show-inline-notes
           ">
  <div class="file-header" data-path="model/business-process-demo/costs/company-registration.js">
    <div class="file-actions">
        <span class="show-file-notes">
          <label>
            <input checked="checked" class="js-toggle-file-notes" type="checkbox">
            Show notes
          </label>
        </span>

          <a href="/egovernment/eregistrations-demo/blob/100966898ff19c554e83b99a373a027a2b4e4d50/model/business-process-demo/costs/company-registration.js" class="btn btn-sm tooltipped tooltipped-nw" rel="nofollow" aria-label="View the whole file at version 1009668 ">View</a>


    </div>
    <div class="file-info">
        <span class="diffstat tooltipped tooltipped-e" aria-label="1 addition &amp; 1 deletion">2 <span class="block-diff-added"></span><span class="block-diff-deleted"></span><span class="block-diff-neutral"></span><span class="block-diff-neutral"></span><span class="block-diff-neutral"></span></span>

      <span class="user-select-contain" title="model/business-process-demo/costs/company-registration.js">
        model/business-process-demo/costs/company-registration.js
      </span>

    </div>
  </div>

      <div class="data highlight blob-wrapper">
        <table class="diff-table tab-size  " data-tab-size="8">

      <tbody><tr class="js-expandable-line" data-position="0">
    <td class="blob-num blob-num-expandable" colspan="2">
      <a href="#diff-dc845e55fef0dbbb6d5cd1ddf322aeec" class="diff-expander js-expand" title="Expand" aria-label="Expand" data-url="/egovernment/eregistrations-demo/blob_excerpt/5968db7251aef0c45683c22dbbff5c2eaf32e6f0?diff=unified&amp;in_wiki_context=&amp;left_hunk_size=7&amp;mode=100644&amp;next_line_num_left=11&amp;next_line_num_right=11&amp;path=model%2Fbusiness-process-demo%2Fcosts%2Fcompany-registration.js&amp;prev_line_num_left=&amp;prev_line_num_right=&amp;right_hunk_size=7" data-left-range="1-10" data-right-range="1-10">
        <svg aria-hidden="true" class="octicon octicon-unfold" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path d="M11.5 7.5L14 10c0 .55-.45 1-1 1H9v-1h3.5l-2-2h-7l-2 2H5v1H1c-.55 0-1-.45-1-1l2.5-2.5L0 5c0-.55.45-1 1-1h4v1H1.5l2 2h7l2-2H9V4h4c.55 0 1 .45 1 1l-2.5 2.5zM6 6h2V3h2L7 0 4 3h2v3zm2 3H6v3H4l3 3 3-3H8V9z"></path></svg>
      </a>
    </td>
    <td class="blob-code blob-code-inner blob-code-hunk">@@ -11,7 +11,7 @@ BusinessProcessDemo.prototype.costs.map.define('companyRegistration', {</td>
  </tr>

    <tr>
    <td id="diff-dc845e55fef0dbbb6d5cd1ddf322aeecL11" data-line-number="11" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-dc845e55fef0dbbb6d5cd1ddf322aeecR11" data-line-number="11" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner"> });</span>

  </td>
</tr>


    <tr>
    <td id="diff-dc845e55fef0dbbb6d5cd1ddf322aeecL12" data-line-number="12" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-dc845e55fef0dbbb6d5cd1ddf322aeecR12" data-line-number="12" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner"> </span>

  </td>
</tr>


    <tr>
    <td id="diff-dc845e55fef0dbbb6d5cd1ddf322aeecL13" data-line-number="13" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-dc845e55fef0dbbb6d5cd1ddf322aeecR13" data-line-number="13" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner"> <span class="pl-smi">BusinessProcessDemo</span>.<span class="pl-c1">prototype</span>.<span class="pl-smi">costs</span>.<span class="pl-smi">map</span>.<span class="pl-smi">companyRegistration</span>.<span class="pl-en">setProperties</span>({</span>

  </td>
</tr>


    <tr>
    <td id="diff-dc845e55fef0dbbb6d5cd1ddf322aeecL14" data-line-number="14" class="blob-num blob-num-deletion js-linkable-line-number"></td>

    <td class="blob-num blob-num-deletion empty-cell"></td>

  <td class="blob-code blob-code-deletion">

    <span class="blob-code-inner">- label<span class="pl-k">:</span> <span class="pl-en">_</span>(<span class="pl-s"><span class="pl-pds">"</span>Company registration<span class="pl-pds">"</span></span>),</span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-dc845e55fef0dbbb6d5cd1ddf322aeecR14" data-line-number="14" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+ label<span class="pl-k">:</span> <span class="pl-en">_</span>(<span class="pl-s"><span class="pl-pds">"</span>Company registration<span class="x x-first x-last"> in the Neverland</span><span class="pl-pds">"</span></span>),</span>

  </td>
</tr>


    <tr>
    <td id="diff-dc845e55fef0dbbb6d5cd1ddf322aeecL15" data-line-number="15" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-dc845e55fef0dbbb6d5cd1ddf322aeecR15" data-line-number="15" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner">  <span class="pl-en">amount</span><span class="pl-k">:</span> <span class="pl-k">function</span> (<span class="pl-smi">_observe</span>) {</span>

  </td>
</tr>


    <tr>
    <td id="diff-dc845e55fef0dbbb6d5cd1ddf322aeecL16" data-line-number="16" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-dc845e55fef0dbbb6d5cd1ddf322aeecR16" data-line-number="16" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner">      <span class="pl-k">var</span> businessProcess <span class="pl-k">=</span> <span class="pl-v">this</span>.<span class="pl-smi">master</span></span>

  </td>
</tr>


    <tr>
    <td id="diff-dc845e55fef0dbbb6d5cd1ddf322aeecL17" data-line-number="17" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-dc845e55fef0dbbb6d5cd1ddf322aeecR17" data-line-number="17" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner">        , assets  <span class="pl-k">=</span> <span class="pl-smi">businessProcess</span>.<span class="pl-smi">_get</span> <span class="pl-k">?</span> <span class="pl-en">_observe</span>(<span class="pl-smi">businessProcess</span>.<span class="pl-smi">_assets</span>) <span class="pl-k">:</span> <span class="pl-smi">businessProcess</span>.<span class="pl-smi">assets</span>;</span>

  </td>
</tr>


  <tr class="js-expandable-line">
   <td class="blob-num blob-num-expandable" colspan="2">
     <a href="#diff-dc845e55fef0dbbb6d5cd1ddf322aeec" class="diff-expander js-expand" title="Expand" aria-label="Expand" data-url="/egovernment/eregistrations-demo/blob_excerpt/5968db7251aef0c45683c22dbbff5c2eaf32e6f0?diff=unified&amp;in_wiki_context=&amp;mode=100644&amp;path=model%2Fbusiness-process-demo%2Fcosts%2Fcompany-registration.js&amp;prev_line_num_left=17&amp;prev_line_num_right=17" data-left-range="18-21" data-right-range="18-21">
       <svg aria-hidden="true" class="octicon octicon-unfold" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path d="M11.5 7.5L14 10c0 .55-.45 1-1 1H9v-1h3.5l-2-2h-7l-2 2H5v1H1c-.55 0-1-.45-1-1l2.5-2.5L0 5c0-.55.45-1 1-1h4v1H1.5l2 2h7l2-2H9V4h4c.55 0 1 .45 1 1l-2.5 2.5zM6 6h2V3h2L7 0 4 3h2v3zm2 3H6v3H4l3 3 3-3H8V9z"></path></svg>
     </a>
   </td>
   <td class="blob-code blob-code-expandable"></td>
  </tr>

        </tbody></table>
      </div>
</div>

</div>
