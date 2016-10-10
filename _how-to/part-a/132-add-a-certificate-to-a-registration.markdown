---
layout: recipe
permalink: /how-to/add-a-certificate-to-a-registration/
title: 'Add another certificate to a registration'
category: '1. Part A'
sub-category: 'Certificates'
rate: '2'
number: '132'
introduction-text: 'Usually registration results with one certificate (of same name). Still there can be the case where result of registration is more than one certificate.'
introduction-img: '133.png'
prevUrl: 131
nextUrl: 133
done: 'yes'
lang: en
ref: 132
---

Every registration is associated with a service, so to modify it, we need to know the service to which it applies.

By default, each registration is configured to result in one certificate. This is done automatically by the framework when the registration is defined. In order to change that, one must override the `certificates` getter definition on a given registration.

**Note:** When changing registration certificates, remember to include both the default one and additional ones in the results array.

1. Open file `model/business-process-<your-service>/registrations/<your-registration>.js`.
2. Add a `certificates` getter definition, that will return an array of certificate results:

```javascript
certificates: function () {
    var certificatesMap = this.master.certificates.map;

    return [certificatesMap.firstCertificate, certificatesMap.otherCertificate];
}
```

## Example

In the branch "[add-a-certificate-to-a-registration](https://github.com/egovernment/eregistrations-demo/tree/add-a-certificate-to-a-registration)" of eregistrations-demo :

Make `companyRegistration` registration result in both `companyRegistration` and `businessAddressCertification` certificate.

### Solution

<div id="files" class="diff-view " onclick="window.open('https://github.com/egovernment/eregistrations-demo/compare/add-a-certificate-to-a-registration...add-a-certificate-to-a-registration-solution#files')">


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

          <a href="/egovernment/eregistrations-demo/blob/c62847f1ec0ca46555ef7ebe67c62afbd74b2c13/model/business-process-demo/registrations/company-registration.js" class="btn btn-sm tooltipped tooltipped-nw" rel="nofollow" aria-label="View the whole file at version c62847f ">View</a>

          <a class="btn-octicon tooltipped tooltipped-n" href="https://windows.github.com" aria-label="Open this file in GitHub Desktop" data-ga-click="Repository, open with desktop, type:windows">
              <svg aria-hidden="true" class="octicon octicon-device-desktop" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M15 2H1c-.55 0-1 .45-1 1v9c0 .55.45 1 1 1h5.34c-.25.61-.86 1.39-2.34 2h8c-1.48-.61-2.09-1.39-2.34-2H15c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm0 9H1V3h14v8z"></path></svg>
          </a>

    </div>
    <div class="file-info">
        <span class="diffstat tooltipped tooltipped-e" aria-label="5 additions &amp; 0 deletions">5 <span class="block-diff-added"></span><span class="block-diff-added"></span><span class="block-diff-added"></span><span class="block-diff-added"></span><span class="block-diff-added"></span></span>

      <span class="user-select-contain" title="model/business-process-demo/registrations/company-registration.js">
        model/business-process-demo/registrations/company-registration.js
      </span>

    </div>
  </div>

      <div class="data highlight blob-wrapper">
        <table class="diff-table tab-size  " data-tab-size="8">

      <tbody><tr class="js-expandable-line" data-position="0">
    <td class="blob-num blob-num-expandable" colspan="2">
      <a href="#diff-1f850bcf53b7031d6fe5fc7942d460b9" class="diff-expander js-expand" title="Expand" aria-label="Expand" data-url="/egovernment/eregistrations-demo/blob_excerpt/a2c72af3ccf47e5bebe0a6f71af7a9b81bf34dac?diff=unified&amp;in_wiki_context=&amp;left_hunk_size=5&amp;mode=100644&amp;next_line_num_left=17&amp;next_line_num_right=17&amp;path=model%2Fbusiness-process-demo%2Fregistrations%2Fcompany-registration.js&amp;prev_line_num_left=&amp;prev_line_num_right=&amp;right_hunk_size=10" data-left-range="1-16" data-right-range="1-16">
        <svg aria-hidden="true" class="octicon octicon-unfold" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path d="M11.5 7.5L14 10c0 .55-.45 1-1 1H9v-1h3.5l-2-2h-7l-2 2H5v1H1c-.55 0-1-.45-1-1l2.5-2.5L0 5c0-.55.45-1 1-1h4v1H1.5l2 2h7l2-2H9V4h4c.55 0 1 .45 1 1l-2.5 2.5zM6 6h2V3h2L7 0 4 3h2v3zm2 3H6v3H4l3 3 3-3H8V9z"></path></svg>
      </a>
    </td>
    <td class="blob-code blob-code-inner blob-code-hunk">@@ -17,5 +17,10 @@ BusinessProcessDemo.prototype.registrations.map.companyRegistration.setPropertie</td>
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
    <td id="diff-1f850bcf53b7031d6fe5fc7942d460b9L19" data-line-number="19" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-1f850bcf53b7031d6fe5fc7942d460b9R19" data-line-number="19" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner">      <span class="pl-k">return</span> [<span class="pl-smi">requirementsMap</span>.<span class="pl-smi">inventory</span>, <span class="pl-smi">requirementsMap</span>.<span class="pl-smi">passport</span>];</span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-1f850bcf53b7031d6fe5fc7942d460b9R20" data-line-number="20" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+ },</span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-1f850bcf53b7031d6fe5fc7942d460b9R21" data-line-number="21" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+ <span class="pl-en">certificates</span><span class="pl-k">:</span> <span class="pl-k">function</span> () {</span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-1f850bcf53b7031d6fe5fc7942d460b9R22" data-line-number="22" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+     <span class="pl-k">var</span> certificatesMap <span class="pl-k">=</span> <span class="pl-v">this</span>.<span class="pl-smi">master</span>.<span class="pl-smi">certificates</span>.<span class="pl-smi">map</span>;</span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-1f850bcf53b7031d6fe5fc7942d460b9R23" data-line-number="23" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+</span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-1f850bcf53b7031d6fe5fc7942d460b9R24" data-line-number="24" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+     <span class="pl-k">return</span> [<span class="pl-smi">certificatesMap</span>.<span class="pl-smi">companyRegistration</span>, <span class="pl-smi">certificatesMap</span>.<span class="pl-smi">businessAddressCertification</span>];</span>

  </td>
</tr>


    <tr>
    <td id="diff-1f850bcf53b7031d6fe5fc7942d460b9L20" data-line-number="20" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-1f850bcf53b7031d6fe5fc7942d460b9R25" data-line-number="25" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner">  }</span>

  </td>
</tr>


    <tr>
    <td id="diff-1f850bcf53b7031d6fe5fc7942d460b9L21" data-line-number="21" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-1f850bcf53b7031d6fe5fc7942d460b9R26" data-line-number="26" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner"> });</span>

  </td>
</tr>



        </tbody></table>
      </div>
</div>


</div>
