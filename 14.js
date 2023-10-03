// JavaScript Array: Exercise-14 with Solution
// Write a JavaScript program to remove duplicate items from an array (ignore case sensitivity).

function removeDuplicates(arr) {
    return arr.filter((item,index) =>arr.indexOf(item)==index)
   
}

var Mynum = [1, 2, 2, 4, 5, 4, 7, 8, 7, 3, 6];
var result = removeDuplicates(Mynum).sort();
console.log(result);