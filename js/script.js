var wins = document.getElementsByClassName("winsScore");
var loses = document.getElementsByClassName("losesScore");
var ties = document.getElementsByClassName("tiesScore");

var winsScore = wins[0].innerText;
var losesScore = loses[0].innerText;
var tiesScore = ties[0].innerText;

var yWin = winsScore;
var yLose = losesScore;
var yTies = tiesScore;

var userChoice = "";
var compChoices = ["r", "p", "s"];

// Records users choice for Rock button
function rock() {
  userChoice = "r";
  var comp = Math.floor(Math.random() * compChoices.length);
  var cChoice = compChoices[comp];
  if (cChoice === "s") {
    win();
  } else if (cChoice === "p") { 
    lose();
  } else {
    tie();
  };
}

// Records users choice for Paper button
function paper() {
  userChoice = "p";
  var comp = Math.floor(Math.random() * compChoices.length);
  var cChoice = compChoices[comp];
  if (cChoice === "r") {
    win();
  } else if (cChoice === "s") {   
    lose();
  } else {
    tie();
  };
}

// Records users choice for Scissors button
function scissors() {
  userChoice = "s";
  var comp = Math.floor(Math.random() * compChoices.length);
  var cChoice = compChoices[comp];
  if (cChoice === "p") {
    win();
  } else if (cChoice === "r") { 
    lose();
  } else {
    tie();
  };
}

// Tallies the number of wins and updates the HTML
function win() {
  yWin = Number(yWin) + 1;
  wins[0].innerText = yWin;
}

// Tallies the number of loses and updates the HTML
function lose() {
  yLose = Number(yLose) + 1;
  loses[0].innerText = yLose;
}

// Tallies the number of ties and updates the HTML
function tie() {
  yTies = Number(yTies) + 1;
  ties[0].innerText = yTies;
}