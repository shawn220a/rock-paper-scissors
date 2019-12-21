var wins = document.getElementsByClassName("winsScore");
var loses = document.getElementsByClassName("losesScore");
var ties = document.getElementsByClassName("tiesScore");

var winsScore = wins[0].innerText;
var losesScore = loses[0].innerText;
var tiesScore = ties[0].innerText;

var r;
var p;

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

function rock(r) {
  var r = document.getElementById("rockClick").value = "rock";
  console.log(r);
  return r;
}

function paper(p) {
  var p = document.getElementById("paperClick").value = "paper";
  console.log(p);
  return p;
}

function scissors(s) {
  var s = document.getElementById("scissorsClick").value = "scissors";
  console.log(s);
  return s;
}

