---
layout: recipe
permalink: /how-to/set-who-will-receive-the-email/
title: "Update email notification so it's also sent to other email address"
category: '2. Part B'
sub-category: 'Notifications'
rate: '2'
number: '243'
introduction-text: ''
introduction-img: '243.png'
prevUrl: 242
nextUrl: 251
done: ''
lang: en
ref: 243
---

Every notification is sent in response to some state change in business process flow. They are defined as part of apps responsible for given processing step (be it Part A or Part B) and can be found in `apps/<app-name>/server/notifications/` directory, one notification per file.

1. Locate the notification to change in `apps/<app-name>/server/notifications/<notification>.js`.
2. Add `cc` function to exported object that will have the following signature:

```javascript
cc: function (businessProcess) {
    return businessProcess.someEmailProperty;
}
```

## Example

In the branch "[set-who-will-receive-the-email](https://github.com/egovernment/eregistrations-demo/tree/set-who-will-receive-the-email)" of eregistrations-demo:

Make *"Documents delivered successfully"* notification that is sent after the Front Desk step approves the business process be sent to attorney.

### Solution

<div id="files" class="diff-view " onclick="window.open('https://github.com/egovernment/eregistrations-demo/compare/set-who-will-receive-the-email...set-who-will-receive-the-email-solution#files')">


