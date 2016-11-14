---
layout: recipe
permalink: /como/cambiar-el-nombre-de-un-registro/
title: 'Cambiar el nombre y label de un registro'
category: '1. Part A'
sub-category: 'Registro'
rate: '1'
number: '113'
introduction-text: 'Un registro puede ser obligatorio, opcional o inaplicable para algunas situaciones. Ejemplo: El registro en el registro de la empresa en El Salvador es opcional por bienes inferiores a 12 000$. El determinante de un registro configura las preguntas iniciales de la guía.'
introduction-img: '111.png'
prevUrl: 112
nextUrl: 114
done: 'yes'
lang: es
ref: 112
---

El nombre de un registro es por defecto dado por el documento correspondiente. Primero debemos determinar si queremos cambiar el nombre del documento o solo el nombre del registro.

Aquí nos enfocaremos en el escenario en donde queremos cambiar sólo el nombre del registro, no del documento.

Cada registro está asociado con un servicio. Entonces, primero debemos determinar el servicio en el cual se encuentra. Asumamos que el modelo clase del servicio es `BusinessProcessMyService` y que el registro es `myRegistration`.

Los registros pueden encontrarse separados o juntos bajo `model/business-process-my-service/registrations.js`, o en archivos separados en el siguiente directorio `model/business-process-my-service/registrations` (este archivo debe ser la versión separado por guiones del nombre del registro (en nuestro ejemplo `my-registration.js`)).

1. Dependiendo del caso, ir a: `model/business-process-my-service/registrations.js`, o a `model/business-process-my-service/registrations/my-registration.js`.

2. Establecer el valor de propiedad de la etiqueta de `myRegistration` al nombre que se desea que el registro tenga.

Si desea cambiar el nombre corte al servicio, entonces en los pasos anteriores en lugar de `label` editar la propiedad de `shortLabel`.

## Ejemplo

En la branch "[change-the-name-of-the-registration](https://github.com/egovernment/eregistrations-demo/tree/change-the-name-of-the-registration)" de eregistrations-demo :

Cambiar el nombre del registro `certificateOfIncentives` a *"Certificate of incentives (business facilitation program)"*.

### Solución

<div id="files" class="diff-view " onclick="window.open('https://github.com/egovernment/eregistrations-demo/compare/change-the-name-of-the-registration...change-the-name-of-the-registration-solution#files')">


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

          <a href="/egovernment/eregistrations-demo/blob/dcad9a3cc3deec648f15041af2ad3d779f32e321/model/business-process-demo/registrations/certificate-of-incentives.js" class="btn btn-sm tooltipped tooltipped-nw" rel="nofollow" aria-label="View the whole file at version dcad9a3 ">View</a>


    </div>
    <div class="file-info">
        <span class="diffstat tooltipped tooltipped-e" aria-label="3 additions &amp; 1 deletion">4 <span class="block-diff-added"></span><span class="block-diff-added"></span><span class="block-diff-added"></span><span class="block-diff-deleted"></span><span class="block-diff-neutral"></span></span>

      <span class="user-select-contain" title="model/business-process-demo/registrations/certificate-of-incentives.js">
        model/business-process-demo/registrations/certificate-of-incentives.js
      </span>

    </div>
  </div>

      <div class="data highlight blob-wrapper">
        <table class="diff-table tab-size  " data-tab-size="8">

      <tbody><tr data-position="0">
    <td id="diff-3e5b55e60dcc97add7accbbf3f80937bL0" class="blob-num blob-num-hunk non-expandable" data-line-number="..."></td>
    <td id="diff-3e5b55e60dcc97add7accbbf3f80937bR0" class="blob-num blob-num-hunk non-expandable" data-line-number="..."></td>
    <td class="blob-code blob-code-inner blob-code-hunk">@@ -1,12 +1,14 @@</td>
  </tr>

    <tr>
    <td id="diff-3e5b55e60dcc97add7accbbf3f80937bL1" data-line-number="1" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-3e5b55e60dcc97add7accbbf3f80937bR1" data-line-number="1" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner"> <span class="pl-s"><span class="pl-pds">'</span>use strict<span class="pl-pds">'</span></span>;</span>

  </td>
</tr>


    <tr>
    <td id="diff-3e5b55e60dcc97add7accbbf3f80937bL2" data-line-number="2" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-3e5b55e60dcc97add7accbbf3f80937bR2" data-line-number="2" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner"> </span>

  </td>
</tr>


    <tr>
    <td id="diff-3e5b55e60dcc97add7accbbf3f80937bL3" data-line-number="3" class="blob-num blob-num-deletion js-linkable-line-number"></td>

    <td class="blob-num blob-num-deletion empty-cell"></td>

  <td class="blob-code blob-code-deletion">

    <span class="blob-code-inner">-<span class="pl-k">var</span> BusinessProcessDemo <span class="pl-k">=</span> <span class="pl-c1">require</span>(<span class="pl-s"><span class="pl-pds">'</span>../base<span class="pl-pds">'</span></span>);</span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-3e5b55e60dcc97add7accbbf3f80937bR3" data-line-number="3" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+<span class="pl-k">var</span> BusinessProcessDemo <span class="pl-k">=</span> <span class="pl-c1">require</span>(<span class="pl-s"><span class="pl-pds">'</span>../base<span class="pl-pds">'</span></span>)</span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-3e5b55e60dcc97add7accbbf3f80937bR4" data-line-number="4" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+  , _                   <span class="pl-k">=</span> <span class="pl-c1">require</span>(<span class="pl-s"><span class="pl-pds">'</span>../../../i18n<span class="pl-pds">'</span></span>).<span class="pl-en">bind</span>(<span class="pl-s"><span class="pl-pds">"</span>Certificate of Incentives<span class="pl-pds">"</span></span>);</span>

  </td>
