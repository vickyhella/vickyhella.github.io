---
title: Improving Efficiency
sidebar_position: 4
---

## Introduction

This document shows some of the skills I learned (from the Internet or my co-workers) to improve efficiency.

## VSCode Skills
### Project-Specific VSCode Settings

1. Press **Cmd + Shift + P** and then search for **Open Workspace Settings**:

  ![settings-editor-workspace-tab](/img/tech/settings-editor-workspace-tab.png)

2. Modify the settings that you want to apply specifically to your current project.

  For example, you can change the `Editor: Tab Size` from `4` to `2`(if needed).

3. After this, a file called `.vscode/settings.json` will be created in the root of your project (workspace).

  For more information, see [VSCode Workspace Settings](https://code.visualstudio.com/docs/getstarted/settings#_workspace-settings).

## Command-Line Skills
### Changing the Default Directory in Terminal

The default directory of the terminal is the user's root directory. If we want to change it to a directory that is used more often, you can:

1. Open the `~/.zshrc` file:

  ```
  vi ~/.zshrc
  ```

2. Add the following line to the file. Note that you need to replace `<target-directory>` with the directory you wish to open everytime you open the terminal.

  ```
  cd <target-directory>
  ```
After this, the default directory of the terminal will become `<target-directory>`.

### Creating Command Aliases in Mac

1. Open the `~/.zshrc` file:

    ```
    vi ~/.zshrc
    ```

    In the editor, add your alias in the format of `alias="actual command"`. You can add multiple aliases (one alias per line).
2. At the end of the file, add the following line:

    ```
    source ～/.bash_profile
    ```

    In this way, your aliases will be permanent, meaning they will take effect even if you exit the terminal and reopen it.