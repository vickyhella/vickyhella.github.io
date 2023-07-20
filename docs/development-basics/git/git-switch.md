---
title: git switch
---

`git switch` is a new command designed to replace `git checkout`. You can use it to switch between two branches and create new branches. It's more intuitive and easy to use:

**Syntax**:

```
git switch [<options>] [--no-guess] <branch>
git switch [<options>] --detach [<start-point>]
git switch [<options>] (-c|-C) <new-branch> [<start-point>]
git switch [<options>] --orphan <new-branch>
```

**Example 1**: create a branch based on another local branch

1. Switch to the base branch:

  ```bash
  git switch <branch-name>
  ```

1. Create a new branch, where the option `-c` means to create a new branch.

  ```bash
  git switch -c <new-branch-name>
  ```

**Example 2**: create a branch based on a branch in an upstream repository

1. Check out the upstream branch:

  ```bash
  git checkout upstream/branch
  ```

1. Create a new branch:
   
  ```bash
  git switch -c <new-branch-name>
  ```

For more information, see [git switch](https://git-scm.com/docs/git-switch).