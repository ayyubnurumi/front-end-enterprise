/* source= https://eloquentjavascript.net/04_data.html
Data Structures: Objects and Arrays

Numbers, Booleans, and strings are the atoms that data structures are built from. Many types of information require more than one atom, though. Objects allow us to group values—including other objects—to build more complex structures.

The programs we have built so far have been limited by the fact that they were operating only on simple data types. This chapter will introduce basic data structures. By the end of it, you’ll know enough to start writing useful programs.

The chapter will work through a more or less realistic programming example, introducing concepts as they apply to the problem at hand. The example code will often build on functions and bindings that were introduced earlier in the text.

The weresquirrel

Every now and then, usually between 8 p.m. and 10 p.m., Jacques finds himself transforming into a small furry rodent with a bushy tail.

On one hand, Jacques is quite glad that he doesn’t have classic lycanthropy. Turning into a squirrel does cause fewer problems than turning into a wolf. Instead of having to worry about accidentally eating the neighbor (that would be awkward), he worries about being eaten by the neighbor’s cat. After two occasions where he woke up on a precariously thin branch in the crown of an oak, naked and disoriented, he has taken to locking the doors and windows of his room at night and putting a few walnuts on the floor to keep himself busy.

That takes care of the cat and tree problems. But Jacques would prefer to get rid of his condition entirely. The irregular occurrences of the transformation make him suspect that they might be triggered by something. For a while, he believed that it happened only on days when he had been near oak trees. But avoiding oak trees did not stop the problem.

Switching to a more scientific approach, Jacques has started keeping a daily log of everything he does on a given day and whether he changed form. With this data he hopes to narrow down the conditions that trigger the transformations.

The first thing he needs is a data structure to store this information.

Data sets

To work with a chunk of digital data, we’ll first have to find a way to represent it in our machine’s memory. Say, for example, that we want to represent a collection of the numbers 2, 3, 5, 7, and 11.

We could get creative with strings—after all, strings can have any length, so we can put a lot of data into them—and use "2 3 5 7 11" as our representation. But this is awkward. You’d have to somehow extract the digits and convert them back to numbers to access them.

Fortunately, JavaScript provides a data type specifically for storing sequences of values. It is called an array and is written as a list of values between square brackets, separated by commas.
*/
let listOfNumbers = [2,3,5,7,11];
console.log(listOfNumbers[2]); // -> 5
console.log(listOfNumbers[0]); // -> 2
console.log(listOfNumbers [2-1]); // -> 3
/*
The notation for getting at the elements inside an array also uses square brackets. A pair of square brackets immediately after an expression, with another expression inside of them, will look up the element in the left-hand expression that corresponds to the index given by the expression in the brackets.

The first index of an array is zero, not one. So the first element is retrieved with listOfNumbers[0]. Zero-based counting has a long tradition in technology and in certain ways makes a lot of sense, but it takes some getting used to. Think of the index as the amount of items to skip, counting from the start of the array.

Properties

We’ve seen a few suspicious-looking expressions like myString.length (to get the length of a string) and Math.max (the maximum function) in past chapters. These are expressions that access a property of some value. In the first case, we access the length property of the value in myString. In the second, we access the property named max in the Math object (which is a collection of mathematics-related constants and functions).

Almost all JavaScript values have properties. The exceptions are null and undefined. If you try to access a property on one of these nonvalues, you get an error.

null.length;
// → TypeError: null has no properties
The two main ways to access properties in JavaScript are with a dot and with square brackets. Both value.x and value[x] access a property on value—but not necessarily the same property. The difference is in how x is interpreted. When using a dot, the word after the dot is the literal name of the property. When using square brackets, the expression between the brackets is evaluated to get the property name. Whereas value.x fetches the property of value named “x”, value[x] tries to evaluate the expression x and uses the result, converted to a string, as the property name.

So if you know that the property you are interested in is called color, you say value.color. If you want to extract the property named by the value held in the binding i, you say value[i]. Property names are strings. They can be any string, but the dot notation works only with names that look like valid binding names. So if you want to access a property named 2 or John Doe, you must use square brackets: value[2] or value["John Doe"].

The elements in an array are stored as the array’s properties, using numbers as property names. Because you can’t use the dot notation with numbers and usually want to use a binding that holds the index anyway, you have to use the bracket notation to get at them.

The length property of an array tells us how many elements it has. This property name is a valid binding name, and we know its name in advance, so to find the length of an array, you typically write array.length because that’s easier to write than array["length"].

Methods

Both string and array values contain, in addition to the length property, a number of properties that hold function values.
*/
let doh = "Doh";
console.log(typeof doh.toUpperCase);
// → function
console.log(doh.toUpperCase());
// → DOH
/*
Every string has a toUpperCase property. When called, it will return a copy of the string in which all letters have been converted to uppercase. There is also toLowerCase, going the other way.

Interestingly, even though the call to toUpperCase does not pass any arguments, the function somehow has access to the string "Doh", the value whose property we called. How this works is described in Chapter 6.

Properties that contain functions are generally called methods of the value they belong to, as in “toUpperCase is a method of a string”.

This example demonstrates two methods you can use to manipulate arrays:
*/
let sequence = [1, 2, 3];
sequence.push(4);
sequence.push(5);
console.log(sequence);
// → [1, 2, 3, 4, 5]
console.log(sequence.pop());
// → 5
console.log(sequence);
// → [1, 2, 3, 4]
/*
The push method adds values to the end of an array, and the pop method does the opposite, removing the last value in the array and returning it.

These somewhat silly names are the traditional terms for operations on a stack. A stack, in programming, is a data structure that allows you to push values into it and pop them out again in the opposite order so that the thing that was added last is removed first. These are common in programming—you might remember the function call stack from the previous chapter, which is an instance of the same idea.

Objects
Back to the weresquirrel. A set of daily log entries can be represented as an array. But the entries do not consist of just a number or a string—each entry needs to store a list of activities and a Boolean value that indicates whether Jacques turned into a squirrel or not. Ideally, we would like to group these together into a single value and then put those grouped values into an array of log entries.

Values of the type object are arbitrary collections of properties. One way to create an object is by using braces as an expression.
*/
let day1 = {
    squirrel: false,
    events: ["work", "touched tree", "pizza", "running"]
  };
