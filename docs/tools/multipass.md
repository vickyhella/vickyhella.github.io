---
title: Multipass
sidebar_position: 1
---

## Introduction

Multipass is an open-source **command-line tool** that allows developers to quickly and easily create and manage VMs. Multipass provides a lightweight, easy-to-use alternative to traditional virtualization solutions such as VirtualBox and VMWare.

This document introduces some basic Multipass commands and their usage. For more information, see [Multipass documentation](https://multipass.run/docs).

## Multipass commands

### `multipass launch`

`multipass launch` is used to create a new VM instance:

```bash
multipass launch --name vm1
```

This command creates a new VM instance with the name `vm1`.

If you need to create your VM from a specified image, run `multipass find` for a list of available images, and append the image name to the command above (e.g., `multipass launch --name vm1 kinetic` for using the Ubuntu 22.10 image).

### `multipass list`

`multipass list` is used to list all the available VMs:

```bash
multipass list
```

This command displays a list of all available VMs along with their name, IP address, and status.

### `multipass shell`

`multipass shell` is used to open a shell in the VM instance:

```bash
multipass shell vm1
```

This command opens a shell in the VM instance named `vm1`.

### `multipass restart`

`multipass restart` is used to restart a VM instance:

```bash
multipass restart vm1
```

This command restarts a VM instance named `vm1`.

### `multipass stop`

`multipass stop` is used to stop a running VM instance:

```bash
multipass stop vm1
```

This command stops the VM instance named `vm1`.

### `multipass mount`

`multipass mount` is used to mount a path on the host to a path in the VM instance, allowing you to share data between the two directories (see [this page](https://multipass.run/docs/share-data-with-an-instance#heading--using-mount)):

```bash
multipass mount $HOME vm1

# result:
multipass info vm1
Mounts:         /home/vm1 => /home/vm1

# example (username is ubuntu by default):
multipass mount $HOME/path vm1:/home/username/path

# result:
# The path will be displayed in your VM's home directory
```

Mounts can also be specified as an option to the `launch` command:

```bash
multipass launch --mount /some/local/path:/some/instance/path
```

:::tip

To let the mount works perfectly, ensure that you have granted multipass enough disk permissions on the host, for example, grant **Full Disk Access** permission to `multipassd` in your macOS.

:::

### `multipass unmount`

`multipass unmount` is used to unmount the mounted paths:

```bash
multipass umount vm1
```

### `multipass delete`

`multipass delete` is used to delete a VM instance:

```bash
multipass delete vm1
```

This command deletes the VM instance named `vm1`.

To permanently delete a VM instance, run:

```bash
multipass purge vm1
```

### `multipass info`

`multipass info` is used to display information about the Multipass installation:

```bash
multipass info
```

This command displays information about the installed version of Multipass, the location of the image cache, and other details.

## Using proxy in Multipass VMs

Assuming you use Clash and have your own VPN subscription, you should see a terminal command in clash similar to mine: `export https_proxy=http://127.0.0.1:7890 http_proxy=http://127.0.0.1:7890 all_proxy=socks5://127.0.0.1:7890`.

To modify the `export` command so that you VMs in Multipass can use your host proxy, follow these steps:

1. Open a terminal window on your Mac.

2. Determine the IP address of your Mac. You can use the `ifconfig` command to check this:

  ```bash
  ifconfig | grep "inet " | grep -v 127.0.0.1 | awk '{print $2}'
  ```

  This command will output the IP address of your Mac, which you will need to modify the proxy command for use in Multipass.

3. Modify the proxy command to use the IP address of your Mac instead of `127.0.0.1`. For example, if your Mac's IP address is `192.168.0.2`, the modified command would look like:

  ```bash
  export https_proxy=http://192.168.0.2:7890 \
  http_proxy=http://192.168.0.2:7890 \
  all_proxy=socks5://192.168.0.2:7890
  ```

4. Launch your Multipass VM using the command line or the Multipass app.

5. Open a terminal window in your VM.

6. Test the connectivity to your host machine by pinging the IP address of your Mac. For example, if your Mac's IP address is `192.168.0.2`, you can run the following command:

  ```bash
  ping 192.168.0.2
  ```

  If the ping is successful, you should see responses from the Mac.

7. Set the `http_proxy` and `https_proxy` environment variables in your VM to point to the IP address of your Mac and the port number of your proxy server. For example, if your Mac's IP address is `192.168.0.2` and your proxy server is listening on port `7890`, you can set the environment variables using the following commands:

  ```bash
  export http_proxy=http://192.168.0.2:7890
  export https_proxy=http://192.168.0.2:7890
  ```

8. If you want to use SOCKS5 proxy, set the `all_proxy` environment variable in your VM to point to the IP address of your Mac and the port number of your SOCKS5 proxy server. For example:

  ```bash
  export all_proxy=socks5://192.168.0.2:7890
  ```

9. Test the connectivity to the internet by running a command like curl to access a website. For example, you can run the following command to access the Google website:

  ```bash
  curl https://google.com
  ```

  If the command is successful, you should see the HTML code of the Google website.

That's it! You should now be able to use the modified export command in your Multipass VM to use your host machine as a proxy.

:::note

To unset the environment variables `http_proxy`, `https_proxy`, or `all_proxy`, use `unset`:

```bash
unset http_proxy https_proxy all_proxy
```

:::

## Available commands

The table below lists all available commands that multipass supports:

| Command      | Description                                       |
| ------------ | ------------------------------------------------- |
| alias        | Create an alias                                   |
| aliases      | List available aliases                            |
| authenticate | Authenticate client                               |
| delete       | Delete instances                                  |
| exec         | Run a command on an instance                      |
| find         | Display available images to create instances from |
| get          | Get a configuration setting                       |
| help         | Display help about a command                      |
| info         | Display information about instances               |
| launch       | Create and start an Ubuntu instance               |
| list         | List all available instances                      |
| mount        | Mount a local directory in the instance           |
| networks     | List available network interfaces                 |
| purge        | Purge all deleted instances permanently           |
| recover      | Recover deleted instances                         |
| restart      | Restart instances                                 |
| set          | Set a configuration setting                       |
| shell        | Open a shell on a running instance                |
| start        | Start instances                                   |
| stop         | Stop running instances                            |
| suspend      | Suspend running instances                         |
| transfer     | Transfer files between the host and instances     |
| umount       | Unmount a directory from an instance              |
| unalias      | Remove aliases                                    |
| version      | Show version details                              |
