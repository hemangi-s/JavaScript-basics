 # ES6 JavaScript Features

This repository contains a collection of code snippets demonstrating key features introduced in ECMAScript 2015 (ES6). Each feature is explained in detail with step-by-step examples to help junior developers understand the concepts.

## 1. let and const

ES6 introduced the `let` and `const` keywords for declaring variables with block scope. This is a significant improvement over the traditional `var` keyword, which has function scope.

### Example:

```javascript
// Declare a variable with `let`
let x = 10;

// Declare a constant with `const`
const PI = 3.14;

if (x > 5) {
  // Declare a variable with `let` inside the block
  let y = 20;

  console.log(y); // Output: 20
}

console.log(x); // Output: 10
```

In this example, the `let` keyword is used to declare the variable `x` within the global scope. The `const` keyword is used to declare the constant `PI`. The `if` statement creates a new block scope, and the `let` keyword is used to declare the variable `y` within that block. The value of `y` is only accessible within the block.

## 2. Arrow Functions

Arrow functions provide a concise syntax for writing functions. They are defined using the `=>` operator.

### Example:

```javascript
// Traditional function
function add(a, b) {
  return a + b;
}

// Arrow function
const addArrow = (a, b) => a + b;

console.log(add(3, 5));       // Output: 8
console.log(addArrow(3, 5));  // Output: 8
```

In this example, the traditional function `add` is defined using the `function` keyword. The arrow function `addArrow` is defined using the `=>` operator. Both functions perform the same addition operation and produce the same output.

## 3. Template Literals

Template literals allow embedding expressions inside string literals. They are denoted by backtick characters (``).

### Example:

```javascript
// Template literal
let name = "John";
let greeting = `Hello, ${name}!`;

console.log(greeting

Generated by [BlackboxAI](https://www.blackbox.ai)