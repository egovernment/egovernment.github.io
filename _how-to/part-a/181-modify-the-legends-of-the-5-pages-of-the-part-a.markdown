---
layout: recipe
permalink: /how-to/modify-the-legends-of-the-5-pages-of-the-part-a/
title: 'Modify the legends of the 5 pages of the Part A'
category: '1. Part A'
sub-category: 'Other'
rate: '3'
number: '181'
introduction-text: ''
introduction-img: '181.png'
prevUrl: 175
nextUrl: 201
done: 'yes'
lang: en
ref: 181
---

Part A pages are common for all systems based on eRegistrations framework and so they are included in the `eregistrations` package. Here is a list:

* [`eregistrations/view/business-process-guide.js`](https://github.com/egovernment/eregistrations/blob/master/view/business-process-guide.js) - *"Guide"* page.
* [`eregistrations/view/business-process-data-forms.js`](https://github.com/egovernment/eregistrations/blob/master/view/business-process-data-forms.js) - *"Fill the form"* page.
* [`eregistrations/view/business-process-documents.js`](https://github.com/egovernment/eregistrations/blob/master/view/business-process-documents.js) - *"Upload the documents"* page.
* [`eregistrations/view/business-process-payment.js`](https://github.com/egovernment/eregistrations/blob/master/view/business-process-payment.js) - *"Pay the fees"* page.
* [`eregistrations/view/business-process-submission-forms.js`](https://github.com/egovernment/eregistrations/blob/master/view/business-process-submission-forms.js) - *"Send file"* page.

Each of those views exports numerous customization endpoints to allow fine-tuning the end system. Page legend, displayed under the page title and before the main content, can be set by overriding `_optionalInfo`. This can be done on per service basis as well as for the whole system. In order to do so, one must first create a view override file, and then, require it in app route configuration file.

View override files are commonly created in `view/<app-name>/` directory, and named using the same name they have in the `eregistrations` package. So, for example, to override *"Fill the form"* view for `Company` service, you need to create a file `view/business-process-company/business-process-data-forms.js`.

1. Create a view override file `view/<business-process-your-service>/business-process-<view-name>.js`.
2. Set `module.exports` to base view: `require('eregistrations/view/business-process-<view-name>')`.
3. Override `module.exports._optionalInfo` function to return the desired content.
4. Require newly created file in app routes configuration file: `apps/<business-process-your-service>/routes.js`.

## Example

In the branch "[modify-the-legends-of-the-5-pages-of-the-part-a](https://github.com/egovernment/eregistrations-demo/tree/modify-the-legends-of-the-5-pages-of-the-part-a)" of eregistrations-demo:

Add a legend to *"Upload the documents"* page that says *"Please make sure that all the scanned documents are readable."*.

### Solution

<div id="files" class="diff-view " onclick="window.open('https://github.com/egovernment/eregistrations-demo/compare/modify-the-legends-of-the-5-pages-of-the-part-a...modify-the-legends-of-the-5-pages-of-the-part-a-solution#files')">


<a name="diff-9f7fb156fbef3919167ccc39157b524c"></a>
<div id="diff-0" class="file js-details-container




             show-inline-notes
           ">
  <div class="file-header" data-path="apps/business-process-demo/routes.js">
    <div class="file-actions">
        <span class="show-file-notes">
          <label>
            <input checked="checked" class="js-toggle-file-notes" type="checkbox">
            Show notes
          </label>
        </span>

          <a href="/egovernment/eregistrations-demo/blob/f36b45650f48503f1afc9e64855033c8e7d7ca45/apps/business-process-demo/routes.js" class="btn btn-sm tooltipped tooltipped-nw" rel="nofollow" aria-label="View the whole file at version f36b456 ">View</a>

          <a class="btn-octicon tooltipped tooltipped-n" href="https://windows.github.com" aria-label="Open this file in GitHub Desktop" data-ga-click="Repository, open with desktop, type:windows">
              <svg aria-hidden="true" class="octicon octicon-device-desktop" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M15 2H1c-.55 0-1 .45-1 1v9c0 .55.45 1 1 1h5.34c-.25.61-.86 1.39-2.34 2h8c-1.48-.61-2.09-1.39-2.34-2H15c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm0 9H1V3h14v8z"></path></svg>
          </a>

    </div>
    <div class="file-info">
        <span class="diffstat tooltipped tooltipped-e" aria-label="1 addition &amp; 0 deletions">1 <span class="block-diff-added"></span><span class="block-diff-neutral"></span><span class="block-diff-neutral"></span><span class="block-diff-neutral"></span><span class="block-diff-neutral"></span></span>

      <span class="user-select-contain" title="apps/business-process-demo/routes.js">
        apps/business-process-demo/routes.js
      </span>

    </div>
  </div>

      <div class="data highlight blob-wrapper">
        <table class="diff-table tab-size  " data-tab-size="8">

      <tbody><tr class="js-expandable-line" data-position="0">
    <td class="blob-num blob-num-expandable" colspan="2">
      <a href="#diff-9f7fb156fbef3919167ccc39157b524c" class="diff-expander js-expand" title="Expand" aria-label="Expand" data-url="/egovernment/eregistrations-demo/blob_excerpt/a58b0087a1952ada534f06176ddcc73bcf6b1b1a?diff=unified&amp;in_wiki_context=&amp;left_hunk_size=5&amp;mode=100644&amp;next_line_num_left=6&amp;next_line_num_right=6&amp;path=apps%2Fbusiness-process-demo%2Froutes.js&amp;prev_line_num_left=&amp;prev_line_num_right=&amp;right_hunk_size=6" data-left-range="1-5" data-right-range="1-5">
        <svg aria-hidden="true" class="octicon octicon-unfold" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path d="M11.5 7.5L14 10c0 .55-.45 1-1 1H9v-1h3.5l-2-2h-7l-2 2H5v1H1c-.55 0-1-.45-1-1l2.5-2.5L0 5c0-.55.45-1 1-1h4v1H1.5l2 2h7l2-2H9V4h4c.55 0 1 .45 1 1l-2.5 2.5zM6 6h2V3h2L7 0 4 3h2v3zm2 3H6v3H4l3 3 3-3H8V9z"></path></svg>
      </a>
    </td>
    <td class="blob-code blob-code-inner blob-code-hunk">@@ -6,5 +6,6 @@ var assign = require('es5-ext/object/assign');</td>
  </tr>

    <tr>
    <td id="diff-9f7fb156fbef3919167ccc39157b524cL6" data-line-number="6" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-9f7fb156fbef3919167ccc39157b524cR6" data-line-number="6" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner"> </span>

  </td>
</tr>


    <tr>
    <td id="diff-9f7fb156fbef3919167ccc39157b524cL7" data-line-number="7" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-9f7fb156fbef3919167ccc39157b524cR7" data-line-number="7" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner"> <span class="pl-c1">require</span>(<span class="pl-s"><span class="pl-pds">'</span>../../view/print-base<span class="pl-pds">'</span></span>);</span>

  </td>
</tr>


    <tr>
    <td id="diff-9f7fb156fbef3919167ccc39157b524cL8" data-line-number="8" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-9f7fb156fbef3919167ccc39157b524cR8" data-line-number="8" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner"> <span class="pl-c1">require</span>(<span class="pl-s"><span class="pl-pds">'</span>../../view/user-base<span class="pl-pds">'</span></span>);</span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-9f7fb156fbef3919167ccc39157b524cR9" data-line-number="9" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+<span class="pl-c1">require</span>(<span class="pl-s"><span class="pl-pds">'</span>../../view/business-process-demo/business-process-documents<span class="pl-pds">'</span></span>);</span>

  </td>
</tr>


    <tr>
    <td id="diff-9f7fb156fbef3919167ccc39157b524cL9" data-line-number="9" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-9f7fb156fbef3919167ccc39157b524cR10" data-line-number="10" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner"> </span>

  </td>
</tr>


    <tr>
    <td id="diff-9f7fb156fbef3919167ccc39157b524cL10" data-line-number="10" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-9f7fb156fbef3919167ccc39157b524cR11" data-line-number="11" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner"> <span class="pl-en">assign</span>(<span class="pl-c1">exports</span>, <span class="pl-c1">require</span>(<span class="pl-s"><span class="pl-pds">'</span>eregistrations/routes/business-process<span class="pl-pds">'</span></span>));</span>

  </td>
</tr>



        </tbody></table>
      </div>
</div>


<a name="diff-ed6e822451c19f6d92923036ff09526f"></a>
<div id="diff-1" class="file js-details-container




             show-inline-notes
           ">
  <div class="file-header" data-path="view/business-process-demo/business-process-documents.js">
    <div class="file-actions">
        <span class="show-file-notes">
          <label>
            <input checked="checked" class="js-toggle-file-notes" type="checkbox">
            Show notes
          </label>
        </span>

          <a href="/egovernment/eregistrations-demo/blob/f36b45650f48503f1afc9e64855033c8e7d7ca45/view/business-process-demo/business-process-documents.js" class="btn btn-sm tooltipped tooltipped-nw" rel="nofollow" aria-label="View the whole file at version f36b456 ">View</a>

          <a class="btn-octicon tooltipped tooltipped-n" href="https://windows.github.com" aria-label="Open this file in GitHub Desktop" data-ga-click="Repository, open with desktop, type:windows">
              <svg aria-hidden="true" class="octicon octicon-device-desktop" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M15 2H1c-.55 0-1 .45-1 1v9c0 .55.45 1 1 1h5.34c-.25.61-.86 1.39-2.34 2h8c-1.48-.61-2.09-1.39-2.34-2H15c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm0 9H1V3h14v8z"></path></svg>
          </a>

    </div>
    <div class="file-info">
        <span class="diffstat tooltipped tooltipped-e" aria-label="9 additions &amp; 0 deletions">9 <span class="block-diff-added"></span><span class="block-diff-added"></span><span class="block-diff-added"></span><span class="block-diff-added"></span><span class="block-diff-added"></span></span>

      <span class="user-select-contain" title="view/business-process-demo/business-process-documents.js">
        view/business-process-demo/business-process-documents.js
      </span>

    </div>
  </div>

      <div class="data highlight blob-wrapper">
        <table class="diff-table tab-size  " data-tab-size="8">

      <tbody><tr data-position="0">
    <td id="diff-ed6e822451c19f6d92923036ff09526fL-1" class="blob-num blob-num-hunk non-expandable" data-line-number="..."></td>
    <td id="diff-ed6e822451c19f6d92923036ff09526fR0" class="blob-num blob-num-hunk non-expandable" data-line-number="..."></td>
    <td class="blob-code blob-code-inner blob-code-hunk">@@ -0,0 +1,9 @@</td>
  </tr>

    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-ed6e822451c19f6d92923036ff09526fR1" data-line-number="1" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+<span class="pl-s"><span class="pl-pds">'</span>use strict<span class="pl-pds">'</span></span>;</span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-ed6e822451c19f6d92923036ff09526fR2" data-line-number="2" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+</span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-ed6e822451c19f6d92923036ff09526fR3" data-line-number="3" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+<span class="pl-k">var</span> _ <span class="pl-k">=</span> <span class="pl-c1">require</span>(<span class="pl-s"><span class="pl-pds">'</span>../../i18n<span class="pl-pds">'</span></span>);</span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-ed6e822451c19f6d92923036ff09526fR4" data-line-number="4" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+</span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-ed6e822451c19f6d92923036ff09526fR5" data-line-number="5" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+<span class="pl-c1">module</span>.<span class="pl-smi">exports</span> <span class="pl-k">=</span> <span class="pl-c1">exports</span> <span class="pl-k">=</span> <span class="pl-c1">require</span>(<span class="pl-s"><span class="pl-pds">'</span>eregistrations/view/business-process-documents<span class="pl-pds">'</span></span>);</span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-ed6e822451c19f6d92923036ff09526fR6" data-line-number="6" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+</span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-ed6e822451c19f6d92923036ff09526fR7" data-line-number="7" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+<span class="pl-c1">exports</span>.<span class="pl-en">_optionalInfo</span> <span class="pl-k">=</span> <span class="pl-k">function</span> () {</span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-ed6e822451c19f6d92923036ff09526fR8" data-line-number="8" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+ <span class="pl-k">return</span> <span class="pl-en">div</span>({ class<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>info-main<span class="pl-pds">'</span></span> }, <span class="pl-en">_</span>(<span class="pl-s"><span class="pl-pds">"</span>Please make sure that all the scanned documents are readable.<span class="pl-pds">"</span></span>));</span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-ed6e822451c19f6d92923036ff09526fR9" data-line-number="9" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+};</span>

  </td>
</tr>



        </tbody></table>
      </div>
</div>

</div>
