---
layout: doc-pages
permalink: /installation/production
title: 'For Production'
category: 'installation'
weight: 3
lang: en
ref: production
---

# Installation on Production Server

_eRegistrations_ can be installed on any popular operating system (MacOS/OSX, Windows, Linux), but as we mentioned in [server requirements](/installation/server) document, we're capable to provide setup support only for latest verions of Ubuntu and Arch Linux distributions.
If you intend to install system on other architecture you need to ensure in your own capacity an experienced system administrator for pursuing setup on given type of a system.

## 1. Install Node.js

You can either download precompiled binary from [https://nodejs.org/en/](https://nodejs.org/en/) or compile and install Node.js from source code. Please __ensure to use latest v4 version of Node.js__.

Additionally __ensure that npm version you end with is the one that originally comes with version of Node.js that was installed__. Which version of npm maps to which Node.js version, can be found in [Node.js Releases](https://nodejs.org/en/download/releases/) reference.

If you install Node.js using regular binaries or froum source, you'll naturally end up with right match. However if you decide to rely on some other packages distribution chanel, mind that some Linux systems tend to install Node.js and npm individually as independent projects, with not adequate version mappings, and that may introduce issues (e.g. application will not install properly if you decide to rely on npm v3).

## 2. Clone eRegistrations system repository

Ensuring that you have [Git](https://git-scm.com/) software installed, clone eRegistrations system you wish to work on into path where you want

## 3. Precompile project dependencies

Few packages that we use are written in C++ and need to be compiled.

To be able to do it, all dependencies mentioned at [node-gyp](https://github.com/TooTallNate/node-gyp#installation) ("You will also need to install" section) and at [node.bcrypt.js](https://github.com/kelektiv/node.bcrypt.js#dependencies) need to be installed on a server.

After all needed software is installed and application repository is downloaded, compile packages with following command (needs to be run in application path:

```
npm rebuild
```

It's important to repeat that step after eventual major upgrade of Node.js (e.g. from v4 to v6, when application will be updated to support v6).

## 4. Configure environment settings

See [environment configuration](/installation/environment-configuration) for information on how to configure each settings.

Settings that should be configured on production server:

- __HTTP port__ on which node.js server is expected to be run. It is advised to additionally rely on dedicated HTTP server proxy (e.g. [nGinx](installation/nginx)), which should be additionally configured to stop possibly malicious (e.g. too large, or repetive in short periods of time) requests. Mind that application server itself is not equipped with any security layer towards that, it's expected that such layer is provided between Node.js server and User end.
- __URL__ of application, it's very important for email notifications, and proper resolution of cookies (if this setting is wrong, application will not work correctly in a browser)
- __SMTP server settings__. Emails won't be send if that's not provided
- __Database configuration__. It's recommended to use some popular engine. Please refer to [Database enging configuration](/installation/database-engine) document for more details

## 5. Install image processing software

Please refer to [Image processing software](/installation/enviroment) on information which software needs to be installed


## 6. Create "Users Administrator" account

It's about administration account, through which you'll be able to create any kind of user. From application scope such account can only be created from scope of other _User Administrator_ account, so first one needs to be created using shell script as follows:

Run following command in terminal in root folder of your project:

```
npm run create-users-admin
```

Then when asked input an __email__ and __pasword__ of the account (those will be credentials with which you'll be able to login as user adminstrator). As through this account you will be able to tweak details of all user accounts, it's important that both email and password are chosen wisely, and not disclosed to anyone not authorized to handle that data.

_**Note**: Program tends to not close after account is generated, it's totally safe to force stop of it, after few seconds_

## 7. Setup application files

Some files needs to be generated before system is started, or after applicaton update.

```
npm run setup
```

__It's important to note, that step needs to be done after each application update__.

## 8. Initialize system process

To mantain uninterrupted server run it's strongly recommended to rely process manager that will ensure automatic system restart after eventual crash. We recommend using [PM2](http://pm2.keymetrics.io/) for that purpose.

Server process can be run directly via:

```
bin/start
```

(indirectly same can be achieved via `npm start`)
