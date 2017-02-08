---
layout: doc-pages
permalink: /development/organisation/
title: 'Organisation'
category: 'development'
lang: en
ref: organisation
weight: 1
userOnly: true
---

# Organisation of the development 

<div class="callout callout-warning" role="alert">
  <p>The following explanation applies to the work of Kamil, Marek, Roxana, Ilja, Rauno, Brian, Gualberto and Luis as eRegistrations coders. It can also apply to Nelson and Claudia for analysis purposes.</p>
</div>

## Path for configuring new services in eRegistrations framework

<div class="row">
	<div class="col-md-4">
		<a href="" target="_blank">
			<img class="img-shadow img-responsive center-block" src="/img/path.png">
		</a>
	</div>
	<div class="col-md-8">
		The stages of the configuration of a new service in eRegistrations are: 
		
				
		<ol>
			<li>
				<strong>Analysis</strong>: redaction of the BPA analysis and the corresponding mockup and spreadsheet for the given service. This is done by the analyst. The result is the whole analysis in Confluence page dedicated to the service.
			</li>
			<li>
				<strong>Dev</strong>: development of the service following a given structure of usually 10 steps. This is done by the developer based on the analysis. The result is the service on a testing port.
			</li>
			<li>
				<strong>Test</strong>: tests of the system and change requests placed in the page dedicated to the service in Confluence. This is done by the local testers or a tester in Geneva.
			</li>
			<li>
				<strong>Correction</strong>: development of the change requests based on the list in the Confluence page. The result is the corrected service on the testing port.
			</li>
			<li>
				<strong>Ready</strong>: the service is ready on staging port, the tests has given no change requests.
			</li>			
		</ol>
		
		See more details about the development path <a href="" target="_blank">here</a>.
		 
	</div>	
</div>


## Working with Confluence

All the analysis, development, test and correction is reported in Confluence. 

The 3 spaces we work in Confluence are:  

- eRegistrations Salvador, for services related to MiEmpresa.gob.sv
- eRegistrations Guatemala, for services related to MiNegocio.gt
- eRegistrations Poland core, for features that apply to both MiEmpresa.gob.sv and MiNegocio.gt

Plus, the space eRegistrations contains everything about the concept of eRegistrations, written by Frank (it is required to know the content of this space very well). 


### Organisation of a space

A space is made of pages dedicated to services or features (1 page per service or feature). For each service and feature, we have, on top of the analysis, a part with 4 tables, which are:

<table class="table table-bordered">
	<tbody>
		<tr>
			<td><span class="label label-primary" style="background-color:#4a6785;">Analysis</span></td>
			<td><p>All the columns are filled by the analyst.</p></td>
		</tr>
		<tr>
			<td><span class="label label-default">Dev</span></td>
			<td>
				<p>The column "Tasks" is always made of the same tasks. The tasks are created in Github by Vianney when the work is started on this service.</p>
				<p>The column "Issue" is filled with the number of the Github issue and a link to it.</p>
				<p>The column "Duration (estimated)" is filled by the developer in charge whenever he/she reads the analysis.</p>
				<p>The column "Start date" is filled by the developer when he/she starts to code the service.</p>
				<p>The column "End date" is filled by the developer when the Code review of the part is validated by code reviewer.</p>
				<p>The column "Duration (real)" is filled by the developer when the Code review of the part is validated by code reviewer.</p>
			</td>
		</tr>	
		<tr>
			<td><span class="label label-danger" style="background-color:#d04437">Test</span></td>
			<td>
				<p>The column "Test port" and "Admin account" are filled by the developer when the service is ready for testing.</p>
			</td>
		</tr>
		<tr>
			<td><span class="label label-warning" style="background-color:#ffd351">Correction</span></td>
			<td>
				<p>The column "Requests for change" is filled by Vianney based on his tests or the tests received from the field (that can be stored in the DUC page of each space).</p>
			
				<p>The column "Duration (estimated)" is filled by the developer in charge whenever he/she reads the change request.</p>

				<p>The column "Start date" is filled by the developer when he/she starts to code the change request.</p>

				<p>The column "End date" is filled by the developer when the Code review of the part is validated by code reviewer.</p>

				<p>The column "Duration (real)" is filled by the developer when the Code review of the part is validated by code reviewer.</p>
			</td>
		</tr>
	</tbody>

</table>


Good practices:  

- it is recommended for the developer to always have opened in browser the page dedicated to the service being done
- it is good to make the estimation as fast as possible so Geneva can determine the priorities accordingly
- once a DEV is over or a Change request has been processed, we will keep the corresponding tables or line of table in a "Archive" page, for each space.


### Logs (reports)

Each developer must maintain a log of daily reports in a dedicated page. Each daily report consists in one or two sentences explaining what has been done during the day and alerts for eventual delays.

The logs are in the space "Logs".


### Tasks assignation

Frank or Vianney will write the assignation for the coming week in each person Log page. The assignation will not changed for the entire week, in case nothing really urgent pops in.


### Case of urgent matter

If a huge bug is detected, the assigned task of the developer can be put on hold and explained in the daily and weekly report.