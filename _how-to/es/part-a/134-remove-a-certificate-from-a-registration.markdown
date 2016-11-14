---
layout: recipe
permalink: /como/configurar-un-certificado-como-electronico/
title: 'Configurar un certificado como electrónico'
category: '1. Part A'
sub-category: 'Certificados'
rate: '2'
number: '134'
introduction-text: 'Un certificado es el resultado del registro al que el usuario aplicó. Usualmente es el documento que el usuario elije al momento del retiro. Puede pasar que el certificado sea sólo digital, por eso, el usuario no lo puede obtener en la pantalla.'
introduction-img: '132.png'
prevUrl: 133
nextUrl: 141
done: ''
lang: es
ref: 134
---

Un certificado siempre pertenece a un servicio. Para realizar un certificado electrónico solamente (no ser manejado al `frontDesk`), necesits saber a cual servicio pertenece el certificado.

Para crear un certificado electrónico solamente:

1. Abrir el archivo `model/business-process-<your-service>/certificates/<your-certificate>.js`.
2. Definir `isToBeHanded` del certificado a `false` (Por defecto).
3. Definir `isElectronic` a `true`.
4. Si el certificado contiene `dataForm` definido como algo más que `FormSectionBase`, remover `files/map` entrada de `propertyNames` de los certificados `dataForm`.

## Example

En la branch "[mark-certificate-as-electronic-only](https://github.com/egovernment/eregistrations-demo/tree/mark-certificate-as-electronic-only)" de eregistrations-demo :

Crear el *"Certificate of incentives"* electrónico solamente.

### Solución

<div id="files" class="diff-view " onclick="window.open('https://github.com/egovernment/eregistrations-demo/compare/mark-certificate-as-electronic-only...mark-certificate-as-electronic-only-solution#files')">


<a name="diff-b5717cedf06e47051e583b221ae34a01"></a>
<div id="diff-0" class="file js-details-container




             show-inline-notes
           ">
  <div class="file-header" data-path="model/business-process-demo/certificates/certificate-of-incentives.js">
    <div class="file-actions">
        <span class="show-file-notes">
          <label>
            <input type="checkbox" checked="checked" class="js-toggle-file-notes">
            Show notes
          </label>
        </span>

          <a href="/egovernment/eregistrations-demo/blob/ee16bad3c3dde5e770ec3c92ce5d5161de34fec9/model/business-process-demo/certificates/certificate-of-incentives.js" class="btn btn-sm tooltipped tooltipped-nw" rel="nofollow" aria-label="View the whole file at version ee16bad ">View</a>


    </div>
    <div class="file-info">
        <span class="diffstat tooltipped tooltipped-e" aria-label="2 additions &amp; 2 deletions">4 <span class="block-diff-added"></span><span class="block-diff-added"></span><span class="block-diff-deleted"></span><span class="block-diff-deleted"></span><span class="block-diff-neutral"></span></span>

      <span class="user-select-contain" title="model/business-process-demo/certificates/certificate-of-incentives.js">
        model/business-process-demo/certificates/certificate-of-incentives.js
      </span>

    </div>
  </div>

      <div class="data highlight blob-wrapper">
        <table class="diff-table tab-size  " data-tab-size="8">

      <tbody><tr class="js-expandable-line" data-position="0">
    <td class="blob-num blob-num-expandable" colspan="2">
      <a href="#diff-b5717cedf06e47051e583b221ae34a01" class="diff-expander js-expand" title="Expand" aria-label="Expand" data-url="/egovernment/eregistrations-demo/blob_excerpt/f9e5a8693caf2a1bdce5436216ddfcf0f554363a?diff=unified&amp;in_wiki_context=&amp;left_hunk_size=13&amp;mode=100644&amp;next_line_num_left=9&amp;next_line_num_right=9&amp;path=model%2Fbusiness-process-demo%2Fcertificates%2Fcertificate-of-incentives.js&amp;prev_line_num_left=&amp;prev_line_num_right=&amp;right_hunk_size=13" data-left-range="1-8" data-right-range="1-8">
        <svg aria-hidden="true" class="octicon octicon-unfold" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path d="M11.5 7.5L14 10c0 .55-.45 1-1 1H9v-1h3.5l-2-2h-7l-2 2H5v1H1c-.55 0-1-.45-1-1l2.5-2.5L0 5c0-.55.45-1 1-1h4v1H1.5l2 2h7l2-2H9V4h4c.55 0 1 .45 1 1l-2.5 2.5zM6 6h2V3h2L7 0 4 3h2v3zm2 3H6v3H4l3 3 3-3H8V9z"></path></svg>
      </a>
    </td>
    <td class="blob-code blob-code-inner blob-code-hunk">@@ -9,13 +9,13 @@ module.exports = CertificateOfIncentives;</td>
  </tr>

    <tr>
    <td id="diff-b5717cedf06e47051e583b221ae34a01L9" data-line-number="9" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-b5717cedf06e47051e583b221ae34a01R9" data-line-number="9" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner"> <span class="pl-smi">CertificateOfIncentives</span>.<span class="pl-c1">prototype</span>.<span class="pl-en">defineProperties</span>({</span>

  </td>
</tr>


    <tr>
    <td id="diff-b5717cedf06e47051e583b221ae34a01L10" data-line-number="10" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-b5717cedf06e47051e583b221ae34a01R10" data-line-number="10" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner"> 	dataForm<span class="pl-k">:</span> { type<span class="pl-k">:</span> FormSection },</span>

  </td>
</tr>


    <tr>
    <td id="diff-b5717cedf06e47051e583b221ae34a01L11" data-line-number="11" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-b5717cedf06e47051e583b221ae34a01R11" data-line-number="11" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner"> 	processingStep<span class="pl-k">:</span> { <span class="pl-en">value</span><span class="pl-k">:</span> <span class="pl-k">function</span> () { <span class="pl-k">return</span> <span class="pl-v">this</span>.<span class="pl-smi">master</span>.<span class="pl-smi">processingSteps</span>.<span class="pl-smi">map</span>.<span class="pl-smi">processing</span>; } },</span>

  </td>
</tr>


    <tr>
    <td id="diff-b5717cedf06e47051e583b221ae34a01L12" data-line-number="12" class="blob-num blob-num-deletion js-linkable-line-number"></td>

    <td class="blob-num blob-num-deletion empty-cell"></td>

  <td class="blob-code blob-code-deletion">

    <span class="blob-code-inner">-	<span class="x x-first x-last">isToBeHanded</span><span class="pl-k">:</span> { value<span class="pl-k">:</span> <span class="pl-c1">true</span> }</span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-b5717cedf06e47051e583b221ae34a01R12" data-line-number="12" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+	<span class="x x-first x-last">isElectronic</span><span class="pl-k">:</span> { value<span class="pl-k">:</span> <span class="pl-c1">true</span> }</span>

  </td>
</tr>


    <tr>
    <td id="diff-b5717cedf06e47051e583b221ae34a01L13" data-line-number="13" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-b5717cedf06e47051e583b221ae34a01R13" data-line-number="13" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner"> });</span>

  </td>
