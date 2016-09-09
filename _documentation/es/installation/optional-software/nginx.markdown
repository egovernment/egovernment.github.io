---
layout: doc-pages
permalink: /instalacion/software-opcional/nginx
title: 'eRegistrations - Instalación en NGINX'
lang: es
ref: nginx
---

# NGINX Installation

It's possible to use [NGINX](https://nginx.org/en/) HTTP and reverse proxy server to act as intermediate gate between Node.js server and client connections.

**Linux (Ubuntu):**

It's recommended to use `apt` tool to install on Ubuntu:

```console
$ sudo apt-get install nginx
```

## Setup NGINX site

NGINX needs to be configured to properly serve a website.

### Default configuration

Remove default nginx example configuration site that can interfere with eRegistrations system:

**On Linux:**

```console
$ sudo rm /etc/nginx/sites-{available,enabled}/default
```

### eRegistrations system site configuration

Create a file inside `/etc/nginx/sites-available/` directory named `eregistrations` and insert the following configuration (based on whether or not SSL is going to be used):

**Without SSL:**

```javascript
upstream eregistrations.localhost {
   server 127.0.0.1:3177;
}

server {
   listen 0.0.0.0:80;
   server_name eregistrations.localhost;

   access_log  /var/log/nginx/eregistrations.localhost.access.log;
   error_log  /var/log/nginx/eregistrations.localhost.error.log;

   client_max_body_size 0;
   send_timeout 600s;
   location / {
       proxy_set_header X-Real-IP $remote_addr;
       proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
       proxy_set_header Host $http_host;
       proxy_set_header X-NginX-Proxy true;

       proxy_pass http://eregistrations.localhost/;
       proxy_redirect off;

       proxy_set_header Connection '';
       proxy_http_version 1.1;
       proxy_buffering off;
       proxy_read_timeout 24h;
       chunked_transfer_encoding off;

       if ($request_filename ~* ^.*?\.(eot)|(ttf)|(woff)$){
           add_header Access-Control-Allow-Origin *;
       }
   }
}
```

**With SSL:**

```javascript
upstream eregistrations.localhost {
   server 127.0.0.1:3177;
}

server {
   listen 0.0.0.0:80;
   server_name eregistrations.localhost;
   return 301 https://eregistrations.localhost$request_uri;
}

server {
   listen 0.0.0.0:443;
   server_name eregistrations.localhost;

   access_log  /var/log/nginx/eregistrations.localhost.access.log;
   error_log  /var/log/nginx/eregistrations.localhost.error.log;

   ssl on;
   ssl_certificate /etc/nginx/ssl/server.pem;
   ssl_certificate_key /etc/nginx/ssl/server.key;

   client_max_body_size 0;
   send_timeout 600s;
   location / {
       proxy_set_header X-Real-IP $remote_addr;
       proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
       proxy_set_header Host $http_host;
       proxy_set_header X-NginX-Proxy true;

       proxy_pass http://eregistrations.localhost/;
       proxy_redirect off;

       proxy_set_header Connection '';
       proxy_http_version 1.1;
       proxy_buffering off;
       proxy_read_timeout 24h;
       chunked_transfer_encoding off;

       if ($request_filename ~* ^.*?\.(eot)|(ttf)|(woff)$){
           add_header Access-Control-Allow-Origin *;
       }
   }
}
```

### Enable the site and restart NGINX

**On Linux:**

```console
$ sudo ln -s /etc/nginx/sites-available/eregistrations /etc/nginx/sites-enabled/
$ sudo systemctl restart nginx.service
```
