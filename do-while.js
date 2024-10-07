// Question 1 : Write a `do/while` loop that executes at least once and logs "Hello, World!" to the console.

// do {
//     console.log("Hello, World!");
// } while (false);

//   ------------------------     -----------------------------------   -----------------------------------------

// Question 2 : Use a `do/while` loop to generate random numbers between 1 and 10 until the number is 7.


// let i;

// do {
//     i = Math.floor(Math.random() * 10) + 1;
//     console.log(i)
// } while (i !== 7);

//  --------------------------             ------------------------------------         ----------------------------


// Question 3 : Create a `do/while` loop that sums numbers entered by the user until they enter 0.
// (Note: This requires a browser environment.)

let num = 5;
let sum = 0; 
do {
    num = prompt("Type Number to add:");
    // console.log(num);
    sum += num;
    // num--;
} while ( num != 0);

prompt(`The Sum of numbers you added is ${sum}`);

// console.log(sum)
