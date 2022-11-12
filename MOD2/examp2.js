
// Write a program that asks the user for the number of participants.
// After this, the program asks for the names of all participants.
// Finally, the program prints the names of the participants on the web page
// in an ordered list (<ol>) in the same order as they were entered. (2p)
'use strict';

let numOfParticipant = parseInt(prompt('Give the number of participant(s): '));
let listOfParticipant = [];
let name;

let count = 0
while (count < numOfParticipant ){
  name = prompt('Give a name of a participant: ');
  count += 1
  listOfParticipant.push(name);

let html = "";
for (let i = 0; i < listOfParticipant.length; i++){
  html += "<li>" + listOfParticipant[i]+ "</li>";

  document.querySelector('#target').innerHTML = html;
}

}
