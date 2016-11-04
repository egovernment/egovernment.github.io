---
layout: doc-pages-fr
permalink: /fr/concept
title: 'Concept'
lang: fr
category: concept-fr
ref: doc-fr-concept
---

# Le concept "eRegistrations"

Le système eRegistrations est un logiciel qui permet de créer rapidement des applications web de gouvernement électroniques par lesquelles les usagers du service public peuvent demander des inscriptions simultanées auprès des administrations publiques avec **un formulaire unique**, **un seul jeu de documents** et un **paiement unique**. 

- Nous utilisons ici le mot "inscription" dans un sens large; cela désigne toute autorisation ou acceptation de la part d'une entité publique d'une requête ou déclaration faite par l'usager au service public. Le résultat de cette "inscription" est habituellement un numéro et/ou un document (appelé certificat, licence, permis, autorisation, etc.)

- **eRegistrations** est le nom du logiciel/système sur la base duquel les applications spécifiques sont développées.

- **eRegistrations** is the name of the software/system on the basis of which specific applications are developed.

- Les **applications** résultantes peuvent être appelées "guichet unique électronique" ou, plus justement, "services en ligne". Dans ce cas, le "service" est en effet un service regroupant différentes agences qui agissent comme une seule.

<div class="row" style="margin-bottom:40px;">
	<div class="col-md-6">Les procédures administratives sont toujours, par essence, un échange d'informations (données et documents) entre un usager et une ou plusieurs administrations, indépendemment du contenu des données et des documents. Simplifier une procédure administrative consiste à réduir au minimum la quantité de données, de documents et de paiements demandés aux usagers et les interactions entre les usagers et les agences participantes. Idéalement, l'usager remplit un seul (et court) formulaire, donne un seul (et limité) jeu de documents et effectue un seul paiement.</div>	
	<div class="col-md-4">
		<a class="btn btn-default" href="https://view.officeapps.live.com/op/embed.aspx?src=http%3A%2F%2Fbusinessfacilitation%2Eorg%3A80%2Fppt%2Fgood_OSS%2Eppt&wdAr=1.3333333333333333" target="_blank"><img class="img-responsive img-thumbnail" src="/img/concept-1.png" style="max-height:200px;"><p class="text-gray">Cliquez pour voir le diaporama</p></a>
	</div>
</div>

<div class="row" style="margin-bottom:40px;">
	<div class="col-md-6">
		Les services en ligne/applications développées sur la base de eRegistrations sont composées des parties suivantes :
		<ul>
			<li>la partie A (réception ou "création du dossier"): création et envoi par l'usager de son dossier d'application</li>
			<li>la partie B (back office or “traitement du dossier”)</li>
			<li>la base de données de l'usager: stockage des données de l'usager, du contenu de ses dossiers d'application et des certificats d'inscription émis par les institutions participantes</li>
			<li>les statistiques, traduction et droits d'accès au système</li>
		</ul>
		Voir aussi le document "<a href="https://unctad.atlassian.net/wiki/display/BPA/Structure+of+eRegistrations-based+applications" target="_blank">Structure des applications basées sur eRegistrations</a>".
	</div>
	<div class="col-md-4">
		<a class="btn btn-default" href="https://view.officeapps.live.com/op/view.aspx?src=http%3A%2F%2Fbusinessfacilitation.org%2Fppt%2FeRegistrations-Standard%2520structure.pptx" target="_blank"><img class="img-responsive img-thumbnail" src="/img/concept-2.png" style="max-height:200px;"><p class="text-gray">Cliquez pour voir le diaporama</p></a>
	</div>
</div>

<div class="row" style="margin-bottom:40px;">
	<div class="col-md-6">
		La base de données de l'usager est la partie central de toute application eRegistrations et constitue une des différences principales entre ces applications et les applications traditionnelles de gouvernement électronique, qui prêchent pour l'inter-opérabilité des systèmes/bases de données des institutions. Au contraire, la philosophie eRegistrations est de créer une base de données depuis laquelle les informations de l'usager sera partagée avec les institutions publiques et où l'information émise par ces institutions sera également stockée. L'inter-opérabilité au sein des institutions publiques est obtenue par cette base de données de l'usager. 
	</div>
	<div class="col-md-4">
		<a class="btn btn-default" href="https://view.officeapps.live.com/op/embed.aspx?src=http%3A%2F%2Fbusinessfacilitation%2Eorg%3A80%2Fvienna%2Fimages%2Fbasic-principles%2Epps&wdAr=1.3333333333333333" target="_blank"><img class="img-responsive img-thumbnail" src="/img/concept-3.png" style="max-height:200px;"><p class="text-gray">Cliquez pour voir le diaporama</p></a>
	</div>
</div>

Les applications eRegistrations sont développées sur la base de la structure décrite ci-dessous, indépendement du nombre d'institutions participantes et du type d'inscription ou de certificats qu'elles délivrent. Que le service porte sur la création d'entreprise, les permis de constructions, les licences d'activités, les opérations 'import/export n'a pas d'importance. 

Le but de la **partie A** d'une application eRegistrations est de :
<ul>
	<li>déterminer, pour chaque usager, quelles inscriptions lui sont obligatoires et/ou facultatives (A1); pour les inscriptions sélectionnées (A2), quels sont les données, documents et paiements qui doivent être fournis (A3)</li>

	<li>générer un formulaire et contrôler son remplissage (A4), générer une liste des documents nécessaires et contrôler leur chargement (A5), indiquer le montant total à payer (A6)</li>

	<li>donner à l'usager une opportunité pour réviser sa demande, la certifier et l'envoyer (A7).</li>
</ul>


La **partie B** (back office) des applications eRegistrations organise le flux de l'information entre la base de données de l'usager et les institutions participantes. Cela apporte l'information nécessaire à chaque institution (données, documents et indication des coûts payés) et ramène les documents et certificats émis par ces institutions.  

Une autre fonction de la partie B (nous pourrions probablement l'appeler **Partie C**) est de produire des statistiques : 
<ul>
	<li>Analyse des demandes : type et quantités des demandes, âge, sexe, nationalité, région, activités, etc. - n'importe quelle donnée pertinente</li>

	<li>Temps de traitement (par institutions, opérateur, etc.) – les goulots d'étranglement du traitement, etc.</li>
</ul>


