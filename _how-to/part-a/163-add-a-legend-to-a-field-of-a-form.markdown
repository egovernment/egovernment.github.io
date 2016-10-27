---
layout: recipe
permalink: /how-to/add-a-legend-for-the-field-of-the-form/
title: 'Add a legend for a field of the form'
category: '1. Part A'
sub-category: 'Data'
rate: '1'
number: '163'
introduction-text: 'This recipe explains how to add and edit the legend text that can be set below each field to give more information to the user filling the form.'
introduction-img: '164.png'
prevUrl: 162
nextUrl: 164
done: 'yes'
lang: en
ref: 163
---

Every field of a file is associated with a service, so to change it's legend, we have to know the service to which it applies. Additionally, fields can be defined in one of two places, as part of a business process or as part of a nested entity (for example branch, legal representative, etc.) of a business process.

**For fields that are part of a business process:**

1. Open file `model/<business-process-your-service>/fields.js`.
2. Locate the property and change its `inputHint`.

**For fields of a nested entity:**

1. Open file `model/<business-process-your-service>/nested-entities/<your-nested-entity>/fields.js`.
2. Locate the property and change its `inputHint`.

## Example

In the branch "[add-legend-for-a-field-of-the-form](https://github.com/egovernment/eregistrations-demo/tree/add-legend-for-a-field-of-the-form)" of eregistrations-demo :

Add the legend (`inputHint`) to the `workers` field of `BusinessProcessDemo` service. The `inputHint` should be *"Employed full time only."*

### Solution

<div id="files" class="diff-view " onclick="window.open('https://github.com/egovernment/eregistrations-demo/compare/add-legend-for-a-field-of-the-form...add-legend-for-a-field-of-the-form-solution#files')">


