/* source= https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions
Regular expressions

Regular expressions are patterns used to match character combinations in strings. 
In JavaScript, regular expressions are also objects. 
These patterns are used with the exec() and test() methods of RegExp, and with the match(), 
matchAll(), replace(), replaceAll(), search(), and split() methods of String. 
This chapter describes JavaScript regular expressions.

Creating a regular expression

You construct a regular expression in one of two ways:

- Using a regular expression literal, which consists of a pattern enclosed between slashes, as follows:

const re = /ab+c/;

Regular expression literals provide compilation of the regular expression when the script is loaded. 
If the regular expression remains constant, using this can improve performance.

- Or calling the constructor function of the RegExp object, as follows:
*/
const me = new RegExp('ab+c');
/*
Using the constructor function provides runtime compilation of the regular expression. 
Use the constructor function when you know the regular expression pattern will be changing, 
or you don't know the pattern and are getting it from another source, such as user input.

Escaping

If you need to use any of the special characters literally (actually searching for a "*", for instance), 
you must escape it by putting a backslash in front of it. 
For instance, to search for "a" followed by "*" followed by "b", 
you'd use /a\*b/ — the backslash "escapes" the "*", making it literal instead of special.

Similarly, if you're writing a regular expression literal and need to match a slash ("/"), 
you need to escape that (otherwise, it terminates the pattern). 
For instance, to search for the string "/example/" followed by one or more alphabetic characters, 
you'd use /\/example\/[a-z]+/i—the backslashes before each slash make them literal.

To match a literal backslash, you need to escape the backslash. 
For instance, to match the string "C:\" where "C" can be any letter, 
you'd use /[A-Z]:\\/ — the first backslash escapes the one after it, 
so the expression searches for a single literal backslash.

If using the RegExp constructor with a string literal, 
remember that the backslash is an escape in string literals, 
so to use it in the regular expression, you need to escape it at the string literal level. 
/a\*b/ and new RegExp("a\\*b") create the same expression, 
which searches for "a" followed by a literal "*" followed by "b".

If escape strings are not already part of your pattern you can add them using String.replace:
*/
function escapeRegExp(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); 
    // $& means the whole matched string
  }
/*
The "g" after the regular expression is an option or flag that performs a global search, 
looking in the whole string and returning all matches. 
It is explained in detail below in Advanced Searching With Flags.

Using parentheses

Parentheses around any part of the regular expression pattern causes that part of the matched substring 
to be remembered. Once remembered, the substring can be recalled for other use. 
See Groups and backreferences for more details.

Using regular expressions in JavaScript

Regular expressions are used with the RegExp methods test() and exec() 
and with the String methods match(), replace(), search(), and split().

When you want to know whether a pattern is found in a string, use the test() or search() methods; 
for more information (but slower execution) use the exec() or match() methods. 
If you use exec() or match() and if the match succeeds, these methods return an array 
and update properties of the associated regular expression object 
and also of the predefined regular expression object, RegExp. 
If the match fails, the exec() method returns null (which coerces to false).

In the following example, the script uses the exec() method to find a match in a string.

const notMyRe = /d(b+)d/g;
const notMyArray = notMyRe.exec('cdbbdbsbz');

If you do not need to access the properties of the regular expression, 
an alternative way of creating notMyArray is with this script:

const notMyArray = /d(b+)d/g.exec('cdbbdbsbz');

similar to 'cdbbdbsbz'.match(/d(b+)d/g); however,
'cdbbdbsbz'.match(/d(b+)d/g) outputs [ "dbbd" ]
while /d(b+)d/g.exec('cdbbdbsbz') outputs [ 'dbbd', 'bb', index: 1, input: 'cdbbdbsbz' ]

If you want to construct the regular expression from a string, yet another alternative is this script:

const notMyRe = new RegExp('d(b+)d', 'g');
const notMyArray = notMyRe.exec('cdbbdbsbz');

if you use this form without assigning it to a variable, 
you cannot subsequently access the properties of that regular expression. 
For example, assume you have this script:
*/
const notMyRe = /d(b+)d/g;
const notMyArray = notMyRe.exec('cdbbdbsbz');
console.log(`The value of lastIndex is ${notMyRe.lastIndex}`);
// "The value of lastIndex is 5"
/* 
However, if you have this script:

const notMyArray = /d(b+)d/g.exec('cdbbdbsbz');
console.log(`The value of lastIndex is ${/d(b+)d/g.lastIndex}`);

"The value of lastIndex is 0"

The occurrences of /d(b+)d/g in the two statements are different regular expression objects 
and hence have different values for their lastIndex property. 
If you need to access the properties of a regular expression created with an object initializer, 
you should first assign it to a variable.

Advanced searching with flags

Regular expressions have optional flags that allow for functionality 
like global searching and case-insensitive searching. 
These flags can be used separately or together in any order, 
and are included as part of the regular expression.

To include a flag with the regular expression, use this syntax:

const re = /pattern/flags; 

or

const re = new RegExp('pattern', 'flags');

Note that the flags are an integral part of a regular expression. 
They cannot be added or removed later.

For example, re = /\w+\s/g creates a regular expression that looks for one or more characters 
followed by a space, and it looks for this combination throughout the string.
*/
const example = /\w+\s/g;
const strings = 'fee fi fo fum';
const myArray = strings.match(example);
console.log(myArray);
// ["fee ", "fi ", "fo "]
/*
You could replace the line:

const re = /\w+\s/g;

with:

const re = new RegExp('\\w+\\s', 'g');

and get the same result.

The m flag is used to specify that a multiline input string should be treated as multiple lines. 
If the m flag is used, ^ and $ match at the start or end of any line within the input string 
instead of the start or end of the entire string.

Using the global search flag with exec()

RegExp.prototype.exec() method with the g flag returns each match and its position iteratively.
*/
const str = 'fee fi fo fum';
const re = /\w+\s/g;

console.log(re.exec(str)); // ["fee ", index: 0, input: "fee fi fo fum"]
console.log(re.exec(str)); // ["fi ", index: 4, input: "fee fi fo fum"]
console.log(re.exec(str)); // ["fo ", index: 7, input: "fee fi fo fum"]
console.log(re.exec(str)); // null

// In contrast, String.prototype.match() method returns all matches at once, but without their position.

console.log(str.match(re)); // ["fee ", "fi ", "fo "]
/*
Using unicode regular expressions

The "u" flag is used to create "unicode" regular expressions; 
that is, regular expressions which support matching against unicode text. 
This is mainly accomplished through the use of Unicode property escapes, 
which are supported only within "unicode" regular expressions.

For example, the following regular expression might be used to match against an arbitrary unicode "word":
*/
/\p{L}*/u
/*
There are a number of other differences between unicode 
and non-unicode regular expressions that one should be aware of:

- Unicode regular expressions do not support so-called "identity escapes"; 
that is, patterns where an escaping backslash is not needed and effectively ignored. 
For example, /\a/ is a valid regular expression matching the letter 'a', but /\a/u is not.
- Curly brackets need to be escaped when not used as quantifiers. 
For example, /{/ is a valid regular expression matching the curly bracket '{', but /{/u is not — instead, 
the bracket should be escaped and /\{/u should be used instead.
- The - character is interpreted differently within character classes. 
In particular, for unicode regular expressions, - is interpreted as a literal - 
(and not as part of a range) only if it appears at the start or end of a pattern. 
For example, /[\w-:]/ is a valid regular expression matching a word character, a -, 
or :, but /\w-:/u is an invalid regular expression, as \w to : is not a well-defined range of characters.
*/