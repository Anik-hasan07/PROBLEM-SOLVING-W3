// JavaScript Array: Exercise-18 with Solution
// Write a JavaScript program to perform a binary search.

// Note : A binary search or half-interval search algorithm finds the position of a specified input value within an array sorted by key value.


// Sample array:
// var items = [1, 2, 3, 4, 5, 7, 8, 9];
// Expected Output:
// console.log(binary_Search(items, 1)); //0
// console.log(binary_Search(items, 5)); //4

function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;
  
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
  
      if (arr[mid] === target) {
        return mid; // Target found, return the index
      } else if (arr[mid] < target) {
        left = mid + 1; // Target is in the right half
      } else {
        right = mid - 1; // Target is in the left half
      }
    }
  
    return -1; // Target not found in the array
  }
  
  const items = [1, 2, 3, 4, 5, 7, 8, 9];
  
  console.log(binarySearch(items, 1)); // 0
  console.log(binarySearch(items, 5)); // 4
  