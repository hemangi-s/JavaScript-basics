// ES6 (ECMAScript 2015) introduced several new features and improvements to JavaScript. Here are some of the key features with examples:

//  1. let and const:
//     let and const were introduced to declare variables with block scoping.

   
   let x = 10;
   const PI = 3.14;

   if (x > 5) {
     let y = 20;
     console.log(y); // Output: 20
   }

   console.log(x); // Output: 10
   

//  2. Arrow Functions:
//     Arrow functions provide a concise syntax for writing functions.

   
   // Traditional function
   function add(a, b) {
     return a + b;
   }

   // Arrow function
   const addArrow = (a, b) => a + b;

   console.log(add(3, 5));       // Output: 8
   console.log(addArrow(3, 5));  // Output: 8
   

//  3. Template Literals
//     Template literals allow embedding expressions inside string literals.

   
 // Output: Hello, John!
   
    let nameing = "John";
    let greeting = `Hello, ${nameing}!`;

    console.log(greeting);


//  4.Destructuring Assignment
//     Destructuring allows extracting values from arrays or objects.

   
   // Array destructuring
   let numbers = [1, 2, 3];
   let [a, b, c] = numbers;

   console.log(a, b, c); // Output: 1 2 3

   // Object destructuring
   let person = { firstName: "John", lastName: "Doe" };
   let { firstName, lastName } = person;

   console.log(firstName, lastName); // Output: John Doe
   

//  5. Rest and Spread Operators:
//     The rest and spread operators simplify working with variable numbers of arguments.

   
   // Rest operator
   function sum(...numbers) {
     return numbers.reduce((total, num) => total + num, 0);
   }

   console.log(sum(1, 2, 3, 4, 5)); // Output: 15

   // Spread operator
   let arr1 = [1, 2, 3];
   let arr2 = [...arr1, 4, 5];

   console.log(arr2); // Output: [1, 2, 3, 4, 5]


//  6. Classes:
//     ES6 introduced class syntax for creating objects and implementing inheritance.

   
   class Animal {
    constructor(name) {
      this.name = name;
    }
  
    makeSound() {
      console.log(`${this.name} makes a sound.`);
    }
  }
  
  // Create an instance of the Animal class
  let myAnimal = new Animal("Dog");
  
  // Call the makeSound method
  myAnimal.makeSound(); // Output: Dog makes a sound.
  
   

//  7. Promises:
//     Promises provide a cleaner way to work with asynchronous code.

   
   function fetchData() {
     return new Promise((resolve, reject) => {
       setTimeout(() => {
         resolve("Data fetched successfully!");
       }, 2000);
     });
   }

   fetchData()
     .then(data => console.log(data))
     .catch(error => console.error(error));
   


