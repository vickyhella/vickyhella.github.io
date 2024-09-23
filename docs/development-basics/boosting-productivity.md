---
title: Boosting Productivity
sidebar_position: 7
---

## Introduction

This document shows some of the skills I learned (from the Internet or my co-workers) to boost productivity.

## VSCode Skills

### Useful Shortcuts

1. Comment out multiple lines: cmd+k+c
1. Modify all occurrences: cmd+d
1. Close the current windowL: cmd+w
1. Close all opened windows: cmd+k+w
1. Quickly open a file using its name: cmd+p and then type in the filename

### Project-Specific VSCode Settings

1. Press **Cmd + Shift + P** and then search for **Open Workspace Settings**:

  ![settings-editor-workspace-tab](/img/development/settings-editor-workspace-tab.png)

2. Modify the settings that you want to apply specifically to your current project.

  For example, you can change the `Editor: Tab Size` from `4` to `2`(if needed).

3. After this, a file called `.vscode/settings.json` will be created in the root of your project (workspace).

  For more information, see [VSCode Workspace Settings](https://code.visualstudio.com/docs/getstarted/settings#_workspace-settings).

### Using SSH to connect to a server in Visual Studio Code

If you have a server, you can edit its files or run commands in it from a remote host using SSH:

  ```bash
  ssh username@ip-address
  ```

  Replace `username` and `ip-address` with the actual ones.

In addition to that, you can also edit files from Visual Studio Code with the `Remote - SSH` extension, which is highly recommended for operations that require a lot of copy-and-paste operations. To use it:

  1. Install [Remote - SSH](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-ssh).
  1. Press `Command + Shift + P` and choose `Remote-SSH: Connect to Host...`.
  1. Enter the SSH information, for example, `username@ip-address`.

After this, you can open the server files from Visual Studio Code with ease. For more information, see [Remote Development using SSH](https://code.visualstudio.com/docs/remote/ssh).

:::info

If the device's SSH key has changed, you can either remove the offending key from your `known_hosts` file or update it with the new key. To do so, you can open `$HOME/.ssh/known_hosts` and remove the affected line. It can also be done with a command `ssh-keygen -R IP`.

:::

## Command-Line Skills
### Changing the Default Directory in Terminal

The default directory of the terminal is the user's root directory. If you want to change it to a directory that is used more often, you can:

1. Open the `~/.zshrc` file:

  ```
  vi ~/.zshrc
  ```

2. Add the following line to the file. Note that you need to replace `<target-directory>` with the directory you wish to open every time you open the terminal.

  ```
  cd <target-directory>
  ```
After this, the default directory of the terminal will become `<target-directory>`.

### Creating Command Aliases in Mac

1. Open the `~/.zshrc` file:

    ```
    vi ~/.zshrc
    ```

    In the editor, add your alias in the format of `alias shortname="actual command"` (e.g., `alias m="multipass"`). You can add multiple aliases (one alias per line).
2. At the end of the file, add the following line:

    ```
    source ~/.zshrc
    ```

    In this way, your aliases will be permanent, meaning they will take effect even if you exit the terminal and reopen it.