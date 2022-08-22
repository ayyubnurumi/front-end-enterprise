// The call stack

// The way control flows through functions is somewhat involved. 
// Let’s take a closer look at it. 
// Here is a simple program that makes a few function calls:

function greet(who){
    console.log("Hello " + who);
}
greet("Harry");
console.log("Bye");

// We could show the flow of control schematically like this:

// not in function
//    in greet
//         in console.log
//    in greet
// not in function
//    in console.log
// not in function