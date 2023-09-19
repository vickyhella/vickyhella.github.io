---
title: Converting Markdown to PDF with Pandoc
sidebar_position: 4
---

## Pandoc command

To convert a markdown file to pdf, use the following command:

```sh
pandoc -s source.md -o target.pdf
```

## Known issues

### Pandoc doesn't support Chinese characters

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