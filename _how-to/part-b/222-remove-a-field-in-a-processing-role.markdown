---
layout: recipe
permalink: /how-to/remove-a-field-in-a-processing-role/
title: 'Remove a field in a processing role'
category: '2. Part B'
sub-category: 'Processing'
rate: '1'
number: '222'
introduction-text: 'This recipe is about removing a field from the form of a processing step.'
introduction-img: '222.png'
prevUrl: 221
nextUrl: 223
done: 'yes'
lang: en
ref: 222
published: false
---

A processing step can be associated with many services. It may be that you want to remove a field in context of one service but not the other. It can also be that you want to remove the field in context of more than one service.

In any case you need to adjust model files as well as section files associated with a service(s) in context of which you want the change to be applied.

1. Open file `model/<your-service>/processing-steps/<your-step>.js`.
2. Remove the field from the model definition.
3. Remove the field name from the `propertyNames` property of steps section (defined as `dataForm` on a step model).

## Example

In the branch "[remove-a-field-in-a-processing-role](https://github.com/egovernment/eregistrations-demo/tree/remove-a-field-in-a-processing-role)" of eregistrations-demo :

Remove a `sealDate` field from `socialSecurity` processing step of the `BusinessProcessDemo` service.

### Solution

<div id="files" class="diff-view " onclick="window.open('https://github.com/egovernment/eregistrations-demo/compare/remove-a-field-in-a-processing-role...remove-a-field-in-a-processing-role-solution#files')">


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

          <a href="/egovernment/eregistrations-demo/blob/d73a82833789bdf27adb08425cf08467571cbf9d/model/business-process-demo/processing-steps/social-security.js" class="btn btn-sm tooltipped tooltipped-nw" rel="nofollow" aria-label="View the whole file at version d73a828 ">View</a>


    </div>
    <div class="file-info">
        <span class="diffstat tooltipped tooltipped-e" aria-label="1 addition &amp; 7 deletions">8 <span class="block-diff-deleted"></span><span class="block-diff-deleted"></span><span class="block-diff-deleted"></span><span class="block-diff-deleted"></span><span class="block-diff-neutral"></span></span>

      <span class="user-select-contain" title="model/business-process-demo/processing-steps/social-security.js">
        model/business-process-demo/processing-steps/social-security.js
      </span>

    </div>
  </div>

      <div class="data highlight blob-wrapper">
        <table class="diff-table tab-size  " data-tab-size="8">

      <tbody><tr class="js-expandable-line" data-position="0">
    <td class="blob-num blob-num-expandable" colspan="2">
      <a href="#diff-745ee05dfb21a9334686e777f1b83960" class="diff-expander js-expand" title="Expand" aria-label="Expand" data-url="/egovernment/eregistrations-demo/blob_excerpt/6f2a94cb04692b9935eb38f562d476e8a7d0d454?diff=unified&amp;in_wiki_context=&amp;left_hunk_size=7&amp;mode=100644&amp;next_line_num_left=5&amp;next_line_num_right=5&amp;path=model%2Fbusiness-process-demo%2Fprocessing-steps%2Fsocial-security.js&amp;prev_line_num_left=&amp;prev_line_num_right=&amp;right_hunk_size=6" data-left-range="1-4" data-right-range="1-4">
        <svg aria-hidden="true" class="octicon octicon-unfold" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path d="M11.5 7.5L14 10c0 .55-.45 1-1 1H9v-1h3.5l-2-2h-7l-2 2H5v1H1c-.55 0-1-.45-1-1l2.5-2.5L0 5c0-.55.45-1 1-1h4v1H1.5l2 2h7l2-2H9V4h4c.55 0 1 .45 1 1l-2.5 2.5zM6 6h2V3h2L7 0 4 3h2v3zm2 3H6v3H4l3 3 3-3H8V9z"></path></svg>
      </a>
    </td>
    <td class="blob-code blob-code-inner blob-code-hunk">@@ -5,7 +5,6 @@ var db                  = require('../../../db')</td>
  </tr>

    <tr>
    <td id="diff-745ee05dfb21a9334686e777f1b83960L5" data-line-number="5" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-745ee05dfb21a9334686e777f1b83960R5" data-line-number="5" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner">   , ProcessingStep      <span class="pl-k">=</span> <span class="pl-c1">require</span>(<span class="pl-s"><span class="pl-pds">'</span>eregistrations/model/processing-step<span class="pl-pds">'</span></span>)(db)</span>

  </td>
