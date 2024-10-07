// Question 1 : Write a function that returns a Promise which resolves after 2 seconds.
// Use `.then()` to log a message when the Promise is resolved.

function dummyPromise(){
    return new Promise((res,rej) => {
        setTimeout(() => {
            res("I am resolved.")
        }, 2000)
    })
}

dummyPromise()
.then((value) => {
    console.log(value);
})

//   ---------------------               ---------------------------               -----------------------


// Question 2 : Create a Promise that rejects with an error message.
// Use `.catch()` to handle the error and log it to the console.

function dummyPromise1(){
    return new Promise((res,rej) => {
        setTimeout(() => {
            rej("I am rejected.")
        }, 1000)
    })
}

dummyPromise1()
.catch((error) => {
    console.log(error);
})

//    ---------------------                ---------------------------           ---------------------

// Question 3 : Use `Promise.all()` to execute multiple Promises in parallel.
// Demonstrate how to handle the results.

const array = [
    new Promise((res,rej) => {setTimeout(() => res("1"))}),
    new Promise((res,rej) => {setTimeout(() => res("2"))}),
    new Promise((res,rej) => {setTimeout(() => res("3"))}),
];

const array1 = [
    new Promise((res,rej) => {setTimeout(() => res("1"))}),
    new Promise((res,rej) => {setTimeout(() => res("2"))}),
    new Promise((res,rej) => {setTimeout(() => rej("3"))}),
];

Promise.all(array)
.then(value => console.log(value))
.catch(error => console.log(error));

Promise.all(array1)
.then(value => console.log(value))
.catch(error => console.log(error));

// Demonstration: Promise.all recieve an array of promises and provide with the resolved value in .then() and 
// if any promise got rejected in the array of promise it skipped the resolved values and anyother remaining 
// promises are overseen and the promise.all provide the first rejected promise in .catch().

//    ----------------------                     ------------------------            -------------------------

