//Topic Var
//-  Question 1 : Write a JavaScript code snippet where you declare a variable using `var`, assign it a value,
//and then reassign it to a new value. Display both values in the console.

// var first = "one";
// console.log(first);
// first = 2;
// console.log(first);


//   ------------------      -------------------        ----------------------------

//Question 2 : Declare a variable inside a function using `var`.
//Try accessing it outside the function. What happens? Write code to demonstrate this behavior.

// function varBehaviour(){
//     var test = 9
// }

// {
//     var test = "nine"
// }

// console.log(test);

// Explanation: Although var have a global scope but it is respective to the block in which it is declared,
// so test have a global scope with respect to the function but function have his own block of code that is 
//not accessible by main scope scope of main function that it why it is giving reference error that test is 
//not defined. if test is written in side a block that come in the range of main function it will print the value of test.

//         ----------------         ----------------    ------------  -------------------

//Question 3 : Create a `for` loop using `var` to declare the loop counter. Inside the loop, log the counter variable. 
//After the loop, log the counter variable again. What value do you get? Explain with code.


for (var i = 0; i < 5; i++){
    console.log(i);
}

console.log("Outside loop", i);

// Explanation: As var have a global scope and is declared for setting the range of For Loop so it is consider to be in 
// the main function scope rather then the block scope of for loop that is why it is accessible outside the loop, so when
// we increment the counter in the for loop it shows the normal behaviour of incrementing its value and come outside the 
// loop when it exceed the range of for loop and outside the loop it has the value that is not in the range of for loop that is 5.