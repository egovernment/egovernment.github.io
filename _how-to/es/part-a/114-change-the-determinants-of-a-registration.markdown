---
layout: recipe
permalink: /como/configurar-un-registro-como-obligatorio-u-opcional/
title: 'Configurar un registro como obligatorio u opcional por un determinante de nivel 1'
category: '1. Part A'
sub-category: 'Registro'
rate: '2'
number: '114'
introduction-text: 'Un registro puede ser obligatorio, opcional o inaplicable en cierta(s) situación(es). Ejemplo: el registro ante el Registro de Comercio es opcional para los activos inferiores a 12 000$. Este determinante de nivel 1 se ve reflejado por una pregunta inicial en la guía.'
introduction-img: '112.gif'
prevUrl: 112
nextUrl: 121
done: 'yes'
lang: es
ref: 113
---

Cada registro está asociado con un servicio, entonces para modificarlo, necesitamos saber a que servicio aplica.

La aplicabilidad de un registro está definido por la propiedad `isApplicable` (true por defecto). Adicionalmente, puede ser obligatorio u opcional. Este criterio es controlado por la propiedad `isMandatory` (true por defecto). Ambos propiedades pueden ser forzadas a `true` o `false`, o pueden ser definidas por getters que resuelvan su valor por los campos de las preguntas iniciales de la guía.

**Para cambiar la aplicabilidad de un registro:**

1. Abrir el archivo `model/<business-process-your-service>/registrations/<your-registration>.js`.
2. Poner el valor de la propiedad `isApplicable` a una función que determina la aplicabilidad del registro.

**Para cambiar el criterio de obligatorio u opcional:**

1. Abrir el archivo `model/<business-process-your-service>/registrations/<your-registration>.js`.
2. Poner el valor de la propiedad `isMandatory` a una función que devuelve `true` para los casos en cuales el registro está obligatorio y `false` o `undefined` cuando es opcional.

## Ejemplo

En la branch "[change-the-determinants-of-a-registration](https://github.com/egovernment/eregistrations-demo/tree/change-the-determinants-of-a-registration)" de eregistrations-demo :

Poner el registro `certificateOfIncentives` del servicio Business Process Demo opcional para expedientes con activo menos que 100'000$.

### Solución

<div id="files" class="diff-view " onclick="window.open('https://github.com/egovernment/eregistrations-demo/compare/change-the-determinants-of-a-registration...change-the-determinants-of-a-registration-solution#files')">


<a name="diff-3e5b55e60dcc97add7accbbf3f80937b"></a>
<div id="diff-0" class="file js-details-container




             show-inline-notes
           ">
  <div class="file-header" data-path="model/business-process-demo/registrations/certificate-of-incentives.js">
    <div class="file-actions">
        <span class="show-file-notes">
          <label>
            <input checked="checked" class="js-toggle-file-notes" type="checkbox">
            Show notes
          </label>
        </span>

          <a href="/egovernment/eregistrations-demo/blob/953e5f6cc16b01b3617779ff1b0c03e913108808/model/business-process-demo/registrations/certificate-of-incentives.js" class="btn btn-sm tooltipped tooltipped-nw" rel="nofollow" aria-label="View the whole file at version 953e5f6 ">View</a>

          <a class="btn-octicon tooltipped tooltipped-n" href="https://windows.github.com" aria-label="Open this file in GitHub Desktop" data-ga-click="Repository, open with desktop, type:windows">
              <svg aria-hidden="true" class="octicon octicon-device-desktop" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M15 2H1c-.55 0-1 .45-1 1v9c0 .55.45 1 1 1h5.34c-.25.61-.86 1.39-2.34 2h8c-1.48-.61-2.09-1.39-2.34-2H15c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm0 9H1V3h14v8z"></path></svg>
          </a>

    </div>
    <div class="file-info">
        <span class="diffstat tooltipped tooltipped-e" aria-label="6 additions &amp; 0 deletions">6 <span class="block-diff-added"></span><span class="block-diff-added"></span><span class="block-diff-added"></span><span class="block-diff-added"></span><span class="block-diff-added"></span></span>

      <span class="user-select-contain" title="model/business-process-demo/registrations/certificate-of-incentives.js">
        model/business-process-demo/registrations/certificate-of-incentives.js
      </span>

    </div>
  </div>

      <div class="data highlight blob-wrapper">
        <table class="diff-table tab-size  " data-tab-size="8">

      <tbody><tr class="js-expandable-line" data-position="0">
    <td class="blob-num blob-num-expandable" colspan="2">
      <a href="#diff-3e5b55e60dcc97add7accbbf3f80937b" class="diff-expander js-expand" title="Expand" aria-label="Expand" data-url="/egovernment/eregistrations-demo/blob_excerpt/a1443072d0db171bd0b0b404ae31c93c5cdfe285?diff=unified&amp;in_wiki_context=&amp;left_hunk_size=6&amp;mode=100644&amp;next_line_num_left=14&amp;next_line_num_right=14&amp;path=model%2Fbusiness-process-demo%2Fregistrations%2Fcertificate-of-incentives.js&amp;prev_line_num_left=&amp;prev_line_num_right=&amp;right_hunk_size=12" data-left-range="1-13" data-right-range="1-13">
        <svg aria-hidden="true" class="octicon octicon-unfold" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path d="M11.5 7.5L14 10c0 .55-.45 1-1 1H9v-1h3.5l-2-2h-7l-2 2H5v1H1c-.55 0-1-.45-1-1l2.5-2.5L0 5c0-.55.45-1 1-1h4v1H1.5l2 2h7l2-2H9V4h4c.55 0 1 .45 1 1l-2.5 2.5zM6 6h2V3h2L7 0 4 3h2v3zm2 3H6v3H4l3 3 3-3H8V9z"></path></svg>
      </a>
    </td>
    <td class="blob-code blob-code-inner blob-code-hunk">@@ -14,6 +14,12 @@ BusinessProcessDemo.prototype.registrations.map.certificateOfIncentives.setPrope</td>
  </tr>

    <tr>
    <td id="diff-3e5b55e60dcc97add7accbbf3f80937bL14" data-line-number="14" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-3e5b55e60dcc97add7accbbf3f80937bR14" data-line-number="14" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner"> </span>

  </td>
