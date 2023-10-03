// JavaScript Array: Exercise-27 with Solution
// Write a JavaScript function to retrieve the value of a given property from all elements in an array.

// Sample array: [NaN, 0, 15, false, -22, '',undefined, 47, null]
// Expected result: [15, -22, 47]

function getPropertyValues(arr) {
    // return arr.filter(function(element) {
    //   return element;
    // });
    return arr.filter((element) => element)
  }
  const sampleArray = [NaN, 0, 15, false, -22, '', undefined, 47, null];
  const result = getPropertyValues(sampleArray);
  console.log(result); // Output: [15, -22, 47]
  