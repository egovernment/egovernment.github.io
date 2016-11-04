---
layout: doc-pages
permalink: /installation/nginx
title: 'nGinx Configuration'
category: 'installation'
weight: 7
lang: en
ref: nginx
---

# nGinx "site" Configuration

Especially in production environment, it's recommened to use some form of HTTP proxy on top Node.js server. It allows to configure more secure HTTP server setup, and provides a way to run many systems on one server.

[nGinx](https://nginx.org/en/) is perfect choice, below is our recommendation for nGinx reverse proxy site setup

Assuming that Node.js server will be run at `3177` port and system is meant to be accessible at `eregistrations.org`, the configuration of _site_ should be as follows:

```
upstream eregistrations.org {
   server 127.0.0.1:3177;
}

server {
   listen 0.0.0.0:80;
   server_name eregistrations.org;
   return 301 https://eregistrations.org$request_uri;
}

server {
   listen 0.0.0.0:443;
   server_name eregistrations.org;

   access_log  /var/log/nginx/eregistrations.org.access.log;
   error_log  /var/log/nginx/eregistrations.org.error.log;

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

       proxy_pass http://eregistrations.org/;
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
