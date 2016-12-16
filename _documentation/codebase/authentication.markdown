---
layout: doc-pages
permalink: /framework/authentication/
title: 'Authentication & Applications routing'
category: 'codebase'
lang: en
ref: authentication
weight: 3
---

# Authentication

We rely on traditional email and password based authenticated, no external authentication services are supported.

## Password hashing

On production systems passwords are stored as [bcrypt](https://github.com/kelektiv/node.bcrypt.js#nodebcryptjs) hashes.
On development instances (assuming you didn't try to compile provided bcrypt package) the passwords are stored in plain text.

## Sessions

Sessions are maintained through signed server restart persistent HTTP cookies

# User Applications

System consist of numerous independently configured applications, where as application we can understand specific web application interface.

List of applications configured in eRegistrations system:

- `public` - Public pages
- `user` - Investor panel
- `business-process-{serviceName}` (excluding `business-process-submitted`) - Service registration panel (Part A forms)
- `business-process-submitted` - Submitted registrations overview panel (Part B view for investor)
- `manager-registration` - Notary registration panel (for notary accounts that are registered but with no yet all data forms filled to pursue files registration)
- `manager` - Notary panel
- `official-{stepName}` - Officials processing panels, usually each processing step has dedicated application. However if some steps share same processing interfaces, then they might be configured to use same common application.
- `meta-admin` - Translations and other meta data administrator panel
- `users-admin` - User accounts administrator panel
- `inspector` - All submitted files (registrations) inspector panel
- `statistics` - Statistics panel
- `supervisor` - Overview of processing process for all submitted files
- `manager-validation` - Administrator of notary accounts

Not all of them are configured in each system. List of all applications configured can be found in system's `/apps` folder.

Each application has independently configured URL tree, for both normal GET requests (so urls seen in address bar, at `/apps/{appName}/routes.js`), and POST requests (urls to which forms are submitted, at `/apps/{appName}/controller`).

When switching from one application to another, the urls from other applications do not work. Therefore e.g. public pages content cannot be explored on same domain when we're logged-in with some user account.

# Context routing

When request reaches the server, the page content is resolved via _authentication_ and _application resolution_.

If there's no user logged-in, then automatically `public` application is resolved and it's content is provided to the client.

If user is logged-in, then application is resolved on basis of currently chosen role (`user.currentRoleResolved` property) is resolved, and request is handled in context of that application.

Default application resolution logic is described at [eregistrations/model/user/app-resolvers.js](https://github.com/egovernment/eregistrations/blob/master/model/user/app-resolvers.js#L49-L69)

The flow is that if current user role is of `user` or `manager`, then we resolve either `user`, `manager`, or `business-process-*` application that exposes data of specific registration.

For other roles, usually it's 1:1 matching as e.g. `officialProcessing` role resolves `official-processing` application, or `metaAdmin` role resolves `meta-admin` application.
Still that behavior (especially in context of `official-*` applications) is subject to customizations in end systems.
