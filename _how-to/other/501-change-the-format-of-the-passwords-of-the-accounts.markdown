---
layout: recipe
permalink: /how-to/change-the-format-of-the-passwords-of-the-accounts/
title: 'Change the format of the passwords of the accounts'
category: '5. Other'
sub-category: ''
rate: '2'
number: '501'
prevUrl: 407
nextUrl: 502
done: 'yes'
lang: en
ref: 501
---

In order to change a password format, like minimal length or it's composition:

1. Open `db.js` file.
2. Require a Password type definition from `dbjs-ext/string/string-line/password`.
3. Change a desired characteristic of a password like so:

```javascript
Password.setProperties({
    // Override a password format:
    // pattern: new RegExp('…'),

    // Override password minimal length:
    // min: …
});
```

Optionally, to change an input hint:

1. Open `model/user/roles.js`.
2. Override `inputHint` descriptor property on `password` property like so:

```javascript
User.prototype.getOwnDescriptor('password').inputHint = _("…");
```

## Example

In the branch "[change-the-format-of-the-passwords-of-the-accounts](https://github.com/egovernment/eregistrations-demo/tree/change-the-format-of-the-passwords-of-the-accounts)" of eregistrations-demo :

Change minimal password length to `8` characters.

### Solution

<div id="files" class="diff-view " onclick="window.open('https://github.com/egovernment/eregistrations-demo/compare/change-the-format-of-the-passwords-of-the-accounts...change-the-format-of-the-passwords-of-the-accounts-solution#files')">


<a name="diff-affd7a6cb442a66a25b2c5dc5ed227b0"></a>
<div id="diff-0" class="file js-file js-details-container




             show-inline-notes
           ">
  <div class="file-header" data-path="db.js" data-short-path="affd7a6" data-anchor="diff-affd7a6cb442a66a25b2c5dc5ed227b0">
    <div class="file-actions">
        <span class="show-file-notes">
          <label>
            <input checked="checked" class="js-toggle-file-notes" type="checkbox">
            Show comments
          </label>
        </span>

          <a href="/egovernment/eregistrations-demo/blob/00ceb78fb0c2b0af5db29b9aa7e75724e93a135f/db.js" class="btn btn-sm tooltipped tooltipped-nw" rel="nofollow" aria-label="View the whole file at version 00ceb78 ">View</a>

          <a class="btn-octicon tooltipped tooltipped-nw" href="https://mac.github.com" aria-label="Open this file in GitHub Desktop" data-ga-click="Repository, open with desktop, type:mac">
              <svg aria-hidden="true" class="octicon octicon-device-desktop" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M15 2H1c-.55 0-1 .45-1 1v9c0 .55.45 1 1 1h5.34c-.25.61-.86 1.39-2.34 2h8c-1.48-.61-2.09-1.39-2.34-2H15c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm0 9H1V3h14v8z"></path></svg>
          </a>

    </div>
    <div class="file-info">
        <span class="diffstat tooltipped tooltipped-e" aria-label="6 additions &amp; 0 deletions">6 <span class="block-diff-added"></span><span class="block-diff-added"></span><span class="block-diff-added"></span><span class="block-diff-added"></span><span class="block-diff-added"></span></span>

      <a href="#diff-affd7a6cb442a66a25b2c5dc5ed227b0" class="link-gray-dark" title="db.js">
        db.js
      </a>


    </div>
  </div>

      <div class="data highlight blob-wrapper">
        <table class="diff-table tab-size  " data-tab-size="8">

      <tbody><tr class="js-expandable-line" data-position="0">
    <td class="blob-num blob-num-expandable" colspan="2">
      <a href="#diff-affd7a6cb442a66a25b2c5dc5ed227b0" class="diff-expander js-expand" title="Expand" aria-label="Expand" data-url="/egovernment/eregistrations-demo/blob_excerpt/45f76716e946a8c702f9d2ce2db437ff5e8a8090?diff=unified&amp;in_wiki_context=&amp;left_hunk_size=4&amp;mode=100644&amp;next_line_num_left=4&amp;next_line_num_right=4&amp;path=db.js&amp;prev_line_num_left=&amp;prev_line_num_right=&amp;right_hunk_size=10" data-left-range="1-3" data-right-range="1-3">
        <svg aria-hidden="true" class="octicon octicon-unfold" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M11.5 7.5L14 10c0 .55-.45 1-1 1H9v-1h3.5l-2-2h-7l-2 2H5v1H1c-.55 0-1-.45-1-1l2.5-2.5L0 5c0-.55.45-1 1-1h4v1H1.5l2 2h7l2-2H9V4h4c.55 0 1 .45 1 1l-2.5 2.5zM6 6h2V3h2L7 0 4 3h2v3zm2 3H6v3H4l3 3 3-3H8V9z"></path></svg>
      </a>
    </td>
    <td class="blob-code blob-code-inner blob-code-hunk">@@ -4,4 +4,10 @@</td>
  </tr>

    <tr>
    <td id="diff-affd7a6cb442a66a25b2c5dc5ed227b0L4" data-line-number="4" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-affd7a6cb442a66a25b2c5dc5ed227b0R4" data-line-number="4" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner"> </span>

  </td>
