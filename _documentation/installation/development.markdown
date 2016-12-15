---
layout: doc-pages
permalink: /installation/development/
title: 'For Development'
category: 'installation'
weight: 1
lang: en
ref: development
---

# Installation For Develpoment Purpose

_eRegistrations_ can be installed with few simple steps on any popular operating system (MacOS/OSX, Windows, Linux):

## 1. Install Node.js

Go to [https://nodejs.org/en/](https://nodejs.org/dist/latest-v4.x/) and install __v4__ version of Node.js software.

__Note for Linux users:__  
If you're on linux and prefer to rely on system dedicated packages distrubution channel: __Ensure that you end with v4 version of  Node.js, and that npm version that comes with it, is one that originally comes with this specific version of Node.js__.  
Which version of npm maps to which Node.js version, can be found in [Node.js Releases](https://nodejs.org/en/download/releases/) reference. Some Linux systems tend to install Node.js and npm individually as independent projects, with not adequate version mappings, and that may introduce to issues (e.g. application may not install properly if you decide to rely on npm v3).

## 2. Clone eRegistrations system repository

Ensuring that you have [Git](https://git-scm.com/) or [Github Desktop](https://desktop.github.com/) software installed, clone eRegistrations system you wish to work on into folder of your choice.

For example, the git repository is located at [eRegistrations Demo](https://github.com/egovernment/eregistrations-demo) url. In order to clone/download it, you must first make sure you have access to it. 

Click the green button on top right "Clone/Download" and choose the replication method that suits you best.

For cloning, copy the url given by the button then type "git clone url" in your terminal in the path you wish to replicate the system.


## 3. Ensure PDF generation software

Open shell terminal/command prompt

__Note for Windows users:__  
On Windows for any application related commands ensure to use __Node.js command prompt__, as pictured below:

<img src="/img/windows-terminal.jpg" />

---

Having terminal window open, navigate to __root folder__ of cloned in step 2 project, and run following command:

```
npm rebuild phantomjs-prebuilt
```

It will ensure that [PhantomJS](http://phantomjs.org/) software for your eRegistrations system is installed and linked as expected. This software is mandatory for PDF generation to work correctly

## 4. (Optional) Configure specific HTTP port

If you intend to run more than one eRegistrations system instance at once on your computer, you need to specify distinct HTTP ports for each, so they do not collide. Otherwise you may skip this step (as automatically your application will be deployed at 3177 port).

Create `env.js` file (system specific environment configuration) in root folder of a project. File content should be as:

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

For other eventual `env.js` settings you may check [Environment Configuration](/installation/enviroment) documentation.

## 5. (Optional) Install image processing software

You can skip this step if you're fine with thumbnails not being generated for eventual PDF files that you may upload as documents.
System will work totally fine with it, the only downside will be that you'll see blank squares instead of thumbs when seing those files in a list.

If you'd rather have image processing correctly in place, please refer to [Image processing software](/installation/enviroment) on how to ensure such

## 6. (Optional) Specific database engine configuration

By default database data will be saved in plain text files in `data-local` folder. Format of those files is very convient for development as you can quickly investigate or manipulate state of a data manually if needed for testing needs.

Still if for some reason you prefer data to be saved into some specific popular database engine (e.g. MongoDB, MSSQL etc), please refer to [Database enging configuration](/installation/database-engine) document for more details.

## 7. Create "Users Administrator" account

It's about administration account, through which you'll be able to create any kind of user. From application scope such account can only be created from scope of other _User Administrator_ account, so first one needs to be created using shell script as follows:

Run following command in terminal in root folder of your project:

```
npm run create-users-admin
```

Then when asked input an __email__ and __pasword__ of the account (those will be credentials with which you'll be able to login as user adminstrator).  
_**Note**: Program tends to not close after account is generated, it's totally safe to force stop of it, after few seconds_

## 8. Run system

Run following command in terminal in root folder of your project:

```
npm start
```

When in output log message of HTTP server being started appears (it looks as `start-service http server [3177]`), you can open working system in browser window. If no other url or port settings where provided at point __4__, then application will be accessible at [http://localhost:3177/](http://localhost:3177/) address.
