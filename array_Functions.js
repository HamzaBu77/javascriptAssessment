//  Question 1 : Create an array of numbers. Use the `map` 
// function to create a new array where each number is multiplied by 2. Show both the original and the new array.

// const numbers = [1,2,3,4,5];

// const doubleNumbers = numbers.map((item) => {
//     return item * 2;
// })

// console.log("Original Array", numbers);
// console.log("Array numbers Multiply by Two", doubleNumbers);


// ----------------------               ---------------------------              --------------------

// Question 2 : Given an array of numbers, use the `filter` 
// function to create a new array containing only the even numbers. Write code to demonstrate this.

// const number = [1,2,3,4,5,6,7,8,9,10];

// const evenNumbers = number.filter((item) => {
//     return item % 2 === 0;
// })

// console.log("Original Array", number);
// console.log("Array of Even Numbers", evenNumbers);

//    ---------------------                ----------------------             ----------------------

// Question 3 : Use the `reduce` function to find the sum of all numbers in an array.
// Provide the code for this operation.

const number = [1,2,3,4,5,6,7,8,9,10];

const sum = number.reduce((acc,item) => {
    return acc + item;
}, 0)

console.log("Original Array", number);
console.log("Sum of all Numbers", sum);

//   --------------------                 ------------------------            --------------------