---
title: "Lesson 3: Metadata"
sidebar_position: 3
tags: [DITA, Technical Writing, XML, metadata]
---

## What is metadata

*Metadata* provides information about information.

For example, word processing apps often have document properties, which tell you who created the file and on what date it was last modified. The author and modification date in the document properties are not part of the text that is displayed. Document properties are metadata about the document itself.

Metadata provides different ways to classify information. For example, you can:

- Label information with a document type, like “white paper” or “proposal”
- Associate information with a specific product number
- Indicate a user level, like “beginner,” “intermediate,” or “expert”
- Indicate the audience for the content, like “manager” or “employee”
- Provide status information for a topic, like “draft,” “review,” or “final”
- Provide an expiration date when information is no longer valid

After you assign metadata to your content, you (or your reader) can use it to:

- Find information efficiently
- Support governance effort (control when information is made public or removed from a web site)
- Personalize information (your reader could request only beginner information)
- Filter information for different delivery variants (such as Windows or Macintosh)
- Reuse information efficiently
- Indicate the language used in content
- Manage project status

In DITA and other XML formats, metadata is **encoded inside your topics, either at the topic level or on specific elements**.

For example, DITA requires one piece of metadata: every topic must have an id attribute, which is often assigned automatically by specific tools or content management systems. Here is an example of a topic with an `id` attribute:

```xml
<topic id="xyz">

   <title>Your title here</title>

   <body>

      ....

   </body>

</topic>
```

Other elements can also use the `id` attribute, for example, `<table id="abc">`.

You may require additional metadata. It’s common to include the language of the topic with the `xml:lang` attribute.

```xml
<topic id="xyz" xml:lang="en-us">

<topic id="abc" xml:lang="de-de">
```

As a general rule, **your readers do not see the metadata**; they see the results of filtering or use the metadata when they search the content.

## How to use metadata

You can assign metadata in several locations:

- At the [topic level](#topic-level)
- At the [element level](#element-level)
[map file level](#map-file-level)

### Topic level

At the topic level, DITA provides a `<prolog>` element to store metadata for the entire topic. Here is an example of basic topic metadata:

```xml
<topic id="xyz">

  <title>Metadata example</title>

  <prolog>

    <author>Sarah O’Keefe, Scriptorium</author>

    <critdates>

      <created date="2015-05-01"/>

    </critdates>

  </prolog>

  <body>

    <p>Body content goes here</p>

  </body>

</topic>
```

The author is specified in the `<author>` element, and `<critdates>` provides a spot for `<created>` and `<revised>` date elements.

Some useful prolog elements are:
- `<author>`: the content author
- `<critdates>`: critical dates, such as `<created>` and `<revised>`
- `<copyright>`: copyright year `<copyryear>`, and copyright holder `<copyrholder>`
- `<vrm>`: product version, release, and modification information

:::caution

Use the `<prolog>` metadata only for **system information**, such as the author and created/revised dates. DITA doesn’t use `<prolog>` metadata to filter topics.

:::

### Element level

At the element level, you cab use attributes to specify metadata. Here is an example:

```xml
<step>

    <cmd>Locate the duckling mash box.</cmd>

    <info audience="novice">Consult the side of the duckling mash box to determine 

          how much mash your ducklings need.</info>

</step>

<step>

    <cmd>Measure out the mash for your ducks. </cmd>

</step>

<step>

    <cmd> Pour in the blender.</cmd>

</step>

<step>

    <cmd>Put in feeding pan.</cmd>

</step> 
```

Note that the id can be used to provide measurements. That is, when you generate your output, the `audience = “novice”` metadata can be used to suppress the `<info>` element for an expert-level audience.

### Map file level

At the map level, you can specify metadata in the `<topicref>` elements that reference topics. This allows you to suppress entire topics when you generate output. Here is an example:

```xml
<topicref href="abc.dita">

<topicref href="def.dita" audience="novice">
```

By default, DITA provides you with three attributes that support filtering or conditional processing. They are:

- audience
- product
- platform

If you need additional or different filtering attributes, you need to specialize to define additional metadata. Some common requirements are:

- customer, for customer-specific information
- region, for information that applies only to specific geographic areas
- product-family, for information that applies to a group of products
