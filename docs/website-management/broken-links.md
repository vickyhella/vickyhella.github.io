---
title: Dealing with Broken Links
sidebar_position: 4
---

## Introduction

For maintainers of a documentation website, it's important to fix the broken links to save readers' time and make the documentation look more professional and well-maintained.


## Finding broken links

This section includes some useful link checkers.

### Command-line tools

You can check if a site contains broken links from the terminal. [Broken-link-checker](https://github.com/stevenvachon/broken-link-checker) is the tool that you can choose.

First, you need to install the tool as follows:

```bash
npm install broken-link-checker -g
```

To use the tool, run:

```bash
blc <URL> -ro # check for URLs
blc <path> -ro # check for paths
```

You can run `blc --help` to find more available options.

:::note
You need to replace `<URL>` or `<path>` with the actual ones that you want to find broken links for.
:::

### GitHub actions

Instead of running the command for broken links, you can also add a GitHub action to automate link checks. This documentation project uses the [Markdown link check ](https://github.com/gaurav-nelson/github-action-markdown-link-check) GitHub action to find broken links.

To use this GitHub Action:

1. Create a new file in your project's root, which should be `.github/workflows/action.yml`.
2. Open the file, and copy-paste the following workflow to your file.

  ```yml
  name: Check Markdown links # name of the workflow

  on: 
    push: [main] # when to execute the workflow
    
  jobs:
    markdown-link-check:
      runs-on: ubuntu-latest
      steps:
      - uses: actions/checkout@master # check out your code
      - uses: gaurav-nelson/github-action-markdown-link-check@v1
  ```

  :::note

  The example above is just for simple use cases. To further customize the workflow, see the README file of the link checker.
  :::

### Remark plugin

The third option is using the [remark](https://github.com/remarkjs/remark) plugin, which provides [remark-validate-links](https://github.com/remarkjs/remark-validate-links) and [remark-lint-no-dead-urls](https://github.com/remarkjs/remark-lint-no-dead-urls) to check internal links and external URLs.

#### Install the plugin

To install the plugin

1. Add the plugin package by running the command below:

  ```bash
  yarn add remark-cli remark-validate-links remark-lint-no-dead-urls
  ```

2. Install the plugin:

  ```bash
  yarn install
  ```

#### Check the links

To check the links, run:

```bash
yarn remark --quiet --use remark-validate-links --use remark-lint-no-dead-urls <file_directory>
```

:::note
You need to replace `<file_directory>` with the directory that you need to check links for. To check links for multiple directories, use a space to separate the directories.
:::

To further simplify the process, you can add the command above to the `scripts` section of your `package.json` file as follows:

```
  "scripts": {
    "check-links": "remark --quiet --use remark-validate-links --use remark-lint-no-dead-urls"
  },
```

By doing so, you can easily run `yarn check-links <file_directory>` (equivalent to `yarn remark --quiet --use remark-validate-links --use remark-lint-no-dead-urls <file_directory>`) in your project to check the links.

Additionally, you can add the command to the `test-deploy` GitHub action as follows:

```bash
- name: Install dependencies
  run: yarn install --frozen-lockfile
- name: Check external and internal broken links
  run: yarn run remark --quiet --use remark-validate-links --use remark-lint-no-dead-urls <file_directory>
- name: Test build website
  run: yarn build
```

For more information, see the description of each plugin.

### Chrome extensions

Check My Links is a Chrome extension that allows you to check links on a website.

To use the checker, you can simply install the plugin from [its Chrome Extension page](https://chrome.google.com/webstore/detail/check-my-links/ojkcdipcgfaekbeaelaapakgnjflfglf) and then click the extension icon from the Chrome toolbar on the page you want to check links for.

The extension checks all links on the website. Good links will become green and bad links will become red as follows:

![Check my Links official image](https://lh3.googleusercontent.com/PIFQvmPvomWD50aNPF25dgZtnOEPfayHyWcfn7Gv4xrhyDbXQQNsJwVOKtDOAtCt3r_uCHKRKbjoBblGJb5OqKKE-hg=w640-h400-e365-rj-sc0x00ffffff)

## Fixing broken links

### General practices

When a link is broken, it's possible that the original page is migrated or deleted. Therefore, you can fix it using either of the following methods as needed.

- If the original page is migrated, find where the page is migrated and use the new URL in your docs.
- If the original page is deleted, or you cannot find where it's migrated, delete the link from your docs.

### Handling broken heading links

Usually, a level-2 heading in MD files named `test` is as follows:

```
## This is a Heading
```

When the heading is clicked in a browser, the URL will be `domain/test#this-is-a-heading`. In other words, if the heading text is changed, the link referenced in other docs will be broken.


#### Adding an ID to headings{#heading-id}

To avoid this, you can add an ID to a heading as follows:

```
## This is a Heading {#my-cool-id}
```

In this way, the URL will become `domain/test#my-cool-id`. Maintainers can change the `This is a Heading` text as needed as long as they keep `{#my-cool-id}` unchanged. When other docs need to reference this heading, they can simply use `domain/test#my-cool-id`.

:::note See How it Looks!
The `Adding an ID to Headings` heading on this page uses a `heading-id` ID. You can click the heading and look at its URL.
:::