</tr>


    <tr>
    <td id="diff-affd7a6cb442a66a25b2c5dc5ed227b0L5" data-line-number="5" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-affd7a6cb442a66a25b2c5dc5ed227b0R5" data-line-number="5" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner"> <span class="pl-k">var</span> db <span class="pl-k">=</span> <span class="pl-c1">module</span>.<span class="pl-smi">exports</span> <span class="pl-k">=</span> <span class="pl-c1">require</span>(<span class="pl-s"><span class="pl-pds">'</span>eregistrations/db<span class="pl-pds">'</span></span>);</span>

  </td>
</tr>


    <tr>
    <td id="diff-affd7a6cb442a66a25b2c5dc5ed227b0L6" data-line-number="6" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-affd7a6cb442a66a25b2c5dc5ed227b0R6" data-line-number="6" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner"> </span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-affd7a6cb442a66a25b2c5dc5ed227b0R7" data-line-number="7" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+<span class="pl-k">var</span> Password <span class="pl-k">=</span> <span class="pl-c1">require</span>(<span class="pl-s"><span class="pl-pds">'</span>dbjs-ext/string/string-line/password<span class="pl-pds">'</span></span>)(db);</span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-affd7a6cb442a66a25b2c5dc5ed227b0R8" data-line-number="8" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+</span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-affd7a6cb442a66a25b2c5dc5ed227b0R9" data-line-number="9" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+<span class="pl-smi">Password</span>.<span class="pl-en">setProperties</span>({</span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-affd7a6cb442a66a25b2c5dc5ed227b0R10" data-line-number="10" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+ min<span class="pl-k">:</span> <span class="pl-c1">8</span></span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-affd7a6cb442a66a25b2c5dc5ed227b0R11" data-line-number="11" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+});</span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-affd7a6cb442a66a25b2c5dc5ed227b0R12" data-line-number="12" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+</span>

  </td>
</tr>


    <tr>
    <td id="diff-affd7a6cb442a66a25b2c5dc5ed227b0L7" data-line-number="7" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-affd7a6cb442a66a25b2c5dc5ed227b0R13" data-line-number="13" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner"> <span class="pl-smi">db</span>.<span class="pl-smi">locale</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">'</span>en-GB<span class="pl-pds">'</span></span>;</span>

  </td>
</tr>



        </tbody></table>
      </div>

</div>


