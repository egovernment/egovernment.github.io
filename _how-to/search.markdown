---
layout: recipe
permalink: /how-to/
title: 'How to...'
---

<div class="faq">
	
	<input class="faq-search" type="text" placeholder="Type to search, for example 'add a cost to a registration'...">

	<div class="code-preview">

	<h5>Part A</h5>

		{% assign hows = site.how-to | group_by:"sub-category" | sort:"name" | where_exp:"item","item.category == 'Part A'" %}

		<ul class="list-unstyled row">
		{% for how in hows %}
			{% if how.name != '' %}
			<li>
				<div class="container-fluid">
					<div class="row">
						<div class="col-xs-12 col-md-2 pt8">{{ how.name }}</div>
						<div class="col-xs-12 col-md-10">
							<ul class="list-unstyled">
								{% for h in how.items %}
								<li>
									<div class="container-fluid">
										<div class="row recipe-row">
											<div class="col-xs-6 col-sm-9"><a href="{{ h.url }}">{{ h.title }}</a></div>
											<div class="col-xs-2 col-sm-1 recipe-extra"><span class="label label-warning label-cat">{{ h.number }}</span></div>
											<div class="col-xs-2 col-sm-1 recipe-extra"><span class="badge rate-{{ h.rate }}">{{ h.rate }}</span></div>
											<div class="col-xs-2 col-sm-1 recipe-extra">{% if h.rate %}{{ h.status }}{% endif %}</div>
										</div>
									</div>
								</li>
								{% endfor %}

							</ul>
						</div>
					</div>
				</div>
			</li>
			{% endif %}
		{% endfor %}
		</ul>

	    
	<h5>Part B</h5>

	    {% assign howsb = site.how-to | group_by:"sub-category" | sort:"name" | where_exp:"item","item.category == 'Part B'" %}

		<ul class="list-unstyled row">
		{% for howb in howsb %}
			{% if howb.name != '' %}
			<li>
				<div class="container-fluid">
					<div class="row">
						<div class="col-xs-12 col-md-2 pt8">{{ howb.name }}</div>
						<div class="col-xs-12 col-md-10">
							<ul class="list-unstyled">
								{% for hb in howb.items %}
								<li>
									<div class="container-fluid">
										<div class="row recipe-row">
											<div class="col-xs-6 col-sm-9"><a href="{{ hb.url }}">{{ hb.title }}</a></div>
											<div class="col-xs-2 col-sm-1 recipe-extra"><span class="label label-info label-cat">{{ hb.number }}</span></div>
											<div class="col-xs-2 col-sm-1 recipe-extra"><span class="badge rate-{{ hb.rate }}">{{ hb.rate }}</span></div>
											<div class="col-xs-2 col-sm-1 recipe-extra">{% if hb.rate %}{{ hb.status }}{% endif %}</div>
										</div>
									</div>
								</li>
								{% endfor %}

							</ul>
						</div>
					</div>
				</div>
			</li>
			{% endif %}
		{% endfor %}
		</ul>

	<h5>Public pages</h5>

	    <ul class="grid-view view-col-3">
	      <li style="height: 173px;">
	        <h5><span class="label label-purple label-cat pull-right">301</span> 
				<a href="/how-to/add-a-new-public-page-and-route-it">Add a new public page and route it</a></h5>
	      </li>

	      <li style="height: 173px;">
	        <h5><span class="label label-purple label-cat pull-right">302</span> 
				<a href="/how-to/modify-the-look-and-feel-of-the-public-pages">Modify the look and feel of the public pages</a></h5>
	      </li>
	
	      <li style="height: 173px;">
	        <h5><span class="label label-purple label-cat pull-right">303</span> 
		    <a href="/how-to/add-a-media-in-the-public-pages">Add a media in the public pages (image, video, map)</a></h5>
	      </li>
	
	      <li style="height: 173px;">
	        <h5><span class="label label-purple label-cat pull-right">304</span> 
		    <a href="/how-to/add-a-clickdesk-plugin-to-the-public-pages">Add a Clickdesk plugin to the public pages</a></h5>
	      </li>
	    </ul>

	<h5>Design</h5>

	    <ul class="grid-view view-col-3">

	      <li style="height: 173px;">
	        <h5><span class="label label-danger label-cat pull-right">401</span> 
		        <a href="/how-to/change-the-top-left-logo">Change the logo of an eregistrations system</a></h5>
	      </li>
	
	      <li style="height: 173px;">
	        <h5><span class="label label-danger label-cat pull-right">402</span> 
		        <a href="/how-to/change-the-color-of-the-top-menu">Change the color of the top menu</a></h5>
	      </li>
	
	      <li style="height: 173px;">
	        <h5><span class="label label-danger label-cat pull-right">403</span> 
		        <a href="/how-to/change-the-color-of-the-titles">Change the color of the titles</a></h5>
	      </li>
	
	      <li style="height: 173px;">
	        <h5><span class="label label-danger label-cat pull-right">404</span> 
		        <a href="/how-to/change-the-color-of-the-table-headers">Change the color of the table headers</a></h5>
	      </li>
	
	      <li style="height: 173px;">
	        <h5><span class="label label-danger label-cat pull-right">405</span> 
		        <a href="/how-to/change-the-font-of-the-system">Change the font of the system</a></h5>
	      </li>
	
	      <li style="height: 173px;">
	        <h5><span class="label label-danger label-cat pull-right">406</span>
<a href="/how-to/respect-the-vertical-rhythm-of-the-elements">Respect the vertical rhythm of the elements</a></h5>
	      </li>
	
	      <li style="height: 173px;">
	        <h5><span class="label label-danger label-cat pull-right">407</span>
<a href="/how-to/change-the-footer">Change the footer</a></h5>
	      </li>
	    </ul>	    

	<h5>Other</h5>

	    <ul class="grid-view view-col-3">	
	      <li style="height: 173px;">
	        <h5><span class="label label-dark label-cat pull-right">501</span> 
		        <a href="/how-to/publish-a-change-in-the-live-app-using-github">Publish a change in the live app with github</a></h5>
	      </li>
	
	      <li style="height: 173px;">
	        <h5><span class="label label-dark label-cat pull-right">502</span>
<a href="/how-to/make-translatable-an-element-of-the-system">Make translatable an element of the system</a></h5>
	      </li>
	
	      <li style="height: 173px;">
	        <h5><span class="label label-dark label-cat pull-right">503</span>
<a href="/how-to/see-a-system-locally-after-installation">See an eregistrations system locally after installation</a></h5>
	      </li>
	
	      <li style="height: 173px;">
	        <h5><span class="label label-dark label-cat pull-right">504</span>
<a href="/how-to/add-a-zone-in-the-system">Add a zone in the system</a></h5>
	      </li>
	
	      <li style="height: 173px;">
	        <h5><span class="label label-dark label-cat pull-right">504</span>
<a href="/how-to/change-the-format-of-the-passwords-of-the-accounts">Change the format of the passwords of the accounts</a></h5>
	      </li>
	
	      <li style="height: 173px;">
	        <h5><span class="label label-dark label-cat pull-right">506</span>
<a href="/how-to/request-a-server-reboot-to-see-changes-online">Request a server reboot to see changes online (for example the translations)</a></h5>
	      </li>
	
	      <li style="height: 173px;">
	        <h5><span class="label label-dark label-cat pull-right">507</span> 
		        <a href="/how-to/solve-something-that-is-not-covered-by-the-sheets">Solve something that is not covered by the sheets</a></h5>
	      </li>
	    </ul>
	</div>
</div>
	      
