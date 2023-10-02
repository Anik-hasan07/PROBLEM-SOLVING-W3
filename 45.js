// JavaScript Array: Exercise-45 with Solution
// Write a JavaScript program to find all the unique values in a set of numbers.

// Create a new Set() from the given array to discard duplicated values.
// Use the spread operator (...) to convert it back to an array

const unique_Elements = (arr)=>[...new Set(arr)];

console.log(unique_Elements([1, 2, 2, 3, 4, 4, 5]));
console.log(unique_Elements([1, 2, 3, 4, 5]));
console.log(unique_Elements([1, -2, -2, 3, 4, -5, -6, -5]));