---
title: Git
sidebar_position: 3
---

## Introduction

Git is essential for developers and also translators. I will record some git use cases that I found useful here.

## Syncing a Local Branch with a Remote Branch

Sometimes, we need our local branch to be exactly the same as the remote branch. To do so, run the following commands in sequence, which will sync your local branch to the origin/master branch:
```
git fetch --all
git reset --hard origin/master 
git pull
```

In this way, your local branch will be synced with the origin/master branch.

## Reviewing using GH Suggestions

### Reviewers

When giving comments on GitHub, rather than commenting directly, reviewers can use the **Add Suggestion** option to improve the effeciency. To do so:
1. Find the line(s) you want to comment on and click the **+** button.
2. Click the **Add a Suggestion** button, and modify the content as needed. You can rewrite, delete, or add anything you need.
3. Click **Start a review**. If you only need to give one single suggestion, instead of clicking **Start a review**, you can click **Add a single comment** and finish your review.
4. Repeat steps 1-3 to add more comments.
5. When you finish the review, click **Finish your review** in the upper right corner.
6. (Optional) Write a comment to summarize your suggestions, and then click **Comment**.

### PR owners

To accept one single suggestion:
- Click **Commit suggestion** below that suggestion. You can also add some description about the changes as needed. In this way, the suggestion will be applied and a new commit will be generated.

Reviewers may give more than one suggestions. In this case, the PR owner can apply more than one suggestions and apply them in a single commit:
1. Find the suggestions you want to accept and click **Add suggestion to batch** below each suggestion.
1. When you finish adding the suggestions to batch, click **Apply suggestions**.

## Checking Out a PR with `gh pr checkout`

Sometimes we need to checkout a PR so that we can run the PR's code locally. With [GitHub CLI, (or `gh`)](https://cli.github.com/manual/), a command-line interface to GitHub that can be used in your terminal or your scripts, we can easily do so with one single command. To checkout a PR in git:

```
gh pr checkout {<number> | <url> | <branch>} [flags]
```

With this command, we don't need to set a remote repo and create a corresponding branch anymore.
You can simply check out any PR by specifying the PR's URL.

For more information, see [gh pr checkout](https://cli.github.com/manual/gh_pr_checkout).

## Working with `git switch`

`git switch` is a new command designed to replace `git checkout`. You can use it to switch between two branches and create new branches. It's more intuitive and easy to use:

```
git switch [<options>] [--no-guess] <branch>
git switch [<options>] --detach [<start-point>]
git switch [<options>] (-c|-C) <new-branch> [<start-point>]
git switch [<options>] --orphan <new-branch>
```

I used it mostly to create a branch based on another branch. To do so:

1. Run `git switch <branch-name>` to switch to the base branch. 
2. Run `git switch -c <new-branch-name>` to create a new branch, where the option `-c` means to create a new branch.

For more information, see [git switch](https://git-scm.com/docs/git-switch).

## Working with `git add remote -t <branch>`

By default, the `git add remote` command tracks all branches in a repo. However, there are times when we only want to track a specific branch. In this case, we can use the `-t <branch>` option to specify a branch to track:

```
git remote add <name> <url> -t <the branch to track>
```

For more information, see [git-remote](https://git-scm.com/docs/git-remote).

<!-- 
## Contributing with a Fork  



-->