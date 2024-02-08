let numbers = [1, 2, 3, 4, 5];
let fruits = ['apple', 'banana', 'orange', 'pear'];

// Array methods
console.log("Original array:", numbers);

// 1. push() - Adds one or more elements to the end of an array and returns the new length of the array
numbers.push(6);
console.log("After push(6):", numbers);

// 2. pop() - Removes the last element from an array and returns that element
let lastElement = numbers.pop();
console.log("After pop():", numbers, "Removed:", lastElement);

// 3. unshift() - Adds one or more elements to the beginning of an array and returns the new length of the array
numbers.unshift(0);
console.log("After unshift(0):", numbers);

// 4. shift() - Removes the first element from an array and returns that element
let firstElement = numbers.shift();
console.log("After shift():", numbers, "Removed:", firstElement);

// 5. concat() - Returns a new array by combining two or more arrays
let combinedArray = numbers.concat(fruits);
console.log("Combined array:", combinedArray);

// 6. slice() - Returns a shallow copy of a portion of an array into a new array object
let slicedArray = combinedArray.slice(2, 5);
console.log("Sliced array:", slicedArray);

// 7. splice() - Changes the contents of an array by removing or replacing existing elements and/or adding new elements
let removedItems = combinedArray.splice(2, 2, 'grape', 'kiwi');
console.log("Array after splice():", combinedArray, "Removed:", removedItems);

// 8. indexOf() - Returns the first index at which a given element can be found in the array, or -1 if it is not present
console.log("Index of 'orange':", combinedArray.indexOf('orange'));

// 9. lastIndexOf() - Returns the last index at which a given element can be found in the array, or -1 if it is not present
console.log("Last index of 'orange':", combinedArray.lastIndexOf('orange'));

// 10. forEach() - Executes a provided function once for each array element
console.log("Using forEach():");
combinedArray.forEach(item => console.log(item));

// 11. map() - Creates a new array populated with the results of calling a provided function on every element in the calling array
let mappedArray = combinedArray.map(item => item.toUpperCase());
console.log("Mapped array:", mappedArray);

// 12. filter() - Creates a new array with all elements that pass the test implemented by the provided function
let filteredArray = combinedArray.filter(item => item.length > 5);
console.log("Filtered array:", filteredArray);

// 13. find() - Returns the value of the first element in the array that satisfies the provided testing function
let foundElement = combinedArray.find(item => item.startsWith('a'));
console.log("First element starting with 'a':", foundElement);

// 14. includes() - Determines whether an array includes a certain value among its entries
console.log("Does it include 'banana'?", combinedArray.includes('banana'));

// 15. every() - Tests whether all elements in the array pass the test implemented by the provided function
console.log("Are all elements strings?", combinedArray.every(item => typeof item === 'string'));

// 16. some() - Tests whether at least one element in the array passes the test implemented by the provided function
console.log("Does it have at least one number?", combinedArray.some(item => typeof item === 'number'));

// 17. reduce() - Executes a reducer function on each element of the array, resulting in a single output value
let reducedValue = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log("Reduced value:", reducedValue);
