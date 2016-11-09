---
layout: training
permalink: /capacitaciones/
title: 'Capacitaciones para el sistema eRegistrations'
lang: es
ref: training
---
## Capacitación en San Salvador, del 15 al 25 de Noviembre 2016

Los servicios siguientes van a ser desarrollado durante el seminario : 

Sistema | Nombre del servicio | Mockups | Analysis BPA | Diagram
--- | --- | --- | --- |--- 
MiEmpresa.gob.sv | Resolución de registro de capital para inscripción de sucursal extranjera | [link](http://dadd7a.axshare.com/#p=guide) | [link](https://docs.google.com/document/d/10H-GeCcE591dXQTuzyScWl44dwNZC6s07tyqGWbCRtg/edit?usp=sharing) | [link](https://docs.google.com/spreadsheets/d/10j7_xSinyGSeowS-co4ltNkXtrvPMhSK8Hp5mKM9Yr4/edit?usp=sharing) | 
MiEmpresa.gob.sv | Obtención de registro MYPE | [link](http://w14glk.axshare.com) | [link](https://docs.google.com/document/d/1-B-huszzTx5kesEPx0w5pTLDbZuVeixHrbkhek7lefU/edit?usp=sharing) | [link](https://docs.google.com/spreadsheets/d/1A8PgGaP0bRXKUfkTYNFvAZbTp6q6P48UUlFLF4xBDTg/edit?usp=sharing) |
MiNegocio.gt | Inscripción o registro de empresa y comerciante individual | [link](http://6rg64n.axshare.com) | [link](https://docs.google.com/document/d/17dhdSjxy6EHvbNy4rPAn8ne4C-e9HpN_QR0He9MupWM/edit?usp=sharing) | [link]() |
{: .table .table-bordered .table-striped }


<!---
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
--->