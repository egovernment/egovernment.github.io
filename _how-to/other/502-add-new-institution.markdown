---
layout: recipe
permalink: /how-to/add-new-institution/
title: 'Add new institution'
category: '5. Other'
sub-category: ''
rate: '2'
number: '502'
prevUrl: 501
nextUrl: 503
done: 'yes'
lang: en
ref: 502
---

Every institution is defined as a stand alone instance. To add a new institution:

1. In `model/institutions` directory create a new file `<your-institution>.js`.
2. Create a institution instance of a class `eregistrations/model/institution.js`. See the listing below.
3. Add a require to `<your-institution>.js` in `model/institutions/index.js` file.

```javascript
'use strict';

var db = require('../../db')
  , _  = require('../../i18n').bind('Model: Institutions');

module.exports = require('eregistrations/model/institution')(db).newNamed('foo', {
  name: _("Foo"),
  abbr: "…"
});
```

*Note:* The `newNamed` method will create an instance of a class (in this case Institution class). This instance will have a given `id` (equal to the given string) and will be available on global `db` object.

## Example

In the branch "[add-new-institution](https://github.com/egovernment/eregistrations-demo/tree/add-new-institution)" of eregistrations-demo :

Add a *"Ministry of Finance"* institution with abbreviation *"MF"*.

### Solution

<div id="files" class="diff-view " onclick="window.open('https://github.com/egovernment/eregistrations-demo/compare/add-new-institution...add-new-institution-solution#files')">


<a name="diff-16849e3bd0c31bdef113b54cbe47d373"></a>
<div id="diff-0" class="file js-file js-details-container





              show-inline-notes
           ">
  <div class="file-header" data-path="model/institutions/index.js" data-short-path="16849e3" data-anchor="diff-16849e3bd0c31bdef113b54cbe47d373">
    <div class="file-actions">

        <span class="show-file-notes pt-1">
          <label>
            <input checked="checked" class="js-toggle-file-notes" type="checkbox">
            Show comments
          </label>
        </span>

          <a href="/egovernment/eregistrations-demo/blob/e65000ce947cd180cffc1817589b44a4ae392b39/model/institutions/index.js" class="btn btn-sm tooltipped tooltipped-nw" rel="nofollow" aria-label="View the whole file at version e65000c ">View</a>

          <a class="btn-octicon tooltipped tooltipped-nw" href="https://mac.github.com" aria-label="Open this file in GitHub Desktop" data-ga-click="Repository, open with desktop, type:mac">
              <svg aria-hidden="true" class="octicon octicon-device-desktop" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M15 2H1c-.55 0-1 .45-1 1v9c0 .55.45 1 1 1h5.34c-.25.61-.86 1.39-2.34 2h8c-1.48-.61-2.09-1.39-2.34-2H15c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm0 9H1V3h14v8z"></path></svg>
          </a>

    </div>
    <div class="file-info">
        <span class="diffstat tooltipped tooltipped-e" aria-label="2 additions &amp; 0 deletions">2 <span class="block-diff-added"></span><span class="block-diff-added"></span><span class="block-diff-neutral"></span><span class="block-diff-neutral"></span><span class="block-diff-neutral"></span></span>

      <a href="#diff-16849e3bd0c31bdef113b54cbe47d373" class="link-gray-dark" title="model/institutions/index.js">
        model/institutions/index.js
      </a>


    </div>
  </div>
  <div class="js-file-content">

        <div class="data highlight blob-wrapper">
          <table class="diff-table tab-size  " data-tab-size="8">

      <tbody><tr class="js-expandable-line" data-position="0">
    <td class="blob-num blob-num-expandable" colspan="2">
      <a href="#diff-16849e3bd0c31bdef113b54cbe47d373" class="diff-expander js-expand" title="Expand" aria-label="Expand" data-url="/egovernment/eregistrations-demo/blob_excerpt/2165a8644d199200c0686a9c9353ac386d17ed39?diff=unified&amp;in_wiki_context=&amp;left_hunk_size=3&amp;mode=100644&amp;next_line_num_left=3&amp;next_line_num_right=3&amp;path=model%2Finstitutions%2Findex.js&amp;prev_line_num_left=&amp;prev_line_num_right=&amp;right_hunk_size=5" data-left-range="1-2" data-right-range="1-2">
        <svg aria-hidden="true" class="octicon octicon-unfold" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M11.5 7.5L14 10c0 .55-.45 1-1 1H9v-1h3.5l-2-2h-7l-2 2H5v1H1c-.55 0-1-.45-1-1l2.5-2.5L0 5c0-.55.45-1 1-1h4v1H1.5l2 2h7l2-2H9V4h4c.55 0 1 .45 1 1l-2.5 2.5zM6 6h2V3h2L7 0 4 3h2v3zm2 3H6v3H4l3 3 3-3H8V9z"></path></svg>
      </a>
    </td>
    <td class="blob-code blob-code-inner blob-code-hunk">@@ -3,3 +3,5 @@</td>
  </tr>

    <tr>
    <td id="diff-16849e3bd0c31bdef113b54cbe47d373L3" data-line-number="3" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-16849e3bd0c31bdef113b54cbe47d373R3" data-line-number="3" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner"> <span class="pl-s"><span class="pl-pds">'</span>use strict<span class="pl-pds">'</span></span>;</span>

  </td>
</tr>


    <tr>
    <td id="diff-16849e3bd0c31bdef113b54cbe47d373L4" data-line-number="4" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-16849e3bd0c31bdef113b54cbe47d373R4" data-line-number="4" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner"> </span>

  </td>
