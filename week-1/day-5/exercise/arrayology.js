/* source= https://eloquentjavascript.net/04_data.html
Further arrayology
Before finishing the chapter, I want to introduce you to a few more object-related concepts. I’ll start by introducing some generally useful array methods.

We saw push and pop, which add and remove elements at the end of an array, earlier in this chapter. The corresponding methods for adding and removing things at the start of an array are called unshift and shift.
*/
let todoList = [];
function remember(task) {
  todoList.push(task);
}
function getTask() {
  return todoList.shift();
}
function rememberUrgently(task) {
  todoList.unshift(task);
}
/*
That program manages a queue of tasks. You add tasks to the end of the queue by calling remember("groceries"), and when you’re ready to do something, you call getTask() to get (and remove) the front item from the queue. The rememberUrgently function also adds a task but adds it to the front instead of the back of the queue.

To search for a specific value, arrays provide an indexOf method. The method searches through the array from the start to the end and returns the index at which the requested value was found—or -1 if it wasn’t found. To search from the end instead of the start, there’s a similar method called lastIndexOf.
*/
console.log([1, 2, 3, 2, 1].indexOf(2));
// → 1
console.log([1, 2, 3, 2, 1].lastIndexOf(2));
// → 3
/*
Both indexOf and lastIndexOf take an optional second argument that indicates where to start searching.

Another fundamental array method is slice, which takes start and end indices and returns an array that has only the elements between them. The start index is inclusive, the end index exclusive.
*/
console.log([0, 1, 2, 3, 4].slice(2, 4));
// → [2, 3]
console.log([0, 1, 2, 3, 4].slice(2));
// → [2, 3, 4]
/*
When the end index is not given, slice will take all of the elements after the start index. You can also omit the start index to copy the entire array.

The concat method can be used to glue arrays together to create a new array, similar to what the + operator does for strings.

The following example shows both concat and slice in action. It takes an array and an index, and it returns a new array that is a copy of the original array with the element at the given index removed.
*/
function remove(array, index) {
    return array.slice(0, index)
      .concat(array.slice(index + 1));
  }
  console.log(remove(["a", "b", "c", "d", "e"], 2));
  // → ["a", "b", "d", "e"]
/*
If you pass concat an argument that is not an array, that value will be added to the new array as if it were a one-element array.

Strings and their properties
We can read properties like length and toUpperCase from string values. But if you try to add a new property, it doesn’t stick.
*/
let kim = "Kim";
2
kim.age = 88;
3
console.log(kim.age);
4
// → undefined
/*
Values of type string, number, and Boolean are not objects, and though the language doesn’t complain if you try to set new properties on them, it doesn’t actually store those properties. As mentioned earlier, such values are immutable and cannot be changed.

But these types do have built-in properties. Every string value has a number of methods. Some very useful ones are slice and indexOf, which resemble the array methods of the same name.
*/
console.log("coconuts".slice(4, 7));
// → nut
console.log("coconut".indexOf("u"));
// → 5
/*
One difference is that a string’s indexOf can search for a string containing more than one character, whereas the corresponding array method looks only for a single element.
*/
console.log("one two three".indexOf("ee"));
// → 11
// The trim method removes whitespace (spaces, newlines, tabs, and similar characters) from the start and end of a string.
console.log("  okay \n ".trim());
// → okay
// The zeroPad function from the previous chapter also exists as a method. It is called padStart and takes the desired length and padding character as arguments.
console.log(String(6).padStart(3, "0"));
// → 006
// You can split a string on every occurrence of another string with split and join it again with join.
let sentence = "Secretarybirds specialize in stomping";
let words = sentence.split(" ");
console.log(words);
// → ["Secretarybirds", "specialize", "in", "stomping"]
console.log(words.join(". "));
// → Secretarybirds. specialize. in. stomping
// A string can be repeated with the repeat method, which creates a new string containing multiple copies of the original string, glued together.
console.log("LA".repeat(3));
// → LALALA
// We have already seen the string type’s length property. Accessing the individual characters in a string looks like accessing array elements (with a caveat that we’ll discuss in Chapter 5).
let string = "abc";
console.log(string.length);
// → 3
console.log(string[1]);
// → b
/*
Rest parameters
It can be useful for a function to accept any number of arguments. For example, Math.max computes the maximum of all the arguments it is given.

To write such a function, you put three dots before the function’s last parameter, like this:
*/
function max(...numbers) {
    let result = -Infinity;
    for (let number of numbers) {
      if (number > result) result = number;
    }
    return result;
  }
