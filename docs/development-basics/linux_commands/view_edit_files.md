---
title: Viewing and Editing Files
sidebar_position: 3
---

## `ls`

`ls` is used to list files and directories.

**Syntax**:

```shell
ls [options] [file|dir]
ls -lt # list by time and with long format
ls -la # list long format including hidden files
```

## `vi/vim`

The `vi` command (short for "visual") provides a **full-screen text editing interface** to create, modify, and save text files.

**Syntax**:

```shell
vi [options] [file]
```

**Example usage**:

```bash
vi .
vi file.txt        # Open "file.txt" in the vi editor for editing.
i                  # Enter insert mode to start inserting or modifying text.
:wq                # Save the changes and exit the editor.
:q!                # Quit the editor without saving changes.
/pattern           # Search for a specific pattern within the file.
:%s/pattern/replacement/g   # Search and replace the pattern with a replacement.
sudo vi /etc/hosts # To modify host/add IP-domain mapping
```

## `cat`

The `cat` command (short for "concatenate") is primarily used for displaying the contents of files on the terminal. It is a simple command that reads one or more files and prints their content sequentially.

**Syntax**:

```shell
cat [options] [file...]
```

**Example usage**:

```shell
cat file.txt            # Display the content of "file.txt" on the terminal.
cat file1.txt file2.txt # Concatenate the contents of "file1.txt" and "file2.txt".
cat > newfile.txt       # Create a new file "newfile.txt" and enter content from the terminal.
cat file.txt >> log.txt # Append the content of "file.txt" to the end of "log.txt".
```

:::note Comparing `vi` and `cat`
In summary, the `cat` command is primarily used for displaying and manipulating file content on the terminal, while the `vi` command is a full-featured text editor for creating and modifying text files.
:::
