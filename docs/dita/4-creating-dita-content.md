---
title: "Lesson 4: Creating DITA Content"
sidebar_position: 4
tags: [DITA, Technical Writing, XML, Creating Content]
---

## Creating a topic in a text editor

DITA files are XML, and XML is plain text. Therefore, you can create an XML file in any text editor.

A basic DITA topic needs an `XML declaration`, a `DOCTYPE` declaration, a `topic`, an `id attribute` on the topic, and a `title`. Here is a minimal valid topic:

```xml
<?xml version="1.0" encoding="UTF-8"?>

<!DOCTYPE topic PUBLIC "-//OASIS//DTD DITA Topic//EN" "topic.dtd">

<topic id="myfirsttopic">

  <title>Hello world</title>

</topic>
```

The topic above is valid, but it doesn’t have any body content. To make a topic useful, you need something like this:

```xml
<?xml version="1.0" encoding="UTF-8"?>

<!DOCTYPE topic PUBLIC "-//OASIS//DTD DITA Topic//EN" "topic.dtd">

<topic id="myfirsttopic">

  <title>Hello world</title>

<body>

  <p>Here is a paragraph</p>

  <ul>

    <li>bulleted lists are nice</li>

    <li>especially if you have at least two items</li>

  </ul>

  <note>And don't forget the notes.</note>

</body>

</topic>
```

## Creating a topic in an XML editor

You can use an editor to create content. The course recommends oXygen, which is not open source and free. So I will further investigate a tool to use later. I might use VSCode for the time being.

## Notes, cautions, and warnings

The `<note>` element lets you create notes, cautions, warnings, and other admonishments.

```xml
<note>

Most surface-feeding ducks are agile and will take to the air easily. Approach these ducks slowly.

</note>
```

The `type` attribute for the `<note>` element is used to indicate different kinds of notes. DITA defines a number of values for the type attribute (**Fun fact**: the Docusaurus framework also uses these note values.):

- note (the default)
- attention
- danger
- caution
- important
- tip

```xml
<note type="warning">

Do not feed bread to ducks. It is unhealthy.

</note>
```

## Bulleted and numbered lists

The most common lists used in DITA are unordered (“bulleted”) lists (`<ul>`) and ordered (“numbered”) lists (`<ol>`).

Both ordered and unordered lists contain one or more list item (`<li>`) element. An example is like this:

```xml
<p>The life cycle of a duck is similar to that of most birds:</p>

<ol>

   <li>Egg</li>

   <li>Hatchling</li>

   <li>Duckling</li>

   <li>Juvenile</li>

   <li>Adult</li>

</ol>
```

:::note

An ordered list is useful for showing things that have a sequence, however, if you need to describe a process, you might be better off using the `<steps>` element in a task topic.

:::

You can also nest a list by starting a new `<ul>` or `<ol>` element inside an `<li>` element:

```xml

<p>Ducks have these features:</p>

<ul>

   <li>Webbed feet for swimming.</li>

   <li>Shorter legs than other waterfowl.</li>

   <li>Distinctive bill.

      <ul>

         <li>Wide and flat for filter feeding.</li>

         <li>Long and narrow for fishing (Mergansers)</li>

      </ul>

   </li>

</ul>
```

In addition to the unordered list, DITA also defines a simple list (`<sl>`) element, which you can use for lists that contain just a few words in each item. The item in a simple list uses the `<sli>` element:

```xml
<p>There are several types of ducks:</p>

<sl>

   <sli>Tree ducks</sli>

   <sli>Surface-feeding ducks</sli>

   <sli>Bay ducks</sli>

   <sli>Sea ducks</sli>

</sl>
```

## Blocks versus inline elements

The distinction between block and inline elements are:

- A block element is a paragraph-level element, such as `<p>` tag, `<li>`, or `<codeblock>`. As a general rule, **a block element is separated vertically on the page**. That is, if you have two `<p>` tags in a row, they are separated into two lines after being rendered.

- An inline element is an element that provides for markup inside a paragraph, such as `<tm>` (trademark), `<i>` (italics), `<xref>` (cross-reference), or `<term>` (term). Inline elements, by default, do not result in line breaks.

:::info

Inline elements are similar to character styles in word processing tools.

However, some inline elements, such as `<fn>` (footnote) and `<indexterm>` (index entry), are processed differently. For example, `<indexterm>` entries are processed to create a back-of-the-book index. The text content of `<indexterm>` does not generally appear at the location where the inline element occurs:

```xml
<p>An inline element<indexterm>inline element</indexterm> <i>does not</i> result in line breaks.</p>
```
:::
