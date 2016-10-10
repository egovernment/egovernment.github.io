---
layout: recipe
permalink: /how-to/add-a-new-certificate/
title: 'Add a new certificate'
category: '1. Part A'
sub-category: 'Certificates'
rate: '2'
number: '131'
introduction-text: 'The certificate is a document, for which end user applies.
Giving a certificate to the end user usually concludes the processing of a file.<br>
This recipe is about adding a new certificate class.'
introduction-img: '131-1.png'
prevUrl: 123
nextUrl: 132
done: ''
lang: en
ref: 131
---

Certificate is a special type of `Document` (In future it will have an independent class).

Certificates belong to registrations. Hence, they are defined in the context of a given service.

In order to create a new certificate:

1. Create file `model/business-process-<your-service>/certificates/<your-certificate>.js`
2. Create a certificate by decorating a source document (See example below for implementation details).

Mind that we are only making a certificate out of existing document. To see how to create new document [read this](/how-to/add-a-new-document/).

In order for your newly created certificate to have any effect in the system it has to be assigned to some registration.

If you want to have a dedicated registration for the certificate you have to create it ([read about creating new registration](/how-to/add-a-registration-to-a-service/)). If you want to assign your certificate to an already existing registration [read this](/how-to/add-a-certificate-to-a-registration/).

## Example

In the branch "[add-new-certificate](https://github.com/egovernment/eregistrations-demo/tree/add-new-certificate)" of eregistrations-demo :

Add new certificate based on *"Driving License"* document.

### Solution

