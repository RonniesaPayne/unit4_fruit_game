$(document).ready(function() {
var goal; 
var score = 0;
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

//displays random number
$("#randomNumber").text("Number to Match:  " + goal);
}

//fruit images/buttons
var strawBerryImage = $("<img>");
strawBerryImage.addClass("images");
strawBerryImage.attr("src", "assets/images/strawberries.jpeg");
$("#images").append(strawBerryImage);

var blueBerryImage = $("<img>");
blueBerryImage.addClass("images");
blueBerryImage.attr("src", "assets/images/blueberries.jpeg");
$("#images").append(blueBerryImage);

var raspBerryImage = $("<img>");
raspBerryImage.addClass("images");
raspBerryImage.attr("src", "assets/images/raspberries.jpeg");
$("#images").append(raspBerryImage);

var bananaImage = $("<img>");
bananaImage.addClass("images");
bananaImage.attr("src", "assets/images/bananas.jpeg");
$("#images").append(bananaImage);





newGame ();


});