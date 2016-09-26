---
layout: recipe
permalink: /how-to/configure-new-rquirement/
title: 'Configure new requirement'
category: '1. Part A'
sub-category: 'Requirements'
rate: '2'
number: '141'
introduction-text: 'A requirement is associated with a document or group of documents that needs to be uploaded with the registrations file. Very often this document needs to be shown at the Front Desk to withdraw the certificate(s). The requirement belongs to a registration.<br>Here we will see how to add a requirement to a registration so the user must upload it in the "Documents" page, bring the original copy of the required document to the Front Desk for withdrawal.'
introduction-img: '145.png'
prevUrl: 133
nextUrl: 142
done: ''
lang: en
ref: 141
---

A requirement is a rule about providing certain document to the officials.

Every requirement belongs to a registration. Requirement is not a document.

A requirement has one or more requirement uploads (which contain a document which has to be uploaded).

So in order to make fully functional requirement we must also make sure that there is at least one requirement upload associated with it.

So why the relation between requirement and document is not one-to-one?

Such situation happens when a requirement is something like: user needs to bring his passport (when a foreigner) or his id-document otherwise).

So we have a requirement which will boil down to upload of a document but is given as an alternative in the beginning.

Most of the times, however, there is exactly one document which must be uploaded due to a requirement.

There are two scenarios here:

1. The document for which you have to create a requirement is already defined in `model/<your-service>/documents/<your-document>.js`
2. The document is not yet defined

[See how to add document here](/how-to/add-a-new-document/)

After you have created a document you can proceed to creation of requirement (point 2)

1. Open file `model/<business-process-your-service>/requirements.js`.
2. Locate the array passed to `eregistrations/model/business-process-new/utils/define-requirements` helper function.
3. Add entry to the array. In most basic scenario it's just a `require` to the source document (e.g. `require('../documents/passport')`).
4. Open file `model/<business-process-your-service>/requirement-uploads.js`.
5. Locate the array passed to `eregistrations/model/business-process-new/utils/define-requirement-uploads` helper function.
6. If there is an entry which requires the same document as is required in `model/<business-process-your-service>/requirements.js`, then this is the end <br>(the requirement upload will be automatically added to your requirement).
7. If there is no entry, you have to add one. In most basic scenario it's just a `require` to the source document (e.g. `require('../documents/passport')`).

---

## Example

In the branch "[configure-new-requirement](https://github.com/egovernment/eregistrations-demo/tree/configure-new-requirement)" of eregistrations-demo :

Add a new requirement to `BusinessProcessDemo` service. The requirement is about uploading *"Driving license"* document when user requests *"Company registration"* registration.

### Solution


<div id="files" class="diff-view " onclick="window.open('https://github.com/egovernment/eregistrations-demo/compare/configure-new-requirement...configure-new-requirement-solution#files')">

        
<a name="diff-1f850bcf53b7031d6fe5fc7942d460b9"></a>
<div id="diff-0" class="file js-details-container
             
             
             
             
             show-inline-notes
           ">
  <div class="file-header" data-path="model/business-process-demo/registrations/company-registration.js">
    <div class="file-actions">
        <span class="show-file-notes">
          <label>
            <input type="checkbox" checked="checked" class="js-toggle-file-notes">
            Show notes
          </label>
        </span>

          <a href="/egovernment/eregistrations-demo/blob/e82b8e1ad24d7abc30e83782ed915eb6f14d06ac/model/business-process-demo/registrations/company-registration.js" class="btn btn-sm tooltipped tooltipped-nw" rel="nofollow" aria-label="View the whole file at version e82b8e1 ">View</a>


    </div>
    <div class="file-info">
        <span class="diffstat tooltipped tooltipped-e" aria-label="1 addition &amp; 1 deletion">2 <span class="block-diff-added"></span><span class="block-diff-deleted"></span><span class="block-diff-neutral"></span><span class="block-diff-neutral"></span><span class="block-diff-neutral"></span></span>

      <span class="user-select-contain" title="model/business-process-demo/registrations/company-registration.js">
        model/business-process-demo/registrations/company-registration.js
      </span>
      
    </div>
  </div>

      <div class="data highlight blob-wrapper">
        <table class="diff-table tab-size  " data-tab-size="8">
          
      <tbody><tr class="js-expandable-line" data-position="0">
    <td class="blob-num blob-num-expandable" colspan="2">
      <a href="#diff-1f850bcf53b7031d6fe5fc7942d460b9" class="diff-expander js-expand" title="Expand" aria-label="Expand" data-url="/egovernment/eregistrations-demo/blob_excerpt/689fefbc09524b536c7b40b91923bcd64be800ce?diff=unified&amp;in_wiki_context=&amp;left_hunk_size=6&amp;mode=100644&amp;next_line_num_left=16&amp;next_line_num_right=16&amp;path=model%2Fbusiness-process-demo%2Fregistrations%2Fcompany-registration.js&amp;prev_line_num_left=&amp;prev_line_num_right=&amp;right_hunk_size=6" data-left-range="1-15" data-right-range="1-15">
        <svg aria-hidden="true" class="octicon octicon-unfold" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path d="M11.5 7.5L14 10c0 .55-.45 1-1 1H9v-1h3.5l-2-2h-7l-2 2H5v1H1c-.55 0-1-.45-1-1l2.5-2.5L0 5c0-.55.45-1 1-1h4v1H1.5l2 2h7l2-2H9V4h4c.55 0 1 .45 1 1l-2.5 2.5zM6 6h2V3h2L7 0 4 3h2v3zm2 3H6v3H4l3 3 3-3H8V9z"></path></svg>
      </a>
    </td>
    <td class="blob-code blob-code-inner blob-code-hunk">@@ -16,6 +16,6 @@ BusinessProcessDemo.prototype.registrations.map.companyRegistration.setPropertie</td>
  </tr>

    <tr>
    <td id="diff-1f850bcf53b7031d6fe5fc7942d460b9L16" data-line-number="16" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-1f850bcf53b7031d6fe5fc7942d460b9R16" data-line-number="16" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner"> 	},</span>

  </td>
