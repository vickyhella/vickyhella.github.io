---
title: Viewing and Editing Files
sidebar_position: 2
---

## `ls`

`ls` is used to list directory contents of files and directories.

```shell
ls [options] [file|dir]
ls -lt # list by time and with long format
ls -la # list long format including hidden files
```

## `vi/vim`

The `vi` command (short for "visual") is a powerful text editor commonly found on Unix-like systems. It provides a **full-screen text editing interface** with various features for creating, modifying, and saving text files.

Syntax: `vi [options] [file]`

Key features of the `vi` command:
- Text editing: It allows editing files in insert, command, and visual modes.
- Navigation: It provides navigation within the file using cursor movements.
- Search and replace: It supports searching for specific text patterns and replacing them.
- Syntax highlighting: It can highlight syntax elements based on the file type.
- Multiple buffers: It allows working with multiple files simultaneously using buffers.
- Configuration and customization: It provides options to customize the editor's behavior.

Example usage:

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

Syntax: `cat [options] [file...]`

Key features of the `cat` command:
- Concatenation: It can combine multiple files and display their contents together.
- Displaying file contents: It displays the entire content of a file on the terminal.
- Creating new files: It can create new files and populate them with content from the terminal or other files.
- Appending to files: It can append the content of a file to the end of another file.
- Copying files: It can copy the content of one file to another.

Example usage:

```bash
cat file.txt            # Display the content of "file.txt" on the terminal.
cat file1.txt file2.txt # Concatenate the contents of "file1.txt" and "file2.txt".
cat > newfile.txt       # Create a new file "newfile.txt" and enter content from the terminal.
cat file.txt >> log.txt # Append the content of "file.txt" to the end of "log.txt".
```

:::note Comparing `vi` and `cat`
In summary, the `cat` command is primarily used for displaying and manipulating file content on the terminal, while the `vi` command is a full-featured text editor for creating and modifying text files.
:::
