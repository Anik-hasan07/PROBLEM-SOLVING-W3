// JavaScript Array: Exercise-23 with Solution
// Write a JavaScript function to find the difference between two arrays.

// Test Data:
// console.log(difference([1, 2, 3], [100, 2, 1, 10]));
// ["3", "10", "100"]
// console.log(difference([1, 2, 3, 4, 5], [1, [2], [3, [[4]]],[5,6]]));
// ["6"]
// console.log(difference([1, 2, 3], [100, 2, 1, 10]));
// ["3", "10", "100"]

function difference(arr1, arr2) {
    const flatten = (arr) => {
      return arr.reduce((acc, val) => Array.isArray(val) ? acc.concat(flatten(val)) : acc.concat(val), []);
    };
  
    const flattenedArr1 = flatten(arr1);
    const flattenedArr2 = flatten(arr2);
  
    const uniqueElements = [];
  
    for (let i = 0; i < flattenedArr1.length; i++) {
      if (!flattenedArr2.includes(flattenedArr1[i]) && !uniqueElements.includes(flattenedArr1[i])) {
        uniqueElements.push(flattenedArr1[i]);
      }
    }
  
    return uniqueElements;
  }
  
  // Test cases
  console.log(difference([1, 2, 3], [100, 2, 1, 10])); // Output: ["3", "10", "100"]
  console.log(difference([1, 2, 3, 4, 5], [1, [2], [3, [[4]]], [5, 6]])); // Output: ["6"]
  console.log(difference([1, 2, 3], [100, 2, 1, 10])); // Output: ["3", "10", "100"]
  