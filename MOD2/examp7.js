
// Modify the function above so that it gets the number of sides on the dice as a parameter.
// With the modified function you can for example roll a 21-sided role-playing dice.
// The difference to the last exercise is that the dice rolling in the main program continues
// until the program gets the maximum number on the dice,
// which is asked from the user at the beginning. (2p)
'use strict';

let throwCount = parseInt(prompt("Give a number: "))

let html;
function rollDie(numberOfSides){
 return  Math.ceil(Math.random() * numberOfSides)
}
function playDieGame(){
  let dieValue= -1;
  while (dieValue !== 6){
    dieValue= rollDie(throwCount);
    console.log(dieValue);

    html += "<li>" + dieValue+ "</li>";
    document.querySelector('#target').innerHTML = "The result of each roll until 6 is struck: " + html;
  }

}
playDieGame();