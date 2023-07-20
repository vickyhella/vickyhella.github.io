---
title: Syncing a Local Branch with a Remote Branch
---

Sometimes, you need the local branch to be exactly the same as the remote branch. To do so, run the following commands in sequence, which will sync your local branch to the origin/master branch:

```bash
git fetch --all
git reset --hard origin/master 
git pull
```

In this way, your local branch will be synced with the `origin/master` branch.

:::danger

By following these instructions, your local branch will become identical with  the `origin/master` branch. Any unmerged changes made in the current branch will be gone for good.

Please make sure you know what you're doing.

:::