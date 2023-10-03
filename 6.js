// JavaScript Array: Exercise-6 with Solution
// Write a JavaScript program that accepts a number as input and inserts dashes (-) between each even number. For example if you accept 025468 the output should be 0-254-6-8.

function insertDashesBetweenEvens(number) {
    const numStr = number.toString();
    let result = '';
  
    for (let i = 0; i < numStr.length; i++) {
      const digit = parseInt(numStr[i]);
      const nextDigit = parseInt(numStr[i + 1]);
  
      result += digit;
  
      if (digit % 2 === 0 && nextDigit % 2 === 0) {
        result += '-';
      }
    }
  
    return result;
  }
  
//   const inputNumber = 025468;
  const resultString = insertDashesBetweenEvens("025468");
  console.log(resultString); // Output: "0-254-6-8"
  