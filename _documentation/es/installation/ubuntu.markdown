---
layout: doc-pages
permalink: /instalacion/ubuntu
title: 'eRegistrations - Instalación en Linux (Ubuntu)'
lang: es
ref: ubuntu
---

# Installation of eRegistrations system - Linux (Ubuntu)

This guide will detail all the steps needed to get a working version of eRegistrations system on [Ubuntu Linux](www.ubuntu.com/) operating system.

**Supported Ubuntu versions:**

Both Desktop and Server installations of the following versions can be used for eRegistrations system:

* Ubuntu 14.04 LTS (Trusty Tahr)
* Ubuntu 15.10 (Wily Werewolf)
* Ubuntu 16.04 LTS (Xenial Xerus)

**User account:**

It's assumed that normal user account (not `root`) is used to perform all the installation steps. For command that needs to be run as `root`, `sudo` is used to execute the command as the superuser.

## Installation of required software

**Note:** In this guide, commands to be executed starts with `$` sign, eg: `$ echo 'foo'`. Do not enter the leading dollar sign into the command line while running the commands.

### Update the package database and the system

In order to process with dependencies installation package database must be updated. Additionally, all the released security and stability patches should be installed.

```console
# Update the package database
$ sudo apt-get update
# Install the security patches
$ sudo apt-get upgrade
```

### Version control system

[Git](https://git-scm.com/), that is needed to checkout (download) each project repository, can be installed on Ubuntu using `apt` tool:

```console
$ sudo apt-get install git
```

After the installation succeeds, we need to set it up:

```console
# Set the name that is going to be used to author the commits
$ git config --global user.name "Your Name"
# Set the email that is going to be associated with the commits
$ git config --global user.email "youremail@example.com"
```

That should be sufficient to have a working git instance, for further reference, visit [documentation on Git's website](https://git-scm.com/doc).

### Node.js and NPM

The easiest way to install both [Node.js](http://nodejs.org/) runtime environment and [NPM](https://www.npmjs.com/) package manager is to use the [NodeSource](https://nodesource.com/) Debian and Ubuntu binary distributions repository.

```console
$ curl -sL https://deb.nodesource.com/setup_4.x | sudo -E bash -
$ sudo apt-get install -y nodejs
```

### Image processing utilities

The system uses [GraphicsMagick](http://www.graphicsmagick.org/) and [GhostScript](http://www.ghostscript.com/) libraries to handle image processing. They are both needed to start any eregistrations application, so they have to be installed.

```console
$ sudo apt-get install ghostscript graphicsmagick
```

### Live installation consolecast

The video below shows all the steps from `Installation of required software` section performed in live Ubuntu Server 16.04 installation:

<script type="text/javascript" src="https://asciinema.org/a/6rhohyhwfb9qqvysy0whq4gti.js" id="asciicast-6rhohyhwfb9qqvysy0whq4gti" async></script>

## Setup of eRegistrations system

### Clone the repository

In the user home directory, type the following (change repository address if needed):

```console
$ git clone git@github.com:egovernment/eregistrations-demo.git
```

This will download the source code of eRegistrations system (`eregistrations-demo` in this example) to the `eregistrations-demo` directory.

`cd` into that directory (adjust the path if needed):

```console
$ cd eregistrations-demo
```

### Compile packages

Few packages needs compilation, running below ensures that

```console
$ npm rebuild
```

### Create environment configuration

Create `env.js` file in the root directory of application, with editor of your choice, and insert as follows:

```javascript
'use strict';

module.exports = require('mano').env = {
	// Development or production environment
	// If true then client JS and CSS bundles are refreshed at each request
	// (no server restarts are needed to see changes in client specific code)
	// Additionally note:
	// - Any model changes require full server restarts to be propagated
	// - Any changes to server side script require restarts of server process
	//   (can be done via faster `npm run quick-start)
	dev: true,

	// HTTP server port
	// Must not be taken by any other app in your environment
	port: 3177,

	// URL at which application would be served
	// Information used e.g. for email notifications, but also for cookies resolution
	// It must be accurate, for application to work properly
	url: 'http://localhost/',

	// Legacy pool functionality
	// It's about server-side HTML rendering for legacy browsers. Leave it to 'true'
	legacyPool: true,

	// Secret string
	// Random string (as typed by your cat).
	// Used to maintain authentication sessions between server restarts
	secret: 'asdfq3132142adsfasdfa3',

	// SMTP settings
	// Set `logOnly: true`, if you do not wish to send real emails but prefer to see
	// them just in server log
	smtp: {
		host: 'localhost',
		from: 'eRegistrations Demo <eregistrations@eregistrations.org>',
		logOnly: true
	}
};
```

### Create administrator account

To be able to additionally access site administrator functionality, `users admin` account needs to be created. To do so run following command and follow instructions:

```console
$ npm run create-users-admin
```

While logged in as users admin, you can create accounts of institution workers, which can review and process files.

User administrators and institution workers log in into application using same login form as regular users.

### Start eRegistrations node.js server

While in the eRegistrations system root directory, type the following:

```console
$ npm start
```

After few seconds, the application will be accessible at http://localhost:3177/ (or any other port as set in `env.js`). For server setups, it will be available from public server address as well.
