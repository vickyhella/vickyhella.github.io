---
title: "Lesson 6: Creating Relationships Among Topics"
sidebar_position: 6
tags: [DITA, Technical Writing, XML, Topic Relationships]
---

## Map files

Map files are how you organize content for delivery. They are like a table of contents: they create sequence and hierarchy among topics.

You generally do not add all available topics to a map file—just the ones you want included in a deliverable. 

Map files are made up mainly of the following components:
- `topicref` elements, which provide a link to a specific topic
- `mapref` elements, which provide a link to another map

### Example 1: sequence and hierarchy

In a map file, you put various `topicrefs` in order to indicate sequence, and nest topics to indicate hierarchy. Consider the following example:

```xml
<map>

 <title>My first map</title>

 <topicref href="ducks.dita">

   <topicref href="range.dita"/>

   <topicref href="size.dita"/>

   <topicref href="nests.dita"/>

  </topicref>

</map>
```

The result is a table of contents structured like this:

- Ducks
  - Range
  - Size
  - Nests

### Example 2: reference map files inside map files

In addition to linking to topics, you can reference map files inside map files. In this approach, the subordinate maps (`submaps`) are usually a collection of related content. For example, you can create a chapter-level map file for each chapter in a book, and then reference those chapter-level map files inside your main book-level map file.

Instead of a `topicref`, a reference to a map uses a `mapref`. To use duck map content as a component of another map, insert it into the parent map, as shown here:

```xml
<topicref href="fish.dita">

<topicref href="shorebirds.dita">

<mapref href="ducks.ditamap" format="ditamap"/>
```

## Transforming map files into outputs

In most cases, contents won't be delivered using DITA files. Instead, you apply stylesheets to the DITA files to create HTML, PDF, or other formats. This process is called *transformation*.

![Transform](/img/dita/transform.png)

The DITA Open Toolkit is a collection of stylesheets, mostly written in Extensible Stylesheet Language (XSL), that provide a starting point for creating output. The default output from an unmodified DITA Open Toolkit transformation is notoriously unattractive.

:::note

The Open Toolkit is not the only way to generate output from DITA. You can use commercial tools to create output. Some tools support only publishing, while others also support content-authoring.

:::

Transforms are independent of map files, and you can apply multiple transforms to a single map file to get more than one output.

## Cross-references

Cross-references allow you to create links to other locations in text, to figures or tables, or to websites.

All cross-references use the `<xref>` element. The `href` attribute specifies the target of the cross-reference. The `<xref>` element can optionally contain text.

:::note

When creating a cross-reference to a section, figure, or table, the `href` attribute should specify the section, figure, or table, not the `<title>` element within the section, figure, or table.

:::

You can also use the `<xref>` element to link to resources outside your DITA topics. For external references, you supply a scope attribute with a value of `external` and a format attribute, as shown here:

```xml
<xref href="http://www.scriptorium.com" scope="external" format="html"/>
```

:::note

To link to a PDF file, use `format="pdf"`.

:::

Technically, it is possible to use `<xref>` to link from one topic to another. This inline linking is a bad idea because you have to create and maintain the link manually. You must specify what you are linking to. 

When you set up the cross-reference, you have the source and target topics in your map file. But if you reuse the source topic in another map that does not include the target topic, you will get a broken link in the output generated from that map, and you may not be notified about the problem. **Instead of using topic-to-topic links, it’s much better to use relationship tables**.

## Related links

At the end of a topic, you can insert a `related-links` element. Use `related-links` to point at additional information that a reader might want.

Related links contain **a link and link text**. Here is an example:

```xml
<topic id="sample">

    <title>Sample title</title>

    <body>

    ...

    </body>

    <related-links>

        <link href="http://www.example.com" format="html" scope="external">

            <linktext>Sample link</linktext>

        </link>

    </related-links>

</topic>        
```

In the `link` element, you specify the target (using the `href` attribute), `format`, and `scope`. For web links and any other link that is outside the current map file, you must specify `scope="external"`.

