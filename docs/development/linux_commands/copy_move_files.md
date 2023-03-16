---
title: Copying and Moving Files
sidebar_position: 3
---

## `cp`

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

## `rm`

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

## `mv`

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
