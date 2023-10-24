---
title: "Lesson 2: DITA Topics"
sidebar_position: 2
tags: [DITA, Technical Writing, XML, Topics]
---

## Introduction

A DITA topic is a **block of content**.

All DITA topic types are **related to a common or generic topic type**. The generic topic type is then “specialized” into a number of specific topic types.

The “standard” DITA topic types include:

- **Concept**: contains conceptual information; answers the question “Why?”
- **Task**: contains step-by-step procedural information; answers the question “How?”
- **Reference**: contains reference information; answers the question “What?”
- **Glossary entry**: defines a single term; answers the question “What does this mean?”

## 1. The generic topic type

All DITA **topic types are based on a single generic topic type**. The generic topic type is used as the basis to create the specific topic types.

All DITA topics have this general structure:

```xml
<topic id="sample">

   <title>Topic title goes here</title>

   <shortdesc>A short description</shortdesc>

   <body>

        (Most of the elements go here.)

   </body>

</topic> 
```

- `<shortdesc>`: short description, provides a 2-3 sentence summary of the topic content.
- `<title>` is the only required element in a topic.
- `<body>` contains the bulk of the information in the topic. In the specific topic types, the body element has a related name, such as `<conbody>` for concepts and `<taskbody>` for tasks.

:::info

Although you can use the generic topic type for authoring content, it’s much better to use one of the specific topic types, such as concept, task, and reference.

:::

## 2. Concept topics

A concept topic answers the question “Why”. It provides background information about a subject that the reader needs to know.

Concepts usually contain **paragraphs of text and lists**, but also include **notes, tables, and graphics** needed to understand the ideas behind a particular subject.

Common elements used in a concept topic include:

- `<conbody>`: the body of the concept topic
- `<p>`: a paragraph
- `<ul>`: an unordered or bulleted list
- `<ol>`: an ordered or numbered list
- `<li>`: a list item inside a `<ul>` or `<ol>`
- `<fig>`: a figure, including an optional title
- `<image>`: a graphic inside a figure, or inline in text
- `<section>`: a subdivision in the topic, with an optional title

:::info Comparing `fig` and `image`

The `fig` tag is used to semantically organize the content of images, videos, audios or even charts or tables, block of codes in the HTML document. The `image` tag is used to add an image to an HTML page. `<img>` tag can only insert an image.

:::

## 3. Task topics

A task topic answers the question “How do I”. It includes step-by-step instructions to complete a procedure. DITA also allows step results, graphics, notes, and **one level of substeps**.

:::note

Technical documentation is often heavy on tasks.

:::

DITA provides two task types:
- Strict task: requires all elements to appear in a specific order, only allows one `<example>` element, and has two very formal elements for steps (`<steps>` or `<steps-unordered>`
- General task: allows more flexibility in the order of the elements, allows multiple `<example>` elements, and allows a `<steps-informal>` element for the steps, which can contain much more varied content.

Strict tasks are appropriate for items that require step-by-step instructions, while general tasks are useful for process overviews.

Common elements used in a strict task topic include:

- `<taskbody>`: the body of the task topic
- `<steps>`: the sequence of actions
- `<step>`: each individual action
- `<cmd>`: the action the user takes, a **required element in a `<step>`**
- `<info>`: additional information about the step
- `<stepresult>`: what happens after performing an action
- `<stepxmp>`: an example of how to perform the step
- `<example>`: an example of how to complete the entire task

## 4. Reference topics

A reference topic answers the question “What is it”. A reference topic typically contains descriptive facts, such as the syntax of a command or API function call.

Reference topics are similar to dictionary entries and provide facts only.

Common elements used in a reference topic include:
- `<refbody>` the body of the reference topic
- `<section>` a subdivision in the reference topic, with an optional title
- `<table>` a table
- `<fig>` a figure, including an optional title
- `<properties>` a list of properies
- `<refsyn>` a syntax diagram

## 5. Glossary entry topics

A glossary entry topic answers the question “What does this word or phrase mean”. Glossary topics typically contain one term, along with one or more definitions.

Common elements used in the glossary topic are:
- `<glossentry>` the glossary entry topic type
- `<glossterm>` the word or phrase
- `<glossdef>` the definition of the glossary term

## 6. Specialization

Specialization lets an information architect **create elements and attributes that fit your organization better** than what is provided in default DITA. The elements created through specialization are based on existing elements in DITA.

You might need specialization to support unique requirements, such as:

- Creating new elements
- Creating new attributes
- Creating new names for elements

For example, you might require a set of language-specific `<codeblock>` elements, such as `<codeblock-java>` or `<codeblock-php>` to distinguish between Java and PHP code examples. This could also be accomplished by creating a new language attribute for the `<codeblock>` element: `<codeblock language=”java”>` or `<codeblock language=”php”>`.

:::caution

Be careful with specialization. You must balance the value gained from specialization against the cost of implementing and maintaining specializations.

:::

In addition to specialization, <ColorText>constraints</ColorText> allow you to eliminate elements that are unneeded. For example, if your are not documenting software code, you can eliminate `<codeblock>` and `<codeph>` (code phrase). Constraining reduces the number of elements presented to the authors, which can make their lives a little easier.
