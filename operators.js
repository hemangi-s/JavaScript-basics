//operators
//JavaScript supports various types of operators for performing operations on values. Here are some common types of operators with examples:

//1. Arithmetic Operators:
//Arithmetic operators perform mathematical operations.

 //Examples:

let a = 10;
let b = 4;

let sum = a + b;   // Addition
let difference = a - b;   // Subtraction
let product = a * b;   // Multiplication
let quotient = a / b;   // Division
let remainder = a % b;   // Modulus
let exponentiation = a ** b;   // Exponentiation


//  2. Comparison Operators:
// Comparison operators compare two values and return a boolean result.

//Examples:

let x = 5;
let y = "5";

let isEqual = x == y;     // Equal (loose equality, type coercion)
let isStrictEqual = x === y;    // Strict Equal (strict equality, no type coercion)
let isNotEqual = x != y;   // Not Equal (loose inequality, type coercion)
let isNotStrictEqual = x !== y;   // Strict Not Equal (strict inequality, no type coercion)

let greaterThan = x > y;    // Greater Than
let lessThan = x < y;       // Less Than
let greaterOrEqual = x >= y;   // Greater Than or Equal To
let lessOrEqual = x <= y;      // Less Than or Equal To


//  3. Logical Operators:
// Logical operators perform logical operations and return a boolean result.

//  Examples:

let p = true;
let q = false;

let andOperator = p && q;   // Logical AND
let orOperator = p || q;    // Logical OR
let notOperator = !p;       // Logical NOT


//  4. Assignment Operators:
// Assignment operators assign values to variables.

//  Examples:

let z = 10;

z += 5;   // Equivalent to: a = a + 5 (Addition assignment)
z -= 3;   // Equivalent to: a = a - 3 (Subtraction assignment)
z *= 2;   // Equivalent to: a = a * 2 (Multiplication assignment)
z /= 4;   // Equivalent to: a = a / 4 (Division assignment)
z %= 2;   // Equivalent to: a = a % 2 (Modulus assignment)


//  5. Increment and Decrement Operators:
// Increment and decrement operators are used to increase or decrease the value of a variable.

//  Examples:

let counter = 5;

counter++;   // Increment by 1
let incrementedCounter = counter;

counter--;   // Decrement by 1
let decrementedCounter = counter;

console.log(incrementedCounter);
console.log(decrementedCounter);



//  6. Conditional (Ternary) Operator:
// A ternary operator is a concise way to write an `if-else` statement.

//  Example:

let age = 20;

let isAdult = (age >= 18) ? "Yes" : "No";
console.log(isAdult);   // Output: "Yes"

