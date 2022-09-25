---
title: 正则表达式
sidebar_position: 3
---

## Introduction

This document collects regular expressions that can be helpful for technical translation.

## Basic

| Regex | Usage       | Example |
| ----- | ----------- | ------- |
| ^     | Starts with | ^string |
| $     | Ends with   | string$ |

### Markdown-Related Regex

| Regex                               | Usage                                   |
| ----------------------------------- | --------------------------------------- |
| `\[[\s\S]*?\]\([\s\S]*?#[\s\S]*?\)` | Links that end with #heading            |
| `\[\w*.\w*\]\(#[\s\S]*?\)`          | Internal links within the same document |

## References

[Regular Expression for Markdown Syntax](http://blog.huanghanlian.com/article/5c80b4176f8b011040530140)
