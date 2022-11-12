
// Write a function called concat(),
// which receives an array of strings as a parameter.
// The function returns a string formed by concatenating
// the elements of the array. (2p)
'use strict';

let arrayList = ['Johnny', 'DeeDee', 'Joey', 'Marky'];
let stringLine;

function concat(myList){
  stringLine = String(myList).replace(/,/g,'');
  console.log(myList)
  document.querySelector('#target').innerHTML = "Concatenated strings list: "+ "<br>" + stringLine;
}

concat(arrayList);