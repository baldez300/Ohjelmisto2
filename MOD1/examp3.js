
// Write a program that prompts for three integers.
// The program prints the sum, product and average of the numbers to the HTML document. (3p)
'use strict';

const num1Str = prompt('Give first number: ')
const num2Str = prompt('Give second number: ')
const num3Str = prompt('Give third number: ')

const num1 = parseInt(num1Str)
const num2 = parseInt(num2Str)
const num3 = parseInt(num3Str)

const sum = num1 + num2 + num3
const product = num1 * num2 * num3
const average = sum / 3

document.querySelector('#sum').innerHTML = 'Sum = ' + sum;
document.querySelector('#product').innerHTML = 'Product = ' + product;
document.querySelector('#average').innerHTML = 'Average = ' + average;