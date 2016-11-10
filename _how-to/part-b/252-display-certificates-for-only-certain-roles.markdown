---
layout: recipe
permalink: /how-to/display-certificates-for-only-certain-roles/
title: 'Display specified subset of certificates for certain role'
category: '2. Part B'
sub-category: 'Other'
rate: '3'
number: '252'
introduction-text: ''
introduction-img: '252.png'
prevUrl: 251
nextUrl: 301
done: ''
lang: en
ref: 252
---

Some processing steps in the systems deal with only a specific subset of user submitted data. In order to remove the clutter from their user interface, it's possible to filter the documents and payment receipts list displayed for each business process.

In order to filter a given document list:

1. Open `model/business-process-<service-name>/processing-steps/<step-name>.js` file.
2. Depending on the required change, override either `requirementUploads.applicable` or `paymentReceiptUploads.applicable` collection like so:

```javascript
BusinessProcessServiceName.prototype.processingSteps.map.stepName.requirementUploads.set('applicable', function (_observe) {
    …
});
```

## Example

In the branch "[display-certificates-for-only-certain-roles](https://github.com/egovernment/eregistrations-demo/tree/display-certificates-for-only-certain-roles)" of eregistrations-demo :

Make the *"Processing"* processing step display only *"Business plan"* and *"Company registration"* requirement uploads (if applicable for the given business process).

### Solution

<div id="files" class="diff-view " onclick="window.open('https://github.com/egovernment/eregistrations-demo/compare/display-certificates-for-only-certain-roles...display-certificates-for-only-certain-roles-solution#files')">


<a name="diff-ef45f3178e50cb2cc23bc2e4168e3b7b"></a>
<div id="diff-0" class="file js-file js-details-container




             show-inline-notes
           ">
  <div class="file-header" data-path="model/business-process-demo/processing-steps/processing.js" data-short-path="ef45f31" data-anchor="diff-ef45f3178e50cb2cc23bc2e4168e3b7b">
    <div class="file-actions">
        <span class="show-file-notes">
          <label>
            <input checked="checked" class="js-toggle-file-notes" type="checkbox">
            Show comments
          </label>
        </span>

          <a href="/egovernment/eregistrations-demo/blob/7397176cbaf9938becd802d9188034b3f2e2f954/model/business-process-demo/processing-steps/processing.js" class="btn btn-sm tooltipped tooltipped-nw" rel="nofollow" aria-label="View the whole file at version 7397176 ">View</a>


    </div>
    <div class="file-info">
        <span class="diffstat tooltipped tooltipped-e" aria-label="23 additions &amp; 5 deletions">28 <span class="block-diff-added"></span><span class="block-diff-added"></span><span class="block-diff-added"></span><span class="block-diff-added"></span><span class="block-diff-neutral"></span></span>

      <a href="#diff-ef45f3178e50cb2cc23bc2e4168e3b7b" class="link-gray-dark" title="model/business-process-demo/processing-steps/processing.js">
        model/business-process-demo/processing-steps/processing.js
      </a>


    </div>
  </div>

      <div class="data highlight blob-wrapper">
        <table class="diff-table tab-size  " data-tab-size="8">

      <tbody><tr data-position="0">
    <td id="diff-ef45f3178e50cb2cc23bc2e4168e3b7bL0" class="blob-num blob-num-hunk non-expandable" data-line-number="..."></td>
    <td id="diff-ef45f3178e50cb2cc23bc2e4168e3b7bR0" class="blob-num blob-num-hunk non-expandable" data-line-number="..."></td>
    <td class="blob-code blob-code-inner blob-code-hunk">@@ -1,15 +1,18 @@</td>
  </tr>

    <tr>
    <td id="diff-ef45f3178e50cb2cc23bc2e4168e3b7bL1" data-line-number="1" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-ef45f3178e50cb2cc23bc2e4168e3b7bR1" data-line-number="1" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner"> <span class="pl-s"><span class="pl-pds">'</span>use strict<span class="pl-pds">'</span></span>;</span>

  </td>
</tr>


    <tr>
    <td id="diff-ef45f3178e50cb2cc23bc2e4168e3b7bL2" data-line-number="2" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-ef45f3178e50cb2cc23bc2e4168e3b7bR2" data-line-number="2" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner"> </span>

  </td>
</tr>


    <tr>
    <td id="diff-ef45f3178e50cb2cc23bc2e4168e3b7bL3" data-line-number="3" class="blob-num blob-num-deletion js-linkable-line-number"></td>

    <td class="blob-num blob-num-deletion empty-cell"></td>

  <td class="blob-code blob-code-deletion">

    <span class="blob-code-inner">-<span class="pl-k">var</span> db                     <span class="pl-k">=</span> <span class="pl-c1">require</span>(<span class="pl-s"><span class="pl-pds">'</span>../../../db<span class="pl-pds">'</span></span>)</span>

  </td>
