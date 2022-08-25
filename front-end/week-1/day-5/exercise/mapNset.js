/* source= https://javascript.info/map-set
Map
Map is a collection of keyed data items, just like an Object. But the main difference is that Map allows keys of any type.

Methods and properties are:

new Map() – creates the map.
map.set(key, value) – stores the value by the key.
map.get(key) – returns the value by the key, undefined if key doesn’t exist in map.
map.has(key) – returns true if the key exists, false otherwise.
map.delete(key) – removes the value by the key.
map.clear() – removes everything from the map.
map.size – returns the current element count.
For instance:
*/
let map = new Map();

map.set('1', 'str1');   // a string key
map.set(1, 'num1');     // a numeric key
map.set(true, 'bool1'); // a boolean key

// remember the regular Object? it would convert keys to string
// Map keeps the type, so these two are different:
console.log(map.get(1));    // 'num1'
console.log(map.get('1'));  // 'str1'
console.log(map.size);      // 3

// Map can also use objects as keys.

let john = {name: "John"};

// for every user, lets store their visits count
let visitsCountMap = new Map();

// john is the key for the map
visitsCountMap.set(john, 123);

console.log(visitsCountMap.get(john)); // 123
/*
Using objects as keys is one of the most notable and important Map features. The same does not count for Object. String as a key in Object is fine, but we can’t use another Object as a key in Object.
*/
let ben = {name: " Ben"};

let visitsCountObj = {};    // try to use an object

visitsCountObj[ben]= 234;   // try to use ben object as the key
visitsCountObj[john]= 123;  // try to use john object as the key,
// ben object will get replaced

console.log(visitsCountObj["[object Object]"]);
/*
How Map compares keys
To test keys for equivalence, Map uses the algorithm SameValueZero. It is roughly the same as strict equality ===, but the difference is that NaN is considered equal to NaN. So NaN can be used as the key as well.

This algorithm can’t be changed or customized.

Chaining
Every map.set call returns the map itself, so we can “chain” the calls:

map.set('1', 'str1')
  .set(1, 'num1')
  .set(true, 'bool1');

Iteration over Map
For looping over a map, there are 3 methods:

map.keys() – returns an iterable for keys,
map.values() – returns an iterable for values,
map.entries() – returns an iterable for entries [key, value], it’s used by default in for..of.
*/

let recipeMap = new Map([
    ['cucumber', 500],
    ['tomatoes', 350],
    ['onion', 50],
]);

// iterate over keys (vegetables)
for (let vegetables of recipeMap.keys()){
    console.log(vegetables); // cucumber, tomatoes, onion
}

// iterate over values (amounts)
for (let amount of recipeMap.values()){
    console.log(amount); // 500, 350, 50
}

// iterate over [key, value] entries
for (let entry of recipeMap){ // the same as of recipeMap.entries()
    console.log(entry); // cucumber, 500 (n so on)
}

// Besides that, Map has a built-in forEach method, similar to Array:
// runs the function foreach (key, value) pair
recipeMap.forEach((value, key, map)=>{
    console.log(`${key}: ${value}`); // cucumber: 500 etc
});
/*
Object.fromEntries: Object from Map
We’ve just seen how to create Map from a plain object with Object.entries(obj).

There’s Object.fromEntries method that does the reverse: given an array of [key, value] pairs, it creates an object from them:
*/
let prices = Object.fromEntries([
    ['banana', 1],
    ['orange', 2],
    ['meat', 4]
]);
// now prices = { banana:1, orange:2, meat:4 }
console.log(prices.orange);
/*
We can use Object.fromEntries to get a plain object from Map.

E.g. we store the data in a Map, but we need to pass it to a 3rd-party code that expects a plain object.
*/
let peta = new Map();
map.set('banana', 1)
.set('orange', 2)
.set('meat', 4);

let obj = Object.fromEntries(map.entries()); // make a plain object (*)
console.log(obj.orange);
/*
Set
A Set is a special type collection – “set of values” (without keys), where each value may occur only once.

Its main methods are:

new Set(iterable) – creates the set, and if an iterable object is provided (usually an array), copies values from it into the set.
set.add(value) – adds a value, returns the set itself.
set.delete(value) – removes the value, returns true if value existed at the moment of the call, otherwise false.
set.has(value) – returns true if the value exists in the set, otherwise false.
set.clear() – removes everything from the set.
set.size – is the elements count.
The main feature is that repeated calls of set.add(value) with the same value don’t do anything. That’s the reason why each value appears in a Set only once.

For example, we have visitors coming, and we’d like to remember everyone. But repeated visits should not lead to duplicates. A visitor must be “counted” only once.

Set is just the right thing for that:
*/
let set = new Set();

let ayyub = { name: "Ayyub"};
let nu = { name: "Nu"};
let rumi = { name: "Rumi"};

// visits, some users come multiple times
set.add(ayyub);
set.add(nu);
set.add(rumi);
set.add(nu);
set.add(rumi);

// set keeps only unique values
console.log(set.size); // 3

for(let user of set){
    console.log(user.name);
}
/*
The alternative to Set could be an array of users, and the code to check for duplicates on every insertion using arr.find. But the performance would be much worse, because this method walks through the whole array checking every element. Set is much better optimized internally for uniqueness checks.

Iteration over Set
We can loop over a set either with for..of or using forEach:
*/
let set1 = new Set(["oranges", "apples", "bananas"]);

for(let value of set1) console.log(value);

//the same with forEach:
set1.forEach((value, valueAgain, set) => {
    console.log(value);
});
/*
Note the funny thing. The callback function passed in forEach has 3 arguments: a value, then the same value valueAgain, and then the target object. Indeed, the same value appears in the arguments twice.

That’s for compatibility with Map where the callback passed forEach has three arguments. Looks a bit strange, for sure. But may help to replace Map with Set in certain cases with ease, and vice versa.

The same methods Map has for iterators are also supported:

set.keys() – returns an iterable object for values,
set.values() – same as set.keys(), for compatibility with Map,
set.entries() – returns an iterable object for entries [value, value], exists for compatibility with Map.
*/