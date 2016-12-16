---
layout: doc-pages
permalink: /framework/http-server/
title: 'HTTP server'
category: 'codebase'
lang: en
ref: http-server
weight: 2
---

# HTTP Server

We use Node.js [HTTP server](https://nodejs.org/dist/latest-v7.x/docs/api/http.html#http_class_http_server) API to configure server that runs application.

In each system it's configured at `/server/services/http-server.js` modules, and configured with [Connect](https://github.com/senchalabs/connect#readme) style middlewares pattern.

## HTTP request resolution order

Usual flow of requests resolution is as follows:

1. Favicon
2. Initialize GZIP compression
3. Serve assets
  - System common assets (from /public folder)
  - eRegistrations common assets (from /node_modules/eregistrations/public)
  - Uploaded files, generated documents and archives (from /uploads)
  - Generate archive on demand (if not found at previous step)
  - Generate data form PDF on demand (if not found at previous steps_
  - Application programs
4. Authentication
5. Application resolution
6. Handle POST submissions
7. Handle SSE channel (server -> client live data propagation)
8. Handle server dedicated GET requests
9. Handle application page request (either server-side rendered or SPA)
