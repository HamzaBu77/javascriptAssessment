// Question 1 : Write a `for` loop that prints the numbers from 1 to 10 in the console.

for (let i =1; i < 11; i++){
    console.log(i);
}

//    -------------------------                ---------------------------              ------------------------

// Question 2 : Given an array
// `let fruits = ['apple', 'banana', 'cherry'];`, use a `for...of` loop to log each fruit to the console.

let fruits = ['apple', 'banana', 'cherry'];

for (const fruit of fruits){
    console.log(fruit);
}

// -------------------------                  ---------------------------            ------------------------

// Question 3 : Given an object
// `let person = { name: 'Alice', age: 25 };`, use a `for...in` loop to log each key and its value.

let person = { 
    name: 'Alice', 
    age: 25 
};

for(const data in person){
    console.log(`${data} value is ${person[data]}`);
}

//   ----------------------                -----------------------              --------------------

