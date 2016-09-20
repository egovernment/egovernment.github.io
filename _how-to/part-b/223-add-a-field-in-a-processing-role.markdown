---
layout: recipe
permalink: /how-to/add-a-field-in-a-processing-role/
title: 'Add a field in a processing role'
category: '2. Part B'
sub-category: 'Processing'
rate: '1'
number: '223'
introduction-text: 'This recipe is about adding a field to the form of a processing step.'
introduction-img: '222.png'
prevUrl: 222
nextUrl: 231
done: ''
lang: en
ref: 223
---

A processing step can be associated with many services. It may be that you want to add a field in context of one service but not the other. It can also be that you want to add the field in context of more than one service.

Additionally, this recipe only details adding a already defined (on a model) field to form section. For more information about adding a field definition to the model, check ['How to 121 - Define a new field'](/how-to/configure-the-determinant-of-a-service/).

In any case you need to adjust processing steps form section definition in files associated with a service(s) in context of which you want the change to be applied.

1. Open file `model/<business-process-your-service>/processing-steps/<your-processing-step>.js`.
2. Locate the `propertyNames` property of processing step form section and append new field name to it.

## Example

In the branch "[add-a-field-in-a-processing-role](https://github.com/egovernment/eregistrations-demo/tree/add-a-field-in-a-processing-role)" of eregistrations-demo :

Add a `sealDate` field to form section of `socialSecurity` processing step of the `BusinessProcessDemo` service.

### Solution

<div id="files" class="diff-view " onclick="window.open('https://github.com/egovernment/eregistrations-demo/compare/add-a-field-in-a-processing-role...add-a-field-in-a-processing-role-solution?#files')">


<a name="diff-745ee05dfb21a9334686e777f1b83960"></a>
<div id="diff-0" class="file js-details-container




             show-inline-notes
           ">
  <div class="file-header" data-path="model/business-process-demo/processing-steps/social-security.js">
    <div class="file-actions">
        <span class="show-file-notes">
          <label>
            <input checked="checked" class="js-toggle-file-notes" type="checkbox">
            Show notes
          </label>
        </span>

          <a href="/egovernment/eregistrations-demo/blob/552dd83c04c628f47778daddaa9b89df5acaec8d/model/business-process-demo/processing-steps/social-security.js" class="btn btn-sm tooltipped tooltipped-nw" rel="nofollow" aria-label="View the whole file at version 552dd83 ">View</a>


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
      <a href="#diff-745ee05dfb21a9334686e777f1b83960" class="diff-expander js-expand" title="Expand" aria-label="Expand" data-url="/egovernment/eregistrations-demo/blob_excerpt/1b4e1a36286d8744cde3cf5d07c06fc509bdc932?diff=unified&amp;in_wiki_context=&amp;left_hunk_size=7&amp;mode=100644&amp;next_line_num_left=40&amp;next_line_num_right=40&amp;path=model%2Fbusiness-process-demo%2Fprocessing-steps%2Fsocial-security.js&amp;prev_line_num_left=&amp;prev_line_num_right=&amp;right_hunk_size=7" data-left-range="1-39" data-right-range="1-39">
        <svg aria-hidden="true" class="octicon octicon-unfold" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path d="M11.5 7.5L14 10c0 .55-.45 1-1 1H9v-1h3.5l-2-2h-7l-2 2H5v1H1c-.55 0-1-.45-1-1l2.5-2.5L0 5c0-.55.45-1 1-1h4v1H1.5l2 2h7l2-2H9V4h4c.55 0 1 .45 1 1l-2.5 2.5zM6 6h2V3h2L7 0 4 3h2v3zm2 3H6v3H4l3 3 3-3H8V9z"></path></svg>
      </a>
    </td>
    <td class="blob-code blob-code-inner blob-code-hunk">@@ -40,7 +40,7 @@ socialSecurityStep.dataForm.setProperties({</td>
  </tr>

    <tr>
    <td id="diff-745ee05dfb21a9334686e777f1b83960L40" data-line-number="40" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-745ee05dfb21a9334686e777f1b83960R40" data-line-number="40" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner">  },</span>

  </td>
</tr>


    <tr>
    <td id="diff-745ee05dfb21a9334686e777f1b83960L41" data-line-number="41" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-745ee05dfb21a9334686e777f1b83960R41" data-line-number="41" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner">  label<span class="pl-k">:</span> <span class="pl-en">_</span>(<span class="pl-s"><span class="pl-pds">"</span>Seals confirmation<span class="pl-pds">"</span></span>),</span>

  </td>
</tr>


    <tr>
    <td id="diff-745ee05dfb21a9334686e777f1b83960L42" data-line-number="42" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-745ee05dfb21a9334686e777f1b83960R42" data-line-number="42" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner">  propertyMasterType<span class="pl-k">:</span> <span class="pl-smi">socialSecurityStep</span>.<span class="pl-c1">constructor</span>,</span>

  </td>
</tr>


    <tr>
    <td id="diff-745ee05dfb21a9334686e777f1b83960L43" data-line-number="43" class="blob-num blob-num-deletion js-linkable-line-number"></td>

    <td class="blob-num blob-num-deletion empty-cell"></td>

  <td class="blob-code blob-code-deletion">

    <span class="blob-code-inner">- propertyNames<span class="pl-k">:</span> [<span class="pl-s"><span class="pl-pds">'</span>isSealConfirmed<span class="pl-pds">'</span></span>]</span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-745ee05dfb21a9334686e777f1b83960R43" data-line-number="43" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+ propertyNames<span class="pl-k">:</span> [<span class="pl-s"><span class="pl-pds">'</span>isSealConfirmed<span class="pl-pds">'</span></span><span class="x x-first">, </span><span class="pl-s"><span class="pl-pds x">'</span><span class="x">sealDate</span><span class="pl-pds x x-last">'</span></span>]</span>

  </td>
</tr>


    <tr>
    <td id="diff-745ee05dfb21a9334686e777f1b83960L44" data-line-number="44" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-745ee05dfb21a9334686e777f1b83960R44" data-line-number="44" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner"> });</span>

  </td>
</tr>


    <tr>
    <td id="diff-745ee05dfb21a9334686e777f1b83960L45" data-line-number="45" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-745ee05dfb21a9334686e777f1b83960R45" data-line-number="45" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner"> </span>

  </td>
</tr>


    <tr>
    <td id="diff-745ee05dfb21a9334686e777f1b83960L46" data-line-number="46" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-745ee05dfb21a9334686e777f1b83960R46" data-line-number="46" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner"> <span class="pl-c1">module</span>.<span class="pl-smi">exports</span> <span class="pl-k">=</span> BusinessProcessDemo;</span>

  </td>
</tr>



        </tbody></table>
      </div>
</div>

</div>
