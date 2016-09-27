---
layout: recipe
permalink: /como/anadir-una-leyenda-a-un-requisito-en-la-guia/
title: 'Añadir una leyenda a un requisito en la guía'
category: '1. Part A'
sub-category: 'Requisitos'
rate: '1'
number: '143'
introduction-text: 'Las leyendas de los requerimientos proveen información adicional sobre ellos.'
introduction-img: '143.png'
prevUrl: 142
nextUrl: 144
done: 'yes'
lang: es
ref: 143
---

Por defecto, la leyenda de un requerimiento se toma del documento sobre el cuál el requerimiento se construye.
Cada requerimiento es asociado a un servicio, para cambiar su nombre, se debe saber el servicio al que aplica.

1. Abrir el archivo `model/<business-process-your-service>/requirements.js`.
2. Ubicar el array enviado a la función de ayuda `eregistrations/model/business-process-new/utils/define-requirements`.
3. En el array, identificar la entrada en la cuál el documento asociado con el requerimiento es requerido (por ejemplo: `require('../documents/passport')`).
4. Modificar le entrada para que se tenga un hash con las propiedades `legend` y `class`. El valor de la propiedad `legend` del hash debe ser el texto de la leyenda, y el valor de la propiedad `class` debe ser la clase del documento (por ejemplo: `{ class: require('../documents/passport'), legend: "My new legend" }` )).

---

## Ejemplo

En la rama "[add-a-legend-to-a-requirement-in-the-guide](https://github.com/egovernment/eregistrations-demo/tree/add-a-legend-to-a-requirement-in-the-guide)" de eregistrations-demo :

Agregar la leyenda *"Both obverse and reverse"* al requerimiento *"Passport"* del servicio `BusinessProcessDemo`.

### Solución

<div id="files" class="diff-view " onclick="window.open('https://github.com/egovernment/eregistrations-demo/compare/add-a-legend-to-a-requirement-in-the-guide...add-a-legend-to-a-requirement-in-the-guide-solution#files')">
      
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

          <a href="/egovernment/eregistrations-demo/blob/fd4c91d9217e82e2860f4481e4a2ce88784bf73c/model/business-process-demo/requirements.js" class="btn btn-sm tooltipped tooltipped-nw" rel="nofollow" aria-label="View the whole file at version fd4c91d ">View</a>


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
      <a href="#diff-a941a7aba115931b72a56d41bfddd500" class="diff-expander js-expand" title="Expand" aria-label="Expand" data-url="/egovernment/eregistrations-demo/blob_excerpt/19f359e085955f054fe19bb7d601631a920fded0?diff=unified&amp;in_wiki_context=&amp;left_hunk_size=11&amp;mode=100644&amp;next_line_num_left=2&amp;next_line_num_right=2&amp;path=model%2Fbusiness-process-demo%2Frequirements.js&amp;prev_line_num_left=&amp;prev_line_num_right=&amp;right_hunk_size=15" data-left-range="1-1" data-right-range="1-1">
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

    <span class="blob-code-inner">+		legend<span class="pl-k">:</span> <span class="pl-en">_</span>(<span class="pl-s"><span class="pl-pds">"</span>Both obverse and reverse<span class="pl-pds">"</span></span>),</span>

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
