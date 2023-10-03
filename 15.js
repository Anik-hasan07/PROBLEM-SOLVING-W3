// JavaScript Array: Exercise-15 with Solution
// Write a JavaScript program to display the colors in the following way.

// Here is the sample array:
// color = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "];
// o = ["th","st","nd","rd"]
// Output
// "1st choice is Blue ."
// "2nd choice is Green."
// "3rd choice is Red."


const colors = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "];
const suffixes = ["th", "st", "nd", "rd"];

for (let i = 0; i < colors.length; i++) {
  const suffix = (i >= 1 && i <= 3) ? suffixes[i] : suffixes[0];
  console.log(`${i + 1}${suffix} choice is ${colors[i]}.`);
}
