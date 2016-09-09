---
layout: recipe
permalink: /how-to/add-new-field-to-form-section/
title: 'Add new field to form section'
category: '1. Part A'
sub-category: 'Data'
rate: '2'
number: '161'
introduction-text: 'Section names are used for Part A forms, Part B file data view, and print views. Changing it will affect all of those places.'
introduction-img: '161.png'
prevUrl: 159
nextUrl: 162
done: ''
lang: en
ref: 161
---

Every section in Part A is associated with a service, so to change it's name, we have to know the service to which it applies. Additionally, sections can be defined in one of two places, as part of a business process or as part of a nested entity (for example branch, legal representative, etc.) of a business process.

**For sections that are part of a business process:**

1. Open file `model/<business-process-your-service>/data-forms/<your-section>.js`.
2. Set the value of the label property of the section.

**For sections of a nested entity:**

1. Open file `model/<business-process-your-service>/nested-entities/<your-nested-entity>/data-forms/<your-section>.js`.
2. Set the value of the label property of the section.

## Example

In the branch "[change-the-name-of-a-section-of-the-form](https://github.com/egovernment/eregistrations-demo/tree/change-the-name-of-a-section-of-the-form)" of eregistrations-demo :

Change the name of the `attorney` section for `BusinessProcessDemo` service to *"Company attorney"*.

### Solution

<div id="files" class="diff-view " onclick="window.open('https://github.com/egovernment/eregistrations-demo/compare/change-the-name-of-a-section-of-the-form...change-the-name-of-a-section-of-the-form-solution#files')">

<a name="diff-5be29dcc0c106c87753e059ceb0f5d1f"></a>
<div id="diff-0" class="file js-details-container




             show-inline-notes
           ">
  <div class="file-header" data-path="model/business-process-demo/data-forms/attorney.js">
    <div class="file-actions">
        <span class="show-file-notes">
          <label>
            <input checked="checked" class="js-toggle-file-notes" type="checkbox">
            Show notes
          </label>
        </span>

          <a href="/egovernment/eregistrations-demo/blob/d9532ebab072503fa8bdbbfda1ca6950c0637862/model/business-process-demo/data-forms/attorney.js" class="btn btn-sm tooltipped tooltipped-nw" rel="nofollow" aria-label="View the whole file at version d9532eb ">View</a>


    </div>
    <div class="file-info">
        <span class="diffstat tooltipped tooltipped-e" aria-label="1 addition &amp; 1 deletion">2 <span class="block-diff-added"></span><span class="block-diff-deleted"></span><span class="block-diff-neutral"></span><span class="block-diff-neutral"></span><span class="block-diff-neutral"></span></span>

      <span class="user-select-contain" title="model/business-process-demo/data-forms/attorney.js">
        model/business-process-demo/data-forms/attorney.js
      </span>

    </div>
  </div>

      <div class="data highlight blob-wrapper">
        <table class="diff-table tab-size  " data-tab-size="8">

      <tbody><tr class="js-expandable-line" data-position="0">
    <td class="blob-num blob-num-expandable" colspan="2">
      <a href="#diff-5be29dcc0c106c87753e059ceb0f5d1f" class="diff-expander js-expand" title="Expand" aria-label="Expand" data-url="/egovernment/eregistrations-demo/blob_excerpt/1d73b64c4b9195431dcf99f4444482cc8bf96fb0?diff=unified&amp;in_wiki_context=&amp;left_hunk_size=7&amp;mode=100644&amp;next_line_num_left=13&amp;next_line_num_right=13&amp;path=model%2Fbusiness-process-demo%2Fdata-forms%2Fattorney.js&amp;prev_line_num_left=&amp;prev_line_num_right=&amp;right_hunk_size=7" data-left-range="1-12" data-right-range="1-12">
        <svg aria-hidden="true" class="octicon octicon-unfold" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path d="M11.5 7.5L14 10c0 .55-.45 1-1 1H9v-1h3.5l-2-2h-7l-2 2H5v1H1c-.55 0-1-.45-1-1l2.5-2.5L0 5c0-.55.45-1 1-1h4v1H1.5l2 2h7l2-2H9V4h4c.55 0 1 .45 1 1l-2.5 2.5zM6 6h2V3h2L7 0 4 3h2v3zm2 3H6v3H4l3 3 3-3H8V9z"></path></svg>
      </a>
    </td>
    <td class="blob-code blob-code-inner blob-code-hunk">@@ -13,7 +13,7 @@ BusinessProcessDemo.prototype.dataForms.map.define('attorney', {</td>
  </tr>

    <tr>
    <td id="diff-5be29dcc0c106c87753e059ceb0f5d1fL13" data-line-number="13" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-5be29dcc0c106c87753e059ceb0f5d1fR13" data-line-number="13" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner"> });</span>

  </td>
