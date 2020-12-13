console.log('Playing with time');

let today = new Date();
let day = today.toString();
// let date = day.substring(0, 25);

IndexId = document.getElementById('time'); //section element

textNode = document.createTextNode(day); //  creating text and data to add 

newElem = document.createElement('h4'); //create element "h4"

newElem.appendChild(textNode); // h4 element  me date wala data 


IndexId.appendChild(newElem); // h4 element ko indexID me dala