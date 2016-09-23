---
layout: recipe
permalink: /como/cambiar-el-nombre-de-un-registro/
title: 'Cambiar el nombre y label de un registro'
category: '1. Part A'
sub-category: 'Registro'
rate: '1'
number: '112'
introduction-text: 'El nombre de un registro aparece en la guía, en el correo electrónico que se envía a los usuarios, en el historial del archivo... El cambio de nombre ocurrirá en todos esos lugares.<br>Se recomienda nombrar el registro de la forma "Nombre-del-certificado en Institución-a-cargo".'
introduction-img: '111.png'
prevUrl: 111
nextUrl: 113
done: 'yes'
lang: es
ref: 112
---

El nombre de un registro es por defecto heredado del documento que le corresponde. Se debe determinar si se quiere cambiar el nombre del documento o solo el nombre del registro.

En esta ocasión el enfoque será en el escenario donde queremos cambiar solo el nombre del registro, no del documento.

Cada registro está asociado a un servicio. Por lo que, primero hay que determinar el servicio en el que el registro ocurre. Asuma que el nombre de la clase del modelo del servicio es `BusinessProcessMyService` y el nombre de registro `myRegistration`.

Los registros pueden encontrarse juntos en el archivo `model/business-process-my-service/registrations.js`, o en archivos separados en el directorio `model/business-process-my-service/registrations` (el nombre del archivo debe ser la versión con guiones del nombre del registro (en el ejemplo `my-registration.js`)).

1. Dependiendo del caso, ir a: `model/business-process-my-service/registrations.js`, o a `model/business-process-my-service/registrations/my-registration.js`.

2. Colocar el valor de la propiedad `label` de `myRegistration` al nombre que se desea tenga el registro.

Si se desea cambiar el nombre corto del servicio, entonces se deben seguir los pasos anteriores, pero en lugar de `label`, editar la propiedad `shortLabel`.

# Exercise

Change the name of the `certificateOfIncentives` registration to *"Certificate of incentives (business facilitation program)"*.

Start with:

`git checkout change-the-name-of-the-registration`

[Solution](https://github.com/egovernment/eregistrations-demo/compare/change-the-name-of-the-registration...change-the-name-of-the-registration-solution)