</tr>


    <tr>
    <td id="diff-5be29dcc0c106c87753e059ceb0f5d1fL14" data-line-number="14" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-5be29dcc0c106c87753e059ceb0f5d1fR14" data-line-number="14" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner"> </span>

  </td>
</tr>


    <tr>
    <td id="diff-5be29dcc0c106c87753e059ceb0f5d1fL15" data-line-number="15" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-5be29dcc0c106c87753e059ceb0f5d1fR15" data-line-number="15" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner"> <span class="pl-smi">BusinessProcessDemo</span>.<span class="pl-c1">prototype</span>.<span class="pl-smi">dataForms</span>.<span class="pl-smi">map</span>.<span class="pl-smi">attorney</span>.<span class="pl-en">setProperties</span>({</span>

  </td>
</tr>


    <tr>
    <td id="diff-5be29dcc0c106c87753e059ceb0f5d1fL16" data-line-number="16" class="blob-num blob-num-deletion js-linkable-line-number"></td>

    <td class="blob-num blob-num-deletion empty-cell"></td>

  <td class="blob-code blob-code-deletion">

    <span class="blob-code-inner">- label<span class="pl-k">:</span> <span class="pl-en">_</span>(<span class="pl-s"><span class="pl-pds">"</span><span class="x x-first x-last">Attorney</span><span class="pl-pds">"</span></span>),</span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-5be29dcc0c106c87753e059ceb0f5d1fR16" data-line-number="16" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+ label<span class="pl-k">:</span> <span class="pl-en">_</span>(<span class="pl-s"><span class="pl-pds">"</span><span class="x x-first x-last">Company attorney</span><span class="pl-pds">"</span></span>),</span>

  </td>
</tr>


    <tr>
    <td id="diff-5be29dcc0c106c87753e059ceb0f5d1fL17" data-line-number="17" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-5be29dcc0c106c87753e059ceb0f5d1fR17" data-line-number="17" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner">  actionUrl<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>attorney<span class="pl-pds">'</span></span>,</span>

  </td>
</tr>


    <tr>
    <td id="diff-5be29dcc0c106c87753e059ceb0f5d1fL18" data-line-number="18" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-5be29dcc0c106c87753e059ceb0f5d1fR18" data-line-number="18" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner">  <span class="pl-en">isApplicable</span><span class="pl-k">:</span> <span class="pl-k">function</span> (<span class="pl-smi">_observe</span>) {</span>

  </td>
</tr>


    <tr>
    <td id="diff-5be29dcc0c106c87753e059ceb0f5d1fL19" data-line-number="19" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-5be29dcc0c106c87753e059ceb0f5d1fR19" data-line-number="19" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner">      <span class="pl-k">return</span> <span class="pl-en">_observe</span>(<span class="pl-v">this</span>.<span class="pl-smi">master</span>.<span class="pl-smi">registrations</span>.<span class="pl-smi">requested</span>)</span>

  </td>
</tr>


  <tr class="js-expandable-line">
   <td class="blob-num blob-num-expandable" colspan="2">
     <a href="#diff-5be29dcc0c106c87753e059ceb0f5d1f" class="diff-expander js-expand" title="Expand" aria-label="Expand" data-url="/egovernment/eregistrations-demo/blob_excerpt/1d73b64c4b9195431dcf99f4444482cc8bf96fb0?diff=unified&amp;in_wiki_context=&amp;mode=100644&amp;path=model%2Fbusiness-process-demo%2Fdata-forms%2Fattorney.js&amp;prev_line_num_left=19&amp;prev_line_num_right=19" data-left-range="20-25" data-right-range="20-25">
       <svg aria-hidden="true" class="octicon octicon-unfold" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path d="M11.5 7.5L14 10c0 .55-.45 1-1 1H9v-1h3.5l-2-2h-7l-2 2H5v1H1c-.55 0-1-.45-1-1l2.5-2.5L0 5c0-.55.45-1 1-1h4v1H1.5l2 2h7l2-2H9V4h4c.55 0 1 .45 1 1l-2.5 2.5zM6 6h2V3h2L7 0 4 3h2v3zm2 3H6v3H4l3 3 3-3H8V9z"></path></svg>
     </a>
   </td>
   <td class="blob-code blob-code-expandable"></td>
  </tr>

        </tbody></table>
      </div>
</div>

</div>
