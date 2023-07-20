---
title: Pushing a Commit to an Existing PR
---

To push a commit directly to a PR created by someone else:

:::info

Before following the instructions given on this page, ensure that the PR has enabled `Allow edits from maintainers`. 

:::

1. Check out the PR using `gh`:

  ```bash
  gh pr checkout <pr-url>
  ```

1. Make your changes locally.
1. Commit your changes:

  ```bash
  git commit -am "commit-message"
  ```

1. Add the PR owner's repo as remote:

  ```bash
  git remote add <pr-owner> https://github.com/pr-owner/repo-name.git
  ```

1. Fetch its current content:

  ```bash
  git fetch <pr-owner>
  ```

1. Push your commit to the branch:

  ```bash
  git push <pr-owner> <branch-name>
  ```

After this, you can go back to the PR's page on GitHub and refresh the page. You should find the commit you just pushed.