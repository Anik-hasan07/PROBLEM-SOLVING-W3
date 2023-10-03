// JavaScript Array: Exercise-9 with Solution
// Write a JavaScript program that accepts a string as input and swaps the case of each character. For example if you input 'The Quick Brown Fox' the output should be 'tHE qUICK bROWN fOX'.

function swapCase(inputString) {
    let result = "";
    for(let i=0; i<inputString.length; i++) {
        const char = inputString[i];
        if(char == char.toUpperCase()){
            result+=char.toLowerCase();
        }else{
            result+=char.toUpperCase();
        }
    }
    return result;
}

const inputString = 'The Quick Brown Fox';
const swappedString = swapCase(inputString);
console.log(swappedString); // Output: "tHE qUICK bROWN fOX"