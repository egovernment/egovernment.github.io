---
layout: training
permalink: /trainings/
title: 'Training for eRegistrations system'
lang: en
ref: training
---

## San Salvador, November 15th to 25th, 2016


<ul class="categorized-view">
  <li style="height: 227px;">
    <h5>Exercices</h5>
    <a href="/configuration-tutorial/" target="_blank">Exercices for the training</a>
  </li>

  <li style="height: 227px;">
    <h5>Presentations</h5>
    <a href="https://javascript-basics.eregistrations.org/" target="_blank">Javascript basics presentation</a>
    <a href="https://framework-presentation.eregistrations.org/" target="_blank">Framework presentation</a>
  </li>	
</ul>

<ul class="categorized-view">
  <li style="height: 227px;">
    <h5>Attendees lists</h5>
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSdtTXQLVVTK0mUJhnKSAC9qWDt7hx0veDsGUhe-P2dCRKrSmw/closedform" target="_blank">Tuesday, Nov 22nd</a>
	    <a href="https://docs.google.com/forms/d/e/1FAIpQLSf8E8CW6jWbki0ulEnbiCYC5joOGzMM1M6l-Il1Q-xDCmXZPg/viewform" target="_blank">Wednesday, Nov 23rd</a>
	    <a href="https://docs.google.com/forms/d/e/1FAIpQLScCQUPs-LMIZd4vr5_3lTZ2rYImgNyB_V4GW3cOQyNeN8XwgQ/closedform" target="_blank">Thursday, Nov 24th</a>
	    <a href="https://docs.google.com/forms/d/e/1FAIpQLSeJZEL7nmkT_NNsdj2CzKi2wzNSxu78uwsAZFsryUcJ161OOA/closedform" target="_blank">Friday, Nov 25th</a>
  </li>     
  <li style="height: 227px;">
    <h5>Surveys</h5>
	    <a href="https://docs.google.com/forms/d/e/1FAIpQLScglmjF5PkLEOcZjBj1ZbG3w893SwUsPuzSxmrH6kEArRky5Q/closedform" target="_blank">Survey for the second week of training</a>
	    <a href="https://goo.gl/forms/9xWU9sfNKh11Bci92" target="_blank">Survey for the first week of the training</a>
  </li>
</ul>

------------------

## Other trainings

{% assign trainings = site.trainings | where: "lang", page.lang | where: "category", "training" | sort: "number" %}

{% for training in trainings %}
<table class="table table-bordered table-striped table-info">
  <tbody>
    <tr>
      <td style="width: 25%"><a href="{{ training.url }}">{{ site.training-pages.title.single[page.lang]}} {{ training.number }}</a></td>
      <td>{{ training.title }}{% if training.level %} - {{ site.training-pages.sections.level[page.lang]}} {{ training.level }}{% endif %}</td>
    </tr>
    <tr>
      <td>{{ site.training-pages.sections.objectives[page.lang]}}</td>
      <td>{{ training.objectives | markdownify }}</td>
    </tr>
    <tr>
      <td>{{ site.training-pages.sections.duration[page.lang]}}</td>
      <td>{{ training.duration }}</td>
    </tr>
  </tbody>
</table>
{% endfor %}
