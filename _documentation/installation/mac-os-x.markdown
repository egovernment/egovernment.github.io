---
layout: doc-pages
permalink: /installation/mac-os-x
title: 'eRegistrations - Installation on Mac OS X'
lang: en
ref: osx
---

# Installation of eRegistrations system - Mac OS X

This installation is set for the all the versions of OS X from 10.7 "Lion" included to the most recent. Installation on previous versions is not recommended.


## Needed software

In order to run the system on your local machine, the following software needs to be installed:

* __Node.js__ - [http://nodejs.org/](http://nodejs.org/) - v4 in it's **latest** recommended release.

### Image processing utilties:

On OSX we recommend to use [Homebrew](http://brew.sh/) to install below utilities:

* __GraphicsMagick__ - http://www.graphicsmagick.org/download.html
* __GhostScript__ - http://www.ghostscript.com/download/gsdnld.html __it needs to be in the same architecture version (32bit or 64bit) as GraphicsMagick__. GhostScript helps GraphicsMagick to generate thumbnails of PDF documents.

To do that, the following command must be run from the terminal:   

- `/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"` to install homebrew
- `brew install GraphicsMagick` to install GraphicsMagick
- `brew install GhostScript` to install GhostScript

## Download application code

eRegistrations system are hosted on Github under private folders, therefore a github account is needed to install and configure an eRegistrations system.

- Create your Github account [here](https://github.com/join).
- Contact the people in charge of eRegistrations to link your account to the expected folder(s) on [egovernment](https://github.com/egovernment).

It is recommended to use **Github desktop** software to easily configure the system and use all the github functionalities. It can be downloaded [here](https://desktop.github.com/).  

In Github desktop, you must : 

- connect to your Github account in the **Preferences** (click on <kbd><kbd>command</kbd> + <kbd>,</kbd></kbd>)
- clone the expected eregistrations folder, by doing *New Repository* -> *Clone* -> select the repository -> *Clone the repository*

This will copy a version of the eregistrations folder on your local machine. It might take up to 2 minutes.


## Project compilation

Few packages needs compilation. To do that, the following command must be run, with the Terminal and at the root of the cloned folder:

* `$ npm rebuild` 


## Environment configuration

What's left is environment configuration. Create a file called _env.js_ in the root of the cloned folder, and copy the following in the file:

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
	url: 'http://localhost:3177/',

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

### Database configuration

The eRegistrations system is built to work with any database. By default [plain text](https://github.com/medikoo/dbjs-persistence/tree/master/text-file) database driver is used, it's efficient enough for common eRegistrations setup and it doesn't require any specific configuration to be provided.

The following database engines have prepared dedicated dbjs drivers (engines not mentioned in a list can have a driver prepared on request in 1-3 days)

- [LevelDB](http://leveldb.org/) -> [dbjs-level](https://github.com/medikoo/dbjs-level)
- [MongoDB](https://www.mongodb.com) -> [dbjs-mongo](https://github.com/medikoo/dbjs-mongo)

If there's intention to use one of above engines, the database engine and dbjs driver need to be installed separately (installation instructions can be found in driver repository), and it's usage needs to be configured in  `env.js`, as g.:

```javascript
module.exports = require('mano').env = {
	...
  db: {
    driver: require('dbjs-level'), // Store data in LevelDB database
    // .. Driver configuration properties if needed ..
  }
	...
};
```

Do not forget to save _env.js_ before closing it.

## Setup administrator account

To be able to additionally access site administrator functionality, _users admin_ account needs to be created. To do so run following command and follow instructions:

* `$ npm run create-users-admin`

Suggestion for the credentials : _admin@eregistrations.org_ / _abc123_. Note that you need to manually quit after having set the password, by typing <kbd><kbd>command</kbd> + <kbd>c</kbd></kbd>.

While logged in as users admin, you can create accounts of institution workers, which can review and process files.

User administrators and institution workers log in into application using same login form as regular merchants.

## Deployment

Start server:

* `npm start` - starts the server

When <span class="text-purple">health:master</span> is displayed in the Terminal (after ~40 seconds), the application is running and can be accessed at [http://localhost:3177/](http://localhost:3177/) (or any other port as set in _env.js_).