</tr>


    <tr>
    <td id="diff-1f850bcf53b7031d6fe5fc7942d460b9L17" data-line-number="17" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-1f850bcf53b7031d6fe5fc7942d460b9R17" data-line-number="17" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner"> 	<span class="pl-en">requirements</span><span class="pl-k">:</span> <span class="pl-k">function</span> () {</span>

  </td>
</tr>


    <tr>
    <td id="diff-1f850bcf53b7031d6fe5fc7942d460b9L18" data-line-number="18" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-1f850bcf53b7031d6fe5fc7942d460b9R18" data-line-number="18" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner"> 		<span class="pl-k">var</span> requirementsMap <span class="pl-k">=</span> <span class="pl-v">this</span>.<span class="pl-smi">master</span>.<span class="pl-smi">requirements</span>.<span class="pl-smi">map</span>;</span>

  </td>
</tr>


    <tr>
    <td id="diff-1f850bcf53b7031d6fe5fc7942d460b9L19" data-line-number="19" class="blob-num blob-num-deletion js-linkable-line-number"></td>

    <td class="blob-num blob-num-deletion empty-cell"></td>

  <td class="blob-code blob-code-deletion">

    <span class="blob-code-inner">-		<span class="pl-k">return</span> [<span class="pl-smi">requirementsMap</span>.<span class="pl-smi">inventory</span>, <span class="pl-smi">requirementsMap</span>.<span class="pl-smi">passport</span>];</span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-1f850bcf53b7031d6fe5fc7942d460b9R19" data-line-number="19" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+		<span class="pl-k">return</span> [<span class="pl-smi">requirementsMap</span>.<span class="pl-smi">inventory</span>, <span class="pl-smi">requirementsMap</span>.<span class="pl-smi">passport</span><span class="x x-first">, </span><span class="pl-smi x">requirementsMap</span><span class="x">.</span><span class="pl-smi x x-last">drivingLicense</span>];</span>

  </td>
</tr>


    <tr>
    <td id="diff-1f850bcf53b7031d6fe5fc7942d460b9L20" data-line-number="20" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-1f850bcf53b7031d6fe5fc7942d460b9R20" data-line-number="20" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner"> 	}</span>

  </td>
</tr>


    <tr>
    <td id="diff-1f850bcf53b7031d6fe5fc7942d460b9L21" data-line-number="21" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-1f850bcf53b7031d6fe5fc7942d460b9R21" data-line-number="21" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner"> });</span>

  </td>
</tr>



        </tbody></table>
      </div>
