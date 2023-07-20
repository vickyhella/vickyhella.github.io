---
title: git remote
---

`git remote` is used to manage the repositories that are tracked.

## git remote add

Adds a remote repo named `<name>` for the repository at `<URL>`.

**Syntax**:

```bash
git remote add [-t <branch>] [-m <master>] [-f] [--[no-]tags] [--mirror=(fetch|push)] <name> <URL>
```

**Example**:

```bash
git remote add <other-user> https://github.com/other-user/repo-name.git
```

## git remote add -t `<branch>`

By default, `git remote add` tracks all branches in a repo. However, there are times when you only want to track a specific branch. In this case, you can use the `-t <branch>` option to specify a branch to track:

```
git remote add <name> <url> -t <branch>
```

:::info

You can specify more than one `-t <branch>` to track multiple desired branches.

:::

For more information, see [git-remote](https://git-scm.com/docs/git-remote).