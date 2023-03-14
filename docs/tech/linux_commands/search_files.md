---
title: Searching for Files or Content
sidebar_position: 4
---

## `find`

`find` command is used to **search for files and directories**, and even perform operations on the files/directories found.

```bash
find [path] [expression]
```

- `[path]`: specifies the directory to start the search from. If `path` is not specified, the current directory is used as the starting point.
- `[expression]`: specifies the search criteria. `expression` can contain one or more tests and actions. Tests are used to **match files based on different criteria**, while actions are used to **perform operations on the matched files**.

  1. **match options**:
  - `-name pattern`: matches files based on their name. The pattern argument can be a string or a regular expression.

    ```bash
    # The pattern can include wildcards such as * and ?.
    find . -name "*.txt"
    ```

  - `-type type`: matches files based on their type. The type argument can be `f` for regular files, `d` for directories, `l` for symbolic links, and more.

    ```bash
    # searches for all directories 
    # in the current directory and its subdirectories
    find . -type d
    ```

  - `-size size`: matches files based on their size. The size argument can be a number followed by a size suffix, such as `k` for kilobytes, `M` for megabytes, and so on.

    ```bash
    # searches for all files that are more than 1 megabyte in size
    find . -type f -size +1M
    ```

  - `-mtime days`: matches files based on their modification time. The days argument specifies the number of days ago the file was modified.

    ```bash
    # searches for all files that were modified more than 30 days ago
    find . -type f -mtime +30
    ```

  - `-user user`: matches files based on their owner. The user argument specifies the username of the file owner.

    ```bash
    # Find all files in the /home directory 
    # that are owned by the user john
    find /home -user john
    ```

  2. **action options**:
  - `-exec command {} \;`: performs a command on the matched files. The `{}` placeholder is replaced by the name of the matched file or directory, and `\;` marks the end of the command.
  
    ```bash
    # print the size of each file with the extension .txt
    find . -name "*.txt" -exec du -sh {} \;
    ```

  - `-print`: displays the files that are found by the find command.

    ```bash
    find . -type f -name "*.txt" -print
    ```

  - `-delete`: deletes the files that are found by the find command.

    ```bash
    find . -type f -name "*.log" -delete
    ```

## `grep`

`grep` is short for `global regular expression print`. It's used to **search for a specified pattern of text** in one or more files or standard input.

```bash
grep [options] pattern [file...]
```

- `pattern`: **regular expression (or string)** that you want to search for in the specified file(s), or in standard input if no `file` is provided.
- `file`: the file or files that you want to search in.

  ```bash
  # allows searching in multiple files
  grep apple fruits.txt vegetables.txt
  ```
  
- `options`: optional command-line arguments that can modify the behavior of `grep`.

**Commonly used options**:

- `--include`: restricts the grep search to only certain types of files.  
For example, you can use `--include="*.txt"` to only search through those files and ignore all other files.
- `--exclude`: specifies a filename pattern that should be excluded from the grep search.

  ```bash
  # syntax:
  grep [OPTIONS] PATTERN --include=GLOB_PATTERN FILE_PATTERN

  # search for the word "example" in all .txt files
  grep --include='*.txt' -r 'example' .

  # search for the word "example" in all .txt and .md files
  grep --include='*.txt' --include='*.md' -r 'example' .
  ```

  :::note
  If `--include` is not used, all files in the specified directories and subdirectories will be searched through. `--include` helps narrow down the search.
  :::

- `-i`: ignores case.
- `-v`: inverts the match, i.e., selects non-matching lines.
- `-n` : displays the matched lines and their line numbers.
  - `-A n`: prints searched line and n lines after the result.
  - `-B n`: prints searched line and n line before the result.
  - `-C n`: prints searched line and n lines after before the result.
- `-w`: matches the whole word.
- `-r`: searches recursively through directories and their subdirectories.

  ```bash
  # include all subdirectories in a search
  grep -r pattern *
  ```

- `-e expression`: specifies the pattern to search for. Can be used multiple times.

  ```bash
  # lines that contain either pattern1 or pattern2 in file.txt
  grep -e pattern1 -e pattern2 file.txt
  ```

- `-c`: prints only a count of matching lines.
- `-l`: prints only the list of filenames only.
- `-f file`: takes patterns from a file, one pattern per line.


## Using `find` and `grep` in conjunction

To search for specific content in specific files, you can use `find` and `grep` in conjuction as follows:

```bash
find /path/to/search -name "*.txt" -exec grep "search_pattern" {} \;
```

This command:
1. searches for all `.txt` files in `/path/to/search`.
2. searches for the text string `search_pattern` within each of those files.

## Performing Operations on the Searched Files/Content

You can use `find` and `grep` to search for what you want, but eventually you might want to perform operations on what is searched.

To pass the searched results to the operation command, use `|` to pipe the output of `grep` to the operation command.

### `sed`

Replaces all `old_string` with `new_string` in the searched content.

```bash
find /path/to/search -name "*.txt" -exec grep "search_pattern" {} \; | sed 's/old_string/new_string/g'
```

<!--
### `awk`
### `xargs`
-->
