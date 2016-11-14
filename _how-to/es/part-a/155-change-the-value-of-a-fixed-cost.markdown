---
layout: recipe
permalink: /como/cambiar-un-costo-fijo/
title: 'Cambiar un costo fijo de un registro'
category: '1. Part A'
sub-category: 'Costos'
rate: '1'
number: '155'
introduction-text: 'En esta ficha se muestra como cambiar el nombre de un costo, modificar su valor o modificar su determinante.'
introduction-img: '155.png'
prevUrl: 154
nextUrl: 156
done: ''
lang: es
ref: 155
---

Cada costo está asociado a un servicio, para cambiar su valor, debemos saber el servicio al cuál aplica.

1. Abrir el archivo `model/<business-process-your-service>/costs/<your-cost>.js`.
2. Colocar el valor deseado para el monto en la propiedad `amount` del costo.

## Ejemplo

En la rama "[change-the-value-of-a-fixed-cost](https://github.com/egovernment/eregistrations-demo/tree/change-the-value-of-a-fixed-cost)" de eregistrations-demo :

Cambiar el valor del costo `certificateOfIncentives` del servicio `BusinessProcessDemo` a `500`.

### Solución

<div id="files" class="diff-view " onclick="window.open('https://github.com/egovernment/eregistrations-demo/compare/change-the-value-of-a-fixed-cost...change-the-value-of-a-fixed-cost-solution#files')">

<a name="diff-defee2292c8e5e4e2ad20914d8cc1b87"></a>
<div id="diff-0" class="file js-details-container




             show-inline-notes
           ">
  <div class="file-header" data-path="model/business-process-demo/costs/certificate-of-incentives.js">
    <div class="file-actions">
        <span class="show-file-notes">
          <label>
            <input checked="checked" class="js-toggle-file-notes" type="checkbox">
            Show notes
          </label>
        </span>

          <a href="/egovernment/eregistrations-demo/blob/7de1f714e22c228f855d144ab91c2573998620ff/model/business-process-demo/costs/certificate-of-incentives.js" class="btn btn-sm tooltipped tooltipped-nw" rel="nofollow" aria-label="View the whole file at version 7de1f71 ">View</a>

          <a class="btn-octicon tooltipped tooltipped-n" href="https://windows.github.com" aria-label="Open this file in GitHub Desktop" data-ga-click="Repository, open with desktop, type:windows">
              <svg aria-hidden="true" class="octicon octicon-device-desktop" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M15 2H1c-.55 0-1 .45-1 1v9c0 .55.45 1 1 1h5.34c-.25.61-.86 1.39-2.34 2h8c-1.48-.61-2.09-1.39-2.34-2H15c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm0 9H1V3h14v8z"></path></svg>
          </a>

    </div>
    <div class="file-info">
        <span class="diffstat tooltipped tooltipped-e" aria-label="1 addition &amp; 1 deletion">2 <span class="block-diff-added"></span><span class="block-diff-deleted"></span><span class="block-diff-neutral"></span><span class="block-diff-neutral"></span><span class="block-diff-neutral"></span></span>

      <span class="user-select-contain" title="model/business-process-demo/costs/certificate-of-incentives.js">
        model/business-process-demo/costs/certificate-of-incentives.js
      </span>

    </div>
  </div>

      <div class="data highlight blob-wrapper">
        <table class="diff-table tab-size  " data-tab-size="8">

      <tbody><tr class="js-expandable-line" data-position="0">
    <td class="blob-num blob-num-expandable" colspan="2">
      <a href="#diff-defee2292c8e5e4e2ad20914d8cc1b87" class="diff-expander js-expand" title="Expand" aria-label="Expand" data-url="/egovernment/eregistrations-demo/blob_excerpt/2840b1025cef3c54aa7ae2db4e41eecff18aee61?diff=unified&amp;in_wiki_context=&amp;left_hunk_size=5&amp;mode=100644&amp;next_line_num_left=11&amp;next_line_num_right=11&amp;path=model%2Fbusiness-process-demo%2Fcosts%2Fcertificate-of-incentives.js&amp;prev_line_num_left=&amp;prev_line_num_right=&amp;right_hunk_size=5" data-left-range="1-10" data-right-range="1-10">
        <svg aria-hidden="true" class="octicon octicon-unfold" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path d="M11.5 7.5L14 10c0 .55-.45 1-1 1H9v-1h3.5l-2-2h-7l-2 2H5v1H1c-.55 0-1-.45-1-1l2.5-2.5L0 5c0-.55.45-1 1-1h4v1H1.5l2 2h7l2-2H9V4h4c.55 0 1 .45 1 1l-2.5 2.5zM6 6h2V3h2L7 0 4 3h2v3zm2 3H6v3H4l3 3 3-3H8V9z"></path></svg>
      </a>
    </td>
    <td class="blob-code blob-code-inner blob-code-hunk">@@ -11,5 +11,5 @@ BusinessProcessDemo.prototype.costs.map.define('certificateOfIncentives', {</td>
  </tr>

    <tr>
    <td id="diff-defee2292c8e5e4e2ad20914d8cc1b87L11" data-line-number="11" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-defee2292c8e5e4e2ad20914d8cc1b87R11" data-line-number="11" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner"> </span>

  </td>
</tr>


    <tr>
    <td id="diff-defee2292c8e5e4e2ad20914d8cc1b87L12" data-line-number="12" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-defee2292c8e5e4e2ad20914d8cc1b87R12" data-line-number="12" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner"> <span class="pl-smi">BusinessProcessDemo</span>.<span class="pl-c1">prototype</span>.<span class="pl-smi">costs</span>.<span class="pl-smi">map</span>.<span class="pl-smi">certificateOfIncentives</span>.<span class="pl-en">setProperties</span>({</span>

  </td>
</tr>


    <tr>
    <td id="diff-defee2292c8e5e4e2ad20914d8cc1b87L13" data-line-number="13" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-defee2292c8e5e4e2ad20914d8cc1b87R13" data-line-number="13" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner">  label<span class="pl-k">:</span> <span class="pl-en">_</span>(<span class="pl-s"><span class="pl-pds">"</span>Certificate of incentives<span class="pl-pds">"</span></span>),</span>

  </td>
</tr>


    <tr>
    <td id="diff-defee2292c8e5e4e2ad20914d8cc1b87L14" data-line-number="14" class="blob-num blob-num-deletion js-linkable-line-number"></td>

    <td class="blob-num blob-num-deletion empty-cell"></td>

  <td class="blob-code blob-code-deletion">

    <span class="blob-code-inner">- amount<span class="pl-k">:</span> <span class="pl-c1 x x-first x-last">100</span></span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-defee2292c8e5e4e2ad20914d8cc1b87R14" data-line-number="14" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+ amount<span class="pl-k">:</span> <span class="pl-c1 x x-first x-last">500</span></span>

  </td>
</tr>


    <tr>
    <td id="diff-defee2292c8e5e4e2ad20914d8cc1b87L15" data-line-number="15" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-defee2292c8e5e4e2ad20914d8cc1b87R15" data-line-number="15" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner"> });</span>

  </td>
</tr>



        </tbody></table>
      </div>
</div>

</div>
