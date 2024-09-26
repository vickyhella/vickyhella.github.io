---
title: Useful Commands
sidebar_position: 2
---

This document gathers commands that I found useful in work, which might not be used very often. They might not be easy to remember, so I decide to put them together here.

## Device information

### Get device IP with `ifconfig` or `ip`

```bash
# 192 is used to search the ip. Change it as needed.
if config | grep 192 
ip a | grep 192
```

### Get device OS with `lsb_release`

```bash
lsb_release -a
```

## File operations

### Download a file with `wget`

```bash
wget file-link
```

### Transfer file(s) between host and server with `scp`

```bash
# copy a single file
scp host-file-path server-username@ip-address:server-directory

# copy a folder
scp -r host-folder server-username@ip-address:server-directory
```

### Unzip files with `unzip`, `unxz`, and `tar`

```bash
unzip package.zip
unxz package.xz
tar -xvf package.tar
```

## Manage permissions with `chmod`

```sh
# make a file have rwxrwxrwx permissions
chmod 777 file-path

# make every single file under / have rwxrwxrwx permissions
chmod -R 777 /

# shows current file permissions
ls -lt
```

## Manage users

```bash
# add a new user
adduser newuser

# query which group a user is is
groups newuser
# by default, a user and its own group share the same name

# add a new user to the sudo group
usermod -aG sudo newuser
sudo usermod -aG sudo newuser

# delete a new user
deluser newuser
```

See [How to Add and Delete Users on Ubuntu 20.04](https://www.digitalocean.com/community/tutorials/how-to-add-and-delete-users-on-ubuntu-20-04) for more information.
