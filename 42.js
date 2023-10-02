// JavaScript Array: Exercise-42 with Solution
// Write a JavaScript function to find unique elements in two arrays.

// Test Data :
// console.log(difference([1, 2, 3], [100, 2, 1, 10]));
// ["1", "2", "3", "10", "100"]
// console.log(difference([1, 2, 3, 4, 5], [1, [2], [3, [[4]]],[5,6]]));
// ["1", "2", "3", "4", "5", "6"]
// console.log(difference([1, 2, 3], [100, 2, 1, 10]));
// ["1", "2", "3", "10", "100"]

function difference(arr1, arr2) {
    const flatten = (arr) => {
      return arr.reduce((acc, val) => Array.isArray(val) ? acc.concat(flatten(val)) : acc.concat(val), []);
    };
  
    const flattenedArr1 = flatten(arr1);
    const flattenedArr2 = flatten(arr2);
  
    const combinedArray = flattenedArr1.concat(flattenedArr2);
  
    const uniqueElements = combinedArray.filter((item, index) => {
      return combinedArray.indexOf(item) === index;
    });
  
    return uniqueElements.sort();
  }
  
  console.log(difference([1, 2, 3], [100, 2, 1, 10])); 
  console.log(difference([1, 2, 3, 4, 5], [1, [2], [3, [[4]]], [5, 6]])); 
  console.log(difference([1, 2, 3], [100, 2, 1, 10])); 
  