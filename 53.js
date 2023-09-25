// JavaScript Array: Exercise-53 with Solution
// Write a JavaScript program to count the number of arrays inside a given array.

// Test Data:

// ([2,8,[6],3,3,5,3,4,[5,4]]) -> 2
// ([2,8,[6,3,3],[4],5,[3,4,[5,4]]]) -> 3

function test(my_arr){
    return my_arr.filter((arr)=>Array.isArray(arr)).length

}

arr_nums = [2,8,[6],3,3,5,3,4,[5,4]]
console.log("Number of arrays inside the said array: "+test(arr_nums));
arr_nums = [2,8,[6,3,3],[4],5,[3,4,[5,4]]]
console.log("Number of arrays inside the said array: "+test(arr_nums));