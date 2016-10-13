---
layout: recipe
permalink: /how-to/add-a-determinant-to-a-requirement/
title: 'Make requirement of registration conditionally required (via determinant)'
category: '1. Part A'
sub-category: 'Requirements'
rate: '2'
number: '147'
introduction-text: 'A requirement is associated with a document or group of documents that needs to be uploaded with the registrations file. Here we will focus on how to make requirement depend on some condition.'
introduction-img: '147.png'
prevUrl: 146
nextUrl: 148
done: 'yes'
lang: en
ref: 147
---

Every requirement should belong to registration, every registration belongs to a service.

So in order to make a requirement depend on a condition you have to first know the registration (and service) to which the requirement belongs.

To make a requirement depend on a condition:

1. Open file `model/<your-service>/registrations/<your-registration>.js`.
2. Modify the `requirements` property so that it returns your requirement in the result array conditionally.

## Example

In the branch "[make-a-conditional-requirement](https://github.com/egovernment/eregistrations-demo/tree/make-a-conditional-requirement)" of eregistrations-demo :

Require *"Business plan"* in case of *"Certificate of incentives"* only when there are at least 6 workers.

### Solution

<div id="files" class="diff-view " onclick="window.open('https://github.com/egovernment/eregistrations-demo/compare/make-a-conditional-requirement...make-a-conditional-requirement-solution#files')">


<a name="diff-3e5b55e60dcc97add7accbbf3f80937b"></a>
<div id="diff-0" class="file js-details-container




             show-inline-notes
           ">
  <div class="file-header" data-path="model/business-process-demo/registrations/certificate-of-incentives.js">
    <div class="file-actions">
        <span class="show-file-notes">
          <label>
            <input type="checkbox" checked="checked" class="js-toggle-file-notes">
            Show notes
          </label>
        </span>

          <a href="/egovernment/eregistrations-demo/blob/48f863265a9bf04623351ef15d4accaca8e201b7/model/business-process-demo/registrations/certificate-of-incentives.js" class="btn btn-sm tooltipped tooltipped-nw" rel="nofollow" aria-label="View the whole file at version 48f8632 ">View</a>


    </div>
    <div class="file-info">
        <span class="diffstat tooltipped tooltipped-e" aria-label="8 additions &amp; 3 deletions">11 <span class="block-diff-added"></span><span class="block-diff-added"></span><span class="block-diff-added"></span><span class="block-diff-deleted"></span><span class="block-diff-neutral"></span></span>

      <span class="user-select-contain" title="model/business-process-demo/registrations/certificate-of-incentives.js">
        model/business-process-demo/registrations/certificate-of-incentives.js
      </span>

    </div>
  </div>

      <div class="data highlight blob-wrapper">
        <table class="diff-table tab-size  " data-tab-size="8">

      <tbody><tr class="js-expandable-line" data-position="0">
    <td class="blob-num blob-num-expandable" colspan="2">
      <a href="#diff-3e5b55e60dcc97add7accbbf3f80937b" class="diff-expander js-expand" title="Expand" aria-label="Expand" data-url="/egovernment/eregistrations-demo/blob_excerpt/e030feabf1049b8274eb58d0b09395dc94eed213?diff=unified&amp;in_wiki_context=&amp;left_hunk_size=8&amp;mode=100644&amp;next_line_num_left=19&amp;next_line_num_right=19&amp;path=model%2Fbusiness-process-demo%2Fregistrations%2Fcertificate-of-incentives.js&amp;prev_line_num_left=&amp;prev_line_num_right=&amp;right_hunk_size=13" data-left-range="1-18" data-right-range="1-18">
        <svg aria-hidden="true" class="octicon octicon-unfold" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path d="M11.5 7.5L14 10c0 .55-.45 1-1 1H9v-1h3.5l-2-2h-7l-2 2H5v1H1c-.55 0-1-.45-1-1l2.5-2.5L0 5c0-.55.45-1 1-1h4v1H1.5l2 2h7l2-2H9V4h4c.55 0 1 .45 1 1l-2.5 2.5zM6 6h2V3h2L7 0 4 3h2v3zm2 3H6v3H4l3 3 3-3H8V9z"></path></svg>
      </a>
    </td>
    <td class="blob-code blob-code-inner blob-code-hunk">@@ -19,8 +19,13 @@ BusinessProcessDemo.prototype.registrations.map.certificateOfIncentives.setPrope</td>
  </tr>

    <tr>
    <td id="diff-3e5b55e60dcc97add7accbbf3f80937bL19" data-line-number="19" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-3e5b55e60dcc97add7accbbf3f80937bR19" data-line-number="19" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner"> 			<span class="pl-v">this</span>.<span class="pl-smi">master</span>.<span class="pl-smi">costs</span>.<span class="pl-smi">map</span>.<span class="pl-smi">certificateOfIncentives</span></span>

  </td>
