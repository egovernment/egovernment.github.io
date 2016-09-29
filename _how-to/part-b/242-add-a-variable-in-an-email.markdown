---
layout: recipe
permalink: /how-to/add-a-variable-in-an-email/
title: 'Add a variable in an email'
category: '2. Part B'
sub-category: 'Notifications'
rate: '2'
number: '242'
introduction-text: 'This recipe explains how to add a new variable to be used in notifications subject and text.'
introduction-img: '242.png'
prevUrl: 241
nextUrl: 243
done: ''
lang: en
ref: 242
---

Every notification is sent in response to some state change in business process flow. They are defined as part of apps responsible for given processing step (be it Part A or Part B) and can be found in `apps/<app-name>/server/notifications/` directory, one notification per file.

The system uses [es6-template-strings](https://github.com/medikoo/es6-template-strings) to resolve translations with variables. The notation used is `${ variableName }`, eg. *"Welcome, ${ fullName }"*.

1. Locate the notification to change in `apps/<app-name>/server/notifications/<notification>.js`.
2. Make sure that `resolveGetters` property on exported object is set to `true`.
3. Add, to the `variables` hash property on the exported object, a variable that you want to include in notification subject or body.

**Note:** The variable can either be a plain value or a function with the following signature:

```javascript
variableName: function () {
    return this.businessProcess.someProperty;
}
```

## Example

In the branch "[add-a-variable-in-an-email](https://github.com/egovernment/eregistrations-demo/tree/add-a-variable-in-an-email)" of eregistrations-demo:

Change *"Documents delivered successfully"* notification text to be *"M24 Front Desk finished\n\nName of company: ${ businessName }\n\nName of the attorney: ${ attorneyName }\n\nName of official: ${ officialFullName }"* and add needed `attorneyName` variable.

### Solution

<div id="files" class="diff-view " onclick="window.open('https://github.com/egovernment/eregistrations-demo/compare/add-a-variable-in-an-email...add-a-variable-in-an-email-solution#files')">


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

          <a href="/egovernment/eregistrations-demo/blob/3a2bdeb4a9b404c4c6a7f95a4dee5b01df550374/apps/official-front-desk/server/notifications/approved.js" class="btn btn-sm tooltipped tooltipped-nw" rel="nofollow" aria-label="View the whole file at version 3a2bdeb ">View</a>

          <a class="btn-octicon tooltipped tooltipped-n" href="https://windows.github.com" aria-label="Open this file in GitHub Desktop" data-ga-click="Repository, open with desktop, type:windows">
              <svg aria-hidden="true" class="octicon octicon-device-desktop" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M15 2H1c-.55 0-1 .45-1 1v9c0 .55.45 1 1 1h5.34c-.25.61-.86 1.39-2.34 2h8c-1.48-.61-2.09-1.39-2.34-2H15c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm0 9H1V3h14v8z"></path></svg>
          </a>

    </div>
    <div class="file-info">
        <span class="diffstat tooltipped tooltipped-e" aria-label="4 additions &amp; 0 deletions">4 <span class="block-diff-added"></span><span class="block-diff-added"></span><span class="block-diff-added"></span><span class="block-diff-added"></span><span class="block-diff-neutral"></span></span>

      <span class="user-select-contain" title="apps/official-front-desk/server/notifications/approved.js">
        apps/official-front-desk/server/notifications/approved.js
      </span>

    </div>
  </div>

      <div class="data highlight blob-wrapper">
        <table class="diff-table tab-size  " data-tab-size="8">

      <tbody><tr class="js-expandable-line" data-position="0">
    <td class="blob-num blob-num-expandable" colspan="2">
      <a href="#diff-a9d1b0070d7840409dccda25445201ff" class="diff-expander js-expand" title="Expand" aria-label="Expand" data-url="/egovernment/eregistrations-demo/blob_excerpt/005eb2f003016befea2ff3cb124250a9b7c405ea?diff=unified&amp;in_wiki_context=&amp;left_hunk_size=11&amp;mode=100644&amp;next_line_num_left=16&amp;next_line_num_right=16&amp;path=apps%2Fofficial-front-desk%2Fserver%2Fnotifications%2Fapproved.js&amp;prev_line_num_left=&amp;prev_line_num_right=&amp;right_hunk_size=15" data-left-range="1-15" data-right-range="1-15">
        <svg aria-hidden="true" class="octicon octicon-unfold" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path d="M11.5 7.5L14 10c0 .55-.45 1-1 1H9v-1h3.5l-2-2h-7l-2 2H5v1H1c-.55 0-1-.45-1-1l2.5-2.5L0 5c0-.55.45-1 1-1h4v1H1.5l2 2h7l2-2H9V4h4c.55 0 1 .45 1 1l-2.5 2.5zM6 6h2V3h2L7 0 4 3h2v3zm2 3H6v3H4l3 3 3-3H8V9z"></path></svg>
      </a>
    </td>
    <td class="blob-code blob-code-inner blob-code-hunk">@@ -16,11 +16,15 @@ module.exports = {</td>
  </tr>

    <tr>
    <td id="diff-a9d1b0070d7840409dccda25445201ffL16" data-line-number="16" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-a9d1b0070d7840409dccda25445201ffR16" data-line-number="16" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner">      },</span>

  </td>
</tr>


    <tr>
    <td id="diff-a9d1b0070d7840409dccda25445201ffL17" data-line-number="17" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-a9d1b0070d7840409dccda25445201ffR17" data-line-number="17" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner">      <span class="pl-en">officialFullName</span><span class="pl-k">:</span> <span class="pl-k">function</span> () {</span>

  </td>
</tr>


    <tr>
    <td id="diff-a9d1b0070d7840409dccda25445201ffL18" data-line-number="18" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-a9d1b0070d7840409dccda25445201ffR18" data-line-number="18" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner">          <span class="pl-k">return</span> <span class="pl-v">this</span>.<span class="pl-smi">businessProcess</span>.<span class="pl-smi">processingSteps</span>.<span class="pl-smi">map</span>.<span class="pl-smi">frontDesk</span>.<span class="pl-smi">processor</span>.<span class="pl-smi">fullName</span>;</span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-a9d1b0070d7840409dccda25445201ffR19" data-line-number="19" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+     },</span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-a9d1b0070d7840409dccda25445201ffR20" data-line-number="20" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+     <span class="pl-en">attorneyName</span><span class="pl-k">:</span> <span class="pl-k">function</span> () {</span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-a9d1b0070d7840409dccda25445201ffR21" data-line-number="21" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+         <span class="pl-k">return</span> <span class="pl-v">this</span>.<span class="pl-smi">businessProcess</span>.<span class="pl-smi">attorney</span>.<span class="pl-smi">fullName</span>;</span>

  </td>
</tr>


    <tr>
    <td id="diff-a9d1b0070d7840409dccda25445201ffL19" data-line-number="19" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-a9d1b0070d7840409dccda25445201ffR22" data-line-number="22" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner">      }</span>

  </td>
</tr>


    <tr>
    <td id="diff-a9d1b0070d7840409dccda25445201ffL20" data-line-number="20" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-a9d1b0070d7840409dccda25445201ffR23" data-line-number="23" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner">  },</span>

  </td>
</tr>


    <tr>
    <td id="diff-a9d1b0070d7840409dccda25445201ffL21" data-line-number="21" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-a9d1b0070d7840409dccda25445201ffR24" data-line-number="24" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner">  subject<span class="pl-k">:</span> <span class="pl-en">_</span>(<span class="pl-s"><span class="pl-pds">"</span>M24 Documents delivered successfully<span class="pl-pds">"</span></span>),</span>

  </td>
</tr>


    <tr>
    <td id="diff-a9d1b0070d7840409dccda25445201ffL22" data-line-number="22" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-a9d1b0070d7840409dccda25445201ffR25" data-line-number="25" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner">  text<span class="pl-k">:</span> <span class="pl-en">_</span>(<span class="pl-s"><span class="pl-pds">"</span>Email message greeting ${ fullName }<span class="pl-pds">"</span></span>) <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">"</span><span class="pl-cce">\n\n</span><span class="pl-pds">"</span></span></span>

  </td>
</tr>


    <tr>
    <td id="diff-a9d1b0070d7840409dccda25445201ffL23" data-line-number="23" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-a9d1b0070d7840409dccda25445201ffR26" data-line-number="26" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner">      <span class="pl-k">+</span> <span class="pl-en">_</span>(<span class="pl-s"><span class="pl-pds">"</span>M24 Front Desk finished<span class="pl-cce">\n\n</span><span class="pl-pds">"</span></span></span>

  </td>
</tr>


    <tr>
    <td id="diff-a9d1b0070d7840409dccda25445201ffL24" data-line-number="24" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-a9d1b0070d7840409dccda25445201ffR27" data-line-number="27" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner">          <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">"</span>Name of company: ${ businessName }<span class="pl-cce">\n\n</span><span class="pl-pds">"</span></span></span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-a9d1b0070d7840409dccda25445201ffR28" data-line-number="28" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+         <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">"</span>Name of the attorney: ${ attorneyName }<span class="pl-cce">\n\n</span><span class="pl-pds">"</span></span></span>

  </td>
</tr>


    <tr>
    <td id="diff-a9d1b0070d7840409dccda25445201ffL25" data-line-number="25" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-a9d1b0070d7840409dccda25445201ffR29" data-line-number="29" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner">          <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">"</span>Name of official: ${ officialFullName }<span class="pl-pds">"</span></span>)</span>

  </td>
</tr>


    <tr>
    <td id="diff-a9d1b0070d7840409dccda25445201ffL26" data-line-number="26" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-a9d1b0070d7840409dccda25445201ffR30" data-line-number="30" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner"> };</span>

  </td>
</tr>



        </tbody></table>
      </div>
</div>

</div>