</div>

        
<a name="diff-da564581570d16ba4a104665991c7b46"></a>
<div id="diff-1" class="file js-details-container
             
             
             
             
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

          <a href="/egovernment/eregistrations-demo/blob/e82b8e1ad24d7abc30e83782ed915eb6f14d06ac/model/business-process-demo/requirement-uploads.js" class="btn btn-sm tooltipped tooltipped-nw" rel="nofollow" aria-label="View the whole file at version e82b8e1 ">View</a>


    </div>
    <div class="file-info">
        <span class="diffstat tooltipped tooltipped-e" aria-label="2 additions &amp; 1 deletion">3 <span class="block-diff-added"></span><span class="block-diff-added"></span><span class="block-diff-deleted"></span><span class="block-diff-neutral"></span><span class="block-diff-neutral"></span></span>

      <span class="user-select-contain" title="model/business-process-demo/requirement-uploads.js">
        model/business-process-demo/requirement-uploads.js
      </span>
      
    </div>
  </div>

      <div class="data highlight blob-wrapper">
        <table class="diff-table tab-size  " data-tab-size="8">
          
      <tbody><tr class="js-expandable-line" data-position="0">
    <td class="blob-num blob-num-expandable" colspan="2">
      <a href="#diff-da564581570d16ba4a104665991c7b46" class="diff-expander js-expand" title="Expand" aria-label="Expand" data-url="/egovernment/eregistrations-demo/blob_excerpt/454cd507b608ebd4cb96307c1a345bff86ed8924?diff=unified&amp;in_wiki_context=&amp;left_hunk_size=5&amp;mode=100644&amp;next_line_num_left=8&amp;next_line_num_right=8&amp;path=model%2Fbusiness-process-demo%2Frequirement-uploads.js&amp;prev_line_num_left=&amp;prev_line_num_right=&amp;right_hunk_size=6" data-left-range="1-7" data-right-range="1-7">
        <svg aria-hidden="true" class="octicon octicon-unfold" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path d="M11.5 7.5L14 10c0 .55-.45 1-1 1H9v-1h3.5l-2-2h-7l-2 2H5v1H1c-.55 0-1-.45-1-1l2.5-2.5L0 5c0-.55.45-1 1-1h4v1H1.5l2 2h7l2-2H9V4h4c.55 0 1 .45 1 1l-2.5 2.5zM6 6h2V3h2L7 0 4 3h2v3zm2 3H6v3H4l3 3 3-3H8V9z"></path></svg>
      </a>
    </td>
    <td class="blob-code blob-code-inner blob-code-hunk">@@ -8,5 +8,6 @@ module.exports = defineRequirementUploads(BusinessProcessDemo, [</td>
  </tr>

    <tr>
    <td id="diff-da564581570d16ba4a104665991c7b46L8" data-line-number="8" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-da564581570d16ba4a104665991c7b46R8" data-line-number="8" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner"> 	<span class="pl-c1">require</span>(<span class="pl-s"><span class="pl-pds">'</span>../documents/business-plan<span class="pl-pds">'</span></span>),</span>

  </td>
</tr>


    <tr>
    <td id="diff-da564581570d16ba4a104665991c7b46L9" data-line-number="9" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-da564581570d16ba4a104665991c7b46R9" data-line-number="9" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner"> 	<span class="pl-c1">require</span>(<span class="pl-s"><span class="pl-pds">'</span>../documents/company-registration<span class="pl-pds">'</span></span>),</span>

  </td>
</tr>


    <tr>
    <td id="diff-da564581570d16ba4a104665991c7b46L10" data-line-number="10" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-da564581570d16ba4a104665991c7b46R10" data-line-number="10" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner"> 	<span class="pl-c1">require</span>(<span class="pl-s"><span class="pl-pds">'</span>../documents/inventory<span class="pl-pds">'</span></span>),</span>

  </td>
</tr>


    <tr>
    <td id="diff-da564581570d16ba4a104665991c7b46L11" data-line-number="11" class="blob-num blob-num-deletion js-linkable-line-number"></td>

    <td class="blob-num blob-num-deletion empty-cell"></td>

  <td class="blob-code blob-code-deletion">

    <span class="blob-code-inner">-	<span class="pl-c1">require</span>(<span class="pl-s"><span class="pl-pds">'</span>../documents/passport<span class="pl-pds">'</span></span>)</span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-da564581570d16ba4a104665991c7b46R11" data-line-number="11" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+	<span class="pl-c1">require</span>(<span class="pl-s"><span class="pl-pds">'</span>../documents/passport<span class="pl-pds">'</span></span>),</span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-da564581570d16ba4a104665991c7b46R12" data-line-number="12" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+	<span class="pl-c1">require</span>(<span class="pl-s"><span class="pl-pds">'</span>../documents/driving-license<span class="pl-pds">'</span></span>)</span>

  </td>
</tr>


    <tr>
    <td id="diff-da564581570d16ba4a104665991c7b46L12" data-line-number="12" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-da564581570d16ba4a104665991c7b46R13" data-line-number="13" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner"> ]);</span>

  </td>
</tr>



        </tbody></table>
      </div>
