# MongoDB $inc Operator with Non-Numeric Value

This repository demonstrates an uncommon error in MongoDB: using the `$inc` operator with a non-numeric value.  The `$inc` operator is designed to increment numeric fields; attempting to use it with strings or other non-numeric data types will result in an error.

The `bug.js` file shows the erroneous code, and `bugSolution.js` provides the corrected version.

## How to Reproduce

1.  Ensure you have a MongoDB instance running.
2.  Create a collection named `myCollection`.
3.  Insert a document with an `_id` of 1 and a field named `myField` (initially 0).
4.  Run the code in `bug.js`.  This will result in an error.
5.  Modify the code as shown in `bugSolution.js`. This will successfully increment the field.

## Solution

The solution is simple: Ensure that the field you are incrementing is a numeric type and you are providing a numeric value to the $inc operator.