</tr>


    <tr>
    <td id="diff-ef45f3178e50cb2cc23bc2e4168e3b7bL4" data-line-number="4" class="blob-num blob-num-deletion js-linkable-line-number"></td>

    <td class="blob-num blob-num-deletion empty-cell"></td>

  <td class="blob-code blob-code-deletion">

    <span class="blob-code-inner">-  , _                      <span class="pl-k">=</span> <span class="pl-c1">require</span>(<span class="pl-s"><span class="pl-pds">'</span>../../../i18n<span class="pl-pds">'</span></span>)</span>

  </td>
</tr>


    <tr>
    <td id="diff-ef45f3178e50cb2cc23bc2e4168e3b7bL5" data-line-number="5" class="blob-num blob-num-deletion js-linkable-line-number"></td>

    <td class="blob-num blob-num-deletion empty-cell"></td>

  <td class="blob-code blob-code-deletion">

    <span class="blob-code-inner">-  , ProcessingStep <span class="pl-k">=</span> <span class="pl-c1">require</span>(<span class="pl-s"><span class="pl-pds">'</span>eregistrations/model/processing-step<span class="pl-pds">'</span></span>)(db)</span>

  </td>
</tr>


    <tr>
    <td id="diff-ef45f3178e50cb2cc23bc2e4168e3b7bL6" data-line-number="6" class="blob-num blob-num-deletion js-linkable-line-number"></td>

    <td class="blob-num blob-num-deletion empty-cell"></td>

  <td class="blob-code blob-code-deletion">

    <span class="blob-code-inner">-  , BusinessProcessDemo    <span class="pl-k">=</span> <span class="pl-c1">require</span>(<span class="pl-s"><span class="pl-pds">'</span>./base<span class="pl-pds">'</span></span>);</span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-ef45f3178e50cb2cc23bc2e4168e3b7bR3" data-line-number="3" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+<span class="pl-k">var</span> db                  <span class="pl-k">=</span> <span class="pl-c1">require</span>(<span class="pl-s"><span class="pl-pds">'</span>../../../db<span class="pl-pds">'</span></span>)</span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-ef45f3178e50cb2cc23bc2e4168e3b7bR4" data-line-number="4" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+  , _                   <span class="pl-k">=</span> <span class="pl-c1">require</span>(<span class="pl-s"><span class="pl-pds">'</span>../../../i18n<span class="pl-pds">'</span></span>)</span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-ef45f3178e50cb2cc23bc2e4168e3b7bR5" data-line-number="5" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+  , ProcessingStep      <span class="pl-k">=</span> <span class="pl-c1">require</span>(<span class="pl-s"><span class="pl-pds">'</span>eregistrations/model/processing-step<span class="pl-pds">'</span></span>)(db)</span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-ef45f3178e50cb2cc23bc2e4168e3b7bR6" data-line-number="6" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+  , BusinessProcessDemo <span class="pl-k">=</span> <span class="pl-c1">require</span>(<span class="pl-s"><span class="pl-pds">'</span>./base<span class="pl-pds">'</span></span>)</span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-ef45f3178e50cb2cc23bc2e4168e3b7bR7" data-line-number="7" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+  , processing;</span>

  </td>
</tr>


    <tr>
    <td id="diff-ef45f3178e50cb2cc23bc2e4168e3b7bL7" data-line-number="7" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-ef45f3178e50cb2cc23bc2e4168e3b7bR8" data-line-number="8" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner"> </span>

  </td>
</tr>


    <tr>
    <td id="diff-ef45f3178e50cb2cc23bc2e4168e3b7bL8" data-line-number="8" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-ef45f3178e50cb2cc23bc2e4168e3b7bR9" data-line-number="9" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner"> <span class="pl-smi">BusinessProcessDemo</span>.<span class="pl-c1">prototype</span>.<span class="pl-smi">processingSteps</span>.<span class="pl-smi">map</span>.<span class="pl-en">defineProperties</span>({</span>

  </td>
</tr>


    <tr>
    <td id="diff-ef45f3178e50cb2cc23bc2e4168e3b7bL9" data-line-number="9" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-ef45f3178e50cb2cc23bc2e4168e3b7bR10" data-line-number="10" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner">  processing<span class="pl-k">:</span> { type<span class="pl-k">:</span> ProcessingStep, nested<span class="pl-k">:</span> <span class="pl-c1">true</span> }</span>

  </td>
</tr>


    <tr>
    <td id="diff-ef45f3178e50cb2cc23bc2e4168e3b7bL10" data-line-number="10" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-ef45f3178e50cb2cc23bc2e4168e3b7bR11" data-line-number="11" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner"> });</span>

  </td>
