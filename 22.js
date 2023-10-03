// Write a JavaScript program to compute the union of two arrays.

// Sample Data:
// console.log(union([1, 2, 3], [100, 2, 1, 10]));
// [1, 2, 3, 10, 100]

function union(arr1, arr2) {
    const uniqueSet = new Set([...arr1, ...arr2]);
    const unionArray = Array.from(uniqueSet);
    return unionArray;
  }
  console.log(union([1, 2, 3], [100, 2, 1, 10])); // Output: [1, 2, 3, 10, 100]
  