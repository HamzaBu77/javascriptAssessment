// 1. Write a function `getUserData` that uses `fetch` to get user details from an API.
// The function should use `async/await` to handle the asynchronous call.

const getUserData = async () => {
    try {
        const userData = await fetch('https://jsonplaceholder.typicode.com/users/1');
        if(!userData.ok){
            throw new Error("Unable to fetch Users Data")
        }
        
        const users = await userData.json();

        console.log("GetUserData", users);
        
    } catch (error) {
        console.log("Server stopped working", error);
    }
};

getUserData();

// ------------------------------               -----------------------------            -----------------------------


// 2. Convert the following promise-based code into `async/await`:
// ```javascript
// fetchData()
//   .then(data => processData(data))
//   .catch(error => console.log(error));
// ```

const fetchAndProcessData = async () => {
    try {
        const response = await fetchData();
        await processData( response );
    } catch ( error ) {
        console.log( "Server stopped working", error );
    }
}

fetchAndProcessData();

//  ----------------------------           ------------------------------       ---------------------------

// Create a function `getAllData` that accepts an array of URLs and uses `Promise.all` to 
// fetch data from all URLs in parallel using `async/await`.

const getAllData = async ( urls ) => {
    try {
        const promiseResponses = await Promise.all(urls.map(url => fetch( url )));

        const promisesData = promiseResponses.map(( data ) => {
            if(!data.ok){
                throw new Error( "Unable to fetch data!" );
            }

            return data.json();
        })

        const data = await Promise.all( promisesData );

        console.log( "GetAllData", data );
        
    } catch (error) {
        console.log( "Server stopped working", error );
    }
}

const URLS = [
    'https://jsonplaceholder.typicode.com/posts/1',
    'https://jsonplaceholder.typicode.com/todos/1',
    'https://jsonplaceholder.typicode.com/users/1'
]

getAllData( URLS );

//  ---------------------------                --------------------------------       -----------------------------

// 4. How would you handle errors when multiple promises are running in parallel,
// and you want the error message of the first failed promise using `Promise.race`? Implement this scenario.

const promisesArray = [
    new Promise(( res,rej ) => {setTimeout(() => rej( 1 ),3000 )}),
    new Promise(( res,rej ) => {setTimeout(() => res( 2 ),1000 )}),
    new Promise(( res,rej ) => {setTimeout(() => res( 3 ),1000 )}),
    new Promise(( res,rej ) => {setTimeout(() => rej( 4 ),2000 )}),
    new Promise(( res,rej ) => {setTimeout(() => rej( 5 ),1000 )}),
]

const firstRejectedPromise = async ( promise ) => {
    const rejectedArray = [];
    
    let rejectPromise = await Promise.race(promise)
    .then( ( value ) => {
        // for (const key of value){
        //     console.log("Resolved",key);
        // }
        console.log("Resolved",value);
    })
    .catch( error => console.log("Rejected",error) );


    // const allSettledPromise = await Promise.allSettled( promise );
    // for( const promise of allSettledPromise ){
    //     if( promise.status === "rejected" ){
    //         rejectedArray.push( promise );
    //     }
    // }
    // const rejectedPromise = await Promise.race( rejectedArray );
    // console.log( rejectedPromise.reason );
}

firstRejectedPromise( promisesArray );

//  -----------------------            --------------------------------------          ---------------------------

// 5. Write a function `retryFetch` that retries fetching data from an API
// up to 3 times using `async/await` in case the previous attempt failed.

const retryFetch = async ( url, retries = 3 ) => {
    for (let attempt = 0; attempt < retries; attempt++){
        try {
            const fetchURL = await fetch( url );

            if( !fetchURL.ok ){
                throw new Error( "Unable to Fetch Data!" )
            }
            attempt = 3;
            const data = await fetchURL.json();
            console.log( "retryFetch",data );
            
        } catch ( error ) {
            console.error(`Attempt ${ attempt } failed: ${ error.message }`);

            if ( attempt === retries ) {
              throw new Error(`Failed to fetch after ${ retries } attempts: ${ error.message }`);
            }
        }
        
    }
}

retryFetch('https://jsonplaceholder.typicode.com/todo/1');

//   -------------------------             -------------------------------        ----------------------------