<a name="diff-9abd234fe54a68a4bbc4bfc9a5048605"></a>
<div id="diff-1" class="file js-file js-details-container




             show-inline-notes
           ">
  <div class="file-header" data-path="model/user/roles.js" data-short-path="9abd234" data-anchor="diff-9abd234fe54a68a4bbc4bfc9a5048605">
    <div class="file-actions">
        <span class="show-file-notes">
          <label>
            <input checked="checked" class="js-toggle-file-notes" type="checkbox">
            Show comments
          </label>
        </span>

          <a href="/egovernment/eregistrations-demo/blob/00ceb78fb0c2b0af5db29b9aa7e75724e93a135f/model/user/roles.js" class="btn btn-sm tooltipped tooltipped-nw" rel="nofollow" aria-label="View the whole file at version 00ceb78 ">View</a>

          <a class="btn-octicon tooltipped tooltipped-nw" href="https://mac.github.com" aria-label="Open this file in GitHub Desktop" data-ga-click="Repository, open with desktop, type:mac">
              <svg aria-hidden="true" class="octicon octicon-device-desktop" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M15 2H1c-.55 0-1 .45-1 1v9c0 .55.45 1 1 1h5.34c-.25.61-.86 1.39-2.34 2h8c-1.48-.61-2.09-1.39-2.34-2H15c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm0 9H1V3h14v8z"></path></svg>
          </a>

    </div>
    <div class="file-info">
        <span class="diffstat tooltipped tooltipped-e" aria-label="6 additions &amp; 2 deletions">8 <span class="block-diff-added"></span><span class="block-diff-added"></span><span class="block-diff-added"></span><span class="block-diff-deleted"></span><span class="block-diff-neutral"></span></span>

      <a href="#diff-9abd234fe54a68a4bbc4bfc9a5048605" class="link-gray-dark" title="model/user/roles.js">
        model/user/roles.js
      </a>


    </div>
  </div>

      <div class="data highlight blob-wrapper">
        <table class="diff-table tab-size  " data-tab-size="8">

      <tbody><tr class="js-expandable-line" data-position="0">
    <td class="blob-num blob-num-expandable" colspan="2">
      <a href="#diff-9abd234fe54a68a4bbc4bfc9a5048605" class="diff-expander js-expand" title="Expand" aria-label="Expand" data-url="/egovernment/eregistrations-demo/blob_excerpt/510de3be2bb3bea81c13b0952194ba28453905e1?diff=unified&amp;in_wiki_context=&amp;left_hunk_size=9&amp;mode=100644&amp;next_line_num_left=3&amp;next_line_num_right=3&amp;path=model%2Fuser%2Froles.js&amp;prev_line_num_left=&amp;prev_line_num_right=&amp;right_hunk_size=10" data-left-range="1-2" data-right-range="1-2">
        <svg aria-hidden="true" class="octicon octicon-unfold" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M11.5 7.5L14 10c0 .55-.45 1-1 1H9v-1h3.5l-2-2h-7l-2 2H5v1H1c-.55 0-1-.45-1-1l2.5-2.5L0 5c0-.55.45-1 1-1h4v1H1.5l2 2h7l2-2H9V4h4c.55 0 1 .45 1 1l-2.5 2.5zM6 6h2V3h2L7 0 4 3h2v3zm2 3H6v3H4l3 3 3-3H8V9z"></path></svg>
      </a>
    </td>
    <td class="blob-code blob-code-inner blob-code-hunk">@@ -3,9 +3,10 @@</td>
  </tr>

    <tr>
    <td id="diff-9abd234fe54a68a4bbc4bfc9a5048605L3" data-line-number="3" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-9abd234fe54a68a4bbc4bfc9a5048605R3" data-line-number="3" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner"> <span class="pl-s"><span class="pl-pds">'</span>use strict<span class="pl-pds">'</span></span>;</span>

  </td>
</tr>


    <tr>
    <td id="diff-9abd234fe54a68a4bbc4bfc9a5048605L4" data-line-number="4" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-9abd234fe54a68a4bbc4bfc9a5048605R4" data-line-number="4" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner"> </span>

  </td>
</tr>


    <tr>
    <td id="diff-9abd234fe54a68a4bbc4bfc9a5048605L5" data-line-number="5" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-9abd234fe54a68a4bbc4bfc9a5048605R5" data-line-number="5" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner"> <span class="pl-k">var</span> _  <span class="pl-k">=</span> <span class="pl-c1">require</span>(<span class="pl-s"><span class="pl-pds">'</span>../../i18n<span class="pl-pds">'</span></span>)</span>

  </td>
