
// Write a program that prompts the user for the start and end year.
// The program prints all leap years from the interval given by the user.
// Printing is done in an unordered list to the HTML document. (3p)
'use strict';

let startYear = parseInt(prompt('Give a start year like (1999): '));
let endYear = parseInt(prompt('Give an end year like (2022): '));

function leapYearRange(startYear, endYear){
  let yearRange = [];
  for (let i = startYear; i <= endYear; i++){
    yearRange.push(i)
  }
  let leapYears = [];

  yearRange.forEach(
      function(year) {
        if (testLeapYear(year)){
          leapYears.push(year)
        }
      }
  );
  document.querySelector('#target').innerHTML = "Those years are leap years: " +"<li>"+leapYears.join("<li></li>")+"</li>";
  return leapYears
}

function testLeapYear(yearChecked){
  if(yearChecked % 4 === 0 && yearChecked % 100 !== 0 || yearChecked % 400 === 0){
      return yearChecked
  } else {
      return false
  }

}

leapYearRange(startYear, endYear)