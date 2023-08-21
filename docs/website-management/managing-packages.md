---
title: Managing Packages
sidebar_position: 7
---


<Highlight color="#25c2a0">Yarn</Highlight> and <Highlight color="#1877F2">NPM</Highlight> are used to install and manage project dependencies.

This document outlines some common <Highlight color="#25c2a0">Yarn</Highlight> commands.

## Adding Packages

To add a package, run:


```bash
yarn add [package-name]@[version]
# Exmaples
yarn add @docusaurus/core@latest
# Upgrade two packages
yarn add react@latest react-dom@latest
```

For details, see [`yarn add`](https://classic.yarnpkg.com/lang/en/docs/cli/add/).



## Upgrading Packages

To upgrade a package, run:


```bash
yarn upgrade [package-name]@[version]
# Examples
yarn upgrade @docusaurus/core@latest
yarn upgrade @docusaurus/core@latest @docusaurus/plugin-client-redirects@latest @docusaurus/plugin-content-blog@latest @docusaurus/plugin-content-docs@latest @docusaurus/plugin-content-pages@latest @docusaurus/plugin-debug@latest @docusaurus/preset-classic@latest
```

For details, see [`yarn upgrade`](https://classic.yarnpkg.com/lang/en/docs/cli/upgrade/).


