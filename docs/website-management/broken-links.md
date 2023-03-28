---
title: Dealing with Broken Links
sidebar_position: 4
---

## Introduction

When maintaining the project documentation, it's important to fix the broken links to save readers' time and make the documentation look more professional and well-maintained.


## Finding Broken Links

This section will include some link checkers that I found useful.

### Command-Line Tools

You can check if a site contains broken link from the terminal. [Broken-link-checker](https://github.com/stevenvachon/broken-link-checker) is the tool I found useful.

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

### GitHub Actions

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

## Fixing Broken Links

When a link is broken, it's possible that the original page is migrated or deleted. Therefore, you can fix it using either of the following methods as needed.

- If the original page is migrated, find where the page is migrated and use the new URL in your docs.
- If the original page is deleted, or you cannot find where it's migrated, delete the link from your docs.

## More Info

### Adding an ID to Headings{#heading-id}

Usually, a level-2 heading in MD files named `test` is as follows:

```
## This is a Heading
```

When the heading is clicked in a browser, the URL will be `domain/test#this-is-a-heading`. In other words, if the heading text is changed, the link referenced in other docs will be broken.

To avoid this, you can add an ID to headings as follows:

```
## This is a Heading {#my-cool-id}
```


In this way, the URL will become `domain/test#my-cool-id`. Maintainers can change the `This is a Heading` text as needed as long as they keep `{#my-cool-id}` unchanged. When other docs need to reference this heading, they can simply use `domain/test#my-cool-id`.

:::note See How it Looks!
The `Adding an ID to Headings` heading on this page uses a `heading-id` ID. You can click the heading and look at its URL.
:::
