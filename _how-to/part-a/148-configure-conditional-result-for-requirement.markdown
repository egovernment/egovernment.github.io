---
layout: recipe
permalink: /how-to/configure-conditional-upload-for-requirement/
title: 'Configure requirement to resolve to different documents depending on some condition'
category: '1. Part A'
sub-category: 'Requirements'
rate: '3'
number: '148'
introduction-text: 'A requirement is a document that needs to be uploaded with the registrations file. Very often this document needs to be shown at the Front Desk to withdraw the certificate(s). The requirement is triggered by it determinant(s) and appear in the guide only when the registration to which it is linked is checked by the user.<br>Here we will see how to add a requirement to a registration that will require the user to upload either one of two kinds of documents depending on other questions.'
introduction-img: '145.png'
prevUrl: 147
nextUrl: 151
done: ''
lang: en
ref: 148
---

A requirement is a rule about providing certain document to the officials. Every requirement belongs to a registration. Requirement is not a document.

By default requirements are defined and set for given business process using a generator ([`eregistrations/model/business-process-new/utils/define-requirements`](https://github.com/egovernment/eregistrations/blob/master/model/business-process-new/utils/define-requirements.js)).  In order to add a requirement that resolves into different uploads we need to define a Requirement directly on a requirements nested map.

The new requirement should override at least two properties:

- `label` - set to a translation string (this label will be shown to the user in Guide)
- `uploads` - a getter that resolves requirement uploads

1. Open file `model/<business-process-your-service>/requirements.js`.
3. Define a new requirement upload at the end of the file:

```javascript

BusinessProcessYoutService.prototype.requirements.map.define('requirementName', {
    nested: true
});

BusinessProcessYoutService.prototype.requirements.map.requirementName.setProperties({
    label: _("Requirement label"),
    uploads: function (_observe) {
        var requirementUploadsMap = this.master.requirementUploads.map
          , someProperty          = _observe(this.master._someProperty);

        if (someProperty > 0) {
            return [requirementUploadsMap.someRequirementUpload];
        }

        return [requirementUploadsMap.someOtherRequirementUpload];
    }
});
```

**Note:** Remember to add this new requirement to a registration: [Mark requirement as needed by chosen registration](how-to/add-a-requirement-to-a-registration).

## Example

In the branch "[configure-conditional-upload-for-requirement](https://github.com/egovernment/eregistrations-demo/tree/configure-conditional-upload-for-requirement-solution)" of eregistrations-demo :

Add a new requirement, *"Personal Id or passport of the attorney"* that will resolve into `attorneyPersonalId` requirement upload if the attorneys `nationality` property will Afghanistan (`AF`) or `attorneyPassport` in any other case. In case the nationality is not set, the getter should return an empty array.

### Solution

<div id="files" class="diff-view " onclick="window.open('https://github.com/egovernment/eregistrations-demo/compare/configure-conditional-upload-for-requirement...configure-conditional-upload-for-requirement-solution#files')">


<a name="diff-1f850bcf53b7031d6fe5fc7942d460b9"></a>
<div id="diff-0" class="file js-details-container




             show-inline-notes
           ">
  <div class="file-header" data-path="model/business-process-demo/registrations/company-registration.js">
    <div class="file-actions">
        <span class="show-file-notes">
          <label>
            <input checked="checked" class="js-toggle-file-notes" type="checkbox">
            Show notes
          </label>
        </span>

          <a href="/egovernment/eregistrations-demo/blob/fa528a6f8790e7dd3c9fc084c97cca87fe89f7d2/model/business-process-demo/registrations/company-registration.js" class="btn btn-sm tooltipped tooltipped-nw" rel="nofollow" aria-label="View the whole file at version fa528a6 ">View</a>

          <a class="btn-octicon tooltipped tooltipped-nw" href="https://mac.github.com" aria-label="Open this file in GitHub Desktop" data-ga-click="Repository, open with desktop, type:mac">
              <svg aria-hidden="true" class="octicon octicon-device-desktop" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M15 2H1c-.55 0-1 .45-1 1v9c0 .55.45 1 1 1h5.34c-.25.61-.86 1.39-2.34 2h8c-1.48-.61-2.09-1.39-2.34-2H15c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm0 9H1V3h14v8z"></path></svg>
          </a>

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
      <a href="#diff-1f850bcf53b7031d6fe5fc7942d460b9" class="diff-expander js-expand" title="Expand" aria-label="Expand" data-url="/egovernment/eregistrations-demo/blob_excerpt/fd0768f1d5369b7879da9f9ae89cd051113e36a8?diff=unified&amp;in_wiki_context=&amp;left_hunk_size=6&amp;mode=100644&amp;next_line_num_left=16&amp;next_line_num_right=16&amp;path=model%2Fbusiness-process-demo%2Fregistrations%2Fcompany-registration.js&amp;prev_line_num_left=&amp;prev_line_num_right=&amp;right_hunk_size=6" data-left-range="1-15" data-right-range="1-15">
        <svg aria-hidden="true" class="octicon octicon-unfold" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path d="M11.5 7.5L14 10c0 .55-.45 1-1 1H9v-1h3.5l-2-2h-7l-2 2H5v1H1c-.55 0-1-.45-1-1l2.5-2.5L0 5c0-.55.45-1 1-1h4v1H1.5l2 2h7l2-2H9V4h4c.55 0 1 .45 1 1l-2.5 2.5zM6 6h2V3h2L7 0 4 3h2v3zm2 3H6v3H4l3 3 3-3H8V9z"></path></svg>
      </a>
    </td>
    <td class="blob-code blob-code-inner blob-code-hunk">@@ -16,6 +16,6 @@ BusinessProcessDemo.prototype.registrations.map.companyRegistration.setPropertie</td>
  </tr>

    <tr>
    <td id="diff-1f850bcf53b7031d6fe5fc7942d460b9L16" data-line-number="16" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-1f850bcf53b7031d6fe5fc7942d460b9R16" data-line-number="16" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner">  },</span>

  </td>
</tr>


    <tr>
    <td id="diff-1f850bcf53b7031d6fe5fc7942d460b9L17" data-line-number="17" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-1f850bcf53b7031d6fe5fc7942d460b9R17" data-line-number="17" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner">  <span class="pl-en">requirements</span><span class="pl-k">:</span> <span class="pl-k">function</span> () {</span>

  </td>
</tr>


    <tr>
    <td id="diff-1f850bcf53b7031d6fe5fc7942d460b9L18" data-line-number="18" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-1f850bcf53b7031d6fe5fc7942d460b9R18" data-line-number="18" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner">      <span class="pl-k">var</span> requirementsMap <span class="pl-k">=</span> <span class="pl-v">this</span>.<span class="pl-smi">master</span>.<span class="pl-smi">requirements</span>.<span class="pl-smi">map</span>;</span>

  </td>
</tr>


    <tr>
    <td id="diff-1f850bcf53b7031d6fe5fc7942d460b9L19" data-line-number="19" class="blob-num blob-num-deletion js-linkable-line-number"></td>

    <td class="blob-num blob-num-deletion empty-cell"></td>

  <td class="blob-code blob-code-deletion">

    <span class="blob-code-inner">-     <span class="pl-k">return</span> [<span class="pl-smi">requirementsMap</span>.<span class="pl-smi">inventory</span>, <span class="pl-smi">requirementsMap</span>.<span class="pl-smi">passport</span>];</span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-1f850bcf53b7031d6fe5fc7942d460b9R19" data-line-number="19" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+     <span class="pl-k">return</span> [<span class="pl-smi">requirementsMap</span>.<span class="pl-smi">inventory</span>, <span class="pl-smi">requirementsMap</span>.<span class="pl-smi">passport</span><span class="x x-first">, </span><span class="pl-smi x">requirementsMap</span><span class="x">.</span><span class="pl-smi x x-last">attorneyId</span>];</span>

  </td>
</tr>


    <tr>
    <td id="diff-1f850bcf53b7031d6fe5fc7942d460b9L20" data-line-number="20" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-1f850bcf53b7031d6fe5fc7942d460b9R20" data-line-number="20" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner">  }</span>

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


<a name="diff-a941a7aba115931b72a56d41bfddd500"></a>
<div id="diff-1" class="file js-details-container




             show-inline-notes
           ">
  <div class="file-header" data-path="model/business-process-demo/requirements.js">
    <div class="file-actions">
        <span class="show-file-notes">
          <label>
            <input checked="checked" class="js-toggle-file-notes" type="checkbox">
            Show notes
          </label>
        </span>

          <a href="/egovernment/eregistrations-demo/blob/fa528a6f8790e7dd3c9fc084c97cca87fe89f7d2/model/business-process-demo/requirements.js" class="btn btn-sm tooltipped tooltipped-nw" rel="nofollow" aria-label="View the whole file at version fa528a6 ">View</a>

          <a class="btn-octicon tooltipped tooltipped-nw" href="https://mac.github.com" aria-label="Open this file in GitHub Desktop" data-ga-click="Repository, open with desktop, type:mac">
              <svg aria-hidden="true" class="octicon octicon-device-desktop" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M15 2H1c-.55 0-1 .45-1 1v9c0 .55.45 1 1 1h5.34c-.25.61-.86 1.39-2.34 2h8c-1.48-.61-2.09-1.39-2.34-2H15c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm0 9H1V3h14v8z"></path></svg>
          </a>

    </div>
    <div class="file-info">
        <span class="diffstat tooltipped tooltipped-e" aria-label="22 additions &amp; 1 deletion">23 <span class="block-diff-added"></span><span class="block-diff-added"></span><span class="block-diff-added"></span><span class="block-diff-added"></span><span class="block-diff-neutral"></span></span>

      <span class="user-select-contain" title="model/business-process-demo/requirements.js">
        model/business-process-demo/requirements.js
      </span>

    </div>
  </div>

      <div class="data highlight blob-wrapper">
        <table class="diff-table tab-size  " data-tab-size="8">

      <tbody><tr class="js-expandable-line" data-position="0">
    <td class="blob-num blob-num-expandable" colspan="2">
      <a href="#diff-a941a7aba115931b72a56d41bfddd500" class="diff-expander js-expand" title="Expand" aria-label="Expand" data-url="/egovernment/eregistrations-demo/blob_excerpt/83d4c60032e56a4ee560d072c980f6f392ec6ed8?diff=unified&amp;in_wiki_context=&amp;left_hunk_size=11&amp;mode=100644&amp;next_line_num_left=2&amp;next_line_num_right=2&amp;path=model%2Fbusiness-process-demo%2Frequirements.js&amp;prev_line_num_left=&amp;prev_line_num_right=&amp;right_hunk_size=32" data-left-range="1-1" data-right-range="1-1">
        <svg aria-hidden="true" class="octicon octicon-unfold" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path d="M11.5 7.5L14 10c0 .55-.45 1-1 1H9v-1h3.5l-2-2h-7l-2 2H5v1H1c-.55 0-1-.45-1-1l2.5-2.5L0 5c0-.55.45-1 1-1h4v1H1.5l2 2h7l2-2H9V4h4c.55 0 1 .45 1 1l-2.5 2.5zM6 6h2V3h2L7 0 4 3h2v3zm2 3H6v3H4l3 3 3-3H8V9z"></path></svg>
      </a>
    </td>
    <td class="blob-code blob-code-inner blob-code-hunk">@@ -2,11 +2,32 @@</td>
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

    <span class="blob-code-inner">  <span class="pl-c1">require</span>(<span class="pl-s"><span class="pl-pds">'</span>eregistrations/model/business-process-new/utils/define-requirements<span class="pl-pds">'</span></span>);</span>

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

    <span class="blob-code-inner">+  , _                   <span class="pl-k">=</span> <span class="pl-c1">require</span>(<span class="pl-s"><span class="pl-pds">'</span>../../i18n<span class="pl-pds">'</span></span>);</span>

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

    <span class="blob-code-inner">  <span class="pl-c1">require</span>(<span class="pl-s"><span class="pl-pds">'</span>../documents/business-plan<span class="pl-pds">'</span></span>),</span>

  </td>
</tr>


    <tr>
    <td id="diff-a941a7aba115931b72a56d41bfddd500L9" data-line-number="9" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-a941a7aba115931b72a56d41bfddd500R10" data-line-number="10" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner">  <span class="pl-c1">require</span>(<span class="pl-s"><span class="pl-pds">'</span>../documents/company-registration<span class="pl-pds">'</span></span>),</span>

  </td>
</tr>


    <tr>
    <td id="diff-a941a7aba115931b72a56d41bfddd500L10" data-line-number="10" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-a941a7aba115931b72a56d41bfddd500R11" data-line-number="11" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner">  <span class="pl-c1">require</span>(<span class="pl-s"><span class="pl-pds">'</span>../documents/inventory<span class="pl-pds">'</span></span>),</span>

  </td>
</tr>


    <tr>
    <td id="diff-a941a7aba115931b72a56d41bfddd500L11" data-line-number="11" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-a941a7aba115931b72a56d41bfddd500R12" data-line-number="12" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner">  <span class="pl-c1">require</span>(<span class="pl-s"><span class="pl-pds">'</span>../documents/passport<span class="pl-pds">'</span></span>)</span>

  </td>
</tr>


    <tr>
    <td id="diff-a941a7aba115931b72a56d41bfddd500L12" data-line-number="12" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-a941a7aba115931b72a56d41bfddd500R13" data-line-number="13" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner"> ]);</span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-a941a7aba115931b72a56d41bfddd500R14" data-line-number="14" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+</span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-a941a7aba115931b72a56d41bfddd500R15" data-line-number="15" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+<span class="pl-smi">BusinessProcessDemo</span>.<span class="pl-c1">prototype</span>.<span class="pl-smi">requirements</span>.<span class="pl-smi">map</span>.<span class="pl-en">define</span>(<span class="pl-s"><span class="pl-pds">'</span>attorneyId<span class="pl-pds">'</span></span>, {</span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-a941a7aba115931b72a56d41bfddd500R16" data-line-number="16" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+ nested<span class="pl-k">:</span> <span class="pl-c1">true</span></span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-a941a7aba115931b72a56d41bfddd500R17" data-line-number="17" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+});</span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-a941a7aba115931b72a56d41bfddd500R18" data-line-number="18" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+</span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-a941a7aba115931b72a56d41bfddd500R19" data-line-number="19" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+<span class="pl-smi">BusinessProcessDemo</span>.<span class="pl-c1">prototype</span>.<span class="pl-smi">requirements</span>.<span class="pl-smi">map</span>.<span class="pl-smi">attorneyId</span>.<span class="pl-en">setProperties</span>({</span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-a941a7aba115931b72a56d41bfddd500R20" data-line-number="20" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+ label<span class="pl-k">:</span> <span class="pl-en">_</span>(<span class="pl-s"><span class="pl-pds">"</span>Personal Id or passport of the attorney<span class="pl-pds">"</span></span>),</span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-a941a7aba115931b72a56d41bfddd500R21" data-line-number="21" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+ <span class="pl-en">uploads</span><span class="pl-k">:</span> <span class="pl-k">function</span> (<span class="pl-smi">_observe</span>) {</span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-a941a7aba115931b72a56d41bfddd500R22" data-line-number="22" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+     <span class="pl-k">var</span> requirementUploadsMap <span class="pl-k">=</span> <span class="pl-v">this</span>.<span class="pl-smi">master</span>.<span class="pl-smi">requirementUploads</span>.<span class="pl-smi">map</span></span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-a941a7aba115931b72a56d41bfddd500R23" data-line-number="23" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+       , nationality           <span class="pl-k">=</span> <span class="pl-en">_observe</span>(<span class="pl-v">this</span>.<span class="pl-smi">master</span>.<span class="pl-smi">attorney</span>.<span class="pl-smi">_nationality</span>);</span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-a941a7aba115931b72a56d41bfddd500R24" data-line-number="24" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+</span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-a941a7aba115931b72a56d41bfddd500R25" data-line-number="25" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+     <span class="pl-k">if</span> (<span class="pl-k">!</span>nationality) <span class="pl-k">return</span> [];</span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-a941a7aba115931b72a56d41bfddd500R26" data-line-number="26" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+</span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-a941a7aba115931b72a56d41bfddd500R27" data-line-number="27" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+     <span class="pl-k">if</span> (nationality <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">'</span>AF<span class="pl-pds">'</span></span>) {</span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-a941a7aba115931b72a56d41bfddd500R28" data-line-number="28" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+         <span class="pl-k">return</span> [<span class="pl-smi">requirementUploadsMap</span>.<span class="pl-smi">attorneyPersonalId</span>];</span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-a941a7aba115931b72a56d41bfddd500R29" data-line-number="29" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+     }</span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-a941a7aba115931b72a56d41bfddd500R30" data-line-number="30" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+</span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-a941a7aba115931b72a56d41bfddd500R31" data-line-number="31" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+     <span class="pl-k">return</span> [<span class="pl-smi">requirementUploadsMap</span>.<span class="pl-smi">attorneyPassport</span>];</span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-a941a7aba115931b72a56d41bfddd500R32" data-line-number="32" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+ }</span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-a941a7aba115931b72a56d41bfddd500R33" data-line-number="33" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+});</span>

  </td>
</tr>



        </tbody></table>
      </div>
</div>


</div>
