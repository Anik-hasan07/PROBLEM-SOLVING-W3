// JavaScript Array: Exercise-29 with Solution
// Write a JavaScript function to fill an array with values (numeric, string with one character) within supplied bounds.

// Test Data:
// console.log(num_string_range('a', "z", 2));
// ["a", "c", "e", "g", "i", "k", "m", "o", "q", "s", "u", "w", "y"]

function num_string_range(start, end, step) {
    const result = [];
    const startCode = start.charCodeAt(0);
    const endCode = end.charCodeAt(0);
  
    for (let i = startCode; i <= endCode; i += step) {
      result.push(String.fromCharCode(i));
    }
    return result;
  } 
  // Test case
  console.log(num_string_range('a', 'z', 2));
  