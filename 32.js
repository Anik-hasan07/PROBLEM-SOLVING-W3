// JavaScript Array: Exercise-32 with Solution
// Write a JavaScript function to find an array containing a specific element.

// Test data:
// arr = [2, 5, 9, 6];
// console.log(contains(arr, 5));
// [True]

function contains(arr, element) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === element) {
            return true;
        }
    }
    return false;
}
arr = [2, 5, 9, 6];
console.log(contains(arr, 5));
