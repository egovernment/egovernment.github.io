---
layout: doc-pages
permalink: /development/debugging/
title: 'Debugging'
category: 'development'
lang: en
ref: debugging
weight: 4
---

# Debugging

## Client-side (Browser)

In browser you should refer to browser developer tools, you'll find them in every popular engine.

The most reliable and powerful tools can be found in Google Chrome browser, and this browser should be treat as first choice browser for development. The other browsers best if used only to test whether functionalities work as expected, and to debug issues that are engine specific.

## Server-side (Node.js)

Theoretically you can refer to any known means that help with debugging Node.js processes. You can also run applications in most recent (non v4) Node.js versions (_application should work with them without issues, the documented Node v4 restriction comes only from fact that it comes with npm v2, when further versions of npm, as shipped with Node.js v6 and v7, are not friendly towards our dependencies management_).

There's a [Debugger](https://nodejs.org/api/debugger.html) that comes with Node.js, but unfortunately it comes with limitation of working well only for singular Node.js processes.
It won't work if Node.js process forks other process, and it's actually the case with eRegistrations application. You can follow progress on that issue in [Node's bug tracker](https://github.com/nodejs/node/issues/9435).

### IPC channel debugging

As long as Node.js debugger is not a viable option, there are no natural straightforward means to inspect running processes. To address that, some time ago an IPC communication channel was configured.

Main reason for creation of that channel was to debug business process flow issues, when e.g. on a client side (in browser) we see that file resolves as completed at given step, but for some reason server process  doesn't react in same manner.

In such situations it is very likely there's some model inconsistency between two environments, and to coin the issue best way is to investigate the state of a file thoroughly in the server process.

As main use case for IPC debugging is resolving model issues it communicates with `memory-db` process and not `master` process.

#### How to use IPC debugging

1. Create a module (location of file is not relevant) and place in it code you'd like to run within `memory-db` process.
In module you have access to following variables:
- `require` (which imports modules in context of `node_modules/eregistrations/server/services` folder)
- `db` - Process local dbjs instance

2. In root of a project run:

```
$ bin/ipc-eval path/to/your/module
```

After that you may investigate any outcome of your debug script in log of running application.

#### Usage example

Let's check whether business process of id `8r9m15pi1nr` resolves as complete at Part A.

Firstly we need to ensure that indeed the business process object is loaded into `memory-db` process.
_The business process is only loaded if during the run of the server process there were any changes made on this object_. If you're sure that's not the case (e.g. server was just restarted), then you may invoke a change from browser which will force the object to be loaded. (for that you can do e.g.  `businessProcess.set('test', true)` in browser console).

Having ensured that business process is loaded into process, we can prepare our inspection module, which in simple form may look as:

```javascript
'use strict';

var bp = db.BusinessProcess.getById('8r9m15pi1nr');

console.log("Is complete at Part A:", bp.isSubmittedReady);
```

After running above with `bin/ipc-eval` we'll see the `console.log` outcome in log of a process.

If the outcome is that `isSubmittedReady` resolves to unexpected value, usually you'd want to dig deeper and want to track the issue to it's source.

Theoretically you can find in codebase the code of the responsible getters and that way check how its value is computed, but most reliable and no error prone way is to check logic of a getter directly in a process, it's the only way we can be 100% sure of the logic behind, as it will also expose any system specific customizations which we may not be aware of.

To check internal logic of `isSubmittedReady` getter we need to refer to some internal dbjs properties, as:

```
console.log(String(bp.getDescriptor('isSubmittedReady')._value_));
```

e.g. the outcome for isSubmittedReady will most likely be as:

```
"function (_observe) {
			// 0. Guide
			if (this.guideProgress !== 1) return false;
			// 1. Forms
			if (_observe(this.dataForms._progress) !== 1) return false;
			// 2. Uploads
			if (_observe(this.requirementUploads._progress) !== 1) return false;
			// 3. Payments
			if (_observe(this.costs._paymentProgress) !== 1) return false;
			// 4. Submission
			if (_observe(this.submissionForms._progress) !== 1) return false;
			return true;
		}"
```

Having that you know all sub rules that influence the result, and you can inspect them individually in next run:

```javascript
'use strict';

var bp = db.BusinessProcess.getById('8r9m15pi1nr');

console.log("Is Guide complete:", bp.guideProgress);
console.log("Are Data Forms complete:", bp.dataForms.progress);
console.log("Are Requirement Uploads complete:", bp.requirementUploads.progress);
console.log("Is Payment complete:", bp.costs.paymentProgress);
console.log("Are Submission Forms complete:", bp.submissionForms.progress);
```

After that you can dig deeper, and repeat getter investigation on one that doesn't comply to expected result until you reach the source of the issue.
