---
layout: recipe
permalink: /how-to/configure-one-payment-receipt-for-two-costs/
title: 'Configure one payment receipt for many costs'
category: '1. Part A'
sub-category: 'Costs'
rate: '2'
number: '157'
introduction-text: ''
introduction-img: '157.png'
prevUrl: 156
nextUrl: 161
done: 'yes'
lang: en
ref: 157
---

Every payment receipt upload is associated with a service, so to change associated costs, we have to know the service to which it applies.

1. Open file `model/business-process-<your-service>/payment-receipt-uploads.js`.
2. Locate the array passed to `eregistrations/model/business-process-new/utils/define-payment-receipt-uploads` helper function.
3. Locate the payments receipt upload definition hash and add a `costs` property to it:

```javascript
costName: {
    costs: [
        // This is the default one that was previously added automatically
        BusinessProcessYourService.prototype.costs.map.costName,
        // This is the new one
        BusinessProcessYourService.prototype.costs.map.otherCostName
    ],
    label: _("…")
}
```

**Note**: Assigning a `costs` property to payment receipt upload definition hash will override the deault link of cost of the same name. You should include both costs in the array.

## Example

In the branch "[configure-one-payment-receipt-for-two-costs](https://github.com/egovernment/eregistrations-demo/tree/configure-one-payment-receipt-for-two-costs)" of eregistrations-demo:

Configure `companyRegistration` payment receipt upload to handle both `companyRegistration` as well as `certificateOfIncentives` cost.

### Solution

<div id="files" class="diff-view " onclick="window.open('https://github.com/egovernment/eregistrations-demo/compare/configure-one-payment-receipt-for-two-costs...configure-one-payment-receipt-for-two-costs-solution#files')">


<a name="diff-b1d55bc9e3293cd14eded1a399036611"></a>
<div id="diff-0" class="file js-details-container




             show-inline-notes
           ">
  <div class="file-header" data-path="model/business-process-demo/payment-receipt-uploads.js">
    <div class="file-actions">
        <span class="show-file-notes">
          <label>
            <input checked="checked" class="js-toggle-file-notes" type="checkbox">
            Show comments
          </label>
        </span>

          <a href="/egovernment/eregistrations-demo/blob/0f82fc0cb080917618dba97f486b1fdd397c540d/model/business-process-demo/payment-receipt-uploads.js" class="btn btn-sm tooltipped tooltipped-nw" rel="nofollow" aria-label="View the whole file at version 0f82fc0 ">View</a>


    </div>
    <div class="file-info">
        <span class="diffstat tooltipped tooltipped-e" aria-label="7 additions &amp; 1 deletion">8 <span class="block-diff-added"></span><span class="block-diff-added"></span><span class="block-diff-added"></span><span class="block-diff-added"></span><span class="block-diff-neutral"></span></span>

      <span class="user-select-contain" title="model/business-process-demo/payment-receipt-uploads.js">
        model/business-process-demo/payment-receipt-uploads.js
      </span>

    </div>
  </div>

      <div class="data highlight blob-wrapper">
        <table class="diff-table tab-size  " data-tab-size="8">

      <tbody><tr class="js-expandable-line" data-position="0">
    <td class="blob-num blob-num-expandable" colspan="2">
      <a href="#diff-b1d55bc9e3293cd14eded1a399036611" class="diff-expander js-expand" title="Expand" aria-label="Expand" data-url="/egovernment/eregistrations-demo/blob_excerpt/16969360c79b278136f002e5deb69ed3d383be96?diff=unified&amp;in_wiki_context=&amp;left_hunk_size=5&amp;mode=100644&amp;next_line_num_left=7&amp;next_line_num_right=7&amp;path=model%2Fbusiness-process-demo%2Fpayment-receipt-uploads.js&amp;prev_line_num_left=&amp;prev_line_num_right=&amp;right_hunk_size=11" data-left-range="1-6" data-right-range="1-6">
        <svg aria-hidden="true" class="octicon octicon-unfold" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path d="M11.5 7.5L14 10c0 .55-.45 1-1 1H9v-1h3.5l-2-2h-7l-2 2H5v1H1c-.55 0-1-.45-1-1l2.5-2.5L0 5c0-.55.45-1 1-1h4v1H1.5l2 2h7l2-2H9V4h4c.55 0 1 .45 1 1l-2.5 2.5zM6 6h2V3h2L7 0 4 3h2v3zm2 3H6v3H4l3 3 3-3H8V9z"></path></svg>
      </a>
    </td>
    <td class="blob-code blob-code-inner blob-code-hunk">@@ -7,5 +7,11 @@ var definePaymentReceiptUploads =</td>
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

    <span class="blob-code-inner">+     costs<span class="pl-k">:</span> [</span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-b1d55bc9e3293cd14eded1a399036611R12" data-line-number="12" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+         <span class="pl-smi">BusinessProcessDemo</span>.<span class="pl-c1">prototype</span>.<span class="pl-smi">costs</span>.<span class="pl-smi">map</span>.<span class="pl-smi">companyRegistration</span>,</span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-b1d55bc9e3293cd14eded1a399036611R13" data-line-number="13" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+         <span class="pl-smi">BusinessProcessDemo</span>.<span class="pl-c1">prototype</span>.<span class="pl-smi">costs</span>.<span class="pl-smi">map</span>.<span class="pl-smi">certificateOfIncentives</span></span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-b1d55bc9e3293cd14eded1a399036611R14" data-line-number="14" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+     ],</span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-b1d55bc9e3293cd14eded1a399036611R15" data-line-number="15" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+     label<span class="pl-k">:</span> <span class="pl-en">_</span>(<span class="pl-s"><span class="pl-pds">"</span>Proof of payment for company registration<span class="pl-pds">"</span></span>)</span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-b1d55bc9e3293cd14eded1a399036611R16" data-line-number="16" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+ }</span>

  </td>
</tr>


    <tr>
    <td id="diff-b1d55bc9e3293cd14eded1a399036611L11" data-line-number="11" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-b1d55bc9e3293cd14eded1a399036611R17" data-line-number="17" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner"> });</span>

  </td>
</tr>



        </tbody></table>
      </div>
</div>


</div>
