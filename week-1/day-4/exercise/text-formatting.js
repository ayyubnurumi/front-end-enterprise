/* source= https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Text_formatting
Strings
JavaScript's String type is used to represent textual data. 
It is a set of "elements" of 16-bit unsigned integer values (UTF-16 code units). 
Each element in the String occupies a position in the String. 
The first element is at index 0, the next at index 1, and so on. 
The length of a String is the number of elements in it. 
You can create strings using string literals or string objects.

String literals
You can create simple strings using either single or double quotes:
*/
'foo'
"bar"
/*
More advanced strings can be created using escape sequences:

Hexadecimal escape sequences
The number after \x is interpreted as a hexadecimal number.
*/
'\xA9'
/* 
Unicode escape sequences
The Unicode escape sequences require at least four hexadecimal digits following \u.
*/
'\u00A9'
/*
Unicode code point escapes
New in ECMAScript 2015. With Unicode code point escapes, 
any character can be escaped using hexadecimal numbers so that 
it is possible to use Unicode code points up to 0x10FFFF. 
With simple Unicode escapes it is often necessary to write 
the surrogate halves separately to achieve the same result.

See also String.fromCodePoint() or String.prototype.codePointAt().
*/
'\u{2F804}'

// the same with simple Unicode escapes
'\uD87E\uDC04'
/*
String objects
The String object is a wrapper around the string primitive data type.
*/
const foo = new String('foo'); // Creates a String object
console.log(foo); // Displays: [String: 'foo']
typeof foo; // Returns 'object'
/*
You can call any of the methods of the String object on a string literal value—JavaScript 
automatically converts the string literal to a temporary String object, calls the method, 
then discards the temporary String object. 
You can also use the String.length property with a string literal.

You should use string literals unless you specifically need to use a String object, 
because String objects can have counterintuitive behavior. For example:
*/
const firstString = '2 + 2'; // Creates a string literal value
const secondString = new String('2 + 2'); // Creates a String object
console.log(eval(firstString)); // Returns the number 4
console.log(eval(secondString)); // Returns a String object containing "2 + 2"
/*
A String object has one property, length, that indicates the number of UTF-16 code units in the string. 
For example, the following code assigns helloLength the value 13, because "Hello, World!" has 13 characters, 
each represented by one UTF-16 code unit. You can access each code unit using an array bracket style. 
You can't change individual characters because strings are immutable array-like objects:
*/
const hello = 'Hello, World!';
const helloLength = hello.length;
// console.log(hello[0]) = 'L'; 
// this has no effect, cuz strings r immutable
console.log(hello[0]); // this returns "H"
/*
Characters whose Unicode scalar values are greater than U+FFFF 
(such as some rare Chinese/Japanese/Korean/Vietnamese characters and some emoji) 
are stored in UTF-16 with two surrogate code units each. 
For example, a string containing the single character U+1F600 "Emoji grinning face" will have length 2. 
Accessing the individual code units in such a string using brackets may have undesirable 
consequences such as the formation of strings with unmatched surrogate code units, 
in violation of the Unicode standard. (Examples should be added to this page after MDN bug 857438 is fixed.) 
See also String.fromCodePoint() or String.prototype.codePointAt().

A String object has a variety of methods: for example those that return a variation on the string itself, 
such as substring and toUpperCase.

Multi-line template literals
Template literals are string literals allowing embedded expressions. 
You can use multi-line strings and string interpolation features with them.

Template literals are enclosed by the back-tick (` `) (grave accent) character 
instead of double or single quotes. Template literals can contain place holders. 
These are indicated by the Dollar sign and curly braces (${expression}).

Multi-lines
Any new line characters inserted in the source are part of the template literal. 
Using normal strings, you would have to use the following syntax in order to get multi-line strings:
*/
console.log('string text line 1\n\string text line 2');
// To get the same effect with multi-line strings, you can now write:
console.log(`string text line 1
string text line 2`);
/*
Embedded expressions
In order to embed expressions within normal strings, you would use the following syntax:
*/
const five = 5;
const ten = 10;
console.log('Fifteen is '+(five+ten)+' and not '+(2*five+ten)+'.');
/*
Internationalization
The Intl object is the namespace for the ECMAScript Internationalization API, 
which provides language sensitive string comparison, number formatting, and date and time formatting. 
The constructors for Intl.Collator, Intl.NumberFormat, 
and Intl.DateTimeFormat objects are properties of the Intl object.

Date and time formatting
The Intl.DateTimeFormat object is useful for formatting date and time. 
The following formats a date for English as used in the United States. 
(The result is different in another time zone.)
*/
const msPerDay = 24*60*60*1000;

// July 17, 2014 00:00:00 UTC.
const july172014 = new Date(msPerDay*(44*365+11+197));

const options = { year: '2-digit', month: '2-digit', day: '2-digit', 
                hour: '2-digit', minute: '2-digit', 
                timeZoneName: 'short' };

const americanDateTime = new Intl.DateTimeFormat('en-US', options).format;
console.log(americanDateTime(july172014));
/*
Number formatting
The Intl.NumberFormat object is useful for formatting numbers, for example currencies.
*/
const gasPrice = new Intl.NumberFormat('en-US',
{
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 3
});
console.log(gasPrice.format(5.259)); // $5.259

const hanDecimalRMBInChina = new
Intl.NumberFormat('zh-CN-u-nu-hanidec', {
    style: 'currency', 
    currency: 'CNY'
});
console.log(hanDecimalRMBInChina.format(1314.25));
/*
Collation
The Intl.Collator object is useful for comparing and sorting strings.

For example, there are actually two different sort orders in German, phonebook and dictionary. 
Phonebook sort emphasizes sound, and it's as if "ä", "ö", 
and so on were expanded to "ae", "oe", and so on prior to sorting.
*/
const names = ['Hochberg', 'Hönigswald', 'Holzman'];

const germanPhonebook = new Intl.Collator('de-DE-u-co-phonebk');

// as if sorting ["Hochberg", "Hoenigswald", "Holzman"]:
console.log(names.sort(germanPhonebook.compare).join(', '));
// logs "Hochberg, Hönigswald, Holzman"
/*
Some German words conjugate with extra umlauts, so in dictionaries it's sensible to order ignoring umlauts 
(except when ordering words differing only by umlauts: schon before schön).
*/
const germanDictionary = new Intl.Collator('de-DE-u-co-dict');

// as if sorting ["Hochberg", "Honigswald", "Holzman"]:
console.log(names.sort(germanDictionary.compare).join(', '));
// logs "Hochberg, Holzman, Hönigswald"