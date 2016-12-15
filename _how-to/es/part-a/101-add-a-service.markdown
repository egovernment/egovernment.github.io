---
layout: recipe
permalink: /como/anadir-nuevo-servicio/
title: 'Añadir un nuevo servicio'
category: '1. Part A'
sub-category: 'Servicio'
rate: '4'
number: '101'
introduction-text: 'Esta página explica los pasos necesarios para añadir un nuevo servicio a la aplicación. Aquí se explica como utilizar el generador de aplicación y los pasos necesarios para configurar un servicio. El contenido del servicio (inscripciones, costos, parte B) no está explicado aquí.'
introduction-img: '105.png'
prevUrl:
nextUrl: 102
done: 'yes'
lang: es
ref: 101
---

1. Ejecutar el generador incluido, brindando un nombre completo al nuevo servicio.(Separado por guión) `node node_modules/eregistrations/bin/generate-app business-process-<service-name>`.
2. Seguir todos los pasos necesarios para instalar la aplicación mencionada por el generador:
    1. Asegurar que la configuración de la app este añadida en la configuración de los controladores en: `server/processes/master/apps-post-controllers.js` y `server/processes/memory-db/apps-post-controllers.js`.
    2. Registrar servidor las rutas GET para la nueva aplicación en `server/apps/routers.js`.
    3. Registrar el almacenamiento para el nuevo servicio en `server/services/db/storage-names.js` y `server/business-process-storages.js`.
    4. Registrar el manejador de flujo de procesos de negocio para un nuevo servicio en `server/services/business-process-flow.js`.
    5. Añadir un nuevo servicio en la colección utils. Necesitas agregarlas a ambas listas util y enviar una. Crear `apps-common/business-processes/business-process-<service-name>` y `apps-common/business-processes/submitted/business-process-<service-name>`. No olvidar incluirlas en la comparación de archivos `index.js`.
    6. Asegurarse que el `model/business-process-<service-name>/index.js` es requerido en `server/model.js`.
    7. Asegurarse que el `model/business-process-<service-name>/index.js` es requerido en `apps/user/client/model.js`, `apps/business-process-submitted/client/model.js` y `model/statistics.js`; además, para cada app oficial que se fuera a procesar en el nuevo servicio en `apps/official-*/client/model.js`.
    8. Luego de que el modelo para el nuevo BusinessProcess esté completo, asegurarse de brindar los enlaces DOM necesarios (para secciones y propiedades (e.g. enum)) en `client/dbjs-dom.js` para los usuarios y aplicaciones oficiales.
    9. Agregar un nuevo servicio para el legacy model mock generator para configurar en `scripts/setup.js`.
    10. Configurar el modelo para el nuevo servicio en el directorio `model/business-process-<service-name>/`.
3. Agregar un botón de servicio en `view/user.js` y configurar el controlador para manejar su acción en `apps/user/controller/index.js`.

## Ejemplo

En la branch "[add-a-service](https://github.com/egovernment/eregistrations-demo/tree/add-a-service)" de eregistrations-demo :

Agregar un nuevo servicio llamado “Other":

### Solución

[Ver aquí](https://github.com/egovernment/eregistrations-demo/compare/add-a-service...add-a-service-solution#files).

