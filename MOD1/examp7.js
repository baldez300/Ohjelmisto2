
// Write a program that asks the user for the number of dice.
// The program throws all the dice once and prints the sum of the numbers. (2p)
'use strict';

let throwCount = parseInt(prompt("Give a number: "))
let sum = 0
let dice;
for (let i = 0; i < throwCount; i++) {
  dice = Math.floor(Math.random() * 6) +1;
  sum += dice
}
document.querySelector('#target').innerHTML = "Heitti noppaa " + throwCount + ' kertaa saadaksesi silmaluku ' + sum ;