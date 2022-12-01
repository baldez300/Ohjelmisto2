
// Module 4. AJAX
// Make an app that retrieves information about a TV series you enter and displays it on a web page.
//
// API to use: TVMaze API
// Requirements:
// Step 1: Print the search result to the console (3p)
// Step 2: Print one set of search results on a web page (4p)
// required information: Name, link to details (url), medium image and summary
// add the link to <a> element. Also add target="_blank" to the link.
// Step 3: Print the same information for all series from the search result on the web page as above (9p)
// in addition, the genres to which the series belongs are printed
// use | character (or similar, but no comma) to separate the genres
// if TV series has no image, use default image
// example default image: https://via.placeholder.com/100x200?text=text+here
// you can comment out steps 1 and 2 at this point
// Step 4: Stylish layout with CSS and valid HTML (4p)
// you'll probably need at least 5-10 CSS rules to make a proper layout
// Step 5: show the link to details (url) in an iframe element which is inside a modal (<dialog>)
// First, make a valid HTML page with a search form. Example form:
// <form action="https://api.tvmaze.com/search/shows">
//     <input id="query" name="q" type="text">
//     <input type="submit" value="Search">
// </form>
// Test the form. The result should be a page full of JSON formatted data.
// Add JavaScript file.
// Add a submit event to the form to launch the search.
// To search, you need to get the value of the 'q' field, which is then sent to the API using fetch.
// There are likely to be multiple TV series in the search result, so make a for loop for printing the HTML needed to display the data
// Data in some series may be missing, for example, the image object. In that case, the value of that property is null. This might cause an error and the script will stop running. Try to make the script tolerant of the above errors. For example, you can use the if statement to check if the value of a variable is null, or you can use the conditional operator
// You can try this with the keyword 'dome', for example. It returns 10 TV series from the API, but a show called 'Battle Dome' is missing image.
// Grading:
// HTML not valid: 1p deduction for each error (warnings are not errors)
// Default font: 1p deduction
// Bad contrast (poor choise of colors): 1 - 2p deduction
// No padding, margin, hard to read: 1p deduction for each
// No error handling (all results are not displayed): 4p deduction
// Missing information: 1p deduction for each
// No default image: 2p deduction
// Links not working: 1p deduction
// Search results are not cleared when a new search is made: 1p deduction
// Comma , between genres: 1p deduction
// Search form is not styled: 1-2p deduction
// url does not open in a modal: 2p deduction

'use strict';

const searchFormElem = document.querySelector('form');
const showsContainerElem = document.querySelector('#shows');
const dialogElem = document.querySelector('dialog');
const closeModelElem = document.querySelector('#closeModel');
const modelTitleElem = document.querySelector('#modelTitle');

closeModelElem.addEventListener('click', () => dialogElem.close());

searchFormElem.addEventListener('submit', async function(submitEvent) {
  submitEvent.preventDefault();
  const formData = new FormData(this);
  const search = new URLSearchParams(formData).toString();
  const fetchData = await fetch(this.action + search);
  const jsonData = await fetchData.json();

  if (jsonData.length) showsContainerElem.innerHTML = '';
  else showsContainerElem.innerHTML = '<p>No results</p>';
  jsonData.forEach(result => {
    const {show} = result;

    const showContainerElement = document.createElement('div');
    showContainerElement.classList.add('show');
    const nameElem = document.createElement('h3');
    nameElem.textContent = show.name;

    const moreDetailElem = document.createElement('a');
    moreDetailElem.href = show.url;
    moreDetailElem.target = 'details';
    moreDetailElem.textContent = 'More details';

    moreDetailElem.addEventListener('click', () => {
      dialogElem.showModal();
      modelTitleElem.textContent = show.name;
    });

    const img = document.createElement('img');
    img.src = show.image?.medium ?? 'https://via.placeholder.com/210x295?text=Cover%20image';

    const genreContainer = document.createElement('div');
    genreContainer.classList.add('genres');
    show.genres.forEach(genre => {
      const genElem = document.createElement('p');
      genElem.textContent = genre;
      genElem.classList.add('genre');
      genreContainer.appendChild(genElem);
    });

    const summaryElem = document.createElement('div');
    summaryElem.classList.add('summary');
    summaryElem.innerHTML = show.summary ?? '<p>No summary available</p>';

    showContainerElement.append(nameElem, img, summaryElem, moreDetailElem);
    if (show.genres?.length) img.after(genreContainer);
    showsContainerElem.append(showContainerElement);
  });
});