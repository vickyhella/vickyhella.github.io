---
title: Commands
sidebar_position: 2
---

## Introduction

This document introduces some basic commands that I use a lot.

## Viewing and Editing files

### ls

`ls` is used to list directory contents of files and directories.

```shell
ls [options] [file|dir]
ls -lt # list by time and with long format
ls -la # list long format including hidden files
```

### vi/vim

`vi/vim` is used to open or edit files.

```shell
vi .
vi <filename-directory>
sudo vi /etc/hosts # To modify host/add IP-domain mapping
```

## Copying and Moving files

### cp

`cp` is used to copy files/directories to another directory. To overwrite the target directory, use the `-rf` option. For more information about the available options, see [cp command](https://www.rapidtables.com/code/linux/cp.html).

```shell
cp [options] source destination
```

Command options (partial):

| Option | Description                                                 |
| ------ | ----------------------------------------------------------- |
| -a     | archive files                                               |
| -f     | force copy by removing the destination file if needed       |
| -i     | interactive - ask before overwrite                          |
| -l     | link files instead of copy                                  |
| -L     | follow symbolic links                                       |
| -n     | no file overwrite                                           |
| -R     | recursive copy (including hidden files)                     |
| -u     | update - copy when the source is newer than the destination |
| -v     | verbose - print informative messages                        |

### rm

`rm` is used to remove (delete) files. For more information about the available options, see [rm command](https://www.computerhope.com/unix/urm.htm#options).

```shell
rm [options] <filename>
rm -rf <directory/filename> # force delete files/directories recursively
```

Command options (partial):

| Option              | Description                                                 |
| ------------------- | ----------------------------------------------------------- |
| -f, --force         | Ignore nonexistent files, and never prompt before removing. |
| -i                  | Prompt before every removal.                                |
| -r, -R, --recursive | Remove directories and their contents recursively.          |
| -v, --verbose       | Verbose mode; explain at all times what is being done.      |

### mv

`mv` is used to move files or directories to another location.

:::caution
If the target directory is not empty, this command won't work. In this case, use `cp` and `rm` as described in the section below.
:::

```shell
mv [options] source destination
```

Command options:

| 0ption | Description                                                 |
| ------ | ----------------------------------------------------------- |
| -f     | force move by overwriting destination file without prompt   |
| -i     | interactive prompt before overwrite                         |
| -u     | update - move when the source is newer than the destination |
| -v     | verbose - print source and destination files                |

**Using rm and cp rather than mv**

To move a file to a directory that is not empty (i.e., move files/directory and delete the original one), in which case `mv` won't work, use the `cp` command together with `rm`:

```shell
cp -r ./backup/* ./backupArchives && rm -R ./backup/*
```

-   The first command: copies the directory `./backup/*` and the files contained to `./backupArchives`.

-   The second command: deletes the original directory `./backup/*`.

## Environments

### echo $PATH

```shell
# show the current PATH
echo $PATH
# add a path to PATH (using ":" for separation)
export PATH=$PATH:<other-path> # by appending one
export PATH=<other-path>:$PATH # by adding one to the beginning
# query the path of a command line tool
which <command-line-tool>
```

## Shortcuts

| Shortcut         | Description                      |
| ---------------- | -------------------------------- |
| Ctrl + L         | 清除屏幕并将当前行移到页面顶部。 |
| Ctrl + C         | 中止当前正在执行的命令。         |
| Shift + PageUp   | 向上滚动。                       |
| Shift + PageDown | 向下滚动。                       |
| Ctrl + U         | 从光标位置删除到行首。           |
| Ctrl + K         | 从光标位置删除到行尾。           |
| Ctrl + W         | 删除光标位置前一个单词。         |
| Ctrl + D         | 关闭 Shell 会话。                |
| ↑，↓             | 浏览已执行命令的历史记录。       |

## References

-   [Repid TableL: Linux Commands](https://www.rapidtables.com/code/linux/index.html)