</tr>


    <tr>
    <td id="diff-b5717cedf06e47051e583b221ae34a01L14" data-line-number="14" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-b5717cedf06e47051e583b221ae34a01R14" data-line-number="14" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner"> </span>

  </td>
</tr>


    <tr>
    <td id="diff-b5717cedf06e47051e583b221ae34a01L15" data-line-number="15" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-b5717cedf06e47051e583b221ae34a01R15" data-line-number="15" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner"> <span class="pl-smi">CertificateOfIncentives</span>.<span class="pl-c1">prototype</span>.<span class="pl-smi">dataForm</span>.<span class="pl-en">setProperties</span>({</span>

  </td>
</tr>


    <tr>
    <td id="diff-b5717cedf06e47051e583b221ae34a01L16" data-line-number="16" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-b5717cedf06e47051e583b221ae34a01R16" data-line-number="16" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner"> 	<span class="pl-en">label</span><span class="pl-k">:</span> <span class="pl-k">function</span> () { <span class="pl-k">return</span> <span class="pl-v">this</span>.<span class="pl-smi">propertyMaster</span>.<span class="pl-c1">label</span>; },</span>

  </td>
</tr>


    <tr>
    <td id="diff-b5717cedf06e47051e583b221ae34a01L17" data-line-number="17" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-b5717cedf06e47051e583b221ae34a01R17" data-line-number="17" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner"> 	disablePartialSubmit<span class="pl-k">:</span> <span class="pl-c1">true</span>,</span>

  </td>
</tr>


    <tr>
    <td id="diff-b5717cedf06e47051e583b221ae34a01L18" data-line-number="18" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-b5717cedf06e47051e583b221ae34a01R18" data-line-number="18" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner"> 	<span class="pl-en">actionUrl</span><span class="pl-k">:</span> <span class="pl-k">function</span> () { <span class="pl-k">return</span> <span class="pl-v">this</span>.<span class="pl-smi">master</span>.<span class="pl-smi">__id__</span> <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">'</span>/certificate/certificate-of-incentives<span class="pl-pds">'</span></span>; },</span>

  </td>
</tr>


    <tr>
    <td id="diff-b5717cedf06e47051e583b221ae34a01L19" data-line-number="19" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-b5717cedf06e47051e583b221ae34a01R19" data-line-number="19" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner"> 	propertyMasterType<span class="pl-k">:</span> CertificateOfIncentives,</span>

  </td>
</tr>


    <tr>
    <td id="diff-b5717cedf06e47051e583b221ae34a01L20" data-line-number="20" class="blob-num blob-num-deletion js-linkable-line-number"></td>

    <td class="blob-num blob-num-deletion empty-cell"></td>

  <td class="blob-code blob-code-deletion">

    <span class="blob-code-inner">-	propertyNames<span class="pl-k">:</span> [<span class="pl-s"><span class="pl-pds">'</span>number<span class="pl-pds">'</span></span>, <span class="pl-s"><span class="pl-pds">'</span><span class="x x-first">files/map</span><span class="pl-pds x">'</span></span><span class="x">, </span><span class="pl-s"><span class="pl-pds x x-last">'</span>issueDate<span class="pl-pds">'</span></span>]</span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-b5717cedf06e47051e583b221ae34a01R20" data-line-number="20" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+	propertyNames<span class="pl-k">:</span> [<span class="pl-s"><span class="pl-pds">'</span>number<span class="pl-pds">'</span></span>, <span class="pl-s"><span class="pl-pds">'</span>issueDate<span class="pl-pds">'</span></span>]</span>

  </td>
</tr>


    <tr>
    <td id="diff-b5717cedf06e47051e583b221ae34a01L21" data-line-number="21" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-b5717cedf06e47051e583b221ae34a01R21" data-line-number="21" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner"> });</span>

  </td>
</tr>



        </tbody></table>
      </div>
</div>


</div>
