
// Write a program that asks for the names of six dogs.
// The program prints dog names
// to unordered list <ul> in reverse alphabetical order. (2p)
'use strict';


let nameList = [];
let count = 0
let name

while (count < 6){
  name = prompt('Give a name of a dog: ');
  count += 1
  nameList.push(name);
nameList.sort((a,b)=>b.localeCompare(a))
}

let html = "";
for (let i = 0; i < nameList.length; i++){
  html += "<li>" + nameList[i]+ "</li>";
document.querySelector('#target').innerHTML = html;
}
