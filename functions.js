//  Question 1 : Write a function that takes two numbers as parameters and returns their sum.
//  Show how to call this function and display the result.

function sum(num1,num2){
    return num1 + num2;
}

console.log(sum(1,2));

//  ----------------          -------------------------------         -----------------

// Question 2 : Create a function expression (a function assigned to a variable) that 
// multiplies two numbers and returns the product.

const multi = (num1, num2) => {
    return num1 * num2;
}

console.log(multi(2,3));

// -----------------------                  ---------------------------            -------------------------

// Question 3 : Demonstrate function hoisting by calling a function before it is declared. Explain what happens.


Hello();

function Hello(){
    console.log("Hello! I am Hamza.")
}
// Demonstration: function declaration goes at the top of the main function through which we can access function even it is declared down in the heirarchy
// if we don't provide the initialization of the function it will give Reference Error other wise it will let us access the function.

// ---------------------- ----------------------------------- ----------------------- -----------------------
