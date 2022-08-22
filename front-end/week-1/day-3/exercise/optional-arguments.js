// Optional Arguments
// The following code is allowed and executes without any problem:

function square(x){ return x*x;}
console.log(square(4, true, "hedgehog"));

// We defined square with only one parameter. 
// Yet when we call it with three, the language doesn’t complain. 
// It ignores the extra arguments and computes the square of the first one.

// The downside of this is that it is possible—likely, even—that 
// you’ll accidentally pass the wrong number of arguments to functions. 
// And no one will tell you about it.

// The upside is that this behavior can be used to allow a function to be called 
// with different numbers of arguments. For example, this minus function 
// tries to imitate the - operator by acting on either one or two arguments:

function minus(a,b){
    if (b === undefined) return -a;
    else return a-b;
}

console.log(minus(10)); // -> -10
console.log(minus(10, 5)); // -> 5

// If you write an = operator after a parameter, followed by an expression, 
// the value of that expression will replace the argument when it is not given.

// For example, this version of power makes its second argument optional. 
// If you don’t provide it or pass the value undefined, 
// it will default to two, and the function will behave like square.

function power(base, exponent = 2){
    let result = 1;
    for (let count = 0; count < exponent; count++){
        result *= base;
    }
    return result;
}

console.log(power(4)); //->16
console.log(power(2,6)); //->64