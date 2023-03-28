---
title: Docker Commands
sidebar_position: 1
---

This section includes some basic Docker commands.

## `docker run`

[`docker run`](https://docs.docker.com/engine/reference/commandline/run/) is used to create and start a new container from an image.

```bash
docker run --name test -it debian bash
```

- `run --name test`: runs a container named `test` using the debian:latest image
- `-it`: allocates a pseudo-TTY connected to the container’s stdin
- `bash`: starts a bash shell inside the container

## `docker ps`

`docker ps` is used to list all running containers.

```bash
docker ps
docker ps -a # list all containers
```

## `docker stop`

`docker stop` is used to stop a running container.

```bash
docker stop <container_id>
```

## `docker images`

`docker images` is used to list all available images.

```bash
docker images
```

## `docker pull`

`docker pull` is used to download an image from a registry.

```bash
docker pull <image>
# Example
docker pull nginx
```

## `docker push`

`docker push` is used to upload an image to a registry.

```bash
docker push <username>/<myimage>
```

The command above pushes an image named `<myimage>` to the Docker Hub registry under the username `<username>`.

## `docker build`

`docker build` is used to build an image from a Dockerfile.

```bash
# build an image named <myimage> from the Dockerfile in the current directory
docker build -t <myimage> .
```

## `docker rm`

`docker rm` is used to remove one or more containers.

```bash
docker rm <container_id>
```

## `docker rmi`

`docker rmi` is used to delete one or more images.

```bash
docker rmi <image_id>
```

## `docker update`

`docker update` is used to update the configuration of one or more containers.

```bash
# Example: update CPU and memory limits
docker update --cpus 2 --memory 1g <container_id>
```

The command below updates the `--restart` settings of a container.

```bash
# disable restart
docker update --restart no <container_id>
# disable restart for all running containers
docker update --restart no $(docker ps -q)
```

`--restart` options:

| Flag                       | Description                                                                                                                                                                                                          |
| -------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| no                         | Do not automatically restart the container (default).                                                                                                                                                                |
| `on-failure[:max-retries]` | Restart the container if it exits due to an error, which manifests as a non-zero exit code. Optionally, limit the number of times the Docker daemon attempts to restart the container using the :max-retries option. |
| always                     | Always restart the container if it stops. If it is manually stopped, it is restarted only when Docker daemon restarts or the container itself is manually restarted.                                                 |
| unless-stopped             | Similar to always, except that when the container is stopped (manually or otherwise), it is not restarted even after Docker daemon restarts.                                                                         |