<a name="diff-a9d1b0070d7840409dccda25445201ff"></a>
<div id="diff-0" class="file js-details-container




             show-inline-notes
           ">
  <div class="file-header" data-path="apps/official-front-desk/server/notifications/approved.js">
    <div class="file-actions">
        <span class="show-file-notes">
          <label>
            <input checked="checked" class="js-toggle-file-notes" type="checkbox">
            Show notes
          </label>
        </span>

          <a href="/egovernment/eregistrations-demo/blob/48efef6b8d94bbd989fcddc388d11de9ab56204c/apps/official-front-desk/server/notifications/approved.js" class="btn btn-sm tooltipped tooltipped-nw" rel="nofollow" aria-label="View the whole file at version 48efef6 ">View</a>

          <a class="btn-octicon tooltipped tooltipped-n" href="https://windows.github.com" aria-label="Open this file in GitHub Desktop" data-ga-click="Repository, open with desktop, type:windows">
              <svg aria-hidden="true" class="octicon octicon-device-desktop" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M15 2H1c-.55 0-1 .45-1 1v9c0 .55.45 1 1 1h5.34c-.25.61-.86 1.39-2.34 2h8c-1.48-.61-2.09-1.39-2.34-2H15c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm0 9H1V3h14v8z"></path></svg>
          </a>

    </div>
    <div class="file-info">
        <span class="diffstat tooltipped tooltipped-e" aria-label="3 additions &amp; 0 deletions">3 <span class="block-diff-added"></span><span class="block-diff-added"></span><span class="block-diff-added"></span><span class="block-diff-neutral"></span><span class="block-diff-neutral"></span></span>

      <span class="user-select-contain" title="apps/official-front-desk/server/notifications/approved.js">
        apps/official-front-desk/server/notifications/approved.js
      </span>

    </div>
  </div>

      <div class="data highlight blob-wrapper">
        <table class="diff-table tab-size  " data-tab-size="8">

      <tbody><tr class="js-expandable-line" data-position="0">
    <td class="blob-num blob-num-expandable" colspan="2">
      <a href="#diff-a9d1b0070d7840409dccda25445201ff" class="diff-expander js-expand" title="Expand" aria-label="Expand" data-url="/egovernment/eregistrations-demo/blob_excerpt/74067e5c85b34da8fb4a0203b328cbfac014374c?diff=unified&amp;in_wiki_context=&amp;left_hunk_size=6&amp;mode=100644&amp;next_line_num_left=6&amp;next_line_num_right=6&amp;path=apps%2Fofficial-front-desk%2Fserver%2Fnotifications%2Fapproved.js&amp;prev_line_num_left=&amp;prev_line_num_right=&amp;right_hunk_size=9" data-left-range="1-5" data-right-range="1-5">
        <svg aria-hidden="true" class="octicon octicon-unfold" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path d="M11.5 7.5L14 10c0 .55-.45 1-1 1H9v-1h3.5l-2-2h-7l-2 2H5v1H1c-.55 0-1-.45-1-1l2.5-2.5L0 5c0-.55.45-1 1-1h4v1H1.5l2 2h7l2-2H9V4h4c.55 0 1 .45 1 1l-2.5 2.5zM6 6h2V3h2L7 0 4 3h2v3zm2 3H6v3H4l3 3 3-3H8V9z"></path></svg>
      </a>
    </td>
    <td class="blob-code blob-code-inner blob-code-hunk">@@ -6,6 +6,9 @@ var _                 = require('../../../../i18n').bind('Official: Front Desk')</td>
  </tr>

    <tr>
    <td id="diff-a9d1b0070d7840409dccda25445201ffL6" data-line-number="6" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-a9d1b0070d7840409dccda25445201ffR6" data-line-number="6" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner"> <span class="pl-c1">module</span>.<span class="pl-smi">exports</span> <span class="pl-k">=</span> {</span>

  </td>
</tr>


    <tr>
    <td id="diff-a9d1b0070d7840409dccda25445201ffL7" data-line-number="7" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-a9d1b0070d7840409dccda25445201ffR7" data-line-number="7" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner">  preTrigger<span class="pl-k">:</span> <span class="pl-smi">businessProcesses</span>.<span class="pl-en">filterByKeyPath</span>(<span class="pl-s"><span class="pl-pds">'</span>processingSteps/map/frontDesk/isReady<span class="pl-pds">'</span></span>, <span class="pl-c1">true</span>),</span>

  </td>
</tr>


    <tr>
    <td id="diff-a9d1b0070d7840409dccda25445201ffL8" data-line-number="8" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-a9d1b0070d7840409dccda25445201ffR8" data-line-number="8" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner">  trigger<span class="pl-k">:</span> <span class="pl-smi">businessProcesses</span>.<span class="pl-en">filterByKeyPath</span>(<span class="pl-s"><span class="pl-pds">'</span>processingSteps/map/frontDesk/isApproved<span class="pl-pds">'</span></span>, <span class="pl-c1">true</span>),</span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-a9d1b0070d7840409dccda25445201ffR9" data-line-number="9" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+ <span class="pl-en">cc</span><span class="pl-k">:</span> <span class="pl-k">function</span> (<span class="pl-smi">businessProcess</span>) {</span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-a9d1b0070d7840409dccda25445201ffR10" data-line-number="10" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+     <span class="pl-k">return</span> <span class="pl-smi">businessProcess</span>.<span class="pl-smi">attorney</span>.<span class="pl-smi">email</span>;</span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-a9d1b0070d7840409dccda25445201ffR11" data-line-number="11" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+ },</span>

  </td>
</tr>


    <tr>
    <td id="diff-a9d1b0070d7840409dccda25445201ffL9" data-line-number="9" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-a9d1b0070d7840409dccda25445201ffR12" data-line-number="12" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner">  resolveGetters<span class="pl-k">:</span> <span class="pl-c1">true</span>,</span>

  </td>
</tr>


    <tr>
    <td id="diff-a9d1b0070d7840409dccda25445201ffL10" data-line-number="10" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-a9d1b0070d7840409dccda25445201ffR13" data-line-number="13" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner">  variables<span class="pl-k">:</span> {</span>

  </td>
</tr>


    <tr>
    <td id="diff-a9d1b0070d7840409dccda25445201ffL11" data-line-number="11" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-a9d1b0070d7840409dccda25445201ffR14" data-line-number="14" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner">      <span class="pl-en">fullName</span><span class="pl-k">:</span> <span class="pl-k">function</span> () {</span>

  </td>
</tr>


  <tr class="js-expandable-line">
   <td class="blob-num blob-num-expandable" colspan="2">
     <a href="#diff-a9d1b0070d7840409dccda25445201ff" class="diff-expander js-expand" title="Expand" aria-label="Expand" data-url="/egovernment/eregistrations-demo/blob_excerpt/74067e5c85b34da8fb4a0203b328cbfac014374c?diff=unified&amp;in_wiki_context=&amp;mode=100644&amp;path=apps%2Fofficial-front-desk%2Fserver%2Fnotifications%2Fapproved.js&amp;prev_line_num_left=11&amp;prev_line_num_right=14" data-left-range="12-29" data-right-range="15-29">
       <svg aria-hidden="true" class="octicon octicon-unfold" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path d="M11.5 7.5L14 10c0 .55-.45 1-1 1H9v-1h3.5l-2-2h-7l-2 2H5v1H1c-.55 0-1-.45-1-1l2.5-2.5L0 5c0-.55.45-1 1-1h4v1H1.5l2 2h7l2-2H9V4h4c.55 0 1 .45 1 1l-2.5 2.5zM6 6h2V3h2L7 0 4 3h2v3zm2 3H6v3H4l3 3 3-3H8V9z"></path></svg>
     </a>
   </td>
   <td class="blob-code blob-code-expandable"></td>
  </tr>

        </tbody></table>
      </div>
</div>

</div>
