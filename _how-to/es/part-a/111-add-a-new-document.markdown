---
layout: recipe
permalink: /como/anadir-nuevo-documento/
title: 'Añadir un nuevo documento'
category: '1. Part A'
sub-category: 'Registration'
rate: '2'
number: '111'
introduction-text: 'Esta ficha trata de añadir un nuevo documento al sistema para utilizarlo en un registro.'
introduction-img: '111-1.png'
prevUrl: 105
nextUrl: 112
done: 'yes'
lang: es
ref: 114
---


Cada documento está definido como único en su clase. Los documentos de uso de registro como certificados o requerimientos de carga (documentos que necesitan ser cargados por el usuario final).

Para crear un nuevo documento:

1. En el directorio `model/documents` crear un nuevo archivo `<your-document>.js`.
2. Crear una clase de documento como una extensión de `eregistrations/model/document.js` e.g cuando el documento es llamado *"Business plan"*:

```javascript
'use strict';

var _  = require('../../i18n')
  , db = require('../../db');

module.exports = require('eregistrations/model/document')(db).extend('BusinessPlan', {}, {
	label: { value: _("Business plan") }
});
```

---

## Ejemplo

En la branch "[add-a-new-document](https://github.com/egovernment/eregistrations-demo/tree/add-a-new-document)" de eregistrations-demo :

Agregar un nuevo documento *"Driving license"* con el nombre abreviado "DL".

### Solución

<div id="files" class="diff-view " onclick="window.open('https://github.com/egovernment/eregistrations-demo/compare/add-a-new-document...add-a-new-document-solution#files')">


<a name="diff-59c3120e856841ee155fa43135949802"></a>
<div id="diff-0" class="file js-details-container




             show-inline-notes
           ">
  <div class="file-header" data-path="model/documents/driving-license.js">
    <div class="file-actions">
        <span class="show-file-notes">
          <label>
            <input type="checkbox" checked="checked" class="js-toggle-file-notes">
            Show notes
          </label>
        </span>

          <a href="/egovernment/eregistrations-demo/blob/245514336c4a481cf51d510ab44312360618cedc/model/documents/driving-license.js" class="btn btn-sm tooltipped tooltipped-nw" rel="nofollow" aria-label="View the whole file at version 2455143 ">View</a>


    </div>
    <div class="file-info">
        <span class="diffstat tooltipped tooltipped-e" aria-label="9 additions &amp; 0 deletions">9 <span class="block-diff-added"></span><span class="block-diff-added"></span><span class="block-diff-added"></span><span class="block-diff-added"></span><span class="block-diff-added"></span></span>

      <span class="user-select-contain" title="model/documents/driving-license.js">
        model/documents/driving-license.js
      </span>

    </div>
  </div>

      <div class="data highlight blob-wrapper">
        <table class="diff-table tab-size  " data-tab-size="8">

      <tbody><tr data-position="0">
    <td id="diff-59c3120e856841ee155fa43135949802L-1" class="blob-num blob-num-hunk non-expandable" data-line-number="..."></td>
    <td id="diff-59c3120e856841ee155fa43135949802R0" class="blob-num blob-num-hunk non-expandable" data-line-number="..."></td>
    <td class="blob-code blob-code-inner blob-code-hunk">@@ -0,0 +1,9 @@</td>
  </tr>

    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-59c3120e856841ee155fa43135949802R1" data-line-number="1" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+<span class="pl-s"><span class="pl-pds">'</span>use strict<span class="pl-pds">'</span></span>;</span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-59c3120e856841ee155fa43135949802R2" data-line-number="2" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+</span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-59c3120e856841ee155fa43135949802R3" data-line-number="3" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+<span class="pl-k">var</span> _  <span class="pl-k">=</span> <span class="pl-c1">require</span>(<span class="pl-s"><span class="pl-pds">'</span>../../i18n<span class="pl-pds">'</span></span>)</span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-59c3120e856841ee155fa43135949802R4" data-line-number="4" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+  , db <span class="pl-k">=</span> <span class="pl-c1">require</span>(<span class="pl-s"><span class="pl-pds">'</span>../../db<span class="pl-pds">'</span></span>);</span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-59c3120e856841ee155fa43135949802R5" data-line-number="5" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+</span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-59c3120e856841ee155fa43135949802R6" data-line-number="6" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+<span class="pl-c1">module</span>.<span class="pl-smi">exports</span> <span class="pl-k">=</span> <span class="pl-c1">require</span>(<span class="pl-s"><span class="pl-pds">'</span>eregistrations/model/document<span class="pl-pds">'</span></span>)(db).<span class="pl-en">extend</span>(<span class="pl-s"><span class="pl-pds">'</span>DrivingLicense<span class="pl-pds">'</span></span>, {}, {</span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-59c3120e856841ee155fa43135949802R7" data-line-number="7" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+	label<span class="pl-k">:</span> { value<span class="pl-k">:</span> <span class="pl-en">_</span>(<span class="pl-s"><span class="pl-pds">"</span>Driving license<span class="pl-pds">"</span></span>) },</span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-59c3120e856841ee155fa43135949802R8" data-line-number="8" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+	abbr<span class="pl-k">:</span> { value<span class="pl-k">:</span> <span class="pl-en">_</span>(<span class="pl-s"><span class="pl-pds">"</span>DL<span class="pl-pds">"</span></span>) }</span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-59c3120e856841ee155fa43135949802R9" data-line-number="9" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+});</span>

  </td>
</tr>



        </tbody></table>
      </div>
</div>

</div>