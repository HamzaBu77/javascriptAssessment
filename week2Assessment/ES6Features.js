// 1. Use destructuring to extract the `name` and `age` properties from the following object:
// ```javascript
// const person = { name: "Jane", age: 25, city: "San Francisco" };
// ```

const person = { name: "Jane", age: 25, city: "San Francisco" };

const { name, age } = person;

console.log( name, age );

//  ---------------------------------          ---------------------------------      -------------------------

// 2. Write an arrow function that returns the square of a number.
// Then, modify the arrow function to return an object that contains both the original number and its square.

const square = ( number ) => {
    if( number < 0 || typeof number !== "number" ){
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

console.log(square( 2 ));
console.log(squareAndNumber( 3 ));

//  ----------------------         --------------------------------------        -----------------------------

// 3. Demonstrate how to use the spread operator to merge two objects and two arrays.

const objectOne = { firstName: "Hamza", details: { hobby: "coding", language: "JavaScript" } };

const objectTwo = { lastName: "Butt", bio: { age: 25, company: "GSoft" } };

const mergedObject = {
    ...objectOne,
    ...objectTwo,
}

const arrayOne = [ 1, 2, 3, 4, 5 ];

const arrayTwo = [ 6, 7, 8, 9, 10 ];

const mergedArray = [ ...arrayOne, ...arrayTwo ];

console.log( "object1", objectOne);
console.log( "object2", objectTwo);
console.log( "merged object", mergedObject);
console.log( "array1", arrayOne);
console.log( "array2", arrayTwo);
console.log( "merged array", mergedArray);


// ---------------------------------         ------------------------------------         -----------------------

// 4. Using destructuring, write a function that accepts an object as a parameter with
// `firstName`, `lastName`, and `age` properties, and logs them to the console.

const destructuringFunction = ( object ) => {
    const { firstName, lastName, age } = object;

    if( !firstName || !lastName || !age) {
        throw new Error( "Properties Required are missing!" );
    }

    console.log(`The name of the person is ${ firstName } ${ lastName } and he is ${ age } years old.`);
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
            if( item < 0 || typeof item !== "number" ){
                throw new Error( "Invalid numbers in argument!" );
            }
        }
    
        let sum = 0;
        const sumOfNumbers = args.map( item => sum += item )
        console.log(sum);
    } catch (error) {
        console.log( "OOPS!", error );
    }

}

multipleArguments(1,2,3,4,5,6,7,8);



// --------------------------              -------------------------------           -----------------------




