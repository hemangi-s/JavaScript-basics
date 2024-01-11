// ObjectsandArrays
// Objects and arrays are fundamental data structures in JavaScript. They allow you to organize and store data in a structured way. Here are examples of objects and arrays:

//  Objects:

// 1. Object Declaration:
//     Objects are collections of keyvalue pairs.

   
   let person = {
     name: "John",
     age: 30,
     isStudent: false,
     address: {
       city: "New York",
       zipCode: "10001"
     }
   };
   

// 2. Accessing Object Properties:
//     You can access object properties using dot notation or square brackets.

   
   console.log(person.name);             // Output: John
   console.log(person["age"]);           // Output: 30
   console.log(person.address.city);     // Output: New York
   

// 3. Modifying Object Properties:
//     Object properties can be modified after creation.

   
   person.age = 31;
   person["isStudent"] = true;
   

// 4. Adding and Removing Object Properties:
//     You can add new properties or delete existing ones.

   
   person.gender = "Male";
   delete person.isStudent;
   

//  Arrays:

// 1. Array Declaration:
//     Arrays are ordered lists of values.

   
   let fruits = ["apple", "banana", "orange"];
   

// 2. Accessing Array Elements:
//     Elements in an array are accessed by their index (starting from 0).

   
   console.log(fruits[0]);   // Output: apple
   console.log(fruits[1]);   // Output: banana
   

// 3. Modifying Array Elements:
//     Array elements can be modified after creation.

   
   fruits[2] = "grape";
   

// 4. Adding and Removing Array Elements:
//     You can add or remove elements from an array.

   
   fruits.push("watermelon");   // Add to the end
   fruits.pop();                 // Remove from the end

   fruits.unshift("kiwi");       // Add to the beginning
   fruits.shift();                // Remove from the beginning
   

// 5. Iterating Through Arrays:
//     Arrays can be iterated using loops or array methods.

   
   // Using for loop
   for (let i = 0; i < fruits.length; i++) {
     console.log(fruits[i]);
   }

   // Using forEach method
   fruits.forEach(function (fruit) {
     console.log(fruit);
   });
   

//  Combining Objects and Arrays:

// You can also have arrays of objects or objects containing arrays:


let students = [
  { name: "Alice", age: 20, grades: [90, 85, 88] },
  { name: "Bob", age: 22, grades: [78, 92, 80] },
  { name: "Charlie", age: 21, grades: [88, 87, 92] }
];