console.log(day1.squirrel);
// → false
console.log(day1.wolf);
// → undefined
day1.wolf = false;
console.log(day1.wolf);
// → false
/*
Inside the braces, there is a list of properties separated by commas. Each property has a name followed by a colon and a value. When an object is written over multiple lines, indenting it like in the example helps with readability. Properties whose names aren’t valid binding names or valid numbers have to be quoted.
*/
let descriptions = {
    work: "Went to work", 
    "touched tree": "Touched a tree"
};
/*
This means that braces have two meanings in JavaScript. At the start of a statement, they start a block of statements. In any other position, they describe an object. Fortunately, it is rarely useful to start a statement with an object in braces, so the ambiguity between these two is not much of a problem.

Reading a property that doesn’t exist will give you the value undefined.

It is possible to assign a value to a property expression with the = operator. This will replace the property’s value if it already existed or create a new property on the object if it didn’t.

To briefly return to our tentacle model of bindings—property bindings are similar. They grasp values, but other bindings and properties might be holding onto those same values. You may think of objects as octopuses with any number of tentacles, each of which has a name tattooed on it.

The delete operator cuts off a tentacle from such an octopus. It is a unary operator that, when applied to an object property, will remove the named property from the object. This is not a common thing to do, but it is possible.
*/
let anObject = {left: 1, right: 2};
console.log(anObject.left);
// → 1
delete anObject.left;
console.log(anObject.left);
// → undefined
console.log("left" in anObject);
// → false
console.log("right" in anObject);
// → true
/*
The binary in operator, when applied to a string and an object, tells you whether that object has a property with that name. The difference between setting a property to undefined and actually deleting it is that, in the first case, the object still has the property (it just doesn’t have a very interesting value), whereas in the second case the property is no longer present and in will return false.

To find out what properties an object has, you can use the Object.keys function. You give it an object, and it returns an array of strings—the object’s property names.
*/
console.log(Object.keys({x: 0, y: 0, z: 2}));
// → ["x", "y", "z"]
// There’s an Object.assign function that copies all properties from one object into another.
let objectA = {a: 1, b: 2};
Object.assign(objectA, {b: 3, c: 4});
console.log(objectA);
// → {a: 1, b: 3, c: 4}
/*
Arrays, then, are just a kind of object specialized for storing sequences of things. If you evaluate typeof [], it produces "object". You can see them as long, flat octopuses with all their tentacles in a neat row, labeled with numbers.

We will represent the journal that Jacques keeps as an array of objects.

let journal = [
    {events: ["work", "touched tree", "pizza",
              "running", "television"],
     squirrel: false},
    {events: ["work", "ice cream", "cauliflower",
              "lasagna", "touched tree", "brushed teeth"],
     squirrel: false},
    {events: ["weekend", "cycling", "break", "peanuts",
              "beer"],
     squirrel: true},
     and so on... 
  ];

Mutability

We will get to actual programming real soon now. First there’s one more piece of theory to understand.

We saw that object values can be modified. The types of values discussed in earlier chapters, such as numbers, strings, and Booleans, are all immutable—it is impossible to change values of those types. You can combine them and derive new values from them, but when you take a specific string value, that value will always remain the same. The text inside it cannot be changed. If you have a string that contains "cat", it is not possible for other code to change a character in your string to make it spell "rat".

Objects work differently. You can change their properties, causing a single object value to have different content at different times.

When we have two numbers, 120 and 120, we can consider them precisely the same number, whether or not they refer to the same physical bits. With objects, there is a difference between having two references to the same object and having two different objects that contain the same properties. Consider the following code:
*/
let object1 = {value: 10};
let object2 = object1;
let object3 = {value: 10};

