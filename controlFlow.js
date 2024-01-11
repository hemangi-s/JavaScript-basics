//controlFlow
// Control flow in JavaScript involves directing the flow of your program's execution based on conditions and loops. Here are examples of control flow structures:

//  1. If Statement:
// The `if` statement is used for conditional execution.

//  Example:

let isRaining = true;

if (isRaining) {
  console.log("Take an umbrella!");
} else {
  console.log("Enjoy the weather!");
}


//  2. Switch Statement:
// The `switch` statement is used to perform different actions based on different conditions.

//  Example:

let day = "Monday";

switch (day) {
  case "Monday":
    console.log("Start of the week");
    break;
  case "Friday":
    console.log("End of the week");
    break;
  default:
    console.log("Midweek blues");
}


//  3. For Loop:
// The `for` loop is used to iterate over a block of code a fixed number of times.

//  Example:

for (let i = 0; i < 5; i++) {
  console.log(i);
}


//  4. While Loop:
// The `while` loop is used to execute a block of code as long as a specified condition is true.

//  Example:

let count = 0;

while (count < 3) {
  console.log("Count: " + count);
  count++;
}


//  5. Do-While Loop:
// The `do-while` loop is similar to the `while` loop but ensures that the code block is executed at least once before checking the condition.

//  Example:

let number = 1;

do {
  console.log("Number: " + number);
  number++;
} while (number <= 3);


//  6. ForEach Loop:
// The `forEach` loop is used to iterate over elements in an array.

//  Example:

let colors = ["red", "green", "blue"];

colors.forEach(function(color) {
  console.log(color);
});


//  7. Break and Continue Statements:
// The `break` statement is used to exit a loop prematurely, and the `continue` statement is used to skip the rest of the loop and move to the next iteration.

//  Example:

for (let i = 0; i < 5; i++) {
  if (i === 3) {
    break; // exits the loop when i is 3
  }
  console.log(i);
}

for (let i = 0; i < 5; i++) {
  if (i === 2) {
    continue; // skips the iteration when i is 2
  }
  console.log(i);
}

