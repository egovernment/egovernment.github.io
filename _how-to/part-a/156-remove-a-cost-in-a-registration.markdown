---
layout: recipe
permalink: /how-to/remove-a-cost-in-a-registration/
title: 'Remove a cost in a registration'
category: '1. Part A'
sub-category: 'Costs'
rate: '2'
number: '156'
introduction-text: 'This recipe explains how to remove, from a registration, a cost that does not apply anymore.'
introduction-img: '155.png'
prevUrl: 155
nextUrl: 157
done: ''
lang: en
ref: 156
---

Every cost belongs to a registration. So to remove it, you need to know registration for which it applies.

There are two possible situations:

* You want to completely remove a cost from a system.
* If the cost applies to more than one registration, there may be the situation in which you want to remove it just from one of them.

**To completely remove a cost from the system:**

1. For each registration that the cost applies to:
    1. Open file `model/business-process-<your-service>/registrations/<your-registration>.js`.
    2. Remove the cost from the results array returned from registrations costs getter.
2. Open file `model/business-process-<your-service>/payment-receipt-uploads.js`.
3. Remove payment receipt upload for the cost (uses the same model name as the cost).
4. Remove file `model/business-process-<your-service>/costs/<your-cost>.js`.
5. Open file `model/business-process-<your-service>/costs.js`.
5. Remove `model/business-process-<your-service>/costs/<your-cost>.js` require.

**To remove a cost just from one registration:**

1. Open file `model/business-process-<your-service>/registrations/<your-registration>.js`.
2. Remove the cost from the results array returned from registrations costs getter.

## Example

In the branch "[remove-a-cost-in-a-registration](https://github.com/egovernment/eregistrations-demo/tree/remove-a-cost-in-a-registration)" of eregistrations-demo :

Completely remove *"Company registration"* cost.

### Solution

<div id="files" class="diff-view " onclick="window.open('https://github.com/egovernment/eregistrations-demo/compare/remove-a-cost-in-a-registration...remove-a-cost-in-a-registration-solution#files')">


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

          <a href="/egovernment/eregistrations-demo/blob/b32daaff721a805a77f86f25e08274065f43de30/model/business-process-demo/costs/company-registration.js" class="btn btn-sm tooltipped tooltipped-nw" rel="nofollow" aria-label="View the whole file at version b32daaf ">View</a>

          <a class="btn-octicon tooltipped tooltipped-nw" href="https://mac.github.com" aria-label="Open this file in GitHub Desktop" data-ga-click="Repository, open with desktop, type:mac">
              <svg aria-hidden="true" class="octicon octicon-device-desktop" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M15 2H1c-.55 0-1 .45-1 1v9c0 .55.45 1 1 1h5.34c-.25.61-.86 1.39-2.34 2h8c-1.48-.61-2.09-1.39-2.34-2H15c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm0 9H1V3h14v8z"></path></svg>
          </a>

    </div>
    <div class="file-info">
        <span class="diffstat tooltipped tooltipped-e" aria-label="0 additions &amp; 21 deletions">21 <span class="block-diff-deleted"></span><span class="block-diff-deleted"></span><span class="block-diff-deleted"></span><span class="block-diff-deleted"></span><span class="block-diff-deleted"></span></span>

      <span class="user-select-contain" title="model/business-process-demo/costs/company-registration.js">
        model/business-process-demo/costs/company-registration.js
      </span>

    </div>
  </div>

      <div class="data highlight blob-wrapper">
        <table class="diff-table tab-size  " data-tab-size="8">

      <tbody><tr data-position="0">
    <td id="diff-dc845e55fef0dbbb6d5cd1ddf322aeecL0" class="blob-num blob-num-hunk non-expandable" data-line-number="..."></td>
    <td id="diff-dc845e55fef0dbbb6d5cd1ddf322aeecR-1" class="blob-num blob-num-hunk non-expandable" data-line-number="..."></td>
    <td class="blob-code blob-code-inner blob-code-hunk">@@ -1,21 +0,0 @@</td>
  </tr>

    <tr>
    <td id="diff-dc845e55fef0dbbb6d5cd1ddf322aeecL1" data-line-number="1" class="blob-num blob-num-deletion js-linkable-line-number"></td>

    <td class="blob-num blob-num-deletion empty-cell"></td>

  <td class="blob-code blob-code-deletion">

    <span class="blob-code-inner">-<span class="pl-s"><span class="pl-pds">'</span>use strict<span class="pl-pds">'</span></span>;</span>

  </td>
