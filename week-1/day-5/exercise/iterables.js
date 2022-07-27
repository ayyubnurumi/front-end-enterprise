let range = {
  from: 1,
  to: 5,
};

// We want the for..of to work:
// for(let num of range) ... num=1,2,3,4,5
// 1. call to for..of initially calls this
range[Symbol.iterator] = function () {
  // ...it returns the iterator object:
  // 2. Onward, for..of works only with the iterator object below, asking it for next values
  return {
    current: this.from,
    last: this.to,

    // 3. next() is called on each iteration by the for..of loop
    next() {
      // 4. it should return the value as an object {done:.., value :...}
      if (this.current <= this.last) {
        return { done: false, value: this.current++ };
      } else {
        return { done: true };
      }
    },
  };
};

// now it works!
for (let num of range) {
  console.log(num); // 1, then 2, 3, 4, 5
}
// or
let Range = {
  from: 1,
  to: 5,

  [Symbol.iterator]() {
    this.current = this.from;
    return this;
  },

  next() {
    if (this.current <= this.to) {
      return { done: false, value: this.current++ };
    } else {
      return { done: true };
    }
  },
};

for (let num of Range) {
  console.log(num); // 1, then 2, 3, 4, 5
}

// string is iterables

for (let char of "test") {
  // triggers 4 times: once for each character
  console.log(char); // t, then e, then s, then t
}

let str1 = "𝒳😂";
for (let char1 of str1) {
  console.log(char1); // 𝒳, and then 😂
}

let str2 = "Hello";

// does the same as
// for (let char of str) alert(char);

let iterator = str2[Symbol.iterator]();

while (true) {
  let result = iterator.next();
  if (result.done) break;
  console.log(result.value); // outputs characters one by one
}

// Iterables and array-likes
let arrayLike = {
  // has indexes and length => array-like
  0: "Hello",
  1: "World",
  length: 2,
};

// There’s a universal method Array.from that takes an iterable or array-like value and makes a “real” Array from it.
let arr = Array.from(arrayLike); // (*)
console.log(arr.pop()); // World (method works)

// assuming that range is taken from the example above
let arr1 = Array.from(range);
console.log(arr1); // 1,2,3,4,5 (array toString conversion works)

// assuming that range is taken from the example above

// square each number
let arr2 = Array.from(range, (num) => num * num);

console.log(arr2); // 1,4,9,16,25

// Here we use Array.from to turn a string into an array of characters:
// let str1 = '𝒳😂'; its already exist
// splits str into array of characters
let chars = Array.from(str1);

console.log(chars[0]); // 𝒳
console.log(chars[1]); // 😂
console.log(chars.length); // 2

// Unlike str.split, it relies on the iterable nature of the string and so, just like for..of, correctly works with surrogate pairs.
let chars1 = []; // Array.from internally does the same loop
for (let char of str1) {
  chars.push(char);
}

console.log(chars1);

// We can even build surrogate-aware slice on it:
function slice(str3, start, end) {
  return Array.from(str3).slice(start, end).join("");
}

let str3 = "𝒳😂𩷶";

console.log(slice(str3, 1, 3)); // 😂𩷶

// the native method does not support surrogate pairs
console.log(str3.slice(1, 3)); // garbage (two pieces from different surrogate pairs)
