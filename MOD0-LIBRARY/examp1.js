
'use strict';
//console.log('This is text is printed to the console.');
//alert('Hi from here too!');
//let nimi = "Heini";
//let ikaint = 23;
//let ikastr = ikaint.toString()
//ikastr = ikastr+10;
//ikaint = ikaint+10;

/*let ikastr = "23"
let ikaint = parseInt(ikastr)

document.querySelector('#p1').innerHTML = ikastr;
document.querySelector('#p2').innerHTML = ikaint;*/

//let name = prompt("Give your name:");
//document.querySelector('#p1').innerHTML = "Hi, "+name+"!";

/*let ageStr = prompt("Give your agee:");
let ageInt = parseInt(ageStr)

if (ageInt < 18) {
  document.querySelector('#p1').innerHTML = "You are a minor!";
} else if (ageInt === 18) {
  document.querySelector('#p2').innerHTML = "You are just eighteen years old!";
} else
  document.querySelector('#p3').innerHTML = "You are just an adult!"; */

/*let arvosanaStr = prompt("Give your grade: ")
let arvosanaInt = parseInt(arvosanaStr)
switch (arvosanaInt) {
  case 5:
  case 4:
    document.querySelector('#p1').innerHTML = "Great!";
    break
  case 3:
  case 2:
    document.querySelector('#p1').innerHTML = "Ok!";
    break
  case 1:
    document.querySelector('#p1').innerHTML = "Bad!";
    break
  default:
    document.querySelector('#p1').innerHTML = "Hopohop!";
}*/

/*let noppa = 0
let lastkuri = 0
while (noppa !== 6) {
  noppa = Math.floor(Math.random() * 6) +1;
  lastkuri++
}
document.querySelector('#p1').innerHTML = "Heitti noppaa " + lastkuri + ' kertaa saadaksesi silmaluku ' + noppa ;

 */

/*let noppa;
let laskuri = 0;
do {
  noppa = Math.floor(Math.random() * 6) +1;
  laskuri++;
}while (noppa < 6)
document.querySelector('#p1').innerHTML = "Heitti noppaa " + laskuri + ' kertaa saadaksesi silmaluku ' + noppa ;

 */

/*let noppa;
for (let i = 0; i < 100, i++;){
  noppa = Math.floor(Math.random() * 6) +1;
  document.querySelector('#p1').innerHTML = noppa
}

 */

// Different functions
doSomething('Kukka');
function doSomething(someParameter){
  console.log('Do something', someParameter);
}
//console.log(someParameter)

const doSomethingElse = function(){
  console.log('Do something else');
}
doSomethingElse();

const doSomethingElseAgain = () => {
  console.log('Do something else');
}
doSomethingElseAgain()

let greeting = 'Hyvää yötä';
function sayHello(toWhom, greening = 'Hyömentä'){
  if (!greening !== ''){
    console.log('greeting is empty');
    return false;
  }
  console.log(greeting+ ' '+ toWhom);
  return true;
}
sayHello('Balde', 'parametrin arvo');
sayHello('Mamadou');
const result = sayHello('Aku', 'fd');
console.log(result);
// ======================

// Laskee arrayn numeeriset alkiot yhtieen ja korvaa muut arvot nollalla
function calculateArraySum(numberArray){
  let sum = 0;
  for (const index in numberArray){
    if (typeof numberArray[index]  === 'number'){
      sum += numberArray[index];
    } else {
      numberArray[index] = 0;
    }
  }
  console.log(numberArray);
  return sum;
}
const inputArray = [1, 2, 3, 4, '5', '6', true, false ];
const sum = calculateArraySum(inputArray);
console.log('Taulukon summa: ', sum)
console.log('inputArray', inputArray)


// Tehtävä MOD 2 osa 7
function rollDie(numberOfSides){
 return  Math.ceil(Math.random() * numberOfSides)
}
function playDieGame(){
  let dieValue= -1;
  while (dieValue !== 6){
    dieValue= rollDie(6);
    console.log(dieValue);
  }

}
playDieGame();

// Tehtävä MOD 2 osa 6
function rollDie(numberOfSides){
 return  Math.ceil(Math.random() * numberOfSides)
}
function playDieGame(){
  let resultsElem = document.getElementById('target');
  const ulElem = document.createElement('ul');
  resultsElem.append(ulElem);

  let dieValue= -1;
  while (dieValue !== 6){
    dieValue= rollDie(6);
    console.log(dieValue);
    const liElem = document.createElement('li')
    liElem.innerText = 'Heiton tulos: ' + dieValue;
    ulElem.append(liElem);
  }

}
playDieGame();

// Tehtävä MOD 2 osa ...kato ope dokulta
function rollDie(numberOfSides){
 return  Math.ceil(Math.random() * numberOfSides)
}
function playDieGame(numberOfSides){
  let resultsElem = document.getElementById('target');
  const ulElem = document.createElement('ul');
  resultsElem.append(ulElem);

  let dieValue= -1;
  while (dieValue !== numberOfSides){
    dieValue= rollDie(numberOfSides);
    console.log(dieValue);
    const liElem = document.createElement('li')
    liElem.innerText = 'Heiton tulos: ' + dieValue;
    ulElem.append(liElem);
  }

}
const dieSize = prompt('Nopan silmukän lkm');
playDieGame(dieSize);