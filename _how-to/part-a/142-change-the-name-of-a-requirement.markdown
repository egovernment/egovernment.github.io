---
layout: recipe
permalink: /how-to/change-the-name-of-a-requirement/
title: 'Change the name of a requirement'
category: '1. Part A'
sub-category: 'Requirements'
rate: '1'
number: '142'
introduction-text: 'Changing the name of a requirement will impact all the screens and the email notifications where this requirement happens.'
introduction-img: '141.png'
prevUrl: /how-to/add-a-certificate-to-a-registration/
nextUrl: /how-to/add-a-tooltip-in-front-of-a-document-in-the-guide/
done: ''
---

The name of a requirement is, by default, taken from the document upon which the requirement is built.
Every requirement is associated with a service, so to change it's name, we have to know the service to which it applies.

1. Open file `model<business-process-your-service>/requirements.js`.
2. Locate the array passed to `eregistrations/model/business-process-new/utils/define-requirements` helper function.
3. In the array locate the entry where the document associated with your requirement is required (e.g. `require('../documents/passport')`).
4. Modify the entry so that in the end you have a hash with `label` and `class` properties. The value of the hash's `label`
should be your desired name, and the `class` property's value should be the document class
(e.g. `{ class: require('../documents/passport'), label: "My new Label" }` )).

---

## Example

In the branch "[change-the-name-of-a-requirement](https://github.com/egovernment/eregistrations-demo/tree/change-the-name-of-a-requirement)" of eregistrations-demo :

Change the name of *"Passport"* requirement of `BusinessProcessDemo` service to *"Passport (In case of foreign representatives)"*

### Solution

<div id="files" class="diff-view " onclick="window.open('https://github.com/egovernment/eregistrations-demo/compare/change-the-name-of-a-requirement...change-the-name-of-a-requirement-solution#files')">
      
<a name="diff-a941a7aba115931b72a56d41bfddd500"></a>
<div id="diff-0" class="file js-details-container
             
             
             
             
             show-inline-notes
           ">
  <div class="file-header" data-path="model/business-process-demo/requirements.js">
    <div class="file-actions">
        <span class="show-file-notes">
          <label>
            <input type="checkbox" checked="checked" class="js-toggle-file-notes">
            Show notes
          </label>
        </span>

          <a href="/egovernment/eregistrations-demo/blob/44b43438638a73da4ab32d63f78d9b141652d282/model/business-process-demo/requirements.js" class="btn btn-sm tooltipped tooltipped-nw" rel="nofollow" aria-label="View the whole file at version 44b4343 ">View</a>


    </div>
    <div class="file-info">
        <span class="diffstat tooltipped tooltipped-e" aria-label="6 additions &amp; 2 deletions">8 <span class="block-diff-added"></span><span class="block-diff-added"></span><span class="block-diff-added"></span><span class="block-diff-deleted"></span><span class="block-diff-neutral"></span></span>

      <span class="user-select-contain" title="model/business-process-demo/requirements.js">
        model/business-process-demo/requirements.js
      </span>
      
    </div>
  </div>

      <div class="data highlight blob-wrapper">
        <table class="diff-table tab-size  " data-tab-size="8">
          
      <tbody><tr class="js-expandable-line" data-position="0">
    <td class="blob-num blob-num-expandable" colspan="2">
      <a href="#diff-a941a7aba115931b72a56d41bfddd500" class="diff-expander js-expand" title="Expand" aria-label="Expand" data-url="/egovernment/eregistrations-demo/blob_excerpt/4b1122099e5cdf61660dffa6a3a0c9526d21a735?diff=unified&amp;in_wiki_context=&amp;left_hunk_size=11&amp;mode=100644&amp;next_line_num_left=2&amp;next_line_num_right=2&amp;path=model%2Fbusiness-process-demo%2Frequirements.js&amp;prev_line_num_left=&amp;prev_line_num_right=&amp;right_hunk_size=15" data-left-range="1-1" data-right-range="1-1">
        <svg aria-hidden="true" class="octicon octicon-unfold" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path d="M11.5 7.5L14 10c0 .55-.45 1-1 1H9v-1h3.5l-2-2h-7l-2 2H5v1H1c-.55 0-1-.45-1-1l2.5-2.5L0 5c0-.55.45-1 1-1h4v1H1.5l2 2h7l2-2H9V4h4c.55 0 1 .45 1 1l-2.5 2.5zM6 6h2V3h2L7 0 4 3h2v3zm2 3H6v3H4l3 3 3-3H8V9z"></path></svg>
      </a>
    </td>
    <td class="blob-code blob-code-inner blob-code-hunk">@@ -2,11 +2,15 @@</td>
  </tr>

    <tr>
    <td id="diff-a941a7aba115931b72a56d41bfddd500L2" data-line-number="2" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-a941a7aba115931b72a56d41bfddd500R2" data-line-number="2" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner"> </span>

  </td>
</tr>


    <tr>
    <td id="diff-a941a7aba115931b72a56d41bfddd500L3" data-line-number="3" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-a941a7aba115931b72a56d41bfddd500R3" data-line-number="3" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner"> <span class="pl-k">var</span> defineRequirements <span class="pl-k">=</span></span>

  </td>