</tr>


    <tr>
    <td id="diff-3e5b55e60dcc97add7accbbf3f80937bL20" data-line-number="20" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-3e5b55e60dcc97add7accbbf3f80937bR20" data-line-number="20" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner"> 		];</span>

  </td>
</tr>


    <tr>
    <td id="diff-3e5b55e60dcc97add7accbbf3f80937bL21" data-line-number="21" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-3e5b55e60dcc97add7accbbf3f80937bR21" data-line-number="21" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner"> 	},</span>

  </td>
</tr>


    <tr>
    <td id="diff-3e5b55e60dcc97add7accbbf3f80937bL22" data-line-number="22" class="blob-num blob-num-deletion js-linkable-line-number"></td>

    <td class="blob-num blob-num-deletion empty-cell"></td>

  <td class="blob-code blob-code-deletion">

    <span class="blob-code-inner">-	<span class="pl-en">requirements</span><span class="pl-k">:</span> <span class="pl-k">function</span> () {</span>

  </td>
</tr>


    <tr>
    <td id="diff-3e5b55e60dcc97add7accbbf3f80937bL23" data-line-number="23" class="blob-num blob-num-deletion js-linkable-line-number"></td>

    <td class="blob-num blob-num-deletion empty-cell"></td>

  <td class="blob-code blob-code-deletion">

    <span class="blob-code-inner">-		<span class="pl-k">var</span> requirementsMap <span class="pl-k">=</span> <span class="pl-v">this</span>.<span class="pl-smi">master</span>.<span class="pl-smi">requirements</span>.<span class="pl-smi">map</span>;</span>

  </td>
</tr>


    <tr>
    <td id="diff-3e5b55e60dcc97add7accbbf3f80937bL24" data-line-number="24" class="blob-num blob-num-deletion js-linkable-line-number"></td>

    <td class="blob-num blob-num-deletion empty-cell"></td>

  <td class="blob-code blob-code-deletion">

    <span class="blob-code-inner">-		<span class="pl-k">return</span> [<span class="pl-smi">requirementsMap</span>.<span class="pl-smi">companyRegistration</span>, <span class="pl-smi">requirementsMap</span>.<span class="pl-smi">businessPlan</span>];</span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-3e5b55e60dcc97add7accbbf3f80937bR22" data-line-number="22" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+	<span class="pl-en">requirements</span><span class="pl-k">:</span> <span class="pl-k">function</span> (<span class="pl-smi">_observe</span>) {</span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-3e5b55e60dcc97add7accbbf3f80937bR23" data-line-number="23" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+		<span class="pl-k">var</span> requirementsMap <span class="pl-k">=</span> <span class="pl-v">this</span>.<span class="pl-smi">master</span>.<span class="pl-smi">requirements</span>.<span class="pl-smi">map</span>, workers, result <span class="pl-k">=</span> [];</span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-3e5b55e60dcc97add7accbbf3f80937bR24" data-line-number="24" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+		<span class="pl-smi">result</span>.<span class="pl-c1">push</span>(<span class="pl-smi">requirementsMap</span>.<span class="pl-smi">companyRegistration</span>);</span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-3e5b55e60dcc97add7accbbf3f80937bR25" data-line-number="25" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+		workers <span class="pl-k">=</span> <span class="pl-v">this</span>.<span class="pl-smi">_get</span> <span class="pl-k">?</span> <span class="pl-en">_observe</span>(<span class="pl-v">this</span>.<span class="pl-smi">master</span>.<span class="pl-smi">_workers</span>) <span class="pl-k">:</span> <span class="pl-v">this</span>.<span class="pl-smi">master</span>.<span class="pl-smi">workers</span>;</span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-3e5b55e60dcc97add7accbbf3f80937bR26" data-line-number="26" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+		<span class="pl-k">if</span> (workers <span class="pl-k">&gt;</span> <span class="pl-c1">5</span>) {</span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-3e5b55e60dcc97add7accbbf3f80937bR27" data-line-number="27" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+			<span class="pl-smi">result</span>.<span class="pl-c1">push</span>(<span class="pl-smi">requirementsMap</span>.<span class="pl-smi">businessPlan</span>);</span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-3e5b55e60dcc97add7accbbf3f80937bR28" data-line-number="28" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+		}</span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-3e5b55e60dcc97add7accbbf3f80937bR29" data-line-number="29" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+		<span class="pl-k">return</span> result;</span>

  </td>
</tr>


    <tr>
    <td id="diff-3e5b55e60dcc97add7accbbf3f80937bL25" data-line-number="25" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-3e5b55e60dcc97add7accbbf3f80937bR30" data-line-number="30" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner"> 	}</span>

  </td>
</tr>


    <tr>
    <td id="diff-3e5b55e60dcc97add7accbbf3f80937bL26" data-line-number="26" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-3e5b55e60dcc97add7accbbf3f80937bR31" data-line-number="31" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner"> });</span>

  </td>
</tr>



        </tbody></table>
      </div>
</div>

</div>


