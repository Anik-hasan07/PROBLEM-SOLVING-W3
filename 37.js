// Write a JavaScript function to create a specified number of elements with a pre-filled string value array.

// Test Data:
// console.log(array_filled(3, 'default value'));
// ["default value", "default value", "default value"]
// console.log(array_filled(4, 'password'));
// ["password", "password", "password", "password"]

function array_filled(count, value) {
    return Array(count).fill(value);
  }
  console.log(array_filled(3, 'default value')); 
  console.log(array_filled(4, 'password')); 
  console.log(array_filled(6, 0));
[0, 0, 0, 0, 0, 0]
console.log(array_filled(4, 11));
[11, 11, 11, 11]
  