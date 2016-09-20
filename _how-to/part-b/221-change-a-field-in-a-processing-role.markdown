---
layout: recipe
permalink: /how-to/change-a-field-in-a-processing-role/
title: 'Change a field in a processing role'
category: '2. Part B'
sub-category: 'Processing'
rate: '1'
number: '221'
introduction-text: 'This recipe is about changing some characteristics of a field in the form of a processing step.'
introduction-img: '221.png'
prevUrl: 206
nextUrl: 222
done: ''
lang: en
ref: 221
---

A processing step can be associated with many services. It may be that you want to change something about a field in context of one service but not the other. It can also be that you want to change the field in context of more than one service.

In any case you need to adjust model files associated with a service(s) in context of which you want the change to be applied. In processing steps we either edit fields used in `dataForm` section of the given step

or we edit `dataForm` section of a certificate which is associated with the processing step. Below we cover both scenarios:

When we edit fields belonging to the step (exposed by `dataForm` of the step):

1. Open file `model/<your-service>/processing-steps/<your-step>.js`.
2. Change the field you're after.

When we edit a field on the certificate associated with the processing step:

1. Open file `model/<your-service>/certificate/<your-certificate>.js`.
2. Change the field you're after.

## Example

In the branch "[change-a-field-in-a-processing-role](https://github.com/egovernment/eregistrations-demo/tree/change-a-field-in-a-processing-role)" of eregistrations-demo :

Change the label of the field `sealDate` of the `socialSecurity` processing step of the `BusinessProcessDemo` from *"What is the date of sealing the last certificate?"* to *"What is the date of sealing the first certificate?"*

### Solution

<div id="files" class="diff-view " onclick="window.open('https://github.com/egovernment/eregistrations-demo/compare/change-a-field-in-a-processing-role...change-a-field-in-a-processing-role-solution?#files')">


