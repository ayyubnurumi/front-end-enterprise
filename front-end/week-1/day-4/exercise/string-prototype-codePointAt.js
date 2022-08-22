/* source= https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/codePointAt
String.prototype.codePointAt()
The codePointAt() method returns a non-negative integer that is the Unicode code point value at the given position. Note that this function does not give the nth code point in a string, but the code point starting at the specified string index.
*/
const icons = '☃★♲';

console.log(icons.codePointAt(1));
// expected output: "9733"
/*
Syntax
codePointAt(pos)

Parameters
pos
Position of an element in str to return the code point value from.

Return value
A decimal number representing the code point value of the character at the given pos.

If there is no element at pos, returns undefined.
If the element at pos is a UTF-16 high surrogate, returns the code point of the surrogate pair.
If the element at pos is a UTF-16 low surrogate, returns only the low surrogate code point.
Examples
Using codePointAt()
*/
console.log('ABC'.codePointAt(0))                        // 65
console.log('ABC'.codePointAt(0).toString(16))           // 41

console.log('😍'.codePointAt(0))                         // 128525
console.log('\ud83d\ude0d'.codePointAt(0))               // 128525
console.log('\ud83d\ude0d'.codePointAt(0).toString(16))  // 1f60d

console.log('😍'.codePointAt(1))                         // 56845
console.log('\ud83d\ude0d'.codePointAt(1))               // 56845
console.log('\ud83d\ude0d'.codePointAt(1).toString(16))  // de0d

console.log('ABC'.codePointAt(42))                       // undefined
/*
Looping with codePointAt()
Because indexing to a pos whose element is a UTF-16 low surrogate, returns only the low surrogate, it's better not to index directly into a UTF-16 string.

Instead, use a for...of statement or an Array's forEach() method (or anything which correctly iterates UTF-16 surrogates) to iterate the string, using codePointAt(0) to get the code point of each element.
*/
for (const codePoint of
    '\ud83d\udc0e\ud83d\udc71\u2764'){
        console.log(codePoint.codePointAt(0).toString(16))
    } // '1f40e', '1f471', '2764'