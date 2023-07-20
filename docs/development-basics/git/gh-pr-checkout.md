---
title: gh pr checkout
---

Sometimes you might want to check out a PR to run its code locally. In regular practices, you need to add a remote repo using [git remote](git-remote.md) and check out the desired branch.

Luckily, we can now use [GitHub CLI, (or `gh`)](https://cli.github.com/manual/) to easily do so with one single command. 

**Syntax**:

```bash
gh pr checkout {<number> | <url> | <branch>} [flags]
```

**Example**:

To check out a PR using the PR's URL:

```bash
gh pr checkout <url>
```

For more information, see [gh pr checkout](https://cli.github.com/manual/gh_pr_checkout).
