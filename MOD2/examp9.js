
// Write a function called even(), which receives an array containing numbers as a parameter.
// The function returns a second (usually smaller) array which has the even numbers of the original array.
// The function must not make changes to the original table. (3p)
'use strict';

let arrayList = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let arrayEven = [];

function even(myList){
  arrayList.forEach(number => {
    if (number % 2 === 0){
      arrayEven.push(number)
    }
  });
  console.log(myList)
  console.log(arrayEven)
}

even(arrayList);