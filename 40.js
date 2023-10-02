// JavaScript Array: Exercise-40 with Solution
// Write a JavaScript function to generate an array of integer numbers, increasing one from the starting position, of a specified length.

// Test Data :
// console.log(array_range(1, 4));
// [1, 2, 3, 4]
// console.log(array_range(-6, 4));
// [-6, -5, -4, -3]

function array_range(start, len) 
     {
		const arr = new Array(len);
		for (let i = 0; i < len; i++, start++) 
        {
			arr[i] = start;
		}
      		return arr;
}


console.log(array_range(1, 4));

console.log(array_range(-6, 4));