</tr>


    <tr>
    <td id="diff-dc845e55fef0dbbb6d5cd1ddf322aeecL2" data-line-number="2" class="blob-num blob-num-deletion js-linkable-line-number"></td>

    <td class="blob-num blob-num-deletion empty-cell"></td>

  <td class="blob-code blob-code-deletion">

    <span class="blob-code-inner">-</span>

  </td>
</tr>


    <tr>
    <td id="diff-dc845e55fef0dbbb6d5cd1ddf322aeecL3" data-line-number="3" class="blob-num blob-num-deletion js-linkable-line-number"></td>

    <td class="blob-num blob-num-deletion empty-cell"></td>

  <td class="blob-code blob-code-deletion">

    <span class="blob-code-inner">-<span class="pl-k">var</span> _ <span class="pl-k">=</span> <span class="pl-c1">require</span>(<span class="pl-s"><span class="pl-pds">'</span>../../../i18n<span class="pl-pds">'</span></span>)</span>

  </td>
</tr>


    <tr>
    <td id="diff-dc845e55fef0dbbb6d5cd1ddf322aeecL4" data-line-number="4" class="blob-num blob-num-deletion js-linkable-line-number"></td>

    <td class="blob-num blob-num-deletion empty-cell"></td>

  <td class="blob-code blob-code-deletion">

    <span class="blob-code-inner">-</span>

  </td>
</tr>


    <tr>
    <td id="diff-dc845e55fef0dbbb6d5cd1ddf322aeecL5" data-line-number="5" class="blob-num blob-num-deletion js-linkable-line-number"></td>

    <td class="blob-num blob-num-deletion empty-cell"></td>

  <td class="blob-code blob-code-deletion">

    <span class="blob-code-inner">-  , BusinessProcessDemo <span class="pl-k">=</span> <span class="pl-c1">require</span>(<span class="pl-s"><span class="pl-pds">'</span>../base<span class="pl-pds">'</span></span>);</span>

  </td>
</tr>


    <tr>
    <td id="diff-dc845e55fef0dbbb6d5cd1ddf322aeecL6" data-line-number="6" class="blob-num blob-num-deletion js-linkable-line-number"></td>

    <td class="blob-num blob-num-deletion empty-cell"></td>

  <td class="blob-code blob-code-deletion">

    <span class="blob-code-inner">-</span>

  </td>
</tr>


    <tr>
    <td id="diff-dc845e55fef0dbbb6d5cd1ddf322aeecL7" data-line-number="7" class="blob-num blob-num-deletion js-linkable-line-number"></td>

    <td class="blob-num blob-num-deletion empty-cell"></td>

  <td class="blob-code blob-code-deletion">

    <span class="blob-code-inner">-<span class="pl-c1">module</span>.<span class="pl-smi">exports</span> <span class="pl-k">=</span> BusinessProcessDemo;</span>

  </td>
</tr>


    <tr>
    <td id="diff-dc845e55fef0dbbb6d5cd1ddf322aeecL8" data-line-number="8" class="blob-num blob-num-deletion js-linkable-line-number"></td>

    <td class="blob-num blob-num-deletion empty-cell"></td>

  <td class="blob-code blob-code-deletion">

    <span class="blob-code-inner">-</span>

  </td>
</tr>


    <tr>
    <td id="diff-dc845e55fef0dbbb6d5cd1ddf322aeecL9" data-line-number="9" class="blob-num blob-num-deletion js-linkable-line-number"></td>

    <td class="blob-num blob-num-deletion empty-cell"></td>

  <td class="blob-code blob-code-deletion">

    <span class="blob-code-inner">-<span class="pl-smi">BusinessProcessDemo</span>.<span class="pl-c1">prototype</span>.<span class="pl-smi">costs</span>.<span class="pl-smi">map</span>.<span class="pl-en">define</span>(<span class="pl-s"><span class="pl-pds">'</span>companyRegistration<span class="pl-pds">'</span></span>, {</span>

  </td>
</tr>


    <tr>
    <td id="diff-dc845e55fef0dbbb6d5cd1ddf322aeecL10" data-line-number="10" class="blob-num blob-num-deletion js-linkable-line-number"></td>

    <td class="blob-num blob-num-deletion empty-cell"></td>

  <td class="blob-code blob-code-deletion">

    <span class="blob-code-inner">- nested<span class="pl-k">:</span> <span class="pl-c1">true</span></span>

  </td>
</tr>


    <tr>
    <td id="diff-dc845e55fef0dbbb6d5cd1ddf322aeecL11" data-line-number="11" class="blob-num blob-num-deletion js-linkable-line-number"></td>

    <td class="blob-num blob-num-deletion empty-cell"></td>

  <td class="blob-code blob-code-deletion">

    <span class="blob-code-inner">-});</span>

  </td>
