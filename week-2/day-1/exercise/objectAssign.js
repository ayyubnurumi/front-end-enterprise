/* source= https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
Examples
Cloning an object
*/
const obj = { a: 1 };
const copy = Object.assign({}, obj);
console.log(copy); // { a: 1}
/*
Warning for Deep Clone
For deep cloning, we need to use alternatives, because Object.assign() copies property values.

If the source value is a reference to an object, it only copies the reference value.
*/
function test() {
  "use strict";

  let obj1 = { a: 0, b: { c: 0 } };
  let obj2 = Object.assign({}, obj1);
  console.log(JSON.stringify(obj2)); // { a:0 , b: {c:0}}

  obj1.a = 1;
  console.log(JSON.stringify(obj1));
  console.log(JSON.stringify(obj2));

  obj2.a = 2;
  console.log(JSON.stringify(obj1));
  console.log(JSON.stringify(obj2));

  obj2.b.c = 3;
  console.log(JSON.stringify(obj1));
  console.log(JSON.stringify(obj2));

  // Deep Clone
  obj1 = { a: 0, b: { c: 0 } };
  let obj3 = JSON.parse(JSON.stringify(obj1));
  obj1.a = 4;
  obj1.b.c = 4;
  console.log(JSON.stringify(obj3));
}
test();

// Merging Objects
const o1 = { a: 1 };
const o2 = { b: 2 };
const o3 = { c: 3 };

const objs = Object.assign(o1, o2, o3);
console.log(objs); // { a: 1, b: 2, c: 3 }
console.log(o1); // { a: 1, b: 2, c: 3 }, target object itself is changed.

// Merging objects with same properties
const p1 = { a: 1, b: 1, c: 1 };
const p2 = { b: 2, c: 2 };
const p3 = { c: 3 };

const ppp = Object.assign({}, o1, o2, o3);
console.log(ppp); // { a: 1, b: 2, c: 3 }
// The properties are overwritten by other objects that have the same properties later in the parameters order.

// Copying symbol-typed properties
const s1 = { a: 1 };
const s2 = { [Symbol("foo")]: 2 };

const ss = Object.assign({}, s1, s2);
console.log(ss); // { a : 1, [Symbol("foo")]: 2 } (cf. bug 1207182 on Firefox)
Object.getOwnPropertySymbols(ss); // [Symbol(foo)]

// Properties on the prototype chain and non-enumerable properties cannot be copied
const oby = Object.create(
  { foo: 1 },
  {
    // foo is on obj's prototype chain.
    bar: {
      value: 2, // bar is a non-enumerable property.
    },
    baz: {
      value: 3,
      enumerable: true, // baz is an own enumerable property.
    },
  }
);

const salin = Object.assign({}, oby);
console.log(salin); // { baz: 3 }

// Primitives will be wrapped to objects
const v1 = "abc";
const v2 = true;
const v3 = 10;
const v4 = Symbol("foo");

const viv = Object.assign({}, v1, null, v2, undefined, v3, v4);
// Primitives will be wrapped, null and undefined will be ignored.
// Note, only string wrappers can have own enumerable properties.
console.log(viv); // { "0": "a", "1": "b", "2": "c" }

// Exceptions will interrupt the ongoing copying task
const target = Object.defineProperty({}, "foo", {
  value: 1,
  writable: false,
}); // target.foo is a read-only property

Object.assign(
  target,
  { bar: 2 },
  { foo2: 3, /* foo: 3, */ foo3: 3 },
  { baz: 4 }
);
// TypeError: "foo" is read-only
// The Exception is thrown when assigning target.foo

console.log(target.bar); // 2, the first source was copied successfully.
console.log(target.foo2); // 3, the first property of the second source was copied successfully.
console.log(target.foo); // 1, exception is thrown here.
console.log(target.foo3); // undefined, assign method has finished, foo3 will not be copied.
console.log(target.baz); // undefined, the third source will not be copied either.

// copying accesors
const itu = {
  foo: 1,
  get bar() {
    return 2;
  },
};

let kopi = Object.assign({}, itu);
console.log(kopi);
// { foo: 1, bar: 2 }
// The value of kopi.bar is itu.bar's getter's return value.

// This is an assign function that copies full descriptors
function completeAssign(target, ...sources) {
  sources.forEach((source) => {
    let descriptors = Object.keys(source).reduce((descriptors, key) => {
      descriptors[key] = Object.getOwnPropertyDescriptor(source, key);
      return descriptors;
    }, {});

    // By default, Object.assign copies enumerable Symbols, too
    Object.getOwnPropertySymbols(source).forEach((sym) => {
      let descriptor = Object.getOwnPropertyDescriptor(source, sym);
      if (descriptor.enumerable) {
        descriptors[sym] = descriptor;
      }
    });
    Object.defineProperties(target, descriptors);
  });
  return target;
}

kopi = completeAssign({}, itu);
console.log(kopi);
// { foo:1, get bar() { return 2 } }