</div>

        
<a name="diff-a941a7aba115931b72a56d41bfddd500"></a>
<div id="diff-2" class="file js-details-container
             
             
             
             
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

          <a href="/egovernment/eregistrations-demo/blob/e82b8e1ad24d7abc30e83782ed915eb6f14d06ac/model/business-process-demo/requirements.js" class="btn btn-sm tooltipped tooltipped-nw" rel="nofollow" aria-label="View the whole file at version e82b8e1 ">View</a>


    </div>
    <div class="file-info">
        <span class="diffstat tooltipped tooltipped-e" aria-label="2 additions &amp; 1 deletion">3 <span class="block-diff-added"></span><span class="block-diff-added"></span><span class="block-diff-deleted"></span><span class="block-diff-neutral"></span><span class="block-diff-neutral"></span></span>

      <span class="user-select-contain" title="model/business-process-demo/requirements.js">
        model/business-process-demo/requirements.js
      </span>
      
    </div>
  </div>

      <div class="data highlight blob-wrapper">
        <table class="diff-table tab-size  " data-tab-size="8">
          
      <tbody><tr class="js-expandable-line" data-position="0">
    <td class="blob-num blob-num-expandable" colspan="2">
      <a href="#diff-a941a7aba115931b72a56d41bfddd500" class="diff-expander js-expand" title="Expand" aria-label="Expand" data-url="/egovernment/eregistrations-demo/blob_excerpt/7aa1927afb408224ec731ca7bd768e226ecce930?diff=unified&amp;in_wiki_context=&amp;left_hunk_size=5&amp;mode=100644&amp;next_line_num_left=8&amp;next_line_num_right=8&amp;path=model%2Fbusiness-process-demo%2Frequirements.js&amp;prev_line_num_left=&amp;prev_line_num_right=&amp;right_hunk_size=6" data-left-range="1-7" data-right-range="1-7">
        <svg aria-hidden="true" class="octicon octicon-unfold" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path d="M11.5 7.5L14 10c0 .55-.45 1-1 1H9v-1h3.5l-2-2h-7l-2 2H5v1H1c-.55 0-1-.45-1-1l2.5-2.5L0 5c0-.55.45-1 1-1h4v1H1.5l2 2h7l2-2H9V4h4c.55 0 1 .45 1 1l-2.5 2.5zM6 6h2V3h2L7 0 4 3h2v3zm2 3H6v3H4l3 3 3-3H8V9z"></path></svg>
      </a>
    </td>
    <td class="blob-code blob-code-inner blob-code-hunk">@@ -8,5 +8,6 @@ module.exports = defineRequirements(BusinessProcessDemo, [</td>
  </tr>

    <tr>
    <td id="diff-a941a7aba115931b72a56d41bfddd500L8" data-line-number="8" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-a941a7aba115931b72a56d41bfddd500R8" data-line-number="8" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner"> 	<span class="pl-c1">require</span>(<span class="pl-s"><span class="pl-pds">'</span>../documents/business-plan<span class="pl-pds">'</span></span>),</span>

  </td>
</tr>


    <tr>
    <td id="diff-a941a7aba115931b72a56d41bfddd500L9" data-line-number="9" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-a941a7aba115931b72a56d41bfddd500R9" data-line-number="9" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner"> 	<span class="pl-c1">require</span>(<span class="pl-s"><span class="pl-pds">'</span>../documents/company-registration<span class="pl-pds">'</span></span>),</span>

  </td>
</tr>


    <tr>
    <td id="diff-a941a7aba115931b72a56d41bfddd500L10" data-line-number="10" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-a941a7aba115931b72a56d41bfddd500R10" data-line-number="10" class="blob-num blob-num-context js-linkable-line-number"></td>

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

    <td id="diff-a941a7aba115931b72a56d41bfddd500R11" data-line-number="11" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+	<span class="pl-c1">require</span>(<span class="pl-s"><span class="pl-pds">'</span>../documents/passport<span class="pl-pds">'</span></span>),</span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-a941a7aba115931b72a56d41bfddd500R12" data-line-number="12" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+	<span class="pl-c1">require</span>(<span class="pl-s"><span class="pl-pds">'</span>../documents/driving-license<span class="pl-pds">'</span></span>)</span>

  </td>
</tr>


    <tr>
    <td id="diff-a941a7aba115931b72a56d41bfddd500L12" data-line-number="12" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-a941a7aba115931b72a56d41bfddd500R13" data-line-number="13" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner"> ]);</span>

  </td>
</tr>



        </tbody></table>
      </div>
</div>

</div>
