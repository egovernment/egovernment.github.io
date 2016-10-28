---
layout: recipe
permalink: /how-to/set-the-emails-sent-for-a-certain-status-of-the-file/
title: 'Set the emails sent for a certain status of the file'
category: '2. Part B'
sub-category: 'Notifications'
rate: '3'
number: '241'
introduction-text: ''
introduction-img: '241.png'
prevUrl: 231
nextUrl: 242
done: 'yes'
lang: en
ref: 241
---

Every notification is sent in response to some state change in business process flow. They are defined as part of apps responsible for given processing step (be it Part A or Part B) and can be found in `apps/<app-name>/server/notifications/` directory, one notification per file.

1. Create a new file in `apps/<app-name>/server/notifications/<notification>.js`.
2. Define new notification on the `module.exports` object. It is required to set `trigger`, `preTrigger`, `subject` and `text` properties.

```javascript
'use strict';

var _                        = require('../../../../i18n').bind('Email notifications')
  , businessProcessInstances = require('../../../../apps-common/business-processes/submitted/your-service');

// processingStepName should be an actual processing step defined on BusinessProcessYourService
exports.preTrigger = businessProcessInstances
    .filterByKeyPath('processingSteps/map/processingStepName/isReady', true);
// isApproved is used here as an example, change it suit your needs
exports.trigger = businessProcessInstances
    .filterByKeyPath('processingSteps/map/processingStepName/isApproved', true);

exports.subject = _("Notification subject");
exports.text = _("Notification message body");
```

## Example

In the branch "[set-the-emails-sent-for-a-certain-status-of-the-file](https://github.com/egovernment/eregistrations-demo/tree/set-the-emails-sent-for-a-certain-status-of-the-file)" of eregistrations-demo:

Configure a notification that will be sent after `processing` step is approved.

### Solution

<div id="files" class="diff-view " onclick="window.open('https://github.com/egovernment/eregistrations-demo/compare/set-the-emails-sent-for-a-certain-status-of-the-file...set-the-emails-sent-for-a-certain-status-of-the-file-solution#files')">


<a name="diff-4940784c1f168968dcd8a2944e676092"></a>
<div id="diff-0" class="file js-details-container




             show-inline-notes
           ">
  <div class="file-header" data-path="apps/official-processing/server/notifications/processing-rejected.js">
    <div class="file-actions">
        <span class="show-file-notes">
          <label>
            <input checked="checked" class="js-toggle-file-notes" type="checkbox">
            Show notes
          </label>
        </span>

          <a href="/egovernment/eregistrations-demo/blob/42c28e30a3ab280d1f5076ec82fa8473d13a3de6/apps/official-processing/server/notifications/processing-rejected.js" class="btn btn-sm tooltipped tooltipped-nw" rel="nofollow" aria-label="View the whole file at version 42c28e3 ">View</a>

          <a class="btn-octicon tooltipped tooltipped-n" href="https://windows.github.com" aria-label="Open this file in GitHub Desktop" data-ga-click="Repository, open with desktop, type:windows">
              <svg aria-hidden="true" class="octicon octicon-device-desktop" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M15 2H1c-.55 0-1 .45-1 1v9c0 .55.45 1 1 1h5.34c-.25.61-.86 1.39-2.34 2h8c-1.48-.61-2.09-1.39-2.34-2H15c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm0 9H1V3h14v8z"></path></svg>
          </a>

    </div>
    <div class="file-info">
        <span class="diffstat tooltipped tooltipped-e" aria-label="12 additions &amp; 0 deletions">12 <span class="block-diff-added"></span><span class="block-diff-added"></span><span class="block-diff-added"></span><span class="block-diff-added"></span><span class="block-diff-added"></span></span>

      <span class="user-select-contain" title="apps/official-processing/server/notifications/processing-rejected.js">
        apps/official-processing/server/notifications/processing-rejected.js
      </span>

    </div>
  </div>

      <div class="data highlight blob-wrapper">
        <table class="diff-table tab-size  " data-tab-size="8">

      <tbody><tr data-position="0">
    <td id="diff-4940784c1f168968dcd8a2944e676092L-1" class="blob-num blob-num-hunk non-expandable" data-line-number="..."></td>
    <td id="diff-4940784c1f168968dcd8a2944e676092R0" class="blob-num blob-num-hunk non-expandable" data-line-number="..."></td>
    <td class="blob-code blob-code-inner blob-code-hunk">@@ -0,0 +1,12 @@</td>
  </tr>

    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-4940784c1f168968dcd8a2944e676092R1" data-line-number="1" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+<span class="pl-s"><span class="pl-pds">'</span>use strict<span class="pl-pds">'</span></span>;</span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-4940784c1f168968dcd8a2944e676092R2" data-line-number="2" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+</span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-4940784c1f168968dcd8a2944e676092R3" data-line-number="3" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+<span class="pl-k">var</span> _                        <span class="pl-k">=</span> <span class="pl-c1">require</span>(<span class="pl-s"><span class="pl-pds">'</span>../../../../i18n<span class="pl-pds">'</span></span>).<span class="pl-en">bind</span>(<span class="pl-s"><span class="pl-pds">'</span>Email notifications<span class="pl-pds">'</span></span>)</span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-4940784c1f168968dcd8a2944e676092R4" data-line-number="4" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+  , businessProcessInstances <span class="pl-k">=</span> <span class="pl-c1">require</span>(<span class="pl-s"><span class="pl-pds">'</span>../../../../apps-common/business-processes/submitted/demo<span class="pl-pds">'</span></span>);</span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-4940784c1f168968dcd8a2944e676092R5" data-line-number="5" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+</span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-4940784c1f168968dcd8a2944e676092R6" data-line-number="6" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+<span class="pl-c1">exports</span>.<span class="pl-smi">preTrigger</span> <span class="pl-k">=</span> businessProcessInstances</span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-4940784c1f168968dcd8a2944e676092R7" data-line-number="7" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+ .<span class="pl-en">filterByKeyPath</span>(<span class="pl-s"><span class="pl-pds">'</span>processingSteps/map/processing/isReady<span class="pl-pds">'</span></span>, <span class="pl-c1">true</span>);</span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-4940784c1f168968dcd8a2944e676092R8" data-line-number="8" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+<span class="pl-c1">exports</span>.<span class="pl-smi">trigger</span> <span class="pl-k">=</span> businessProcessInstances</span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-4940784c1f168968dcd8a2944e676092R9" data-line-number="9" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+ .<span class="pl-en">filterByKeyPath</span>(<span class="pl-s"><span class="pl-pds">'</span>processingSteps/map/processing/isApproved<span class="pl-pds">'</span></span>, <span class="pl-c1">true</span>);</span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-4940784c1f168968dcd8a2944e676092R10" data-line-number="10" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+</span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-4940784c1f168968dcd8a2944e676092R11" data-line-number="11" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+<span class="pl-c1">exports</span>.<span class="pl-smi">subject</span> <span class="pl-k">=</span> <span class="pl-en">_</span>(<span class="pl-s"><span class="pl-pds">"</span>Processing completed<span class="pl-pds">"</span></span>);</span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-4940784c1f168968dcd8a2944e676092R12" data-line-number="12" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+<span class="pl-c1">exports</span>.<span class="pl-c1">text</span> <span class="pl-k">=</span> <span class="pl-en">_</span>(<span class="pl-s"><span class="pl-pds">"</span>The processing of your application is completed.<span class="pl-pds">"</span></span>);</span>

  </td>
</tr>



        </tbody></table>
      </div>
</div>


</div>
