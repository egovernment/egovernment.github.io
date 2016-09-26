---
layout: recipe
permalink: /how-to/add-a-legend-to-the-requirement-in-the-doc-page/
title: 'Add a legend to the requirement upload in the documents page'
category: '1. Part A'
sub-category: 'Requirements'
rate: '2'
number: '144'
introduction-text: 'In this recipe we will add an additional explanation to a form of a document uploaded by end user.'
introduction-img: '144-1.png'
prevUrl: 143
nextUrl: 145
done: 'yes'
lang: en
ref: 143
---

A requirement upload is a document that the end user needs to upload in the documents section of part a.

Every requirement upload is associated with one document. Every requirement upload belongs to a registration.

By default the requirement upload gets it's label from a document upon which it is built.

To change this default:

1. Open file `model/<business-process-your-service>/requirement-uploads.js`.
2. Locate the array passed to `eregistrations/model/business-process-new/utils/define-requirement-uploads` helper function.
3. In the array locate the entry where the document associated with your requirement upload is required (e.g. `require('../documents/passport')`).
4. Modify the entry so that in the end you have a hash with `legend` and `class` properties. The value of the hash's `legend` should be your desired name, and the `class` property's value should be the document class (e.g. `{ class: require('../documents/passport'), legend: "My legend" }`).

---

## Example

In the branch "[add-a-legend-to-requirement-upload](https://github.com/egovernment/eregistrations-demo/tree/add-a-legend-to-requirement-upload-solution)" of eregistrations-demo :

Add a legend *"Must be up to date with the national registry."* to the *"Company registration"* document.

### Solution

<div id="files" class="diff-view " onclick="window.open('https://github.com/egovernment/eregistrations-demo/compare/add-a-legend-to-requirement-upload...add-a-legend-to-requirement-upload-solution#files')">


<a name="diff-da564581570d16ba4a104665991c7b46"></a>
<div id="diff-0" class="file js-details-container




             show-inline-notes
           ">
  <div class="file-header" data-path="model/business-process-demo/requirement-uploads.js">
    <div class="file-actions">
        <span class="show-file-notes">
          <label>
            <input type="checkbox" checked="checked" class="js-toggle-file-notes">
            Show notes
          </label>
        </span>

          <a href="/egovernment/eregistrations-demo/blob/3550d065840b04b5aab36a3aaac6ed4e9c385380/model/business-process-demo/requirement-uploads.js" class="btn btn-sm tooltipped tooltipped-nw" rel="nofollow" aria-label="View the whole file at version 3550d06 ">View</a>


    </div>
    <div class="file-info">
        <span class="diffstat tooltipped tooltipped-e" aria-label="6 additions &amp; 2 deletions">8 <span class="block-diff-added"></span><span class="block-diff-added"></span><span class="block-diff-added"></span><span class="block-diff-deleted"></span><span class="block-diff-neutral"></span></span>

      <span class="user-select-contain" title="model/business-process-demo/requirement-uploads.js">
        model/business-process-demo/requirement-uploads.js
      </span>

    </div>
  </div>

      <div class="data highlight blob-wrapper">
        <table class="diff-table tab-size  " data-tab-size="8">

      <tbody><tr class="js-expandable-line" data-position="0">
    <td class="blob-num blob-num-expandable" colspan="2">
      <a href="#diff-da564581570d16ba4a104665991c7b46" class="diff-expander js-expand" title="Expand" aria-label="Expand" data-url="/egovernment/eregistrations-demo/blob_excerpt/83d3d519415236e5a4b56e9e92231cd66faee12a?diff=unified&amp;in_wiki_context=&amp;left_hunk_size=11&amp;mode=100644&amp;next_line_num_left=2&amp;next_line_num_right=2&amp;path=model%2Fbusiness-process-demo%2Frequirement-uploads.js&amp;prev_line_num_left=&amp;prev_line_num_right=&amp;right_hunk_size=15" data-left-range="1-1" data-right-range="1-1">
        <svg aria-hidden="true" class="octicon octicon-unfold" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path d="M11.5 7.5L14 10c0 .55-.45 1-1 1H9v-1h3.5l-2-2h-7l-2 2H5v1H1c-.55 0-1-.45-1-1l2.5-2.5L0 5c0-.55.45-1 1-1h4v1H1.5l2 2h7l2-2H9V4h4c.55 0 1 .45 1 1l-2.5 2.5zM6 6h2V3h2L7 0 4 3h2v3zm2 3H6v3H4l3 3 3-3H8V9z"></path></svg>
      </a>
    </td>
    <td class="blob-code blob-code-inner blob-code-hunk">@@ -2,11 +2,15 @@</td>
  </tr>

    <tr>
    <td id="diff-da564581570d16ba4a104665991c7b46L2" data-line-number="2" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-da564581570d16ba4a104665991c7b46R2" data-line-number="2" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner"> </span>

  </td>
</tr>


    <tr>
    <td id="diff-da564581570d16ba4a104665991c7b46L3" data-line-number="3" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-da564581570d16ba4a104665991c7b46R3" data-line-number="3" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner"> <span class="pl-k">var</span> BusinessProcessDemo <span class="pl-k">=</span> <span class="pl-c1">require</span>(<span class="pl-s"><span class="pl-pds">'</span>./base<span class="pl-pds">'</span></span>);</span>

  </td>
