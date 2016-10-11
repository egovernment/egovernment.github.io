---
layout: recipe
permalink: /how-to/add-a-legend-to-the-cost-in-the-payment-page/
title: 'Add a legend to payment receipt upload in the payments page'
category: '1. Part A'
sub-category: 'Costs'
rate: '2'
number: '154'
introduction-text: ''
introduction-img: '154.png'
prevUrl: 153
nextUrl: 155
done: ''
lang: en
ref: 154
---

Every payment receipt upload is associated with a service, so to change it's legend, we have to know the service to which it applies.

1. Open file `model/<business-process-your-service>/payment-receipt-uploads.js`.
2. Locate the payments receipt upload and change its `legend`.

## Example

In the branch "[add-a-legend-to-the-cost-in-the-payment-page](https://github.com/egovernment/eregistrations-demo/tree/add-a-legend-to-the-cost-in-the-payment-page)" of eregistrations-demo :

Add the legend to the `companyRegistration` payment receipt upload of `BusinessProcessDemo` service. The `legend` should say *"You need to pay it at the nearest bank to receive proper proof of payment"*.

### Solution

<div id="files" class="diff-view " onclick="window.open('https://github.com/egovernment/eregistrations-demo/compare/add-a-legend-to-the-cost-in-the-payment-page...add-a-legend-to-the-cost-in-the-payment-page-solution#files')">


<a name="diff-b1d55bc9e3293cd14eded1a399036611"></a>
<div id="diff-0" class="file js-details-container




             show-inline-notes
           ">
  <div class="file-header" data-path="model/business-process-demo/payment-receipt-uploads.js">
    <div class="file-actions">
        <span class="show-file-notes">
          <label>
            <input checked="checked" class="js-toggle-file-notes" type="checkbox">
            Show notes
          </label>
        </span>

          <a href="/egovernment/eregistrations-demo/blob/8ea3ab1a3a94fc6a815d59b2ce8583fc4e198587/model/business-process-demo/payment-receipt-uploads.js" class="btn btn-sm tooltipped tooltipped-nw" rel="nofollow" aria-label="View the whole file at version 8ea3ab1 ">View</a>

          <a class="btn-octicon tooltipped tooltipped-n" href="https://windows.github.com" aria-label="Open this file in GitHub Desktop" data-ga-click="Repository, open with desktop, type:windows">
              <svg aria-hidden="true" class="octicon octicon-device-desktop" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M15 2H1c-.55 0-1 .45-1 1v9c0 .55.45 1 1 1h5.34c-.25.61-.86 1.39-2.34 2h8c-1.48-.61-2.09-1.39-2.34-2H15c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm0 9H1V3h14v8z"></path></svg>
          </a>

    </div>
    <div class="file-info">
        <span class="diffstat tooltipped tooltipped-e" aria-label="4 additions &amp; 1 deletion">5 <span class="block-diff-added"></span><span class="block-diff-added"></span><span class="block-diff-added"></span><span class="block-diff-added"></span><span class="block-diff-deleted"></span></span>

      <span class="user-select-contain" title="model/business-process-demo/payment-receipt-uploads.js">
        model/business-process-demo/payment-receipt-uploads.js
      </span>

    </div>
  </div>

      <div class="data highlight blob-wrapper">
        <table class="diff-table tab-size  " data-tab-size="8">

      <tbody><tr class="js-expandable-line" data-position="0">
    <td class="blob-num blob-num-expandable" colspan="2">
      <a href="#diff-b1d55bc9e3293cd14eded1a399036611" class="diff-expander js-expand" title="Expand" aria-label="Expand" data-url="/egovernment/eregistrations-demo/blob_excerpt/29e41c5754ccaac319dedefac79909fd73f6e9d3?diff=unified&amp;in_wiki_context=&amp;left_hunk_size=5&amp;mode=100644&amp;next_line_num_left=7&amp;next_line_num_right=7&amp;path=model%2Fbusiness-process-demo%2Fpayment-receipt-uploads.js&amp;prev_line_num_left=&amp;prev_line_num_right=&amp;right_hunk_size=8" data-left-range="1-6" data-right-range="1-6">
        <svg aria-hidden="true" class="octicon octicon-unfold" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path d="M11.5 7.5L14 10c0 .55-.45 1-1 1H9v-1h3.5l-2-2h-7l-2 2H5v1H1c-.55 0-1-.45-1-1l2.5-2.5L0 5c0-.55.45-1 1-1h4v1H1.5l2 2h7l2-2H9V4h4c.55 0 1 .45 1 1l-2.5 2.5zM6 6h2V3h2L7 0 4 3h2v3zm2 3H6v3H4l3 3 3-3H8V9z"></path></svg>
      </a>
    </td>
    <td class="blob-code blob-code-inner blob-code-hunk">@@ -7,5 +7,8 @@ var definePaymentReceiptUploads =</td>
  </tr>

    <tr>
    <td id="diff-b1d55bc9e3293cd14eded1a399036611L7" data-line-number="7" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-b1d55bc9e3293cd14eded1a399036611R7" data-line-number="7" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner">  <span class="pl-c1">require</span>(<span class="pl-s"><span class="pl-pds">'</span>eregistrations/model/business-process-new/utils/define-payment-receipt-uploads<span class="pl-pds">'</span></span>);</span>

  </td>
