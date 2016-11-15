---
layout: recipe
permalink: /como/desactivar-un-servicio/
title: 'Desactivar un servicio'
category: '1. Part A'
sub-category: 'Servicio'
rate: '3'
number: '105'
introduction-text: 'A veces se debe desactivar un servicio temporalmente. Esta ficha describe como se desactiva un servicio con un esfuerzo mínimo (y no sacar totalmente el servicio desde el código fuente).'
introduction-img: '104.png'
prevUrl: 104
nextUrl: 111
done: ''
lang: es
ref: 105
---

Nos enfocaremos en como inhabilitar un servicio. Después de esto no será posible crear nuevos servicios del tipo inhabilitado, y removeremos el enlace de la interfaz.

Queremos realizar solo los cambios necesarios y asegurar que el servicio pueda ser restaurado fácilmente.

Para inhabilitar un servicio:

1. Abrir el archivo `view/user.js`.
2. Encontrar el array `_servicesBoxList` y comentar la entrada con el servicio que se desea inhabilitar. Tomar nota del campo `actionUrl` de la entrada.
3. Abrir el archivo `apps/user/controller/index.js`.
4. Encontrar la configuración del controlador del servicio (Es el que contiene el valor del campo `actionUrl` del punto 2).
5. Comentar la entrada del controlador para el servicio que se desea inhabilitar.

## Ejemplo

En la rama "[make-a-service-temporarily-unavailable](https://github.com/egovernment/eregistrations-demo/tree/make-a-service-temporarily-unavailable)" de eregistrations-demo :

Inhabilitar el servicio de `BusinessProcessDemo`.

### Solución

<div id="files" class="diff-view " onclick="window.open('https://github.com/egovernment/eregistrations-demo/compare/make-a-service-temporarily-unavailable...make-a-service-temporarily-unavailable-solution#files')">


<a name="diff-f17d2347e14c6db3e4759e797bf9cb35"></a>
<div id="diff-0" class="file js-details-container




             show-inline-notes
           ">
  <div class="file-header" data-path="apps/user/controller/index.js">
    <div class="file-actions">
        <span class="show-file-notes">
          <label>
            <input type="checkbox" checked="checked" class="js-toggle-file-notes">
            Show comments
          </label>
        </span>

          <a href="/egovernment/eregistrations-demo/blob/9048afe8e69c8f5be1c00b3a3368ccd010660bda/apps/user/controller/index.js" class="btn btn-sm tooltipped tooltipped-nw" rel="nofollow" aria-label="View the whole file at version 9048afe ">View</a>


    </div>
    <div class="file-info">
        <span class="diffstat tooltipped tooltipped-e" aria-label="9 additions &amp; 4 deletions">13 <span class="block-diff-added"></span><span class="block-diff-added"></span><span class="block-diff-added"></span><span class="block-diff-deleted"></span><span class="block-diff-neutral"></span></span>

      <span class="user-select-contain" title="apps/user/controller/index.js">
        apps/user/controller/index.js
      </span>

    </div>
  </div>

      <div class="data highlight blob-wrapper">
        <table class="diff-table tab-size  " data-tab-size="8">

      <tbody><tr data-position="0">
    <td id="diff-f17d2347e14c6db3e4759e797bf9cb35L0" class="blob-num blob-num-hunk non-expandable" data-line-number="..."></td>
    <td id="diff-f17d2347e14c6db3e4759e797bf9cb35R0" class="blob-num blob-num-hunk non-expandable" data-line-number="..."></td>
    <td class="blob-code blob-code-inner blob-code-hunk">@@ -1,15 +1,20 @@</td>
  </tr>

    <tr>
    <td id="diff-f17d2347e14c6db3e4759e797bf9cb35L1" data-line-number="1" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-f17d2347e14c6db3e4759e797bf9cb35R1" data-line-number="1" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner"> <span class="pl-s"><span class="pl-pds">'</span>use strict<span class="pl-pds">'</span></span>;</span>

  </td>
</tr>


    <tr>
    <td id="diff-f17d2347e14c6db3e4759e797bf9cb35L2" data-line-number="2" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-f17d2347e14c6db3e4759e797bf9cb35R2" data-line-number="2" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner"> </span>

  </td>
