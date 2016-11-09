---
layout: doc-pages-fr
permalink: /fr/architecture/flux/
title: "Flux de travail typique"
category: 'architecture-fr'
lang: fr
ref: architecture-fr-flux
weight: 2
---

# Flux de travail typique

Le scénario suivant présente le flux de travail typique du système lors de la réception d’une requête utilisateur:

<ul class="step-text">
  <li>
    <p>Une requête utilisateur est envoyée à l’adresse https://mybusiness.cm/process/form/20 et le serveur Web traite la requête en exécutant le contrôleur <code>ProcessController</code>.</p>
  </li>

  <li>
    <p>Le script d’amorçage “index.php” se trouvant dans la racine du projet, crée une instance d’application.</p>
  </li>

  <li>
    <p>L’application obtient des informations détaillées sur la demande de l’utilisateur depuis le composant d’application nommé Request.</p>
  </li>

  <li>
    <p>L’application détermine le contrôleur demandé et l’action avec l’aide du composant UrlManager. Dans cet exemple, le contrôleur se réfère à la classe <code>ProcessController</code>, et l’action se réfère à la méthode <code>actionForm</code> dudit contrôleur.</p>
  </li>
  <li>
  	<p>L’application crée une instance du contrôleur demandé pour traiter la demande de l’utilisateur et appelle l’action. Ensuite il crée et exécute le filtre de contrôle d’accès associés à cette action. L’action est exécutée si elle est autorisée par le filtre.</p>
  </li>
  <li>
  	<p>L’action lit en base de données le modèle Entreprise dont l’ID est 20.</p>
  </li>
  <li>
  	<p>L’action effectue le rendu de la vue nommée « form » avec le modèle.</p>
  </li>
  <li>
  	<p>La vue affiche les attributs du modèle correspondant.</p>
  </li>
  <li>
  	<p>La vue exécute quelques widgets.</p>
  </li>
  <li>
  	<p>Le résultat du rendu de la vue est intégré dans un Layout.</p>
  </li>
  <li>
  	<p>L’action complète le rendu de la vue et affiche le résultat à l’utilisateur.</p>
  </li>
</ul>