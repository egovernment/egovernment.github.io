---	
layout: doc-pages	
permalink: /installation/enviroment-configuration/	
title: 'Environment Configuration File'						
category: 'installation'					
weight: 4	
lang: en	
ref: env	
---	 

# Environment Configuration File	

It's optional for development needs (assuming we're ok with the defaults), and mandatory for production enviroments.	

It's structure in all cases should be as follows:		

```javascript	 
'use strict';	 

module.exports = require('mano').env = {	
	// ... Custom configuration settings ...	
};	 
```	 

## Supported options	

### dev `boolean`			

States wether we deal with _development_  or _production_ enviroment.	

If `env.js` file is not provided it's assumed as `true`, otherwise the default is `false`.	

### port `number` (default: `3177`)		

HTTP server port under which application will be deployed by Node.js server.	

It doesn't necessary mean that at this port exactly application should be accessible to end user.	
As if some proxy HTTP server is used (as e.g. [nGinx](/installation/nginx), then access port may be different).	

### url `string` (default: `'http://localhost:3177/'`)												

URL at which application will be served to end user.												
It's used within email notifications to provide link to system, and more importantly in cookies	
resolution. For that reason referenced port is very important. If application would be server at url with different port than listed here, then it can't work properly	

### secret `string` (default: `'something random'`)		

Secret string used for authentication purposed. if that setting is not provided,	
then no session will be maintained between server restarts.			

### db `object`	

Database engine configuration. For more inforation see [Database Engine Configuration](/installation/database-engine) document.	
If not provided system defaults to use efficient plain text database which stores data in `data-local` folder.				


### smtp `object`			 

SMTP settings. For Email delivery we rely on [nodemailer](https://www.npmjs.com/package/nodemailer) package, and provided options are directly send to this module.	
Unless `logOnly: true` option is provided, in such case no email delivery occurs, just logs on "sent emails" are output in server console.			 

Defaults to:

```javascript		 
{								 
  host: 'localhost',	
  from: 'eRegistrations Demo <eregistrations@eregistrations.org>',
  logOnly: true
}
```
