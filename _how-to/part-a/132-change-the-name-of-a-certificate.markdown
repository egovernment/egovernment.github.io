---
layout: recipe
permalink: /how-to/change-the-name-of-a-certificate/
title: 'Change the name of a certificate'
category: '1. Part A'
sub-category: 'Certificates'
rate: '1'
number: '132'
introduction-text: 'Changing the name of a certificate impacts on all the certificates already processed in the system.'
introduction-img: '131.png'
prevUrl: 131
nextUrl: 133
done: 'yes'
lang: en
ref: 132
---

The name of a certificate is defined on a document that it's extended from. Changing document name will also change the certificate name.

Please bare in mind that, by default, registration name is also inherited from the certificate corresponding to it. If the name of the registration should remain unchanged, check ['How to 112 - Change the label of a registration'](/how-to/change-the-name-and-the-short-name-of-a-registration/).

1. Open file `model/documents/<document>.js` (the file name should be hyphened version of the document’s name).
2. Set the value of a label property to the desired name.

## Example

**Starting Branch: [change-the-name-of-a-certificate](https://github.com/egovernment/eregistrations-demo/tree/change-the-name-of-a-certificate)**

Change label of company registration certificate to *"Company registration in Ministry of Company Registrations"*.

### Solution

<div id="files" class="diff-view " onclick="window.open('https://github.com/egovernment/eregistrations-demo/compare/change-the-name-of-a-certificate...change-the-name-of-a-certificate-solution#files')">

<a name="diff-fbef8e6cd32d5bc7509b42d498dce477"></a>
<div id="diff-0" class="file js-details-container




             show-inline-notes
           ">
  <div class="file-header" data-path="model/documents/company-registration.js">
    <div class="file-actions">
        <span class="show-file-notes">
          <label>
            <input checked="checked" class="js-toggle-file-notes" type="checkbox">
            Show notes
          </label>
        </span>

          <a href="/egovernment/eregistrations-demo/blob/51e06a416cba65a376ac4b82ecb5f16cadafc063/model/documents/company-registration.js" class="btn btn-sm tooltipped tooltipped-nw" rel="nofollow" aria-label="View the whole file at version 51e06a4 ">View</a>


    </div>
    <div class="file-info">
        <span class="diffstat tooltipped tooltipped-e" aria-label="1 addition &amp; 1 deletion">2 <span class="block-diff-added"></span><span class="block-diff-deleted"></span><span class="block-diff-neutral"></span><span class="block-diff-neutral"></span><span class="block-diff-neutral"></span></span>

      <span class="user-select-contain" title="model/documents/company-registration.js">
        model/documents/company-registration.js
      </span>

    </div>
  </div>

      <div class="data highlight blob-wrapper">
        <table class="diff-table tab-size  " data-tab-size="8">

      <tbody><tr class="js-expandable-line" data-position="0">
    <td class="blob-num blob-num-expandable" colspan="2">
      <a href="#diff-fbef8e6cd32d5bc7509b42d498dce477" class="diff-expander js-expand" title="Expand" aria-label="Expand" data-url="/egovernment/eregistrations-demo/blob_excerpt/e24016943cdd40610ef5ae8a37be5d375da89bdf?diff=unified&amp;in_wiki_context=&amp;left_hunk_size=6&amp;mode=100644&amp;next_line_num_left=4&amp;next_line_num_right=4&amp;path=model%2Fdocuments%2Fcompany-registration.js&amp;prev_line_num_left=&amp;prev_line_num_right=&amp;right_hunk_size=6" data-left-range="1-3" data-right-range="1-3">
        <svg aria-hidden="true" class="octicon octicon-unfold" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path d="M11.5 7.5L14 10c0 .55-.45 1-1 1H9v-1h3.5l-2-2h-7l-2 2H5v1H1c-.55 0-1-.45-1-1l2.5-2.5L0 5c0-.55.45-1 1-1h4v1H1.5l2 2h7l2-2H9V4h4c.55 0 1 .45 1 1l-2.5 2.5zM6 6h2V3h2L7 0 4 3h2v3zm2 3H6v3H4l3 3 3-3H8V9z"></path></svg>
      </a>
    </td>
    <td class="blob-code blob-code-inner blob-code-hunk">@@ -4,6 +4,6 @@ var _  = require('../../i18n')</td>
  </tr>

    <tr>
    <td id="diff-fbef8e6cd32d5bc7509b42d498dce477L4" data-line-number="4" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-fbef8e6cd32d5bc7509b42d498dce477R4" data-line-number="4" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner">   , db <span class="pl-k">=</span> <span class="pl-c1">require</span>(<span class="pl-s"><span class="pl-pds">'</span>../../db<span class="pl-pds">'</span></span>);</span>

  </td>
</tr>


    <tr>
    <td id="diff-fbef8e6cd32d5bc7509b42d498dce477L5" data-line-number="5" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-fbef8e6cd32d5bc7509b42d498dce477R5" data-line-number="5" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner"> </span>

  </td>
</tr>


    <tr>
    <td id="diff-fbef8e6cd32d5bc7509b42d498dce477L6" data-line-number="6" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-fbef8e6cd32d5bc7509b42d498dce477R6" data-line-number="6" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner"> <span class="pl-c1">module</span>.<span class="pl-smi">exports</span> <span class="pl-k">=</span> <span class="pl-c1">require</span>(<span class="pl-s"><span class="pl-pds">'</span>eregistrations/model/document<span class="pl-pds">'</span></span>)(db).<span class="pl-en">extend</span>(<span class="pl-s"><span class="pl-pds">'</span>CompanyRegistration<span class="pl-pds">'</span></span>, {}, {</span>

  </td>
</tr>


    <tr>
    <td id="diff-fbef8e6cd32d5bc7509b42d498dce477L7" data-line-number="7" class="blob-num blob-num-deletion js-linkable-line-number"></td>

    <td class="blob-num blob-num-deletion empty-cell"></td>

  <td class="blob-code blob-code-deletion">

    <span class="blob-code-inner">- label<span class="pl-k">:</span> { value<span class="pl-k">:</span> <span class="pl-en">_</span>(<span class="pl-s"><span class="pl-pds">"</span>Company registration<span class="pl-pds">"</span></span>) },</span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-fbef8e6cd32d5bc7509b42d498dce477R7" data-line-number="7" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+ label<span class="pl-k">:</span> { value<span class="pl-k">:</span> <span class="pl-en">_</span>(<span class="pl-s"><span class="pl-pds">"</span>Company registration<span class="x x-first x-last"> in Ministry of Company Registrations</span><span class="pl-pds">"</span></span>) },</span>

  </td>
</tr>


    <tr>
    <td id="diff-fbef8e6cd32d5bc7509b42d498dce477L8" data-line-number="8" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-fbef8e6cd32d5bc7509b42d498dce477R8" data-line-number="8" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner">  abbr<span class="pl-k">:</span> { value<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">"</span>CREG<span class="pl-pds">"</span></span> }</span>

  </td>
</tr>


    <tr>
    <td id="diff-fbef8e6cd32d5bc7509b42d498dce477L9" data-line-number="9" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-fbef8e6cd32d5bc7509b42d498dce477R9" data-line-number="9" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner"> });</span>

  </td>
</tr>



        </tbody></table>
      </div>
</div>

</div>
