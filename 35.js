// JavaScript Array: Exercise-35 with Solution
// Write a JavaScript function to get random items from an array.

function random_item(items)
{
  
return items[Math.floor(Math.random()*items.length)];
     
}

const items = [254, 45, 212, 365, 2543];
console.log(random_item(items));
