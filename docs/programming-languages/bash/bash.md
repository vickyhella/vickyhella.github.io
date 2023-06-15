---
title: Bash
sidebar_position: 1
---

## Introduction

This page documents bash syntax that I've learned.
## Define variables

In Bash, you can define a variable by using the following syntax:

```bash
variable_name=value
# Example:
name="John"
```

:::note
There should be no spaces around the equals (=) sign.
:::

Variables in Bash are not typed, so you don't need to specify the data type. They can hold strings, numbers, or any other type of data.

## `echo` variables

To access the value of a variable, you can use the variable name preceded by the dollar sign ($):

```bash
echo $name
```

You can also assign the output of a command to a variable using command substitution:

```bash
current_date=$(date)
```

In this example, the output of the date command is assigned to the current_date variable.

## `export` variables

Variables in Bash are by default local to the current shell or script. If you want to export a variable to be accessible by other scripts or programs, you can use the `export` command:

```
export MY_VARIABLE_1
export MY_VARIABLE="Hello, World!"
```

It can then be imported. For an example of how a Bash variable is imported and used in a Python script, see [Importing Bash Variables](../python/import-bash-variables.md).

## `if` statement

```bash
if [[ "$fname" == "a.txt" || "$fname" == "c.txt" ]]; then 
  echo Hello # a command to run if the condition is met
fi
```

**More info**:
- `==`: if `$fname` equals to `a.txt` or `c txt`
- `\\`: True if either expression1 or expression2 is true.
- `&&`: True if both expression1 and expression2 are true.