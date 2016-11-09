---
layout: doc-pages-fr
permalink: /fr/description/overview/
title: "Description du code source"
category: 'description-fr'
lang: fr
ref: description-code-source
weight: 1
---

<span class="label label-info">Coming soon</span>

# Description du code source

<div class="code-preview">
    <div class="dir-explain">
      <code class="url">/protected/</code>
      <ul class="files">
        <li>
          <code>config/</code>
        </li>
        <li>
          <code>modules/</code>        
          <ul class="files">
            <li><code>user/</code></li>
            <li><code>translate/</code></li>
          </ul>
        </li>
        <li><code>models/</code></li>
        <li><code>controllers/</code></li>
        <li><code>views/</code></li>
      </ul>
    </div>

    <div class="table-responsive">
      <table class="table table-bordered table-striped">
        <thead>
          <tr>
            <th>Répertoire</th>
            <th>Fonction</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>config/</code></td>
            <td>Ce répertoire contient les fichiers de configurations selon l’environnement d’exécution du système :
	            <ul>
	            	<li>le fichier “main.php” contient la configuration principale du système</li>
	            	<li>le fichier “test.php” définit les paramètres du système en environnement de test</li>
	            	<li>le fichier “demo.php” définit les paramètres de la plateforme de démonstration</li>
				</ul>
			</td>
          </tr>
          <tr>
            <td><code>modules/user</code></td>
            <td>Ce répertoire contient le module d’authentification des utilisateurs.</td>
          </tr>
          <tr>
            <td><code>modules/translate</code></td>
            <td>Contient le module de traduction des messages du système eRegistrations.</td>
          </tr>
          <tr>
            <td><code>models/</code></td>
            <td>Ce répertoire contient les modèles de données du système eRegistrations.
            	<br>
				Un modèle se décompose en deux classes:
				<ul>
					<li>Une classe de base contenant les attributs, règles de validation, relations, critères de recherche, libellés des colonnes et les scénarios. Cette classe se trouve dans le dossier «_base». Les noms des classes de base commencent par «Base» (ex: BaseEntreprise).</li>
					<li>Une classe qui hérite de la classe de base et qui contient les traitements métiers, les scopes spécifiques et les critères de recherches personnalisés.</li>
				</ul>
			</td>
          </tr>
          <tr>
            <td><code>controllers/</code></td>
            <td>Le répertoire controllers contient les classes assurant la communication entre les modèles et les vues. Les contrôleurs suivent la nomenclature suivante : «ModelController» (ex:EntrepriseController)</td>
          </tr>
          <tr>
            <td><code>views/</code></td>
            <td>A chaque contrôleur correspond un dossier dans le répertoire views et qui contient les éléments de l’interface utilisateur tels que les formulaires et les tableaux.</td>
          </tr>
        </tbody>
      </table>
    </div>

  </div>