</tr>


    <tr>
    <td id="diff-3e5b55e60dcc97add7accbbf3f80937bL15" data-line-number="15" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-3e5b55e60dcc97add7accbbf3f80937bR15" data-line-number="15" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner">      <span class="pl-k">return</span> assets <span class="pl-k">&gt;=</span> <span class="pl-c1">5000</span>;</span>

  </td>
</tr>


    <tr>
    <td id="diff-3e5b55e60dcc97add7accbbf3f80937bL16" data-line-number="16" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-3e5b55e60dcc97add7accbbf3f80937bR16" data-line-number="16" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner">  },</span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-3e5b55e60dcc97add7accbbf3f80937bR17" data-line-number="17" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+ <span class="pl-en">isMandatory</span><span class="pl-k">:</span> <span class="pl-k">function</span> (<span class="pl-smi">_observe</span>) {</span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-3e5b55e60dcc97add7accbbf3f80937bR18" data-line-number="18" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+     <span class="pl-k">var</span> businessProcess <span class="pl-k">=</span> <span class="pl-v">this</span>.<span class="pl-smi">master</span></span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-3e5b55e60dcc97add7accbbf3f80937bR19" data-line-number="19" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+       , assets  <span class="pl-k">=</span> <span class="pl-smi">businessProcess</span>.<span class="pl-smi">_get</span> <span class="pl-k">?</span> <span class="pl-en">_observe</span>(<span class="pl-smi">businessProcess</span>.<span class="pl-smi">_assets</span>) <span class="pl-k">:</span> <span class="pl-smi">businessProcess</span>.<span class="pl-smi">assets</span>;</span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-3e5b55e60dcc97add7accbbf3f80937bR20" data-line-number="20" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+</span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-3e5b55e60dcc97add7accbbf3f80937bR21" data-line-number="21" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+     <span class="pl-k">return</span> assets <span class="pl-k">&gt;=</span> <span class="pl-c1">100000</span>;</span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-3e5b55e60dcc97add7accbbf3f80937bR22" data-line-number="22" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+ },</span>

  </td>
</tr>


    <tr>
    <td id="diff-3e5b55e60dcc97add7accbbf3f80937bL17" data-line-number="17" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-3e5b55e60dcc97add7accbbf3f80937bR23" data-line-number="23" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner">  <span class="pl-en">costs</span><span class="pl-k">:</span> <span class="pl-k">function</span> (<span class="pl-smi">_observe</span>) {</span>

  </td>
</tr>


    <tr>
    <td id="diff-3e5b55e60dcc97add7accbbf3f80937bL18" data-line-number="18" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-3e5b55e60dcc97add7accbbf3f80937bR24" data-line-number="24" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner">      <span class="pl-k">return</span> [</span>

  </td>
</tr>


    <tr>
    <td id="diff-3e5b55e60dcc97add7accbbf3f80937bL19" data-line-number="19" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-3e5b55e60dcc97add7accbbf3f80937bR25" data-line-number="25" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner">          <span class="pl-v">this</span>.<span class="pl-smi">master</span>.<span class="pl-smi">costs</span>.<span class="pl-smi">map</span>.<span class="pl-smi">certificateOfIncentives</span></span>

  </td>
</tr>


  <tr class="js-expandable-line">
   <td class="blob-num blob-num-expandable" colspan="2">
     <a href="#diff-3e5b55e60dcc97add7accbbf3f80937b" class="diff-expander js-expand" title="Expand" aria-label="Expand" data-url="/egovernment/eregistrations-demo/blob_excerpt/a1443072d0db171bd0b0b404ae31c93c5cdfe285?diff=unified&amp;in_wiki_context=&amp;mode=100644&amp;path=model%2Fbusiness-process-demo%2Fregistrations%2Fcertificate-of-incentives.js&amp;prev_line_num_left=19&amp;prev_line_num_right=25" data-left-range="20-32" data-right-range="26-32">
       <svg aria-hidden="true" class="octicon octicon-unfold" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path d="M11.5 7.5L14 10c0 .55-.45 1-1 1H9v-1h3.5l-2-2h-7l-2 2H5v1H1c-.55 0-1-.45-1-1l2.5-2.5L0 5c0-.55.45-1 1-1h4v1H1.5l2 2h7l2-2H9V4h4c.55 0 1 .45 1 1l-2.5 2.5zM6 6h2V3h2L7 0 4 3h2v3zm2 3H6v3H4l3 3 3-3H8V9z"></path></svg>
     </a>
   </td>
   <td class="blob-code blob-code-expandable"></td>
  </tr>

        </tbody></table>
      </div>
</div>

</div>

