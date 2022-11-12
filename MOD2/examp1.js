
// Write a program that prompts the user for five numbers and
// prints them in the reverse order they were entered.
// Print the result to the console.(2p)
// Save the numbers to an array, then use for-loop to iterate in reverse order.
// Do not use array.reverse() function.
'use strict';

let numList = [];
let count = 0
let num

while (count < 5){
  num = parseInt(prompt('Give a number: '));
  count += 1
  numList.push(num);
}

for (let i = numList.length -1; i >= 0; i--){
  console.log(numList[i]);
}

