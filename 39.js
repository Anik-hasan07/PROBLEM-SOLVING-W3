// JavaScript Array: Exercise-39 with Solution
// Write a JavaScript function to filter false, null, 0 and blank values from an array.

// Test Data :
// console.log(filter_array_values([58, '', 'abcd', true, null, false, 0]));
// [58, "abcd", true]

function filter_array_values(arr) {
    const filteredArray = arr.filter(function (value) {
      return value !== false && value !== null && value !== 0 && value !== '';
    });
  
    return filteredArray;
  }
  
  console.log(filter_array_values([58, '', 'abcd', true, null, false, 0])); 
  