// Declaration notation
// There is a slightly shorter way to create a function binding. 
// When the function keyword is used at the start of a statement, it works differently.

function square(x){
    return x*x;
}

// This is a function declaration. 
// The statement defines the binding square and points it at the given function. 
// It is slightly easier to write and doesn’t require a semicolon after the function.

// There is one subtlety with this form of function definition.

console.log("The future says:", future());
function future() {
    return "You'll never have flying cars";
}