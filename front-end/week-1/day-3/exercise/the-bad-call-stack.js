// Storing this stack requires space in the computer’s memory. 
// When the stack grows too big, the computer will fail with a message like 
// “out of stack space” or “too much recursion”. 
// The following code illustrates this by asking the computer a really hard question 
// that causes an infinite back-and-forth between two functions. 
// Rather, it would be infinite, if the computer had an infinite stack. 
// As it is, we will run out of space, or “blow the stack”.

function chicken(){
    return egg();
}
function egg(){
    return chicken();
}
console.log(chicken() + " came first.");
// -> ??