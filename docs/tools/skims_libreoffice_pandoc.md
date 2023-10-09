---
title: Skim, LibreOffice, and Pandoc
sidebar_position: 4
---

## Overview

Skim, LibreOffice, and Pandoc are three open-source tools to handle text files.

## Skim

[Skim](https://skim-app.sourceforge.io/) is an open-source PDF viewer. The reason I recommend it is that it supports real-time refresh. With this feature, you can quickly preview the target translated PDF file.

## LibreOffice

LibreOffice is an open-source alternative to Microsoft Office. On top of that, it supports command-line operations. You can use it to convert docs to another format with a single command (prefixed with `soffice`).

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

### Known issues

#### Pandoc doesn't support Chinese characters

By default, Pandoc doesn't support Chinese characters. As a result, if you convert a markdown file that contains Chinese characters, the pandoc command will report an error similar to the following one:

```
Error producing PDF.
! LaTeX Error: Unicode character 简 (U+7B80)
               not set up for use with LaTeX.
```

In this case, you can use the following workaround:

1. Install LaTex on your computer.
1. In the beginning of your markdown file, specify a font that supports Chinese characters. In the example below, I use `Source Han Sans CN`:

    ```js
    ---
    CJKmainfont: Source Han Sans CN
    ---
    ```
1. Add the `--pdf-engine` option to your pandoc command:

    ```sh
    pandoc -s source.md -o target.pdf --pdf-engine=xelatex
    ```

After this, you should be able to convert Chinese files properly.

:::info

Instead of modifying the markdown files (step 2), you can also specify the font in the command as follows:

```bash
pandoc -s source.md -o target.pdf --pdf-engine=xelatex -V CJKmainfont="Source Han Sans CN""
```

For more other possibilities, see [this stack overflow answer](https://stackoverflow.com/questions/18178084/pandoc-and-foreign-characters/48090656#48090656).
:::
