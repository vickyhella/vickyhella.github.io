---
title: Regular Expression
sidebar_position: 7
---

## Introduction

This document collects useful regular expressions that are helpful for document processing.

## Basics

### Single-Character Match

| Regex  | Rule                                                      | Can Match         |
| ------ | --------------------------------------------------------- | ----------------- |
| A      | A specified character                                     | A                 |
| \u548c | A specified Unicode character                             | 和                |
| .      | Any character                                             | a, b, &, 0        |
| \d     | Numbers 0~9                                               | 0~9               |
| \w     | Lowercase and uppercase letters, numbers, and underscores | a~z, A~Z, 0~9, \_ |
| \s     | Space, Tab                                                | Space, tab        |
| \D     | Non-number                                                | a, A, &, \_, ……   |
| \W     | Non \w                                                    | &, @, 中, ……      |
| \S     | Non \s                                                    | a, A, &, \_, ……   |

### Multi-Character Match

| Regex  | Rule                      | Can Match             |
| ------ | ------------------------- | --------------------- |
| A\*    | Any number of a character | Empty, A, AA, AAA, …… |
| A+     | At least 1 character      | A, AA, AAA, ……        |
| A?     | 0 or 1 character          | Empty, A              |
| A{3}   | 3 characters              | AAA                   |
| A{2,3} | 2 to 3 characters         | AA, AAA               |
| A{2,}  | At least n character      | AA, AAA, AAAA, ……     |
| A{0,3} | At most n character       | Empty, A, AA, AAA     |

### Complex Match

| Regex       | Rule                           | Can Match                |
| ----------- | ------------------------------ | ------------------------ |
| ^           | Starts with                    | ^string                  |
| $           | Ends with                      | string$                  |
| [ABC]       | Any character in […]           | A, B, C                  |
| [A-F0-9xy]  | A character in the range       | A, ……, F, 0, ……, 9, x, y |
| `[^a-f]`    | Any character not in the range | Non `A` ~ `F`            |
| AB\|CD\|EF  | `AB` or `CD` or `EF`           | `AB`, `CD`, `EF`         |
| `(?!_)`　　 | Cannot start with \_           |                          |
| `(?!.*?_$)` | Cannot end with \_             |                          |

## Use Cases

### Chinese-Related Regex

| Regex                             | Can Match                                       |
| --------------------------------- | ----------------------------------------------- |
| `[\u4e00-\u9fa5]`                 | Chinese Character                               |
| `^[\u4e00-\u9fa5_a-zA-Z0-9]+$`    | At least 1 Chinese/English/numbers/\_ character |
| `[\u4e00-\u9fa5_a-zA-Z0-9]{4,10}` | 4-10 Chinese/English/numbers/\_ characters      |

### Markdown-Related Regex

| Regex                                                                       | Can Match                               |
| --------------------------------------------------------------------------- | --------------------------------------- |
| `\[[\s\S]*?\]\([\s\S]*?#[\s\S]*?\)`                                         | Links that end with #heading            |
| `\[\w*.\w*\]\(#[\s\S]*?\)`                                                  | Internal links within the same document |
| (https?\|ftp\|file)://[-A-Za-z0-9+&@#/%?=~_\|!:,.;]+[-A-Za-z0-9+&@#/%=~_\|] | URLs                                    |

## References

-   [Regular Expression for Markdown Syntax](http://blog.huanghanlian.com/article/5c80b4176f8b011040530140)
-   [Chinese-Related Regular Expression](https://www.jianshu.com/p/8695c2ba8ace)