</tr>


    <tr>
    <td id="diff-745ee05dfb21a9334686e777f1b83960L6" data-line-number="6" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-745ee05dfb21a9334686e777f1b83960R6" data-line-number="6" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner">   , BusinessProcessDemo <span class="pl-k">=</span> <span class="pl-c1">require</span>(<span class="pl-s"><span class="pl-pds">'</span>./base<span class="pl-pds">'</span></span>)</span>

  </td>
</tr>


    <tr>
    <td id="diff-745ee05dfb21a9334686e777f1b83960L7" data-line-number="7" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-745ee05dfb21a9334686e777f1b83960R7" data-line-number="7" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner">   , FormSection         <span class="pl-k">=</span> <span class="pl-c1">require</span>(<span class="pl-s"><span class="pl-pds">'</span>eregistrations/model/form-section<span class="pl-pds">'</span></span>)(db)</span>

  </td>
</tr>


    <tr>
    <td id="diff-745ee05dfb21a9334686e777f1b83960L8" data-line-number="8" class="blob-num blob-num-deletion js-linkable-line-number"></td>

    <td class="blob-num blob-num-deletion empty-cell"></td>

  <td class="blob-code blob-code-deletion">

    <span class="blob-code-inner">-  , DateType            <span class="pl-k">=</span> <span class="pl-c1">require</span>(<span class="pl-s"><span class="pl-pds">'</span>dbjs-ext/date-time/date<span class="pl-pds">'</span></span>)(db)</span>

  </td>
</tr>


    <tr>
    <td id="diff-745ee05dfb21a9334686e777f1b83960L9" data-line-number="9" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-745ee05dfb21a9334686e777f1b83960R8" data-line-number="8" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner">   , socialSecurityStep;</span>

  </td>
</tr>


    <tr>
    <td id="diff-745ee05dfb21a9334686e777f1b83960L10" data-line-number="10" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-745ee05dfb21a9334686e777f1b83960R9" data-line-number="9" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner"> </span>

  </td>
