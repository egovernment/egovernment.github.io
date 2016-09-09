---
layout: recipe
permalink: /how-to/change-the-label-of-an-initial-question-of-the-guide/
title: 'Change the label of an initial question of the guide'
category: '1. Part A'
sub-category: 'Determinants'
rate: '1'
number: '122'
introduction-text: ''
introduction-img: '121.png'
prevUrl: 121
nextUrl: 123
done: 'yes'
lang: en
ref: 122
---

1. Open file `model/<business-process-your-service>/fields.js`.
2. Inside `<BusinessProcessYourService>.prototype` definitions, locate the property and change its label.

## Example

**Starting Branch: [change-the-label-of-an-determinant](https://github.com/egovernment/eregistrations-demo/tree/change-the-label-of-an-determinant)**

Change assets label to *"Local assets"*.

### Solution
<div id="files" class="diff-view " onclick="window.open('https://github.com/egovernment/eregistrations-demo/compare/change-the-label-of-an-determinant...change-the-label-of-an-determinant-solution#files')">

<a name="diff-ff865e3a54b66a1c0895c04cc66fa0d4"></a>
<div id="diff-0" class="file js-details-container




             show-inline-notes
           ">
  <div class="file-header" data-path="model/business-process-demo/fields.js">
    <div class="file-actions">
        <span class="show-file-notes">
          <label>
            <input checked="checked" class="js-toggle-file-notes" type="checkbox">
            Show notes
          </label>
        </span>

          <a href="/egovernment/eregistrations-demo/blob/195c930cbc4bc3c66338a9034c065295be76855a/model/business-process-demo/fields.js" class="btn btn-sm tooltipped tooltipped-nw" rel="nofollow" aria-label="View the whole file at version 195c930 ">View</a>

          <a class="btn-octicon tooltipped tooltipped-n" href="https://windows.github.com" aria-label="Open this file in GitHub Desktop" data-ga-click="Repository, open with desktop, type:windows">
              <svg aria-hidden="true" class="octicon octicon-device-desktop" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M15 2H1c-.55 0-1 .45-1 1v9c0 .55.45 1 1 1h5.34c-.25.61-.86 1.39-2.34 2h8c-1.48-.61-2.09-1.39-2.34-2H15c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm0 9H1V3h14v8z"></path></svg>
          </a>

    </div>
    <div class="file-info">
        <span class="diffstat tooltipped tooltipped-e" aria-label="1 addition &amp; 1 deletion">2 <span class="block-diff-added"></span><span class="block-diff-deleted"></span><span class="block-diff-neutral"></span><span class="block-diff-neutral"></span><span class="block-diff-neutral"></span></span>

      <span class="user-select-contain" title="model/business-process-demo/fields.js">
        model/business-process-demo/fields.js
      </span>

    </div>
  </div>

      <div class="data highlight blob-wrapper">
        <table class="diff-table tab-size  " data-tab-size="8">

      <tbody><tr class="js-expandable-line" data-position="0">
    <td class="blob-num blob-num-expandable" colspan="2">
      <a href="#diff-ff865e3a54b66a1c0895c04cc66fa0d4" class="diff-expander js-expand" title="Expand" aria-label="Expand" data-url="/egovernment/eregistrations-demo/blob_excerpt/a4a9861a0767a18b068a4eed1f0f262066dc872f?diff=unified&amp;in_wiki_context=&amp;left_hunk_size=7&amp;mode=100644&amp;next_line_num_left=14&amp;next_line_num_right=14&amp;path=model%2Fbusiness-process-demo%2Ffields.js&amp;prev_line_num_left=&amp;prev_line_num_right=&amp;right_hunk_size=7" data-left-range="1-13" data-right-range="1-13">
        <svg aria-hidden="true" class="octicon octicon-unfold" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path d="M11.5 7.5L14 10c0 .55-.45 1-1 1H9v-1h3.5l-2-2h-7l-2 2H5v1H1c-.55 0-1-.45-1-1l2.5-2.5L0 5c0-.55.45-1 1-1h4v1H1.5l2 2h7l2-2H9V4h4c.55 0 1 .45 1 1l-2.5 2.5zM6 6h2V3h2L7 0 4 3h2v3zm2 3H6v3H4l3 3 3-3H8V9z"></path></svg>
      </a>
    </td>
    <td class="blob-code blob-code-inner blob-code-hunk">@@ -14,7 +14,7 @@ BusinessProcessDemo.prototype.getOwnDescriptor('businessName').required = true;</td>
  </tr>

    <tr>
    <td id="diff-ff865e3a54b66a1c0895c04cc66fa0d4L14" data-line-number="14" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-ff865e3a54b66a1c0895c04cc66fa0d4R14" data-line-number="14" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner"> <span class="pl-smi">BusinessProcessDemo</span>.<span class="pl-c1">prototype</span>.<span class="pl-en">defineProperties</span>({</span>

  </td>
</tr>


    <tr>
    <td id="diff-ff865e3a54b66a1c0895c04cc66fa0d4L15" data-line-number="15" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-ff865e3a54b66a1c0895c04cc66fa0d4R15" data-line-number="15" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner">  assets<span class="pl-k">:</span> {</span>

  </td>
</tr>


    <tr>
    <td id="diff-ff865e3a54b66a1c0895c04cc66fa0d4L16" data-line-number="16" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-ff865e3a54b66a1c0895c04cc66fa0d4R16" data-line-number="16" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner">      type<span class="pl-k">:</span> UsDollar,</span>

  </td>
</tr>


    <tr>
    <td id="diff-ff865e3a54b66a1c0895c04cc66fa0d4L17" data-line-number="17" class="blob-num blob-num-deletion js-linkable-line-number"></td>

    <td class="blob-num blob-num-deletion empty-cell"></td>

  <td class="blob-code blob-code-deletion">

    <span class="blob-code-inner">-     label<span class="pl-k">:</span> <span class="pl-en">_</span>(<span class="pl-s"><span class="pl-pds">"</span><span class="x x-first x-last">Assets</span><span class="pl-pds">"</span></span>),</span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-ff865e3a54b66a1c0895c04cc66fa0d4R17" data-line-number="17" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+     label<span class="pl-k">:</span> <span class="pl-en">_</span>(<span class="pl-s"><span class="pl-pds">"</span><span class="x x-first x-last">Local assets</span><span class="pl-pds">"</span></span>),</span>

  </td>
</tr>


    <tr>
    <td id="diff-ff865e3a54b66a1c0895c04cc66fa0d4L18" data-line-number="18" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-ff865e3a54b66a1c0895c04cc66fa0d4R18" data-line-number="18" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner">      min<span class="pl-k">:</span> <span class="pl-c1">1000</span>,</span>

  </td>
</tr>


    <tr>
    <td id="diff-ff865e3a54b66a1c0895c04cc66fa0d4L19" data-line-number="19" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-ff865e3a54b66a1c0895c04cc66fa0d4R19" data-line-number="19" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner">      step<span class="pl-k">:</span> <span class="pl-c1">1</span>,</span>

  </td>
</tr>


    <tr>
    <td id="diff-ff865e3a54b66a1c0895c04cc66fa0d4L20" data-line-number="20" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-ff865e3a54b66a1c0895c04cc66fa0d4R20" data-line-number="20" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner">      required<span class="pl-k">:</span> <span class="pl-c1">true</span></span>

  </td>
</tr>


  <tr class="js-expandable-line">
   <td class="blob-num blob-num-expandable" colspan="2">
     <a href="#diff-ff865e3a54b66a1c0895c04cc66fa0d4" class="diff-expander js-expand" title="Expand" aria-label="Expand" data-url="/egovernment/eregistrations-demo/blob_excerpt/a4a9861a0767a18b068a4eed1f0f262066dc872f?diff=unified&amp;in_wiki_context=&amp;mode=100644&amp;path=model%2Fbusiness-process-demo%2Ffields.js&amp;prev_line_num_left=20&amp;prev_line_num_right=20" data-left-range="21-35" data-right-range="21-35">
       <svg aria-hidden="true" class="octicon octicon-unfold" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path d="M11.5 7.5L14 10c0 .55-.45 1-1 1H9v-1h3.5l-2-2h-7l-2 2H5v1H1c-.55 0-1-.45-1-1l2.5-2.5L0 5c0-.55.45-1 1-1h4v1H1.5l2 2h7l2-2H9V4h4c.55 0 1 .45 1 1l-2.5 2.5zM6 6h2V3h2L7 0 4 3h2v3zm2 3H6v3H4l3 3 3-3H8V9z"></path></svg>
     </a>
   </td>
   <td class="blob-code blob-code-expandable"></td>
  </tr>

        </tbody></table>
      </div>
</div>

</div>
