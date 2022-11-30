


/* let time = end - start;
for (let i = 0; i <= time; i++){
  let yearList = time + i

}
if (){
  const node =document.createElement('li')
  const textnode = document.createTextNode(yearList)
  node.appendChild(textnode)
  document.getElementById('target').appendChild(node)
}

 */


// Write a program that prompts the user for five numbers and
// prints them in the reverse order they were entered.
// Print the result to the console.(2p)
// Save the numbers to an array, then use for-loop to iterate in reverse order.
// Do not use array.reverse() function.
'use strict';

/*
let num1 = parseInt(prompt('Give first number: '));
let num2 = parseInt(prompt('Give second number: '));
let num3 = parseInt(prompt('Give third number: '));
let num4 = parseInt(prompt('Give fourth number: '));
let num5 = parseInt(prompt('Give fifth number: '));

let numList = [];
numList.push(num1, num2, num3, num4, num5);

for (let i = numList.length -1; i >= 0; i--){
  console.log(numList[i]);
}
 */

fetch('http://localhost:5000airport/efhk')