</tr>


    <tr>
    <td id="diff-f17d2347e14c6db3e4759e797bf9cb35L3" data-line-number="3" class="blob-num blob-num-deletion js-linkable-line-number"></td>

    <td class="blob-num blob-num-deletion empty-cell"></td>

  <td class="blob-code blob-code-deletion">

    <span class="blob-code-inner">-<span class="pl-k">var</span> assign           <span class="pl-k">=</span> <span class="pl-c1">require</span>(<span class="pl-s"><span class="pl-pds">'</span>es5-ext/object/assign<span class="pl-pds">'</span></span>)</span>

  </td>
</tr>


    <tr>
    <td id="diff-f17d2347e14c6db3e4759e797bf9cb35L4" data-line-number="4" class="blob-num blob-num-deletion js-linkable-line-number"></td>

    <td class="blob-num blob-num-deletion empty-cell"></td>

  <td class="blob-code blob-code-deletion">

    <span class="blob-code-inner">-  , createBp         <span class="pl-k">=</span> <span class="pl-c1">require</span>(<span class="pl-s"><span class="pl-pds">'</span>eregistrations/controller/utils/create-business-process<span class="pl-pds">'</span></span>)</span>

  </td>
</tr>


    <tr>
    <td id="diff-f17d2347e14c6db3e4759e797bf9cb35L5" data-line-number="5" class="blob-num blob-num-deletion js-linkable-line-number"></td>

    <td class="blob-num blob-num-deletion empty-cell"></td>

  <td class="blob-code blob-code-deletion">

    <span class="blob-code-inner">-  , validateCreateBp <span class="pl-k">=</span> <span class="pl-c1">require</span>(<span class="pl-s"><span class="pl-pds">'</span>eregistrations/controller/utils/validate-create-business-process<span class="pl-pds">'</span></span>)</span>

  </td>
</tr>


    <tr>
    <td id="diff-f17d2347e14c6db3e4759e797bf9cb35L6" data-line-number="6" class="blob-num blob-num-deletion js-linkable-line-number"></td>

    <td class="blob-num blob-num-deletion empty-cell"></td>

  <td class="blob-code blob-code-deletion">

    <span class="blob-code-inner">-  , db               <span class="pl-k">=</span> <span class="pl-c1">require</span>(<span class="pl-s"><span class="pl-pds">'</span>../../../db<span class="pl-pds">'</span></span>);</span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-f17d2347e14c6db3e4759e797bf9cb35R3" data-line-number="3" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+<span class="pl-k">var</span> assign           <span class="pl-k">=</span> <span class="pl-c1">require</span>(<span class="pl-s"><span class="pl-pds">'</span>es5-ext/object/assign<span class="pl-pds">'</span></span>)<span class="x x-first x-last">;</span></span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-f17d2347e14c6db3e4759e797bf9cb35R4" data-line-number="4" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+<span class="pl-c"><span class="x x-first x-last">//</span>  , createBp         = require('eregistrations/controller/utils/create-business-process')</span></span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-f17d2347e14c6db3e4759e797bf9cb35R5" data-line-number="5" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+<span class="pl-c"><span class="x x-first x-last">//</span>  , validateCreateBp = require('eregistrations/controller/utils/validate-create-business-process')</span></span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-f17d2347e14c6db3e4759e797bf9cb35R6" data-line-number="6" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+<span class="pl-c"><span class="x x-first x-last">//</span>  , db               = require('../../../db');</span></span>

  </td>
</tr>


    <tr>
    <td id="diff-f17d2347e14c6db3e4759e797bf9cb35L7" data-line-number="7" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-f17d2347e14c6db3e4759e797bf9cb35R7" data-line-number="7" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner"> </span>

  </td>
</tr>


    <tr>
    <td id="diff-f17d2347e14c6db3e4759e797bf9cb35L8" data-line-number="8" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-f17d2347e14c6db3e4759e797bf9cb35R8" data-line-number="8" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner"> <span class="pl-c">// Common controller.</span></span>

  </td>
