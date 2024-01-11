//functions
// Functions in JavaScript allow you to group code into reusable blocks, providing a way to structure and organize your code. Here are different aspects of functions in JavaScript with examples:

//  1. Function Declaration:
// A function declaration defines a function with a specified name.

//  Example:

function greet(name) {
    console.log("Hello, " + name + "!");
  }
  
  // Call the function
  greet("John");
  
  
  //  2. Function Expression:
  // A function expression defines a function as part of an expression, often assigned to a variable.
  
  //  Example:
  
  const addition = function (a, b) {
    return a + b;
  };
  
  // Call the function
  let result = addition(5, 3);
  console.log(result); // Output: 8
  
  
  //  3. Arrow Function:
  // Arrow functions provide a concise syntax for writing functions.
  
  //  Example:
  
  const multiplication = (a, b) => a * b;
  
  // Call the function
  let product = multiplication(4, 6);
  console.log(product); // Output: 24
  
  
  //  4. Function with Default Parameters:
  // You can provide default values for function parameters.
  
  //  Example:
  
  function greet(name = "Guest") {
    console.log("Hello, " + name + "!");
  }
  
  // Call the function
  greet();          // Output: Hello, Guest!
  greet("John");    // Output: Hello, John!
  
  
  //  5. Rest Parameters:
  // The rest parameter syntax allows a function to accept an indefinite number of arguments as an array.
  
  //  Example:
  
  function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
  }
  
  // Call the function
  let totalSum = sum(1, 2, 3, 4, 5);
  console.log(totalSum); // Output: 15
  
  
  //  6. Callback Functions:
  // Functions can be passed as arguments to other functions.
  
  //  Example:
  
  function performOperation(a, b, operation) {
    return operation(a, b);
  }
  
  // Define callback functions
  const add = (x, y) => x + y;
  const multiply = (x, y) => x * y;
  
  // Use callback functions
  console.log(performOperation(3, 4, add));        // Output: 7
  console.log(performOperation(3, 4, multiply));   // Output: 12
  
  
  //  7. Closure:
  // A closure is a function that has access to variables from its outer (enclosing) scope.
  
  //  Example:
  
  function outerFunction() {
    let outerVariable = "I am from the outer function";
  
    function innerFunction() {
      console.log(outerVariable);
    }
  
    return innerFunction;
  }
  
  const closure = outerFunction();
  closure(); // Output: I am from the outer function
  
  
  //  8. Recursive Function:
  // A recursive function is a function that calls itself.
  
  //  Example:
  
  function factorial(n) {
    if (n === 0 || n === 1) {
      return 1;
    } else {
      return n * factorial(n - 1);
    }
  }
  
  // Call the recursive function
  console.log(factorial(5)); // Output: 120
  
  
  