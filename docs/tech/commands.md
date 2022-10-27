---
title: Commands
sidebar_position: 2
---

## Introduction

This document includes some basic commands I learned.

## Commands

### vi/vim

```
vi .
vi <filename-directory>
sudo vi /etc/hosts # To modify host/add IP-domain mapping
```

### ls

`ls` is a Linux shell command that lists directory contents of files and directories.

```
ls -lt # list by time and with long format
```

### mv

`mv` command is used to move files and directories.

```
mv [options] source destination
mv [-f | -i | -n] [-v] source target
mv [-f | -i | -n] [-v] source ... directory
```

Command options:

| 0ption | Description                                               |
| ------ | --------------------------------------------------------- |
| -f     | force move by overwriting destination file without prompt |
| -i     | interactive prompt before overwrite                       |
| -u     | update - move when source is newer than destination       |
| -v     | verbose - print source and destination files              |
| mv man | help manual                                               |


### rm

```
rm -rf <filename>
rm -rf <directory>
```

### echo $PATH

```
echo $PATH
export PATH=$PATH:<other-path> # or
export PATH=<other-path>:$PATH
which <command-line-tool>
```

## References

- [Repid TableL: Linux Commands](https://www.rapidtables.com/code/linux/index.html)