</tr>


    <tr>
    <td id="diff-3e5b55e60dcc97add7accbbf3f80937bL4" data-line-number="4" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-3e5b55e60dcc97add7accbbf3f80937bR5" data-line-number="5" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner"> </span>

  </td>
</tr>


    <tr>
    <td id="diff-3e5b55e60dcc97add7accbbf3f80937bL5" data-line-number="5" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-3e5b55e60dcc97add7accbbf3f80937bR6" data-line-number="6" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner"> <span class="pl-smi">BusinessProcessDemo</span>.<span class="pl-c1">prototype</span>.<span class="pl-smi">registrations</span>.<span class="pl-smi">map</span>.<span class="pl-en">defineProperties</span>({</span>

  </td>
</tr>


    <tr>
    <td id="diff-3e5b55e60dcc97add7accbbf3f80937bL6" data-line-number="6" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-3e5b55e60dcc97add7accbbf3f80937bR7" data-line-number="7" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner">  certificateOfIncentives<span class="pl-k">:</span> { nested<span class="pl-k">:</span> <span class="pl-c1">true</span> }</span>

  </td>
</tr>


    <tr>
    <td id="diff-3e5b55e60dcc97add7accbbf3f80937bL7" data-line-number="7" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-3e5b55e60dcc97add7accbbf3f80937bR8" data-line-number="8" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner"> });</span>

  </td>
</tr>


    <tr>
    <td id="diff-3e5b55e60dcc97add7accbbf3f80937bL8" data-line-number="8" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-3e5b55e60dcc97add7accbbf3f80937bR9" data-line-number="9" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner"> </span>

  </td>
</tr>


    <tr>
    <td id="diff-3e5b55e60dcc97add7accbbf3f80937bL9" data-line-number="9" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-3e5b55e60dcc97add7accbbf3f80937bR10" data-line-number="10" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner"> <span class="pl-smi">BusinessProcessDemo</span>.<span class="pl-c1">prototype</span>.<span class="pl-smi">registrations</span>.<span class="pl-smi">map</span>.<span class="pl-smi">certificateOfIncentives</span>.<span class="pl-en">setProperties</span>({</span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-3e5b55e60dcc97add7accbbf3f80937bR11" data-line-number="11" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+ label<span class="pl-k">:</span> <span class="pl-en">_</span>(<span class="pl-s"><span class="pl-pds">"</span>Certificate of incentives (business facilitation program)<span class="pl-pds">"</span></span>),</span>

  </td>
</tr>


    <tr>
    <td id="diff-3e5b55e60dcc97add7accbbf3f80937bL10" data-line-number="10" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-3e5b55e60dcc97add7accbbf3f80937bR12" data-line-number="12" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner">  <span class="pl-c1">Document</span><span class="pl-k">:</span> <span class="pl-c1">require</span>(<span class="pl-s"><span class="pl-pds">'</span>../../documents/certificate-of-incentives<span class="pl-pds">'</span></span>),</span>

  </td>
</tr>


    <tr>
    <td id="diff-3e5b55e60dcc97add7accbbf3f80937bL11" data-line-number="11" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-3e5b55e60dcc97add7accbbf3f80937bR13" data-line-number="13" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner">  <span class="pl-en">isApplicable</span><span class="pl-k">:</span> <span class="pl-k">function</span> (<span class="pl-smi">_observe</span>) {</span>

  </td>
</tr>


    <tr>
    <td id="diff-3e5b55e60dcc97add7accbbf3f80937bL12" data-line-number="12" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-3e5b55e60dcc97add7accbbf3f80937bR14" data-line-number="14" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner">      <span class="pl-k">var</span> businessProcess <span class="pl-k">=</span> <span class="pl-v">this</span>.<span class="pl-smi">master</span></span>

  </td>
</tr>


  <tr class="js-expandable-line">
   <td class="blob-num blob-num-expandable" colspan="2">
     <a href="#diff-3e5b55e60dcc97add7accbbf3f80937b" class="diff-expander js-expand" title="Expand" aria-label="Expand" data-url="/egovernment/eregistrations-demo/blob_excerpt/5d0a2033ef67e2836604c1735a496f2ac1087ec6?diff=unified&amp;in_wiki_context=&amp;mode=100644&amp;path=model%2Fbusiness-process-demo%2Fregistrations%2Fcertificate-of-incentives.js&amp;prev_line_num_left=12&amp;prev_line_num_right=14" data-left-range="13-23" data-right-range="15-23">
       <svg aria-hidden="true" class="octicon octicon-unfold" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path d="M11.5 7.5L14 10c0 .55-.45 1-1 1H9v-1h3.5l-2-2h-7l-2 2H5v1H1c-.55 0-1-.45-1-1l2.5-2.5L0 5c0-.55.45-1 1-1h4v1H1.5l2 2h7l2-2H9V4h4c.55 0 1 .45 1 1l-2.5 2.5zM6 6h2V3h2L7 0 4 3h2v3zm2 3H6v3H4l3 3 3-3H8V9z"></path></svg>
     </a>
   </td>
   <td class="blob-code blob-code-expandable"></td>
  </tr>

        </tbody></table>
      </div>
</div>

</div>