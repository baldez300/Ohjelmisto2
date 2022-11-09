
// Write a program that prompts for three integers.
// The program prints the sum, product and average of the numbers to the HTML document. (3p)
'use strict';

const year = parseInt(prompt('Give a year: '));
if(year % 4 === 0 && year % 100 !== 0 || year % 400 === 0){
    document.querySelector('#leap').innerHTML = "The given year is a leap year.";
} else {
    document.querySelector('#leap').innerHTML = "The given year is not a leap year! " + "Try again..!";
}