</tr>


    <tr>
    <td id="diff-9abd234fe54a68a4bbc4bfc9a5048605L6" data-line-number="6" class="blob-num blob-num-deletion js-linkable-line-number"></td>

    <td class="blob-num blob-num-deletion empty-cell"></td>

  <td class="blob-code blob-code-deletion">

    <span class="blob-code-inner">-  , db <span class="pl-k">=</span> <span class="pl-c1">require</span>(<span class="pl-s"><span class="pl-pds">'</span>../../db<span class="pl-pds">'</span></span>);</span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-9abd234fe54a68a4bbc4bfc9a5048605R6" data-line-number="6" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+  , db <span class="pl-k">=</span> <span class="pl-c1">require</span>(<span class="pl-s"><span class="pl-pds">'</span>../../db<span class="pl-pds">'</span></span>)</span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-9abd234fe54a68a4bbc4bfc9a5048605R7" data-line-number="7" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+  , User;</span>

  </td>
</tr>


    <tr>
    <td id="diff-9abd234fe54a68a4bbc4bfc9a5048605L7" data-line-number="7" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-9abd234fe54a68a4bbc4bfc9a5048605R8" data-line-number="8" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner"> </span>

  </td>
</tr>


    <tr>
    <td id="diff-9abd234fe54a68a4bbc4bfc9a5048605L8" data-line-number="8" class="blob-num blob-num-deletion js-linkable-line-number"></td>

    <td class="blob-num blob-num-deletion empty-cell"></td>

  <td class="blob-code blob-code-deletion">

    <span class="blob-code-inner">-<span class="pl-c1">module</span>.<span class="pl-smi">exports</span> <span class="pl-k">=</span> <span class="pl-c1">require</span>(<span class="pl-s"><span class="pl-pds">'</span>eregistrations/model/user<span class="pl-pds">'</span></span>)(db);</span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-9abd234fe54a68a4bbc4bfc9a5048605R9" data-line-number="9" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+<span class="pl-c1">module</span>.<span class="pl-smi">exports</span> <span class="pl-k">=</span> <span class="x x-first">User </span><span class="pl-k x">=</span><span class="x x-last"> </span><span class="pl-c1">require</span>(<span class="pl-s"><span class="pl-pds">'</span>eregistrations/model/user<span class="pl-pds">'</span></span>)(db);</span>

  </td>
</tr>


    <tr>
    <td id="diff-9abd234fe54a68a4bbc4bfc9a5048605L9" data-line-number="9" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-9abd234fe54a68a4bbc4bfc9a5048605R10" data-line-number="10" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner"> </span>

  </td>
</tr>


    <tr>
    <td id="diff-9abd234fe54a68a4bbc4bfc9a5048605L10" data-line-number="10" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-9abd234fe54a68a4bbc4bfc9a5048605R11" data-line-number="11" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner"> <span class="pl-smi">db</span>.<span class="pl-smi">Role</span>.<span class="pl-smi">members</span>.<span class="pl-c1">add</span>(<span class="pl-s"><span class="pl-pds">'</span>metaAdmin<span class="pl-pds">'</span></span>);</span>

  </td>
</tr>


    <tr>
    <td id="diff-9abd234fe54a68a4bbc4bfc9a5048605L11" data-line-number="11" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-9abd234fe54a68a4bbc4bfc9a5048605R12" data-line-number="12" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner"> <span class="pl-smi">db</span>.<span class="pl-smi">Role</span>.<span class="pl-smi">members</span>.<span class="pl-c1">add</span>(<span class="pl-s"><span class="pl-pds">'</span>user<span class="pl-pds">'</span></span>);</span>

  </td>