</tr>


    <tr>
    <td id="diff-f17d2347e14c6db3e4759e797bf9cb35L9" data-line-number="9" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-f17d2347e14c6db3e4759e797bf9cb35R9" data-line-number="9" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner"> <span class="pl-en">assign</span>(<span class="pl-c1">exports</span>, <span class="pl-c1">require</span>(<span class="pl-s"><span class="pl-pds">'</span>eregistrations/controller/my-account<span class="pl-pds">'</span></span>));</span>

  </td>
</tr>


    <tr>
    <td id="diff-f17d2347e14c6db3e4759e797bf9cb35L10" data-line-number="10" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-f17d2347e14c6db3e4759e797bf9cb35R10" data-line-number="10" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner"> </span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-f17d2347e14c6db3e4759e797bf9cb35R11" data-line-number="11" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+<span class="pl-c">/**</span></span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-f17d2347e14c6db3e4759e797bf9cb35R12" data-line-number="12" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+<span class="pl-c"> * Disabled temporarily</span></span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-f17d2347e14c6db3e4759e797bf9cb35R13" data-line-number="13" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+<span class="pl-c"> *</span></span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-f17d2347e14c6db3e4759e797bf9cb35R14" data-line-number="14" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+<span class="pl-c"></span></span>

  </td>
</tr>


    <tr>
    <td id="diff-f17d2347e14c6db3e4759e797bf9cb35L11" data-line-number="11" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-f17d2347e14c6db3e4759e797bf9cb35R15" data-line-number="15" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner"> <span class="pl-c">exports['register-as-demo'] = {</span></span>

  </td>
</tr>


    <tr>
    <td id="diff-f17d2347e14c6db3e4759e797bf9cb35L12" data-line-number="12" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-f17d2347e14c6db3e4759e797bf9cb35R16" data-line-number="16" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner"> <span class="pl-c">	submit: createBp(db.BusinessProcessDemo),</span></span>

  </td>
</tr>


    <tr>
    <td id="diff-f17d2347e14c6db3e4759e797bf9cb35L13" data-line-number="13" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-f17d2347e14c6db3e4759e797bf9cb35R17" data-line-number="17" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner"> <span class="pl-c">	redirectUrl: '/',</span></span>

  </td>
</tr>


    <tr>
    <td id="diff-f17d2347e14c6db3e4759e797bf9cb35L14" data-line-number="14" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-f17d2347e14c6db3e4759e797bf9cb35R18" data-line-number="18" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner"> <span class="pl-c">	validate: validateCreateBp(db.BusinessProcessDemo)</span></span>

  </td>
</tr>


    <tr>
    <td id="diff-f17d2347e14c6db3e4759e797bf9cb35L15" data-line-number="15" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-f17d2347e14c6db3e4759e797bf9cb35R19" data-line-number="19" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner"> <span class="pl-c">};</span></span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-f17d2347e14c6db3e4759e797bf9cb35R20" data-line-number="20" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+<span class="pl-c">*/</span></span>

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
            Show comments
          </label>
        </span>

          <a href="/egovernment/eregistrations-demo/blob/9048afe8e69c8f5be1c00b3a3368ccd010660bda/view/user.js" class="btn btn-sm tooltipped tooltipped-nw" rel="nofollow" aria-label="View the whole file at version 9048afe ">View</a>


    </div>
    <div class="file-info">
        <span class="diffstat tooltipped tooltipped-e" aria-label="12 additions &amp; 7 deletions">19 <span class="block-diff-added"></span><span class="block-diff-added"></span><span class="block-diff-added"></span><span class="block-diff-deleted"></span><span class="block-diff-neutral"></span></span>

      <span class="user-select-contain" title="view/user.js">
        view/user.js
      </span>

    </div>
  </div>

      <div class="data highlight blob-wrapper">
        <table class="diff-table tab-size  " data-tab-size="8">

      <tbody><tr class="js-expandable-line" data-position="0">
    <td class="blob-num blob-num-expandable" colspan="2">
      <a href="#diff-ff399868a2b79a6fc5aa0b527b07d602" class="diff-expander js-expand" title="Expand" aria-label="Expand" data-url="/egovernment/eregistrations-demo/blob_excerpt/139e1ca5c6c6334fde61204aae97d76954e9d427?diff=unified&amp;in_wiki_context=&amp;left_hunk_size=15&amp;mode=100644&amp;next_line_num_left=2&amp;next_line_num_right=2&amp;path=view%2Fuser.js&amp;prev_line_num_left=&amp;prev_line_num_right=&amp;right_hunk_size=15" data-left-range="1-1" data-right-range="1-1">
        <svg aria-hidden="true" class="octicon octicon-unfold" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path d="M11.5 7.5L14 10c0 .55-.45 1-1 1H9v-1h3.5l-2-2h-7l-2 2H5v1H1c-.55 0-1-.45-1-1l2.5-2.5L0 5c0-.55.45-1 1-1h4v1H1.5l2 2h7l2-2H9V4h4c.55 0 1 .45 1 1l-2.5 2.5zM6 6h2V3h2L7 0 4 3h2v3zm2 3H6v3H4l3 3 3-3H8V9z"></path></svg>
      </a>
    </td>
    <td class="blob-code blob-code-inner blob-code-hunk">@@ -2,15 +2,15 @@</td>
  </tr>

    <tr>
    <td id="diff-ff399868a2b79a6fc5aa0b527b07d602L2" data-line-number="2" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-ff399868a2b79a6fc5aa0b527b07d602R2" data-line-number="2" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner"> </span>

  </td>
