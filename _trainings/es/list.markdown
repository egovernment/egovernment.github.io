---
layout: training
permalink: /capacitaciones/
title: 'Capacitación sobre el sistema eRegistrations'
lang: es
ref: training
---
## San Salvador, del 15 al 25 de Noviembre 2016

<ul class="categorized-view">
  <li style="height: 227px;">
    <h5>Exercicios</h5>
    <a href="/configuration-tutorial/" target="_blank">Exercicios para la capacitación</a>
  </li>

  <li style="height: 227px;">
    <h5>Presentaciones</h5>
    <a href="https://javascript-basics.eregistrations.org/" target="_blank">Presentación de los fundamentos Javascript</a>
    <a href="https://framework-presentation.eregistrations.org/" target="_blank">Presentación de la arquitectura del sistema</a>
  </li>	
</ul>

<ul class="categorized-view">
  <li style="height: 227px;">
    <h5>Listas de asistencia</h5>
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSdtTXQLVVTK0mUJhnKSAC9qWDt7hx0veDsGUhe-P2dCRKrSmw/closedform" target="_blank">Martes 22 de noviembre</a>
	    <a href="https://docs.google.com/forms/d/e/1FAIpQLSf8E8CW6jWbki0ulEnbiCYC5joOGzMM1M6l-Il1Q-xDCmXZPg/viewform" target="_blank">Miércoles 23 de noviembre</a>
	    <a href="https://docs.google.com/forms/d/e/1FAIpQLScCQUPs-LMIZd4vr5_3lTZ2rYImgNyB_V4GW3cOQyNeN8XwgQ/closedform" target="_blank">Jueves 24 de noviembre</a>
	    <a href="https://docs.google.com/forms/d/e/1FAIpQLSeJZEL7nmkT_NNsdj2CzKi2wzNSxu78uwsAZFsryUcJ161OOA/closedform" target="_blank">Viernes 25 de noviembre</a>
  </li>     
  <li style="height: 227px;">
    <h5>Encuestas sobre el workshop</h5>
	    <a href="https://docs.google.com/forms/d/e/1FAIpQLScglmjF5PkLEOcZjBj1ZbG3w893SwUsPuzSxmrH6kEArRky5Q/closedform" target="_blank">Encuesta para la segunda semana del workshop</a>
	    <a href="https://goo.gl/forms/9xWU9sfNKh11Bci92" target="_blank">Encuesta para la primera semana del workshop</a>
  </li>
</ul>


---------------------------------

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