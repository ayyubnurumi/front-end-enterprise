// Recursion

// It is perfectly okay for a function to call itself, 
// as long as it doesn’t do it so often that it overflows the stack. 
// A function that calls itself is called recursive. 
// Recursion allows some functions to be written in a different style. 
// Take, for example, this alternative implementation of power:

function power(base, exponent){
    if (exponent == 0) {
        return 1;
    } else {
        return base * power(base, exponent - 1);
    }
}

console.log(power(2, 3)); // -> 8

// Recursion is not always just an inefficient alternative to looping. 
// Some problems really are easier to solve with recursion than with loops. 
// Most often these are problems that require exploring or 
// processing several “branches”, each of which might branch out again 
// into even more branches.

// Consider this puzzle: by starting from the number 1 and 
// repeatedly either adding 5 or multiplying by 3, 
// an infinite set of numbers can be produced. 
// How would you write a function that, given a number, 
// tries to find a sequence of such additions 
// and multiplications that produces that number?

// For example, the number 13 could be reached 
// by first multiplying by 3 and then adding 5 twice, 
// whereas the number 15 cannot be reached at all.

// Here is a recursive solution:

function findSolution(target) {
    function find(current, history){
        if (current == target){
            return history;
        } else if (current > target){
            return null;
        }else {
            return find(current + 5, `(${history} + 5)`) ||
                   find(current * 3, `(${history} * 3)`);
        }
    }
    return find(1, "1");
}

console.log(findSolution(24)); //-> (((1*3)+5)*3)

/*
To better understand how this function produces 
the effect we’re looking for, 
let’s look at all the calls to find that are 
made when searching for a solution for the number 13.

find(1, "1")
  find(6, "(1 + 5)")
    find(11, "((1 + 5) + 5)")
      find(16, "(((1 + 5) + 5) + 5)")
        too big
      find(33, "(((1 + 5) + 5) * 3)")
        too big
    find(18, "((1 + 5) * 3)")
      too big
  find(3, "(1 * 3)")
    find(8, "((1 * 3) + 5)")
      find(13, "(((1 * 3) + 5) + 5)")
        found!
*/