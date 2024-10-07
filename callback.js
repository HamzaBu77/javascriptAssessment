// Question 1 : Write a function `greet(name, callback)` that takes a name and a callback function.
// The function should print "Hello, [name]". Then, call the callback function. Demonstrate using this function.

function greet(name,callback){
    const greeting = `"Hello ${name}"`;
    return callback(greeting);
}

function fullGreet(msg){
    console.log(msg);
}

greet("Hamza", fullGreet);

//  -------------------------              ----------------------------                  --------------------------

// Question 2 : Create an array of numbers and use the `forEach` method with a 
// callback function to log each number to the console.

const numbers = [1,2,3,4,5];

numbers.forEach((item) => {
    console.log(item);
})

//      ------------------                -------------------------             ----------------------------

// Question 3 : Write a function that simulates an asynchronous operation
// using `setTimeout` and accepts a callback to execute after a delay.

function iAmAsynchronous(callback){
    let name = "Hello! I am Hamza";
    setTimeout(() => {
        callback(name);
    }, 1000)
}

function intro(msg){
    console.log(msg);
}

iAmAsynchronous(intro);

//   ---------------------             --------------------------          ----------------------

