// Question 1 : Rewrite a regular function as an arrow function that returns the square of a number.

function Hello(num){
    console.log(`I am regular Function and square of num is ${num * num}`);
}

const Hello1 = (num) => {
    console.log(`I am arrow Function and square of num is ${num * num}`)
}

Hello(2);
Hello1(3);

//   ----------------------   ---------------------------   ----------------------    ---------------------------

// Question 2 : Use an arrow function inside the `map` method to create a new array
// from an existing array of numbers, where each number is incremented by 1.

const numbers = [1,2,3,4,5];

const newNumbers = numbers.map(item => item +1);

console.log("Original Array", numbers);
console.log("Incremented Array", newNumbers);

//   --------------------    -------------------------   ---------------------    -------------------

// Question 3 : Demonstrate how the `this` keyword behaves differently in an
// arrow function compared to a regular function. Provide code examples.

const obj = {
    name: "Hamza",
    myself: function(){
        console.log(`My name is ${this.name}`);
    },
    intro: () => {
        console.log(`My name is ${this.name}`);
    }
}

obj.myself();
obj.intro();

//Demonstration: As we know that arrow function dont have his own this keyword and if we use this in arrow functions
// it refers to it's parent attribute and methods in this scenario myself is using simple function and have access to
// obj name attribute and print Hamza but arrow function is trying to acces obj parent attribute in which case he is finding
// name attribute in windows and gives undefined.