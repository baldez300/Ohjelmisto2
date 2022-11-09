
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

let noppa;
for (let i = 0; i < 100, i++;){
  noppa = Math.floor(Math.random() * 6) +1;
  document.querySelector('#p1').innerHTML = noppa
}
