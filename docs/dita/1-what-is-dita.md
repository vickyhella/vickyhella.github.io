---
title: "Lesson 1: What is DITA"
sidebar_position: 1
tags: [DITA, Technical Writing, XML]
---

## Markup languages

DITA is built on the XML markup language (similar to HTML). They both use `<` and `>` to identify the markup tags (for example, `<title>` and `</title>`).

Besides, tags can also have attributes in the form of `attribute="value"`.

**Comparing HTML and XML**:
- HTML can be quite forgiving when you forget to close tags or put quotation marks around attribute values; XML is strict in requiring them.
- HTML uses a predefined set of tags (`<body>`, `<p>`, `<span>`, and so on). In XML, the tags are **defined in a separate file** and can be changed and added to.
- In HTML, the “root” tag is `<html>`. In DITA, the name of the root tag depends on the type of topic you’re creating, such as `<concept>`, `<task>`, or `<reference>`.

## DITA is structured authoring

Structured authoring is a **publishing workflow** that lets you define and enforce consistent organization of information in documents.

The elements defined in DITA have a very specific hierarchy and relationships.

## What is DITA topic?

A DITA topic is the **basic unit of authoring and reuse**. Each topic can address a single idea or answers a single question. These topics can then be **reused in any order** you want.

All DITA topics must have at least a <ColorText color="blue">title element and an id attribute for the root topic</ColorText>. A valid DITA topic looks like this:

```xml
<topic id="sample">

   <title>Topic title goes here</title>

</topic> 
```

To make your topics reusable:

- A topic should address a single idea or answer a single question.
- A topic should contain enough information to stand on its own.
- A topic should not assume any context. You should not make assumptions about what comes before or after the topic.
- A single file should contain a single topic.
