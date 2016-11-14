---
layout: doc-pages-fr
permalink: /fr/installation/automatique/
title: 'Installation automatique via Docker Compose'
category: 'installation-fr'
lang: fr
ref: installation-fr-automatique
weight: 3
---

# Installation automatique via Docker Compose

Ce mode d’installation est destiné à monter une architecture de micro-services. Chaque composant du système fonctionne de façon unitaire dans un conteneur virtuel.

## Pré-requis

Docker est un logiciel libre qui automatise le déploiement d'applications dans des conteneurs logiciels. C’est un outil qui peut empaqueter une application et ses dépendances dans un conteneur isolé.

Docker est disponible pour les plateformes suivantes :  

- Mac OS X
- Windows
- Linux
- AWS
- AZURE


Docker Compose est un outil pour la définition et l'exécution d'applications complexes avec Docker. Avec Compose, un système multi-conteneurs peut être défini dans un seul fichier, puis lancé en une seule commande qui fait tout ce qui doit être fait pour le faire fonctionner.


Docker Compose peut être installé en suivant le guide se trouvant à cette adresse : [https://docs.docker.com/compose/install/](https://docs.docker.com/compose/install/).


L’installation de Docker Toolbox inclus Docker Engine et Compose, donc pour les utilisateurs de MacOSX et Windows cette installation est suffisante.

## Installation

L’installation et le lancement du système peut se faire en une seule commande à partir du répertoire où se trouve le fichier ”docker-compose.yml”

- Ouvrir le terminal et naviguer vers le dossier “docker-eregistrations/”
- Lancer l’installation via docker-compose :
```
docker-compose up -d
```

L’utilitaire télécharge et installe tous les composants nécessaires. Cela peut prendre un peu de temps. Une fois l’installation terminé, le système sera opérationnel en local sur ```https://localhost/```.