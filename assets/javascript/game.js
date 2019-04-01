$(document).ready(function() {
var goal; 
var score;
var strawberries;
var blueberries;
var bananas;
var raspberries;
var wins = 0;
var losses = 0;

//generates the random number that the user tries to match
var newGame = function () {
    goal = Math.floor(Math.random() * 102 + 19);
    console.log (goal);

$("#randomNumber").text(goal);
}








});