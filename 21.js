// JavaScript Array: Exercise-21 with Solution
// Write a JavaScript program to myFlatten a nested (any depth) array. If you pass shallow, the array will only be myFlattened to a single level.

// Sample Data:
// console.log(myFlatten([1, [2], [3, [[4]]],[5,6]]));
// [1, 2, 3, 4, 5, 6]
// console.log(myFlatten([1, [2], [3, [[4]]],[5,6]], true));
// [1, 2, 3, [[4]], 5, 6]

function flatten(arr, shallow) {
    let result = [];
    arr.forEach(function (item) {
      if (Array.isArray(item) && !shallow) {
        result = result.concat(flatten(item, false));
      } else if (Array.isArray(item) && shallow) {
        result = result.concat(item);
      } else {
        result.push(item);
      }
    });
    return result;
  }
  
  // Test cases
  console.log(flatten([1, [2], [3, [[4]]], [5, 6]]));
  console.log(flatten([1, [2], [3, [[4]]], [5, 6]], true));
  