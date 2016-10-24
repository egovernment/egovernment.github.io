---
layout: recipe
permalink: /how-to/add-a-special-format-for-a-field/
title: 'Add a special format for a field'
category: '1. Part A'
sub-category: 'Data'
rate: '3'
number: '168'
introduction-text: 'In this recipe we will cover adding custom validation patterns and input masks for fields.'
introduction-img: '168-1.png'
prevUrl: 167
nextUrl: 171
done: 'yes'
lang: en
ref: 168
---

Sometimes we want additional, custom validation and mask for given field. The most common situation is with `StringLine` type fields.
Such customisation may be needed for cases like special formatting of an id document or postal code.

A simple validation can be achieved through `pattern` property on fields descriptor. For the mask of input we use `inputMask` property on fields descriptor.

To setup `pattern` and `inputMask` for a field:

1. Open the file `model/business-process-<your-service>/<file-containing-your-field-definition>.js`.
2. Define `pattern` on the fields descriptor. The pattern can be any regular expression (the validation will automatically make sure that the input value matches your `pattern`).<br>
If you want the input field to reflect the required format of a field, define an `inputMask` property on your fields descriptor. The `8` sign can be replaced by any number and `A` can be replaced by any letter.

## Example

In the branch "[add-a-special-format-for-a-field](https://github.com/egovernment/eregistrations-demo/tree/add-a-special-format-for-a-field)" of eregistrations-demo :

Make `postalCode` accept only the values which consist of two digits followed by `-`, followed by three digits. The `inputMask` shall reflect the pattern.

### Solution

<div id="files" class="diff-view " onclick="window.open('https://github.com/egovernment/eregistrations-demo/compare/add-a-special-format-for-a-field...add-a-special-format-for-a-field-solution#files')">


