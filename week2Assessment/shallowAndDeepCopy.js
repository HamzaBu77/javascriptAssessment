// 1. Demonstrate how to create a shallow copy of an object and modify a nested property in the copied object.
// What happens to the original object?

const person = {
    firstName: "Hamza",
    details: {
        age: 25,
        company: "GSoft"
    }
}

if( typeof person !== "object" || !person || Object.keys(person).length === 0 ){
    new Error("Person is not an object or an empty object.");
}

const shallowCopy = person;

shallowCopy.details.company = "Geeky";

console.log( "Original Person Object", person )
console.log( "Shallow Copy of Person Object", shallowCopy );

// Demonstration: When we assign an existing object to the new object it takes the reference of that existing object and
// make a shallow copy of it and when we change something in the new object as it have assigned the reference of the
// existing object the changes also reflect in the original object as well.

//   -----------------------             ------------------------------------            ----------------------


// 2. Write a function that performs a deep copy of the following object using `JSON.parse` and `JSON.stringify`:
// ```javascript
// const original = { name: "John", address: { city: "NYC" } };
// ```

const original = { name: "John", address: { city: "NYC" } }

if( typeof original !== "object" || !original || Object.keys(original).length === 0 ){
    new Error("Original is not an object or an empty object.");
}

let deepCopy = "";

const deepCopyFunction = ( object ) => {

    if( typeof object !== "object" || !object || Object.keys( object ).length === 0 ){
        new Error("Original is not an object or an empty object.");
    };

    deepCopy = JSON.parse( JSON.stringify( object ) );
}

deepCopyFunction( original );

deepCopy.address.city = "Lahore";

console.log( "Original Object is ", original );
console.log( "DeepCopy Object is", deepCopy );

//   --------------------------           -------------------------------          ------------------------

// 3. Modify the above deep copy function so that it handles circular references, i.e., when an object refers to itself.


const modifiedOriginal = { name: "John", address: { city: "NYC" } }

if( !modifiedOriginal ){
    new Error("Modified Object is empty object.");
}

const modifiedDeepCopyFunction = (obj, check = new Map()) => {
    try {
        if ( !obj || typeof obj !== "object" ) {
           return obj;
        }

        if (check.has(obj)) {
            return check.get(obj); 
        }

        const deepCopyObject = Array.isArray(obj) ? [] : {};

        check.set(obj, deepCopyObject); // Track the current object

        for (const key in obj) {
            if (obj.hasOwnProperty(key)) {
                deepCopyObject[key] = modifiedDeepCopyFunction(obj[key], check); // Recursive call
            }
        }

        return deepCopyObject;
    } catch (error) {
        console.log("OOPS! Internal Server Error:", error.message);
        return null; // Optionally return null on error
    }
};

modifiedOriginal.self = modifiedOriginal;
const modifiedCopied = modifiedDeepCopyFunction( modifiedOriginal );

console.log( "Modfied DeepCopy Object", modifiedCopied );
console.log( "Showing that the function is supporting circular referencing", modifiedCopied.self === modifiedCopied );


// 4. Given the following object, how would you manually create a deep copy without using `JSON.parse`/`JSON.stringify`,
// but instead by iterating through its properties?
// ```javascript
// const obj = { name: "Alice", age: 30, details: { height: 160, weight: 55 } };
// ```

const manualDeepCopy = (obj) => {
    try {
        if( !obj || typeof obj !== 'object' ){
            return obj;
        }
    
        const deepCopyObject = {};
    
        for (const key in obj) {
            if (obj.hasOwnProperty(key)) {
                deepCopyObject[key] = manualDeepCopy(obj[key]);
            }
        }
    
        return deepCopyObject;
    } catch (error) {
        console.log(`OOPS! Server Error: ${error}`);
    }
    
};

const originalObject = { name: "Alice", age: 30, details: { height: 160, weight: 55 } };
const manualCopyObject = manualDeepCopy( originalObject );

manualCopyObject.details.height = 100;

console.log( "Original Object manualDeepCopy", originalObject );
console.log( "manualCopy", manualCopyObject );

//   -----------------------------       --------------------------------         ----------------------------


// 5. Show how shallow and deep copies behave differently when dealing with arrays of objects.
// Use an example with an array of users, where each user has an ID and a nested object of details.

const originalArray = [
    { id: 1, details: { age: 17, company: "GSoft" } },
    { id: 2, details: { age: 17, company: "GSoft" } },
    { id: 3, details: { age: 17, company: "GSoft" } },
]

if( Array.isArray( originalArray ) === false || originalArray.length === 0 || !originalArray ){
    throw new Error( "The OriginalArray is not an array or the array is empty." );
}

const shallowArraysOfObject = originalArray;
const deepArraysOfObject = manualDeepCopy( originalArray );

shallowArraysOfObject[0].details.company = "Geeky";
deepArraysOfObject[0].details.company = "Tech Scale";

console.log( "Original Array", originalArray );
console.log( "Shallow Copy of Array", shallowArraysOfObject );
console.log( "Deep Copy of Array", deepArraysOfObject );


//    --------------------------------       -------------------------        ------------------------------
