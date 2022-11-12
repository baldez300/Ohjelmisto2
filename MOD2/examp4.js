
// Write a program that asks the user for numbers until he gives zero.
// The given numbers are printed in the console from the largest to the smallest. (2p)
'use strict';


let numberList = [];
let number = ''

while (number !== 0){
  number = parseInt(prompt('Give a number until you input zero(0): '));
  numberList.push(number);

numberList.sort((a, b) => b - a);
console.log(numberList)
}
