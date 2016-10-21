---
layout: doc-pages
permalink: /installation/database-engine
title: 'Database Engine Configuration'
category: 'installation'
weight: 6
lang: en
ref: database-engine
---

# Database Engine Configuration

The eRegistrations system is built to work with any database. By default [plain text](https://github.com/medikoo/dbjs-persistence/tree/master/text-file) database driver is used, it's efficient enough for common eRegistrations setup and it doesn't require any specific configuration to be provided.

For production setup it's recommended to use one of the popular database engines together with prepared for dbjs driver for it.
The following database engines have prepared dedicated dbjs drivers (engines not mentioned in a list can have a driver prepared on request in 1-3 days)

- [LevelDB](http://leveldb.org/) -> [dbjs-level](https://github.com/medikoo/dbjs-level)
- [MongoDB](https://www.mongodb.com) -> [dbjs-mongo](https://github.com/medikoo/dbjs-mongo)
- [MSSQL](https://www.microsoft.com/en-us/sql-server/sql-server-2016) -> [dbjs-ms-sql](https://github.com/medikoo/dbjs-ms-sql)

If there's intention to use one of above engines, the database engine and dbjs driver need to be installed separately (installation instructions can be found in driver repository), and it's usage needs to be configured in  `env.js` [configuration file](/installation/environment-configuration), as g.:

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
