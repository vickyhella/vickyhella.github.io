---
title: Useful Commands
sidebar_position: 2
---

This document gathers commands that I found useful in work, which might not be used very often. They might not be easy to remember, so I decide to put them together here.

## Device information

### Get device IP

```bash
# 192 is used to search the ip. Change it as needed.
if config | grep 192 
ip a | grep 192
```

### Get device OS

```bash
lsb_release -a
```