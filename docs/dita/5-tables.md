---
title: "Lesson 5: Tables"
sidebar_position: 5
tags: [DITA, Technical Writing, XML, Tables]
---

## The simpletable element

Dita simple tables (`<simpletable>`) use the following elements to represent and organize tabular data:

| Element     | Description          | Number                                                                                                                                                 |
| ----------- | -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `<sthead>`  | A header row         | There can be at most one header row.                                                                                                                   |
| `<strow>`   | A body row           | There must be at least one body row, but the table can contain many rows.                                                                              |
| `<stentry>` | A simple table entry | Each row can contain one or more `<stentry>` elements, but each row (including the header row) should include the same number of `<stentry>` elements. |

The `<stentry>` element contains text data or other common block and inline elements.

Here is an example of a table with one heading row, two body rows, and two columns.

```xml
<simpletable>

   <sthead>

      <stentry>heading for column 1</stentry>

      <stentry>heading for column 2</stentry>

   </sthead>

   <strow>

      <stentry>row 1, column 1</stentry>

      <stentry>row 1, column 2</stentry>

   </strow>

   <strow>

      <stentry>row 2, column 1</stentry>

      <stentry>row 2, column 2</stentry>

   </strow>

</simpletable>
```

This table looks like this visually:

![Untitled](/img/dita/simple-table.jpg)

## The table element

DITA tables (`<table>`) use the following elements to represent and organize tabular data:

| Element     | Description                                                     | Number                                                                                                                         |
| ----------- | --------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| `<title>`   | Contains the title for the table.                               | Zero or one.                                                                                                                   |
| `<tgroup>`  | Contains the columns specifications, header rows and body rows. | Every table must contain at least one `<tgroup>` element.                                                                      |
| `<colspec>` | Defines column widths and identifying information.              | There should be one `<colspec>` element per column in your table.                                                              |
| `<thead>`   | Contains the table header rows.                                 | A `<tgroup>` can contain at most one `<thead>` element.                                                                        |
| `<tbody>`   | Contains the table body rows.                                   | A `<tgroup>` must contain one and only one `<tbody> `element.                                                                  |
| `<row>	`     | Contains a single row in a table.                               | A `<thead>` or `<tbody>` element can contain any number of `<row>` elements.                                                   |
| `<entry>	`   | Contains data for a table cell.                                 | Can contain text data or other common block and inline elements. A `<row>` element can contain one or more `<entry> `elements. |

### A minimal DITA table

This is an example of a minimal DITA table structure (one heading row, one body row, and three columns). Note that in this case, the `<tgroup>` specifies only the `cols` attribute, which is required:

```xml
 <table>

      <tgroup cols="3">

        <thead>

          <row>

            <entry>column 1, heading row</entry>

            <entry>column 2, heading row</entry>

            <entry>column 3, heading row</entry>

          </row>

        </thead>

        <tbody>

          <row>

            <entry>column 1, body row</entry>

            <entry>column 2, body row</entry>

            <entry>column 3, body row</entry>

          </row>

        </tbody>

      </tgroup>

    </table>
```

The result looks like this:

![](/img/dita/table.jpg)

### A complex DITA table

A table that is a little bit complex looks like this:

```xml
<table>

        <title>My first table</title>

        <tgroup cols="2">

          <colspec colname="c1" colnum="1" colwidth="1*"/>

          <colspec colname="c2" colnum="2" colwidth="4*"/>

          <thead>

            <row>

              <entry>heading row, column 1</entry>

              <entry>heading row, column 2</entry>

            </row>

          </thead>

          <tbody>

            <row>

              <entry>row 1, column 1</entry>

              <entry>row 1, column 2</entry>

            </row>

            <row>

              <entry namest="c1" nameend="c2">This cell spans two columns.</entry>

            </row>

            <row>

              <entry morerows="1">This cell spans two rows.</entry>

              <entry>row 3, column 2</entry>

            </row>

            <row>

              <entry>row 4, column 2</entry>

            </row>

          </tbody>

        </tgroup>

      </table>
```

It looks like this visually:

![](/img/dita/complex-table.jpg)

Notes on the table:

- The `<colspec>` element uses attributes to specify the column names (`colname`), numbers (`colnum`), and widths (`colwidth`). In this example, the `colwidths` are `1*` and `4*`. The asterisk indicates that the settings are proportional, so the first column gets 20% of the available width and the second column gets 80%.
- Each row has a `<row>` element with `<entry>` elements for each cell.
Notice that row 2 has only a single `<entry>`. That’s because the entry spans across both columns, which is specified by the name-start (`namest`) and name-end (`nameend`) attributes.
- In row 3, the first entry spans rows 3 and 4, so there you have a `morerows` attribute.

## Best practices for tables

- Always wrap `<entry>` content in the table in `<p>` tags.
- Nesting tables, even though it's allowed, is a bad idea.
- Consider including more rows instead of more columns.
- In many word processing tools, people use tables to visually format content such as indented lists. In DITA, this is not done and can lead to unexpected results.
- Consider localization text expansion in tables. Where possible,**design the content for up to 40% text expansion**.
- The DITA standard allows graphics in table cells. However, in most cases it’s best to limit these graphics to small icons in table cells.
- Consider the possible outputs when you create tables.
- In some cases you might want to consider using other elements, such as definition lists, which can be rendered either as a table or a glossary-style list, depending on the target output.
