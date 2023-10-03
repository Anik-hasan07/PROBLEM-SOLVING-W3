// JavaScript Array: Exercise-28 with Solution
// Write a JavaScript function to find the longest common starting substring in a set of strings.

// Sample array : console.log(longest_common_starting_substring(['go', 'google']));
// Expected result : "go"

function longest_common_starting_substring(strings) {
    if (strings.length === 0) {
      return "";
    }
    strings.sort();
  
    const firstString = strings[0];
    const lastString = strings[strings.length - 1];
    let commonPrefix = "";
  
    for (let i = 0; i < firstString.length; i++) {
      if (firstString[i] === lastString[i]) {
        commonPrefix += firstString[i];
      } else {
        break;
      }
    }
  
    return commonPrefix;
  }
  
  console.log(longest_common_starting_substring(['go', 'google'])); // Output: "go"
  