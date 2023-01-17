---
title: Basics
sidebar_position: 1
---

## Introduction

This section introduces commands that I use a lot when dealing with text. They are categorized according to their use cases. This document introduces only the basics.

## Absolute and Relative Paths

```shell
. # current directory
./ # Current directory, same as .
../ # One level up, i.e., the parent directory of the current directory
../../ # Two levels up, i.e., the parent of the parent directory
```

## Environments

Before running a command, sometimes we need to ensure that the environment is properly set.

### `echo $PATH`

```bash
# show the current PATH
echo $PATH
```

### `export PATH`

```bash
# add a path to PATH (using ":" for separation)
export PATH=$PATH:<other-path> # by appending one
export PATH=<other-path>:$PATH # by adding one to the beginning
```

### `which`

```bash
# query the path of a command line tool
which <command-line-tool>
```

## Shortcuts

The following shortcuts can be useful in the terminal.

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
