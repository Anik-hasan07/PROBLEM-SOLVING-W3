// Write a JavaScript program to find the most frequent item in an array.

// Sample array: var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
// Sample Output: a ( 5 times )

function findMostFrequentItem(arr) {
    const frequencyCounter = {};
    let mostFrequentItem = null;
    let maxFrequency = 0;
  
    for (const item of arr) {
      if (frequencyCounter[item]) {
        frequencyCounter[item]++;
      } else {
        frequencyCounter[item] = 1;
      }
  
      if (frequencyCounter[item] > maxFrequency) {
        mostFrequentItem = item;
        maxFrequency = frequencyCounter[item];
      }
    }
  
    return `${mostFrequentItem} ( ${maxFrequency} times )`;
  }
  
  var arr1 = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
  var mostFrequent = findMostFrequentItem(arr1);
  console.log(mostFrequent);
  