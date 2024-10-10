// 1. Write a function that fetches data from an API, and implement error handling using `try...catch`.
// How would you log the error message when the API returns a 404 error?

const fetchDataFromApi = async () => {
    try {
        const data = await fetch( 'https://jsonplaceholder.typicode.com/todos/500' );
        if( data.status === 404 ){
            throw new Error( "URL Not Found!" );
        }
    } catch (error) {
        console.log( "OOPS", error )
    }
}

fetchDataFromApi();

//   ----------------------------         --------------------------------------        ----------------------------

// 2. What happens when you try to access a property of `undefined`?
// Demonstrate this error and show how to handle it properly using error handling mechanisms.

const demonstratingUndefined = () => {
    try {
        let something;
        console.log( something );

        if( something === undefined ){
            throw new Error( "You are trying to access an undefined variable." );
        }

    } catch (error) {
        console.log( "OOPS!", error );
    }
}

demonstratingUndefined();

// Demonstration: When a variable is declared but not assigned a value or a variable is declared with var and someone
// try to access it before initialization will give the value of undefined. We can easily catch this error in try/catch
// with appropriate Error message through throw new Error method.


//  ----------------------------             ---------------------------------         ------------------------


// 3. Implement a piece of code that throws a custom error when an invalid input (e.g., a negative number)
// is passed to a function that calculates the square root. Handle this error appropriately.

const customError = ( number ) => {
    try {    
        if( number < 0 || typeof number !== "number" || number === undefined ){
            throw new Error( "Invalid numbers in argument!" );
        }
        const square = number ** 2;
        console.log(square);
        
    } catch (error) {
        console.log( "OOPS!", error );
    }
}

let onPurposeUndefined;
customError(onPurposeUndefined);

// ------------------------            --------------------------------         -------------------------------

// 4. Simulate a scenario where a database query fails due to a connection issue. 
// Write a function that attempts the query and retries up to 2 more times in case of failure, with proper error logging.

const retryFetch = async ( url, retries = 3 ) => {
    for (let attempt = 1; attempt <= retries; attempt++){
        try {
            const fetchURL = await fetch( url );

            if( !fetchURL.ok ){
                throw new Error( "Unable to Fetch Query from Database!" )
            }
            attempt = 3;
            const data = await fetchURL.json();
            console.log( "retryFetch",data );
            
        } catch ( error ) {
            console.error(`Attempt ${ attempt } failed: ${ error.message }`);

            if ( attempt === retries ) {
              throw new Error(`Failed to fetch query from Database after ${ retries } attempts: ${ error.message }`);
            }
        }
        
    }
}

retryFetch('https://jsonplaceholder.typicode.com/todo/1');

//  ----------------------         ---------------------------------      ---------------------------------

// 5. Create a scenario where an external API request times out, and you need to handle this timeout
// using both `Promise.reject` and `setTimeout`. Implement error handling to retry the request twice before giving up.

// const requestTimeOut = async () => {
//         try {
//             const data = await setTimeout(() => {
//                 Promise.reject( new Error( "Request timed out while fetching an external API."));
//             }, 2000);

//             return data;
//         } catch (error) {
//             console.log( "OOPS!", error );
//         }
// }

// requestTimeOut();












