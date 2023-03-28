---
title: Docker
---

## Overview

Docker's goal is to **package an app into a single bundle**, which can be install in any Linux distribution.

Docker helps create, deploy, and run apps easily by using containers.

## Benefits

- Developers can package apps with all dependencies needed to run on any Linux distribution
- Multiple containers can run simultaneously, each based on the same or different images.
- Containers can even run within VMs.

:::note
Docker is similar to virtual machines in the way it creates multiple instances of an operating system. 

However, Docker lets you create containers that run on the same operating system. So, more containers than virtual machines can run on a given hardware combination.
:::

## Terms

1. Image: a read-only template containing instructions for creating a container
1. Container: holds important content (like files and programs) so that an application can be delivered efficiently from producer to consumer

## References

This doc is derived from [this blog](https://circleci.com/blog/docker-image-vs-container/).