</tr>


    <tr>
    <td id="diff-ff399868a2b79a6fc5aa0b527b07d602L3" data-line-number="3" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-ff399868a2b79a6fc5aa0b527b07d602R3" data-line-number="3" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner"> <span class="pl-s"><span class="pl-pds">'</span>use strict<span class="pl-pds">'</span></span>;</span>

  </td>
</tr>


    <tr>
    <td id="diff-ff399868a2b79a6fc5aa0b527b07d602L4" data-line-number="4" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-ff399868a2b79a6fc5aa0b527b07d602R4" data-line-number="4" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner"> </span>

  </td>
</tr>


    <tr>
    <td id="diff-ff399868a2b79a6fc5aa0b527b07d602L5" data-line-number="5" class="blob-num blob-num-deletion js-linkable-line-number"></td>

    <td class="blob-num blob-num-deletion empty-cell"></td>

  <td class="blob-code blob-code-deletion">

    <span class="blob-code-inner">-<span class="pl-k">var</span> db <span class="pl-k">=</span> <span class="pl-c1">require</span>(<span class="pl-s"><span class="pl-pds">'</span>../db<span class="pl-pds">'</span></span>)</span>

  </td>
</tr>


    <tr>
    <td id="diff-ff399868a2b79a6fc5aa0b527b07d602L6" data-line-number="6" class="blob-num blob-num-deletion js-linkable-line-number"></td>

    <td class="blob-num blob-num-deletion empty-cell"></td>

  <td class="blob-code blob-code-deletion">

    <span class="blob-code-inner">-  , _  <span class="pl-k">=</span> <span class="pl-c1">require</span>(<span class="pl-s"><span class="pl-pds">'</span>../i18n<span class="pl-pds">'</span></span>).<span class="pl-en">bind</span>(<span class="pl-s"><span class="pl-pds">'</span>User<span class="pl-pds">'</span></span>);</span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-ff399868a2b79a6fc5aa0b527b07d602R5" data-line-number="5" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+<span class="pl-c"><span class="x x-first x-last">//</span>var db = require('../db')</span></span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-ff399868a2b79a6fc5aa0b527b07d602R6" data-line-number="6" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+<span class="pl-c"><span class="x x-first x-last">//</span>  , _  = require('../i18n').bind('User');</span></span>

  </td>
</tr>


    <tr>
    <td id="diff-ff399868a2b79a6fc5aa0b527b07d602L7" data-line-number="7" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-ff399868a2b79a6fc5aa0b527b07d602R7" data-line-number="7" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner"> </span>

  </td>
</tr>


    <tr>
    <td id="diff-ff399868a2b79a6fc5aa0b527b07d602L8" data-line-number="8" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-ff399868a2b79a6fc5aa0b527b07d602R8" data-line-number="8" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner"> <span class="pl-c">// Assure base customisations are loaded</span></span>

  </td>
