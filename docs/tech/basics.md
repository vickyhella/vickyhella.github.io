---
title: Basics
sidebar_position: 1
---

## Introduction

This document includes some basic technical knowledge.

### Absolute and Relative Paths

```shell
./ # Directory where the current file locates
../ # One level up
../../ # Two levels up
```

### Command Operators

Command-chaining operators are special characters used to write miniature shell scripts in the command line. This is incredibly useful in automating tasks.

- References: [10 Linux Command-Line Operators and What They Do](https://www.makeuseof.com/linux-command-line-chaining-operators/)

#### The Ampersand Operator `&`

Executes that Linux command in the background.

  ```shell
  gedit &
  ```

#### The Semicolon Operator `;`

Executes commands in a defined, sequential order.

:::note
The shell does not check if each command terminates successfully
:::

```shell
pwd ; mkdir test ; cd test ; touch file
```

#### The OR Operator `||`

Executes the command that follows only if the preceding command fails.

```shell
bad_command || ls
```

In this example, only if the `bad_command` fails will the `ls` command be executed.

#### The Pipe Operator `|`

Directs the output of the preceding command as input to the succeeding command. It is most commonly used to filter data with the grep command.

```shell
cat test | grep -i "makeuseof"
```

This command example sends the output of the cat command as input to the grep command, which then filters the output against a specified string.

#### The AND Operator `&&`

Executes commands only if the **preceding command was successfully executed**.

```shell
pwd && mkdir test && cd test && bad_command && ls
```

Since `bad_command` fails to run, the shell will return an error and skip the `ls` command.

#### The NOT Operator `!`

Similar ways to an except statement in programming.

```shell
rm -r !(*.txt)
```

This sample command will recursively remove all files in a directory except for files that have a `.txt` extension.

#### The Precedence Operator `(..)`

**Sets groups and precedence** to ensure that the execution sequence meets your expectations.

```shell
(ls *.txt > txt-files.list && cp *.tx ~) && (ls *.deb > deb-packages.list && cp *.deb ~) || echo "Precedence Test!"
```

In this sample syntax, both groups of commands must return an exit code 0 to ensure the successful execution of the last command. This example requires that **both commands in the first set () exit with 0** for the second set () to run.

#### The Combination Operator `{..}`

Groups commands. Whichever commands you want to group you can place them inside curly brackets, and they will be **executed depending upon the exit code of the first command**.

```shell
test -f /etc/passwd && {pwd ; date} && echo $0 ; echo "Hello"
```

The sample syntax will test if the `/etc/passwd` file is present, print the current working directory, date, shell name, and echo "Hello".

#### Concatenation or the Escape Operator `\`

You can either use it to **concatenate two commands** or as an **escape character** when working with strings in the shell.

```shell
mkdir test0 test1 \ test2
echo "Hello! from the \nother side"
```

The first command will make 3 directories named test0, test1, and test2, and the second command will print the string separated by a new line.

In other words, if a command is too long, you can use `\` and `Enter` to split it into different lines without executing them immediately. For example:

```shell
pwd && \
ls
```

#### The Redirection Operators `>, >>, <`

Redirects output or input to a file either by re-writing the file or by appending to it.

- To re-write a file, use the single angle bracket `>` syntax. 
- To append to a file, use the double angle bracket syntax `>>`.

```shell
echo "dsd" > test ; echo "bssss" >> test
```

In the sample syntax, the first command will overwrite the `test` file with the provided string. In the second command, the string provided will be appended to the `test` file.