console.log(object1 == object2);
// → true
console.log(object1 == object3);
// → false

object1.value = 15;
console.log(object2.value);
// → 15
console.log(object3.value);
// → 10
/*
The object1 and object2 bindings grasp the same object, which is why changing object1 also changes the value of object2. They are said to have the same identity. The binding object3 points to a different object, which initially contains the same properties as object1 but lives a separate life.

Bindings can also be changeable or constant, but this is separate from the way their values behave. Even though number values don’t change, you can use a let binding to keep track of a changing number by changing the value the binding points at. Similarly, though a const binding to an object can itself not be changed and will continue to point at the same object, the contents of that object might change.
*/
const score = {visitors: 0, home: 0};

score.visitors = 1; // -> This is okay

// score = {visitors: 1, home: 1}; -> This isn't allowed
/*
When you compare objects with JavaScript’s == operator, it compares by identity: it will produce true only if both objects are precisely the same value. Comparing different objects will return false, even if they have identical properties. There is no “deep” comparison operation built into JavaScript, which compares objects by contents, but it is possible to write it yourself (which is one of the exercises at the end of this chapter).

The lycanthrope’s log

So, Jacques starts up his JavaScript interpreter and sets up the environment he needs to keep his journal.
*/
let journal = [];

function addEntry(events, squirrel) {
  journal.push({events, squirrel});
}
/*
Note that the object added to the journal looks a little odd. Instead of declaring properties like events: events, it just gives a property name. This is shorthand that means the same thing—if a property name in brace notation isn’t followed by a value, its value is taken from the binding with the same name.

So then, every evening at 10 p.m.—or sometimes the next morning, after climbing down from the top shelf of his bookcase—Jacques records the day.
*/
addEntry(["work", "touched tree", "pizza", "running",
          "television"], false);