</tr>


    <tr>
    <td id="diff-16849e3bd0c31bdef113b54cbe47d373L5" data-line-number="5" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-16849e3bd0c31bdef113b54cbe47d373R5" data-line-number="5" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner"> <span class="pl-c1">module</span>.<span class="pl-smi">exports</span> <span class="pl-k">=</span> <span class="pl-c1">require</span>(<span class="pl-s"><span class="pl-pds">'</span>eregistrations/model/institution<span class="pl-pds">'</span></span>)(<span class="pl-c1">require</span>(<span class="pl-s"><span class="pl-pds">'</span>../../db<span class="pl-pds">'</span></span>));</span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-16849e3bd0c31bdef113b54cbe47d373R6" data-line-number="6" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+</span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-16849e3bd0c31bdef113b54cbe47d373R7" data-line-number="7" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+<span class="pl-c1">require</span>(<span class="pl-s"><span class="pl-pds">'</span>./ministry-of-finance<span class="pl-pds">'</span></span>);</span>

  </td>
</tr>



          </tbody></table>
        </div>

  </div>
</div>


<a name="diff-2c7c654e99ac94d5721b662ce803924f"></a>
<div id="diff-1" class="file js-file js-details-container





              show-inline-notes
           ">
  <div class="file-header" data-path="model/institutions/ministry-of-finance.js" data-short-path="2c7c654" data-anchor="diff-2c7c654e99ac94d5721b662ce803924f">
    <div class="file-actions">

        <span class="show-file-notes pt-1">
          <label>
            <input checked="checked" class="js-toggle-file-notes" type="checkbox">
            Show comments
          </label>
        </span>

          <a href="/egovernment/eregistrations-demo/blob/e65000ce947cd180cffc1817589b44a4ae392b39/model/institutions/ministry-of-finance.js" class="btn btn-sm tooltipped tooltipped-nw" rel="nofollow" aria-label="View the whole file at version e65000c ">View</a>

          <a class="btn-octicon tooltipped tooltipped-nw" href="https://mac.github.com" aria-label="Open this file in GitHub Desktop" data-ga-click="Repository, open with desktop, type:mac">
              <svg aria-hidden="true" class="octicon octicon-device-desktop" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M15 2H1c-.55 0-1 .45-1 1v9c0 .55.45 1 1 1h5.34c-.25.61-.86 1.39-2.34 2h8c-1.48-.61-2.09-1.39-2.34-2H15c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm0 9H1V3h14v8z"></path></svg>
          </a>

    </div>
    <div class="file-info">
        <span class="diffstat tooltipped tooltipped-e" aria-label="9 additions &amp; 0 deletions">9 <span class="block-diff-added"></span><span class="block-diff-added"></span><span class="block-diff-added"></span><span class="block-diff-added"></span><span class="block-diff-added"></span></span>

      <a href="#diff-2c7c654e99ac94d5721b662ce803924f" class="link-gray-dark" title="model/institutions/ministry-of-finance.js">
        model/institutions/ministry-of-finance.js
      </a>


    </div>
  </div>
  <div class="js-file-content">

        <div class="data highlight blob-wrapper">
          <table class="diff-table tab-size  " data-tab-size="8">

      <tbody><tr data-position="0">
    <td id="diff-2c7c654e99ac94d5721b662ce803924fL-1" class="blob-num blob-num-hunk non-expandable" data-line-number="..."></td>
    <td id="diff-2c7c654e99ac94d5721b662ce803924fR0" class="blob-num blob-num-hunk non-expandable" data-line-number="..."></td>
    <td class="blob-code blob-code-inner blob-code-hunk">@@ -0,0 +1,9 @@</td>
  </tr>

    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-2c7c654e99ac94d5721b662ce803924fR1" data-line-number="1" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+<span class="pl-s"><span class="pl-pds">'</span>use strict<span class="pl-pds">'</span></span>;</span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-2c7c654e99ac94d5721b662ce803924fR2" data-line-number="2" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+</span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-2c7c654e99ac94d5721b662ce803924fR3" data-line-number="3" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+<span class="pl-k">var</span> db <span class="pl-k">=</span> <span class="pl-c1">require</span>(<span class="pl-s"><span class="pl-pds">'</span>../../db<span class="pl-pds">'</span></span>)</span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-2c7c654e99ac94d5721b662ce803924fR4" data-line-number="4" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+  , _  <span class="pl-k">=</span> <span class="pl-c1">require</span>(<span class="pl-s"><span class="pl-pds">'</span>../../i18n<span class="pl-pds">'</span></span>).<span class="pl-en">bind</span>(<span class="pl-s"><span class="pl-pds">'</span>Model: Institutions<span class="pl-pds">'</span></span>);</span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-2c7c654e99ac94d5721b662ce803924fR5" data-line-number="5" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+</span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-2c7c654e99ac94d5721b662ce803924fR6" data-line-number="6" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+<span class="pl-c1">module</span>.<span class="pl-smi">exports</span> <span class="pl-k">=</span> <span class="pl-c1">require</span>(<span class="pl-s"><span class="pl-pds">'</span>eregistrations/model/institution<span class="pl-pds">'</span></span>)(db).<span class="pl-en">newNamed</span>(<span class="pl-s"><span class="pl-pds">'</span>ministryOfFinance<span class="pl-pds">'</span></span>, {</span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-2c7c654e99ac94d5721b662ce803924fR7" data-line-number="7" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+ name<span class="pl-k">:</span> <span class="pl-en">_</span>(<span class="pl-s"><span class="pl-pds">"</span>Ministry of Finance<span class="pl-pds">"</span></span>),</span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-2c7c654e99ac94d5721b662ce803924fR8" data-line-number="8" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+ abbr<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">"</span>MF<span class="pl-pds">"</span></span></span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-2c7c654e99ac94d5721b662ce803924fR9" data-line-number="9" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+});</span>

  </td>
</tr>



          </tbody></table>
        </div>

  </div>
</div>


</div>
