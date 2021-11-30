/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/

const quotes =   [
     {
       quote: "We allow our ignorance to prevail upon us and make us think we can survive alone, alone in patches, alone in groups, alone in races, even alone in genders.  ",
       source: "Maya Angelou ",
       year:     "1928"
     },
     {
      quote: "When you don't know what to do, get still. Get very still until you do know what to do.",
      source: "Oprah Winfrey",
      citation: "Stanford Commencement Adress,",
      year:     "2008"
    },
    {
      quote: "The significance of man is that he is insignificant and is aware of it.",
      source: "Carl Becker",

    },
    {
      quote: "Time is a cruel thief to rob us of our former selves. We lose as much to life as we do to death..",
      source: "Elizabeth Forsythe Hailey",
      citation: "A Woman of Independent Means",
    },
    {
      quote: "No good deed goes unpunished.",
      source: "Clare Booth Luce",
      year:     "1903"
    },
    

]

/***
 * `getRandomQuote` function
***/

function getRandomQuote () {

var pos = Math.floor((Math.random() * 4) + 0);

return quotes [pos];
}

/***
 * `printQuote` function
 * 
 * 
***/

function printQuote () {

  var o  = getRandomQuote ();
  

  var s = `<p class="quote">${o.quote}</p>
           <p class="source">${o.source}`;

  if(o.citation){
    s = s +  `<span class="citation">${o.citation}</span>`
  }
  if(o.year){
    s = s +  `<span class="year">${o.year}</span>`
  }

  s = s + `</p>`


document.getElementById('quote-box').innerHTML = s ;
}



/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);