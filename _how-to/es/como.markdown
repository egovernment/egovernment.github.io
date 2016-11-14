---
layout: recipe
permalink: /como/
title: 'Cómo hacer'
lang: es
ref: how-to
---

<div class="faq">

	<input class="faq-search" type="text" placeholder="Escribe para buscar, por ejemplo 'añadir un coste a un registro '...">

	<div class="code-preview">

	{% assign howtos = site.how-to | where:"lang", page.lang | group_by: "category" | sort: "name" %}

	{% for howto in howtos %}

		{% if howto.name != '' %}
		<h5>{{ howto.name }}</h5>

		{% assign hows = howto %}

		<ul class="list-unstyled row recipe-category-row">
		{% for h in hows.items %}
			<li>
				<div class="container-fluid">
					<div class="row">
						<div class="col-xs-12 col-md-2 pt8">{% ifchanged %}{{ h.sub-category }}{% endifchanged %}</div>
						<div class="col-xs-12 col-md-10">
							<ul class="list-unstyled">
								<li>
									<div class="container-fluid">
										<div class="row recipe-row">
											<div class="col-xs-6 col-sm-10"><a href="{{ h.url }}">{{ h.title }}</a></div>
											<div class="col-xs-2 col-sm-1 recipe-extra">
												<span class="label label-default label-cat">{{ h.number }}</span>
												</div>
											<!--<div class="col-xs-2 col-sm-1 recipe-extra"><span class="badge rate-{{ h.rate }}">{{ h.rate }}</span></div>-->
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
