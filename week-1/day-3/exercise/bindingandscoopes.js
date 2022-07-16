// Bindings and scopes

// Bindings declared with let and const are in fact local to the block that they are declared in, 
// so if you create one of those inside of a loop, the code before and after the loop cannot “see” it. 
// In pre-2015 JavaScript, only functions created new scopes, so old-style bindings, 
// created with the var keyword, 
// are visible throughout the whole function that they appear in—or throughout the global scope, if they are not in a function.

let x = 10;
if (true){
    let y = 20;
    var z = 30;
    console.log(x+y+z); //->60
}
// y is not visible here
console.log(x+z); //->40

// Each scope can “look out” into the scope around it, 
// so x is visible inside the block in the example. 
// The exception is when multiple bindings have the same name—in that case, 
// code can see only the innermost one. 
// For example, when the code inside the halve function refers to n, 
// it is seeing its own n, not the global n.

const halve = function(n){
    return n / 2;
};

let n = 10;
console.log(halve(100)); // -> 50
console.log(n) // ->10