---
layout: recipe
permalink: /how-to/add-existing-step-to-service/
title: 'Add an existing step to new serive'
category: '2. Part B'
sub-category: 'Other'
rate: '3'
number: '253'
introduction-text: 'This recipe describes how to add a existing processing step to a new service.'
introduction-img: '201.png'
prevUrl: 252
nextUrl: 301
done:
lang: en
ref: 253
---

Every processing step is associated with at least one service. Each processing step has its own application (a directory in `apps` directory). In order to include an existing processing step for a new service, some steps has to be taken.

In order to include existing processing step for a service:

1. Ensure that the processing step is implemented as a generic class either in `eregistrations` project or in `model/business-process/processing-steps/` directory (see example on how to [move processing step to generic model](https://github.com/egovernment/eregistrations-demo/commit/db4236a32fe376baf702cc6ba0adfea01c0ea00c)).
2. Create a file `model/<your-service>/processing-steps/<your-step-name>.js` using the example below.
3. Require model of new serive in `apps/official-<your-step-name>/client/model.js`.
4. Inlude a name of new service in `_services` property of exported `meta` object in `apps/official-<your-step-name>/business-processes/meta.js`.

```javascript
'use strict';

var BusinessProcess = require('../base')
  , Step            = require('../../business-process/processing-steps/<your-step-name>');

require('eregistrations/model/business-process-new/processing-steps')(require('../../../db'));

BusinessProcess.prototype.processingSteps.map.defineProperties({
  <yourStepName>: { type: Step, nested: true }
});

module.exports = BusinessProcess;
```

## Example

In the branch "[add-existing-step-to-service](https://github.com/egovernment/eregistrations-demo/tree/add-existing-step-to-service)" of eregistrations-demo :

Add the *"EDC Processing"* step to demo service.

### Solution

<div id="files" class="diff-view " onclick="window.open('https://github.com/egovernment/eregistrations-demo/compare/add-existing-step-to-service...add-existing-step-to-service-solution#files')">

  <div class="js-diff-progressive-container">

<a name="diff-84327fe7b97a4d98a80f06e2e76833d7"></a>
<div id="diff-0" class="file js-file js-details-container





              show-inline-notes
           ">
  <div class="file-header" data-path="apps/official-edc-processing/business-processes/meta.js" data-short-path="84327fe" data-anchor="diff-84327fe7b97a4d98a80f06e2e76833d7">
    <div class="file-actions">

        <span class="show-file-notes pt-1">
          <label>
            <input checked="checked" class="js-toggle-file-notes" type="checkbox">
            Show comments
          </label>
        </span>

          <a href="/egovernment/eregistrations-demo/blob/d281e039e777bd4a18b3589ed50e38030b99e767/apps/official-edc-processing/business-processes/meta.js" class="btn btn-sm tooltipped tooltipped-nw" rel="nofollow" aria-label="View the whole file at version d281e03 ">View</a>

          <a class="btn-octicon tooltipped tooltipped-n" href="https://windows.github.com" aria-label="Open this file in GitHub Desktop" data-ga-click="Repository, open with desktop, type:windows">
              <svg aria-hidden="true" class="octicon octicon-device-desktop" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M15 2H1c-.55 0-1 .45-1 1v9c0 .55.45 1 1 1h5.34c-.25.61-.86 1.39-2.34 2h8c-1.48-.61-2.09-1.39-2.34-2H15c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm0 9H1V3h14v8z"></path></svg>
          </a>

    </div>
    <div class="file-info">
        <span class="diffstat tooltipped tooltipped-e" aria-label="1 addition &amp; 1 deletion">2 <span class="block-diff-added"></span><span class="block-diff-deleted"></span><span class="block-diff-neutral"></span><span class="block-diff-neutral"></span><span class="block-diff-neutral"></span></span>

      <a href="#diff-84327fe7b97a4d98a80f06e2e76833d7" class="link-gray-dark" title="apps/official-edc-processing/business-processes/meta.js">
        apps/official-edc-processing/business-processes/meta.js
      </a>


    </div>
  </div>
  <div class="js-file-content">

        <div class="data highlight blob-wrapper">
          <table class="diff-table tab-size  " data-tab-size="8">

      <tbody><tr class="js-expandable-line" data-position="0">
    <td class="blob-num blob-num-expandable" colspan="2">
      <a href="#diff-84327fe7b97a4d98a80f06e2e76833d7" class="diff-expander js-expand" title="Expand" aria-label="Expand" data-url="/egovernment/eregistrations-demo/blob_excerpt/d50344aae630c4b4945a912a229ebcda9e147f22?diff=unified&amp;in_wiki_context=&amp;left_hunk_size=7&amp;mode=100644&amp;next_line_num_left=22&amp;next_line_num_right=22&amp;path=apps%2Fofficial-edc-processing%2Fbusiness-processes%2Fmeta.js&amp;prev_line_num_left=&amp;prev_line_num_right=&amp;right_hunk_size=7" data-left-range="1-21" data-right-range="1-21">
        <svg aria-hidden="true" class="octicon octicon-unfold" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M11.5 7.5L14 10c0 .55-.45 1-1 1H9v-1h3.5l-2-2h-7l-2 2H5v1H1c-.55 0-1-.45-1-1l2.5-2.5L0 5c0-.55.45-1 1-1h4v1H1.5l2 2h7l2-2H9V4h4c.55 0 1 .45 1 1l-2.5 2.5zM6 6h2V3h2L7 0 4 3h2v3zm2 3H6v3H4l3 3 3-3H8V9z"></path></svg>
      </a>
    </td>
    <td class="blob-code blob-code-inner blob-code-hunk">@@ -22,7 +22,7 @@ module.exports = meta = Object.defineProperties({</td>
  </tr>

    <tr>
    <td id="diff-84327fe7b97a4d98a80f06e2e76833d7L22" data-line-number="22" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-84327fe7b97a4d98a80f06e2e76833d7R22" data-line-number="22" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner">    label<span class="pl-k">:</span> <span class="pl-en">_</span>(<span class="pl-s"><span class="pl-pds">"</span>Approved<span class="pl-pds">"</span></span>),</span>

  </td>
</tr>


    <tr>
    <td id="diff-84327fe7b97a4d98a80f06e2e76833d7L23" data-line-number="23" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-84327fe7b97a4d98a80f06e2e76833d7R23" data-line-number="23" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner">    order<span class="pl-k">:</span> <span class="pl-c1">2</span></span>

  </td>
</tr>


    <tr>
    <td id="diff-84327fe7b97a4d98a80f06e2e76833d7L24" data-line-number="24" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-84327fe7b97a4d98a80f06e2e76833d7R24" data-line-number="24" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner">  }</span>

  </td>
</tr>


    <tr>
    <td id="diff-84327fe7b97a4d98a80f06e2e76833d7L25" data-line-number="25" class="blob-num blob-num-deletion js-linkable-line-number"></td>

    <td class="blob-num blob-num-deletion empty-cell"></td>

  <td class="blob-code blob-code-deletion">

    <span class="blob-code-inner">-}, { _services<span class="pl-k">:</span> <span class="pl-en">d</span>([<span class="pl-s"><span class="pl-pds">'</span>finalTest<span class="pl-pds">'</span></span>]) });</span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-84327fe7b97a4d98a80f06e2e76833d7R25" data-line-number="25" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+}, { _services<span class="pl-k">:</span> <span class="pl-en">d</span>([<span class="pl-s"><span class="pl-pds">'</span>finalTest<span class="pl-pds">'</span></span><span class="x x-first">, </span><span class="pl-s"><span class="pl-pds x">'</span><span class="x">demo</span><span class="pl-pds x x-last">'</span></span>]) });</span>

  </td>
</tr>


    <tr>
    <td id="diff-84327fe7b97a4d98a80f06e2e76833d7L26" data-line-number="26" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-84327fe7b97a4d98a80f06e2e76833d7R26" data-line-number="26" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner"> </span>

  </td>
</tr>


    <tr>
    <td id="diff-84327fe7b97a4d98a80f06e2e76833d7L27" data-line-number="27" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-84327fe7b97a4d98a80f06e2e76833d7R27" data-line-number="27" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner"> <span class="pl-en">forEach</span>(meta, <span class="pl-k">function</span> (<span class="pl-smi">conf</span>, <span class="pl-smi">name</span>) {</span>

  </td>
</tr>


    <tr>
    <td id="diff-84327fe7b97a4d98a80f06e2e76833d7L28" data-line-number="28" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-84327fe7b97a4d98a80f06e2e76833d7R28" data-line-number="28" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner">  <span class="pl-k">if</span> (name <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">'</span>all<span class="pl-pds">'</span></span>) {</span>

  </td>
</tr>


  <tr class="js-expandable-line">
   <td class="blob-num blob-num-expandable" colspan="2">
     <a href="#diff-84327fe7b97a4d98a80f06e2e76833d7" class="diff-expander js-expand" title="Expand" aria-label="Expand" data-url="/egovernment/eregistrations-demo/blob_excerpt/d50344aae630c4b4945a912a229ebcda9e147f22?diff=unified&amp;in_wiki_context=&amp;mode=100644&amp;path=apps%2Fofficial-edc-processing%2Fbusiness-processes%2Fmeta.js&amp;prev_line_num_left=28&amp;prev_line_num_right=28" data-left-range="29-35" data-right-range="29-35">
       <svg aria-hidden="true" class="octicon octicon-unfold" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M11.5 7.5L14 10c0 .55-.45 1-1 1H9v-1h3.5l-2-2h-7l-2 2H5v1H1c-.55 0-1-.45-1-1l2.5-2.5L0 5c0-.55.45-1 1-1h4v1H1.5l2 2h7l2-2H9V4h4c.55 0 1 .45 1 1l-2.5 2.5zM6 6h2V3h2L7 0 4 3h2v3zm2 3H6v3H4l3 3 3-3H8V9z"></path></svg>
     </a>
   </td>
   <td class="blob-code blob-code-expandable"></td>
  </tr>

          </tbody></table>
        </div>

  </div>
</div>


<a name="diff-ac57e235f729b774f969d931e550b383"></a>
<div id="diff-1" class="file js-file js-details-container





              show-inline-notes
           ">
  <div class="file-header" data-path="apps/official-edc-processing/client/model.js" data-short-path="ac57e23" data-anchor="diff-ac57e235f729b774f969d931e550b383">
    <div class="file-actions">

        <span class="show-file-notes pt-1">
          <label>
            <input checked="checked" class="js-toggle-file-notes" type="checkbox">
            Show comments
          </label>
        </span>

          <a href="/egovernment/eregistrations-demo/blob/d281e039e777bd4a18b3589ed50e38030b99e767/apps/official-edc-processing/client/model.js" class="btn btn-sm tooltipped tooltipped-nw" rel="nofollow" aria-label="View the whole file at version d281e03 ">View</a>

          <a class="btn-octicon tooltipped tooltipped-n" href="https://windows.github.com" aria-label="Open this file in GitHub Desktop" data-ga-click="Repository, open with desktop, type:windows">
              <svg aria-hidden="true" class="octicon octicon-device-desktop" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M15 2H1c-.55 0-1 .45-1 1v9c0 .55.45 1 1 1h5.34c-.25.61-.86 1.39-2.34 2h8c-1.48-.61-2.09-1.39-2.34-2H15c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm0 9H1V3h14v8z"></path></svg>
          </a>

    </div>
    <div class="file-info">
        <span class="diffstat tooltipped tooltipped-e" aria-label="1 addition &amp; 0 deletions">1 <span class="block-diff-added"></span><span class="block-diff-neutral"></span><span class="block-diff-neutral"></span><span class="block-diff-neutral"></span><span class="block-diff-neutral"></span></span>

      <a href="#diff-ac57e235f729b774f969d931e550b383" class="link-gray-dark" title="apps/official-edc-processing/client/model.js">
        apps/official-edc-processing/client/model.js
      </a>


    </div>
  </div>
  <div class="js-file-content">

        <div class="data highlight blob-wrapper">
          <table class="diff-table tab-size  " data-tab-size="8">

      <tbody><tr class="js-expandable-line" data-position="0">
    <td class="blob-num blob-num-expandable" colspan="2">
      <a href="#diff-ac57e235f729b774f969d931e550b383" class="diff-expander js-expand" title="Expand" aria-label="Expand" data-url="/egovernment/eregistrations-demo/blob_excerpt/92a676f7bbc606fbcef319a6a752a47ed85f9a11?diff=unified&amp;in_wiki_context=&amp;left_hunk_size=5&amp;mode=100644&amp;next_line_num_left=15&amp;next_line_num_right=15&amp;path=apps%2Fofficial-edc-processing%2Fclient%2Fmodel.js&amp;prev_line_num_left=&amp;prev_line_num_right=&amp;right_hunk_size=6" data-left-range="1-14" data-right-range="1-14">
        <svg aria-hidden="true" class="octicon octicon-unfold" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M11.5 7.5L14 10c0 .55-.45 1-1 1H9v-1h3.5l-2-2h-7l-2 2H5v1H1c-.55 0-1-.45-1-1l2.5-2.5L0 5c0-.55.45-1 1-1h4v1H1.5l2 2h7l2-2H9V4h4c.55 0 1 .45 1 1l-2.5 2.5zM6 6h2V3h2L7 0 4 3h2v3zm2 3H6v3H4l3 3 3-3H8V9z"></path></svg>
      </a>
    </td>
    <td class="blob-code blob-code-inner blob-code-hunk">@@ -15,5 +15,6 @@ require('../../../model/user/recently-visited/business-processes');</td>
  </tr>

    <tr>
    <td id="diff-ac57e235f729b774f969d931e550b383L15" data-line-number="15" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-ac57e235f729b774f969d931e550b383R15" data-line-number="15" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner"> <span class="pl-c1">require</span>(<span class="pl-s"><span class="pl-pds">'</span>../../../model/views<span class="pl-pds">'</span></span>);</span>

  </td>
</tr>


    <tr>
    <td id="diff-ac57e235f729b774f969d931e550b383L16" data-line-number="16" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-ac57e235f729b774f969d931e550b383R16" data-line-number="16" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner"> </span>

  </td>
</tr>


    <tr>
    <td id="diff-ac57e235f729b774f969d931e550b383L17" data-line-number="17" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-ac57e235f729b774f969d931e550b383R17" data-line-number="17" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner"> <span class="pl-c1">require</span>(<span class="pl-s"><span class="pl-pds">'</span>../../../model/business-process-final-test<span class="pl-pds">'</span></span>);</span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-ac57e235f729b774f969d931e550b383R18" data-line-number="18" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+<span class="pl-c1">require</span>(<span class="pl-s"><span class="pl-pds">'</span>../../../model/business-process-demo<span class="pl-pds">'</span></span>);</span>

  </td>
</tr>


    <tr>
    <td id="diff-ac57e235f729b774f969d931e550b383L18" data-line-number="18" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-ac57e235f729b774f969d931e550b383R19" data-line-number="19" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner"> </span>

  </td>
</tr>


    <tr>
    <td id="diff-ac57e235f729b774f969d931e550b383L19" data-line-number="19" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-ac57e235f729b774f969d931e550b383R20" data-line-number="20" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner"> <span class="pl-c1">module</span>.<span class="pl-smi">exports</span> <span class="pl-k">=</span> db;</span>

  </td>
</tr>



          </tbody></table>
        </div>

  </div>
</div>


<a name="diff-0a63793c75e2ea5da3e20744138d644b"></a>
<div id="diff-2" class="file js-file js-details-container





              show-inline-notes
           ">
  <div class="file-header" data-path="model/business-process-demo/processing-steps/edc-processing.js" data-short-path="0a63793" data-anchor="diff-0a63793c75e2ea5da3e20744138d644b">
    <div class="file-actions">

        <span class="show-file-notes pt-1">
          <label>
            <input checked="checked" class="js-toggle-file-notes" type="checkbox">
            Show comments
          </label>
        </span>

          <a href="/egovernment/eregistrations-demo/blob/d281e039e777bd4a18b3589ed50e38030b99e767/model/business-process-demo/processing-steps/edc-processing.js" class="btn btn-sm tooltipped tooltipped-nw" rel="nofollow" aria-label="View the whole file at version d281e03 ">View</a>

          <a class="btn-octicon tooltipped tooltipped-n" href="https://windows.github.com" aria-label="Open this file in GitHub Desktop" data-ga-click="Repository, open with desktop, type:windows">
              <svg aria-hidden="true" class="octicon octicon-device-desktop" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M15 2H1c-.55 0-1 .45-1 1v9c0 .55.45 1 1 1h5.34c-.25.61-.86 1.39-2.34 2h8c-1.48-.61-2.09-1.39-2.34-2H15c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm0 9H1V3h14v8z"></path></svg>
          </a>

    </div>
    <div class="file-info">
        <span class="diffstat tooltipped tooltipped-e" aria-label="12 additions &amp; 0 deletions">12 <span class="block-diff-added"></span><span class="block-diff-added"></span><span class="block-diff-added"></span><span class="block-diff-added"></span><span class="block-diff-added"></span></span>

      <a href="#diff-0a63793c75e2ea5da3e20744138d644b" class="link-gray-dark" title="model/business-process-demo/processing-steps/edc-processing.js">
        model/business-process-demo/processing-steps/edc-processing.js
      </a>


    </div>
  </div>
  <div class="js-file-content">

        <div class="data highlight blob-wrapper">
          <table class="diff-table tab-size  " data-tab-size="8">

      <tbody><tr data-position="0">
    <td id="diff-0a63793c75e2ea5da3e20744138d644bL-1" class="blob-num blob-num-hunk non-expandable" data-line-number="..."></td>
    <td id="diff-0a63793c75e2ea5da3e20744138d644bR0" class="blob-num blob-num-hunk non-expandable" data-line-number="..."></td>
    <td class="blob-code blob-code-inner blob-code-hunk">@@ -0,0 +1,12 @@</td>
  </tr>

    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-0a63793c75e2ea5da3e20744138d644bR1" data-line-number="1" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+<span class="pl-s"><span class="pl-pds">'</span>use strict<span class="pl-pds">'</span></span>;</span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-0a63793c75e2ea5da3e20744138d644bR2" data-line-number="2" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+</span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-0a63793c75e2ea5da3e20744138d644bR3" data-line-number="3" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+<span class="pl-k">var</span> BusinessProcessDemo         <span class="pl-k">=</span> <span class="pl-c1">require</span>(<span class="pl-s"><span class="pl-pds">'</span>../base<span class="pl-pds">'</span></span>)</span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-0a63793c75e2ea5da3e20744138d644bR4" data-line-number="4" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+  , EdcProcessingProcessingStep <span class="pl-k">=</span> <span class="pl-c1">require</span>(<span class="pl-s"><span class="pl-pds">'</span>../../business-process/processing-steps/edc-processing<span class="pl-pds">'</span></span>);</span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-0a63793c75e2ea5da3e20744138d644bR5" data-line-number="5" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+</span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-0a63793c75e2ea5da3e20744138d644bR6" data-line-number="6" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+<span class="pl-c1">require</span>(<span class="pl-s"><span class="pl-pds">'</span>eregistrations/model/business-process-new/processing-steps<span class="pl-pds">'</span></span>)(<span class="pl-c1">require</span>(<span class="pl-s"><span class="pl-pds">'</span>../../../db<span class="pl-pds">'</span></span>));</span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-0a63793c75e2ea5da3e20744138d644bR7" data-line-number="7" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+</span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-0a63793c75e2ea5da3e20744138d644bR8" data-line-number="8" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+<span class="pl-smi">BusinessProcessDemo</span>.<span class="pl-c1">prototype</span>.<span class="pl-smi">processingSteps</span>.<span class="pl-smi">map</span>.<span class="pl-en">defineProperties</span>({</span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-0a63793c75e2ea5da3e20744138d644bR9" data-line-number="9" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+ edcProcessing<span class="pl-k">:</span> { type<span class="pl-k">:</span> EdcProcessingProcessingStep, nested<span class="pl-k">:</span> <span class="pl-c1">true</span> }</span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-0a63793c75e2ea5da3e20744138d644bR10" data-line-number="10" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+});</span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-0a63793c75e2ea5da3e20744138d644bR11" data-line-number="11" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+</span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-0a63793c75e2ea5da3e20744138d644bR12" data-line-number="12" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+<span class="pl-c1">module</span>.<span class="pl-smi">exports</span> <span class="pl-k">=</span> BusinessProcessDemo;</span>

  </td>
</tr>



          </tbody></table>
        </div>

  </div>
</div>


<a name="diff-0d4ebdd16c4884f961349ee797694390"></a>
<div id="diff-3" class="file js-file js-details-container





              show-inline-notes
           ">
  <div class="file-header" data-path="model/business-process-demo/processing-steps/index.js" data-short-path="0d4ebdd" data-anchor="diff-0d4ebdd16c4884f961349ee797694390">
    <div class="file-actions">

        <span class="show-file-notes pt-1">
          <label>
            <input checked="checked" class="js-toggle-file-notes" type="checkbox">
            Show comments
          </label>
        </span>

          <a href="/egovernment/eregistrations-demo/blob/d281e039e777bd4a18b3589ed50e38030b99e767/model/business-process-demo/processing-steps/index.js" class="btn btn-sm tooltipped tooltipped-nw" rel="nofollow" aria-label="View the whole file at version d281e03 ">View</a>

          <a class="btn-octicon tooltipped tooltipped-n" href="https://windows.github.com" aria-label="Open this file in GitHub Desktop" data-ga-click="Repository, open with desktop, type:windows">
              <svg aria-hidden="true" class="octicon octicon-device-desktop" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M15 2H1c-.55 0-1 .45-1 1v9c0 .55.45 1 1 1h5.34c-.25.61-.86 1.39-2.34 2h8c-1.48-.61-2.09-1.39-2.34-2H15c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm0 9H1V3h14v8z"></path></svg>
          </a>

    </div>
    <div class="file-info">
        <span class="diffstat tooltipped tooltipped-e" aria-label="1 addition &amp; 0 deletions">1 <span class="block-diff-added"></span><span class="block-diff-neutral"></span><span class="block-diff-neutral"></span><span class="block-diff-neutral"></span><span class="block-diff-neutral"></span></span>

      <a href="#diff-0d4ebdd16c4884f961349ee797694390" class="link-gray-dark" title="model/business-process-demo/processing-steps/index.js">
        model/business-process-demo/processing-steps/index.js
      </a>


    </div>
  </div>
  <div class="js-file-content">

        <div class="data highlight blob-wrapper">
          <table class="diff-table tab-size  " data-tab-size="8">

      <tbody><tr class="js-expandable-line" data-position="0">
    <td class="blob-num blob-num-expandable" colspan="2">
      <a href="#diff-0d4ebdd16c4884f961349ee797694390" class="diff-expander js-expand" title="Expand" aria-label="Expand" data-url="/egovernment/eregistrations-demo/blob_excerpt/3b5f99775b83d6a28a96f385fd111ad01fc5e140?diff=unified&amp;in_wiki_context=&amp;left_hunk_size=5&amp;mode=100644&amp;next_line_num_left=4&amp;next_line_num_right=4&amp;path=model%2Fbusiness-process-demo%2Fprocessing-steps%2Findex.js&amp;prev_line_num_left=&amp;prev_line_num_right=&amp;right_hunk_size=6" data-left-range="1-3" data-right-range="1-3">
        <svg aria-hidden="true" class="octicon octicon-unfold" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M11.5 7.5L14 10c0 .55-.45 1-1 1H9v-1h3.5l-2-2h-7l-2 2H5v1H1c-.55 0-1-.45-1-1l2.5-2.5L0 5c0-.55.45-1 1-1h4v1H1.5l2 2h7l2-2H9V4h4c.55 0 1 .45 1 1l-2.5 2.5zM6 6h2V3h2L7 0 4 3h2v3zm2 3H6v3H4l3 3 3-3H8V9z"></path></svg>
      </a>
    </td>
    <td class="blob-code blob-code-inner blob-code-hunk">@@ -4,5 +4,6 @@ module.exports = require('./base');</td>
  </tr>

    <tr>
    <td id="diff-0d4ebdd16c4884f961349ee797694390L4" data-line-number="4" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-0d4ebdd16c4884f961349ee797694390R4" data-line-number="4" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner"> </span>

  </td>
</tr>


    <tr>
    <td id="diff-0d4ebdd16c4884f961349ee797694390L5" data-line-number="5" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-0d4ebdd16c4884f961349ee797694390R5" data-line-number="5" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner"> <span class="pl-c1">require</span>(<span class="pl-s"><span class="pl-pds">'</span>./revision<span class="pl-pds">'</span></span>);</span>

  </td>
</tr>


    <tr>
    <td id="diff-0d4ebdd16c4884f961349ee797694390L6" data-line-number="6" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-0d4ebdd16c4884f961349ee797694390R6" data-line-number="6" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner"> <span class="pl-c1">require</span>(<span class="pl-s"><span class="pl-pds">'</span>./processing<span class="pl-pds">'</span></span>);</span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-0d4ebdd16c4884f961349ee797694390R7" data-line-number="7" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+<span class="pl-c1">require</span>(<span class="pl-s"><span class="pl-pds">'</span>./edc-processing<span class="pl-pds">'</span></span>);</span>

  </td>
</tr>


    <tr>
    <td id="diff-0d4ebdd16c4884f961349ee797694390L7" data-line-number="7" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-0d4ebdd16c4884f961349ee797694390R8" data-line-number="8" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner"> <span class="pl-c1">require</span>(<span class="pl-s"><span class="pl-pds">'</span>./social-security<span class="pl-pds">'</span></span>);</span>

  </td>
</tr>


    <tr>
    <td id="diff-0d4ebdd16c4884f961349ee797694390L8" data-line-number="8" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-0d4ebdd16c4884f961349ee797694390R9" data-line-number="9" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner"> <span class="pl-c1">require</span>(<span class="pl-s"><span class="pl-pds">'</span>./front-desk<span class="pl-pds">'</span></span>);</span>

  </td>
</tr>



          </tbody></table>
        </div>

  </div>
</div>

  </div>

</div>
