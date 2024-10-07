// Question 1 : Declare a variable using `let` inside a block scope (e.g., inside an `if` statement). 
// Try accessing it outside the block. Write code to demonstrate what happens.

if (true){
    let first = "Hello";
}

console.log(first);

// Explanation: Let have a block scope and when try to access it outside the loop of if condition it will give a 
// Refrence Error because the first variable is only accessible in it's block scope and we cannot access a variable
// declared with let outside it's block.

//    ---------------------               ----------------------                --------------------


// -  Question 2 : Write code that shows variables declared with `let` cannot be redeclared in the same scope but
// can be reassigned. Provide examples.

let same = "Same";
console.log("I am unchanged", same);

same = "Changed";
console.log("I am changed", same);

// let same; // Uncomment to check what happens when you redeclared the variable.

// Explanation: variable declared with let have a block and if we try to assign a new variable with let and with the
// same name it will provide the SyntaxError of identifier has already been declared and cannot let you access the file
// this is all because let variable can be reassigned a value but cannot be redclared with same name, changing the value
// same variable works fine and shows the same value of the variable until it is changed.

//  ----------------------                 ----------------------------               -------------------------



// Question 3 : Create a `for` loop using `let` to declare the loop counter. Inside the loop, log the counter variable.
// After the loop, try logging the counter variable again. What do you observe? Demonstrate with code.

for (let i = 0; i < 5; i++){
    console.log(i);
}

console.log("Outside the Loop", i);

// Explanation: The loop works fine but when we try to access the variable outside the loop it will give ReferenceError
// because let variable assign themselves to the nearest {} block scope and in this case it assign itself to the block
// of for loop that is why it gives the ReferenceError.

//  ---------------            --------------         ----------------             -----------------