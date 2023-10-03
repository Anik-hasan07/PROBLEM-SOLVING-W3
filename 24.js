// JavaScript Array: Exercise-24 with Solution
// Write a JavaScript function to remove. 'null', '0', '""', 'false', 'undefined' and 'NaN' values from an array.

// Sample array: [NaN, 0, 15, false, -22, '',undefined, 47, null]
// Expected result: [15, -22, 47]

function removeFalsyValues(arr) {
    return arr.filter(function(element) {
      return element !== null &&
             element !== 0 &&
             element !== '' &&
             element !== false &&
             element !== undefined &&
             !Number.isNaN(element);
    });
  }
  
  // Test case
  const sampleArray = [NaN, 0, 15, false, -22, '', undefined, 47, null];
  const result = removeFalsyValues(sampleArray);
  console.log(result); // Output: [15, -22, 47]
  