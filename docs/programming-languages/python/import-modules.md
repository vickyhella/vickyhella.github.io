---
title: Importing Python Modules
sidebar_position: 2
---

## Overview

This document describes how to import another Python module in your project so that you can use its functions in other location.

This document assumes that your project has the following hierarchy:

```
myproject/
├── README.md
├── requirements.txt
├── main.py
├── modules/
│   ├── __init__.py
│   ├── module1.py
│   └── subpackage/
│       ├── __init__.py
│       ├── module2.py
└── tests/
    ├── __init__.py
    ├── test_module1.py
    └── subpackage/
        ├── __init__.py
        ├── test_module2.py
```

In this example, the top-level `myproject` directory contains a subdirectory called `modules`, which contains your Python module `module1.py`.

The subpackage `subpackage` contains the module `module2.py`.

The `__init__.py` file is an empty file that tells Python the `modules` directory should be treated as a package.

:::info Subpackage:

To make your module importable from other parts of your project, place it in the appropriate directory within your package. 

If your module is a top-level module (i.e., not part of a subpackage), you can place it directly in the main package directory (`modules`). If it's part of a subpackage, you should place it in the appropriate subdirectory within the package directory.
:::


This document assumes that your `module1.py` and `module2.py` define the functions `my_function_1` and `my_function_2` below:

```python
#!/usr/bin/env python3
# -*- coding: utf-8 -*-

# module 1 function
def my_function_1():
    print("Module 1")
```

```python
#!/usr/bin/env python3
# -*- coding: utf-8 -*-

# module 2 function
def my_function_2():
    print("Module 2")
```

## Import an Entire Module

To import the whole `module1.py` module from other parts of your project, use the dot notation as follows:

```python
import modules.module1
```

To import the whole `module2.py` module:

```python
import modules.subpackage.module2
```

With this `import` statement, all functions from the module can be imported.

## Import a Specific Function

To import a specific function from a module:

```python
from modules.module1 import my_function_1
```

```python
from modules.subpackage.module2 import my_function_2
```

You can also import more functions if needed:

```python
from modules.module1 import my_function_1 my_another_function
```

## Give a Function an Alias

Sometimes the function name can be too long or duplicates with another function name. In this case, you can give your function an alias:

```python
from modules.module1 import my_function_1 as alias_1
```

In this way, you can call `my_function_1` using `alias_1`.

## Give a Module an Alias

Similarly, ou can also give your module an alias:

```python
import module1 as module_1
```

With this `import` statement, you can call `module1` using `module_1`.

## Import all Functions in a Module

To import all the functions in a module, use the asterisk (*) in the `import` statement:

```python
from module1 import *
```

## Running Python Scripts in Bash Scripts

To use your python modules in a bash script, you can't use the `import` statement. Instead, use the `python module1.py` command in your script:

```bash
python module1.py
```