
// Write a voting program as described below for small-scale meeting use. (8p)
'use strict';

let numberOfCandidates = parseInt(prompt("Give the number of candidates: "));
let namesOfTheCandidates;
let voteCount = [];
//let numberOfVoters = parseInt(prompt("Give the number of voters: "));
//let whoToVoteFor = prompt("Who will you vote for (Voter should enter candidate name): ");

//let nameOfTheWinner = '';
let i = 0;
while ( i < numberOfCandidates){
    namesOfTheCandidates = prompt("Name for candidate 1: ");
    i += 1;
    voteCount.push(namesOfTheCandidates)

voteCount = voteCount.map(function(element){
    return {"name": element};
});
if (voteCount === 'NaN'){
  voteCount = 0;
}

console.log(voteCount);

}