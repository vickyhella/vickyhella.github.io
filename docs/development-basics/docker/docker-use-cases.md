---
title: Docker Use Cases
sidebar_position: 2
---

## Launching a Website in a Container

Instead of running `yarn install` and `yarn start` locally, you can `cd` to the project directory and run the following command to launch this website in a container:

```bash
docker run --rm -it -v $PWD:$PWD -w $PWD -p 3000:3000 node /bin/sh -c "yarn install && yarn start -h 0.0.0.0"
```

This Docker command starts a container with the Node.js runtime and installs dependencies and starts an application using yarn, with port 3000 mapped to the host machine.

:::note
You need to have Docker installed to make the command above work.
:::

**Arg. explanation**:

This code executes a Docker container and runs the `yarn install && yarn start -h 0.0.0.0` command inside it.


  - `docker run`: starts a Docker container.

  - `--rm`: removes the container and its file system when the container exits.

  - `-it`: tells Docker to allocate a pseudo-TTY and keep stdin open so that you can interact with the container's command line.

  - `-v $PWD:$PWD`: mounts the current working directory (`$PWD`) inside the container at the same path (`$PWD`).

  - `-w $PWD`: sets the working directory inside the container to the current working directory.

  - `-p 3000:3000`: maps port 3000 inside the container to port 3000 on the host machine.

  - `node`: name of the Docker image to use.

  - `/bin/sh -c "yarn install && yarn start -h 0.0.0.0"`: the command to run inside the container. It starts a shell (`/bin/sh`) and runs the command `yarn install && yarn start -h 0.0.0.0`.

    - `yarn install` installs dependencies specified in the `package.json` file
    - `yarn start -h 0.0.0.0` starts the application on port 3000, accessible from any IP address.