</tr>


      <tr class="js-expandable-line" data-position="13">
    <td class="blob-num blob-num-expandable" colspan="2">
      <a href="#diff-9abd234fe54a68a4bbc4bfc9a5048605" class="diff-expander js-expand" title="Expand" aria-label="Expand" data-url="/egovernment/eregistrations-demo/blob_excerpt/510de3be2bb3bea81c13b0952194ba28453905e1?diff=unified&amp;in_wiki_context=&amp;left_hunk_size=3&amp;mode=100644&amp;next_line_num_left=22&amp;next_line_num_right=23&amp;path=model%2Fuser%2Froles.js&amp;prev_line_num_left=11&amp;prev_line_num_right=12&amp;right_hunk_size=6" data-left-range="12-21" data-right-range="13-22">
        <svg aria-hidden="true" class="octicon octicon-unfold" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M11.5 7.5L14 10c0 .55-.45 1-1 1H9v-1h3.5l-2-2h-7l-2 2H5v1H1c-.55 0-1-.45-1-1l2.5-2.5L0 5c0-.55.45-1 1-1h4v1H1.5l2 2h7l2-2H9V4h4c.55 0 1 .45 1 1l-2.5 2.5zM6 6h2V3h2L7 0 4 3h2v3zm2 3H6v3H4l3 3 3-3H8V9z"></path></svg>
      </a>
    </td>
    <td class="blob-code blob-code-inner blob-code-hunk">@@ -22,3 +23,6 @@ db.Role.meta.get('officialRevision').label = _("Revision");</td>
  </tr>

    <tr>
    <td id="diff-9abd234fe54a68a4bbc4bfc9a5048605L22" data-line-number="22" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-9abd234fe54a68a4bbc4bfc9a5048605R23" data-line-number="23" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner"> <span class="pl-smi">db</span>.<span class="pl-smi">Role</span>.<span class="pl-smi">meta</span>.<span class="pl-c1">get</span>(<span class="pl-s"><span class="pl-pds">'</span>officialProcessing<span class="pl-pds">'</span></span>).<span class="pl-c1">label</span> <span class="pl-k">=</span> <span class="pl-en">_</span>(<span class="pl-s"><span class="pl-pds">"</span>Processing<span class="pl-pds">"</span></span>);</span>

  </td>
</tr>


    <tr>
    <td id="diff-9abd234fe54a68a4bbc4bfc9a5048605L23" data-line-number="23" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-9abd234fe54a68a4bbc4bfc9a5048605R24" data-line-number="24" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner"> <span class="pl-smi">db</span>.<span class="pl-smi">Role</span>.<span class="pl-smi">meta</span>.<span class="pl-c1">get</span>(<span class="pl-s"><span class="pl-pds">'</span>officialSocialSecurity<span class="pl-pds">'</span></span>).<span class="pl-c1">label</span> <span class="pl-k">=</span> <span class="pl-en">_</span>(<span class="pl-s"><span class="pl-pds">"</span>Social Security<span class="pl-pds">"</span></span>);</span>

  </td>
</tr>


    <tr>
    <td id="diff-9abd234fe54a68a4bbc4bfc9a5048605L24" data-line-number="24" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-9abd234fe54a68a4bbc4bfc9a5048605R25" data-line-number="25" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner"> <span class="pl-smi">db</span>.<span class="pl-smi">Role</span>.<span class="pl-smi">meta</span>.<span class="pl-c1">get</span>(<span class="pl-s"><span class="pl-pds">'</span>officialFrontDesk<span class="pl-pds">'</span></span>).<span class="pl-c1">label</span> <span class="pl-k">=</span> <span class="pl-en">_</span>(<span class="pl-s"><span class="pl-pds">"</span>Front Desk<span class="pl-pds">"</span></span>);</span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-9abd234fe54a68a4bbc4bfc9a5048605R26" data-line-number="26" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+</span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-9abd234fe54a68a4bbc4bfc9a5048605R27" data-line-number="27" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+<span class="pl-smi">User</span>.<span class="pl-c1">prototype</span>.<span class="pl-en">getOwnDescriptor</span>(<span class="pl-s"><span class="pl-pds">'</span>password<span class="pl-pds">'</span></span>).<span class="pl-smi">inputHint</span> <span class="pl-k">=</span></span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-9abd234fe54a68a4bbc4bfc9a5048605R28" data-line-number="28" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+ <span class="pl-en">_</span>(<span class="pl-s"><span class="pl-pds">"</span>Password must be at least eight characters long.<span class="pl-pds">"</span></span>);</span>

  </td>
</tr>



        </tbody></table>
      </div>

</div>


</div>
