// 1. Use destructuring to extract the `name` and `age` properties from the following object:
// ```javascript
// const person = { name: "Jane", age: 25, city: "San Francisco" };
// ```

const person = { name: "Jane", age: 25, city: "San Francisco" };

if( typeof person !== "object" || Object.keys(person).length === 0 || person === undefined || person === null ){
    new Error( "Person Object is Invalid." );
};

const { name, age } = person;

if( !name || !age ){
    new Error( "Property donot exist or are undefined or null." );
};

console.log( "Printing Name and Age parameter through destructuring", name, age );

//  ---------------------------------          ---------------------------------      -------------------------

// 2. Write an arrow function that returns the square of a number.
// Then, modify the arrow function to return an object that contains both the original number and its square.

const square = ( number ) => {
    if( number < 0 || ( typeof number !== "number" && typeof number !== "bigint") || !number ){
        throw new Error("Invalid Number");
    }
    return number ** 2;
}

const squareAndNumber = ( number ) => {
    if( number < 0 || typeof number !== "number" ){
        throw new Error( "Invalid Number" );
    }
    return { number, square: number ** 2 };
}

console.log( "Return value with only Square is ", square( 2 ));
console.log( "Return value with Object containing number and a square is ", squareAndNumber( 3 ));

//  ----------------------         --------------------------------------        -----------------------------

// 3. Demonstrate how to use the spread operator to merge two objects and two arrays.

const objectOne = { firstName: "Hamza", details: { hobby: "coding", language: "JavaScript" } };

if( typeof objectOne !== "object" || !objectOne  || Object.keys(objectOne).length === 0 ){
    new Error( "ObjectOne is invalid or empty." )
}
const objectTwo = { lastName: "Butt", bio: { age: 25, company: "GSoft" } };

if( typeof objectTwo !== "object" || !objectTwo  || Object.keys(objectTwo).length === 0 ){
    new Error( "ObjectTwo is invalid or empty." )
}

const mergedObject = {
    ...objectOne,
    ...objectTwo,
}

const arrayOne = [ 1, 2, 3, 4, 5 ];

if ( Array.isArray(arrayOne) === false || !arrayOne || arrayOne.length === 0 ){
    new Error( "Array is Invalid or empty." )
}

const arrayTwo = [ 6, 7, 8, 9, 10 ];

if ( Array.isArray(arrayOne) === false || !arrayOne || arrayOne.length === 0 ){
    new Error( "Array is Invalid or empty." )
}

if ( !arrayOne && !arrayTwo ) {
    new Error( "One of the Object or both of them are invalid." )
}

const mergedArray = [ ...arrayOne, ...arrayTwo ];

console.log( "Values of object1 is ", objectOne);
console.log( "Values of object2 is ", objectTwo);
console.log( "Values after merging the two objects is ", mergedObject);
console.log( "Values of array1 is ", arrayOne);
console.log( "Values of array2 is ", arrayTwo);
console.log( "Values after merging the two arrays is ", mergedArray);


// ---------------------------------         ------------------------------------         -----------------------

// 4. Using destructuring, write a function that accepts an object as a parameter with
// `firstName`, `lastName`, and `age` properties, and logs them to the console.

const destructuringFunction = ( object ) => {
    try {
        if( typeof object !== "object" || !object || Object.keys(object).length === 0 ){
            throw new Error( "Object is Invalid" );
        };
        const { firstName, lastName, age } = object;
    
        if( !firstName || !lastName || !age) {
            throw new Error( "Properties Required are missing!" );
        }
    
        console.log(`The name of the person is ${ firstName } ${ lastName } and he is ${ age } years old.`);
    } catch (error) {
        throw new Error( "An Error Occurred ", error );
    }
    
}

const friend = {
    firstName: "Hamza",
    lastName: "Butt",
    age: 25,
    company: "GSoft",
    position: "ASE"
};

destructuringFunction(friend);

//   ---------------------------            -------------------------------          -------------------------

// 5. Create a function that accepts an arbitrary number of arguments using the rest parameter (`...args`) and
// returns their sum. Use the arrow function syntax.

const multipleArguments = ( ...args ) => {
    try {    
        for( const item of args){
            if( item < 0 || ( typeof item !== "number" && typeof item !== "bigint" ) || !item ){
                throw new Error( "Invalid numbers in argument!" );
            }
        }
    
        let sum = 0;
        const sumOfNumbers = args.map( item => sum += item );
        console.log( "The total sum using Arbitrary numbers of arguments is ", sum );
    } catch (error) {
        console.log( "OOPS! An Error Occurred ", error );
    }

}

multipleArguments(1,2,3,4,5,6,7,8);



// --------------------------              -------------------------------           -----------------------




