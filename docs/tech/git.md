---
title: Git
sidebar_position: 1
---

## Introduction

Git is essential for developers and also translators. I will record some git usage I learned here.

### Syncing a Local Branch with a Remote Branch

Sometimes, we need our local branch to be exactly the same as the remote branch. To do so, run the following commands in sequence, which will sync your local branch to the origin/master branch:
```
git fetch --all
git reset --hard origin/master 
git pull
```

In this way, your local branch will be synced with the origin/master branch.

### Reviewing using GH Suggestions
When giving comments on GitHub, rather than commenting directly, we can use the **Add Suggestion** option to improve the effeciency. To do so:
1. Find the line(s) you want to comment on and click the **+** button:
2. Click the **Add a Suggestion** button, and modify the content as needed. You can rewrite, delete, or add anything you need.
3. Click **Start a review**.
4. Repeat steps 1-3 to add more comments.
5. When you finish the review, click **Finish your review** in the upper right corner.
6. (Optional) Write a comment to summarize your suggestions, and then click **Comment**.


### Contributing with a Fork