---
layout: recipe
permalink: /how-to/add-a-tooltip-in-front-of-a-cost-in-the-guide/
title: 'Add a tooltip to a cost in the guide'
category: '1. Part A'
sub-category: 'Costs'
rate: '1'
number: '152'
introduction-text: 'This recipe explains how to set the tooltip in front of a cost, in the guide. Tooltips are used to give more information about a cost without putting to much text on the page. It is recommended to add one meaningful tooltip per cost to give more information to the user.'
introduction-img: '152.png'
prevUrl: /how-to/change-the-name-of-a-cost/
nextUrl: /how-to/add-a-legend-to-the-cost-in-the-payment-page/
done: ''
---

Every cost is associated with a service, so to change it's tooltip, we have to know the service to which it applies.

1. Open file `model/<business-process-your-service>/costs/<your-cost>.js`.
2. Set the value of the optionalInfo property of the cost to the desired tooltip text.

## Example

In the branch "[add-a-tooltip-in-front-of-a-cost-in-the-guide](https://github.com/egovernment/eregistrations-demo/tree/add-a-tooltip-in-front-of-a-cost-in-the-guide)" of eregistrations-demo :

Let's change the tooltip of the `companyRegistration` cost for `BusinessProcessDemo` service to `The registration fee will be charged in your next invoice of municipal taxes.`.

### Solution

<div id="files" class="diff-view " onclick="window.open('https://github.com/egovernment/eregistrations-demo/compare/add-a-tooltip-in-front-of-a-cost-in-the-guide...add-a-tooltip-in-front-of-a-cost-in-the-guide-solution#files')">

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

          <a href="/egovernment/eregistrations-demo/blob/234ad03424f82a334ac86771c8e30e845e07fb7f/model/business-process-demo/costs/company-registration.js" class="btn btn-sm tooltipped tooltipped-nw" rel="nofollow" aria-label="View the whole file at version 234ad03 ">View</a>


    </div>
    <div class="file-info">
        <span class="diffstat tooltipped tooltipped-e" aria-label="2 additions &amp; 1 deletion">3 <span class="block-diff-added"></span><span class="block-diff-added"></span><span class="block-diff-deleted"></span><span class="block-diff-neutral"></span><span class="block-diff-neutral"></span></span>

      <span class="user-select-contain" title="model/business-process-demo/costs/company-registration.js">
        model/business-process-demo/costs/company-registration.js
      </span>

    </div>
  </div>

      <div class="data highlight blob-wrapper">
        <table class="diff-table tab-size  " data-tab-size="8">

      <tbody><tr class="js-expandable-line" data-position="0">
    <td class="blob-num blob-num-expandable" colspan="2">
      <a href="#diff-dc845e55fef0dbbb6d5cd1ddf322aeec" class="diff-expander js-expand" title="Expand" aria-label="Expand" data-url="/egovernment/eregistrations-demo/blob_excerpt/5486e63bf9ce9910cab157d92e041b399481152b?diff=unified&amp;in_wiki_context=&amp;left_hunk_size=5&amp;mode=100644&amp;next_line_num_left=17&amp;next_line_num_right=17&amp;path=model%2Fbusiness-process-demo%2Fcosts%2Fcompany-registration.js&amp;prev_line_num_left=&amp;prev_line_num_right=&amp;right_hunk_size=6" data-left-range="1-16" data-right-range="1-16">
        <svg aria-hidden="true" class="octicon octicon-unfold" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path d="M11.5 7.5L14 10c0 .55-.45 1-1 1H9v-1h3.5l-2-2h-7l-2 2H5v1H1c-.55 0-1-.45-1-1l2.5-2.5L0 5c0-.55.45-1 1-1h4v1H1.5l2 2h7l2-2H9V4h4c.55 0 1 .45 1 1l-2.5 2.5zM6 6h2V3h2L7 0 4 3h2v3zm2 3H6v3H4l3 3 3-3H8V9z"></path></svg>
      </a>
    </td>
    <td class="blob-code blob-code-inner blob-code-hunk">@@ -17,5 +17,6 @@ BusinessProcessDemo.prototype.costs.map.companyRegistration.setProperties({</td>
  </tr>

    <tr>
    <td id="diff-dc845e55fef0dbbb6d5cd1ddf322aeecL17" data-line-number="17" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-dc845e55fef0dbbb6d5cd1ddf322aeecR17" data-line-number="17" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner">        , assets  <span class="pl-k">=</span> <span class="pl-smi">businessProcess</span>.<span class="pl-smi">_get</span> <span class="pl-k">?</span> <span class="pl-en">_observe</span>(<span class="pl-smi">businessProcess</span>.<span class="pl-smi">_assets</span>) <span class="pl-k">:</span> <span class="pl-smi">businessProcess</span>.<span class="pl-smi">assets</span>;</span>

  </td>
</tr>


    <tr>
    <td id="diff-dc845e55fef0dbbb6d5cd1ddf322aeecL18" data-line-number="18" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-dc845e55fef0dbbb6d5cd1ddf322aeecR18" data-line-number="18" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner"> </span>

  </td>
</tr>


    <tr>
    <td id="diff-dc845e55fef0dbbb6d5cd1ddf322aeecL19" data-line-number="19" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-dc845e55fef0dbbb6d5cd1ddf322aeecR19" data-line-number="19" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner">      <span class="pl-k">return</span> <span class="pl-c1">Math</span>.<span class="pl-c1">max</span>(<span class="pl-c1">Math</span>.<span class="pl-c1">ceil</span>((assets <span class="pl-k">||</span> <span class="pl-c1">0</span>) <span class="pl-k">/</span> <span class="pl-c1">1000</span>) <span class="pl-k">*</span> <span class="pl-c1">10</span>, <span class="pl-c1">10</span>);</span>

  </td>
</tr>


    <tr>
    <td id="diff-dc845e55fef0dbbb6d5cd1ddf322aeecL20" data-line-number="20" class="blob-num blob-num-deletion js-linkable-line-number"></td>

    <td class="blob-num blob-num-deletion empty-cell"></td>

  <td class="blob-code blob-code-deletion">

    <span class="blob-code-inner">- }</span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-dc845e55fef0dbbb6d5cd1ddf322aeecR20" data-line-number="20" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+ },</span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-dc845e55fef0dbbb6d5cd1ddf322aeecR21" data-line-number="21" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+ optionalInfo<span class="pl-k">:</span> <span class="pl-en">_</span>(<span class="pl-s"><span class="pl-pds">"</span>The registration fee will be charged in your next invoice of municipal taxes.<span class="pl-pds">"</span></span>)</span>

  </td>
</tr>


    <tr>
    <td id="diff-dc845e55fef0dbbb6d5cd1ddf322aeecL21" data-line-number="21" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-dc845e55fef0dbbb6d5cd1ddf322aeecR22" data-line-number="22" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner"> });</span>

  </td>
</tr>



        </tbody></table>
      </div>
</div>

</div>
