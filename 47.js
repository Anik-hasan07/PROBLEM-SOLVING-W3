// JavaScript Array: Exercise-47 with Solution
// Write a JavaScript program to remove all false values from an object or array.

// Use recursion.
// Initialize the iterable data, using Array.isArray(), Array.prototype.filter() and Boolean for arrays in order to avoid sparse arrays.
// Use Object.keys() and Array.prototype.reduce() to iterate over each key with an appropriate initial value.
// Use Boolean to determine the truthiness of each key's value and add it to the accumulator if it's truthy.
// Use typeof to determine if a given value is an object and call the function again to deeply compact it.



function removeFalsy(obj) {
    for (let prop in obj) {
      if (obj[prop] === Object(obj[prop])) {
        // If the property is an object or array, recursively call removeFalsy
        removeFalsy(obj[prop]);
        if (Object.keys(obj[prop]).length === 0) {
          delete obj[prop];
        }
      } else if (!obj[prop]) {
        delete obj[prop];
      }
    }
  }

const obj = {
    a: null,
    b: false,
    c: true,
    d: 0,
    e: 1,
    f: '',
    g: 'a',
    h: [null, false, '', true, 1, 'a'],
    i: { j: 0, k: false, l: 'a' }
  };
  removeFalsy(obj);

console.log(obj);