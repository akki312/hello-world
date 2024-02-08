let str = "Hello, World!";

// String methods
console.log("Original string:", str);

// 1. toUpperCase() - Converts the string to uppercase
console.log("Uppercase:", str.toUpperCase());

// 2. toLowerCase() - Converts the string to lowercase
console.log("Lowercase:", str.toLowerCase());

// 3. charAt() - Returns the character at a specified index
console.log("Character at index 4:", str.charAt(4));

// 4. indexOf() - Returns the index of the first occurrence of a specified value in a string
console.log("Index of 'World':", str.indexOf("World"));

// 5. lastIndexOf() - Returns the index of the last occurrence of a specified value in a string
console.log("Last index of 'o':", str.lastIndexOf("o"));

// 6. includes() - Checks if a string contains the specified value
console.log("Does it include 'Hello'?", str.includes("Hello"));

// 7. substring() - Extracts characters from a string between two specified indices
console.log("Substring from index 7 to 12:", str.substring(7, 12));

// 8. slice() - Extracts a part of a string and returns a new string
console.log("Slice from index 7 to end:", str.slice(7));

// 9. replace() - Searches a string for a specified value, or a regular expression, and returns a new string where the specified values are replaced
console.log("Replace 'World' with 'Universe':", str.replace("World", "Universe"));

// 10. split() - Splits a string into an array of substrings
console.log("Split by comma:", str.split(","));

// 11. trim() - Removes whitespace from both ends of a string
let strWithWhitespace = "   Hello, World!   ";
console.log("Trimmed string:", strWithWhitespace.trim());

// 12. concat() - Joins two or more strings
let str2 = " Have a nice day!";
console.log("Concatenated string:", str.concat(str2));

// 13. repeat() - Returns a new string with a specified number of copies of the string it was called on
console.log("Repeated string:", str.repeat(3));