</tr>


    <tr>
    <td id="diff-ef45f3178e50cb2cc23bc2e4168e3b7bL11" data-line-number="11" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-ef45f3178e50cb2cc23bc2e4168e3b7bR12" data-line-number="12" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner"> </span>

  </td>
</tr>


    <tr>
    <td id="diff-ef45f3178e50cb2cc23bc2e4168e3b7bL12" data-line-number="12" class="blob-num blob-num-deletion js-linkable-line-number"></td>

    <td class="blob-num blob-num-deletion empty-cell"></td>

  <td class="blob-code blob-code-deletion">

    <span class="blob-code-inner">-<span class="pl-smi">BusinessProcessDemo</span>.<span class="pl-c1">prototype</span>.<span class="pl-smi">processingSteps</span>.<span class="pl-smi">map</span>.<span class="pl-smi">processing</span>.<span class="pl-en">setProperties</span>({</span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-ef45f3178e50cb2cc23bc2e4168e3b7bR13" data-line-number="13" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+processing <span class="pl-k">=</span> <span class="pl-smi">BusinessProcessDemo</span>.<span class="pl-c1">prototype</span>.<span class="pl-smi">processingSteps</span>.<span class="pl-smi">map</span>.<span class="pl-smi">processing</span>;</span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-ef45f3178e50cb2cc23bc2e4168e3b7bR14" data-line-number="14" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+</span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-ef45f3178e50cb2cc23bc2e4168e3b7bR15" data-line-number="15" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+<span class="pl-smi">processing</span>.<span class="pl-en">setProperties</span>({</span>

  </td>
</tr>


    <tr>
    <td id="diff-ef45f3178e50cb2cc23bc2e4168e3b7bL13" data-line-number="13" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-ef45f3178e50cb2cc23bc2e4168e3b7bR16" data-line-number="16" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner">  label<span class="pl-k">:</span> <span class="pl-en">_</span>(<span class="pl-s"><span class="pl-pds">"</span>Processing<span class="pl-pds">"</span></span>),</span>

  </td>
</tr>


    <tr>
    <td id="diff-ef45f3178e50cb2cc23bc2e4168e3b7bL14" data-line-number="14" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-ef45f3178e50cb2cc23bc2e4168e3b7bR17" data-line-number="17" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner">  <span class="pl-en">previousSteps</span><span class="pl-k">:</span> <span class="pl-k">function</span> () { <span class="pl-k">return</span> [<span class="pl-v">this</span>.<span class="pl-smi">owner</span>.<span class="pl-smi">revision</span>]; },</span>

  </td>
</tr>


    <tr>
    <td id="diff-ef45f3178e50cb2cc23bc2e4168e3b7bL15" data-line-number="15" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-ef45f3178e50cb2cc23bc2e4168e3b7bR18" data-line-number="18" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner">  <span class="pl-en">approvalProgress</span><span class="pl-k">:</span> <span class="pl-k">function</span> (<span class="pl-smi">_observe</span>) {</span>

  </td>
</tr>


      <tr class="js-expandable-line" data-position="24">
    <td class="blob-num blob-num-expandable" colspan="2">
      <a href="#diff-ef45f3178e50cb2cc23bc2e4168e3b7b" class="diff-expander js-expand" title="Expand" aria-label="Expand" data-url="/egovernment/eregistrations-demo/blob_excerpt/bdd75501367fad63cc63b428a2289d5625e18da4?diff=unified&amp;in_wiki_context=&amp;left_hunk_size=4&amp;mode=100644&amp;next_line_num_left=24&amp;next_line_num_right=27&amp;path=model%2Fbusiness-process-demo%2Fprocessing-steps%2Fprocessing.js&amp;prev_line_num_left=15&amp;prev_line_num_right=18&amp;right_hunk_size=19" data-left-range="16-23" data-right-range="19-26">
        <svg aria-hidden="true" class="octicon octicon-unfold" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M11.5 7.5L14 10c0 .55-.45 1-1 1H9v-1h3.5l-2-2h-7l-2 2H5v1H1c-.55 0-1-.45-1-1l2.5-2.5L0 5c0-.55.45-1 1-1h4v1H1.5l2 2h7l2-2H9V4h4c.55 0 1 .45 1 1l-2.5 2.5zM6 6h2V3h2L7 0 4 3h2v3zm2 3H6v3H4l3 3 3-3H8V9z"></path></svg>
      </a>
    </td>
    <td class="blob-code blob-code-inner blob-code-hunk">@@ -24,4 +27,19 @@ BusinessProcessDemo.prototype.processingSteps.map.processing.setProperties({</td>
  </tr>

    <tr>
    <td id="diff-ef45f3178e50cb2cc23bc2e4168e3b7bL24" data-line-number="24" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-ef45f3178e50cb2cc23bc2e4168e3b7bR27" data-line-number="27" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner">  }</span>

  </td>
</tr>


    <tr>
    <td id="diff-ef45f3178e50cb2cc23bc2e4168e3b7bL25" data-line-number="25" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-ef45f3178e50cb2cc23bc2e4168e3b7bR28" data-line-number="28" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner"> });</span>

  </td>
</tr>


    <tr>
    <td id="diff-ef45f3178e50cb2cc23bc2e4168e3b7bL26" data-line-number="26" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-ef45f3178e50cb2cc23bc2e4168e3b7bR29" data-line-number="29" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner"> </span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-ef45f3178e50cb2cc23bc2e4168e3b7bR30" data-line-number="30" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+<span class="pl-smi">processing</span>.<span class="pl-smi">requirementUploads</span>.<span class="pl-c1">set</span>(<span class="pl-s"><span class="pl-pds">'</span>applicable<span class="pl-pds">'</span></span>, <span class="pl-k">function</span> (<span class="pl-smi">_observe</span>) {</span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-ef45f3178e50cb2cc23bc2e4168e3b7bR31" data-line-number="31" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+ <span class="pl-k">var</span> requirementUploads <span class="pl-k">=</span> <span class="pl-v">this</span>.<span class="pl-smi">master</span>.<span class="pl-smi">requirementUploads</span></span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-ef45f3178e50cb2cc23bc2e4168e3b7bR32" data-line-number="32" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+   , result             <span class="pl-k">=</span> [];</span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-ef45f3178e50cb2cc23bc2e4168e3b7bR33" data-line-number="33" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+</span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-ef45f3178e50cb2cc23bc2e4168e3b7bR34" data-line-number="34" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+ <span class="pl-k">if</span> (<span class="pl-smi">requirementUploads</span>.<span class="pl-smi">applicable</span>.<span class="pl-c1">has</span>(<span class="pl-smi">requirementUploads</span>.<span class="pl-smi">map</span>.<span class="pl-smi">businessPlan</span>)) {</span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-ef45f3178e50cb2cc23bc2e4168e3b7bR35" data-line-number="35" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+     <span class="pl-smi">result</span>.<span class="pl-c1">push</span>(<span class="pl-smi">requirementUploads</span>.<span class="pl-smi">map</span>.<span class="pl-smi">businessPlan</span>);</span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-ef45f3178e50cb2cc23bc2e4168e3b7bR36" data-line-number="36" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+ }</span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-ef45f3178e50cb2cc23bc2e4168e3b7bR37" data-line-number="37" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+</span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-ef45f3178e50cb2cc23bc2e4168e3b7bR38" data-line-number="38" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+ <span class="pl-k">if</span> (<span class="pl-smi">requirementUploads</span>.<span class="pl-smi">applicable</span>.<span class="pl-c1">has</span>(<span class="pl-smi">requirementUploads</span>.<span class="pl-smi">map</span>.<span class="pl-smi">companyRegistration</span>)) {</span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-ef45f3178e50cb2cc23bc2e4168e3b7bR39" data-line-number="39" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+     <span class="pl-smi">result</span>.<span class="pl-c1">push</span>(<span class="pl-smi">requirementUploads</span>.<span class="pl-smi">map</span>.<span class="pl-smi">companyRegistration</span>);</span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-ef45f3178e50cb2cc23bc2e4168e3b7bR40" data-line-number="40" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+ }</span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-ef45f3178e50cb2cc23bc2e4168e3b7bR41" data-line-number="41" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+</span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-ef45f3178e50cb2cc23bc2e4168e3b7bR42" data-line-number="42" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+ <span class="pl-k">return</span> result;</span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-ef45f3178e50cb2cc23bc2e4168e3b7bR43" data-line-number="43" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+});</span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-ef45f3178e50cb2cc23bc2e4168e3b7bR44" data-line-number="44" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+</span>

  </td>
</tr>


    <tr>
    <td id="diff-ef45f3178e50cb2cc23bc2e4168e3b7bL27" data-line-number="27" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-ef45f3178e50cb2cc23bc2e4168e3b7bR45" data-line-number="45" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner"> <span class="pl-c1">module</span>.<span class="pl-smi">exports</span> <span class="pl-k">=</span> BusinessProcessDemo;</span>

  </td>
</tr>



        </tbody></table>
      </div>

</div>


</div>
