---
layout: recipe
permalink: /como/definir-un-nuevo-campo/
title: 'Definir un nuevo campo'
category: '1. Part A'
sub-category: 'Determinantes'
rate: '2'
number: '121'
introduction-text: 'Esta ficha trata de añadir un nuevo campo en el modelo de datos. Por favor note que añadir un campo al modelo no es suficiente para hacerlo aparecer en cualquier lugar del sistema.'
introduction-img: '106.png'
prevUrl: 113
nextUrl: 121
done: ''
lang: es
ref: 121
---

Todos los campos del modelo de base de datos son partes de un servicio. Por lo cuál, antes de añadir un campo, necesitamos saber para que servicio el campo va a ser configurado.

Todos los campos del modelos son configurados por el motor de [dbjs](https://github.com/medikoo/dbjs). Por favor lee la [documentación dedicada a dbjs](https://github.com/medikoo/dbjs/blob/master/README.md) antes de modificar el modelo. Una parte particularmente importante es sobre [los tipos básicos](https://github.com/medikoo/dbjs/blob/master/README.md#basic-types).

Dbjs está instalado para todos los sistemas eregistrations, no hace falta instalarlo otra véz.

1. Abrir el archivo `model/<your-service>/fields.js`.

Esto es donde la mayoría de las definiciones del modelo son creadas. Una definición típica sería algo como:

```javascript
BusinessProcessDemo.prototype.defineProperties({
    isLocalCapital: {
        type: db.Boolean,
        label: _("Is the capital local or foreign?"),
        inputHint: _("Choose 'yes' for local")
    }
});
```

Donde `db` el la base de datos de dbsj.

Para referenciar `db` en el proyecto, solo hace falta `<project-root>/db.js` en la raíz del proyecto. Entonces desde `model/<your-service>/fields.js` puede hacer:

```javascript
var db = require('../../db');
```

Cuando se añade un nuevo campo, hay que saber a que objeto aplica el campo. El caso más básico es cuando se quiere añadir un campo a un servicio (business process). En este caso tenemos el snipplet anterior (nota que el campo `isLocalCapital` esta definido en `prototype` y NO en el constructor).

En nuestro ejemplo el campo creado es de tipo `db.Boolean`. Si ha leído esta ficha con atención ya sabe que `db.Boolean` es un tipo de campo genérico de dbjs (si no lo sabe, por favor lea sobre [los tipos básicos de dbjs](https://github.com/medikoo/dbjs/blob/master/README.md#basic-types)).

Para todas las aplicaciones eRegistrations, `db.Boolean` está accessible. De la misma forma, para todos los tipos de campos genéricos dbjs, solo hace falta verificar que el objeto dbjs está activado (`db` en nuestro ejemplo) y poner `type: db.<TypeForNewField>` en la definición del campo.

Muchas veces se va a necesitar un formato de campo más específico que los tipos genéricos de dbjs. Estos tipos están definidos en el módulo [`dbjs-ext`](https://github.com/medikoo/dbjs-ext), en el módulo [`eregistrations`](https://github.com/egovernment/eregistrations), o en el modelo de su proyecto.

Un buen ejemplo de un tipo de campo que no es genérico pero utilizado en varias ocasiones es `dbjs-ext/string/string-line`. [Check StringLine definition](https://github.com/medikoo/dbjs-ext/blob/master/string/string-line.js) - este tipo representa a un campo de texto que no contiene el caracter de nueva linea.

Así se configura un tipo de campo `dbjs-ext`:

```javascript
var StringLine = require('dbjs-ext/string/string-line')(db);
```

Aquí, otra vez, `db` es un objeto dbjs. Dos cosas importantes a notar aquí son:

1. Se necesita para un objecto db al módulo esperado.
2. Debe (por convención) llamar su variable local como la versión PascalCased del nombre del módulo (e.g. `StringLine` for `string-line`).


### Tipos de campos comunes en `dbjs-ext`

* [`dbjs-ext/string/string-line`](https://github.com/medikoo/dbjs-ext/blob/master/string/string-line.js) - una string sin caracter de nueva línea.
* [`dbjs-ext/number/integer/u-integer`](https://github.com/medikoo/dbjs-ext/blob/master/number/integer/u-integer.js) - Un número que no puede ser negativo [0, infinito].
* [`dbjs-ext/date-time/date`](https://github.com/medikoo/dbjs-ext/blob/master/date-time/date.js) - Una representación dbjs de una fecha (cuando se utiliza este tipo, debe nombre su variable local `DateType`).
* [`dbjs-ext/string/string-line/email`](https://github.com/medikoo/dbjs-ext/blob/master/string/string-line/email.js) - Una dirección email.
* [`dbjs-ext/number/currency/us-dollar`](https://github.com/medikoo/dbjs-ext/blob/master/number/currency/us-dollar.js) - Representación de la moneda en US$ (eso es una extensión de la clase genérica de moneda).
* [`dbjs-ext/number/percentage`](https://github.com/medikoo/dbjs-ext/blob/master/number/percentage.js) - Un percentage (expresado como un número en un rango [0, 1] donde 0 significa 0% y 1 significa 100%).

Para la visión global del tema [ver el documento README sobre dbjs-ext](https://github.com/medikoo/dbjs-ext/blob/master/README.md).

### Tipos de campos comunes en `eregistrations`

Como mencionado anteriormente, puede querer utilizar tipos que son específicos a [`eregistrations`](https://github.com/egovernment/eregistrations).

* [`eregistrations/model/person`](https://github.com/egovernment/eregistrations/blob/master/model/person.js) - represneta una persona. La clase `User` es una extensión de este tipo de campo. Muchas veces eso está utilizado para individuos asociados con un servicio (socios, representantes, auditores).
* [`eregistrations/model/lib/progress-rule`](https://github.com/egovernment/eregistrations/blob/master/model/lib/progress-rule.js) - Eso esta utilizado para la validación de las secciones.
* [`eregistrations/model/document`](https://github.com/egovernment/eregistrations/blob/master/model/document.js) - Clase de base de los documentos configurados en el sistema.
* [`eregistrations/model/cost`](https://github.com/egovernment/eregistrations/blob/master/model/cost.js) - Clase de base de los costos configurados en el sistema.
* [`eregistrations/model/institution`](https://github.com/egovernment/eregistrations/blob/master/model/institution.js) - Clase de base de las instituciones configuradas en el sistema.
* [`eregistrations/model/file`](https://github.com/egovernment/eregistrations/blob/master/model/file.js) - representa un archivo.

### Tipos de campos específicos a cada sistema

Finalmente hay un grupo de tipos de campos que son usualmente definidos al nivel del sistema específico.

* `<project-root>model/lib/country`               - Un conjunto de países (Por ejemplo utilizado para seleccionar un país dentro de la lista de países).
* `<project-root>model/lib/gender`                - Un conjunto de valores determinando el género de una persona.
* `<project-root>model/lib/town`                  - Un conjunto de ciudades (utilizadas por ejemplo para crear un selector de ciudades).
* `<project-root>model/lib/<your-country>address` - Este objeto contiene propiedades que forzan la estructura de una dirección en su país.

El tipo de campo utilizado es la propiedad más importante ya que va a determinar casí todo el comportamiento del campo.

Las otras propiedades que van a encontrar para un campo són:

* `inputHint`  (`String`)  - Texto que aparece abajo del campo y proporciona información adicional para que el usuario pueda llenar el formulario.
* `label`      (`String`)  - Define el label utilizado para el campo.
* `nested`     (`Boolean`) - Determina si la propiedad es un objecto "anidado" (`nested: true`). Propiedades anidadas no están pensadas para ser despliegadas en el formulario, sino que són una agrupación de otras propiedades (abajo un solo nombre). Un buen ejemplo de este concepto es la propiedad`address`.
* `multiple`   (`Boolean`) - Poner eso en `true` cuando se trata de una colección dentro de cual se puede añadir uno o varios elementos (nota: el `type` del campo refiere a un solo item, no el tipo de la colección entera - las colecciones son [sets](https://github.com/medikoo/es6-set) extensos
* `required`   (`Boolean`) - Determina si un campo debe ser llenado antes de la salva de la sección (`true` cuando el campo no puede ser vacío).
* `trueLabel`  (`String`)  - Eso tiene sentido solamente cuando el `type` del campo es `db.Boolean`. El valor de esta propiedad será asociada con un input representado por el valor `true` del campo.
* `falseLabel` (`String`)  - Eso tiene sentido solamente cuando el `type` del campo es `db.Boolean`. El valor de esta propiedad será asociada con un input representado por el valor `false` del campo.
* `value`                  - Valor por defecto del campo, por ejemplo `5` (para un campo de tipo `db.Number`).

## Ejemplo

En la branch "[define-a-new-field](https://github.com/egovernment/eregistrations-demo/tree/define-a-new-field)" de eregistrations-demo :

Añadir un nuevo campo `isLocalCapital` (de tipo: `db.Boolean`, label:  *"Is the capital local or foreign?"*, inputHint: *"Choose 'yes' for local"*) en el servicio Business Process Demo.

### Solución

<div id="files" class="diff-view " onclick="window.open('https://github.com/egovernment/eregistrations-demo/compare/define-a-new-field...define-a-new-field-solution#files')">


<a name="diff-ff865e3a54b66a1c0895c04cc66fa0d4"></a>
<div id="diff-0" class="file js-details-container




             show-inline-notes
           ">
  <div class="file-header" data-path="model/business-process-demo/fields.js">
    <div class="file-actions">
        <span class="show-file-notes">
          <label>
            <input type="checkbox" checked="checked" class="js-toggle-file-notes">
            Show notes
          </label>
        </span>

          <a href="/egovernment/eregistrations-demo/blob/ea85fb535beb1cbd8662b6f05c5381d07eb47ad2/model/business-process-demo/fields.js" class="btn btn-sm tooltipped tooltipped-nw" rel="nofollow" aria-label="View the whole file at version ea85fb5 ">View</a>


    </div>
    <div class="file-info">
        <span class="diffstat tooltipped tooltipped-e" aria-label="5 additions &amp; 0 deletions">5 <span class="block-diff-added"></span><span class="block-diff-added"></span><span class="block-diff-added"></span><span class="block-diff-added"></span><span class="block-diff-added"></span></span>

      <span class="user-select-contain" title="model/business-process-demo/fields.js">
        model/business-process-demo/fields.js
      </span>

    </div>
  </div>

      <div class="data highlight blob-wrapper">
        <table class="diff-table tab-size  " data-tab-size="8">

      <tbody><tr class="js-expandable-line" data-position="0">
    <td class="blob-num blob-num-expandable" colspan="2">
      <a href="#diff-ff865e3a54b66a1c0895c04cc66fa0d4" class="diff-expander js-expand" title="Expand" aria-label="Expand" data-url="/egovernment/eregistrations-demo/blob_excerpt/315b4df969b251e28cae10fa81bcb97818b19488?diff=unified&amp;in_wiki_context=&amp;left_hunk_size=5&amp;mode=100644&amp;next_line_num_left=31&amp;next_line_num_right=31&amp;path=model%2Fbusiness-process-demo%2Ffields.js&amp;prev_line_num_left=&amp;prev_line_num_right=&amp;right_hunk_size=10" data-left-range="1-30" data-right-range="1-30">
        <svg aria-hidden="true" class="octicon octicon-unfold" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path d="M11.5 7.5L14 10c0 .55-.45 1-1 1H9v-1h3.5l-2-2h-7l-2 2H5v1H1c-.55 0-1-.45-1-1l2.5-2.5L0 5c0-.55.45-1 1-1h4v1H1.5l2 2h7l2-2H9V4h4c.55 0 1 .45 1 1l-2.5 2.5zM6 6h2V3h2L7 0 4 3h2v3zm2 3H6v3H4l3 3 3-3H8V9z"></path></svg>
      </a>
    </td>
    <td class="blob-code blob-code-inner blob-code-hunk">@@ -31,5 +31,10 @@ BusinessProcessDemo.prototype.defineProperties({</td>
  </tr>

    <tr>
    <td id="diff-ff865e3a54b66a1c0895c04cc66fa0d4L31" data-line-number="31" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-ff865e3a54b66a1c0895c04cc66fa0d4R31" data-line-number="31" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner"> 	attorney<span class="pl-k">:</span> {</span>

  </td>
</tr>


    <tr>
    <td id="diff-ff865e3a54b66a1c0895c04cc66fa0d4L32" data-line-number="32" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-ff865e3a54b66a1c0895c04cc66fa0d4R32" data-line-number="32" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner"> 		type<span class="pl-k">:</span> <span class="pl-smi">db</span>.<span class="pl-smi">Person</span>,</span>

  </td>
</tr>


    <tr>
    <td id="diff-ff865e3a54b66a1c0895c04cc66fa0d4L33" data-line-number="33" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-ff865e3a54b66a1c0895c04cc66fa0d4R33" data-line-number="33" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner"> 		nested<span class="pl-k">:</span> <span class="pl-c1">true</span></span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-ff865e3a54b66a1c0895c04cc66fa0d4R34" data-line-number="34" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+	},</span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-ff865e3a54b66a1c0895c04cc66fa0d4R35" data-line-number="35" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+	isLocalCapital<span class="pl-k">:</span> {</span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-ff865e3a54b66a1c0895c04cc66fa0d4R36" data-line-number="36" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+		type<span class="pl-k">:</span> <span class="pl-smi">db</span>.<span class="pl-smi">Boolean</span>,</span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-ff865e3a54b66a1c0895c04cc66fa0d4R37" data-line-number="37" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+		label<span class="pl-k">:</span> <span class="pl-en">_</span>(<span class="pl-s"><span class="pl-pds">"</span>Is the capital local or foreign?<span class="pl-pds">"</span></span>),</span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-ff865e3a54b66a1c0895c04cc66fa0d4R38" data-line-number="38" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+		inputHint<span class="pl-k">:</span> <span class="pl-en">_</span>(<span class="pl-s"><span class="pl-pds">"</span>Choose 'yes' for local<span class="pl-pds">"</span></span>)</span>

  </td>
</tr>


    <tr>
    <td id="diff-ff865e3a54b66a1c0895c04cc66fa0d4L34" data-line-number="34" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-ff865e3a54b66a1c0895c04cc66fa0d4R39" data-line-number="39" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner"> 	}</span>

  </td>
</tr>


    <tr>
    <td id="diff-ff865e3a54b66a1c0895c04cc66fa0d4L35" data-line-number="35" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-ff865e3a54b66a1c0895c04cc66fa0d4R40" data-line-number="40" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner"> });</span>

  </td>
</tr>


        </tbody></table>
      </div>
</div>

</div>
