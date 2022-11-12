
// Write a function that returns a random dice roll between 1 and 6.
// The function should not have any parameters.
// Write a main program that rolls the dice until the result is 6.
// The main program should print out the result of each roll
// in an unordered list (<ul>). (2p)
'use strict';

let run = true;
let dice;
let rollList = [];
let html = "";

function rollDice(){
  while (run){
    dice = Math.floor(Math.random() * 6) + 1;
    rollList.push(dice);

    if (dice === 6){
      run = false;
    }

    for (let i = 0; i < rollList.length; i++){
      html += "<li>" + rollList[i]+ "</li>";
    document.querySelector('#target').innerHTML = "The result of each roll until 6 is struck: " + html;
    }

  }
}

rollDice();