<div id="files" class="diff-view " onclick="window.open('https://github.com/egovernment/eregistrations-demo/compare/add-new-certificate...add-new-certificate-solution#files')">

    
<a name="diff-cd8984734d90b28a73be0eca25690e6c"></a>
<div id="diff-0" class="file js-details-container
             
             
             
             
             show-inline-notes
           ">
  <div class="file-header" data-path="model/business-process-demo/certificates/driving-license.js">
    <div class="file-actions">
        <span class="show-file-notes">
          <label>
            <input type="checkbox" checked="checked" class="js-toggle-file-notes">
            Show notes
          </label>
        </span>

          <a href="/egovernment/eregistrations-demo/blob/c0ed7815b7cf5596db31f5b98e4f6b6b7555c44e/model/business-process-demo/certificates/driving-license.js" class="btn btn-sm tooltipped tooltipped-nw" rel="nofollow" aria-label="View the whole file at version c0ed781 ">View</a>


    </div>
    <div class="file-info">
        <span class="diffstat tooltipped tooltipped-e" aria-label="21 additions &amp; 0 deletions">21 <span class="block-diff-added"></span><span class="block-diff-added"></span><span class="block-diff-added"></span><span class="block-diff-added"></span><span class="block-diff-added"></span></span>

      <span class="user-select-contain" title="model/business-process-demo/certificates/driving-license.js">
        model/business-process-demo/certificates/driving-license.js
      </span>
      
    </div>
  </div>

      <div class="data highlight blob-wrapper">
        <table class="diff-table tab-size  " data-tab-size="8">
          
      <tbody><tr data-position="0">
    <td id="diff-cd8984734d90b28a73be0eca25690e6cL-1" class="blob-num blob-num-hunk non-expandable" data-line-number="..."></td>
    <td id="diff-cd8984734d90b28a73be0eca25690e6cR0" class="blob-num blob-num-hunk non-expandable" data-line-number="..."></td>
    <td class="blob-code blob-code-inner blob-code-hunk">@@ -0,0 +1,21 @@</td>
  </tr>

    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-cd8984734d90b28a73be0eca25690e6cR1" data-line-number="1" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+<span class="pl-s"><span class="pl-pds">'</span>use strict<span class="pl-pds">'</span></span>;</span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-cd8984734d90b28a73be0eca25690e6cR2" data-line-number="2" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+</span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-cd8984734d90b28a73be0eca25690e6cR3" data-line-number="3" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+<span class="pl-k">var</span> db             <span class="pl-k">=</span> <span class="pl-c1">require</span>(<span class="pl-s"><span class="pl-pds">'</span>../../../db<span class="pl-pds">'</span></span>)</span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-cd8984734d90b28a73be0eca25690e6cR4" data-line-number="4" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+  , FormSection    <span class="pl-k">=</span> <span class="pl-c1">require</span>(<span class="pl-s"><span class="pl-pds">'</span>eregistrations/model/form-section<span class="pl-pds">'</span></span>)(db)</span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-cd8984734d90b28a73be0eca25690e6cR5" data-line-number="5" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+  , DrivingLicense <span class="pl-k">=</span> <span class="pl-c1">require</span>(<span class="pl-s"><span class="pl-pds">'</span>../../documents/driving-license<span class="pl-pds">'</span></span>);</span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-cd8984734d90b28a73be0eca25690e6cR6" data-line-number="6" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+</span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-cd8984734d90b28a73be0eca25690e6cR7" data-line-number="7" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+<span class="pl-c1">module</span>.<span class="pl-smi">exports</span> <span class="pl-k">=</span> DrivingLicense;</span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-cd8984734d90b28a73be0eca25690e6cR8" data-line-number="8" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+</span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-cd8984734d90b28a73be0eca25690e6cR9" data-line-number="9" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+<span class="pl-smi">DrivingLicense</span>.<span class="pl-c1">prototype</span>.<span class="pl-en">defineProperties</span>({</span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-cd8984734d90b28a73be0eca25690e6cR10" data-line-number="10" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+	dataForm<span class="pl-k">:</span> { type<span class="pl-k">:</span> FormSection },</span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-cd8984734d90b28a73be0eca25690e6cR11" data-line-number="11" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+	processingStep<span class="pl-k">:</span> { <span class="pl-en">value</span><span class="pl-k">:</span> <span class="pl-k">function</span> () { <span class="pl-k">return</span> <span class="pl-v">this</span>.<span class="pl-smi">master</span>.<span class="pl-smi">processingSteps</span>.<span class="pl-smi">map</span>.<span class="pl-smi">processing</span>; } },</span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-cd8984734d90b28a73be0eca25690e6cR12" data-line-number="12" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+	isToBeHanded<span class="pl-k">:</span> { value<span class="pl-k">:</span> <span class="pl-c1">true</span> }</span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-cd8984734d90b28a73be0eca25690e6cR13" data-line-number="13" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+});</span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-cd8984734d90b28a73be0eca25690e6cR14" data-line-number="14" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+</span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-cd8984734d90b28a73be0eca25690e6cR15" data-line-number="15" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+<span class="pl-smi">DrivingLicense</span>.<span class="pl-c1">prototype</span>.<span class="pl-smi">dataForm</span>.<span class="pl-en">setProperties</span>({</span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-cd8984734d90b28a73be0eca25690e6cR16" data-line-number="16" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+	<span class="pl-en">label</span><span class="pl-k">:</span> <span class="pl-k">function</span> () { <span class="pl-k">return</span> <span class="pl-v">this</span>.<span class="pl-smi">propertyMaster</span>.<span class="pl-c1">label</span>; },</span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-cd8984734d90b28a73be0eca25690e6cR17" data-line-number="17" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+	disablePartialSubmit<span class="pl-k">:</span> <span class="pl-c1">true</span>,</span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-cd8984734d90b28a73be0eca25690e6cR18" data-line-number="18" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+	<span class="pl-en">actionUrl</span><span class="pl-k">:</span> <span class="pl-k">function</span> () { <span class="pl-k">return</span> <span class="pl-v">this</span>.<span class="pl-smi">master</span>.<span class="pl-smi">__id__</span> <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">'</span>/certificate/driving-license<span class="pl-pds">'</span></span>; },</span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-cd8984734d90b28a73be0eca25690e6cR19" data-line-number="19" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+	propertyMasterType<span class="pl-k">:</span> DrivingLicense,</span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-cd8984734d90b28a73be0eca25690e6cR20" data-line-number="20" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+	propertyNames<span class="pl-k">:</span> [<span class="pl-s"><span class="pl-pds">'</span>number<span class="pl-pds">'</span></span>, <span class="pl-s"><span class="pl-pds">'</span>files/map<span class="pl-pds">'</span></span>, <span class="pl-s"><span class="pl-pds">'</span>issueDate<span class="pl-pds">'</span></span>]</span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-cd8984734d90b28a73be0eca25690e6cR21" data-line-number="21" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+});</span>

  </td>
</tr>



        </tbody></table>
      </div>
