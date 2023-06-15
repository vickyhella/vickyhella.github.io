---
title: Importing Bash Variables
sidebar_position: 3
---

To import a Bash variables to a python script, you can make use of environment variables by following the steps below:

1. In your Bash script, export the variable as an environment variable using the `export` command. For example, let's say you want to export a variable called `MY_VARIABLE`:

  ```bash
  export MY_VARIABLE="Hello, World!"
  ```

 
1. In your Python script, you can access the environment variable using the `os` module. Import the `os` module at the beginning of your Python script:

  ```python
  import os
  ```

 
1. Access the environment variable using the `os.environ` dictionary, which provides access to all the environment variables. Retrieve the value of the variable using its name:

  ```python
  my_variable = os.environ.get('MY_VARIABLE')
  ```

  The `os.environ.get()` function retrieves the value of the environment variable specified by the argument (`MY_VARIABLE` in this case). It returns `None` if the variable is not found.

1. Now, you can use the `my_variable` variable in your Python script:

  ```python
  print(my_variable)  # Output: Hello, World!
  ```

1. To run the scripts, you can also execute the following commands in the terminal:

  ```sh
  $ source script.sh   # Set the Bash variable
  $ python script.py   # Run the Python script
  ```

  The output will be:

  ```bash
  Hello, World!
  ```

  By sourcing the Bash script, the environment variable is made available to the Python script. The Python script then accesses the value of the environment variable using `os.environ.get()`.