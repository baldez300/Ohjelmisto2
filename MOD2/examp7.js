
// Modify the function above so that it gets the number of sides on the dice as a parameter.
// With the modified function you can for example roll a 21-sided role-playing dice.
// The difference to the last exercise is that the dice rolling in the main program continues
// until the program gets the maximum number on the dice,
// which is asked from the user at the beginning. (2p)
'use strict';

let throwCount = parseInt(prompt("Give a number: ",21))
let dice;
let rollList = [];
let html = "";

function rollDice(numSides){
  for (let i = 0; i < numSides; i++){
    dice = Math.floor(Math.random() * 6) + 1;
    rollList.push(dice);
    console.log(rollList)

    for (let i = 0; i < rollList.length; i++){
      html += "<li>" + rollList[i]+ "</li>";
    document.querySelector('#target').innerHTML = "The maximum number on the dice: " + html;
    }

    if (dice === numSides[i]){
      break;
    }
  }
}

rollDice(throwCount);