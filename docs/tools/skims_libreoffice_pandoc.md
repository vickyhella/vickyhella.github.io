---
title: Skim, LibreOffice, and Pandoc
sidebar_position: 3
---

## Overview

Skim, LibreOffice, and Pandoc are three open-source tools to handle text files.
## Pandoc

Pandoc is used to convert files into another formats from the command line. To see the formats supported, see [pandoc](https://pandoc.org/).

### Installing Pandoc

To install pandoc on Mac, run:

```bash
brew install pandoc
```

### Converting file formats

To convert a file into another format:

```bash
pandoc -s "file to convert including path" -o "[converted file including path]" 

# Example: convert from markdown to pdf
pandoc -s source.md -o target.pdf
```

For more information, see [Installing pandoc](https://pandoc.org/installing.html).

## LibreOffice

LibreOffice is an open-source alternative to Microsoft Office. On top of that, it supports command-line operations. You can use it to convert docs to another format with a single command (prefixed with `soffice`).

## Skim

[Skim](https://skim-app.sourceforge.io/) is an open-source PDF viewer. The reason I recommend it is that it supports real-time refresh. With this feature, you can quickly preview the target translated PDF file.