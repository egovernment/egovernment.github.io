---
layout: page
title: About
permalink: /about/
---

<ul>
{% for col in site.collections %}
	<li>{{ col.label }}</li>
{% endfor %}
</ul>

<hr>

<ul>
{% for doc in site.documentation %}
	<li>{{ doc.title }}</li>
{% endfor %}
</ul>

<hr>

<ul>
{{ site.data.folders.how-to.name }}
{% for cat in site.data.folders.how-to.categories %}
<li>{{ cat.weight }}</li>
{% endfor %}
</ul>

<hr>

{% assign hows-cat = site.data.folders.how-to.categories %}
{% assign hows = site.how-to | group_by:"category" | sort: hows-cat[category].weight %}

<ul>
{% for how in hows %}
	{% if how.name != '' %}
	<li>{{ how.name }}
		<ul>
		{% assign howto = how.items | group_by:"sub-category" %}	
		{% for ht in howto %}
			<li>{{ ht.name }}
				<ul>
					{% for h in ht.items %}
					<li><a href="{{ h.url }}">{{ h.number }} - {{ h.title }}</a></li>
					{% endfor %}
				</ul>
			</li>
		{% endfor %}
		</ul>
	</li>
	{% endif %}
{% endfor %}
</ul>


<hr>

<ul>
{% for training in site.trainings %}
	<li>{{ training.title }}</li>
{% endfor %}
</ul>
