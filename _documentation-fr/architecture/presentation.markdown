---
layout: doc-pages-fr
permalink: /fr/architecture/structure
title: "Structure"
category: 'architecture-fr'
lang: fr
ref: architecture-fr-structure
weight: 1
---

# Architecture applicative


<img src="../../img/architecture-applicative.png" />
{: .img-responsive }

Le système eRegistrations est conçu sur la base de l’architecture MVC (Modèle-Vue-Contrôleur).
Cette architecture a pour but de séparer la logique métier des considérations d’interface utilisateur, de sorte que les développeurs peuvent plus facilement changer chaque partie sans affecter l’autre.


Le contrôleur est créé par l'objet application lorsque l'utilisateur en fait la demande. Quand un contrôleur s'exécute, il effectue l'action demandée, ce qui habituellement appelle les modèles nécessaires et affiche la vue appropriée. Une action, dans sa forme la plus simple, est juste une méthode de la classe contrôleur dont le nom commence par action.


L’active Record:

- Représente les modèles et leurs données.
- Représente les associations entre ces modèles.
- Représente les hiérarchies d'héritage à travers les modèles en relation.
- Valide les modèles avant la sauvegarde dans la base de données.
- Effectue les traitements liés à la base de données selon la logique orientée objet.
