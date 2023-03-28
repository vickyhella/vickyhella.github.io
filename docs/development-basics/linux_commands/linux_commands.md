---
title: Basics
sidebar_position: 1
---

## Introduction

The **Linux Commands** section introduces commands that I use a lot when dealing with text. They are categorized according to their use cases. This document introduces only the basics.

## Absolute and Relative Paths

```shell
. # current directory
./ # Current directory, same as .
../ # One level up, i.e., the parent directory of the current directory
../../ # Two levels up, i.e., the parent of the parent directory
```

## `$PATH` Variable

The `$PATH` variable tells your Linux shell where to look for executable files.

When you run a command, you are actually telling the system (Linux or Linux-like OSs) to run a program. Even simple commands, like `ls`, `mkdir`, `rm`, and others are just small programs that usually live inside a directory on your computer called `/usr/bin`.

:::note
Common directories: `usr/local/bin`, `/usr/local/sbin`, and `/usr/sbin`
:::

However, when you type a command into your Linux shell, it doesn't look in every directory for the program. Instead, it only looks to the ones you specify. These directories are a part of an environment variable called `$PATH`, which your shell checks in order to know where to look.

### `echo $PATH`

`echo $PATH` is used to show your `$PATH`.

```bash
echo $PATH
```

### `export PATH`

`export PATH` is used to add a directory to `$PATH`. Each directory is separated with a colon (:).

```bash
export PATH=$PATH:<other-path> # by appending one
export PATH=<other-path>:$PATH # by adding one to the beginning
```

Let's say you wrote a shell script called `hello.sh` and have it located in `/place/with/the/file`. This script provides some useful function to all of the files in your current directory, that you'd like to be able to execute no matter what directory you're in.

In this case, you can set your `$PATH` using the command below:

```bash
export PATH=$PATH:/place/with/the/file
```

You should now be able to execute the script anywhere on your system by just typing in its name, without having to include the full path as you type it.

### Setting `$PATH` Permanently

By design, if you restart your computer or create a new terminal instance, the path you added will be gone. Luckily, you can set `$PATH` so that it always includes your added path.

The procedure varies depending on the shell you use. You can first determine it by running the command below, which returns the shell you use:

```bash
echo $0
```

For Bash, you simply need to add the line above, `export PATH=$PATH:/place/with/the/file`, to the appropriate file that will be read when your shell launches. They might be `~/.bash_profile`, `~/.bashrc`, or `~/.profile`. Their difference is primarily **when they are read by the shell**. In most cases, `~/.bashrc` would be a good choice.

For other shells (like mine, `zsh`), you can put the export statement to something like `~/.zshrc`.

### `which`

`which` is used to locate a program file in the user's path.

```bash
# query the path of a command line tool
which <command-line-tool>
```

## Shortcuts

The following shortcuts can be useful in the terminal.

| Shortcut         | Description                                             |
| ---------------- | ------------------------------------------------------- |
| Tab              | Auto-completes a command.                               |
| Ctrl + L         | Clears the terminal screen.                             |
| Ctrl + C         | Stops a running command immediately.                    |
| Ctrl + D         | Logs you out of the current terminal.                   |
| Ctrl + A         | Moves the cursor to the line's beginning.               |
| Ctrl + E         | Moves the cursor to the line's end.                     |
| Ctrl + U         | Erases content from the cursor to the line's beginning. |
| Ctrl + K         | Erases content from the cursor to the line's end.       |
| Ctrl + W         | Erases the word preceding to the cursor.                |
| Ctrl + Y         | Pastes the erased text coming from the shortcuts above. |
| Ctrl + P         | Displays the previous command.                          |
| Ctrl + N         | Displays the next command.                              |
| Shift + PageUp   | Scrolls up.                                             |
| Shift + PageDown | Scrolls down.                                           |
| ↑ & ↓            | Shows the history of commands executed.                 |

## References

- [Repid TableL: Linux Commands](https://www.rapidtables.com/code/linux/index.html)
- [13 Linux Terminal Shortcuts Every Power Linux User Must Know](https://linuxhandbook.com/linux-shortcuts/)
- [How to set your $PATH variable in Linux](https://opensource.com/article/17/6/set-path-linux)