</tr>


    <tr>
    <td id="diff-dc845e55fef0dbbb6d5cd1ddf322aeecL12" data-line-number="12" class="blob-num blob-num-deletion js-linkable-line-number"></td>

    <td class="blob-num blob-num-deletion empty-cell"></td>

  <td class="blob-code blob-code-deletion">

    <span class="blob-code-inner">-</span>

  </td>
</tr>


    <tr>
    <td id="diff-dc845e55fef0dbbb6d5cd1ddf322aeecL13" data-line-number="13" class="blob-num blob-num-deletion js-linkable-line-number"></td>

    <td class="blob-num blob-num-deletion empty-cell"></td>

  <td class="blob-code blob-code-deletion">

    <span class="blob-code-inner">-<span class="pl-smi">BusinessProcessDemo</span>.<span class="pl-c1">prototype</span>.<span class="pl-smi">costs</span>.<span class="pl-smi">map</span>.<span class="pl-smi">companyRegistration</span>.<span class="pl-en">setProperties</span>({</span>

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
    <td id="diff-dc845e55fef0dbbb6d5cd1ddf322aeecL15" data-line-number="15" class="blob-num blob-num-deletion js-linkable-line-number"></td>

    <td class="blob-num blob-num-deletion empty-cell"></td>

  <td class="blob-code blob-code-deletion">

    <span class="blob-code-inner">- <span class="pl-en">amount</span><span class="pl-k">:</span> <span class="pl-k">function</span> (<span class="pl-smi">_observe</span>) {</span>

  </td>
</tr>


    <tr>
    <td id="diff-dc845e55fef0dbbb6d5cd1ddf322aeecL16" data-line-number="16" class="blob-num blob-num-deletion js-linkable-line-number"></td>

    <td class="blob-num blob-num-deletion empty-cell"></td>

  <td class="blob-code blob-code-deletion">

    <span class="blob-code-inner">-     <span class="pl-k">var</span> businessProcess <span class="pl-k">=</span> <span class="pl-v">this</span>.<span class="pl-smi">master</span></span>

  </td>
</tr>


    <tr>
    <td id="diff-dc845e55fef0dbbb6d5cd1ddf322aeecL17" data-line-number="17" class="blob-num blob-num-deletion js-linkable-line-number"></td>

    <td class="blob-num blob-num-deletion empty-cell"></td>

  <td class="blob-code blob-code-deletion">

    <span class="blob-code-inner">-       , assets  <span class="pl-k">=</span> <span class="pl-smi">businessProcess</span>.<span class="pl-smi">_get</span> <span class="pl-k">?</span> <span class="pl-en">_observe</span>(<span class="pl-smi">businessProcess</span>.<span class="pl-smi">_assets</span>) <span class="pl-k">:</span> <span class="pl-smi">businessProcess</span>.<span class="pl-smi">assets</span>;</span>

  </td>
</tr>


    <tr>
    <td id="diff-dc845e55fef0dbbb6d5cd1ddf322aeecL18" data-line-number="18" class="blob-num blob-num-deletion js-linkable-line-number"></td>

    <td class="blob-num blob-num-deletion empty-cell"></td>

  <td class="blob-code blob-code-deletion">

    <span class="blob-code-inner">-</span>

  </td>
</tr>


    <tr>
    <td id="diff-dc845e55fef0dbbb6d5cd1ddf322aeecL19" data-line-number="19" class="blob-num blob-num-deletion js-linkable-line-number"></td>

    <td class="blob-num blob-num-deletion empty-cell"></td>

  <td class="blob-code blob-code-deletion">

    <span class="blob-code-inner">-     <span class="pl-k">return</span> <span class="pl-c1">Math</span>.<span class="pl-c1">max</span>(<span class="pl-c1">Math</span>.<span class="pl-c1">ceil</span>((assets <span class="pl-k">||</span> <span class="pl-c1">0</span>) <span class="pl-k">/</span> <span class="pl-c1">1000</span>) <span class="pl-k">*</span> <span class="pl-c1">10</span>, <span class="pl-c1">10</span>);</span>

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
    <td id="diff-dc845e55fef0dbbb6d5cd1ddf322aeecL21" data-line-number="21" class="blob-num blob-num-deletion js-linkable-line-number"></td>

    <td class="blob-num blob-num-deletion empty-cell"></td>

  <td class="blob-code blob-code-deletion">

    <span class="blob-code-inner">-});</span>

  </td>
</tr>



        </tbody></table>
      </div>
</div>


<a name="diff-927242520b0b5e56c6e39941dab5ce06"></a>
<div id="diff-1" class="file js-details-container




             show-inline-notes
           ">
  <div class="file-header" data-path="model/business-process-demo/costs/index.js">
    <div class="file-actions">
        <span class="show-file-notes">
          <label>
            <input checked="checked" class="js-toggle-file-notes" type="checkbox">
            Show notes
          </label>
        </span>

          <a href="/egovernment/eregistrations-demo/blob/d16e9f124a751438937ef62ff48308d26aff27f1/model/business-process-demo/costs/index.js" class="btn btn-sm tooltipped tooltipped-nw" rel="nofollow" aria-label="View the whole file at version d16e9f1 ">View</a>

          <a class="btn-octicon tooltipped tooltipped-nw" href="https://mac.github.com" aria-label="Open this file in GitHub Desktop" data-ga-click="Repository, open with desktop, type:mac">
              <svg aria-hidden="true" class="octicon octicon-device-desktop" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M15 2H1c-.55 0-1 .45-1 1v9c0 .55.45 1 1 1h5.34c-.25.61-.86 1.39-2.34 2h8c-1.48-.61-2.09-1.39-2.34-2H15c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm0 9H1V3h14v8z"></path></svg>
          </a>

    </div>
    <div class="file-info">
        <span class="diffstat tooltipped tooltipped-e" aria-label="0 additions &amp; 1 deletion">1 <span class="block-diff-deleted"></span><span class="block-diff-neutral"></span><span class="block-diff-neutral"></span><span class="block-diff-neutral"></span><span class="block-diff-neutral"></span></span>

      <span class="user-select-contain" title="model/business-process-demo/costs/index.js">
        model/business-process-demo/costs/index.js
      </span>

    </div>
  </div>

      <div class="data highlight blob-wrapper">
        <table class="diff-table tab-size  " data-tab-size="8">

      <tbody><tr class="js-expandable-line" data-position="0">
    <td class="blob-num blob-num-expandable" colspan="2">
      <a href="#diff-927242520b0b5e56c6e39941dab5ce06" class="diff-expander js-expand" title="Expand" aria-label="Expand" data-url="/egovernment/eregistrations-demo/blob_excerpt/d0a8a917a13aa6e7506fcede63bf259319945b7d?diff=unified&amp;in_wiki_context=&amp;left_hunk_size=5&amp;mode=100644&amp;next_line_num_left=2&amp;next_line_num_right=2&amp;path=model%2Fbusiness-process-demo%2Fcosts%2Findex.js&amp;prev_line_num_left=&amp;prev_line_num_right=&amp;right_hunk_size=4" data-left-range="1-1" data-right-range="1-1">
        <svg aria-hidden="true" class="octicon octicon-unfold" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path d="M11.5 7.5L14 10c0 .55-.45 1-1 1H9v-1h3.5l-2-2h-7l-2 2H5v1H1c-.55 0-1-.45-1-1l2.5-2.5L0 5c0-.55.45-1 1-1h4v1H1.5l2 2h7l2-2H9V4h4c.55 0 1 .45 1 1l-2.5 2.5zM6 6h2V3h2L7 0 4 3h2v3zm2 3H6v3H4l3 3 3-3H8V9z"></path></svg>
      </a>
    </td>
    <td class="blob-code blob-code-inner blob-code-hunk">@@ -2,5 +2,4 @@</td>
  </tr>

    <tr>
    <td id="diff-927242520b0b5e56c6e39941dab5ce06L2" data-line-number="2" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-927242520b0b5e56c6e39941dab5ce06R2" data-line-number="2" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner"> </span>

  </td>
</tr>


    <tr>
    <td id="diff-927242520b0b5e56c6e39941dab5ce06L3" data-line-number="3" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-927242520b0b5e56c6e39941dab5ce06R3" data-line-number="3" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner"> <span class="pl-c1">module</span>.<span class="pl-smi">exports</span> <span class="pl-k">=</span> <span class="pl-c1">require</span>(<span class="pl-s"><span class="pl-pds">'</span>./base<span class="pl-pds">'</span></span>);</span>

  </td>
</tr>


    <tr>
    <td id="diff-927242520b0b5e56c6e39941dab5ce06L4" data-line-number="4" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-927242520b0b5e56c6e39941dab5ce06R4" data-line-number="4" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner"> </span>

  </td>
</tr>


    <tr>
    <td id="diff-927242520b0b5e56c6e39941dab5ce06L5" data-line-number="5" class="blob-num blob-num-deletion js-linkable-line-number"></td>

    <td class="blob-num blob-num-deletion empty-cell"></td>

  <td class="blob-code blob-code-deletion">

    <span class="blob-code-inner">-<span class="pl-c1">require</span>(<span class="pl-s"><span class="pl-pds">'</span>./company-registration<span class="pl-pds">'</span></span>);</span>

  </td>
</tr>


    <tr>
    <td id="diff-927242520b0b5e56c6e39941dab5ce06L6" data-line-number="6" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-927242520b0b5e56c6e39941dab5ce06R5" data-line-number="5" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner"> <span class="pl-c1">require</span>(<span class="pl-s"><span class="pl-pds">'</span>./certificate-of-incentives<span class="pl-pds">'</span></span>);</span>

  </td>
</tr>



        </tbody></table>
      </div>
</div>


<a name="diff-b1d55bc9e3293cd14eded1a399036611"></a>
<div id="diff-2" class="file js-details-container




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

          <a href="/egovernment/eregistrations-demo/blob/d16e9f124a751438937ef62ff48308d26aff27f1/model/business-process-demo/payment-receipt-uploads.js" class="btn btn-sm tooltipped tooltipped-nw" rel="nofollow" aria-label="View the whole file at version d16e9f1 ">View</a>

          <a class="btn-octicon tooltipped tooltipped-nw" href="https://mac.github.com" aria-label="Open this file in GitHub Desktop" data-ga-click="Repository, open with desktop, type:mac">
              <svg aria-hidden="true" class="octicon octicon-device-desktop" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M15 2H1c-.55 0-1 .45-1 1v9c0 .55.45 1 1 1h5.34c-.25.61-.86 1.39-2.34 2h8c-1.48-.61-2.09-1.39-2.34-2H15c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm0 9H1V3h14v8z"></path></svg>
          </a>

    </div>
    <div class="file-info">
        <span class="diffstat tooltipped tooltipped-e" aria-label="2 additions &amp; 5 deletions">7 <span class="block-diff-added"></span><span class="block-diff-deleted"></span><span class="block-diff-deleted"></span><span class="block-diff-deleted"></span><span class="block-diff-neutral"></span></span>

      <span class="user-select-contain" title="model/business-process-demo/payment-receipt-uploads.js">
        model/business-process-demo/payment-receipt-uploads.js
      </span>

    </div>
  </div>

      <div class="data highlight blob-wrapper">
        <table class="diff-table tab-size  " data-tab-size="8">

      <tbody><tr data-position="0">
    <td id="diff-b1d55bc9e3293cd14eded1a399036611L0" class="blob-num blob-num-hunk non-expandable" data-line-number="..."></td>
    <td id="diff-b1d55bc9e3293cd14eded1a399036611R0" class="blob-num blob-num-hunk non-expandable" data-line-number="..."></td>
    <td class="blob-code blob-code-inner blob-code-hunk">@@ -1,11 +1,8 @@</td>
  </tr>

    <tr>
    <td id="diff-b1d55bc9e3293cd14eded1a399036611L1" data-line-number="1" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-b1d55bc9e3293cd14eded1a399036611R1" data-line-number="1" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner"> <span class="pl-s"><span class="pl-pds">'</span>use strict<span class="pl-pds">'</span></span>;</span>

  </td>
</tr>


    <tr>
    <td id="diff-b1d55bc9e3293cd14eded1a399036611L2" data-line-number="2" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-b1d55bc9e3293cd14eded1a399036611R2" data-line-number="2" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner"> </span>

  </td>
</tr>


    <tr>
    <td id="diff-b1d55bc9e3293cd14eded1a399036611L3" data-line-number="3" class="blob-num blob-num-deletion js-linkable-line-number"></td>

    <td class="blob-num blob-num-deletion empty-cell"></td>

  <td class="blob-code blob-code-deletion">

    <span class="blob-code-inner">-<span class="pl-k">var</span> _                   <span class="pl-k">=</span> <span class="pl-c1">require</span>(<span class="pl-s"><span class="pl-pds">'</span>../../i18n<span class="pl-pds">'</span></span>)</span>

  </td>
</tr>


    <tr>
    <td id="diff-b1d55bc9e3293cd14eded1a399036611L4" data-line-number="4" class="blob-num blob-num-deletion js-linkable-line-number"></td>

    <td class="blob-num blob-num-deletion empty-cell"></td>

  <td class="blob-code blob-code-deletion">

    <span class="blob-code-inner">-  , BusinessProcessDemo <span class="pl-k">=</span> <span class="pl-c1">require</span>(<span class="pl-s"><span class="pl-pds">'</span>./costs<span class="pl-pds">'</span></span>);</span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-b1d55bc9e3293cd14eded1a399036611R3" data-line-number="3" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+<span class="pl-k">var</span> BusinessProcessDemo <span class="pl-k">=</span> <span class="pl-c1">require</span>(<span class="pl-s"><span class="pl-pds">'</span>./costs<span class="pl-pds">'</span></span>);</span>

  </td>
</tr>


    <tr>
    <td id="diff-b1d55bc9e3293cd14eded1a399036611L5" data-line-number="5" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-b1d55bc9e3293cd14eded1a399036611R4" data-line-number="4" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner"> </span>

  </td>
</tr>


    <tr>
    <td id="diff-b1d55bc9e3293cd14eded1a399036611L6" data-line-number="6" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-b1d55bc9e3293cd14eded1a399036611R5" data-line-number="5" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner"> <span class="pl-k">var</span> definePaymentReceiptUploads <span class="pl-k">=</span></span>

  </td>
</tr>


    <tr>
    <td id="diff-b1d55bc9e3293cd14eded1a399036611L7" data-line-number="7" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-b1d55bc9e3293cd14eded1a399036611R6" data-line-number="6" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner">  <span class="pl-c1">require</span>(<span class="pl-s"><span class="pl-pds">'</span>eregistrations/model/business-process-new/utils/define-payment-receipt-uploads<span class="pl-pds">'</span></span>);</span>

  </td>
</tr>


    <tr>
    <td id="diff-b1d55bc9e3293cd14eded1a399036611L8" data-line-number="8" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-b1d55bc9e3293cd14eded1a399036611R7" data-line-number="7" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner"> </span>

  </td>
</tr>


    <tr>
    <td id="diff-b1d55bc9e3293cd14eded1a399036611L9" data-line-number="9" class="blob-num blob-num-deletion js-linkable-line-number"></td>

    <td class="blob-num blob-num-deletion empty-cell"></td>

  <td class="blob-code blob-code-deletion">

    <span class="blob-code-inner">-<span class="pl-c1">module</span>.<span class="pl-smi">exports</span> <span class="pl-k">=</span> <span class="pl-en">definePaymentReceiptUploads</span>(BusinessProcessDemo, {</span>

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
    <td id="diff-b1d55bc9e3293cd14eded1a399036611L11" data-line-number="11" class="blob-num blob-num-deletion js-linkable-line-number"></td>

    <td class="blob-num blob-num-deletion empty-cell"></td>

  <td class="blob-code blob-code-deletion">

    <span class="blob-code-inner">-});</span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-b1d55bc9e3293cd14eded1a399036611R8" data-line-number="8" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+<span class="pl-c1">module</span>.<span class="pl-smi">exports</span> <span class="pl-k">=</span> <span class="pl-en">definePaymentReceiptUploads</span>(BusinessProcessDemo, {});</span>

  </td>
</tr>



        </tbody></table>
      </div>
</div>


<a name="diff-1f850bcf53b7031d6fe5fc7942d460b9"></a>
<div id="diff-3" class="file js-details-container




             show-inline-notes
           ">
  <div class="file-header" data-path="model/business-process-demo/registrations/company-registration.js">
    <div class="file-actions">
        <span class="show-file-notes">
          <label>
            <input checked="checked" class="js-toggle-file-notes" type="checkbox">
            Show notes
          </label>
        </span>

          <a href="/egovernment/eregistrations-demo/blob/d16e9f124a751438937ef62ff48308d26aff27f1/model/business-process-demo/registrations/company-registration.js" class="btn btn-sm tooltipped tooltipped-nw" rel="nofollow" aria-label="View the whole file at version d16e9f1 ">View</a>

          <a class="btn-octicon tooltipped tooltipped-nw" href="https://mac.github.com" aria-label="Open this file in GitHub Desktop" data-ga-click="Repository, open with desktop, type:mac">
              <svg aria-hidden="true" class="octicon octicon-device-desktop" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M15 2H1c-.55 0-1 .45-1 1v9c0 .55.45 1 1 1h5.34c-.25.61-.86 1.39-2.34 2h8c-1.48-.61-2.09-1.39-2.34-2H15c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm0 9H1V3h14v8z"></path></svg>
          </a>

    </div>
    <div class="file-info">
        <span class="diffstat tooltipped tooltipped-e" aria-label="0 additions &amp; 6 deletions">6 <span class="block-diff-deleted"></span><span class="block-diff-deleted"></span><span class="block-diff-deleted"></span><span class="block-diff-deleted"></span><span class="block-diff-deleted"></span></span>

      <span class="user-select-contain" title="model/business-process-demo/registrations/company-registration.js">
        model/business-process-demo/registrations/company-registration.js
      </span>

    </div>
  </div>

      <div class="data highlight blob-wrapper">
        <table class="diff-table tab-size  " data-tab-size="8">

      <tbody><tr class="js-expandable-line" data-position="0">
    <td class="blob-num blob-num-expandable" colspan="2">
      <a href="#diff-1f850bcf53b7031d6fe5fc7942d460b9" class="diff-expander js-expand" title="Expand" aria-label="Expand" data-url="/egovernment/eregistrations-demo/blob_excerpt/8f2d66f7f5537728f4245d4ba2467d0183168940?diff=unified&amp;in_wiki_context=&amp;left_hunk_size=12&amp;mode=100644&amp;next_line_num_left=8&amp;next_line_num_right=8&amp;path=model%2Fbusiness-process-demo%2Fregistrations%2Fcompany-registration.js&amp;prev_line_num_left=&amp;prev_line_num_right=&amp;right_hunk_size=6" data-left-range="1-7" data-right-range="1-7">
        <svg aria-hidden="true" class="octicon octicon-unfold" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path d="M11.5 7.5L14 10c0 .55-.45 1-1 1H9v-1h3.5l-2-2h-7l-2 2H5v1H1c-.55 0-1-.45-1-1l2.5-2.5L0 5c0-.55.45-1 1-1h4v1H1.5l2 2h7l2-2H9V4h4c.55 0 1 .45 1 1l-2.5 2.5zM6 6h2V3h2L7 0 4 3h2v3zm2 3H6v3H4l3 3 3-3H8V9z"></path></svg>
      </a>
    </td>
    <td class="blob-code blob-code-inner blob-code-hunk">@@ -8,12 +8,6 @@ BusinessProcessDemo.prototype.registrations.map.defineProperties({</td>
  </tr>

    <tr>
    <td id="diff-1f850bcf53b7031d6fe5fc7942d460b9L8" data-line-number="8" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-1f850bcf53b7031d6fe5fc7942d460b9R8" data-line-number="8" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner"> </span>

  </td>
</tr>


    <tr>
    <td id="diff-1f850bcf53b7031d6fe5fc7942d460b9L9" data-line-number="9" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-1f850bcf53b7031d6fe5fc7942d460b9R9" data-line-number="9" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner"> <span class="pl-smi">BusinessProcessDemo</span>.<span class="pl-c1">prototype</span>.<span class="pl-smi">registrations</span>.<span class="pl-smi">map</span>.<span class="pl-smi">companyRegistration</span>.<span class="pl-en">setProperties</span>({</span>

  </td>
</tr>


    <tr>
    <td id="diff-1f850bcf53b7031d6fe5fc7942d460b9L10" data-line-number="10" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-1f850bcf53b7031d6fe5fc7942d460b9R10" data-line-number="10" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner">  <span class="pl-c1">Document</span><span class="pl-k">:</span> <span class="pl-c1">require</span>(<span class="pl-s"><span class="pl-pds">'</span>../../documents/company-registration<span class="pl-pds">'</span></span>),</span>

  </td>
</tr>


    <tr>
    <td id="diff-1f850bcf53b7031d6fe5fc7942d460b9L11" data-line-number="11" class="blob-num blob-num-deletion js-linkable-line-number"></td>

    <td class="blob-num blob-num-deletion empty-cell"></td>

  <td class="blob-code blob-code-deletion">

    <span class="blob-code-inner">- <span class="pl-en">costs</span><span class="pl-k">:</span> <span class="pl-k">function</span> (<span class="pl-smi">_observe</span>) {</span>

  </td>
</tr>


    <tr>
    <td id="diff-1f850bcf53b7031d6fe5fc7942d460b9L12" data-line-number="12" class="blob-num blob-num-deletion js-linkable-line-number"></td>

    <td class="blob-num blob-num-deletion empty-cell"></td>

  <td class="blob-code blob-code-deletion">

    <span class="blob-code-inner">-     <span class="pl-k">var</span> workers  <span class="pl-k">=</span> <span class="pl-v">this</span>.<span class="pl-smi">master</span>.<span class="pl-smi">_get</span></span>

  </td>
</tr>


    <tr>
    <td id="diff-1f850bcf53b7031d6fe5fc7942d460b9L13" data-line-number="13" class="blob-num blob-num-deletion js-linkable-line-number"></td>

    <td class="blob-num blob-num-deletion empty-cell"></td>

  <td class="blob-code blob-code-deletion">

    <span class="blob-code-inner">-         <span class="pl-k">?</span> <span class="pl-en">_observe</span>(<span class="pl-v">this</span>.<span class="pl-smi">master</span>.<span class="pl-smi">_workers</span>) <span class="pl-k">:</span> <span class="pl-v">this</span>.<span class="pl-smi">master</span>.<span class="pl-smi">workers</span>;</span>

  </td>
</tr>


    <tr>
    <td id="diff-1f850bcf53b7031d6fe5fc7942d460b9L14" data-line-number="14" class="blob-num blob-num-deletion js-linkable-line-number"></td>

    <td class="blob-num blob-num-deletion empty-cell"></td>

  <td class="blob-code blob-code-deletion">

    <span class="blob-code-inner">-     <span class="pl-k">if</span> (<span class="pl-k">!</span>workers) <span class="pl-k">return</span>;</span>

  </td>
</tr>


    <tr>
    <td id="diff-1f850bcf53b7031d6fe5fc7942d460b9L15" data-line-number="15" class="blob-num blob-num-deletion js-linkable-line-number"></td>

    <td class="blob-num blob-num-deletion empty-cell"></td>

  <td class="blob-code blob-code-deletion">

    <span class="blob-code-inner">-     <span class="pl-k">return</span> [<span class="pl-v">this</span>.<span class="pl-smi">master</span>.<span class="pl-smi">costs</span>.<span class="pl-smi">map</span>.<span class="pl-smi">companyRegistration</span>];</span>

  </td>
</tr>


    <tr>
    <td id="diff-1f850bcf53b7031d6fe5fc7942d460b9L16" data-line-number="16" class="blob-num blob-num-deletion js-linkable-line-number"></td>

    <td class="blob-num blob-num-deletion empty-cell"></td>

  <td class="blob-code blob-code-deletion">

    <span class="blob-code-inner">- },</span>

  </td>
</tr>


    <tr>
    <td id="diff-1f850bcf53b7031d6fe5fc7942d460b9L17" data-line-number="17" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-1f850bcf53b7031d6fe5fc7942d460b9R11" data-line-number="11" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner">  <span class="pl-en">requirements</span><span class="pl-k">:</span> <span class="pl-k">function</span> () {</span>

  </td>
</tr>


    <tr>
    <td id="diff-1f850bcf53b7031d6fe5fc7942d460b9L18" data-line-number="18" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-1f850bcf53b7031d6fe5fc7942d460b9R12" data-line-number="12" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner">      <span class="pl-k">var</span> requirementsMap <span class="pl-k">=</span> <span class="pl-v">this</span>.<span class="pl-smi">master</span>.<span class="pl-smi">requirements</span>.<span class="pl-smi">map</span>;</span>

  </td>
</tr>


    <tr>
    <td id="diff-1f850bcf53b7031d6fe5fc7942d460b9L19" data-line-number="19" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-1f850bcf53b7031d6fe5fc7942d460b9R13" data-line-number="13" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner">      <span class="pl-k">return</span> [<span class="pl-smi">requirementsMap</span>.<span class="pl-smi">inventory</span>, <span class="pl-smi">requirementsMap</span>.<span class="pl-smi">passport</span>];</span>

  </td>
</tr>


  <tr class="js-expandable-line">
   <td class="blob-num blob-num-expandable" colspan="2">
     <a href="#diff-1f850bcf53b7031d6fe5fc7942d460b9" class="diff-expander js-expand" title="Expand" aria-label="Expand" data-url="/egovernment/eregistrations-demo/blob_excerpt/8f2d66f7f5537728f4245d4ba2467d0183168940?diff=unified&amp;in_wiki_context=&amp;mode=100644&amp;path=model%2Fbusiness-process-demo%2Fregistrations%2Fcompany-registration.js&amp;prev_line_num_left=19&amp;prev_line_num_right=13" data-left-range="20-15" data-right-range="14-15">
       <svg aria-hidden="true" class="octicon octicon-unfold" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path d="M11.5 7.5L14 10c0 .55-.45 1-1 1H9v-1h3.5l-2-2h-7l-2 2H5v1H1c-.55 0-1-.45-1-1l2.5-2.5L0 5c0-.55.45-1 1-1h4v1H1.5l2 2h7l2-2H9V4h4c.55 0 1 .45 1 1l-2.5 2.5zM6 6h2V3h2L7 0 4 3h2v3zm2 3H6v3H4l3 3 3-3H8V9z"></path></svg>
     </a>
   </td>
   <td class="blob-code blob-code-expandable"></td>
  </tr>

        </tbody></table>
      </div>
</div>


</div>
