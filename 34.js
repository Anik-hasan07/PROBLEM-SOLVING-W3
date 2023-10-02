// JavaScript Array: Exercise-34 with Solution
// Write a JavaScript function to get the nth largest element from an unsorted array.

// Test Data:
// console.log(nthlargest([ 43, 56, 23, 89, 88, 90, 99, 652], 4));
// 89

function nthLargest(arr, n) {
    arr.sort(function(a, b) {
      return b - a;
    });
    return arr[n - 1];
  }
console.log(nthLargest([43, 56, 23, 89, 100, 90, 99, 652,545], 4)); 
  