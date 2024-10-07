//  Question 1 : Write code that checks if a number is positive, negative, or zero using `if...else` statements.

function check(number){
    if(number === 0){
        console.log("Zero");
    } else if(number > 0){
        console.log("Positive");
    } else {
        console.log("Negative")
    }
}

check(0);

//  ---------------------   -----------------------------------------------   ------------------------------

// Question 2 : Create a function that takes a score and returns a 
// grade (A, B, C, D, F) based on the score using `if...else if...else` statements.

function grade(grade){
    if(grade === "A"){
        console.log("Excellent");
    } else if(grade === "B"){
        console.log("Good");
    } else if(grade === "C"){
        console.log("Need Improvement");
    }  else if(grade === "D"){
        console.log("Focus On Study");
    }   else if(grade === "F"){
        console.log("Ungraded");
    }  else {
        console.log("Not a Grade");
    }
}

grade("B");

// ---------------------------             ----------------------------          -----------------------------

// Question 3 : Use a ternary operator to check if a number is even or odd and log the result.

function evenOrOdd (num){
    num % 2 === 0 ? console.log("Even") : console.log("Odd");
}

evenOrOdd(2);