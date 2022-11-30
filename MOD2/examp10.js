
// Write a voting program as described below for small-scale meeting use. (8p)
  // The program asks for the number of candidates.
  // Then the program asks for the names of the candidates: 'Name for candidate 1
  // Store the candidates' names and initial vote count in objects like this:
  // [
  //     {
  //         name: 'ellie',
  //         votes: 0,
  //     },
  //     {
  //         name: 'frank',
  //         votes: 0,
  //     },
  //     {
  //         name: 'pamela',
  //         votes: 0,
  //     },
  // ]
  // The program asks for the number of voters.
  // The program asks each voter in turn who they will vote for. Voter shoud enter candidate name. If the voter enters an empty value instead of the voting number, it will be interpreted as an empty vote.
  // The program announces the name of the winner and the results by printing it to the console:
'use strict';

let numberOfCandidates = parseInt(prompt('Give number of candidates: ', 2));
let candidates = [];


for (let i = 0; i < numberOfCandidates; i++){
    const name = prompt(`Name for candidate: ${i + 1}`);
    if (candidates.some(candidate => candidate.name === name)) {
      alert('Name already given');
      i--;
      continue;
    }
    candidates.push({name: name, votes: 0})
}

const numberOfVotes = +prompt('Give number of votes: ');

for (let i = 0; i < numberOfVotes; i++){
  const voteName = prompt(`Vote nro. ${i + 1}: Give name of candidate`);
  if (voteName !== candidates.name){
    alert('Give existing candidates name')
  }
  const vote = candidates.find(candidate => candidate.name === voteName);
  if (vote) vote.votes++;
}

candidates.sort((c1, c2) => c2.votes - c1.votes);
document.querySelector('#pre').textContent += `The winner is ${candidates[0].name} by 
${numberOfVotes} votes. \nResults:`;

for (const candidate of candidates) {
  document.querySelector('#pre').textContent += `\n${candidate.name}: ${candidate.votes} votes`;
}