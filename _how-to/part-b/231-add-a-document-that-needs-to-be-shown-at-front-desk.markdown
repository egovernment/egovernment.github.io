---
layout: recipe
permalink: /how-to/add-a-document-that-needs-to-be-shown-at-front-desk/
title: 'Mark uploaded document as not needed to be shown at Front Desk'
category: '2. Part B'
sub-category: 'Withdrawal'
rate: '1'
number: '231'
introduction-text: "A common functionality for `frontDesk` step is marking a document for official confirmation. It's about making `frontDesk` officer to confirm that he saw the original of the document."
introduction-img: '231.png'
prevUrl: 223
nextUrl: 241
done: ''
lang: en
ref: 231
---

A Withdrawal processing step also called "Front Desk" (`frontDesk`) is usually the last processing step.

After this step has been processed the whole file is considered closed. Often we want the `frontDesk` official

to confirm that he saw original version of a document uploaded by user in part a (this is default behaviour).

Sometimes we may want to change this, and do not require officer to confirm that he saw the original document.

There is a dedicated view for that action, we just need to adjust the model.

To mark a document as to be not needing confirmation:

1. Open file `model/<your-service>/requirement-uploads.js`.
2. Setup `isFrontDeskApplicable` property of `requirementUpload` to `false` 
(`<YourBusinessProcess>.prototype.requirementUploads.map.<your-requirement-upload>.isFrontDeskApplicable`).

## Example

In the branch "[mark-uploaded-document-as-needed-to-be-shown-at-front-desk](https://github.com/egovernment/eregistrations-demo/tree/mark-uploaded-document-as-needed-to-be-shown-at-front-desk)" of eregistrations-demo :

Set `inventory` `requirementUpload` of Business Process Demo service not to be confirmed by `frontDesk` officer.

### Solution


<div id="files" class="diff-view " onclick="window.open('https://github.com/egovernment/eregistrations-demo/compare/mark-uploaded-document-as-needed-to-be-shown-at-front-desk...mark-uploaded-document-as-needed-to-be-shown-at-front-desk-solution#files')">

        
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

          <a href="/egovernment/eregistrations-demo/blob/b0eebe6cf27f862a809a78f4d07aaffc928a6c77/model/business-process-demo/requirement-uploads.js" class="btn btn-sm tooltipped tooltipped-nw" rel="nofollow" aria-label="View the whole file at version b0eebe6 ">View</a>


    </div>
    <div class="file-info">
        <span class="diffstat tooltipped tooltipped-e" aria-label="4 additions &amp; 0 deletions">4 <span class="block-diff-added"></span><span class="block-diff-added"></span><span class="block-diff-added"></span><span class="block-diff-added"></span><span class="block-diff-neutral"></span></span>

      <span class="user-select-contain" title="model/business-process-demo/requirement-uploads.js">
        model/business-process-demo/requirement-uploads.js
      </span>
      
    </div>
  </div>

      <div class="data highlight blob-wrapper">
        <table class="diff-table tab-size  " data-tab-size="8">
          
      <tbody><tr class="js-expandable-line" data-position="0">
    <td class="blob-num blob-num-expandable" colspan="2">
      <a href="#diff-da564581570d16ba4a104665991c7b46" class="diff-expander js-expand" title="Expand" aria-label="Expand" data-url="/egovernment/eregistrations-demo/blob_excerpt/007302f59e758f859758cc02467f161ccbb7ed61?diff=unified&amp;in_wiki_context=&amp;left_hunk_size=3&amp;mode=100644&amp;next_line_num_left=10&amp;next_line_num_right=10&amp;path=model%2Fbusiness-process-demo%2Frequirement-uploads.js&amp;prev_line_num_left=&amp;prev_line_num_right=&amp;right_hunk_size=7" data-left-range="1-9" data-right-range="1-9">
        <svg aria-hidden="true" class="octicon octicon-unfold" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path d="M11.5 7.5L14 10c0 .55-.45 1-1 1H9v-1h3.5l-2-2h-7l-2 2H5v1H1c-.55 0-1-.45-1-1l2.5-2.5L0 5c0-.55.45-1 1-1h4v1H1.5l2 2h7l2-2H9V4h4c.55 0 1 .45 1 1l-2.5 2.5zM6 6h2V3h2L7 0 4 3h2v3zm2 3H6v3H4l3 3 3-3H8V9z"></path></svg>
      </a>
    </td>
    <td class="blob-code blob-code-inner blob-code-hunk">@@ -10,3 +10,7 @@ module.exports = defineRequirementUploads(BusinessProcessDemo, [</td>
  </tr>

    <tr>
    <td id="diff-da564581570d16ba4a104665991c7b46L10" data-line-number="10" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-da564581570d16ba4a104665991c7b46R10" data-line-number="10" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner"> 	<span class="pl-c1">require</span>(<span class="pl-s"><span class="pl-pds">'</span>../documents/inventory<span class="pl-pds">'</span></span>),</span>

  </td>
</tr>


    <tr>
    <td id="diff-da564581570d16ba4a104665991c7b46L11" data-line-number="11" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-da564581570d16ba4a104665991c7b46R11" data-line-number="11" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner"> 	<span class="pl-c1">require</span>(<span class="pl-s"><span class="pl-pds">'</span>../documents/passport<span class="pl-pds">'</span></span>)</span>

  </td>
</tr>


    <tr>
    <td id="diff-da564581570d16ba4a104665991c7b46L12" data-line-number="12" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-da564581570d16ba4a104665991c7b46R12" data-line-number="12" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner"> ]);</span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-da564581570d16ba4a104665991c7b46R13" data-line-number="13" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+</span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-da564581570d16ba4a104665991c7b46R14" data-line-number="14" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+<span class="pl-k">var</span> requirementUploads <span class="pl-k">=</span> <span class="pl-smi">BusinessProcessDemo</span>.<span class="pl-c1">prototype</span>.<span class="pl-smi">requirementUploads</span>;</span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-da564581570d16ba4a104665991c7b46R15" data-line-number="15" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+</span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-da564581570d16ba4a104665991c7b46R16" data-line-number="16" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+<span class="pl-smi">requirementUploads</span>.<span class="pl-smi">map</span>.<span class="pl-smi">inventory</span>.<span class="pl-smi">isFrontDeskApplicable</span> <span class="pl-k">=</span> <span class="pl-c1">false</span>;</span>

  </td>
</tr>



        </tbody></table>
      </div>
</div>

</div>
