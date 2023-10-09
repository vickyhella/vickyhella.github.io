---
title: Converting Markdown to PDF with Markdown PDF
sidebar_position: 2
---

You can use the [Markdown PDF](https://marketplace.visualstudio.com/items?itemName=yzane.markdown-pdf) VSCode extension to easily convert a markdown file to PDF. It is a customizable tool with the benefits below：

- Supports custom css styles
- Easy to install as it's provided as a VSCode extension
- Highly customizable

## How to convert

To convert a markdown file to PDF:

1. Install the [Markdown PDF](https://marketplace.visualstudio.com/items?itemName=yzane.markdown-pdf) extension in VSCode.
1. Open your markdown file and then press **CMD+Shift+P**.
1. Enter **Markdown PDF** and choose **Markdown PDF: Export (pdf)**.

You can also specify your own CSS file. To do so:

1. Press **CMD+Shift+P**.
1. Enter **Markdown PDF** and choose **Markdown PDF: Export (settings.json)**.
1. In the file that is opened, add a line as follows:

    ```json
    "markdown-pdf.styles": [
        "src/vue.min.css"
      ]
    ```

    Replace `src/vue.min.css` with the actual CSS you want to use.

    :::info

    The [Markdown Preview Enhanced](https://marketplace.visualstudio.com/items?itemName=shd101wyy.markdown-preview-enhanced) extension uses a lot of CSS styles that are simple and pretty. To use a built-in css style of this extension, go to the following location to find the css files:

    ```
    /Users/username/.vscode/extensions/shd101wyy.markdown-preview-enhanced-0.6.10/node_modules/@shd101wyy/mume/styles/preview_theme
    ```

    :::