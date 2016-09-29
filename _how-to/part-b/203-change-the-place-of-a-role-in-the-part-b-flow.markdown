---
layout: recipe
permalink: /how-to/change-the-place-of-a-role-in-the-part-b-flow/
title: 'Change the place of a role in the Part B flow'
category: '2. Part B'
sub-category: 'Roles'
rate: '2'
number: '203'
introduction-text: 'This recipe explains what are the steps needed to change the order of processing steps in Part B'
introduction-img: '203.png'
prevUrl: 202
nextUrl: 204
done: ''
lang: en
ref: 203
---

The processing steps of a service are chained using a `previousSteps` property. Each step defines what steps have to complete in order for it to become ready.

If a step does not define a previous step, it is considered ready from the start. If, on the other hand, there is no other processing step that list given step as previous, then it is a final step.

While changing the order of processing steps, one must be very careful not to break the flow by introducing circular relationship.

Given two processing steps, `someStep` and `someOtherStep`, where `someStep` is before `someOtherStep`:

1. Open file `model/<your-service>/processing-steps/<some-step>.js`.
2. Change `previousSteps` property to `someOtherStep`.
3. Open file `model/<your-service>/processing-steps/<some-other-step>.js`.
4. Remove `someStep` from `previousSteps` property.

**Note**: Remember to check and adjust other steps that may depend either on `someStep` and/or `someOtherStep`.

## Example

In the branch "[change-the-place-of-a-role-in-the-part-b-flow](https://github.com/egovernment/eregistrations-demo/tree/change-the-place-of-a-role-in-the-part-b-flow)" of eregistrations-demo :

Change (swap) the order of `processing` and `socialSecurity` processing steps.

### Solution

<div id="files" class="diff-view " onclick="window.open('https://github.com/egovernment/eregistrations-demo/compare/change-the-place-of-a-role-in-the-part-b-flow...change-the-place-of-a-role-in-the-part-b-flow-solution#files')">


