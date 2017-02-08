---
layout: doc-pages
permalink: /development/lint/
title: 'Linter Configuration'
category: 'development'
lang: en
ref: lint
weight: 3
---

# Linter Configuration

We guard code quality with [XLint](https://github.com/medikoo/xlint). It's actually just CLI for linter of choice, which allows us to keep all settings in external and single configuration file _(.lint)_. Additionally it understands _.gitignore_ rules and provides other nice goodies like live console.

Our XLint setup is configured to lint code with latest version of [JSLint](http://www.jslint.com/) that is additionally modified up to our needs.

To see generated report run:

	$ npm run lint

Be sure to run it once you checkout the project. Normally you should be presented with `100.00% OK` message. If you're on Windows and instead see a lot of whitespace errors, it means you need to make sure your editor or [git itself](https://help.github.com/articles/dealing-with-line-endings#platform-windows) doesn't update line endings for you. We strictly use unix style line endings in our code, and all your tools must play nice with that.

If you want to access live console that observes current state of files (shows and clears errors as they're introduced) run:

	$ npm run lint-console

__Best way to work with XLint, is to either run above console in some constantly visible window, or integrate it with editor of your choice.__

#### XLint integration with Sublime Text

There's a prepared [XLint build system for Sublime Text](https://github.com/medikoo/xlint-sublime), to have it working just follow instructions at its repository.

It works by re-running lint command on each file save and showing output log in Sublime's console.

#### XLint integration with WebStorm

The are two ways:

##### Integrate as Google Closure linter (for v7 versions of WebStorm)

Go to _Preferences -> JavaScript -> Code Quality Tools -> Closure Linter_ enable it and choose `bin/lint-webstorm` (on Windows: `bin/lint-webstorm.cmd`) as _Closure Linter executable file_ and `bin/lint-webstorm.conf` as _Configuration file_


##### Integrate as Google Closure linter (for v8+ versions of WebStorm)

Go to _File -> Settings -> JavaScript -> Code Quality Tools -> Closure Linter_ enable it and choose `bin/lint-webstorm` (on Windows: `bin/lint-webstorm.cmd`) as _Closure Linter executable file_ and `bin/lint-webstorm.conf` as _Configuration file_

##### Integrate as external tool

Go to _Preferences -> External Tools_ and add new tool with following settings:
* __Program__: `npm` (on Windows put `npm.cmd`)
* __Parameters__: `run lint-log-console`, it's different flavor of live console than one mentioned above. This one doesn't try to alter previously outputted content, and as control characters doesn't work in WebStorm console, it's much better to use that version.
* __Working directory__: `$ProjectFileDir$` (assuming that root directory of the repository matches root directory of WebStorm project).

After having that, we can run it from a menu and place it at chosen editor side.

Mind that if there are no lint errors in a project, at initial run there will be no output until all project files are validated (10-20 seconds), that's expected behavior.

#### XLint integration with Emacs

Below configuration provides error reporting as you write, directly in the editor. Setup stands on _flymake-mode_, please activate it for all JavaScript files, and use following configuration (be sure to replace `$PROJECT_PATH` with valid one).

```lisp
(when (load "flymake" t)
	(defun flymake-jslint-init ()
		(let* ((temp-file (flymake-init-create-temp-buffer-copy
						'flymake-create-temp-inplace))
				(local-file (file-relative-name
						temp-file
						(file-name-directory buffer-file-name))))
			(list
				"$PROJECT_PATH/node_modules/xlint/bin/xlint"
				(list
					"--linter=$PROJECT_PATH/node_modules/xlint-jslint-medikoo-mod/index.js"
					(concat "--realFilename=" buffer-file-name)
					"--terse" "--no-cache" temp-file))))

	(setq flymake-err-line-patterns
		(cons '("^\\(.*\\):\\([[:digit:]]+\\):\\([[:digit:]]+\\):\\(.*\\)$"
				1 2 3 4)
			flymake-err-line-patterns))

	(add-to-list 'flymake-allowed-file-name-masks
		'("\\.js\\'" flymake-jslint-init))

	(require 'flymake-cursor)
)
```
