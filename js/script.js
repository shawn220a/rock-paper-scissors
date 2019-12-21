var wins = document.getElementsByClassName("winsScore");
var loses = document.getElementsByClassName("losesScore");
var ties = document.getElementsByClassName("tiesScore");

var winsScore = wins[0].innerText;
var losesScore = loses[0].innerText;
var tiesScore = ties[0].innerText;

var compChoices = ["r", "p", "s"]

console.log(wins);
console.log(winsScore);

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

function rock(rock) {
  console.log(rock);
  // return r;
}

function paper(paper) {
  console.log(paper);
  // return p;
}

function scissors(scissors) {
  console.log(scissors);
  // return s;
}

console.log(compChoices)