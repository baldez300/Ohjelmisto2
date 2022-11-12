
// Make a program that asks the user for the number of dice and
// the sum of the eye numbers of interest to the user.
// The purpose of your program is now to find out with
// what probability the number of dice given by the user produces
// the sum of the number of eyes given by the user. For example,
// if the user enters 3 as the number of dice and 17 as the sum of the eyes,
// the program calculates the probability that
// the sum of the three dice's eye numbers is 17. (5p)
'use strict';

let throwCount = parseInt(prompt("Give a number of dice: ", 2))
let sum = parseInt(prompt("Give a number of sum: ", 7))

let probability = 0;

let dice;
for (let i = 0; i < throwCount; i++) {
  dice = Math.floor(Math.random() * 6) +1;
  sum += dice;
  probability = sum / dice;
}
document.querySelector('#target').innerHTML = 'Probability to get sum ' +sum+ ' with '+dice+ ' dice is '+probability.toFixed(2)+'%';

// ================
let total = [0,0,0,0,0,0,0,0,0,0,0,0]
let count = [0,0,0,0,0,0,0,0,0,0,0,0]

function write(){
  let html="";
  for(let i=2; i<=12; i++){
    html += ("The Sum of "+i+" occurred :"+count[i]+" Times and Total : " + total[i] + "<br/>");
  }

  document.write(html, 'Balde');
}

function roll(){
  let d1 = Math.floor(1 + Math.random() * 6);
  let d2 = Math.floor(1 + Math.random() * 6);
  count[d1+d2]++;
  total[d1+d2] += d1+d2;
}

for(let i=1;i<=10000;i++)
  roll();

write();