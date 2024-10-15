---
title: Basic MySQL Commands
sidebar_position: 1
---

## Overview

- `SELECT` - extracts data from a database
- `UPDATE` - updates data in a database
- `DELETE` - deletes data from a database
- `INSERT INTO` - inserts new data into a database
- `CREATE DATABASE` - creates a new database
- `ALTER DATABASE` - modifies a database
- `CREATE TABLE` - creates a new table
- `ALTER TABLE` - modifies a table
- `DROP TABLE `- deletes a table
- `CREATE INDEX` - creates an index (search key)
- `DROP INDEX` - deletes an index

## Syntax

### SELECT: extracts data from a database

```
SELECT column1, column2, ...
FROM table_name;

# example: extracts all data from a table
SELECT * FROM table_name;
SELECT CustomerName, City, Country FROM Customers;
```

### 