</tr>


    <tr>
    <td id="diff-ff399868a2b79a6fc5aa0b527b07d602L9" data-line-number="9" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-ff399868a2b79a6fc5aa0b527b07d602R9" data-line-number="9" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner"> <span class="pl-c1">require</span>(<span class="pl-s"><span class="pl-pds">'</span>./user-base<span class="pl-pds">'</span></span>);</span>

  </td>
</tr>


    <tr>
    <td id="diff-ff399868a2b79a6fc5aa0b527b07d602L10" data-line-number="10" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-ff399868a2b79a6fc5aa0b527b07d602R10" data-line-number="10" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner"> </span>

  </td>
</tr>


    <tr>
    <td id="diff-ff399868a2b79a6fc5aa0b527b07d602L11" data-line-number="11" class="blob-num blob-num-deletion js-linkable-line-number"></td>

    <td class="blob-num blob-num-deletion empty-cell"></td>

  <td class="blob-code blob-code-deletion">

    <span class="blob-code-inner">-<span class="pl-k">var</span> <span class="pl-en">getSelectedBusinessProcesses</span> <span class="pl-k">=</span> <span class="pl-k">function</span> (<span class="pl-smi">user</span>, <span class="pl-smi">bpType</span>) {</span>

  </td>
</tr>


    <tr>
    <td id="diff-ff399868a2b79a6fc5aa0b527b07d602L12" data-line-number="12" class="blob-num blob-num-deletion js-linkable-line-number"></td>

    <td class="blob-num blob-num-deletion empty-cell"></td>

  <td class="blob-code blob-code-deletion">

    <span class="blob-code-inner">-	<span class="pl-k">return</span> <span class="pl-smi">bpType</span>.<span class="pl-smi">instances</span>.<span class="pl-en">filterByKey</span>(<span class="pl-s"><span class="pl-pds">'</span>user<span class="pl-pds">'</span></span>, user).<span class="pl-en">filterByKey</span>(<span class="pl-s"><span class="pl-pds">'</span>isSubmitted<span class="pl-pds">'</span></span>, <span class="pl-c1">false</span>);</span>

  </td>
</tr>


    <tr>
    <td id="diff-ff399868a2b79a6fc5aa0b527b07d602L13" data-line-number="13" class="blob-num blob-num-deletion js-linkable-line-number"></td>

    <td class="blob-num blob-num-deletion empty-cell"></td>

  <td class="blob-code blob-code-deletion">

    <span class="blob-code-inner">-};</span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-ff399868a2b79a6fc5aa0b527b07d602R11" data-line-number="11" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+<span class="pl-c"><span class="x x-first x-last">//</span>var getSelectedBusinessProcesses = function (user, bpType) {</span></span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-ff399868a2b79a6fc5aa0b527b07d602R12" data-line-number="12" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+<span class="pl-c"><span class="x x-first x-last">//</span>	return bpType.instances.filterByKey('user', user).filterByKey('isSubmitted', false);</span></span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-ff399868a2b79a6fc5aa0b527b07d602R13" data-line-number="13" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+<span class="pl-c"><span class="x x-first x-last">//</span>};</span></span>

  </td>
</tr>


    <tr>
    <td id="diff-ff399868a2b79a6fc5aa0b527b07d602L14" data-line-number="14" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-ff399868a2b79a6fc5aa0b527b07d602R14" data-line-number="14" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner"> </span>

  </td>
</tr>


    <tr>
    <td id="diff-ff399868a2b79a6fc5aa0b527b07d602L15" data-line-number="15" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-ff399868a2b79a6fc5aa0b527b07d602R15" data-line-number="15" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner"> <span class="pl-c1">module</span>.<span class="pl-smi">exports</span> <span class="pl-k">=</span> <span class="pl-c1">exports</span> <span class="pl-k">=</span> <span class="pl-c1">require</span>(<span class="pl-s"><span class="pl-pds">'</span>eregistrations/view/user<span class="pl-pds">'</span></span>);</span>

  </td>
</tr>


    <tr>
    <td id="diff-ff399868a2b79a6fc5aa0b527b07d602L16" data-line-number="16" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-ff399868a2b79a6fc5aa0b527b07d602R16" data-line-number="16" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner"> </span>

  </td>
