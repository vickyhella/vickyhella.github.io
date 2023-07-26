---
title: Command Variables
sidebar_position: 3
---

## Set a command output as a variable

To use the output of a specific command in another command:

```bash
# Command 1: Save the output to a variable
variable=$(command1)

# Command 2: Use the variable in another command
command2 $variable
```

- `$(command1)` executes `command1` and captures its output into the variable `variable`.
- In `command2`, you can use `$variable` to access the value captured from `command1`.

:::info
To clear a variable in bash, use the `unset` command:

```bash
unset variable
```
:::
## Set a segment of a command output as a variable

If you only want a segment of a command output to be used in another command, follow the steps below.

Assume your command output is like this and you want to save `vk-docker` to a variable:

```bash
# Example: the output of the "multipass list" command:
Name                    State             IPv4             Image
vk-docker               Running           192.168.205.12   Ubuntu 22.04 LTS
                                          172.17.0.1
```

To extract the value `vk-docker` and store it in a variable named `instance`, you can use command substitution along with text processing utilities such as `grep`, `awk`, or `sed`. Since the output appears to be in a table-like format, we can use `awk` to parse it:

```bash
# Save the output of your command to a variable
command_output=$(your_command_here)

# Use awk to extract the value of the "Name" column
instance=$(echo "$command_output" | awk 'NR > 1 { print $1; exit }')

# Display the value of the "instance" variable
echo "$instance"
```

**Explanation**:

1. `command_output`: This variable holds some output from a command execution. It could be a multi-line string where each line contains information. 
1. `echo "$command_output"`: prints the value of the `command_output` variable to the standard output. 
1. `awk 'NR > 1 { print $1; exit }'`: `awk` is a powerful text processing tool used to manipulate and analyze structured data like columns and rows:
  - `awk`: Invokes the `awk` command to process the text. 
  - `'NR > 1 { print $1; exit }'`: the `awk` script enclosed within single quotes. It defines how the input text should be processed. 
  - `NR > 1`: a condition in `awk`. `NR` stands for "Number of Records" and represents the current line number being processed. `NR > 1` means we are only interested in lines with line numbers greater than 1, excluding the first line. 
  - `{ print $1; exit }`: actions to be performed when the condition `NR > 1` is true. 
    - `print $1`: prints the first field of the current line. In `awk`, fields are separated by whitespace (spaces or tabs), and the first field is denoted by `$1`. It essentially extracts the first word or value from the current line. 
    - `exit`: exits `awk` after processing the first line that matches the condition `NR > 1`. It means we only want the value from the first matching line. 
4. `instance=$(...)`: captures the output of the whole command enclosed in `$(...)` and assigns it to the variable `instance`.

:::info

Keep in mind that this example assumes that the "Name" column contains no spaces or special characters in its values. If the data in the "Name" column is more complex, the `awk` command might need to be adjusted accordingly.

:::

You can run the commands in a single line as follows:

```bash
command_output=$(multipass list)&&instance=$(echo "$command_output" | awk 'NR > 1 { print $1; exit }')
```

Now if you run `echo $instance`, you will get `vk-docker`.

## Save the variable persistently

In Unix/Linux (bash), variables set in a terminal session will only be effective for the duration of that session. Once you close the terminal or log out, the variables will be lost.

To make a variable permanent so that it is available across terminal sessions or even after system reboots:

- Bash: add the following line to your `~/.bashrc` file:

  ```bash
  export instance="vk-docker"
  ``` 

- Other shells like zsh: modify the appropriate configuration file (`~/.zshrc`).

After making the change, save the file and run `source ~/.bashrc` (or `source ~/.zshrc` for zsh) to apply the changes immediately without having to restart the terminal.
