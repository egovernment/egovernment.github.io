---
layout: recipe
permalink: /como/cambiar-el-icono-de-un-servicio/
title: 'Cambiar el icono de un servicio'
category: '1. Part A'
sub-category: 'Servicio'
rate: '2'
number: '104'
introduction-text: ''
introduction-img: '103.png'
prevUrl: 103
nextUrl: 105
done: 'yes'
lang: es
ref: 104
---

El icono del servicio es un carácter de [Font Awesome](http://fontawesome.io/cheatsheet/).

Primero se debe revisar que el carácter que se desea usar como icono existe (Puede usar los caracteres para los que se han definido clases css acá: [https://github.com/egovernment/eregistrations/blob/master/css/components/fa.css#L33-L378](https://github.com/egovernment/eregistrations/blob/master/css/components/fa.css#L33-L378) ).

Si el carácter que quiere usar no tiene definida su clase css, cree un pull-request en el sistema [eregistrations](https://github.com/egovernment/eregistrations).
En el comentario especificar que carácter de Font Awesome desea utilizar.

A partir de acá se asumirá que el icono (el carácter adecuado de la fuente) existe (su clase css está definida, es decir 'fa fa-file').

Primero se debe ajustar la página "Mi cuenta":

1. Abrir el archivo `view/user.js`.
2. Identificar el bloque `exports._servicesBoxList`.
3. Buscar el elemento `<i>` dentro del bloque `buttonContent`.
4. Modificar la clase css del elemento `<i>` a la clase deseada, por ejemplo 'fa fi-file'

Despues de que "Mi cuenta" sea actualizada, se necesita sobreescribir el método `getServiceIcon` en la vista.
Este método puede o puede no estar disponible en su sistema.

1. Abrir el archivo `view/components/business-process-table-columns.js` (si no existe, su sistema no se encuentra actualizado a la versión actual, por lo que debería crear un pull-request en su sistema para incluir los cambios).
2. Buscar el método `getServiceIcon` (sobreescribe el método de [eregistrations/view/components/business-process-table-columns](https://github.com/egovernment/eregistrations/blob/master/view/components/business-process-table-columns.js)).
Si no existe el método, tendrá que crearlo.
3. Crear/modificar el método `columns.getServiceIcon` (el método `columns.getServiceIcon` toma como argumento una instancia de `businessProcess` y se espera que retorne un icono (`<i>` con el nombre de la clase de Font Awesome elegida) que corresponda al `businessProcess` provisto. El método necesita retornar el ícono correcto (elemento `<i>`) para el businessProcess provisto).

---

## Ejemplo

En la rama "[change-the-icon-of-a-service](https://github.com/egovernment/eregistrations-demo/tree/change-the-icon-of-a-service)" of eregistrations-demo :

Cambiar el icono del servicio "Demo". Usar 'fa fa-file' como las nuevas clases del icono.

### Solución

<div id="files" class="diff-view " onclick="window.open('https://github.com/egovernment/eregistrations-demo/compare/change-the-icon-of-a-service...change-the-icon-of-a-service-solution#files')">

<a name="diff-007c6d9af20c4ac6b837960b8d799a0b"></a>
<div id="diff-0" class="file js-details-container




             show-inline-notes
           ">
  <div class="file-header" data-path="view/components/business-process-table-columns.js">
    <div class="file-actions">
        <span class="show-file-notes">
          <label>
            <input type="checkbox" checked="checked" class="js-toggle-file-notes">
            Show notes
          </label>
        </span>

          <a href="/egovernment/eregistrations-demo/blob/33bc3e61fe1381f23a1be60fd4c6ff626eca18b0/view/components/business-process-table-columns.js" class="btn btn-sm tooltipped tooltipped-nw" rel="nofollow" aria-label="View the whole file at version 33bc3e6 ">View</a>


    </div>
    <div class="file-info">
        <span class="diffstat tooltipped tooltipped-e" aria-label="8 additions &amp; 1 deletion">9 <span class="block-diff-added"></span><span class="block-diff-added"></span><span class="block-diff-added"></span><span class="block-diff-added"></span><span class="block-diff-neutral"></span></span>

      <span class="user-select-contain" title="view/components/business-process-table-columns.js">
        view/components/business-process-table-columns.js
      </span>

    </div>
  </div>

      <div class="data highlight blob-wrapper">
        <table class="diff-table tab-size  " data-tab-size="8">

      <tbody><tr data-position="0">
    <td id="diff-007c6d9af20c4ac6b837960b8d799a0bL0" class="blob-num blob-num-hunk non-expandable" data-line-number="..."></td>
    <td id="diff-007c6d9af20c4ac6b837960b8d799a0bR0" class="blob-num blob-num-hunk non-expandable" data-line-number="..."></td>
    <td class="blob-code blob-code-inner blob-code-hunk">@@ -1,6 +1,13 @@</td>
  </tr>

    <tr>
    <td id="diff-007c6d9af20c4ac6b837960b8d799a0bL1" data-line-number="1" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-007c6d9af20c4ac6b837960b8d799a0bR1" data-line-number="1" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner"> <span class="pl-c">// Business process table columns global customization.</span></span>

  </td>
</tr>


    <tr>
    <td id="diff-007c6d9af20c4ac6b837960b8d799a0bL2" data-line-number="2" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-007c6d9af20c4ac6b837960b8d799a0bR2" data-line-number="2" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner"> <span class="pl-s"><span class="pl-pds">'</span>use strict<span class="pl-pds">'</span></span>;</span>

  </td>
</tr>


    <tr>
    <td id="diff-007c6d9af20c4ac6b837960b8d799a0bL3" data-line-number="3" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-007c6d9af20c4ac6b837960b8d799a0bR3" data-line-number="3" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner"> </span>

  </td>
</tr>


    <tr>
    <td id="diff-007c6d9af20c4ac6b837960b8d799a0bL4" data-line-number="4" class="blob-num blob-num-deletion js-linkable-line-number"></td>

    <td class="blob-num blob-num-deletion empty-cell"></td>

  <td class="blob-code blob-code-deletion">

    <span class="blob-code-inner">-<span class="pl-k">var</span> columns <span class="pl-k">=</span> <span class="pl-c1">require</span>(<span class="pl-s"><span class="pl-pds">'</span>eregistrations/view/components/business-process-table-columns<span class="pl-pds">'</span></span>);</span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-007c6d9af20c4ac6b837960b8d799a0bR4" data-line-number="4" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+<span class="pl-k">var</span> db      <span class="pl-k">=</span> <span class="pl-c1">require</span>(<span class="pl-s"><span class="pl-pds">'</span>../../db<span class="pl-pds">'</span></span>)</span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-007c6d9af20c4ac6b837960b8d799a0bR5" data-line-number="5" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+  , columns <span class="pl-k">=</span> <span class="pl-c1">require</span>(<span class="pl-s"><span class="pl-pds">'</span>eregistrations/view/components/business-process-table-columns<span class="pl-pds">'</span></span>);</span>

  </td>
</tr>


    <tr>
    <td id="diff-007c6d9af20c4ac6b837960b8d799a0bL5" data-line-number="5" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-007c6d9af20c4ac6b837960b8d799a0bR6" data-line-number="6" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner"> </span>

  </td>
</tr>


    <tr>
    <td id="diff-007c6d9af20c4ac6b837960b8d799a0bL6" data-line-number="6" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-007c6d9af20c4ac6b837960b8d799a0bR7" data-line-number="7" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner"> <span class="pl-c1">module</span>.<span class="pl-smi">exports</span> <span class="pl-k">=</span> columns;</span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-007c6d9af20c4ac6b837960b8d799a0bR8" data-line-number="8" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+</span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-007c6d9af20c4ac6b837960b8d799a0bR9" data-line-number="9" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+<span class="pl-smi">columns</span>.<span class="pl-en">getServiceIcon</span> <span class="pl-k">=</span> <span class="pl-k">function</span> (<span class="pl-smi">businessProcess</span>) {</span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-007c6d9af20c4ac6b837960b8d799a0bR10" data-line-number="10" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+	<span class="pl-k">if</span> (<span class="pl-smi">businessProcess</span>.<span class="pl-c1">constructor</span> <span class="pl-k">===</span> <span class="pl-smi">db</span>.<span class="pl-smi">BusinessProcessDemo</span>) {</span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-007c6d9af20c4ac6b837960b8d799a0bR11" data-line-number="11" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+		<span class="pl-k">return</span> <span class="pl-en">i</span>({ class<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">"</span>fa fa-file<span class="pl-pds">"</span></span> });</span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-007c6d9af20c4ac6b837960b8d799a0bR12" data-line-number="12" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+	}</span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-007c6d9af20c4ac6b837960b8d799a0bR13" data-line-number="13" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+};</span>

  </td>
</tr>



        </tbody></table>
      </div>
</div>


<a name="diff-ff399868a2b79a6fc5aa0b527b07d602"></a>
<div id="diff-1" class="file js-details-container




             show-inline-notes
           ">
  <div class="file-header" data-path="view/user.js">
    <div class="file-actions">
        <span class="show-file-notes">
          <label>
            <input type="checkbox" checked="checked" class="js-toggle-file-notes">
            Show notes
          </label>
        </span>

          <a href="/egovernment/eregistrations-demo/blob/33bc3e61fe1381f23a1be60fd4c6ff626eca18b0/view/user.js" class="btn btn-sm tooltipped tooltipped-nw" rel="nofollow" aria-label="View the whole file at version 33bc3e6 ">View</a>


    </div>
    <div class="file-info">
        <span class="diffstat tooltipped tooltipped-e" aria-label="1 addition &amp; 1 deletion">2 <span class="block-diff-added"></span><span class="block-diff-deleted"></span><span class="block-diff-neutral"></span><span class="block-diff-neutral"></span><span class="block-diff-neutral"></span></span>

      <span class="user-select-contain" title="view/user.js">
        view/user.js
      </span>

    </div>
  </div>

      <div class="data highlight blob-wrapper">
        <table class="diff-table tab-size  " data-tab-size="8">

      <tbody><tr class="js-expandable-line" data-position="0">
    <td class="blob-num blob-num-expandable" colspan="2">
      <a href="#diff-ff399868a2b79a6fc5aa0b527b07d602" class="diff-expander js-expand" title="Expand" aria-label="Expand" data-url="/egovernment/eregistrations-demo/blob_excerpt/1262f42f7405ac992db007a61cd3825599bc6d80?diff=unified&amp;in_wiki_context=&amp;left_hunk_size=7&amp;mode=100644&amp;next_line_num_left=36&amp;next_line_num_right=36&amp;path=view%2Fuser.js&amp;prev_line_num_left=&amp;prev_line_num_right=&amp;right_hunk_size=7" data-left-range="1-35" data-right-range="1-35">
        <svg aria-hidden="true" class="octicon octicon-unfold" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path d="M11.5 7.5L14 10c0 .55-.45 1-1 1H9v-1h3.5l-2-2h-7l-2 2H5v1H1c-.55 0-1-.45-1-1l2.5-2.5L0 5c0-.55.45-1 1-1h4v1H1.5l2 2h7l2-2H9V4h4c.55 0 1 .45 1 1l-2.5 2.5zM6 6h2V3h2L7 0 4 3h2v3zm2 3H6v3H4l3 3 3-3H8V9z"></path></svg>
      </a>
    </td>
    <td class="blob-code blob-code-inner blob-code-hunk">@@ -36,7 +36,7 @@ exports._servicesBoxList = function () {</td>
  </tr>

    <tr>
    <td id="diff-ff399868a2b79a6fc5aa0b527b07d602L36" data-line-number="36" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-ff399868a2b79a6fc5aa0b527b07d602R36" data-line-number="36" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner"> 	<span class="pl-k">return</span> [{</span>

  </td>
</tr>


    <tr>
    <td id="diff-ff399868a2b79a6fc5aa0b527b07d602L37" data-line-number="37" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-ff399868a2b79a6fc5aa0b527b07d602R37" data-line-number="37" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner"> 		actionUrl<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>/register-as-demo/<span class="pl-pds">'</span></span>,</span>

  </td>
</tr>


    <tr>
    <td id="diff-ff399868a2b79a6fc5aa0b527b07d602L38" data-line-number="38" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-ff399868a2b79a6fc5aa0b527b07d602R38" data-line-number="38" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner"> 		buttonContent<span class="pl-k">:</span>  <span class="pl-en">div</span>({ class<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>user-account-service-button<span class="pl-pds">'</span></span> },</span>

  </td>
</tr>


    <tr>
    <td id="diff-ff399868a2b79a6fc5aa0b527b07d602L39" data-line-number="39" class="blob-num blob-num-deletion js-linkable-line-number"></td>

    <td class="blob-num blob-num-deletion empty-cell"></td>

  <td class="blob-code blob-code-deletion">

    <span class="blob-code-inner">-			<span class="pl-en">i</span>({ class<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>fa fa-<span class="x x-first x-last">user</span><span class="pl-pds">'</span></span> }), <span class="pl-en">_</span>(<span class="pl-s"><span class="pl-pds">"</span>Register Demo<span class="pl-pds">"</span></span>)),</span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-ff399868a2b79a6fc5aa0b527b07d602R39" data-line-number="39" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+			<span class="pl-en">i</span>({ class<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>fa fa-<span class="x x-first x-last">file</span><span class="pl-pds">'</span></span> }), <span class="pl-en">_</span>(<span class="pl-s"><span class="pl-pds">"</span>Register Demo<span class="pl-pds">"</span></span>)),</span>

  </td>
</tr>


    <tr>
    <td id="diff-ff399868a2b79a6fc5aa0b527b07d602L40" data-line-number="40" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-ff399868a2b79a6fc5aa0b527b07d602R40" data-line-number="40" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner"> 		content<span class="pl-k">:</span> <span class="pl-en">span</span>(<span class="pl-en">_</span>(<span class="pl-s"><span class="pl-pds">"</span>Short description of demo registration process<span class="pl-pds">"</span></span>)),</span>

  </td>
</tr>


    <tr>
    <td id="diff-ff399868a2b79a6fc5aa0b527b07d602L41" data-line-number="41" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-ff399868a2b79a6fc5aa0b527b07d602R41" data-line-number="41" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner"> 		disabledCondition<span class="pl-k">:</span> <span class="pl-en">gtOrEq</span>(<span class="pl-en">getSelectedBusinessProcesses</span>(<span class="pl-v">this</span>.<span class="pl-smi">user</span>,</span>

  </td>
</tr>


    <tr>
    <td id="diff-ff399868a2b79a6fc5aa0b527b07d602L42" data-line-number="42" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-ff399868a2b79a6fc5aa0b527b07d602R42" data-line-number="42" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner"> 			<span class="pl-smi">db</span>.<span class="pl-smi">BusinessProcessDemo</span>).<span class="pl-smi">_size</span>, <span class="pl-c1">5</span>)</span>

  </td>
</tr>


  <tr class="js-expandable-line">
   <td class="blob-num blob-num-expandable" colspan="2">
     <a href="#diff-ff399868a2b79a6fc5aa0b527b07d602" class="diff-expander js-expand" title="Expand" aria-label="Expand" data-url="/egovernment/eregistrations-demo/blob_excerpt/1262f42f7405ac992db007a61cd3825599bc6d80?diff=unified&amp;in_wiki_context=&amp;mode=100644&amp;path=view%2Fuser.js&amp;prev_line_num_left=42&amp;prev_line_num_right=42" data-left-range="43-44" data-right-range="43-44">
       <svg aria-hidden="true" class="octicon octicon-unfold" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path d="M11.5 7.5L14 10c0 .55-.45 1-1 1H9v-1h3.5l-2-2h-7l-2 2H5v1H1c-.55 0-1-.45-1-1l2.5-2.5L0 5c0-.55.45-1 1-1h4v1H1.5l2 2h7l2-2H9V4h4c.55 0 1 .45 1 1l-2.5 2.5zM6 6h2V3h2L7 0 4 3h2v3zm2 3H6v3H4l3 3 3-3H8V9z"></path></svg>
     </a>
   </td>
   <td class="blob-code blob-code-expandable"></td>
  </tr>

        </tbody></table>
      </div>
</div>

</div>