</tr>



    <tr class="blob-expanded">
      <td id="diff-ff399868a2b79a6fc5aa0b527b07d602L17" class="blob-num js-linkable-line-number" data-line-number="17"></td>
      <td id="diff-ff399868a2b79a6fc5aa0b527b07d602R17" class="blob-num js-linkable-line-number" data-line-number="17"></td>
      <td class="blob-code blob-code-inner"> <span class="pl-c">/**</span></td>
  </tr>
  <tr class="blob-expanded">
      <td id="diff-ff399868a2b79a6fc5aa0b527b07d602L18" class="blob-num js-linkable-line-number" data-line-number="18"></td>
      <td id="diff-ff399868a2b79a6fc5aa0b527b07d602R18" class="blob-num js-linkable-line-number" data-line-number="18"></td>
      <td class="blob-code blob-code-inner"> <span class="pl-c"> * Util for getting filtered businessProcesses of the user</span></td>
  </tr>
  <tr class="blob-expanded">
      <td id="diff-ff399868a2b79a6fc5aa0b527b07d602L19" class="blob-num js-linkable-line-number" data-line-number="19"></td>
      <td id="diff-ff399868a2b79a6fc5aa0b527b07d602R19" class="blob-num js-linkable-line-number" data-line-number="19"></td>
      <td class="blob-code blob-code-inner"> <span class="pl-c"> * var getSelectedBusinessProcesses =</span></td>
  </tr>
  <tr class="blob-expanded">
      <td id="diff-ff399868a2b79a6fc5aa0b527b07d602L20" class="blob-num js-linkable-line-number" data-line-number="20"></td>
      <td id="diff-ff399868a2b79a6fc5aa0b527b07d602R20" class="blob-num js-linkable-line-number" data-line-number="20"></td>
      <td class="blob-code blob-code-inner"> <span class="pl-c"> * require('eregistrations/business-processes/get-user-business-processes-by-type');</span></td>
  </tr>
  <tr class="blob-expanded">
      <td id="diff-ff399868a2b79a6fc5aa0b527b07d602L21" class="blob-num js-linkable-line-number" data-line-number="21"></td>
      <td id="diff-ff399868a2b79a6fc5aa0b527b07d602R21" class="blob-num js-linkable-line-number" data-line-number="21"></td>
      <td class="blob-code blob-code-inner"> <span class="pl-c"> */</span></td>
  </tr>
  <tr class="blob-expanded">
      <td id="diff-ff399868a2b79a6fc5aa0b527b07d602L22" class="blob-num js-linkable-line-number" data-line-number="22"></td>
      <td id="diff-ff399868a2b79a6fc5aa0b527b07d602R22" class="blob-num js-linkable-line-number" data-line-number="22"></td>
      <td class="blob-code blob-code-inner"> </td>
  </tr>
  <tr class="blob-expanded">
      <td id="diff-ff399868a2b79a6fc5aa0b527b07d602L23" class="blob-num js-linkable-line-number" data-line-number="23"></td>
      <td id="diff-ff399868a2b79a6fc5aa0b527b07d602R23" class="blob-num js-linkable-line-number" data-line-number="23"></td>
      <td class="blob-code blob-code-inner"> <span class="pl-c1">exports</span>.<span class="pl-en">_servicesBoxList</span> <span class="pl-k">=</span> <span class="pl-k">function</span> () {</td>
  </tr>
  <tr class="blob-expanded">
      <td id="diff-ff399868a2b79a6fc5aa0b527b07d602L24" class="blob-num js-linkable-line-number" data-line-number="24"></td>
      <td id="diff-ff399868a2b79a6fc5aa0b527b07d602R24" class="blob-num js-linkable-line-number" data-line-number="24"></td>
      <td class="blob-code blob-code-inner"> 	<span class="pl-c">/**</span></td>
  </tr>
  <tr class="blob-expanded">
      <td id="diff-ff399868a2b79a6fc5aa0b527b07d602L25" class="blob-num js-linkable-line-number" data-line-number="25"></td>
      <td id="diff-ff399868a2b79a6fc5aa0b527b07d602R25" class="blob-num js-linkable-line-number" data-line-number="25"></td>
      <td class="blob-code blob-code-inner"> <span class="pl-c">	 * Service box configuration example:</span></td>
  </tr>
  <tr class="blob-expanded">
      <td id="diff-ff399868a2b79a6fc5aa0b527b07d602L26" class="blob-num js-linkable-line-number" data-line-number="26"></td>
      <td id="diff-ff399868a2b79a6fc5aa0b527b07d602R26" class="blob-num js-linkable-line-number" data-line-number="26"></td>
      <td class="blob-code blob-code-inner"> <span class="pl-c">	 * {</span></td>
  </tr>
  <tr class="blob-expanded">
      <td id="diff-ff399868a2b79a6fc5aa0b527b07d602L27" class="blob-num js-linkable-line-number" data-line-number="27"></td>
      <td id="diff-ff399868a2b79a6fc5aa0b527b07d602R27" class="blob-num js-linkable-line-number" data-line-number="27"></td>
      <td class="blob-code blob-code-inner"> <span class="pl-c">	 * actionUrl: '/register-as-merchant/',</span></td>
  </tr>
  <tr class="blob-expanded">
      <td id="diff-ff399868a2b79a6fc5aa0b527b07d602L28" class="blob-num js-linkable-line-number" data-line-number="28"></td>
      <td id="diff-ff399868a2b79a6fc5aa0b527b07d602R28" class="blob-num js-linkable-line-number" data-line-number="28"></td>
      <td class="blob-code blob-code-inner"> <span class="pl-c">	 * buttonContent:  div({ class: 'user-account-service-button' },</span></td>
  </tr>
  <tr class="blob-expanded">
      <td id="diff-ff399868a2b79a6fc5aa0b527b07d602L29" class="blob-num js-linkable-line-number" data-line-number="29"></td>
      <td id="diff-ff399868a2b79a6fc5aa0b527b07d602R29" class="blob-num js-linkable-line-number" data-line-number="29"></td>
      <td class="blob-code blob-code-inner"> <span class="pl-c">	 * i({ class: 'fa fa-user' }), _("Register as individual trader")),</span></td>
  </tr>
  <tr class="blob-expanded">
      <td id="diff-ff399868a2b79a6fc5aa0b527b07d602L30" class="blob-num js-linkable-line-number" data-line-number="30"></td>
      <td id="diff-ff399868a2b79a6fc5aa0b527b07d602R30" class="blob-num js-linkable-line-number" data-line-number="30"></td>
      <td class="blob-code blob-code-inner"> <span class="pl-c">	 * content: span(_("Short description of merchant registration process")),</span></td>
  </tr>
  <tr class="blob-expanded">
      <td id="diff-ff399868a2b79a6fc5aa0b527b07d602L31" class="blob-num js-linkable-line-number" data-line-number="31"></td>
      <td id="diff-ff399868a2b79a6fc5aa0b527b07d602R31" class="blob-num js-linkable-line-number" data-line-number="31"></td>
      <td class="blob-code blob-code-inner"> <span class="pl-c">	 * disabledCondition: gtOrEq(getSelectedBusinessProcesses(this.user,</span></td>
  </tr>
  <tr class="blob-expanded">
      <td id="diff-ff399868a2b79a6fc5aa0b527b07d602L32" class="blob-num js-linkable-line-number" data-line-number="32"></td>
      <td id="diff-ff399868a2b79a6fc5aa0b527b07d602R32" class="blob-num js-linkable-line-number" data-line-number="32"></td>
      <td class="blob-code blob-code-inner"> <span class="pl-c">	 * db.BusinessProcessMerchant)._size, 5)</span></td>
  </tr>




    <tr>
    <td id="diff-ff399868a2b79a6fc5aa0b527b07d602L33" data-line-number="33" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-ff399868a2b79a6fc5aa0b527b07d602R33" data-line-number="33" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner"> <span class="pl-c">	 * }</span></span>

  </td>
</tr>


    <tr>
    <td id="diff-ff399868a2b79a6fc5aa0b527b07d602L34" data-line-number="34" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-ff399868a2b79a6fc5aa0b527b07d602R34" data-line-number="34" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner"> <span class="pl-c">	 *</span></span>

  </td>
</tr>


    <tr>
    <td id="diff-ff399868a2b79a6fc5aa0b527b07d602L35" data-line-number="35" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-ff399868a2b79a6fc5aa0b527b07d602R35" data-line-number="35" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner"> <span class="pl-c">	 */</span></span>

  </td>
</tr>


    <tr>
    <td id="diff-ff399868a2b79a6fc5aa0b527b07d602L36" data-line-number="36" class="blob-num blob-num-deletion js-linkable-line-number"></td>

    <td class="blob-num blob-num-deletion empty-cell"></td>

  <td class="blob-code blob-code-deletion">

    <span class="blob-code-inner">-	<span class="pl-k">return</span> [{</span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-ff399868a2b79a6fc5aa0b527b07d602R36" data-line-number="36" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+	<span class="pl-k">return</span> [</span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-ff399868a2b79a6fc5aa0b527b07d602R37" data-line-number="37" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+	<span class="pl-c">/**</span></span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-ff399868a2b79a6fc5aa0b527b07d602R38" data-line-number="38" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+<span class="pl-c">	 * Disabled temporarily</span></span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-ff399868a2b79a6fc5aa0b527b07d602R39" data-line-number="39" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+<span class="pl-c">	 *</span></span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-ff399868a2b79a6fc5aa0b527b07d602R40" data-line-number="40" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+<span class="pl-c">	{</span></span>

  </td>
</tr>


    <tr>
    <td id="diff-ff399868a2b79a6fc5aa0b527b07d602L37" data-line-number="37" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-ff399868a2b79a6fc5aa0b527b07d602R41" data-line-number="41" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner"> <span class="pl-c">		actionUrl: '/register-as-demo/',</span></span>

  </td>
</tr>


    <tr>
    <td id="diff-ff399868a2b79a6fc5aa0b527b07d602L38" data-line-number="38" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-ff399868a2b79a6fc5aa0b527b07d602R42" data-line-number="42" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner"> <span class="pl-c">		buttonContent:  div({ class: 'user-account-service-button' },</span></span>

  </td>
</tr>


    <tr>
    <td id="diff-ff399868a2b79a6fc5aa0b527b07d602L39" data-line-number="39" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-ff399868a2b79a6fc5aa0b527b07d602R43" data-line-number="43" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner"> <span class="pl-c">			i({ class: 'fa fa-user' }), _("Register Demo")),</span></span>

  </td>
</tr>


    <tr>
    <td id="diff-ff399868a2b79a6fc5aa0b527b07d602L40" data-line-number="40" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-ff399868a2b79a6fc5aa0b527b07d602R44" data-line-number="44" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner"> <span class="pl-c">		content: span(_("Short description of demo registration process")),</span></span>

  </td>
</tr>


    <tr>
    <td id="diff-ff399868a2b79a6fc5aa0b527b07d602L41" data-line-number="41" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-ff399868a2b79a6fc5aa0b527b07d602R45" data-line-number="45" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner"> <span class="pl-c">		disabledCondition: gtOrEq(getSelectedBusinessProcesses(this.user,</span></span>

  </td>
</tr>


    <tr>
    <td id="diff-ff399868a2b79a6fc5aa0b527b07d602L42" data-line-number="42" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-ff399868a2b79a6fc5aa0b527b07d602R46" data-line-number="46" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner"> <span class="pl-c">			db.BusinessProcessDemo)._size, 5)</span></span>

  </td>
</tr>


    <tr>
    <td id="diff-ff399868a2b79a6fc5aa0b527b07d602L43" data-line-number="43" class="blob-num blob-num-deletion js-linkable-line-number"></td>

    <td class="blob-num blob-num-deletion empty-cell"></td>

  <td class="blob-code blob-code-deletion">

    <span class="blob-code-inner">-	}];</span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-ff399868a2b79a6fc5aa0b527b07d602R47" data-line-number="47" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+<span class="pl-c">	}*/</span></span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-ff399868a2b79a6fc5aa0b527b07d602R48" data-line-number="48" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+	];</span>

  </td>
</tr>


    <tr>
    <td id="diff-ff399868a2b79a6fc5aa0b527b07d602L44" data-line-number="44" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-ff399868a2b79a6fc5aa0b527b07d602R49" data-line-number="49" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner"> };</span>

  </td>
</tr>



        </tbody></table>
      </div>

</div>


</div>


