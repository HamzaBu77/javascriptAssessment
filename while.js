// Question 1 : Use a `while` loop to print numbers from 1 to 5.

// let i = 1;

// while (i < 6) {
//     console.log(i)
//     i++;
// }

// --------------------------          ----------------------------------------        ------------------------


// Question 2 : Write a `while` loop that calculates the factorial of a given number.

// let product = 0;

// let j = 1;

// while (j < 6){
//     if( j === 1){
//         product += j
//     } else {
//         product *= j
//     }
//     j++;
// }

// console.log("Factorial is ",product);

// -----------------------------      --------------------------------------------     ------------------------------

// Question 3 : Create a `while` loop that asks the user for input using `prompt` until they type "exit".
// (Note: This requires a browser environment.)

let exit ="";

while (exit !== "exit"){
    exit = prompt("Type exit to skip this prompt:");
}

//   --------------------------      ------------------------------------    ----------------------------------