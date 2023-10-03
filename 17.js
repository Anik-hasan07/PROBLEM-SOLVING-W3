// JavaScript Array: Exercise-17 with Solution
// Write a JavaScript program to shuffle an array.

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1)); // Generate a random index between 0 and i
      // Swap array[i] and array[j]
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
  
  const myArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const shuffledArray = shuffleArray([...myArray]);
  console.log(shuffledArray);
  