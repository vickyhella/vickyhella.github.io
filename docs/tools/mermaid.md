---
title: Using Mermaid to Create Diagrams
sidebar_position: 3
---
flowchart LR

[Mermaid](https://mermaid.js.org/) is a JavaScript based diagramming and charting tool that renders Markdown-inspired text definitions to create and modify diagrams dynamically. 

## Installing Mermaid

### Using the npm package

You can install Mermaid using the npm package:

```bash
# NPM
npm install mermaid
# Yarn
yarn add mermaid
# PNPM
pnpm add mermaid
```

For the Docusaurus framework, run:

```bash
yarn add @docusaurus/theme-mermaid
```

### Hosting mermaid on a web page

You can also add the Mermaid link in your HTML file:

```html
<script src="https://cdn.jsdelivr.net/npm/mermaid@10/dist/mermaid.min.js"></script>
```

## Creating a diagram with Mermaid

```mermaid
graph TD;
    A-->B;
    A-->C;
    B-->D;
    C-->D;
```

<pre class="mermaid">
  <code>graph TD;
      A-->B;
      A-->C;
      B-->D;
      C-->D;
  </code>
</pre>

```Mermaid
graph TD;
    A-->B;
    A-->C;
    B-->D;
    C-->D;
```

## References

- [Docusaurus Mermaid config](https://docusaurus.io/docs/next/markdown-features/diagrams#configuration)