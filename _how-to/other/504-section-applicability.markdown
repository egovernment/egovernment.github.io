---
layout: recipe
permalink: /how-to/section-applicability
title: 'Section applicability'
category: '5. Other'
sub-category: ''
rate: '1'
number: '504'
introduction-text: "This recipe covers the applicability of sections. It's about conditions which rule the section's visibility (both in terms of views as well as the validation flow)."
prevUrl: 503
nextUrl: 505
done: 'yes'
lang: en
ref: 503
---

For exhaustive overview of sections please see [Sections overview](/framework/sections/).

By default every section is applicable. The applicability of section is expressed in the `isApplicable` property defined on sections prototype.
There are some (rare) cases when you want to setup applicability of sections inside a group section (you want it when a sub section's applicability depends on some filed of the parent group section). Such applicability is expressed by `isInternallyApplicable` property (which works only for sections which are sub sections of a group section).

To setup section's applicability condition you set getter under `isApplicable` or `isInternallyApplicable` property (depending on your use case) of the section. In case of `isInternallyApplicable` you have to take into account that it has to work in legacy layer, so it's prone to the same constraints as `is<PropName>Applicable` properties.

In order to change the applicability of a section:

1. Open the file containing section's definition, e.g. for a section that is part of a business process `model/<business-process-your-service>/data-forms/<your-form-section>.js`.
2. Setup a getter under `isApplicable` property of `<YourFormSection>.prototype` (the sections is applicable if and only if the getter returns true).

## Example

In the branch "[sections-applicability](https://github.com/egovernment/eregistrations-demo/tree/sections-applicability)" of eregistrations-demo :

Change the applicability of `attorney` section of `BusinessProcessDemo`. The section should be applicable only if user requested "Certificate of Incentives" and the declared `assets` are over 100000.

### Solution

<div id="files" class="diff-view " onclick="window.open('https://github.com/egovernment/eregistrations-demo/compare/sections-applicability...sections-applicability-solution#files')" >

  <div class="js-diff-progressive-container">

<a name="diff-5be29dcc0c106c87753e059ceb0f5d1f"></a>
<div id="diff-0" class="file js-file js-details-container





              show-inline-notes
           ">
  <div class="file-header" data-path="model/business-process-demo/data-forms/attorney.js" data-short-path="5be29dc" data-anchor="diff-5be29dcc0c106c87753e059ceb0f5d1f">
    <div class="file-actions">

        <span class="show-file-notes pt-1">
          <label>
            <input type="checkbox" checked="checked" class="js-toggle-file-notes">
            Show comments
          </label>
        </span>

          <a href="/egovernment/eregistrations-demo/blob/e9ab1c86e20b3954540fd58e738ec1700a4c04db/model/business-process-demo/data-forms/attorney.js" class="btn btn-sm tooltipped tooltipped-nw" rel="nofollow" aria-label="View the whole file at version e9ab1c8 ">View</a>


    </div>
    <div class="file-info">
        <span class="diffstat tooltipped tooltipped-e" aria-label="3 additions &amp; 1 deletion">4 <span class="block-diff-added"></span><span class="block-diff-added"></span><span class="block-diff-added"></span><span class="block-diff-deleted"></span><span class="block-diff-neutral"></span></span>

      <a href="#diff-5be29dcc0c106c87753e059ceb0f5d1f" class="link-gray-dark" title="model/business-process-demo/data-forms/attorney.js">
        model/business-process-demo/data-forms/attorney.js
      </a>


    </div>
  </div>
  <div class="js-file-content">

        <div class="data highlight blob-wrapper">
          <table class="diff-table tab-size  " data-tab-size="8">

      <tbody><tr class="js-expandable-line" data-position="0">
    <td class="blob-num blob-num-expandable" colspan="2">
      <a href="#diff-5be29dcc0c106c87753e059ceb0f5d1f" class="diff-expander js-expand" title="Expand" aria-label="Expand" data-url="/egovernment/eregistrations-demo/blob_excerpt/7bd3c0094ba1f101e906deb17cbd2529cc56868a?diff=unified&amp;in_wiki_context=&amp;left_hunk_size=8&amp;mode=100644&amp;next_line_num_left=16&amp;next_line_num_right=16&amp;path=model%2Fbusiness-process-demo%2Fdata-forms%2Fattorney.js&amp;prev_line_num_left=&amp;prev_line_num_right=&amp;right_hunk_size=10" data-left-range="1-15" data-right-range="1-15">
        <svg aria-hidden="true" class="octicon octicon-unfold" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M11.5 7.5L14 10c0 .55-.45 1-1 1H9v-1h3.5l-2-2h-7l-2 2H5v1H1c-.55 0-1-.45-1-1l2.5-2.5L0 5c0-.55.45-1 1-1h4v1H1.5l2 2h7l2-2H9V4h4c.55 0 1 .45 1 1l-2.5 2.5zM6 6h2V3h2L7 0 4 3h2v3zm2 3H6v3H4l3 3 3-3H8V9z"></path></svg>
      </a>
    </td>
    <td class="blob-code blob-code-inner blob-code-hunk">@@ -16,8 +16,10 @@ BusinessProcessDemo.prototype.dataForms.map.attorney.setProperties({</td>
  </tr>

    <tr>
    <td id="diff-5be29dcc0c106c87753e059ceb0f5d1fL16" data-line-number="16" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-5be29dcc0c106c87753e059ceb0f5d1fR16" data-line-number="16" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner"> 	label<span class="pl-k">:</span> <span class="pl-en">_</span>(<span class="pl-s"><span class="pl-pds">"</span>Attorney<span class="pl-pds">"</span></span>),</span>

  </td>
</tr>


    <tr>
    <td id="diff-5be29dcc0c106c87753e059ceb0f5d1fL17" data-line-number="17" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-5be29dcc0c106c87753e059ceb0f5d1fR17" data-line-number="17" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner"> 	actionUrl<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>attorney<span class="pl-pds">'</span></span>,</span>

  </td>
</tr>


    <tr>
    <td id="diff-5be29dcc0c106c87753e059ceb0f5d1fL18" data-line-number="18" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-5be29dcc0c106c87753e059ceb0f5d1fR18" data-line-number="18" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner"> 	<span class="pl-en">isApplicable</span><span class="pl-k">:</span> <span class="pl-k">function</span> (<span class="pl-smi">_observe</span>) {</span>

  </td>
</tr>


    <tr>
    <td id="diff-5be29dcc0c106c87753e059ceb0f5d1fL19" data-line-number="19" class="blob-num blob-num-deletion js-linkable-line-number"></td>

    <td class="blob-num blob-num-deletion empty-cell"></td>

  <td class="blob-code blob-code-deletion">

    <span class="blob-code-inner">-		<span class="pl-k x x-first x-last">return</span> <span class="pl-en">_observe</span>(<span class="pl-v">this</span>.<span class="pl-smi">master</span>.<span class="pl-smi">registrations</span>.<span class="pl-smi">requested</span>)</span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-5be29dcc0c106c87753e059ceb0f5d1fR19" data-line-number="19" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+		<span class="pl-k x x-first">var</span><span class="x"> hasCertificateOfIncentives </span><span class="pl-k x x-last">=</span> <span class="pl-en">_observe</span>(<span class="pl-v">this</span>.<span class="pl-smi">master</span>.<span class="pl-smi">registrations</span>.<span class="pl-smi">requested</span>)</span>

  </td>
</tr>


    <tr>
    <td id="diff-5be29dcc0c106c87753e059ceb0f5d1fL20" data-line-number="20" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-5be29dcc0c106c87753e059ceb0f5d1fR20" data-line-number="20" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner"> 			.<span class="pl-c1">has</span>(<span class="pl-v">this</span>.<span class="pl-smi">master</span>.<span class="pl-smi">registrations</span>.<span class="pl-smi">map</span>.<span class="pl-smi">certificateOfIncentives</span>);</span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-5be29dcc0c106c87753e059ceb0f5d1fR21" data-line-number="21" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+		<span class="pl-k">if</span> (<span class="pl-k">!</span>hasCertificateOfIncentives) <span class="pl-k">return</span>;</span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-5be29dcc0c106c87753e059ceb0f5d1fR22" data-line-number="22" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+		<span class="pl-k">return</span> <span class="pl-en">_observe</span>(<span class="pl-v">this</span>.<span class="pl-smi">master</span>.<span class="pl-smi">_assets</span>) <span class="pl-k">&gt;</span> <span class="pl-c1">100000</span>;</span>

  </td>
</tr>


    <tr>
    <td id="diff-5be29dcc0c106c87753e059ceb0f5d1fL21" data-line-number="21" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-5be29dcc0c106c87753e059ceb0f5d1fR23" data-line-number="23" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner"> 	},</span>

  </td>
</tr>


    <tr>
    <td id="diff-5be29dcc0c106c87753e059ceb0f5d1fL22" data-line-number="22" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-5be29dcc0c106c87753e059ceb0f5d1fR24" data-line-number="24" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner"> 	propertyNames<span class="pl-k">:</span> [<span class="pl-s"><span class="pl-pds">'</span>attorney/firstName<span class="pl-pds">'</span></span>, <span class="pl-s"><span class="pl-pds">'</span>attorney/lastName<span class="pl-pds">'</span></span>, <span class="pl-s"><span class="pl-pds">'</span>attorney/email<span class="pl-pds">'</span></span>]</span>

  </td>
</tr>


    <tr>
    <td id="diff-5be29dcc0c106c87753e059ceb0f5d1fL23" data-line-number="23" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-5be29dcc0c106c87753e059ceb0f5d1fR25" data-line-number="25" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner"> });</span>

  </td>
</tr>


  <tr class="js-expandable-line">
   <td class="blob-num blob-num-expandable" colspan="2">
     <a href="#diff-5be29dcc0c106c87753e059ceb0f5d1f" class="diff-expander js-expand" title="Expand" aria-label="Expand" data-url="/egovernment/eregistrations-demo/blob_excerpt/7bd3c0094ba1f101e906deb17cbd2529cc56868a?diff=unified&amp;in_wiki_context=&amp;mode=100644&amp;path=model%2Fbusiness-process-demo%2Fdata-forms%2Fattorney.js&amp;prev_line_num_left=23&amp;prev_line_num_right=25" data-left-range="24-27" data-right-range="26-27">
       <svg aria-hidden="true" class="octicon octicon-unfold" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M11.5 7.5L14 10c0 .55-.45 1-1 1H9v-1h3.5l-2-2h-7l-2 2H5v1H1c-.55 0-1-.45-1-1l2.5-2.5L0 5c0-.55.45-1 1-1h4v1H1.5l2 2h7l2-2H9V4h4c.55 0 1 .45 1 1l-2.5 2.5zM6 6h2V3h2L7 0 4 3h2v3zm2 3H6v3H4l3 3 3-3H8V9z"></path></svg>
     </a>
   </td>
   <td class="blob-code blob-code-expandable"></td>
  </tr>

          </tbody></table>
        </div>

  </div>
</div>

  </div>

</div>
