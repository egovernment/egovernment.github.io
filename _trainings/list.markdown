---
layout: training
permalink: /trainings/
title: 'Training for eRegistrations system'
lang: en
ref: training
---

## San Salvador, November 15th to 25th, 2016


[Javascript basics presentation](https://javascript-basics.eregistrations.org/){:target="_blank"}  

[Framework presentation](https://framework-presentation.eregistrations.org/){:target="_blank"}  

[Exercices for training](/configuration-tutorial/){:target="_blank"}


------------------

[Agenda](https://docs.google.com/document/d/1kweTP6UzxO57Xr08y-ET3fr68jIxZ2BOSAAko_P5UaU/edit?usp=sharing){:target="_blank"}

The following services will be developed : 

System | Name of service | Mockups | Analysis BPA | Form | Diagram
--- | --- | --- | --- |--- |--- 
MiEmpresa.gob.sv | Capital registration of foreign branch | [link](https://dadd7a.axshare.com/#p=guide){:target="_blank"} | [link](https://docs.google.com/document/d/10H-GeCcE591dXQTuzyScWl44dwNZC6s07tyqGWbCRtg/edit?usp=sharing){:target="_blank"} | [link](https://docs.google.com/spreadsheets/d/15IU0AD9JGx-qZKIO1_uhfvGuxl7_Aqdl_h8xUYNAt3Y/edit?usp=sharing){:target="_blank"} | [link](https://docs.google.com/spreadsheets/d/10j7_xSinyGSeowS-co4ltNkXtrvPMhSK8Hp5mKM9Yr4/edit?usp=sharing){:target="_blank"} | 
MiEmpresa.gob.sv | SME registration | [link](https://w14glk.axshare.com/#p=guide){:target="_blank"} | [link](https://docs.google.com/document/d/1-B-huszzTx5kesEPx0w5pTLDbZuVeixHrbkhek7lefU/edit?usp=sharing){:target="_blank"} | [link](https://docs.google.com/spreadsheets/d/1vlYF-g_iXo7kZcfZgcpjMtmTTbONaB-G3OH-rJrOrcE/edit?usp=sharing){:target="_blank"} | [link](https://docs.google.com/spreadsheets/d/1A8PgGaP0bRXKUfkTYNFvAZbTp6q6P48UUlFLF4xBDTg/edit?usp=sharing){:target="_blank"}  |
MiNegocio.gt | Individual trader registration - SIMPLE CASE| [link](https://87qkeb.axshare.com/#p=guide){:target="_blank"} | [link](https://docs.google.com/document/d/1nAhjy0omqEUIV1qaNOWOj7vqXR7mnLViFpn2MMH1-9I/edit?usp=sharing){:target="_blank"} | [link](https://docs.google.com/spreadsheets/d/1PXg6pgUUUvxYgGQaZpp3qzmvembv-XLncH6OYTdW1ZA/edit?usp=sharing){:target="_blank"} | | 
MiNegocio.gt | Individual trader registration - FULL CASE| [link](https://6rg64n.axshare.com/#p=guide){:target="_blank"} | [link](https://docs.google.com/document/d/17dhdSjxy6EHvbNy4rPAn8ne4C-e9HpN_QR0He9MupWM/edit?usp=sharing){:target="_blank"} | [link](https://docs.google.com/spreadsheets/d/1sZP6VT7CvNfartWU8EAfheCRk_3fDChKNtn9xNJTyPs/edit?usp=sharing){:target="_blank"} | | 
MiNegocio.gt | Mandates (being done by Kamil) | [link](https://ipat3b.axshare.com/#p=guide){:target="_blank"} | [link](https://docs.google.com/document/d/1m4G1POp3kH9KExj7QdfN18iQ1Vmuszitr2-Rq82IxYQ/edit?usp=sharing){:target="_blank"} | [link](https://docs.google.com/spreadsheets/d/1ETYWnlpX1Gkvfy3niq8X_yNKgLBuV6Fuaov-0RRET4Q/edit?usp=sharing){:target="_blank"}| |
MiNegocio.gt | Business auxiliaries registration, cancellation, copy of certificate | [link](https://nhtcnz.axshare.com/#p=guide){:target="_blank"} | [link](https://docs.google.com/document/d/1Zf9egN8XRIzvqoCt32tPYu_s8NehPgAn4QKKLG4pSd4/edit?usp=sharing){:target="_blank"} | [link](https://docs.google.com/spreadsheets/d/1vXlfTar6cZ_OVdQN0MIbCteZirrwyTqUc83YE4Q1j4M/edit?usp=sharing){:target="_blank"} | |
MiNegocio.gt | Declaration of emission of shares | [link](https://3atwvi.axshare.com/#p=guide){:target="_blank"} | [link](https://docs.google.com/document/d/1JfEksxou2MAw6i1Yh0Kq2vpubdmsCcTz_IlMIH3rkaw/edit?usp=sharing){:target="_blank"} | [link](https://docs.google.com/spreadsheets/d/1UmUc12btO11hpp2qs5uhvIuEeidyDjrFH1J_efVIbXU/edit?usp=sharing){:target="_blank"} | |
MiNegocio.gt | Registration of assembly act | [link](https://hc2oh5.axshare.com/#p=guide){:target="_blank"} | [link](https://docs.google.com/document/d/1wv6BiRnoNbLFFntYcrf0O8LSODp9GjdhQPlGrfu7aGo/edit?usp=sharing){:target="_blank"} | [link](https://docs.google.com/spreadsheets/d/1_BKRbOxPxiOBnz921bj5kOwnf3VQoo10ert9_HAJUDM/edit?usp=sharing){:target="_blank"} | |
{: .table .table-bordered .table-striped }

For Claudia -> [mockups in spanish for the report](https://9nlybt.axshare.com/)

<!---
----------------------

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

--->