addEntry(["work", "ice cream", "cauliflower", "lasagna",
          "touched tree", "brushed teeth"], false);
addEntry(["weekend", "cycling", "break", "peanuts",
          "beer"], true);
/*
Once he has enough data points, he intends to use statistics to find out which of these events may be related to the squirrelifications.

Correlation is a measure of dependence between statistical variables. A statistical variable is not quite the same as a programming variable. In statistics you typically have a set of measurements, and each variable is measured for every measurement. Correlation between variables is usually expressed as a value that ranges from -1 to 1. Zero correlation means the variables are not related. A correlation of one indicates that the two are perfectly related—if you know one, you also know the other. Negative one also means that the variables are perfectly related but that they are opposites—when one is true, the other is false.

To compute the measure of correlation between two Boolean variables, we can use the phi coefficient (ϕ). This is a formula whose input is a frequency table containing the number of times the different combinations of the variables were observed. The output of the formula is a number between -1 and 1 that describes the correlation.

We could take the event of eating pizza and put that in a frequency table like this, where each number indicates the amount of times that combination occurred in our measurements:

- no squirrel, no pizza = 79,
- no squirrel, pizza = 9,
- squirrel, no pizza = 4,
- squirrel, pizza = 1,

If we call that table n, we can compute ϕ using the following formula:

ϕ =	
n11n00 − n10n01
√ n1•n0•n•1n•0
(If at this point you’re putting the book down to focus on a terrible flashback to 10th grade math class—hold on! I do not intend to torture you with endless pages of cryptic notation—it’s just this one formula for now. And even with this one, all we do is turn it into JavaScript.)

The notation n01 indicates the number of measurements where the first variable (squirrelness) is false (0) and the second variable (pizza) is true (1). In the pizza table, n01 is 9.

The value n1• refers to the sum of all measurements where the first variable is true, which is 5 in the example table. Likewise, n•0 refers to the sum of the measurements where the second variable is false.

So for the pizza table, the part above the division line (the dividend) would be 1×76−4×9 = 40, and the part below it (the divisor) would be the square root of 5×85×10×80, or √340000. This comes out to ϕ ≈ 0.069, which is tiny. Eating pizza does not appear to have influence on the transformations.

Computing correlation
We can represent a two-by-two table in JavaScript with a four-element array ([76, 9, 4, 1]). We could also use other representations, such as an array containing two two-element arrays ([[76, 9], [4, 1]]) or an object with property names like "11" and "01", but the flat array is simple and makes the expressions that access the table pleasantly short. We’ll interpret the indices to the array as two-bit binary numbers, where the leftmost (most significant) digit refers to the squirrel variable and the rightmost (least significant) digit refers to the event variable. For example, the binary number 10 refers to the case where Jacques did turn into a squirrel, but the event (say, “pizza”) didn’t occur. This happened four times. And since binary 10 is 2 in decimal notation, we will store this number at index 2 of the array.

This is the function that computes the ϕ coefficient from such an array:
*/
function phi(table) {
    return (table[3] * table[0] - table[2] * table[1]) /
      Math.sqrt((table[2] + table[3]) *
                (table[0] + table[1]) *
                (table[1] + table[3]) *
                (table[0] + table[2]));
}
  
