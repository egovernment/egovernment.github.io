---
layout: doc-pages
permalink: /instalacion/desarrollo/
title: 'Para desarrollo'
category: 'installation'
weight: 1
lang: es
ref: development
---

# Instalación del sistema para plataforma de desarrollo

_eRegistrations_ puede ser instalado por unos pasos en cualquier sistema operativo (MacOS/OSX, Windows, Linux):

## 1. Instalar Node.js

Ir a la dirección [https://nodejs.org/en/](https://nodejs.org/dist/latest-v4.x/) e instalar la versión __v4__ de Node.js.

__Nota para los usuarios de Linux:__  
Si su sistema operativo es Linux y que prefiere trabajar con el canal de distribución de paquetes: __Ensegura que su versión de Node.js es la v4 y que la versión de npm que viene con este corresponde a la que es específica a esta versión de Node.js__.  
La correspondencia entre las versiones de npm y de Node.js puede ser encontrada el las [referencias Node.js](https://nodejs.org/en/download/releases/).

## 2. Clonear el archivo del sistema eRegistrations deseado

Para este paso se necesita tener [Git](https://git-scm.com/) o [Github Desktop](https://desktop.github.com/) instalado. Luego contacte un miembro del equipo eRegistrations para que linkea su identificante Github al archivo esperado, y podrá clonear el sistema eRegistrations esperado.

## 3. Instalar el programa de generación de PDF

Abrir el terminal:

__Nota para los usuarios de Windows:__  
En Windows, para cualquier aplicación que siga, debe utilizar la linea de comando descrita a continuación:

<img src="/img/windows-terminal.jpg" />

---

Con esta ventana abierta, debe navegar hacia la carpeta __raíz__ del archivo cloneado y lanzar la línea de comando siguiente:

```
npm rebuild phantomjs
```

Eso asegura que el programa [PhantomJS](http://phantomjs.org/) necesario para su sistema eRegistrations esta bien instalado y funciona como esperado. Este programa se requiere para que los archivos en formato PDF puedan ser generados correctamente.

## 4. (Paso opcional) Configurar un puerto HTTP específico

Si trate de lanzar mas que un sistema eRegistrations a la vez en su computadora, necesita especificar los distintos puertos HTTP que se utilizarán, para evitar conflictos. Si no quiere hacer eso, puede ignorar este paso - su aplicación será lanzada automáticamente en el puerto 3177.

Crea un archivo `env.js` (configuración del entorno específico del sistema) en la carpeta raíz del proyecto. El contenido del archivo debe ser:

```javascript
'use strict';

module.exports = require('mano').env = {
	// Mark as "development" environment
	dev: true,

	// HTTP server port
	// Must be unique per system
	port: 3177,
};
```

Para cualquier otra configuración eventual del `env.js` puede consultar el tutorial [Configuración del entorno del sistema](/instalacion/entorno-configuracion/).

## 5. (Paso opcional) Instalar el programe de procesamiento de imagenes

Puede ignorar este paso si accepta de no ver las miniaturas de los archivos PDF que ha cargado como documentos en la Parte A.

Si quiere ver las miniaturas, puede consultar el tutorial sobre el [Proceso de imagenes](/instalación/proceso-de-imagenes/) para procesar la instalación necesaria.

## 6. (Paso opcional) Configuración específica de la base de datos

Por defecto la base de datos es salvada en archivos de texto en la carpeta `data-local`. El formato de estos archivos es muy práctico para el desarrollo: los datos pueden ser modificados manualmente y rapidamente para los tests.

Si por cualquier razón prefiere que los datos sean salvados en un sistema de base de datos (por ejemplo MongoDB, MSSQL etc), consulte el tutorial de [Configuración de la base de datos](/instalacion/base-de-datos/).

## 7. Crear la cuenta de "Administrador" del sistema

Este paso corresponde a la creación de la cuenta de administración, por la cual podrá crear cualquier tipo de usuario. Para hacer eso, debe lanzar la línea de comando siguiente desde la carpeta raíz de eRegistrations:

```
npm run create-users-admin
```

Luego se le pedirá un __correo electrónico__ y __contraseña__ para la cuenta (estos serán las credenciales con los cuales se conectarán a la cuenta de administrador).  
_**Nota**: El programa no se cierra solo después de haber entrado la contraseña, hay que forzar su cierre después de algunos segundos._

## 8. Lanzar el sistema

Utilize la línea de comando siguiente en la carpeta raíz del proyecto:

```
npm start
```

Cuando aparece el mensaje mencionando que el servidor HTTP ha arrancado (se ve como `start-service http server [3177]`), puede abrir su navegador y conectarse al sistema por la url [http://localhost:3177/](http://localhost:3177/) (salvo que haya configurado un otro puerto en el paso __4__).