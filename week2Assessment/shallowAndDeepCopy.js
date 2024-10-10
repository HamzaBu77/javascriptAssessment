// 1. Demonstrate how to create a shallow copy of an object and modify a nested property in the copied object.
// What happens to the original object?

const person = {
    firstName: "Hamza",
    details: {
        age: 25,
        company: "GSoft"
    }
}

const shallowCopy = person;

shallowCopy.details.company = "Geeky";

console.log( "Original Object", person )
console.log( "Shallow Copy of Object", shallowCopy );

// Demonstration: When we assign an existing object to the new object it takes the reference of that existing object and
// make a shallow copy of it and when we change something in the new object as it have assigned the reference of the
// existing object the changes also reflect in the original object as well.

//   -----------------------             ------------------------------------            ----------------------


// 2. Write a function that performs a deep copy of the following object using `JSON.parse` and `JSON.stringify`:
// ```javascript
// const original = { name: "John", address: { city: "NYC" } };
// ```

const original = { name: "John", address: { city: "NYC" } }

let deepCopy = "";

const deepCopyFunction = ( object ) => {
    deepCopy = JSON.parse( JSON.stringify( object ) );
}

deepCopyFunction( original );

deepCopy.address.city = "Lahore";

console.log( "Original", original );
console.log( "DeepCopy", deepCopy );

//   --------------------------           -------------------------------          ------------------------

// 3. Modify the above deep copy function so that it handles circular references, i.e., when an object refers to itself.



// 4. Given the following object, how would you manually create a deep copy without using `JSON.parse`/`JSON.stringify`,
// but instead by iterating through its properties?
// ```javascript
// const obj = { name: "Alice", age: 30, details: { height: 160, weight: 55 } };
// ```

const manualDeepCopy = (obj) => {
    if (obj === null || typeof obj !== 'object') {
        return obj;
    }

    const deepCopyObject = Array.isArray(obj) ? [] : {};

    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            deepCopyObject[key] = manualDeepCopy(obj[key]);
        }
    }

    return deepCopyObject;
};

const originalObject = { name: "Alice", age: 30, details: { height: 160, weight: 55 } };
const manualCopyObject = manualDeepCopy( originalObject );

manualCopyObject.details.height = 100;

console.log( "Object", originalObject );
console.log( "manualCopy", manualCopyObject );

//   -----------------------------       --------------------------------         ----------------------------


// 5. Show how shallow and deep copies behave differently when dealing with arrays of objects.
// Use an example with an array of users, where each user has an ID and a nested object of details.

const originalArray = [
    { id: 1, details: { age: 17, company: "GSoft" } },
    { id: 2, details: { age: 17, company: "GSoft" } },
    { id: 3, details: { age: 17, company: "GSoft" } },
]

const shallowArraysOfObject = originalArray;
const deepArraysOfObject = manualDeepCopy( originalArray );

shallowArraysOfObject[0].details.company = "Geeky";
deepArraysOfObject[0].details.company = "Tech Scale";

console.log( "Original", originalArray );
console.log( "Shallow", shallowArraysOfObject );
console.log( "Deep", deepArraysOfObject );


//    --------------------------------       -------------------------        ------------------------------
