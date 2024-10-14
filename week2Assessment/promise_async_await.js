// 1. Write a function `getUserData` that uses `fetch` to get user details from an API.
// The function should use `async/await` to handle the asynchronous call.

const getUserData = async () => {
    try {
        const userData = await fetch('https://jsonplaceholder.typicode.com/users/1');
        if( !userData.ok ){
            throw new Error( "Unable to fetch Users Data" )
        }
        
        const user = await userData.json();

        if( !user ){
            throw new Error( "Error occurred during data conversion to json." )
        }

        console.log( "User Data fetched :", user );
        
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
        if( !response ){
            throw new Error( "Fetch API failed" );
        }
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
        if( Array.isArray(urls) === false || !urls || urls.length === 0){
            throw new Error( "Parameter is not an Array or empty" );
        };

        const promiseResponses = await Promise.all(urls.map(url => fetch( url )));

        if( !promiseResponses){
            throw new Error( "Cannot Fetch URL." )
        }

        const promisesData = promiseResponses.map(( data ) => {
            if(!data.ok){
                throw new Error( "Unable to fetch data!" );
            }

            return data.json();
        })

        const data = await Promise.all( promisesData );

        if( !data ){
            throw new Error( "Error occurred while converting data into json." )
        }

        console.log( "Data fetched Successfully and the response is :", data );
        
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
    try {
        if( Array.isArray(promise) === false || promise.length === 0 || !promise ){
            throw new Error( "The parameter is not an array or the array is empty" );
        }
        const rejectedArray = [];
        // let rejectPromise = await Promise.race(promise)
        // .then( ( value ) => {
        //     // for (const key of value){
        //     //     console.log("Resolved",key);
        //     // }
        //     console.log("Resolved",value);
        // })
        // .catch( error => console.log("Rejected",error) );

        let index = 0;
        const allSettledPromise = await Promise.allSettled( promise );
        if( !allSettledPromise ){
            throw new Error("Error resolving Promises");
        }
        for( const promise of allSettledPromise ){
            
            if( promise.status === "rejected" ){
                
                rejectedArray.push( index );
            }
            index++;
        }

        const promiseArrayForRace = rejectedArray.map( index => promise[index]);
        // for( const index in rejectedArray){
        //     promiseArrayForRace.push(promise[rejectedArray[index]]);
        // }
        console.log("PromiseArrayFor Race", promiseArrayForRace);
        // const responseRejectedPromise = await Promise.race(promiseArrayForRace)
        // .then( value => console.log( "resolved Value", value ) )
        // .catch( error => console.log( "rejected Value", error ) );
        // const rejectedPromise = await Promise.race( rejectedArray );
        // console.log( rejectedPromise.reason );
        // console.log(responseRejectedPromise);
    } catch (error) {
        throw new Error( "OOPS! An error occurred", error );
    }
}

firstRejectedPromise( promisesArray );

//  -----------------------            --------------------------------------          ---------------------------

// 5. Write a function `retryFetch` that retries fetching data from an API
// up to 3 times using `async/await` in case the previous attempt failed.

const retryFetch = async ( url, retries = 3 ) => {
    for (let attempt = 0; attempt < retries; attempt++){
        try {
            if( typeof url !== "string" || !url ){
                throw new Error( "URL passed is Invalid." );
            };

            const fetchURL = await fetch( url );

            if( !fetchURL.ok ){
                throw new Error( "Unable to Fetch Data!" )
            };

            attempt = 3;
            const data = await fetchURL.json();

            if( !data ){
                throw new Error( "Error while converting data in to json." )
            };

            console.log( "retryFetch",data );
            
        } catch ( error ) {
            console.log(`Attempt ${ attempt } failed: ${ error.message }`);

            if ( attempt === retries - 1 ) {
              throw new Error(`After ${ retries } attempts: ${ error.message }`);
            };
        }
        
    }
}

retryFetch('https://jsonplaceholder.typicode.com/todo/1');

//   -------------------------             -------------------------------        ----------------------------