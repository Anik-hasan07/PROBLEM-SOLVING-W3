// JavaScript Array: Exercise-19 with Solution
// There are two arrays with individual values. Write a JavaScript program to compute the sum of each individual index value in the given array.

// Sample array:
// array1 = [1,0,2,3,4];
// array2 = [3,5,6,7,8,13];
// Expected Output:
// [4, 5, 8, 10, 12, 13]

function computeSumOfArrays(array1, array2) {
    const maxLength = Math.max(array1.length, array2.length);
    const result = [];
  
    for (let i = 0; i < maxLength; i++) {
      const value1 = array1[i] || 0; 
      const value2 = array2[i] || 0; 
      const sum = value1 + value2;
      result.push(sum);
    }
    return result;
  }
  const array1 = [1, 0, 2, 3, 4];
  const array2 = [3, 5, 6, 7, 8, 13];
  const resultArray = computeSumOfArrays(array1, array2);
  console.log(resultArray);
  