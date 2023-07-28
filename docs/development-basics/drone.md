---
title: Drone
sidebar_position: 6
---

## Drone CI/CD Overview

"Drone" in the context of CI/CD, is used for Continuous Integration and Continuous Deployment (CI/CD) in software development.

Drone CI/CD is an open-source platform that automates the process of building, testing, and deploying software applications. It integrates with version control systems (such as GitHub, GitLab, and Bitbucket) and facilitates automatic software testing and deployment whenever changes are pushed to the repository. It is designed to be easy to use, flexible, and can be self-hosted or used as a cloud-based service.

## How Does Drone CI/CD Work?

1. **Configuration File**: In Drone CI/CD, you define a configuration file (usually called `.drone.yml`) within your project repository. This file specifies the steps and commands that should be executed. 
2. **Triggering Builds**: Whenever a developer pushes new code or makes changes to the repository, Drone detects the changes and triggers a build automatically. 
3. **Building and Testing**: Drone will then execute the commands specified in the `.drone.yml` file.
4. **Reporting**: The build process provides feedback on whether the build was successful or if any issues were encountered during testing. 
5. **Deployment**: If the build and tests are successful, Drone can be configured to automatically deploy the application to a production environment or other deployment targets.

## Key Concepts of Drone CI/CD

1. **Pipeline**: The series of steps defined in the `.drone.yml` file that dictate the build, test, and deployment process. 
2. **Runner**: The environment in which the build process runs. It could be a virtual machine, Docker container, or Kubernetes pod. 
3. **Secrets**: Sensitive information, such as API keys or passwords, can be securely stored and accessed during the build process using secrets. 
4. **Plugins**: Drone CI/CD supports various plugins that extend its capabilities. For example, there are plugins for building Docker images, sending notifications, and more.

## Drone CI/CD and GitHub Actions

Drone CI/CD and GitHub Actions share similarities. Both are tools used for automating CI/CD workflows, but they have some differences in their approach and architecture.

While GitHub Actions is tightly integrated with GitHub and is a native feature of the platform, Drone CI/CD is a standalone tool that can integrate with various version control systems. Additionally, Drone's configuration is YAML-based, whereas GitHub Actions uses YAML or JavaScript-based syntax.

Both tools serve the same purpose of automating the software development lifecycle, and the choice between them often comes down to personal preference, team requirements, and existing workflows.

## `.drone.yml` Example

```yml
kind: pipeline # This is the kind of Drone CI/CD pipeline definition.

name: example-pipeline # The name of the pipeline.

steps: # Defines the individual steps in the pipeline.

  - name: build # The name of the step, here, it's the build step.
    image: node:12 # The Docker image to use for this step (Node.js version 12).

    commands: # Commands to be executed within the step's container.
      - npm install # Install dependencies using npm.
      - npm run build # Run the build script.

  - name: test # The name of the step, here, it's the test step.
    image: node:12 # The Docker image to use for this step (Node.js version 12).

    commands:
      - npm install # Install dependencies using npm.
      - npm run test # Run the test script.

  - name: deploy # The name of the step, which is the deploy step.
    image: alpine:latest # The Docker image for this step (Alpine Linux).

    commands:
      - apk update # Update the package list (Alpine Linux).
      - apk add rsync # Install rsync (a utility for syncing files).
      - rsync -avz ./dist/ user@example.com:/var/www/html/ # Deploy the build artifacts.

trigger:
  event: push # specifies the events that trigger the pipeline.
  branch: master # The pipeline is triggered only for pushes to the master branch.
```
