---
layout: doc-pages
permalink: /concepto/
title: 'eRegistrations concept'
lang: es
ref: concept
---

# El concepto “eRegistrations”

El sistema de eRegistrations es un software que permite el desarrollo rápido de aplicaciones de gobierno electrónico por cuales los usuarios del servicio público pueden solicitar el registro simultáneo en línea con varias agencias gubernamentales con un **formulario único**, un **solo conjunto de documentos** y un **pago único**.

- Usamos aquí la palabra "registro" en un sentido amplio; se refiere a cualquier aprobación o reconocimiento por parte de una entidad pública de una solicitud o declaración hecha por un usuario del servicio público. El resultado de un "registro" suele ser un número y/o un documento (llamado certificado, licencia, permiso, autorización, etc.)

- eRegistrations es el nombre del software/sistema sobre la base del cual se desarrollan aplicaciones específicas.

- Las **aplicaciones** resultantes pueden ser llamadas "ventanas individuales electrónicas" o, más correctamente, "servicios en línea". En este último caso, el mencionado "servicio" es en realidad un servicio conjunto otorgado por múltiples agencias que actúan como una sola.

<div class="row" style="margin-bottom:40px;">
	<div class="col-md-6">Los procedimientos administrativos son siempre, en esencia, un intercambio de información (datos y documentos) entre un usuario y una o varias administraciones, independientemente del contenido de los datos y de los documentos. Simplificar un proceso administrativo consiste en reducir al mínimo la cantidad de datos, de documentos y de pagos solicitados a los usuarios y de interacciones entre los usuarios y los organismos participantes. Idealmente, el usuario llena un formulario (corto), da un conjunto (limitado) de documentos y realiza un solo pago.</div>	
	<div class="col-md-4">
		<a class="btn btn-default" href="https://view.officeapps.live.com/op/embed.aspx?src=http%3A%2F%2Fbusinessfacilitation%2Eorg%3A80%2Fppt%2Fgood_OSS%2Eppt&wdAr=1.3333333333333333" target="_blank"><img class="img-responsive img-thumbnail" src="/img/concept-1.png" style="max-height:200px;"><p class="text-gray">Haz click aquí para ver el diaporama</p></a>
	</div>
</div>

<div class="row" style="margin-bottom:40px;">
	<div class="col-md-6">
		Los servicios/aplicaciones en línea desarrollados sobre la base de eRegistrations están hechas de las siguientes partes: 
		<ul>
			<li>parte A (front office o “creación del expediente”): creación y envio por parte del usuario del expediente de aplicación</li>
			<li>parte B (back office or “procesamiento del expediente”)</li>
			<li>base de datos del usuario: almacenamiento de los datos del usuario, contenido del expediente de inscripción y certificados emitidos por las agencias involucradas</li>
			<li>estadísticas, traducción y derechos de usuario</li>
		</ul>
		Ver también este documento "<a href="https://unctad.atlassian.net/wiki/display/BPA/Structure+of+eRegistrations-based+applications" target="_blank">Estructura de aplicaciones basadas en eRegistrations</a>".
	</div>
	<div class="col-md-4">
		<a class="btn btn-default" href="https://view.officeapps.live.com/op/view.aspx?src=http%3A%2F%2Fbusinessfacilitation.org%2Fppt%2FeRegistrations-Standard%2520structure.pptx" target="_blank"><img class="img-responsive img-thumbnail" src="/img/concept-2.png" style="max-height:200px;"><p class="text-gray">Haz click aquí para ver el diaporama</p></a>
	</div>
</div>

<div class="row" style="margin-bottom:40px;">
	<div class="col-md-6">
		La base de datos del usuario es una parte central de todas las aplicaciones eRegistrations y constituye una de las principales diferencias entre esas aplicaciones y las aplicaciones tradicionales de gobierno en línea, que se esfuerzan por crear interoperabilidad entre los sistemas / bases de datos de las agencias involucradas. Por el contrario, la filosofía de eRegistrations es crear una base de datos del usuario donde la información del usuario será compartida con las agencias gubernamentales y donde la información emitida por las agencias gubernamentales también se almacenará. La interoperabilidad entre agencias gubernamentales se obtiene a través de la base de datos de usuarios.
	</div>
	<div class="col-md-4">
		<a class="btn btn-default" href="https://view.officeapps.live.com/op/embed.aspx?src=http%3A%2F%2Fbusinessfacilitation%2Eorg%3A80%2Fvienna%2Fimages%2Fbasic-principles%2Epps&wdAr=1.3333333333333333" target="_blank"><img class="img-responsive img-thumbnail" src="/img/concept-3.png" style="max-height:200px;"><p class="text-gray">Haz click aquí para ver el diaporama</p></a>
	</div>
</div>

Las aplicaciones eRegistrations se desarrollan según la estructura estándar descrita anteriormente, independientemente de la cantidad de agencias involucradas y del tipo de registro o certificados que entregan. No importa si el servicio conjunto en línea es sobre la creación de empresas, permisos de construcción, licencias de negocios, registros sanitarios, operaciones de importación o exportación.

El propósito de la **parte A** de las solicitudes de eRegistrations es:

<ul>
	<li>determinar, para cada usuario, qué inscripciones son obligatorias y/o opcionales (A1); para los registros seleccionados (A2), cuáles son los datos, documentos y pagos que se deben proporcionar (A3)</li>

	<li>enerar un formulario y monitorear su relleno (A4), una lista de documentos requeridos y monitorear su carga (A5), indicar el monto total a pagar (A6)</li>

	<li>dar al usuario la oportunidad de revisar su solicitud, certificarla y enviarla (A7).</li>
</ul>

La **parte B** (back office) de las aplicaciones de eRegistrations organiza el flujo de información entre la base de datos de usuarios y las agencias involucradas. Esta parte brinda la información necesaria a cada agencia (datos, documentos e indicación de las cantidades pagadas) y devuelve los datos y documentos emitidos por las agencias.
 

Una otra función de la Parte B (deberíamos llamarla Parte C) es producir estadísticas:

<ul>
	<li>Análisis de las solicitudes: tipo y número de solicitudes, edad, sexo, nacionalidad, región, actividades, etc., cualquier dato pertinente sobre los usuarios</li>

	<li>Tiempo de procesamiento (por institución, por operador, etc.) - cuellos de botella, etc.</li>
</ul>