The `linktext` element contains the text that will become the link hotspot.

:::note

Avoid using related links for links among the topics in your map file. They suffer from the same limitations as inline cross-references—you can end up with broken links. Use relationship tables instead.

:::

## Relationship tables

Relationship tables (reltables) allow you to describe topic relationships that are not sequential or hierarchical. A reltable is a part of a map file. Though it can appear at any location in the map, the convention is to add the reltable **at the end of the main map**. Each row of the table contains `topicref` elements that link to related topics.

Here is an example of a reltable row (and the reltable heading row). In the table below, the columns contain `topicrefs` for concept, reference, and task information. The row shown here contains `topicrefs` to related topics.

![Relationships table](/img/dita/relationships-table.jpg)

When you generate output through the DITA Open Toolkit, the relationships described in the reltable are used to create a list of links to the related topics. In the default HTML output, the reltable entries are used to create a Related Topics section at the end of each topic.

In the reltable row above:

- The concept topic `c_about_ducks.dita` would have related links to `r_breeedsofducks.dita`, `r_goodbreedsforpets.dita`, and `t_feeding.dita`.

- The reference topic `r_breedsofducks.dita` would have links to `c_about_ducks.dita`, `r_goodbreedsforpets.dita`, and `t_feeding.dita`.

- The reference topic `r_goodbreedsforpets.dita` would have links to `c_about_ducks.dita`, `r_breedsofducks.dita`, and `t_feeding.dita`.

- The task topic `t_feeding.dita` would have links to c_about_ducks, `r_breedsofducks.dita`, and `r_goodbreedsforpets.dita`.

:::note

To illustrate a larger concept, this example contains a simplification: for `r_breedsofducks.dita` and `r_goodbreedsforpets.dita` to link to one another, the cell containing both links must identify them as a “family”. The details relationship table cells attributes will be described in a future course.

:::

The relationships you capture in the reltable are not typically shown when you are authoring topics.


Start simple with reltables. They can get very complex.

Reltables are preferred over related links or xrefs for links within a map file because of the following factors:

- The topicrefs in the reltable are evaluated against the current map file. If your reltable contains a link to a file that is not included in the map file, that link is not generated in the output. This prevents the broken link problem that can occur with related links and xrefs.
- The reltables are easier to maintain than embedded related links. Each row in a reltable can contain multiple topics and captures their interrelationships. So, if you have eight related topics, it is much easier to create a single row in a reltable that lists those eight topics than it is to create eight slightly different related-links lists (consisting of 8×7 or 56 links) in your eight topics. If you need to remove one topic from the list, the reltable change is done once rather than seven times in the files.

## Reusing content with conrefs

In DITA, you use a `conref` to reuse pieces of content. These content pieces could be admonishments (notes, cautions, and warnings), boilerplate text (such as your company address), and more. For example, a product’s description could be set up as a `conref` so it is the same across all your documents.

If you are familiar with other authoring tools, `conrefs` are roughly equivalent to:

- Flare snippets
- RoboHelp embedded topics
- FrameMaker text insets and variables
- HTML server-side includes

Suppose you have the following note in a topic called `location.dita`:

```xml
<topic id="topicid">

    ...

    <note id="whatduckslike">Ducks prefer lakes over deserts.</note>

    ...

</topic>
```

To reuse that note in another topic, the `conref` code is as follows:

```xml
<note conref="location.dita#topicid/whatduckslike"/>
```

Most DITA authoring tools streamline the process for inserting `conref` code, so you probably wouldn't have to type the file path, topic ID, and so on, as shown in the example above.

:::note

The target element must be the same element type as the element that contains the `conref` attribute. Thus you can only `conref` a `<note>` element from another `<note>` element; you can only conref an `<li>` element from another `<li>` element, and so on.

:::

:::tip

It’s a good practice to create separate topics that contain reusable elements, rather than just picking a random topic and pointing a conref to that topic. This helps you keep better tabs on the content that is reused and allows you to control when it changes.

:::