<a name="diff-ff865e3a54b66a1c0895c04cc66fa0d4"></a>
<div id="diff-0" class="file js-details-container




             show-inline-notes
           ">
  <div class="file-header" data-path="model/business-process-demo/fields.js">
    <div class="file-actions">
        <span class="show-file-notes">
          <label>
            <input type="checkbox" checked="checked" class="js-toggle-file-notes">
            Show notes
          </label>
        </span>

          <a href="/egovernment/eregistrations-demo/blob/b6ae4d4fc3ae540f5b578594e4694d9b889b4036/model/business-process-demo/fields.js" class="btn btn-sm tooltipped tooltipped-nw" rel="nofollow" aria-label="View the whole file at version b6ae4d4 ">View</a>


    </div>
    <div class="file-info">
        <span class="diffstat tooltipped tooltipped-e" aria-label="1 addition &amp; 0 deletions">1 <span class="block-diff-added"></span><span class="block-diff-neutral"></span><span class="block-diff-neutral"></span><span class="block-diff-neutral"></span><span class="block-diff-neutral"></span></span>

      <span class="user-select-contain" title="model/business-process-demo/fields.js">
        model/business-process-demo/fields.js
      </span>

    </div>
  </div>

      <div class="data highlight blob-wrapper">
        <table class="diff-table tab-size  " data-tab-size="8">

      <tbody><tr class="js-expandable-line" data-position="0">
    <td class="blob-num blob-num-expandable" colspan="2">
      <a href="#diff-ff865e3a54b66a1c0895c04cc66fa0d4" class="diff-expander js-expand" title="Expand" aria-label="Expand" data-url="/egovernment/eregistrations-demo/blob_excerpt/4aa7a4e49e0f5c835888a27483a6c5ce6bd6f52e?diff=unified&amp;in_wiki_context=&amp;left_hunk_size=6&amp;mode=100644&amp;next_line_num_left=22&amp;next_line_num_right=22&amp;path=model%2Fbusiness-process-demo%2Ffields.js&amp;prev_line_num_left=&amp;prev_line_num_right=&amp;right_hunk_size=7" data-left-range="1-21" data-right-range="1-21">
        <svg aria-hidden="true" class="octicon octicon-unfold" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path d="M11.5 7.5L14 10c0 .55-.45 1-1 1H9v-1h3.5l-2-2h-7l-2 2H5v1H1c-.55 0-1-.45-1-1l2.5-2.5L0 5c0-.55.45-1 1-1h4v1H1.5l2 2h7l2-2H9V4h4c.55 0 1 .45 1 1l-2.5 2.5zM6 6h2V3h2L7 0 4 3h2v3zm2 3H6v3H4l3 3 3-3H8V9z"></path></svg>
      </a>
    </td>
    <td class="blob-code blob-code-inner blob-code-hunk">@@ -22,6 +22,7 @@ BusinessProcessDemo.prototype.defineProperties({</td>
  </tr>

    <tr>
    <td id="diff-ff865e3a54b66a1c0895c04cc66fa0d4L22" data-line-number="22" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-ff865e3a54b66a1c0895c04cc66fa0d4R22" data-line-number="22" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner"> 	workers<span class="pl-k">:</span> {</span>

  </td>
</tr>


    <tr>
    <td id="diff-ff865e3a54b66a1c0895c04cc66fa0d4L23" data-line-number="23" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-ff865e3a54b66a1c0895c04cc66fa0d4R23" data-line-number="23" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner"> 		type<span class="pl-k">:</span> UInteger,</span>

  </td>
</tr>


    <tr>
    <td id="diff-ff865e3a54b66a1c0895c04cc66fa0d4L24" data-line-number="24" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-ff865e3a54b66a1c0895c04cc66fa0d4R24" data-line-number="24" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner"> 		label<span class="pl-k">:</span> <span class="pl-en">_</span>(<span class="pl-s"><span class="pl-pds">"</span>Number of employees<span class="pl-pds">"</span></span>),</span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-ff865e3a54b66a1c0895c04cc66fa0d4R25" data-line-number="25" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+		inputHint<span class="pl-k">:</span> <span class="pl-en">_</span>(<span class="pl-s"><span class="pl-pds">"</span>Employed full time only.<span class="pl-pds">"</span></span>),</span>

  </td>
</tr>


    <tr>
    <td id="diff-ff865e3a54b66a1c0895c04cc66fa0d4L25" data-line-number="25" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-ff865e3a54b66a1c0895c04cc66fa0d4R26" data-line-number="26" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner"> 		max<span class="pl-k">:</span> <span class="pl-c1">100</span></span>

  </td>
</tr>


    <tr>
    <td id="diff-ff865e3a54b66a1c0895c04cc66fa0d4L26" data-line-number="26" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-ff865e3a54b66a1c0895c04cc66fa0d4R27" data-line-number="27" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner"> 	},</span>

  </td>
</tr>


    <tr>
    <td id="diff-ff865e3a54b66a1c0895c04cc66fa0d4L27" data-line-number="27" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-ff865e3a54b66a1c0895c04cc66fa0d4R28" data-line-number="28" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner"> 	address<span class="pl-k">:</span> {</span>

  </td>
</tr>


  <tr class="js-expandable-line">
   <td class="blob-num blob-num-expandable" colspan="2">
     <a href="#diff-ff865e3a54b66a1c0895c04cc66fa0d4" class="diff-expander js-expand" title="Expand" aria-label="Expand" data-url="/egovernment/eregistrations-demo/blob_excerpt/4aa7a4e49e0f5c835888a27483a6c5ce6bd6f52e?diff=unified&amp;in_wiki_context=&amp;mode=100644&amp;path=model%2Fbusiness-process-demo%2Ffields.js&amp;prev_line_num_left=27&amp;prev_line_num_right=28" data-left-range="28-36" data-right-range="29-36">
       <svg aria-hidden="true" class="octicon octicon-unfold" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path d="M11.5 7.5L14 10c0 .55-.45 1-1 1H9v-1h3.5l-2-2h-7l-2 2H5v1H1c-.55 0-1-.45-1-1l2.5-2.5L0 5c0-.55.45-1 1-1h4v1H1.5l2 2h7l2-2H9V4h4c.55 0 1 .45 1 1l-2.5 2.5zM6 6h2V3h2L7 0 4 3h2v3zm2 3H6v3H4l3 3 3-3H8V9z"></path></svg>
     </a>
   </td>
   <td class="blob-code blob-code-expandable"></td>
  </tr>

        </tbody></table>
      </div>
</div>

</div>
