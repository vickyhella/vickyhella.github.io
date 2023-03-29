---
title: Launching a Project in a Container
sidebar_position: 3
---

Instead of running `yarn install` and `yarn start` on the host, you can run the following command in your project's root directory to launch a project in a container:

```bash
docker run \
--rm \
-it \
-v $PWD:$PWD \
-w $PWD \
-p 3000:3000 \
node \
/bin/sh -c "yarn install && yarn start -h 0.0.0.0"
```

Alternatively, you can use the command below, which replaces `$PWD` with `pwd`:

```bash
docker run \
--rm \
-it \
-v `pwd`:`pwd` \
-w `pwd` \
-p 3000:3000 \
node \
/bin/sh -c "yarn install && yarn start -h 0.0.0.0"
```

This command executes a Docker container and runs the `yarn install && yarn start -h 0.0.0.0` command inside it.

The advantage of this command is that it doesn't require you to build an image for your project first. Instead, it uses the Docker image `node` as the base image, installs dependencies using Yarn, and starts a web application.

**Detailed explanation**:

```bash
docker run \

# --rm: auto-removes the container when it exits
--rm \

# -it: allocates a pseudo-TTY and keeps stdin open 
# so that you can interact with the container's command line
# same as -t -i
-it \

# -v: binds mount a volume
# in this case, it mounts the current working directory ($PWD)
# to the same directory in the container,
# allowing the container to access your project's files
# same as `pwd`:`pwd`
-v $PWD:$PWD \

# -w: working directory inside the container
# commands will be executed inside the directory given
# in this case, it sets the working directory in the container
# to the current working directory
# same as `pwd`
-w $PWD \

# -p: publishes a container's port(s) to the host
# in this case, it maps the host's port 3000 to the container's port 3000
-p 3000:3000 \

# node: the base image to use
node \

# /bin/sh -c: specifies the command to run in the container
# It starts a shell (`/bin/sh`) and runs the yarn commands

# yarn install: installs dependencies specified in `package.json`
# yarn start -h 0.0.0.0: starts the app on port 3000, accessible from any IP address
/bin/sh -c "yarn install && yarn start -h 0.0.0.0"

```

:::info `-v` and `-w` flags

With the `-v` flag set to `$PWD:$PWD`, any files in your host's current working directory will be accessible from inside the container at the same path. 

Therefore, the `-w` flag is also set to `$PWD`, so that the container's working directory is the same as the host's current working directory.


If you switch your working directory on the host after you've started the container with the `-v` and `-w` flags, the changes will be reflected inside the container as well.

According to the [Docker documentation](https://docs.docker.com/engine/reference/commandline/run/#volume) about this flag combination:

The `-v` flag mounts the current working directory into the container. The `-w` lets the command being executed inside the current working directory, by changing into the directory to the value returned by `pwd`. So this combination executes the command using the container, but inside the current working directory.
:::