console.log(phi([76, 9, 4, 1])); // → 0.068599434
/*
This is a direct translation of the ϕ formula into JavaScript. Math.sqrt is the square root function, as provided by the Math object in a standard JavaScript environment. We have to add two fields from the table to get fields like n1• because the sums of rows or columns are not stored directly in our data structure.

Jacques kept his journal for three months. The resulting data set is available in the coding sandbox for this chapter, where it is stored in the JOURNAL binding and in a downloadable file.

To extract a two-by-two table for a specific event from the journal, we must loop over all the entries and tally how many times the event occurs in relation to squirrel transformations.
*/
var JOURNAL = [
    {"events":["carrot","exercise","weekend"],"squirrel":false},
    {"events":["bread","pudding","brushed teeth","weekend","touched tree"],"squirrel":false},
    {"events":["carrot","nachos","brushed teeth","cycling","weekend"],"squirrel":false},
    {"events":["brussel sprouts","ice cream","brushed teeth","computer","weekend"],"squirrel":false},
    {"events":["potatoes","candy","brushed teeth","exercise","weekend","dentist"],"squirrel":false},
    {"events":["brussel sprouts","pudding","brushed teeth","running","weekend"],"squirrel":false},
    {"events":["pizza","brushed teeth","computer","work","touched tree"],"squirrel":false},
    {"events":["bread","beer","brushed teeth","cycling","work"],"squirrel":false},
    {"events":["cauliflower","brushed teeth","work"],"squirrel":false},
    {"events":["pizza","brushed teeth","cycling","work"],"squirrel":false},
    {"events":["lasagna","nachos","brushed teeth","work"],"squirrel":false},
    {"events":["brushed teeth","weekend","touched tree"],"squirrel":false},
    {"events":["lettuce","brushed teeth","television","weekend"],"squirrel":false},
    {"events":["spaghetti","brushed teeth","work"],"squirrel":false},
    {"events":["brushed teeth","computer","work"],"squirrel":false},
    {"events":["lettuce","nachos","brushed teeth","work"],"squirrel":false},
    {"events":["carrot","brushed teeth","running","work"],"squirrel":false},
    {"events":["brushed teeth","work"],"squirrel":false},
    {"events":["cauliflower","reading","weekend"],"squirrel":false},
    {"events":["bread","brushed teeth","weekend"],"squirrel":false},
    {"events":["lasagna","brushed teeth","exercise","work"],"squirrel":false},
    {"events":["spaghetti","brushed teeth","reading","work"],"squirrel":false},
    {"events":["carrot","ice cream","brushed teeth","television","work"],"squirrel":false},
    {"events":["spaghetti","nachos","work"],"squirrel":false},
    {"events":["cauliflower","ice cream","brushed teeth","cycling","work"],"squirrel":false},
    {"events":["spaghetti","peanuts","computer","weekend"],"squirrel":true},
    {"events":["potatoes","ice cream","brushed teeth","computer","weekend"],"squirrel":false},
    {"events":["potatoes","ice cream","brushed teeth","work"],"squirrel":false},
    {"events":["peanuts","brushed teeth","running","work"],"squirrel":false},
    {"events":["potatoes","exercise","work"],"squirrel":false},
    {"events":["pizza","ice cream","computer","work"],"squirrel":false},
    {"events":["lasagna","ice cream","work"],"squirrel":false},
    {"events":["cauliflower","candy","reading","weekend"],"squirrel":false},
    {"events":["lasagna","nachos","brushed teeth","running","weekend"],"squirrel":false},
    {"events":["potatoes","brushed teeth","work"],"squirrel":false},
    {"events":["carrot","work"],"squirrel":false},
    {"events":["pizza","beer","work","dentist"],"squirrel":false},
    {"events":["lasagna","pudding","cycling","work"],"squirrel":false},
    {"events":["spaghetti","brushed teeth","reading","work"],"squirrel":false},
    {"events":["spaghetti","pudding","television","weekend"],"squirrel":false},
    {"events":["bread","brushed teeth","exercise","weekend"],"squirrel":false},
    {"events":["lasagna","peanuts","work"],"squirrel":true},
    {"events":["pizza","work"],"squirrel":false},
    {"events":["potatoes","exercise","work"],"squirrel":false},
    {"events":["brushed teeth","exercise","work"],"squirrel":false},
    {"events":["spaghetti","brushed teeth","television","work"],"squirrel":false},
    {"events":["pizza","cycling","weekend"],"squirrel":false},
    {"events":["carrot","brushed teeth","weekend"],"squirrel":false},
    {"events":["carrot","beer","brushed teeth","work"],"squirrel":false},
    {"events":["pizza","peanuts","candy","work"],"squirrel":true},
    {"events":["carrot","peanuts","brushed teeth","reading","work"],"squirrel":false},
    {"events":["potatoes","peanuts","brushed teeth","work"],"squirrel":false},
    {"events":["carrot","nachos","brushed teeth","exercise","work"],"squirrel":false},
    {"events":["pizza","peanuts","brushed teeth","television","weekend"],"squirrel":false},
    {"events":["lasagna","brushed teeth","cycling","weekend"],"squirrel":false},
    {"events":["cauliflower","peanuts","brushed teeth","computer","work","touched tree"],"squirrel":false},
    {"events":["lettuce","brushed teeth","television","work"],"squirrel":false},
    {"events":["potatoes","brushed teeth","computer","work"],"squirrel":false},
    {"events":["bread","candy","work"],"squirrel":false},
    {"events":["potatoes","nachos","work"],"squirrel":false},
    {"events":["carrot","pudding","brushed teeth","weekend"],"squirrel":false},
    {"events":["carrot","brushed teeth","exercise","weekend","touched tree"],"squirrel":false},
    {"events":["brussel sprouts","running","work"],"squirrel":false},
    {"events":["brushed teeth","work"],"squirrel":false},
    {"events":["lettuce","brushed teeth","running","work"],"squirrel":false},
    {"events":["candy","brushed teeth","work"],"squirrel":false},
    {"events":["brussel sprouts","brushed teeth","computer","work"],"squirrel":false},
    {"events":["bread","brushed teeth","weekend"],"squirrel":false},
    {"events":["cauliflower","brushed teeth","weekend"],"squirrel":false},
    {"events":["spaghetti","candy","television","work","touched tree"],"squirrel":false},
    {"events":["carrot","pudding","brushed teeth","work"],"squirrel":false},
    {"events":["lettuce","brushed teeth","work"],"squirrel":false},
    {"events":["carrot","ice cream","brushed teeth","cycling","work"],"squirrel":false},
    {"events":["pizza","brushed teeth","work"],"squirrel":false},
    {"events":["spaghetti","peanuts","exercise","weekend"],"squirrel":true},
    {"events":["bread","beer","computer","weekend","touched tree"],"squirrel":false},
    {"events":["brushed teeth","running","work"],"squirrel":false},
    {"events":["lettuce","peanuts","brushed teeth","work","touched tree"],"squirrel":false},
    {"events":["lasagna","brushed teeth","television","work"],"squirrel":false},
    {"events":["cauliflower","brushed teeth","running","work"],"squirrel":false},
    {"events":["carrot","brushed teeth","running","work"],"squirrel":false},
    {"events":["carrot","reading","weekend"],"squirrel":false},
    {"events":["carrot","peanuts","reading","weekend"],"squirrel":true},
    {"events":["potatoes","brushed teeth","running","work"],"squirrel":false},
    {"events":["lasagna","ice cream","work","touched tree"],"squirrel":false},
    {"events":["cauliflower","peanuts","brushed teeth","cycling","work"],"squirrel":false},
    {"events":["pizza","brushed teeth","running","work"],"squirrel":false},
    {"events":["lettuce","brushed teeth","work"],"squirrel":false},
    {"events":["bread","brushed teeth","television","weekend"],"squirrel":false},
    {"events":["cauliflower","peanuts","brushed teeth","weekend"],"squirrel":false}
  ];
  
