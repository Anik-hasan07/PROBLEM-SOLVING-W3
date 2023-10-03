// JavaScript Array: Exercise-26 with Solution
// Write a JavaScript program to find a pair of elements (indices of the two numbers) in a given array whose sum equals a specific target number.

// Input: numbers= [10,20,10,40,50,60,70], target=50
// Output: 2, 3

// Pictorial Presentation:


function findPairWithSum(numbers, target) {
    const seen = {};
  
    for (let i = 0; i < numbers.length; i++) {
      const currentNum = numbers[i];
      const complement = target - currentNum;
  
      if (seen[complement] !== undefined) {
        return [seen[complement], i];
      }
  
      seen[currentNum] = i;
    }
  
    return null; // If no such pair is found
  }
  
  // Test case
  const numbers = [10, 20, 10, 40, 50, 60, 70];
  const target = 50;
  const result = findPairWithSum(numbers, target);
  
  if (result !== null) {
    console.log(result.join(', ')); // Output: "2, 3"
  } else {
    console.log("No pair with the specified sum found.");
  }
  