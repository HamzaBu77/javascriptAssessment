// Question 1 : Use a `switch` statement to assign a day of the week name to a variable based on a number from 1 to 7.

const number = 3;

let day;

switch (number) {
    case 1:
        day = "Monday"
        break;
    case 2:
        day = "Tuesday"
        break;
    case 3:
        day = "Wednesday"
        break;
    case 4:
        day = "Thursday"
        break;
    case 5:
        day = "Friday"
        break;
    case 6:
        day = "Saturday"
        break;
    case 7:
        day = "Sunday"
        break;
    default:
        console.log("Invalid Input")
        break;
}

console.log(day);

// ----------------------           --------------------------------          ------------------------------

// Question 2 : Write a `switch` statement that takes a letter grade (A, B, C, D, F)
// and logs a message like "Excellent", "Good", etc.

let grade = "A"

switch (grade) {
    case "A":
        console.log("Excellent")
        break;

    case "B":
        console.log("Good")
        break;
    
    case "C":
        console.log("Work Hard")
        break;
    case "D":
        console.log("Need Improvement")
        break;
    
    case "F":
        console.log("Failed")
        break;
    
    default:
        console.log("Not Graded Yet")
        break;
}

// -----------------------             --------------------------              -------------------------

// Question 3 : Implement a simple calculator using `switch` statements that performs
// addition, subtraction, multiplication, or division based on an operator input.

let op = "-";

let num = 5;

switch (op) {
    case "+":
        console.log(`Addition is done to the number = ${num + num}`);
        break;
    case "-":
        console.log(`Subtraction is done to the number = ${num - num}`);
        break;
    case "*":
        console.log(`Multiplication is done to the number = ${num * num}`);
        break;
    case "/":
        console.log(`Division is done to the number = ${num / num}`);
        break;

    default:
        console.log(" unknown operation")
        break;
}

// -----------------------           ----------------------------------          --------------------------