console.log(max(4, 1, 9, -2));
// → 9
/*
When such a function is called, the rest parameter is bound to an array containing all further arguments. If there are other parameters before it, their values aren’t part of that array. When, as in max, it is the only parameter, it will hold all arguments.

You can use a similar three-dot notation to call a function with an array of arguments.
*/
let numbers = [5, 1, 7];
console.log(max(...numbers));
// → 7
/*
This “spreads” out the array into the function call, passing its elements as separate arguments. It is possible to include an array like that along with other arguments, as in max(9, ...numbers, 2).

Square bracket array notation similarly allows the triple-dot operator to spread another array into the new array.
*/
let Words = ["never", "fully"];
console.log(["will", ...Words, "understand"]);
// → ["will", "never", "fully", "understand"]
/*
The Math object
As we’ve seen, Math is a grab bag of number-related utility functions, such as Math.max (maximum), Math.min (minimum), and Math.sqrt (square root).

The Math object is used as a container to group a bunch of related functionality. There is only one Math object, and it is almost never useful as a value. Rather, it provides a namespace so that all these functions and values do not have to be global bindings.

Having too many global bindings “pollutes” the namespace. The more names have been taken, the more likely you are to accidentally overwrite the value of some existing binding. For example, it’s not unlikely to want to name something max in one of your programs. Since JavaScript’s built-in max function is tucked safely inside the Math object, we don’t have to worry about overwriting it.

Many languages will stop you, or at least warn you, when you are defining a binding with a name that is already taken. JavaScript does this for bindings you declared with let or const but—perversely—not for standard bindings nor for bindings declared with var or function.

Back to the Math object. If you need to do trigonometry, Math can help. It contains cos (cosine), sin (sine), and tan (tangent), as well as their inverse functions, acos, asin, and atan, respectively. The number π (pi)—or at least the closest approximation that fits in a JavaScript number—is available as Math.PI. There is an old programming tradition of writing the names of constant values in all caps.
*/
function randomPointOnCircle(radius) {
    let angle = Math.random() * 2 * Math.PI;
    return {x: radius * Math.cos(angle),
            y: radius * Math.sin(angle)};
  }
console.log(randomPointOnCircle(2));
// → {x: 0.3667, y: 1.966}
/*
If sines and cosines are not something you are familiar with, don’t worry. When they are used in this book, in Chapter 14, I’ll explain them.

The previous example used Math.random. This is a function that returns a new pseudorandom number between zero (inclusive) and one (exclusive) every time you call it.
*/
console.log(Math.random());
// → 0.36993729369714856
console.log(Math.random());
// → 0.727367032552138
console.log(Math.random());
// → 0.40180766698904335
/*
Though computers are deterministic machines—they always react the same way if given the same input—it is possible to have them produce numbers that appear random. To do that, the machine keeps some hidden value, and whenever you ask for a new random number, it performs complicated computations on this hidden value to create a new value. It stores a new value and returns some number derived from it. That way, it can produce ever new, hard-to-predict numbers in a way that seems random.

If we want a whole random number instead of a fractional one, we can use Math.floor (which rounds down to the nearest whole number) on the result of Math.random.
*/
console.log(Math.floor(Math.random() * 10));
// → 2
/*
Multiplying the random number by 10 gives us a number greater than or equal to 0 and below 10. Since Math.floor rounds down, this expression will produce, with equal chance, any number from 0 through 9.

There are also the functions Math.ceil (for “ceiling”, which rounds up to a whole number), Math.round (to the nearest whole number), and Math.abs, which takes the absolute value of a number, meaning it negates negative values but leaves positive ones as they are.

Destructuring
Let’s go back to the phi function for a moment.
*/
function phi(table) {
    return (table[3] * table[0] - table[2] * table[1]) /
      Math.sqrt((table[2] + table[3]) *
                (table[0] + table[1]) *
                (table[1] + table[3]) *
                (table[0] + table[2]));
  }
// One of the reasons this function is awkward to read is that we have a binding pointing at our array, but we’d much prefer to have bindings for the elements of the array, that is, let n00 = table[0] and so on. Fortunately, there is a succinct way to do this in JavaScript.
function phi([n00, n01, n10, n11]) {
    return (n11 * n00 - n10 * n01) /
      Math.sqrt((n10 + n11) * (n00 + n01) *
                (n01 + n11) * (n00 + n10));
}
/*
This also works for bindings created with let, var, or const. If you know the value you are binding is an array, you can use square brackets to “look inside” of the value, binding its contents.

A similar trick works for objects, using braces instead of square brackets.
*/
let {name} = {name: "Faraji", age: 23};
console.log(name);
// → Faraji
// Note that if you try to destructure null or undefined, you get an error, much as you would if you directly try to access a property of those values.
