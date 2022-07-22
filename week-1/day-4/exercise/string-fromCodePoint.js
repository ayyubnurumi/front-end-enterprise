/* source = https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/fromCodePoint
String.fromCodePoint()
The static String.fromCodePoint() method returns a string created by using the specified sequence of code points.
*/
console.log(String.fromCodePoint(9731, 9733, 9842, 0x2F804));
/*
Syntax

String.fromCodePoint(num1)
String.fromCodePoint(num1, num2)
String.fromCodePoint(num1, num2, ..., numN)

Parameters

num1, ..., numN

A sequence of code points.

Return value
A string created by using the specified sequence of code points.

Exceptions
A RangeError is thrown if an invalid Unicode code point is given 
(e.g. "RangeError: NaN is not a valid code point").

Description
This method returns a string (and not a String object).

Because fromCodePoint() is a static method of String, you must call it as String.fromCodePoint(), 
rather than as a method of a String object you created.

Examples
Using fromCodePoint()
Valid input:
*/
console.log(String.fromCodePoint(42));       // "*"
console.log(String.fromCodePoint(65, 90));   // "AZ"
console.log(String.fromCodePoint(0x404));    // "\u0404" == "Є"
console.log(String.fromCodePoint(0x2F804));  // "\uD87E\uDC04"
console.log(String.fromCodePoint(194564));   // "\uD87E\uDC04"
console.log(String.fromCodePoint(0x1D306, 0x61, 0x1D307)); // "\uD834\uDF06a\uD834\uDF07"
/*
Invalid input:

String.fromCodePoint('_');      // RangeError
String.fromCodePoint(Infinity); // RangeError
String.fromCodePoint(-1);       // RangeError
String.fromCodePoint(3.14);     // RangeError
String.fromCodePoint(3e-2);     // RangeError
String.fromCodePoint(NaN);      // RangeError

Compared to fromCharCode()
String.fromCharCode() cannot return supplementary characters 
(i.e. code points 0x010000 – 0x10FFFF) by specifying their code point. 
Instead, it requires the UTF-16 surrogate pair in order to return a supplementary character:
*/
console.log(String.fromCharCode(0xD83C, 0xDF03)); // Code Point U+1F303 "Night with
console.log(String.fromCharCode(55356, 57091));  // Stars" == "\uD83C\uDF03"
/*
String.fromCodePoint(), on the other hand, can return 4-byte supplementary characters, 
as well as the more common 2-byte BMP characters, by specifying their code point 
(which is equivalent to the UTF-32 code unit):
*/
console.log(String.fromCodePoint(0x1F303)); // or 127747 in decimal