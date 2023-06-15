---
title: If...Else Statement
sidebar_position: 4
---

This document explains how to write `if...else` statements in Python.

```python
# Define a variable
x = 10

# Simple if statement
if x > 5:
    print("x is greater than 5")

# if-else statement
if x > 5:
    print("x is greater than 5")
else:
    print("x is less than or equal to 5")

# if-elif-else statement
if x > 10:
    print("x is greater than 10")
elif x < 10:
    print("x is less than 10")
else:
    print("x is equal to 10")
```


In the first `if` statement, we check if `x` is greater than 5. If the condition is `True`, the code block indented under the `if` statement will execute and print "x is greater than 5".

In the second `if-else` statement, we check if `x` is greater than 5. If the condition is `True`, the code block under the `if` statement executes. If the condition is `False`, the code block under the `else` statement executes.

In the third `if-elif-else` statement, we check multiple conditions. The `elif` statement stands for "else if" and allows us to check an additional condition if the previous condition(s) are `False`. If none of the conditions are `True`, the code block under the `else` statement executes.

You can modify the conditions and code blocks according to your specific requirements.
