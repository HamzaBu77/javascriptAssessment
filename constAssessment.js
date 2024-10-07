//Question 1 : Declare a constant variable using `const` and assign it a value.
// Try to reassign it to a new value. What happens? Write code to show this behavior.


const first = "Hello";
console.log(first);
first = "Two";

// Explanation: const variable cannot be redeclared and cannot be reassigned so when we try to run the file it will
// give us the error of TypeError that we cannot assign new value to the const variable.

//    -----------------               ------------------------             --------------------

// Question 2 : Create a `const` object with some properties.
// Modify one of its properties. Is this allowed? Write code to demonstrate.

const obj = {
    name: "Hamza",
    lastName: "Asghar",
    age: 24,
}

obj.age = 26;

console.log(obj);

// Explanation: As we know the behaviour of const that it donot allow to redeclare and to reassign the value to the 
// variable. But in case of Objects and Arrays what happen that the const is assigned with the reference of object
// so it allow us to modify the object or array as we are not changing it to the new object it blocks us to assign it 
// a new value or object or to redeclared variable with the same name.

//     --------------------                 ------------------             ---------------------


// Question 3 : Declare a constant array using `const`, then add new elements to the array.
// Is this allowed? Demonstrate with code.


const array = [1,2,3,4,5,6];

array.push(7);
array.unshift(0);

console.log(array);

// Explanation: As const only block us to redeclared and reassigning the value to the assigned variable. In case of
// Arrays it allow us to modify the array push or pop from Array as it is maintaining its behaviour by not allowing us to
// declare the new array with same name and block us to reassign the new Array to the existing const Array.

//    --------------------               ---------------------            ----------------