</tr>


    <tr>
    <td id="diff-da564581570d16ba4a104665991c7b46L4" data-line-number="4" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-da564581570d16ba4a104665991c7b46R4" data-line-number="4" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner"> <span class="pl-k">var</span> defineRequirementUploads <span class="pl-k">=</span></span>

  </td>
</tr>


    <tr>
    <td id="diff-da564581570d16ba4a104665991c7b46L5" data-line-number="5" class="blob-num blob-num-deletion js-linkable-line-number"></td>

    <td class="blob-num blob-num-deletion empty-cell"></td>

  <td class="blob-code blob-code-deletion">

    <span class="blob-code-inner">-	<span class="pl-c1">require</span>(<span class="pl-s"><span class="pl-pds">'</span>eregistrations/model/business-process-new/utils/define-requirement-uploads<span class="pl-pds">'</span></span>);</span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-da564581570d16ba4a104665991c7b46R5" data-line-number="5" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+	<span class="pl-c1">require</span>(<span class="pl-s"><span class="pl-pds">'</span>eregistrations/model/business-process-new/utils/define-requirement-uploads<span class="pl-pds">'</span></span>)</span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-da564581570d16ba4a104665991c7b46R6" data-line-number="6" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+  , _                        <span class="pl-k">=</span> <span class="pl-c1">require</span>(<span class="pl-s"><span class="pl-pds">"</span>../../i18n<span class="pl-pds">"</span></span>).<span class="pl-en">bind</span>(<span class="pl-s"><span class="pl-pds">"</span>Requirement uploads<span class="pl-pds">"</span></span>);</span>

  </td>
</tr>


    <tr>
    <td id="diff-da564581570d16ba4a104665991c7b46L6" data-line-number="6" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-da564581570d16ba4a104665991c7b46R7" data-line-number="7" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner"> </span>

  </td>
</tr>


    <tr>
    <td id="diff-da564581570d16ba4a104665991c7b46L7" data-line-number="7" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-da564581570d16ba4a104665991c7b46R8" data-line-number="8" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner"> <span class="pl-c1">module</span>.<span class="pl-smi">exports</span> <span class="pl-k">=</span> <span class="pl-en">defineRequirementUploads</span>(BusinessProcessDemo, [</span>

  </td>
</tr>


    <tr>
    <td id="diff-da564581570d16ba4a104665991c7b46L8" data-line-number="8" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-da564581570d16ba4a104665991c7b46R9" data-line-number="9" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner"> 	<span class="pl-c1">require</span>(<span class="pl-s"><span class="pl-pds">'</span>../documents/business-plan<span class="pl-pds">'</span></span>),</span>

  </td>
</tr>


    <tr>
    <td id="diff-da564581570d16ba4a104665991c7b46L9" data-line-number="9" class="blob-num blob-num-deletion js-linkable-line-number"></td>

    <td class="blob-num blob-num-deletion empty-cell"></td>

  <td class="blob-code blob-code-deletion">

    <span class="blob-code-inner">-	<span class="pl-c1">require</span>(<span class="pl-s"><span class="pl-pds">'</span>../documents/company-registration<span class="pl-pds">'</span></span>),</span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-da564581570d16ba4a104665991c7b46R10" data-line-number="10" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+	{</span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-da564581570d16ba4a104665991c7b46R11" data-line-number="11" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+		class<span class="pl-k">:</span> <span class="pl-c1">require</span>(<span class="pl-s"><span class="pl-pds">'</span>../documents/company-registration<span class="pl-pds">'</span></span>),</span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-da564581570d16ba4a104665991c7b46R12" data-line-number="12" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+		legend<span class="pl-k">:</span> <span class="pl-en">_</span>(<span class="pl-s"><span class="pl-pds">"</span>Must be up to date with the national registry.<span class="pl-pds">"</span></span>)</span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-da564581570d16ba4a104665991c7b46R13" data-line-number="13" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+	},</span>

  </td>
</tr>


    <tr>
    <td id="diff-da564581570d16ba4a104665991c7b46L10" data-line-number="10" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-da564581570d16ba4a104665991c7b46R14" data-line-number="14" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner"> 	<span class="pl-c1">require</span>(<span class="pl-s"><span class="pl-pds">'</span>../documents/inventory<span class="pl-pds">'</span></span>),</span>

  </td>
</tr>


    <tr>
    <td id="diff-da564581570d16ba4a104665991c7b46L11" data-line-number="11" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-da564581570d16ba4a104665991c7b46R15" data-line-number="15" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner"> 	<span class="pl-c1">require</span>(<span class="pl-s"><span class="pl-pds">'</span>../documents/passport<span class="pl-pds">'</span></span>)</span>

  </td>
</tr>


    <tr>
    <td id="diff-da564581570d16ba4a104665991c7b46L12" data-line-number="12" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-da564581570d16ba4a104665991c7b46R16" data-line-number="16" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner"> ]);</span>

  </td>
</tr>



        </tbody></table>
      </div>
</div>

</div>
