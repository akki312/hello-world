// Example array
let numbers = [1, 2, 3, 4, 5];

// 1. push() - Adds elements to the end of an array
numbers.push(6, 7);
console.log("After push(6, 7):", numbers);

// 2. pop() - Removes the last element from an array
let lastElement = numbers.pop();
console.log("After pop():", numbers, "Removed:", lastElement);

// 3. unshift() - Adds elements to the beginning of an array
numbers.unshift(0);
console.log("After unshift(0):", numbers);

// 4. shift() - Removes the first element from an array
let firstElement = numbers.shift();
console.log("After shift():", numbers, "Removed:", firstElement);

// 5. concat() - Concatenates arrays
let otherNumbers = [8, 9, 10];
let combinedArray = numbers.concat(otherNumbers);
console.log("Combined array:", combinedArray);

// 6. slice() - Extracts a portion of an array
let slicedArray = combinedArray.slice(2, 5);
console.log("Sliced array:", slicedArray);

// 7. splice() - Modifies an array by removing or replacing existing elements
let removedItems = combinedArray.splice(2, 2, 11, 12);
console.log("Array after splice():", combinedArray, "Removed:", removedItems);

// 8. indexOf() - Returns the first index at which a given element can be found
console.log("Index of '3':", combinedArray.indexOf(3));

// 9. lastIndexOf() - Returns the last index at which a given element can be found
console.log("Last index of '3':", combinedArray.lastIndexOf(3));

// 10. forEach() - Executes a provided function once for each array element
console.log("Using forEach():");
combinedArray.forEach(item => console.log(item));

// 11. map() - Creates a new array with the results of calling a provided function on every element in the array
let mappedArray = combinedArray.map(item => item * 2);
console.log("Mapped array:", mappedArray);

// 12. filter() - Creates a new array with elements that pass the test implemented by the provided function
let filteredArray = combinedArray.filter(item => item % 2 === 0);
console.log("Filtered array:", filteredArray);

// 13. find() - Returns the first element in the array that satisfies the provided testing function
let foundElement = combinedArray.find(item => item > 5);
console.log("First element greater than 5:", foundElement);

// 14. includes() - Determines whether an array includes a certain value
console.log("Does it include '7'?", combinedArray.includes(7));

// 15. every() - Tests whether all elements in the array pass the test implemented by the provided function
console.log("Are all elements less than 20?", combinedArray.every(item => item < 20));

// 16. some() - Tests whether at least one element in the array passes the test implemented by the provided function
console.log("Does it have at least one even number?", combinedArray.some(item => item % 2 === 0));

// 17. reduce() - Applies a function against an accumulator and each element in the array to reduce it to a single value
let reducedValue = combinedArray.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log("Reduced value:", reducedValue);
