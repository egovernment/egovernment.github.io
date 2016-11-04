---
layout: doc-pages-fr
permalink: /documentation-fr/installation/manuelle
title: 'Installation manuelle'
category: 'installation-fr'
lang: fr
ref: installation-fr-manuelle
weight: 2
---

<span class="label label-info">Coming soon</span>

# Installation manuelle

## Pré-requis

Le système eRegistrations peut être installé sur différents systèmes d’exploitation : Linux, Mac OS et Windows.

Une mise en service standard du système nécessite l’installation des composants logiciels de base :

| Composant | Logiciel | Version  | Documentation |
| --- | --- | --- | --- |
| Serveur web | Apache | 2.2.31+| [lien](http://httpd.apache.org/docs/) |
| Reverse proxy | nginx | 1.11+ | [lien](https://nginx.org/en/docs/) |
| Base de données | MySQL| 5.5+ | [lien](https://dev.mysql.com/downloads/mysql/) |
| Interpréteur | PHP | 5.4.25+ | [lien](http://php.net/) |
| Framework| Yii| 1.1.17| [lien](http://www.yiiframework.com/download/) |
| Impression PDF| WkHTMLtoPDF| 0.12.3+| [lien](http://wkhtmltopdf.org/downloads.html) |
{: .table }

## Extensions PHP requises

| curl | dom | fileinfo | gd | imagick | json |
| mysqli | opcache | pdo | pdo_mysql | soap | xmlreader |
| mbstring | mcrypt | memcached | xmlrpc | xmlwriter | zip |
{: .table .table-bordered }


## Configuration Apache et Nginx

Le système peut fonctionner correctement avec une installation par défaut d’Apache. Nginx peut être utilisé comme Reverse Proxy avec l’interface PHP-FPM (FastCGI Process Manager).

Pour en savoir plus : [voir ici](http://www.yiiframework.com/doc/guide/1.1/fr/quickstart.apache-nginx-config).


## Installation de la base de données

La base de données eRegistrations peut être installée à partir du fichier script SQL fourni. L’installation se fait à travers le terminal ou via un utilitaire de gestion comme [PHPMyAdmin](https://www.phpmyadmin.net/downloads/).


Créer la base de données :

```sql
CREATE DATABASE ‘ eregis_db ‘ CHARACTER SET utf8 COLLATE utf8_general_ci; GRANT ALL ON ‘ eregis_db ‘.* TO ‘username‘@localhost IDENTIFIED BY ‘password’;
```

Importer la base de données : 

```sql
mysql -u username -p password eregis_db < script.sql
```


## Mise en service du système
Après avoir installé les prérequis, le système peut être mis en service en faisant une copie du code logiciel dans un dossier {project_folder} accessible par le serveur web.


La configuration des paramètres du système se fait à travers le fichier : « {project_folder}/protected/config/main.php »

Exemple de configuration de la base de données au niveau de l’application :

```sql
‘db’ => [
‘connectionString’=>’mysql:host=127.0.0.1;dbname=eregis_db’,
‘username’ => ‘database_username’,
‘password’ => ‘database_password’,
‘charset’ => ‘utf8’,
‘tablePrefix’ => ‘tbl_’,
‘schemaCacheID’ => ‘MemCache’,
‘schemaCachingDuration’ => 640800,
],
```
