
// Write a program that prompts the user for numbers.
// When the user enters one of the numbers he previously entered,
// the program will announce that the number has already been given
// and stops its operation and then prints all the given numbers
// to the console in ascending order. (2p)
'use strict';


let numberList = [];
let number;
let duplicateNumber;
let ascendNumbers;
let uniqueNumbers;

let bool = true;

while (bool){
  number = parseInt(prompt('Give a number until you input a previously entered number: '));
  numberList.push(number);
  duplicateNumber = numberList.some((val, i) => numberList.indexOf(val) !== i);

  if (duplicateNumber){
    alert('The number has already been given.');
    ascendNumbers = numberList.sort((a, b) => a - b );
    uniqueNumbers = [...new Set(ascendNumbers)];
    console.log(uniqueNumbers);
    bool = false;
  }

}