</div>

    
<a name="diff-23933f20a025911fd0b54622d327734c"></a>
<div id="diff-1" class="file js-details-container
             
             
             
             
             show-inline-notes
           ">
  <div class="file-header" data-path="model/business-process-demo/certificates/index.js">
    <div class="file-actions">
        <span class="show-file-notes">
          <label>
            <input type="checkbox" checked="checked" class="js-toggle-file-notes">
            Show notes
          </label>
        </span>

          <a href="/egovernment/eregistrations-demo/blob/c0ed7815b7cf5596db31f5b98e4f6b6b7555c44e/model/business-process-demo/certificates/index.js" class="btn btn-sm tooltipped tooltipped-nw" rel="nofollow" aria-label="View the whole file at version c0ed781 ">View</a>


    </div>
    <div class="file-info">
        <span class="diffstat tooltipped tooltipped-e" aria-label="2 additions &amp; 1 deletion">3 <span class="block-diff-added"></span><span class="block-diff-added"></span><span class="block-diff-deleted"></span><span class="block-diff-neutral"></span><span class="block-diff-neutral"></span></span>

      <span class="user-select-contain" title="model/business-process-demo/certificates/index.js">
        model/business-process-demo/certificates/index.js
      </span>
      
    </div>
  </div>

      <div class="data highlight blob-wrapper">
        <table class="diff-table tab-size  " data-tab-size="8">
          
      <tbody><tr class="js-expandable-line" data-position="0">
    <td class="blob-num blob-num-expandable" colspan="2">
      <a href="#diff-23933f20a025911fd0b54622d327734c" class="diff-expander js-expand" title="Expand" aria-label="Expand" data-url="/egovernment/eregistrations-demo/blob_excerpt/80f675c0e9000958111040fa74bb692c3d10ca7f?diff=unified&amp;in_wiki_context=&amp;left_hunk_size=5&amp;mode=100644&amp;next_line_num_left=7&amp;next_line_num_right=7&amp;path=model%2Fbusiness-process-demo%2Fcertificates%2Findex.js&amp;prev_line_num_left=&amp;prev_line_num_right=&amp;right_hunk_size=6" data-left-range="1-6" data-right-range="1-6">
        <svg aria-hidden="true" class="octicon octicon-unfold" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path d="M11.5 7.5L14 10c0 .55-.45 1-1 1H9v-1h3.5l-2-2h-7l-2 2H5v1H1c-.55 0-1-.45-1-1l2.5-2.5L0 5c0-.55.45-1 1-1h4v1H1.5l2 2h7l2-2H9V4h4c.55 0 1 .45 1 1l-2.5 2.5zM6 6h2V3h2L7 0 4 3h2v3zm2 3H6v3H4l3 3 3-3H8V9z"></path></svg>
      </a>
    </td>
    <td class="blob-code blob-code-inner blob-code-hunk">@@ -7,5 +7,6 @@ var defineCertificates =</td>
  </tr>

    <tr>
    <td id="diff-23933f20a025911fd0b54622d327734cL7" data-line-number="7" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-23933f20a025911fd0b54622d327734cR7" data-line-number="7" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner"> </span>

  </td>
</tr>


    <tr>
    <td id="diff-23933f20a025911fd0b54622d327734cL8" data-line-number="8" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-23933f20a025911fd0b54622d327734cR8" data-line-number="8" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner"> <span class="pl-c1">module</span>.<span class="pl-smi">exports</span> <span class="pl-k">=</span> <span class="pl-en">defineCertificates</span>(BusinessProcessDemo, [</span>

  </td>
</tr>


    <tr>
    <td id="diff-23933f20a025911fd0b54622d327734cL9" data-line-number="9" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-23933f20a025911fd0b54622d327734cR9" data-line-number="9" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner"> 	<span class="pl-c1">require</span>(<span class="pl-s"><span class="pl-pds">'</span>./company-registration<span class="pl-pds">'</span></span>),</span>

  </td>
</tr>


    <tr>
    <td id="diff-23933f20a025911fd0b54622d327734cL10" data-line-number="10" class="blob-num blob-num-deletion js-linkable-line-number"></td>

    <td class="blob-num blob-num-deletion empty-cell"></td>

  <td class="blob-code blob-code-deletion">

    <span class="blob-code-inner">-	<span class="pl-c1">require</span>(<span class="pl-s"><span class="pl-pds">'</span>./certificate-of-incentives<span class="pl-pds">'</span></span>)</span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-23933f20a025911fd0b54622d327734cR10" data-line-number="10" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+	<span class="pl-c1">require</span>(<span class="pl-s"><span class="pl-pds">'</span>./certificate-of-incentives<span class="pl-pds">'</span></span>),</span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-23933f20a025911fd0b54622d327734cR11" data-line-number="11" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+	<span class="pl-c1">require</span>(<span class="pl-s"><span class="pl-pds">'</span>./driving-license<span class="pl-pds">'</span></span>)</span>

  </td>
</tr>


    <tr>
    <td id="diff-23933f20a025911fd0b54622d327734cL11" data-line-number="11" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-23933f20a025911fd0b54622d327734cR12" data-line-number="12" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner"> ]);</span>

  </td>
</tr>



        </tbody></table>
      </div>
</div>


</div>
