// JavaScript Array: Exercise-41 with Solution
// Write a JavaScript function to generate an array between two integers of 1 step length.

// Test Data :
// console.log(rangeBetwee(4, 7));
// [4, 5, 6, 7]
// console.log(rangeBetwee(-4, 7));
// [-4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7]

function rangeBetween(start, end) {
    const result = [];
    
    for (let i = start; i <= end; i++) {
      result.push(i);
    }
    
    return result;
  }
  
  // Test cases
  console.log(rangeBetween(4, 7)); // Output: [4, 5, 6, 7]
  console.log(rangeBetween(-4, 7)); // Output: [-4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7]
  