//VariablesDatatypes.js
// Declare variables
let variableName = "Hello!";
const constantValue = 99;

// Data types
let number = 10;
let string = "text";
let boolean = true;
let array = [1, 2, 3];
let object = { key: "value" };


console.log(variableName);

console.log(constantValue);

console.log(number);

console.log(string);

console.log(array);

console.log(object);


// Variables:
// In JavaScript, variables are used to store and manage data. You can declare variables using the var, let, or const keyword.

// Using var (avoid using var in modern JavaScript, prefer let and const)
var num = 25;

// Using let (mutable, can be reassigned)
let name = "John";
name = "Jane";

// Using const (immutable, cannot be reassigned)
const pi = 3.14;


// DATA TYPES:



// 1. Primitive Data Types:
    //  String: A sequence of characters.
      let greeting = "Hello, World!";
      

    // Number: Numeric data type (integer or floatingpoint).
      let age = 25;
      let pie = 3.14;
      

    //  Boolean: Represents true or false.
      
      let isStudent = true;
      

    //  Undefined:** Represents the absence of a value.
      
      let undefinedVar;
      

    //  Null: Represents the intentional absence of any object value.
      
      let nullVar = null;
      

    //  Symbol: Introduced in ECMAScript 6 (ES6), representing a unique identifier.
      
      const id = Symbol("id");
      

// 2. Complex Data Types:
    //  Object: A collection of keyvalue pairs.
      
      let person = {
        name: "John",
        age: 25,
        isStudent: true
      };
      

    //  Array: An ordered list of values.

    let numbers = [1, 2, 3, 4, 5];

    //  Function: A reusable block of code.

      function add(a, b) {
        return a + b;
      }
      