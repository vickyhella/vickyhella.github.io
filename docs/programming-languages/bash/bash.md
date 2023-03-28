---
title: Bash
sidebar_position: 1
---

## Introduction

This page documents bash syntax that I learned and used.

## Define Variables

## `if` statement

```bash
if [[ "$fname" == "a.txt" || "$fname" == "c.txt" ]]; then 
  echo Hello # a command to run if the condition is met
fi
```

- `==`: if `$fname` equals to `a.txt` or `c txt`
- `\\`: True if either expression1 or expression2 is true.
- `&&`: True if both expression1 and expression2 are true.

## 