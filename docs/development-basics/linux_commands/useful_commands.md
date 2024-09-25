---
title: Useful Commands
sidebar_position: 2
---

This document gathers commands that I found useful in work, which might not be used very often. They might not be easy to remember, so I decide to put them together here.

## Device information

### Get device IP with `ifconfig` or `ip`

```bash
# 192 is used to search the ip. Change it as needed.
if config | grep 192 
ip a | grep 192
```

### Get device OS with `lsb_release`

```bash
lsb_release -a
```

## File operations

### Download a file with `wget`

```bash
wget file-link
```

### Transfer file(s) between host and server with `scp`

```bash
# copy a single file
scp host-file-path server-username@ip-address:server-directory

# copy a folder
scp -r host-folder server-username@ip-address:server-directory
```

### Unzip files with `unzip`, `unxz`, and `tar`

```bash
unzip package.zip
unxz package.xz
tar -xvf package.tar
```