<a name="diff-eb4cd0deb89b5bb25c5fc0fbf11b7c07"></a>
<div id="diff-0" class="file js-details-container




             show-inline-notes
           ">
  <div class="file-header" data-path="model/lib/address.js">
    <div class="file-actions">
        <span class="show-file-notes">
          <label>
            <input type="checkbox" checked="checked" class="js-toggle-file-notes">
            Show comments
          </label>
        </span>

          <a href="/egovernment/eregistrations-demo/blob/3f195dcc0651f8e557e2468946455b7262657db0/model/lib/address.js" class="btn btn-sm tooltipped tooltipped-nw" rel="nofollow" aria-label="View the whole file at version 3f195dc ">View</a>


    </div>
    <div class="file-info">
        <span class="diffstat tooltipped tooltipped-e" aria-label="4 additions &amp; 1 deletion">5 <span class="block-diff-added"></span><span class="block-diff-added"></span><span class="block-diff-added"></span><span class="block-diff-added"></span><span class="block-diff-deleted"></span></span>

      <span class="user-select-contain" title="model/lib/address.js">
        model/lib/address.js
      </span>

    </div>
  </div>

      <div class="data highlight blob-wrapper">
        <table class="diff-table tab-size  " data-tab-size="8">

      <tbody><tr class="js-expandable-line" data-position="0">
    <td class="blob-num blob-num-expandable" colspan="2">
      <a href="#diff-eb4cd0deb89b5bb25c5fc0fbf11b7c07" class="diff-expander js-expand" title="Expand" aria-label="Expand" data-url="/egovernment/eregistrations-demo/blob_excerpt/b3507b22e0c6cefef46e9b5f147faa517a1fb618?diff=unified&amp;in_wiki_context=&amp;left_hunk_size=5&amp;mode=100644&amp;next_line_num_left=9&amp;next_line_num_right=9&amp;path=model%2Flib%2Faddress.js&amp;prev_line_num_left=&amp;prev_line_num_right=&amp;right_hunk_size=8" data-left-range="1-8" data-right-range="1-8">
        <svg aria-hidden="true" class="octicon octicon-unfold" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path d="M11.5 7.5L14 10c0 .55-.45 1-1 1H9v-1h3.5l-2-2h-7l-2 2H5v1H1c-.55 0-1-.45-1-1l2.5-2.5L0 5c0-.55.45-1 1-1h4v1H1.5l2 2h7l2-2H9V4h4c.55 0 1 .45 1 1l-2.5 2.5zM6 6h2V3h2L7 0 4 3h2v3zm2 3H6v3H4l3 3 3-3H8V9z"></path></svg>
      </a>
    </td>
    <td class="blob-code blob-code-inner blob-code-hunk">@@ -9,5 +9,8 @@ module.exports = db.Object.extend('Address', {</td>
  </tr>

    <tr>
    <td id="diff-eb4cd0deb89b5bb25c5fc0fbf11b7c07L9" data-line-number="9" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-eb4cd0deb89b5bb25c5fc0fbf11b7c07R9" data-line-number="9" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner"> 	country<span class="pl-k">:</span> { type<span class="pl-k">:</span> Country, label<span class="pl-k">:</span> <span class="pl-en">_</span>(<span class="pl-s"><span class="pl-pds">"</span>Country<span class="pl-pds">"</span></span>), required<span class="pl-k">:</span> <span class="pl-c1">true</span> },</span>

  </td>
</tr>


    <tr>
    <td id="diff-eb4cd0deb89b5bb25c5fc0fbf11b7c07L10" data-line-number="10" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-eb4cd0deb89b5bb25c5fc0fbf11b7c07R10" data-line-number="10" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner"> 	city<span class="pl-k">:</span> { type<span class="pl-k">:</span> StringLine, label<span class="pl-k">:</span> <span class="pl-en">_</span>(<span class="pl-s"><span class="pl-pds">"</span>City<span class="pl-pds">"</span></span>), required<span class="pl-k">:</span> <span class="pl-c1">true</span> },</span>

  </td>
</tr>


    <tr>
    <td id="diff-eb4cd0deb89b5bb25c5fc0fbf11b7c07L11" data-line-number="11" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-eb4cd0deb89b5bb25c5fc0fbf11b7c07R11" data-line-number="11" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner"> 	street<span class="pl-k">:</span> { type<span class="pl-k">:</span> StringLine, label<span class="pl-k">:</span> <span class="pl-en">_</span>(<span class="pl-s"><span class="pl-pds">"</span>Street or location<span class="pl-pds">"</span></span>), required<span class="pl-k">:</span> <span class="pl-c1">true</span> },</span>

  </td>
</tr>


    <tr>
    <td id="diff-eb4cd0deb89b5bb25c5fc0fbf11b7c07L12" data-line-number="12" class="blob-num blob-num-deletion js-linkable-line-number"></td>

    <td class="blob-num blob-num-deletion empty-cell"></td>

  <td class="blob-code blob-code-deletion">

    <span class="blob-code-inner">-	postalCode<span class="pl-k">:</span> { type<span class="pl-k">:</span> StringLine, label<span class="pl-k">:</span> <span class="pl-en">_</span>(<span class="pl-s"><span class="pl-pds">"</span>Postal code<span class="pl-pds">"</span></span>), required<span class="pl-k">:</span> <span class="pl-c1">true</span> }</span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-eb4cd0deb89b5bb25c5fc0fbf11b7c07R12" data-line-number="12" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+	postalCode<span class="pl-k">:</span> { type<span class="pl-k">:</span> StringLine, label<span class="pl-k">:</span> <span class="pl-en">_</span>(<span class="pl-s"><span class="pl-pds">"</span>Postal code<span class="pl-pds">"</span></span>),</span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-eb4cd0deb89b5bb25c5fc0fbf11b7c07R13" data-line-number="13" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+		pattern<span class="pl-k">:</span><span class="pl-sr"> <span class="pl-pds">/</span><span class="pl-k">^</span><span class="pl-c1">\d\d</span>-<span class="pl-c1">\d\d\d</span><span class="pl-k">$</span><span class="pl-pds">/</span></span>,</span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-eb4cd0deb89b5bb25c5fc0fbf11b7c07R14" data-line-number="14" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+		inputMask<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>88-888<span class="pl-pds">'</span></span>,</span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-eb4cd0deb89b5bb25c5fc0fbf11b7c07R15" data-line-number="15" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+		required<span class="pl-k">:</span> <span class="pl-c1">true</span> }</span>

  </td>
</tr>


    <tr>
    <td id="diff-eb4cd0deb89b5bb25c5fc0fbf11b7c07L13" data-line-number="13" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-eb4cd0deb89b5bb25c5fc0fbf11b7c07R16" data-line-number="16" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner"> });</span>

  </td>
</tr>



        </tbody></table>
      </div>

</div>


</div>