function tableFor(event, journal) {
    let table = [0, 0, 0, 0];
    for (let i = 0; i < journal.length; i++) {
      let entry = journal[i], index = 0;
      if (entry.events.includes(event)) index += 1;
      if (entry.squirrel) index += 2;
      table[index] += 1;
    }
    return table;
  }
  
console.log(tableFor("pizza", JOURNAL));
// → [76, 9, 4, 1]
/*
Arrays have an includes method that checks whether a given value exists in the array. The function uses that to determine whether the event name it is interested in is part of the event list for a given day.

The body of the loop in tableFor figures out which box in the table each journal entry falls into by checking whether the entry contains the specific event it’s interested in and whether the event happens alongside a squirrel incident. The loop then adds one to the correct box in the table.

We now have the tools we need to compute individual correlations. The only step remaining is to find a correlation for every type of event that was recorded and see whether anything stands out.

Array loops

In the tableFor function, there’s a loop like this:
*/
for (let i = 0; i < JOURNAL.length; i++) {
    let entry = JOURNAL[i];
    // Do something with entry
  }
/*
This kind of loop is common in classical JavaScript—going over arrays one element at a time is something that comes up a lot, and to do that you’d run a counter over the length of the array and pick out each element in turn.

There is a simpler way to write such loops in modern JavaScript.
*/
for (let entry of JOURNAL) {
    console.log(`${entry.events.length} events.`);
  }