<a name="diff-cff38181a1945fc6bff83fff20aa9326"></a>
<div id="diff-0" class="file js-details-container




             show-inline-notes
           ">
  <div class="file-header" data-path="model/business-process-demo/processing-steps/front-desk.js">
    <div class="file-actions">
        <span class="show-file-notes">
          <label>
            <input checked="checked" class="js-toggle-file-notes" type="checkbox">
            Show notes
          </label>
        </span>

          <a href="/egovernment/eregistrations-demo/blob/9adf4a56a3fe87aebdcaac94cabca64c0d9cee5e/model/business-process-demo/processing-steps/front-desk.js" class="btn btn-sm tooltipped tooltipped-nw" rel="nofollow" aria-label="View the whole file at version 9adf4a5 ">View</a>

          <a class="btn-octicon tooltipped tooltipped-n" href="https://windows.github.com" aria-label="Open this file in GitHub Desktop" data-ga-click="Repository, open with desktop, type:windows">
              <svg aria-hidden="true" class="octicon octicon-device-desktop" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M15 2H1c-.55 0-1 .45-1 1v9c0 .55.45 1 1 1h5.34c-.25.61-.86 1.39-2.34 2h8c-1.48-.61-2.09-1.39-2.34-2H15c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm0 9H1V3h14v8z"></path></svg>
          </a>

    </div>
    <div class="file-info">
        <span class="diffstat tooltipped tooltipped-e" aria-label="1 addition &amp; 1 deletion">2 <span class="block-diff-added"></span><span class="block-diff-deleted"></span><span class="block-diff-neutral"></span><span class="block-diff-neutral"></span><span class="block-diff-neutral"></span></span>

      <span class="user-select-contain" title="model/business-process-demo/processing-steps/front-desk.js">
        model/business-process-demo/processing-steps/front-desk.js
      </span>

    </div>
  </div>

      <div class="data highlight blob-wrapper">
        <table class="diff-table tab-size  " data-tab-size="8">

      <tbody><tr class="js-expandable-line" data-position="0">
    <td class="blob-num blob-num-expandable" colspan="2">
      <a href="#diff-cff38181a1945fc6bff83fff20aa9326" class="diff-expander js-expand" title="Expand" aria-label="Expand" data-url="/egovernment/eregistrations-demo/blob_excerpt/03d7763eca97b0355b042831e484f3334fa0f88d?diff=unified&amp;in_wiki_context=&amp;left_hunk_size=7&amp;mode=100644&amp;next_line_num_left=12&amp;next_line_num_right=12&amp;path=model%2Fbusiness-process-demo%2Fprocessing-steps%2Ffront-desk.js&amp;prev_line_num_left=&amp;prev_line_num_right=&amp;right_hunk_size=7" data-left-range="1-11" data-right-range="1-11">
        <svg aria-hidden="true" class="octicon octicon-unfold" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path d="M11.5 7.5L14 10c0 .55-.45 1-1 1H9v-1h3.5l-2-2h-7l-2 2H5v1H1c-.55 0-1-.45-1-1l2.5-2.5L0 5c0-.55.45-1 1-1h4v1H1.5l2 2h7l2-2H9V4h4c.55 0 1 .45 1 1l-2.5 2.5zM6 6h2V3h2L7 0 4 3h2v3zm2 3H6v3H4l3 3 3-3H8V9z"></path></svg>
      </a>
    </td>
    <td class="blob-code blob-code-inner blob-code-hunk">@@ -12,7 +12,7 @@ BusinessProcessDemo.prototype.processingSteps.map.defineProperties({</td>
  </tr>

    <tr>
    <td id="diff-cff38181a1945fc6bff83fff20aa9326L12" data-line-number="12" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-cff38181a1945fc6bff83fff20aa9326R12" data-line-number="12" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner"> <span class="pl-smi">BusinessProcessDemo</span>.<span class="pl-c1">prototype</span>.<span class="pl-smi">processingSteps</span>.<span class="pl-smi">map</span>.<span class="pl-smi">frontDesk</span>.<span class="pl-en">setProperties</span>({</span>

  </td>
</tr>


    <tr>
    <td id="diff-cff38181a1945fc6bff83fff20aa9326L13" data-line-number="13" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-cff38181a1945fc6bff83fff20aa9326R13" data-line-number="13" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner">  label<span class="pl-k">:</span> <span class="pl-en">_</span>(<span class="pl-s"><span class="pl-pds">"</span>Front Desk<span class="pl-pds">"</span></span>),</span>

  </td>
</tr>


    <tr>
    <td id="diff-cff38181a1945fc6bff83fff20aa9326L14" data-line-number="14" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-cff38181a1945fc6bff83fff20aa9326R14" data-line-number="14" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner">  isApplicable<span class="pl-k">:</span> <span class="pl-c1">true</span>,</span>

  </td>
</tr>


    <tr>
    <td id="diff-cff38181a1945fc6bff83fff20aa9326L15" data-line-number="15" class="blob-num blob-num-deletion js-linkable-line-number"></td>

    <td class="blob-num blob-num-deletion empty-cell"></td>

  <td class="blob-code blob-code-deletion">

    <span class="blob-code-inner">- <span class="pl-en">previousSteps</span><span class="pl-k">:</span> <span class="pl-k">function</span> () { <span class="pl-k">return</span> [<span class="pl-v">this</span>.<span class="pl-smi">owner</span>.<span class="pl-smi x x-first x-last">socialSecurity</span>]; }</span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-cff38181a1945fc6bff83fff20aa9326R15" data-line-number="15" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+ <span class="pl-en">previousSteps</span><span class="pl-k">:</span> <span class="pl-k">function</span> () { <span class="pl-k">return</span> [<span class="pl-v">this</span>.<span class="pl-smi">owner</span>.<span class="pl-smi x x-first x-last">processing</span>]; }</span>

  </td>
</tr>


    <tr>
    <td id="diff-cff38181a1945fc6bff83fff20aa9326L16" data-line-number="16" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-cff38181a1945fc6bff83fff20aa9326R16" data-line-number="16" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner"> });</span>

  </td>
</tr>


    <tr>
    <td id="diff-cff38181a1945fc6bff83fff20aa9326L17" data-line-number="17" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-cff38181a1945fc6bff83fff20aa9326R17" data-line-number="17" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner"> </span>

  </td>
</tr>


    <tr>
    <td id="diff-cff38181a1945fc6bff83fff20aa9326L18" data-line-number="18" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-cff38181a1945fc6bff83fff20aa9326R18" data-line-number="18" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner"> <span class="pl-c1">module</span>.<span class="pl-smi">exports</span> <span class="pl-k">=</span> BusinessProcessDemo;</span>

  </td>
</tr>



        </tbody></table>
      </div>
</div>


<a name="diff-ef45f3178e50cb2cc23bc2e4168e3b7b"></a>
<div id="diff-1" class="file js-details-container




             show-inline-notes
           ">
  <div class="file-header" data-path="model/business-process-demo/processing-steps/processing.js">
    <div class="file-actions">
        <span class="show-file-notes">
          <label>
            <input checked="checked" class="js-toggle-file-notes" type="checkbox">
            Show notes
          </label>
        </span>

          <a href="/egovernment/eregistrations-demo/blob/9adf4a56a3fe87aebdcaac94cabca64c0d9cee5e/model/business-process-demo/processing-steps/processing.js" class="btn btn-sm tooltipped tooltipped-nw" rel="nofollow" aria-label="View the whole file at version 9adf4a5 ">View</a>

          <a class="btn-octicon tooltipped tooltipped-n" href="https://windows.github.com" aria-label="Open this file in GitHub Desktop" data-ga-click="Repository, open with desktop, type:windows">
              <svg aria-hidden="true" class="octicon octicon-device-desktop" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M15 2H1c-.55 0-1 .45-1 1v9c0 .55.45 1 1 1h5.34c-.25.61-.86 1.39-2.34 2h8c-1.48-.61-2.09-1.39-2.34-2H15c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm0 9H1V3h14v8z"></path></svg>
          </a>

    </div>
    <div class="file-info">
        <span class="diffstat tooltipped tooltipped-e" aria-label="1 addition &amp; 1 deletion">2 <span class="block-diff-added"></span><span class="block-diff-deleted"></span><span class="block-diff-neutral"></span><span class="block-diff-neutral"></span><span class="block-diff-neutral"></span></span>

      <span class="user-select-contain" title="model/business-process-demo/processing-steps/processing.js">
        model/business-process-demo/processing-steps/processing.js
      </span>

    </div>
  </div>

      <div class="data highlight blob-wrapper">
        <table class="diff-table tab-size  " data-tab-size="8">

      <tbody><tr class="js-expandable-line" data-position="0">
    <td class="blob-num blob-num-expandable" colspan="2">
      <a href="#diff-ef45f3178e50cb2cc23bc2e4168e3b7b" class="diff-expander js-expand" title="Expand" aria-label="Expand" data-url="/egovernment/eregistrations-demo/blob_excerpt/14738789779635f2c0488da1e269a4627847d216?diff=unified&amp;in_wiki_context=&amp;left_hunk_size=7&amp;mode=100644&amp;next_line_num_left=11&amp;next_line_num_right=11&amp;path=model%2Fbusiness-process-demo%2Fprocessing-steps%2Fprocessing.js&amp;prev_line_num_left=&amp;prev_line_num_right=&amp;right_hunk_size=7" data-left-range="1-10" data-right-range="1-10">
        <svg aria-hidden="true" class="octicon octicon-unfold" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path d="M11.5 7.5L14 10c0 .55-.45 1-1 1H9v-1h3.5l-2-2h-7l-2 2H5v1H1c-.55 0-1-.45-1-1l2.5-2.5L0 5c0-.55.45-1 1-1h4v1H1.5l2 2h7l2-2H9V4h4c.55 0 1 .45 1 1l-2.5 2.5zM6 6h2V3h2L7 0 4 3h2v3zm2 3H6v3H4l3 3 3-3H8V9z"></path></svg>
      </a>
    </td>
    <td class="blob-code blob-code-inner blob-code-hunk">@@ -11,7 +11,7 @@ BusinessProcessDemo.prototype.processingSteps.map.defineProperties({</td>
  </tr>

    <tr>
    <td id="diff-ef45f3178e50cb2cc23bc2e4168e3b7bL11" data-line-number="11" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-ef45f3178e50cb2cc23bc2e4168e3b7bR11" data-line-number="11" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner"> </span>

  </td>
</tr>


    <tr>
    <td id="diff-ef45f3178e50cb2cc23bc2e4168e3b7bL12" data-line-number="12" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-ef45f3178e50cb2cc23bc2e4168e3b7bR12" data-line-number="12" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner"> <span class="pl-smi">BusinessProcessDemo</span>.<span class="pl-c1">prototype</span>.<span class="pl-smi">processingSteps</span>.<span class="pl-smi">map</span>.<span class="pl-smi">processing</span>.<span class="pl-en">setProperties</span>({</span>

  </td>
</tr>


    <tr>
    <td id="diff-ef45f3178e50cb2cc23bc2e4168e3b7bL13" data-line-number="13" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-ef45f3178e50cb2cc23bc2e4168e3b7bR13" data-line-number="13" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner">  label<span class="pl-k">:</span> <span class="pl-en">_</span>(<span class="pl-s"><span class="pl-pds">"</span>Processing<span class="pl-pds">"</span></span>),</span>

  </td>
</tr>


    <tr>
    <td id="diff-ef45f3178e50cb2cc23bc2e4168e3b7bL14" data-line-number="14" class="blob-num blob-num-deletion js-linkable-line-number"></td>

    <td class="blob-num blob-num-deletion empty-cell"></td>

  <td class="blob-code blob-code-deletion">

    <span class="blob-code-inner">- <span class="pl-en">previousSteps</span><span class="pl-k">:</span> <span class="pl-k">function</span> () { <span class="pl-k">return</span> [<span class="pl-v">this</span>.<span class="pl-smi">owner</span>.<span class="pl-smi x x-first x-last">revision</span>]; },</span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-ef45f3178e50cb2cc23bc2e4168e3b7bR14" data-line-number="14" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+ <span class="pl-en">previousSteps</span><span class="pl-k">:</span> <span class="pl-k">function</span> () { <span class="pl-k">return</span> [<span class="pl-v">this</span>.<span class="pl-smi">owner</span>.<span class="pl-smi x x-first x-last">socialSecurity</span>]; },</span>

  </td>
</tr>


    <tr>
    <td id="diff-ef45f3178e50cb2cc23bc2e4168e3b7bL15" data-line-number="15" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-ef45f3178e50cb2cc23bc2e4168e3b7bR15" data-line-number="15" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner">  <span class="pl-en">approvalProgress</span><span class="pl-k">:</span> <span class="pl-k">function</span> (<span class="pl-smi">_observe</span>) {</span>

  </td>
</tr>


    <tr>
    <td id="diff-ef45f3178e50cb2cc23bc2e4168e3b7bL16" data-line-number="16" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-ef45f3178e50cb2cc23bc2e4168e3b7bR16" data-line-number="16" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner">      <span class="pl-k">var</span> weight <span class="pl-k">=</span> <span class="pl-c1">0</span>, statusSum <span class="pl-k">=</span> <span class="pl-c1">0</span>;</span>

  </td>
</tr>


    <tr>
    <td id="diff-ef45f3178e50cb2cc23bc2e4168e3b7bL17" data-line-number="17" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-ef45f3178e50cb2cc23bc2e4168e3b7bR17" data-line-number="17" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner">      <span class="pl-en">_observe</span>(<span class="pl-v">this</span>.<span class="pl-smi">master</span>.<span class="pl-smi">certificates</span>.<span class="pl-smi">applicable</span>).<span class="pl-c1">forEach</span>(<span class="pl-k">function</span> (<span class="pl-smi">cert</span>) {</span>

  </td>
</tr>


  <tr class="js-expandable-line">
   <td class="blob-num blob-num-expandable" colspan="2">
     <a href="#diff-ef45f3178e50cb2cc23bc2e4168e3b7b" class="diff-expander js-expand" title="Expand" aria-label="Expand" data-url="/egovernment/eregistrations-demo/blob_excerpt/14738789779635f2c0488da1e269a4627847d216?diff=unified&amp;in_wiki_context=&amp;mode=100644&amp;path=model%2Fbusiness-process-demo%2Fprocessing-steps%2Fprocessing.js&amp;prev_line_num_left=17&amp;prev_line_num_right=17" data-left-range="18-27" data-right-range="18-27">
       <svg aria-hidden="true" class="octicon octicon-unfold" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path d="M11.5 7.5L14 10c0 .55-.45 1-1 1H9v-1h3.5l-2-2h-7l-2 2H5v1H1c-.55 0-1-.45-1-1l2.5-2.5L0 5c0-.55.45-1 1-1h4v1H1.5l2 2h7l2-2H9V4h4c.55 0 1 .45 1 1l-2.5 2.5zM6 6h2V3h2L7 0 4 3h2v3zm2 3H6v3H4l3 3 3-3H8V9z"></path></svg>
     </a>
   </td>
   <td class="blob-code blob-code-expandable"></td>
  </tr>

        </tbody></table>
      </div>
</div>


<a name="diff-745ee05dfb21a9334686e777f1b83960"></a>
<div id="diff-2" class="file js-details-container




             show-inline-notes
           ">
  <div class="file-header" data-path="model/business-process-demo/processing-steps/social-security.js">
    <div class="file-actions">
        <span class="show-file-notes">
          <label>
            <input checked="checked" class="js-toggle-file-notes" type="checkbox">
            Show notes
          </label>
        </span>

          <a href="/egovernment/eregistrations-demo/blob/9adf4a56a3fe87aebdcaac94cabca64c0d9cee5e/model/business-process-demo/processing-steps/social-security.js" class="btn btn-sm tooltipped tooltipped-nw" rel="nofollow" aria-label="View the whole file at version 9adf4a5 ">View</a>

          <a class="btn-octicon tooltipped tooltipped-n" href="https://windows.github.com" aria-label="Open this file in GitHub Desktop" data-ga-click="Repository, open with desktop, type:windows">
              <svg aria-hidden="true" class="octicon octicon-device-desktop" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M15 2H1c-.55 0-1 .45-1 1v9c0 .55.45 1 1 1h5.34c-.25.61-.86 1.39-2.34 2h8c-1.48-.61-2.09-1.39-2.34-2H15c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm0 9H1V3h14v8z"></path></svg>
          </a>

    </div>
    <div class="file-info">
        <span class="diffstat tooltipped tooltipped-e" aria-label="1 addition &amp; 1 deletion">2 <span class="block-diff-added"></span><span class="block-diff-deleted"></span><span class="block-diff-neutral"></span><span class="block-diff-neutral"></span><span class="block-diff-neutral"></span></span>

      <span class="user-select-contain" title="model/business-process-demo/processing-steps/social-security.js">
        model/business-process-demo/processing-steps/social-security.js
      </span>

    </div>
  </div>

      <div class="data highlight blob-wrapper">
        <table class="diff-table tab-size  " data-tab-size="8">

      <tbody><tr class="js-expandable-line" data-position="0">
    <td class="blob-num blob-num-expandable" colspan="2">
      <a href="#diff-745ee05dfb21a9334686e777f1b83960" class="diff-expander js-expand" title="Expand" aria-label="Expand" data-url="/egovernment/eregistrations-demo/blob_excerpt/284e618b18e45b3b4501fe4f4e33734f5af6b139?diff=unified&amp;in_wiki_context=&amp;left_hunk_size=7&amp;mode=100644&amp;next_line_num_left=29&amp;next_line_num_right=29&amp;path=model%2Fbusiness-process-demo%2Fprocessing-steps%2Fsocial-security.js&amp;prev_line_num_left=&amp;prev_line_num_right=&amp;right_hunk_size=7" data-left-range="1-28" data-right-range="1-28">
        <svg aria-hidden="true" class="octicon octicon-unfold" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path d="M11.5 7.5L14 10c0 .55-.45 1-1 1H9v-1h3.5l-2-2h-7l-2 2H5v1H1c-.55 0-1-.45-1-1l2.5-2.5L0 5c0-.55.45-1 1-1h4v1H1.5l2 2h7l2-2H9V4h4c.55 0 1 .45 1 1l-2.5 2.5zM6 6h2V3h2L7 0 4 3h2v3zm2 3H6v3H4l3 3 3-3H8V9z"></path></svg>
      </a>
    </td>
    <td class="blob-code blob-code-inner blob-code-hunk">@@ -29,7 +29,7 @@ socialSecurityStep.defineProperties({</td>
  </tr>

    <tr>
    <td id="diff-745ee05dfb21a9334686e777f1b83960L29" data-line-number="29" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-745ee05dfb21a9334686e777f1b83960R29" data-line-number="29" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner"> </span>

  </td>
</tr>


    <tr>
    <td id="diff-745ee05dfb21a9334686e777f1b83960L30" data-line-number="30" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-745ee05dfb21a9334686e777f1b83960R30" data-line-number="30" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner"> <span class="pl-smi">socialSecurityStep</span>.<span class="pl-en">setProperties</span>({</span>

  </td>
</tr>


    <tr>
    <td id="diff-745ee05dfb21a9334686e777f1b83960L31" data-line-number="31" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-745ee05dfb21a9334686e777f1b83960R31" data-line-number="31" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner">  label<span class="pl-k">:</span> <span class="pl-en">_</span>(<span class="pl-s"><span class="pl-pds">"</span>Social Security<span class="pl-pds">"</span></span>),</span>

  </td>
</tr>


    <tr>
    <td id="diff-745ee05dfb21a9334686e777f1b83960L32" data-line-number="32" class="blob-num blob-num-deletion js-linkable-line-number"></td>

    <td class="blob-num blob-num-deletion empty-cell"></td>

  <td class="blob-code blob-code-deletion">

    <span class="blob-code-inner">- <span class="pl-en">previousSteps</span><span class="pl-k">:</span> <span class="pl-k">function</span> () { <span class="pl-k">return</span> [<span class="pl-v">this</span>.<span class="pl-smi">owner</span>.<span class="pl-smi x x-first x-last">processing</span>]; }</span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-745ee05dfb21a9334686e777f1b83960R32" data-line-number="32" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+ <span class="pl-en">previousSteps</span><span class="pl-k">:</span> <span class="pl-k">function</span> () { <span class="pl-k">return</span> [<span class="pl-v">this</span>.<span class="pl-smi">owner</span>.<span class="pl-smi x x-first x-last">revision</span>]; }</span>

  </td>
</tr>


    <tr>
    <td id="diff-745ee05dfb21a9334686e777f1b83960L33" data-line-number="33" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-745ee05dfb21a9334686e777f1b83960R33" data-line-number="33" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner"> });</span>

  </td>
</tr>


    <tr>
    <td id="diff-745ee05dfb21a9334686e777f1b83960L34" data-line-number="34" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-745ee05dfb21a9334686e777f1b83960R34" data-line-number="34" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner"> </span>

  </td>
</tr>


    <tr>
    <td id="diff-745ee05dfb21a9334686e777f1b83960L35" data-line-number="35" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-745ee05dfb21a9334686e777f1b83960R35" data-line-number="35" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner"> <span class="pl-smi">socialSecurityStep</span>.<span class="pl-en">getOwnDescriptor</span>(<span class="pl-s"><span class="pl-pds">'</span>dataForm<span class="pl-pds">'</span></span>).<span class="pl-c1">type</span> <span class="pl-k">=</span> FormSection;</span>

  </td>
</tr>


  <tr class="js-expandable-line">
   <td class="blob-num blob-num-expandable" colspan="2">
     <a href="#diff-745ee05dfb21a9334686e777f1b83960" class="diff-expander js-expand" title="Expand" aria-label="Expand" data-url="/egovernment/eregistrations-demo/blob_excerpt/284e618b18e45b3b4501fe4f4e33734f5af6b139?diff=unified&amp;in_wiki_context=&amp;mode=100644&amp;path=model%2Fbusiness-process-demo%2Fprocessing-steps%2Fsocial-security.js&amp;prev_line_num_left=35&amp;prev_line_num_right=35" data-left-range="36-46" data-right-range="36-46">
       <svg aria-hidden="true" class="octicon octicon-unfold" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path d="M11.5 7.5L14 10c0 .55-.45 1-1 1H9v-1h3.5l-2-2h-7l-2 2H5v1H1c-.55 0-1-.45-1-1l2.5-2.5L0 5c0-.55.45-1 1-1h4v1H1.5l2 2h7l2-2H9V4h4c.55 0 1 .45 1 1l-2.5 2.5zM6 6h2V3h2L7 0 4 3h2v3zm2 3H6v3H4l3 3 3-3H8V9z"></path></svg>
     </a>
   </td>
   <td class="blob-code blob-code-expandable"></td>
  </tr>

        </tbody></table>
      </div>
</div>

</div>
