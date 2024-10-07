//  Question 1 : Rewrite a function that returns a Promise using `async`/`await` syntax.
//  Demonstrate how to call this function and handle its result.

// function dummyPromise(){
//     return new Promise((res,rej) => {
//         setTimeout(() => {
//             res("I am resolved.")
//         }, 2000)
//     })
// }

// dummyPromise()
// .then((value) => {
//     console.log(value);
// })

// const dummyPromise = async () => {
//     const result = await setTimeout(() => console.log("I am resolved."), 1000);
//     return result;
// }

// dummyPromise();

// Demonstration: When we initialize a function with async it force the function to return a promise to handle.
// So when to manage any data that will take time we use await before it and tells the code to pause until the 
// operation is done. this is how we can manage promises uses async await and reduce all the boilerplate code
// needed for promises.

//  ------------------               ----------------------------               --------------------


// Question 2 : Write an `async` function that waits for multiple Promises using `await`,
// then logs the results once all are resolved.

// const dummy = async () => {
//     try {
//         const promise1 = await setTimeout(() => console.log("1"), 1000);
//         const promise2 = await setTimeout(() => console.log("2"), 2000);
//         const promise3 = await setTimeout(() => console.log("3"), 3000);

//         return {
//             promise1,
//             promise2,
//             promise3,
//         };
//     } catch (error) {
//         throw new Error(error);
//     }
// }

// dummy();

//  ---------------------------         --------------------------            ---------------------

// Question 3 : Demonstrate error handling in an `async` function using `try...catch` 
// when awaiting a Promise that may reject.


// const dummy = async () => {
//     try {
//         const promise1 = await setTimeout(() => console.log("1"), 1000);
//         const promise2 = await setTimeout(() => console.log("2"), 2000);
//         const promise3 = await setTimeout(() => console.log("3"), 3000);

//         return {
//             promise1,
//             promise2,
//             promise3,
//         };
//     } catch (error) {
//         throw new Error(error);
//     }
// }

// dummy();

// Demonstration: For Error handling in Async/Await function the widely used mechanism is to use try catch block.
// we put our business logic and promises in try block and whenever any of the promise is failed it is handled in the 
// catch block of try catch which provide an error attribute that is used to throw a new Error and tell about 
// why the error occurred.



