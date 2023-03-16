---
title: Dealing with Broken Links
sidebar_position: 4
---

## Introduction

When maintaining the project documentation, it's important to fix the broken links to save readers' time and make our documentation look more professional and well-maintained.

<!--
## Link Checkers (Pending)

This section will include some link checkers that I found useful.

### Coming Soon (Pending)

-->

## How to Fix

When a link is broken, it's possible that the original page is migrated or deleted. Therefore, we can fix it using either of the following methods as needed.

- If the original page is migrated, find where the page is migrated and use the new URL in our documentation.
- If the original page is deleted, or we cannot find where it's migrated, delete the link from our documentation.

## More Info

### Adding an ID to Headings{#heading-id}

Usually, a level-2 heading in MD files named `test` is as follows:

```
## This is a Heading
```

When the heading is clicked in a browser, the URL will be `domain/test#this-is-a-heading`. In other words, if the heading text is changed, the link referenced in other docs will be broken.

To avoid this, we can add an ID to headings as follows:

```
## This is a Heading {#my-cool-id}
```


In this way, the URL will become `domain/test#my-cool-id`. Maintainers can change the `This is a Heading` text as needed as long as they keep `{#my-cool-id}` unchanged. When other docs need to reference this heading, they can simply use `domain/test#my-cool-id`.

:::note See How it Looks!
The `Adding an ID to Headings` heading on this page uses a `heading-id` ID. You can click the heading and look at its URL.
:::
