// 1. Declare a variable inside and outside of a block scope using `let`.
// What is the output when you attempt to log the variable inside and outside of the block?

let outside = 0;

if( true ) {
    let outside = "A";
    console.log( `I am variable from a function scope and my value is ${outside}` );
}

console.log( `I am variable from a main scope and my value is ${outside}.` );

// The Output is as expected JavaScript create two variables the one outside the block has global scope but the one inside 
// has block scope but when i log inside the block it is accessing the variable declared in the block scope means the inside
// one and the outer log fetch the value of the ouside declared variable.

//  -------------------------------       --------------------------------        ---------------------------------

// 2. Write a function following camelCase naming convention that calculates the total price of items in a cart.
// Make sure to use meaningful names for the variables and function.

function calculateTotalPrice(cart){
    try {
        if( typeof cart !== "object" || cart === null || Object.keys(cart).length === 0 ){
            throw new Error( "Cart is not an object or cart is empty." );
        };

        let sumOfCartItemsPrices = 0;
        for ( const item in cart ){
            sumOfCartItemsPrices += cart[item];
        };

        console.log( `Total sum of all the items is ${sumOfCartItemsPrices}.` );
    } catch (error) {
        throw new Error(error);
    }
}

const cart = {
    applesPrice: 200,
    mangoesPrice: 150,
    bananasPrice: 100,
}

calculateTotalPrice(cart);

//  -------------------------------           --------------------------------              --------------------------

// 3. Create a function using a function expression (not a function declaration) and
// demonstrate how it behaves differently if you try to call it before its definition.

testFunction();

const testFunction = function(){
    console.log("I am a test Function From coding conventions.");
}

// Demonstration: Function decleration are hoisted to the top of the scope but when we assign a function expression it
// cannot be hoisted that is why it when we try to call the function before its initialization it will prompt a 
// Reference Error.

//  -------------------------            ---------------------------------       ----------------------------

// 4. Refactor the following code to follow ES6+ conventions, such as using `const` and `let`
// where applicable, and naming variables clearly:
// ```javascript
// var x = 10;
// function doSomething() {
//   var total = 0;
//   total = x + 20;
//   return total;
// }
// ```

const constantNumber = 10;

function addTwoNumbers() {
    let total = 0;
    total = constantNumber + 20;
    return total
}

// ------------------------       ------------------------------------      --------------------------------

// 5. Demonstrate how to use self-documenting variables and function names to improve code readability
// in the following scenario: A function that converts temperatures from Celsius to Fahrenheit.

function celsiusToFahrenheit( celsius ){
    try {
        if ( celsius === null ){
            throw new Error( "celsius cannot be null." );
        };

        const fahrenheit = changingCelsiusToFahrenheit( celsius );

        return fahrenheit;
    } catch ( error ) {
        throw new Error( "OOPS! Server Error", error )
    }
    
}

// Demonstration: when we use logical naming variable and functions that are self explaining what they are for and 
// what there work is , long brief naming are often used to achieve this so there is no need for comments in the code and 
// that is how they improve code readability.

// ------------------------        ---------------------------------------       --------------------------------






