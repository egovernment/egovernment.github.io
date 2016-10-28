---
layout: doc-pages
permalink: /installation/image-processing
title: 'Image Processing Software'
category: 'installation'
weight: 5
lang: en
ref: image-processing
---

# Installation of Image Processing Software

To ensure proper processing of images (generation of thumbnails, or PDF image previews), following sofware needs to be ensured:

## GraphicsMagick -> http://www.graphicsmagick.org/

Needed to ensure proper processing of images (generation of thumbnails, or PDF image previews), following sofware needs to be ensured:

### Installation notes per system:

#### macOS/OSX

Rely on [homebrew](http://brew.sh/) package manager:

```
brew install graphicsmagick
```

#### Linux

Rely on distribution specific package distribution channel, e.g on Ubuntu:

```
apt-get install graphicsmagick
```

#### Windows

Download installation file from: [ftp.graphicsmagick.org](ftp://ftp.graphicsmagick.org/pub/GraphicsMagick/windows/)

## GhostScript -> http://www.ghostscript.com

Needed for GraphicsMagick, to make PDF previews possible

### Installation notes per system:

#### macOS/OSX

Rely on [homebrew](http://brew.sh/) package manager:

```
brew install ghostscript
```

#### Linux

Rely on distribution specific package distribution channel, e.g on Ubuntu:

```
apt-get install ghostscript
```

#### Windows

Download installation file from: [www.ghostscript.com](http://www.ghostscript.com/)