<a name="diff-745ee05dfb21a9334686e777f1b83960"></a>
<div id="diff-0" class="file js-details-container




             show-inline-notes
           ">
  <div class="file-header" data-path="model/business-process-demo/processing-steps/social-security.js">
    <div class="file-actions">
        <span class="show-file-notes">
          <label>
            <input type="checkbox" checked="checked" class="js-toggle-file-notes">
            Show notes
          </label>
        </span>

          <a href="/egovernment/eregistrations-demo/blob/0e44acd86eee856ffc69b10af12cb4346814c67e/model/business-process-demo/processing-steps/social-security.js" class="btn btn-sm tooltipped tooltipped-nw" rel="nofollow" aria-label="View the whole file at version 0e44acd ">View</a>


    </div>
    <div class="file-info">
        <span class="diffstat tooltipped tooltipped-e" aria-label="1 addition &amp; 1 deletion">2 <span class="block-diff-added"></span><span class="block-diff-deleted"></span><span class="block-diff-neutral"></span><span class="block-diff-neutral"></span><span class="block-diff-neutral"></span></span>

      <span class="user-select-contain" title="model/business-process-demo/processing-steps/social-security.js">
        model/business-process-demo/processing-steps/social-security.js
      </span>

    </div>
  </div>

      <div class="data highlight blob-wrapper">
        <table class="diff-table tab-size  " data-tab-size="8">

      <tbody><tr class="js-expandable-line" data-position="0">
    <td class="blob-num blob-num-expandable" colspan="2">
      <a href="#diff-745ee05dfb21a9334686e777f1b83960" class="diff-expander js-expand" title="Expand" aria-label="Expand" data-url="/egovernment/eregistrations-demo/blob_excerpt/edb79b50f41b001243fefa7fc1501c10afbc35be?diff=unified&amp;in_wiki_context=&amp;left_hunk_size=7&amp;mode=100644&amp;next_line_num_left=22&amp;next_line_num_right=22&amp;path=model%2Fbusiness-process-demo%2Fprocessing-steps%2Fsocial-security.js&amp;prev_line_num_left=&amp;prev_line_num_right=&amp;right_hunk_size=7" data-left-range="1-21" data-right-range="1-21">
        <svg aria-hidden="true" class="octicon octicon-unfold" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path d="M11.5 7.5L14 10c0 .55-.45 1-1 1H9v-1h3.5l-2-2h-7l-2 2H5v1H1c-.55 0-1-.45-1-1l2.5-2.5L0 5c0-.55.45-1 1-1h4v1H1.5l2 2h7l2-2H9V4h4c.55 0 1 .45 1 1l-2.5 2.5zM6 6h2V3h2L7 0 4 3h2v3zm2 3H6v3H4l3 3 3-3H8V9z"></path></svg>
      </a>
    </td>
    <td class="blob-code blob-code-inner blob-code-hunk">@@ -22,7 +22,7 @@ socialSecurityStep.defineProperties({</td>
  </tr>

    <tr>
    <td id="diff-745ee05dfb21a9334686e777f1b83960L22" data-line-number="22" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-745ee05dfb21a9334686e777f1b83960R22" data-line-number="22" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner"> 	},</span>

  </td>
</tr>


    <tr>
    <td id="diff-745ee05dfb21a9334686e777f1b83960L23" data-line-number="23" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-745ee05dfb21a9334686e777f1b83960R23" data-line-number="23" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner"> 	sealDate<span class="pl-k">:</span> {</span>

  </td>
</tr>


    <tr>
    <td id="diff-745ee05dfb21a9334686e777f1b83960L24" data-line-number="24" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-745ee05dfb21a9334686e777f1b83960R24" data-line-number="24" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner"> 		type<span class="pl-k">:</span> DateType,</span>

  </td>
</tr>


    <tr>
    <td id="diff-745ee05dfb21a9334686e777f1b83960L25" data-line-number="25" class="blob-num blob-num-deletion js-linkable-line-number"></td>

    <td class="blob-num blob-num-deletion empty-cell"></td>

  <td class="blob-code blob-code-deletion">

    <span class="blob-code-inner">-		label<span class="pl-k">:</span> <span class="pl-en">_</span>(<span class="pl-s"><span class="pl-pds">"</span>What is the date of sealing the <span class="x x-first x-last">last</span> certificate?<span class="pl-pds">"</span></span>),</span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-745ee05dfb21a9334686e777f1b83960R25" data-line-number="25" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+		label<span class="pl-k">:</span> <span class="pl-en">_</span>(<span class="pl-s"><span class="pl-pds">"</span>What is the date of sealing the <span class="x x-first x-last">first</span> certificate?<span class="pl-pds">"</span></span>),</span>

  </td>
</tr>


    <tr>
    <td id="diff-745ee05dfb21a9334686e777f1b83960L26" data-line-number="26" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-745ee05dfb21a9334686e777f1b83960R26" data-line-number="26" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner"> 		required<span class="pl-k">:</span> <span class="pl-c1">true</span></span>

  </td>
</tr>


    <tr>
    <td id="diff-745ee05dfb21a9334686e777f1b83960L27" data-line-number="27" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-745ee05dfb21a9334686e777f1b83960R27" data-line-number="27" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner"> 	}</span>

  </td>
</tr>


    <tr>
    <td id="diff-745ee05dfb21a9334686e777f1b83960L28" data-line-number="28" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-745ee05dfb21a9334686e777f1b83960R28" data-line-number="28" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner"> });</span>

  </td>
</tr>


  <tr class="js-expandable-line">
   <td class="blob-num blob-num-expandable" colspan="2">
     <a href="#diff-745ee05dfb21a9334686e777f1b83960" class="diff-expander js-expand" title="Expand" aria-label="Expand" data-url="/egovernment/eregistrations-demo/blob_excerpt/edb79b50f41b001243fefa7fc1501c10afbc35be?diff=unified&amp;in_wiki_context=&amp;mode=100644&amp;path=model%2Fbusiness-process-demo%2Fprocessing-steps%2Fsocial-security.js&amp;prev_line_num_left=28&amp;prev_line_num_right=28" data-left-range="29-46" data-right-range="29-46">
       <svg aria-hidden="true" class="octicon octicon-unfold" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path d="M11.5 7.5L14 10c0 .55-.45 1-1 1H9v-1h3.5l-2-2h-7l-2 2H5v1H1c-.55 0-1-.45-1-1l2.5-2.5L0 5c0-.55.45-1 1-1h4v1H1.5l2 2h7l2-2H9V4h4c.55 0 1 .45 1 1l-2.5 2.5zM6 6h2V3h2L7 0 4 3h2v3zm2 3H6v3H4l3 3 3-3H8V9z"></path></svg>
     </a>
   </td>
   <td class="blob-code blob-code-expandable"></td>
  </tr>

        </tbody></table>
      </div>
</div>

</div>
