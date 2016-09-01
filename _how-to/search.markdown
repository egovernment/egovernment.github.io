---
layout: recipe
permalink: /how-to/
title: 'How to...'
---

<div class="faq">
	
	<input class="faq-search" type="text" placeholder="Type to search, for example 'add a cost to a registration'...">

	<div class="code-preview">

	{% assign howtos = site.how-to | group_by: "category" | sort: "name" %}

	{% for howto in howtos %}
		
		{% if howto.name != '' %}
		<h5>{{ howto.name }}</h5>

		{% assign hows = howto %}

		<ul class="list-unstyled row recipe-category-row">
		{% for h in hows.items | sort: "number" %}
			<li>
				<div class="container-fluid">
					<div class="row">
						<div class="col-xs-12 col-md-2 pt8">{% ifchanged %}{{ h.sub-category }}{% endifchanged %}</div>
						<div class="col-xs-12 col-md-10">
							<ul class="list-unstyled">
								<li>
									<div class="container-fluid">
										<div class="row recipe-row">
											<div class="col-xs-6 col-sm-9"><a href="{{ h.url }}">{{ h.title }}</a></div>
											<div class="col-xs-2 col-sm-1 recipe-extra">
												<span class="label {% if howto.name == '1. Part A' %}label-warning{% endif %}{% if howto.name == '2. Part B' %}label-info{% endif %}{% if howto.name == '3. Public pages' %}label-purple{% endif %}{% if howto.name == '4. Design' %}label-danger{% endif %}{% if howto.name == '5. Other' %}label-dark{% endif %} label-cat">{{ h.number }}</span>
												</div>
											<div class="col-xs-2 col-sm-1 recipe-extra"><span class="badge rate-{{ h.rate }}">{{ h.rate }}</span></div>
											<div class="col-xs-2 col-sm-1 recipe-extra">{% if h.done == 'yes' %}<i class="fa fa-check"></i>{% endif %}</div>
										</div>
									</div>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</li>
		{% endfor %}
		</ul>
		{% endif  %}

	{% endfor %}

	</div>
</div>
	      
