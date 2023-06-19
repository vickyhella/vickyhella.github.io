---
title: Dockerfile
sidebar_position: 2
---

This document describes how to create your own Dockerfile, build an image using your Dockerfile, and run a container from the image you build.

## Create a Dockerfile

A Dockerfile is a text file that contains instructions for building a Docker image, which is used to create containers that can run an application and its dependencies in a portable and reproducible way.

First, you need to create a file called `Dockerfile` in the root directory of your project. This directory should also contain all the files and directories needed for your application to run. 

:::info

When you build a Docker image from the Dockerfile, Docker will create a container with a copy of these files and directories.

:::

When the Dockerfile is created, follow the steps below to write your Dockerfile:

1. **Choose a base image**: A base image is a pre-built image that contains a specific runtime environment or set of tools. You can find base images on Docker Hub or other container registries.

  For example, if you want to create a Dockerfile for a Node.js application, you can choose the official Node.js base image:

  ```go
  FROM node:14
  ```

  This tells Docker to use the Node.js version `14` base image as the starting point for your container.

2. **Set the working directory**: The next step is to set the working directory for your container using the `WORKDIR` instruction. This is the directory where your application code will be copied to and where your application will run from:

  ```go
  WORKDIR /app
  ```

  This sets the working directory to `/app`.

3. **Copy the application files**: To copy the application files to the container, use the `COPY` instruction. You can copy individual files or entire directories:

  ```go
  COPY package*.json ./
  COPY src/ ./src/
  ```

  This copies the `package.json` and `package-lock.json` files to the container's working directory, as well as the `src/` directory and its contents.

4. **Install dependencies**: If your application has dependencies, you need to install them in the container using the `RUN` instruction. For example, for a Node.js application, you can install the dependencies using npm:

  ```bash
  RUN npm install
  ```
  This installs the Node.js dependencies listed in the `package.json` file.

5. **Expose ports**: If your application listens on a specific port, you need to expose that port using the `EXPOSE` instruction:

  ```go
  EXPOSE 3000
  ```
  This exposes port 3000 on the container.

6. **Specify the start command**: Finally, you need to specify the command that starts your application using the `CMD` instruction:

  ```go
  CMD ["npm", "start"]
  ```

  This runs the `npm start` command to start the Node.js application.


## Example Dockerfile

Here's the complete Dockerfile for a Node.js application:

```bash
# Use the official Node.js image as the base image
FROM node:14

# Set the working directory to /app
WORKDIR /app

# Copy the package.json and package-lock.json files 
# to the container's working directory
COPY package*.json ./

# Install the dependencies
RUN npm install

# Copy the src directory and its content
COPY src/ ./src/

# Expose port 3000
EXPOSE 3000

# Start the application
CMD ["npm", "start"]
```

## Build an Image

Once you have created your Dockerfile, you can use the `docker build` command to build a Docker image:

```bash
docker build -t my-node-app .
```

This command tells Docker to build a new image with the tag `my-node-app` using the Dockerfile in the current directory (.).

:::info

If you need to tag your image, use the `-t` option:

```bash
docker build -t my-node-app:1.0.0 .
```

This command builds a Docker image using the Dockerfile in the current directory and tags it with the name `my-app` and the version `1.0.0`.

:::

## Run a Container

To run the Docker container, use the following command:

```bash
docker run -p 3000:3000 my-node-app
```

This command runs a container from the `my-node-app` image and maps port `3000` on the host to port `3000` in the container. The application will be accessible at `http://localhost:3000`.

:::info

If you want to run your containers in the background, run the `-d` flag:

```bash
docker run -d -p 3000:3000 my-node-app
```

This command tells Docker to run the container in the background (detached mode). You can use the docker logs command to view the application logs later:

```bash
docker logs <container-id>
```

:::
