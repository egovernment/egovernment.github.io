---
layout: doc-pages
permalink: /framework/code-organization/
title: 'Code Organization'
category: 'codebase'
lang: en
ref: code-organization
weight: 13
---

# Code Organization

Below is visual description of system codebase tree. Be sure to click on folder name to reveal description of its content.

<div class="file-tree">
  <ul>
    <li class="is-folder">
      apps-common<i>Application configuration files shared by more than one application</i>
      <ul>
        <li class="is-folder">
          business-processes<i>Pre-configured collections of business processes</i>
          <ul>
           <li class="is-folder">
             submitted<i>Business processes in Part B</i>
             <ul>
               <li class="is-file">{service-name}.js<i>Collection of all business processes (in Part B) for given service</i></li>
               <li class="is-file">index.js<i>Dictionary of all collections in folder</i></li>
             </ul>
           </li>
            <li class="is-file">{service-name}.js<i>Collection of all business processes for given service</i></li>
            <li class="is-file">index.js<i>Dictionary of all collections in folder</i></li>
          </ul>
        </li>
        <li class="is-folder">
          processing-steps<i>Pre-configured meta data (and collections) of all defined processing steps</i>
          <ul>
            <li class="is-file">meta.js<i>Meta data of all defined processing steps</i></li>
            <li class="is-file">index.js<i>Meta data enriched with collections of all business processes being currently at given processing step status</i></li>
          </ul>
        </li>
        <li class="is-file">business-process-list-computed-properties.js<i>List of business process computed properties needed for proper display of table of business processes in official part</i></li>
        <li class="is-file">business-process-list-properties.js<i>List of business process direct properties needed for proper display of table of business processes in official part</i></li>
      </ul>
    </li>

    <li class="is-folder">
      apps<i>Configuration of all applications in a system</i>
      <ul>
        <li class="is-folder">
          {app-name}<i>Configuration for given application</i>
          <ul>
            <li class="is-folder">
             	bin<i>Setup programs for given application</i>
              <ul>
                <li class="is-file">generate-client-model<i>Generates optimized model file for given application</i></li>
                <li class="is-file">generate-client-program<i>Generates program bundle for given application</i></li>
                <li class="is-file">generate-html-index<i>Generates HTML index file for given application</i></li>
              </ul>
            </li>
            <li class="is-folder">
             	business-processes<i>Collections and meta data of business processes in scope of this flow step (this folder can be found only in applications addressing official step processing)</i>
              <ul>
                <li class="is-file">get-default-order-index.js<i>Returns stamp by which table is sorted by default (used only for on-spot table resolution in client)</i></li>
                <li class="is-file">index.js<i>Collection of all business processes accessible at given step</i></li>
                <li class="is-file">map.js<i>Meta configuration enriched with business process collections residing at given statuses of step</i></li>
                <li class="is-file">meta.js<i>Meta configuration of all status filters applicable for given step. Additionally here we indicate which services given step handles</i></li>
              </ul>
            </li>
            <li class="is-folder">
             	client<i>Client specific files for given application</i>
              <ul>
                <li class="is-folder">
                 	legacy<i>Legacy browser dedicated modules (this part is sometimes represented by singular `legacy.js` file)</i>
								</li>
                <li class="is-file">css-print.index<i>Index of CSS components to be bundled for print views exposed by this application</i></li>
                <li class="is-file">css.index<i>Index of CSS components to be bundled for this application to present properly</i></li>
                <li class="is-file">dbjs-dom.js<i>Configuration of DBJS DOM bindings needed for this application</i></li>
                <li class="is-file">model.js<i>Loads model definitions as needed by this application</i></li>
                <li class="is-file">program.js<i>Main program of this application (first module to be run within a browser)</i></li>
              </ul>
            </li>
            <li class="is-folder">
             	controller<i>Configuration of all form (POST) controllers needed for this application</i>
              <ul>
                <li class="is-file">client.js<i>Client (browser) specific configuration</i></li>
                <li class="is-file">index.js<i>Main configuration that applies to both client (browser) and server</i></li>
                <li class="is-file">server.js<i>Server specific configuration</i></li>
							</ul>
						</li>
            <li class="is-folder">
             	server<i>Server specific files for given application</i>
              <ul>
                <li class="is-folder">
                 	notifications<i>Configuration of Email notifications specific to this application</i>
								</li>
                <li class="is-file">routes.js<i>Configuration of route -> controller map for server only GET routes. It's usually configuration of queries that need to be handled by server (e.g. large data queries or generation of PDF, CVS documents)</i></li>
                <li class="is-file">status-log.js<i>Configuration of eventual status logs generated in context of step this application addresses</i></li>
              </ul>
            </li>
            <li class="is-file">.lint<i>Lint configuration adjustments for app files</i></li>
            <li class="is-file">index.html.tpl<i>Template out of which index.html for application is generated</i></li>
            <li class="is-file">mano.js<i>Application configuration file (it's old idea, now used only to back old functionalities)</i></li>
            <li class="is-file">routes.js<i>URL -> View map for application</i></li>
          </ul>
        </li>
      </ul>
    </li>
		<li class="is-folder">
      bin<i>System setup and start programs</i>
      <ul>
        <li class="is-file">adapt-app<i>Adapts newly created application (used only internally)</i></li>
        <li class="is-file">ci<i>Runs all continuous integration scripts (used by configured CI service)</i></li>
        <li class="is-file">cloudfront-invalidate<i>Invalidates cache for changed assets in CloudFront registry</i></li>
        <li class="is-file">create-users-admin<i>Creates User Admin account (usually run after system initialization)</i></li>
        <li class="is-file">db-recompute<i>Recomputes dbjs rules for all stored records (used to fix eventual inconsistencies that can be caused by bugs or model changes)</i></li>
        <li class="is-file">db-recompute-slave<i>Initializes slave process for recompute operation (used internally by db-recompute)</i></li>
        <li class="is-file">generate-apps-client-css<i>Generates CSS bundles for all applications</i></li>
        <li class="is-file">generate-apps-client-model<i>Generates optimized model files for all applications</i></li>
        <li class="is-file">generate-apps-client-program<i>Generates program bundles for all applications</i></li>
        <li class="is-file">generate-apps-conf<i>Generates applications configuration file (used only internally)</i></li>
        <li class="is-file">generate-apps-html-index<i>Generates HTML index files for all applications</i></li>
        <li class="is-file">generate-client-env<i>Generates env.js for client applications</i></li>
        <li class="is-file">i18n-scan<i>Generates i18n-scan-map.generated.json which contains maps of all translatable messages from a system</i></li>
        <li class="is-file">ipc-eval<i>Allows IPC communication with memory-db process. See [Debugging](/development/debugging/) chapter</i></li>
        <li class="is-file">lint-webstorm<i>Lint aid for WebStorm editor</i></li>
        <li class="is-file">lint-webstorm.cmd<i>Lint aid for WebStorm editor (applicable on Windows)</i></li>
        <li class="is-file">lint-webstorm.conf<i>Configuration as used by WebStorm linter</i></li>
        <li class="is-file">setup<i>Runs system setup (generates all files needed for proper system run)</i></li>
        <li class="is-file">start<i>Starts the system</i></li>
      </ul>
	  </li>

    <li class="is-folder">
      css<i>CSS files specific to system. See [CSS organization](/framework/styles) for more info</i>
    </li>

    <li class="is-folder">
      model<i>System specific model definitions. See [Database Model](/framework/model-eregistrations/) for more info</i>
    </li>

    <li class="is-folder">
      node_modules<i>External dependencies of a system</i>
    </li>

    <li class="is-folder">
      public<i>System specific assets</i>
    </li>

    <li class="is-folder">
      script<i>System specific scripts (usually run via `bin` programs)</i>
      <ul>
        <li class="is-file">adapt-app<i>Adapts newly created application (used only internally)</i></li>
        <li class="is-file">generate-client-env<i>Generates env.js for client applications</i></li>
        <li class="is-file">i18n-scan<i>Generates i18n-scan-map.generated.json which contains maps of all translatable messages from a system</i></li>
        <li class="is-file">setup<i>Runs system setup (generates all files needed for proper system run)</i></li>
      </ul>
    </li>

    <li class="is-folder">
      server<i>Server specific modules</i>
      <ul>
        <li class="is-folder">
          apps<i>Applications configuration files</i>
          <ul>
            <li class="is-file">conf.js<i>Map of applications configuration files</i></li>
            <li class="is-file">list.js<i>List of all system applications</i></li>
            <li class="is-file">routers.js<i>Map and initialization of server GET requests controller routers for all applications</i></li>
          </ul>
        </li>
        <li class="is-folder">
          db<i>Database configuration files</i>
          <ul>
            <li class="is-file">indexes.js<i>Configuration of database indexes (all computed properties of which results we want to persistently store and all reduction mechanisms towards statistics)</i></li>
            <li class="is-file">views.js<i>Configuration of reactive list snapshots (e.g. first pages of files pending at given step)</i></li>
          </ul>
        </li>
        <li class="is-folder">
          processes<i>Configuration of server processes</i>
          <ul>
            <li class="is-folder">
              master<i>Configuration of master process</i>
              <ul>
                <li class="is-file">apps-access-rules.js<i>Customizations to access rules which dictate which data to applications is propagated reactively (via SSE channel)</i></li>
                <li class="is-file">apps-post-controllers.js<i>Configuration of all applications POST controllers that are meant to be resolved in master process</i></li>
                <li class="is-file">index.js<i>Program that initializes the process</i></li>
                <li class="is-file">process-query-routes.js<i>Configuration of all queries that go to this process from memory-db process</i></li>
                <li class="is-file">query-memory-db.js<i>Utility through which this process can query (via predefined query list) memory-db process</i></li>
							</ul>
						</li>
            <li class="is-folder">
              memory-db<i>Configuration of memory-db process</i>
              <ul>
                <li class="is-file">apps-post-controllers.js<i>Configuration of all applications POST controllers that are meant to be resolved in memory-db process</i></li>
                <li class="is-file">index.js<i>Program that initializes the process</i></li>
                <li class="is-file">process-query-routes.js<i>Configuration of all queries that go to this process from master process</i></li>
                <li class="is-file">query-memory-db.js<i>Utility through which this process can query (via predefined query list) master process</i></li>
							</ul>
						</li>
          </ul>
        </li>
        <li class="is-folder">
          tmp<i>Folder for storing temporary files (initially empty)</i>
				</li>
        <li class="is-folder">
          view<i>System specific views and customizations to generic ones. For more information see [Views](/framework/views/) chapter</i>
				</li>
      </ul>
    </li>
    <li class="is-file">.gitignore<i>Git ignore rules for system codebase</i></li>
    <li class="is-file">.lint<i>Lint configuration settings for system codebase</i></li>
    <li class="is-file">.lintignore<i>Lint ignore rules for system codebase</i></li>
    <li class="is-file">LICENSE<i>LICENSE at which system is covered</i></li>
    <li class="is-file">README.md<i>Cover documentation file (It's documentation file as seen on GitHub when we enter the project)</i></li>
    <li class="is-file">circle.yml<i>Circle CI (Continuous integration) service settings</i></li>
    <li class="is-file">db.js<i>Initial setup of database instance (it's point from which it should be required in most places)</i></li>
    <li class="is-file">i18n-messages.json<i>Map of translations</i></li>
    <li class="is-file">i18n.js<i>Initial setup of translations module (it's point from which it should be required in most places)</i></li>
    <li class="is-file">package.json<i>System package configuration file, most importantly it contains configuration of npm scripts</i></li>
  </ul>
</div>