/*
When a for loop looks like this, with the word of after a variable definition, it will loop over the elements of the value given after of. This works not only for arrays but also for strings and some other data structures. We’ll discuss how it works in Chapter 6.

The final analysis
We need to compute a correlation for every type of event that occurs in the data set. To do that, we first need to find every type of event.
*/
function journalEvents(journal) {
    let events = [];
    for (let entry of journal) {
      for (let event of entry.events) {
        if (!events.includes(event)) {
          events.push(event);
        }
      }
    }
    return events;
  }
  
  console.log(journalEvents(JOURNAL));
  // → ["carrot", "exercise", "weekend", "bread", …]
/*
By going over all the events and adding those that aren’t already in there to the events array, the function collects every type of event.

Using that, we can see all the correlations.
*/
for (let event of journalEvents(JOURNAL)) {
    console.log(event + ":", phi(tableFor(event, JOURNAL)));
  }
  // → carrot:   0.0140970969
  // → exercise: 0.0685994341
  // → weekend:  0.1371988681
  // → bread:   -0.0757554019
  // → pudding: -0.0648203724
  // and so on...
/*
Most correlations seem to lie close to zero. Eating carrots, bread, or pudding apparently does not trigger squirrel-lycanthropy. It does seem to occur somewhat more often on weekends. Let’s filter the results to show only correlations greater than 0.1 or less than -0.1.
*/
for (let event of journalEvents(JOURNAL)) {
    let correlation = phi(tableFor(event, JOURNAL));
    if (correlation > 0.1 || correlation < -0.1) {
      console.log(event + ":", correlation);
    }
  }
  // → weekend:        0.1371988681
  // → brushed teeth: -0.3805211953
  // → candy:          0.1296407447
  // → work:          -0.1371988681
  // → spaghetti:      0.2425356250
  // → reading:        0.1106828054
  // → peanuts:        0.5902679812
/*
Aha! There are two factors with a correlation that’s clearly stronger than the others. Eating peanuts has a strong positive effect on the chance of turning into a squirrel, whereas brushing his teeth has a significant negative effect.

Interesting. Let’s try something.
*/
for (let entry of JOURNAL) {
    if (entry.events.includes("peanuts") &&
       !entry.events.includes("brushed teeth")) {
      entry.events.push("peanut teeth");
    }
  }
  console.log(phi(tableFor("peanut teeth", JOURNAL)));
  // → 1
/*
That’s a strong result. The phenomenon occurs precisely when Jacques eats peanuts and fails to brush his teeth. If only he weren’t such a slob about dental hygiene, he’d have never even noticed his affliction.

Knowing this, Jacques stops eating peanuts altogether and finds that his transformations don’t come back.

For a few years, things go great for Jacques. But at some point he loses his job. Because he lives in a nasty country where having no job means having no medical services, he is forced to take employment with a circus where he performs as The Incredible Squirrelman, stuffing his mouth with peanut butter before every show.

One day, fed up with this pitiful existence, Jacques fails to change back into his human form, hops through a crack in the circus tent, and vanishes into the forest. He is never seen again.
*/