</tr>


    <tr>
    <td id="diff-745ee05dfb21a9334686e777f1b83960L11" data-line-number="11" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-745ee05dfb21a9334686e777f1b83960R10" data-line-number="10" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner"> <span class="pl-smi">BusinessProcessDemo</span>.<span class="pl-c1">prototype</span>.<span class="pl-smi">processingSteps</span>.<span class="pl-smi">map</span>.<span class="pl-en">defineProperties</span>({</span>

  </td>
</tr>


      <tr class="js-expandable-line" data-position="8">
    <td class="blob-num blob-num-expandable" colspan="2">
      <a href="#diff-745ee05dfb21a9334686e777f1b83960" class="diff-expander js-expand" title="Expand" aria-label="Expand" data-url="/egovernment/eregistrations-demo/blob_excerpt/6f2a94cb04692b9935eb38f562d476e8a7d0d454?diff=unified&amp;in_wiki_context=&amp;left_hunk_size=11&amp;mode=100644&amp;next_line_num_left=19&amp;next_line_num_right=18&amp;path=model%2Fbusiness-process-demo%2Fprocessing-steps%2Fsocial-security.js&amp;prev_line_num_left=11&amp;prev_line_num_right=10&amp;right_hunk_size=6" data-left-range="12-18" data-right-range="11-17">
        <svg aria-hidden="true" class="octicon octicon-unfold" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path d="M11.5 7.5L14 10c0 .55-.45 1-1 1H9v-1h3.5l-2-2h-7l-2 2H5v1H1c-.55 0-1-.45-1-1l2.5-2.5L0 5c0-.55.45-1 1-1h4v1H1.5l2 2h7l2-2H9V4h4c.55 0 1 .45 1 1l-2.5 2.5zM6 6h2V3h2L7 0 4 3h2v3zm2 3H6v3H4l3 3 3-3H8V9z"></path></svg>
      </a>
    </td>
    <td class="blob-code blob-code-inner blob-code-hunk">@@ -19,11 +18,6 @@ socialSecurityStep.defineProperties({</td>
  </tr>

    <tr>
    <td id="diff-745ee05dfb21a9334686e777f1b83960L19" data-line-number="19" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-745ee05dfb21a9334686e777f1b83960R18" data-line-number="18" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner"> 		type<span class="pl-k">:</span> <span class="pl-smi">db</span>.<span class="pl-smi">Boolean</span>,</span>

  </td>
</tr>


    <tr>
    <td id="diff-745ee05dfb21a9334686e777f1b83960L20" data-line-number="20" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-745ee05dfb21a9334686e777f1b83960R19" data-line-number="19" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner"> 		label<span class="pl-k">:</span> <span class="pl-en">_</span>(<span class="pl-s"><span class="pl-pds">"</span>Are the seals of the certificates confirmed?<span class="pl-pds">"</span></span>),</span>

  </td>
</tr>


    <tr>
    <td id="diff-745ee05dfb21a9334686e777f1b83960L21" data-line-number="21" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-745ee05dfb21a9334686e777f1b83960R20" data-line-number="20" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner"> 		required<span class="pl-k">:</span> <span class="pl-c1">true</span></span>

  </td>
</tr>


    <tr>
    <td id="diff-745ee05dfb21a9334686e777f1b83960L22" data-line-number="22" class="blob-num blob-num-deletion js-linkable-line-number"></td>

    <td class="blob-num blob-num-deletion empty-cell"></td>

  <td class="blob-code blob-code-deletion">

    <span class="blob-code-inner">-	},</span>

  </td>
</tr>


    <tr>
    <td id="diff-745ee05dfb21a9334686e777f1b83960L23" data-line-number="23" class="blob-num blob-num-deletion js-linkable-line-number"></td>

    <td class="blob-num blob-num-deletion empty-cell"></td>

  <td class="blob-code blob-code-deletion">

    <span class="blob-code-inner">-	sealDate<span class="pl-k">:</span> {</span>

  </td>
</tr>


    <tr>
    <td id="diff-745ee05dfb21a9334686e777f1b83960L24" data-line-number="24" class="blob-num blob-num-deletion js-linkable-line-number"></td>

    <td class="blob-num blob-num-deletion empty-cell"></td>

  <td class="blob-code blob-code-deletion">

    <span class="blob-code-inner">-		type<span class="pl-k">:</span> DateType,</span>

  </td>
</tr>


    <tr>
    <td id="diff-745ee05dfb21a9334686e777f1b83960L25" data-line-number="25" class="blob-num blob-num-deletion js-linkable-line-number"></td>

    <td class="blob-num blob-num-deletion empty-cell"></td>

  <td class="blob-code blob-code-deletion">

    <span class="blob-code-inner">-		label<span class="pl-k">:</span> <span class="pl-en">_</span>(<span class="pl-s"><span class="pl-pds">"</span>What is the date of sealing the last certificate?<span class="pl-pds">"</span></span>),</span>

  </td>
</tr>


    <tr>
    <td id="diff-745ee05dfb21a9334686e777f1b83960L26" data-line-number="26" class="blob-num blob-num-deletion js-linkable-line-number"></td>

    <td class="blob-num blob-num-deletion empty-cell"></td>

  <td class="blob-code blob-code-deletion">

    <span class="blob-code-inner">-		required<span class="pl-k">:</span> <span class="pl-c1">true</span></span>

  </td>
</tr>


    <tr>
    <td id="diff-745ee05dfb21a9334686e777f1b83960L27" data-line-number="27" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-745ee05dfb21a9334686e777f1b83960R21" data-line-number="21" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner"> 	}</span>

  </td>
</tr>


    <tr>
    <td id="diff-745ee05dfb21a9334686e777f1b83960L28" data-line-number="28" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-745ee05dfb21a9334686e777f1b83960R22" data-line-number="22" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner"> });</span>

  </td>
</tr>


    <tr>
    <td id="diff-745ee05dfb21a9334686e777f1b83960L29" data-line-number="29" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-745ee05dfb21a9334686e777f1b83960R23" data-line-number="23" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner"> </span>

  </td>
</tr>


      <tr class="js-expandable-line" data-position="20">
    <td class="blob-num blob-num-expandable" colspan="2">
      <a href="#diff-745ee05dfb21a9334686e777f1b83960" class="diff-expander js-expand" title="Expand" aria-label="Expand" data-url="/egovernment/eregistrations-demo/blob_excerpt/6f2a94cb04692b9935eb38f562d476e8a7d0d454?diff=unified&amp;in_wiki_context=&amp;left_hunk_size=7&amp;mode=100644&amp;next_line_num_left=40&amp;next_line_num_right=34&amp;path=model%2Fbusiness-process-demo%2Fprocessing-steps%2Fsocial-security.js&amp;prev_line_num_left=29&amp;prev_line_num_right=23&amp;right_hunk_size=7" data-left-range="30-39" data-right-range="24-33">
        <svg aria-hidden="true" class="octicon octicon-unfold" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path d="M11.5 7.5L14 10c0 .55-.45 1-1 1H9v-1h3.5l-2-2h-7l-2 2H5v1H1c-.55 0-1-.45-1-1l2.5-2.5L0 5c0-.55.45-1 1-1h4v1H1.5l2 2h7l2-2H9V4h4c.55 0 1 .45 1 1l-2.5 2.5zM6 6h2V3h2L7 0 4 3h2v3zm2 3H6v3H4l3 3 3-3H8V9z"></path></svg>
      </a>
    </td>
    <td class="blob-code blob-code-inner blob-code-hunk">@@ -40,7 +34,7 @@ socialSecurityStep.dataForm.setProperties({</td>
  </tr>

    <tr>
    <td id="diff-745ee05dfb21a9334686e777f1b83960L40" data-line-number="40" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-745ee05dfb21a9334686e777f1b83960R34" data-line-number="34" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner"> 	},</span>

  </td>
</tr>


    <tr>
    <td id="diff-745ee05dfb21a9334686e777f1b83960L41" data-line-number="41" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-745ee05dfb21a9334686e777f1b83960R35" data-line-number="35" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner"> 	label<span class="pl-k">:</span> <span class="pl-en">_</span>(<span class="pl-s"><span class="pl-pds">"</span>Seals confirmation<span class="pl-pds">"</span></span>),</span>

  </td>
</tr>


    <tr>
    <td id="diff-745ee05dfb21a9334686e777f1b83960L42" data-line-number="42" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-745ee05dfb21a9334686e777f1b83960R36" data-line-number="36" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner"> 	propertyMasterType<span class="pl-k">:</span> <span class="pl-smi">socialSecurityStep</span>.<span class="pl-c1">constructor</span>,</span>

  </td>
</tr>


    <tr>
    <td id="diff-745ee05dfb21a9334686e777f1b83960L43" data-line-number="43" class="blob-num blob-num-deletion js-linkable-line-number"></td>

    <td class="blob-num blob-num-deletion empty-cell"></td>

  <td class="blob-code blob-code-deletion">

    <span class="blob-code-inner">-	propertyNames<span class="pl-k">:</span> [<span class="pl-s"><span class="pl-pds">'</span>isSealConfirmed<span class="pl-pds">'</span></span><span class="x x-first">, </span><span class="pl-s"><span class="pl-pds x">'</span><span class="x">sealDate</span><span class="pl-pds x x-last">'</span></span>]</span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-745ee05dfb21a9334686e777f1b83960R37" data-line-number="37" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+	propertyNames<span class="pl-k">:</span> [<span class="pl-s"><span class="pl-pds">'</span>isSealConfirmed<span class="pl-pds">'</span></span>]</span>

  </td>
</tr>


    <tr>
    <td id="diff-745ee05dfb21a9334686e777f1b83960L44" data-line-number="44" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-745ee05dfb21a9334686e777f1b83960R38" data-line-number="38" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner"> });</span>

  </td>
</tr>


    <tr>
    <td id="diff-745ee05dfb21a9334686e777f1b83960L45" data-line-number="45" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-745ee05dfb21a9334686e777f1b83960R39" data-line-number="39" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner"> </span>

  </td>
</tr>


    <tr>
    <td id="diff-745ee05dfb21a9334686e777f1b83960L46" data-line-number="46" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-745ee05dfb21a9334686e777f1b83960R40" data-line-number="40" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner"> <span class="pl-c1">module</span>.<span class="pl-smi">exports</span> <span class="pl-k">=</span> BusinessProcessDemo;</span>

  </td>
</tr>



        </tbody></table>
      </div>
</div>

</div>
