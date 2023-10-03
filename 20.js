// JavaScript Array: Exercise-20 with Solution
// Write a JavaScript program to find duplicate values in a JavaScript array.


function find_duplicate_in_array(arr) {
    const count = {};
    const duplicates = [];
  
    for (const num of arr) {
      if (count[num] === undefined) {
        count[num] = 1;
      } else {
        count[num]++;
      }
    }
  
    for (const num in count) {
      if (count[num] > 1) {
        duplicates.push(parseInt(num));
      }
    }
  
    return duplicates;
  }
  
  const inputArray = [1, 2, -2, 4, 5, 4, 7, 8, 7, 7, 71, 3, 6];
  const duplicateValues = find_duplicate_in_array(inputArray);
  console.log(duplicateValues);
  