</tr>


    <tr>
    <td id="diff-b1d55bc9e3293cd14eded1a399036611L8" data-line-number="8" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-b1d55bc9e3293cd14eded1a399036611R8" data-line-number="8" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner"> </span>

  </td>
</tr>


    <tr>
    <td id="diff-b1d55bc9e3293cd14eded1a399036611L9" data-line-number="9" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-b1d55bc9e3293cd14eded1a399036611R9" data-line-number="9" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner"> <span class="pl-c1">module</span>.<span class="pl-smi">exports</span> <span class="pl-k">=</span> <span class="pl-en">definePaymentReceiptUploads</span>(BusinessProcessDemo, {</span>

  </td>
</tr>


    <tr>
    <td id="diff-b1d55bc9e3293cd14eded1a399036611L10" data-line-number="10" class="blob-num blob-num-deletion js-linkable-line-number"></td>

    <td class="blob-num blob-num-deletion empty-cell"></td>

  <td class="blob-code blob-code-deletion">

    <span class="blob-code-inner">- companyRegistration<span class="pl-k">:</span> { label<span class="pl-k">:</span> <span class="pl-en">_</span>(<span class="pl-s"><span class="pl-pds">"</span>Proof of payment for company registration<span class="pl-pds">"</span></span>) }</span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-b1d55bc9e3293cd14eded1a399036611R10" data-line-number="10" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+ companyRegistration<span class="pl-k">:</span> {</span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-b1d55bc9e3293cd14eded1a399036611R11" data-line-number="11" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+     label<span class="pl-k">:</span> <span class="pl-en">_</span>(<span class="pl-s"><span class="pl-pds">"</span>Proof of payment for company registration<span class="pl-pds">"</span></span>),</span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-b1d55bc9e3293cd14eded1a399036611R12" data-line-number="12" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+     legend<span class="pl-k">:</span> <span class="pl-en">_</span>(<span class="pl-s"><span class="pl-pds">"</span>You need to pay it at the nearest bank to receive proper proof of payment<span class="pl-pds">"</span></span>)</span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-b1d55bc9e3293cd14eded1a399036611R13" data-line-number="13" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+ }</span>

  </td>
</tr>


    <tr>
    <td id="diff-b1d55bc9e3293cd14eded1a399036611L11" data-line-number="11" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-b1d55bc9e3293cd14eded1a399036611R14" data-line-number="14" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner"> });</span>

  </td>
</tr>



        </tbody></table>
      </div>
</div>


</div>