</tr>


    <tr>
    <td id="diff-a941a7aba115931b72a56d41bfddd500L4" data-line-number="4" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-a941a7aba115931b72a56d41bfddd500R4" data-line-number="4" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner"> 	<span class="pl-c1">require</span>(<span class="pl-s"><span class="pl-pds">'</span>eregistrations/model/business-process-new/utils/define-requirements<span class="pl-pds">'</span></span>);</span>

  </td>
</tr>


    <tr>
    <td id="diff-a941a7aba115931b72a56d41bfddd500L5" data-line-number="5" class="blob-num blob-num-deletion js-linkable-line-number"></td>

    <td class="blob-num blob-num-deletion empty-cell"></td>

  <td class="blob-code blob-code-deletion">

    <span class="blob-code-inner">-<span class="pl-k">var</span> BusinessProcessDemo <span class="pl-k">=</span> <span class="pl-c1">require</span>(<span class="pl-s"><span class="pl-pds">'</span>./base<span class="pl-pds">'</span></span>);</span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-a941a7aba115931b72a56d41bfddd500R5" data-line-number="5" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+<span class="pl-k">var</span> BusinessProcessDemo <span class="pl-k">=</span> <span class="pl-c1">require</span>(<span class="pl-s"><span class="pl-pds">'</span>./base<span class="pl-pds">'</span></span>)</span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-a941a7aba115931b72a56d41bfddd500R6" data-line-number="6" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+  , _                   <span class="pl-k">=</span> <span class="pl-c1">require</span>(<span class="pl-s"><span class="pl-pds">'</span>../../i18n<span class="pl-pds">'</span></span>).<span class="pl-en">bind</span>(<span class="pl-s"><span class="pl-pds">"</span>Requirements<span class="pl-pds">"</span></span>);</span>

  </td>
</tr>


    <tr>
    <td id="diff-a941a7aba115931b72a56d41bfddd500L6" data-line-number="6" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-a941a7aba115931b72a56d41bfddd500R7" data-line-number="7" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner"> </span>

  </td>
</tr>


    <tr>
    <td id="diff-a941a7aba115931b72a56d41bfddd500L7" data-line-number="7" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-a941a7aba115931b72a56d41bfddd500R8" data-line-number="8" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner"> <span class="pl-c1">module</span>.<span class="pl-smi">exports</span> <span class="pl-k">=</span> <span class="pl-en">defineRequirements</span>(BusinessProcessDemo, [</span>

  </td>
</tr>


    <tr>
    <td id="diff-a941a7aba115931b72a56d41bfddd500L8" data-line-number="8" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-a941a7aba115931b72a56d41bfddd500R9" data-line-number="9" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner"> 	<span class="pl-c1">require</span>(<span class="pl-s"><span class="pl-pds">'</span>../documents/business-plan<span class="pl-pds">'</span></span>),</span>

  </td>
</tr>


    <tr>
    <td id="diff-a941a7aba115931b72a56d41bfddd500L9" data-line-number="9" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-a941a7aba115931b72a56d41bfddd500R10" data-line-number="10" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner"> 	<span class="pl-c1">require</span>(<span class="pl-s"><span class="pl-pds">'</span>../documents/company-registration<span class="pl-pds">'</span></span>),</span>

  </td>
</tr>


    <tr>
    <td id="diff-a941a7aba115931b72a56d41bfddd500L10" data-line-number="10" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-a941a7aba115931b72a56d41bfddd500R11" data-line-number="11" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner"> 	<span class="pl-c1">require</span>(<span class="pl-s"><span class="pl-pds">'</span>../documents/inventory<span class="pl-pds">'</span></span>),</span>

  </td>
</tr>


    <tr>
    <td id="diff-a941a7aba115931b72a56d41bfddd500L11" data-line-number="11" class="blob-num blob-num-deletion js-linkable-line-number"></td>

    <td class="blob-num blob-num-deletion empty-cell"></td>

  <td class="blob-code blob-code-deletion">

    <span class="blob-code-inner">-	<span class="pl-c1">require</span>(<span class="pl-s"><span class="pl-pds">'</span>../documents/passport<span class="pl-pds">'</span></span>)</span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-a941a7aba115931b72a56d41bfddd500R12" data-line-number="12" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+	{</span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-a941a7aba115931b72a56d41bfddd500R13" data-line-number="13" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+		label<span class="pl-k">:</span> <span class="pl-en">_</span>(<span class="pl-s"><span class="pl-pds">"</span>Passport (In case of foreign representatives)<span class="pl-pds">"</span></span>),</span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-a941a7aba115931b72a56d41bfddd500R14" data-line-number="14" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+		class<span class="pl-k">:</span> <span class="pl-c1">require</span>(<span class="pl-s"><span class="pl-pds">'</span>../documents/passport<span class="pl-pds">'</span></span>)</span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-a941a7aba115931b72a56d41bfddd500R15" data-line-number="15" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+	}</span>

  </td>
</tr>


    <tr>
    <td id="diff-a941a7aba115931b72a56d41bfddd500L12" data-line-number="12" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-a941a7aba115931b72a56d41bfddd500R16" data-line-number="16" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner"> ]);</span>

  </td>
</tr>



        </tbody></table>
      </div>
</div>

</div>
