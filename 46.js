// JavaScript Array: Exercise-46 with Solution
// Write a JavaScript program to generate all permutations of an array's elements (including duplicates).

// Use recursion.
// For each element in the given array, create all the partial permutations for the rest of its elements.
// Use Array.prototype.map() to combine the element with each partial permutation, then Array.prototype.reduce() to combine all permutations in one array.
// Base cases are for Array.prototype.length equal to 2 or 1.
// WARNING: This function's execution time increases exponentially with each array element. Anything more than 8 to 10 entries may cause your browser to hang as it tries to solve all the different combinations.

//Source:https://bit.ly/3hEZdCl
const permutations = arr => {
    if (arr.length <= 2) return arr.length === 2 ? [arr, [arr[1], arr[0]]] : arr;
    return arr.reduce(
      (acc, item, i) =>
        acc.concat(
          permutations([...arr.slice(0, i), ...arr.slice(i + 1)]).map(val => [
            item,
            ...val,
          ])
        ),
      []
    );
  };
  console.log(permutations([1, 33, 5]));
  console.log(permutations([1, 3, 5, 7]));
  console.log(permutations([2, 4]));