var wins = document.getElementsByClassName("winsScore");
var loses = document.getElementsByClassName("losesScore");
var ties = document.getElementsByClassName("tiesScore");

var winsScore = wins[0].innerText;
var losesScore = loses[0].innerText;
var tiesScore = ties[0].innerText;

var userChoice = [];
var compChoices = ["r", "p", "s"]

console.log(wins);
console.log(winsScore);
console.log(loses);
console.log(losesScore);
console.log(ties);
console.log(tiesScore);

function addWins(currScore){
  currScore++;
  wins.addHTML(currScore);
  return currScore;
}

function testScore(){
  //what is the users input
  //what to do with that input
  //what needs to be updated?
}

// Records users choice for Rock button
function rock(rock) {
  userChoice = [];
  userChoice.push(rock);
  console.log(userChoice)
  return userChoice;
}

// Records users choice for Paper button
function paper(paper) {
  userChoice = [];
  userChoice.push(paper);
  console.log(userChoice);
  return userChoice;
}

// Records users choice for Scissors button
function scissors(scissors) {
  userChoice = [];
  userChoice.push(scissors);
  // console.log(userChoice);
  return userChoice;
}

function c(){

}


console.log(userChoice);
