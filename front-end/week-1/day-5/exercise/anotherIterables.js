let randint = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

create_random = {
  min: -1,
  max: 90,
  lenght: 100,
};

create_random[Symbol.iterator] = function () {
  return {
    start: 0,
    min: this.min,
    max: this.max,
    lenght: this.lenght,
    next() {
      this.start++;
      return this.start < this.lenght
        ? { done: false, value: randint(this.min, this.max) }
        : { done: true };
    },
  };
};

let array = Array.from(create_random);
console.log(array);

// Array.from() example in action:

// 'use strict'

function Iter(from, to) {
  this.from = from
  this.to = to
  this[Symbol.iterator] = function () {
    return {
      current: this.from,
      last: this.to,

      next() {
        if (this.current <= this.last) {
          return {
            done: false,
            value: this.current++
          }
        } else {
          return {
            done: true
          }
        }
      }
    }
  }
}

let arrLike = {
  0: 'Zero',
  plus: 'Plus',
  1: 'One',
  2: 'Two',
  anything: 'Anything',
  length: 3,
}

let it = new Iter(3, 7)

let arr1 = Array.from(it)
let arr2 = Array.from(arrLike)

console.log(arr1) // [3, 4, 5, 6, 7]
console.log(arr2) // ["Zero", "One", "Two"]

// object iterable on values
let user = {
    id: 1,
    name: "Victor",
    surname: "Alight",
    age: 16,
    isStudent: true,
  };
  
  user[Symbol.iterator] = function () {
    return {
      start: 0,
      last: Object.keys(this).length,
      userThis: this,
  
      next() {
        return this.start < this.last
          ? { done: false, value: Object.values(this.userThis)[this.start++] }
          : { done: true };
      },
    };
  };
  
  for (let i of user) {
    console.log(i); // 1, Victor, Alight, 16, true
  }

// Sample code: an iterable object that generates an infinite sequence of pseudorandom numbers
let randomOBJ = {
  min:10,
  max: 100,
}

randomOBJ[Symbol.iterator] = function() {
  return {
    start: this.min,
    end: this.max,
    next(){
      return {
        done: false,
        value: Math.random()*(this.end - this.start)+this.start,
      };
    }
  }
}

const THRESHOLD = 20;

for(let value of randomOBJ) {
  console.log(value); // show new random generated value
  if (value<THRESHOLD) break;
}