/* source= https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object
Examples
Using Object given undefined and null types
The following examples store an empty Object object in o:

let o = new Object();

let o = new Object(undefined);

let o = new Object(null);

Using Object to create Boolean objects
The following examples store Boolean objects in o:

// equivalent to o = new Boolean(true)
let o = new Object(true);
*/
// equivalent to o = new Boolean(false)
let o = new Object(Boolean());
console.log(o);
/*
Object prototypes
When altering the behavior of existing Object.prototype methods, consider injecting code by wrapping your extension before or after the existing logic. For example, this (untested) code will pre-conditionally execute custom logic before the built-in logic or someone else's extension is executed.

When a function is called, the arguments to the call are held in the array-like "variable" arguments. For example, in the call myFn(a, b, c), the arguments within myFn's body will contain 3 array-like elements corresponding to (a, b, c).

When modifying prototypes with hooks, pass this and the arguments (the call state) to the current behavior by calling apply() on the function. This pattern can be used for any prototype, such as Node.prototype, Function.prototype, etc.
*/
const current = Object.prototype.valueOf;

// Since my property "-prop-value" is cross-cutting and isn't always
// on the same prototype chain, I want to modify Object.prototype:
Object.prototype.valueOf = function () {
  if (Object.hasOwn(this, "-prop-value")) {
    return this["-prop-value"];
  } else {
    // It doesn't look like one of my objects, so let's fall back on
    // the default behavior by reproducing the current behavior as best we can.
    // The apply behaves like "super" in some other languages.
    // Even though valueOf() doesn't take arguments, some other hook may.
    return current.apply(this, arguments);
  }
};
// Since JavaScript doesn't exactly have sub-class objects, prototype is a useful workaround to make a "base class" object of certain functions that act as objects. For example:

const Person = function (name) {
  this.name = name;
  this.canTalk = true;
};

Person.prototype.greet = function () {
  if (this.canTalk) {
    console.log("Hi I am " + this.name);
  }
};

const Employee = function (name, title) {
  Person.call(this, name);
  this.title = title;
};

Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee;
// If you don't set Object.prototype.constructor to Employee,
//it will take prototype.constructor of Person (parent).
//To avoid that, we set the prototype.constructor to Employee (child).

Employee.prototype.greet = function () {
  if (this.canTalk) {
    console.log("Hi, I am " + this.name + ", the " + this.title);
  }
};

const Customer = function (name) {
  Person.call(this, name);
};

Customer.prototype = Object.create(Person.prototype);
Customer.prototype.constructor = Customer;
//If you don't set Object.prototype.constructor to Customer,
//it will take prototype.constructor of Person (parent).
//To avoid that, we set the prototype.constructor to Customer (child).

const Mime = function(name) {
    Person.call(this, name);
    this.canTalk = false;
};

Mime.prototype = Object.create(Person.prototype);
Mime.prototype.constructor = Mime;

const bob = new Employee ('Bob', 'Builder');
const joe = new Customer ('Joe');
const rg = new Employee ('Red Green', 'Handyman');
const mike = new Customer ('Mike');
const mime = new Mime ('Mime');

bob.greet();
joe.greet();
rg.greet();
mike.greet();
mime.greet();