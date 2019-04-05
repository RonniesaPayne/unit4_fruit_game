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
strawBerryImage.attr({"src":"assets/images/strawberries.jpeg", "id":"red"});
$("#images").append(strawBerryImage);

var blueBerryImage = $("<img>");
blueBerryImage.addClass("images");
blueBerryImage.attr({"src":"assets/images/blueberries.jpeg", "id":"blue"});
$("#images").append(blueBerryImage);

var raspBerryImage = $("<img>");
raspBerryImage.addClass("images");
raspBerryImage.attr({"src":"assets/images/raspberries.jpeg", "id":"magenta"});
$("#images").append(raspBerryImage);

var bananaImage = $("<img>");
bananaImage.addClass("images");
bananaImage.attr({"src":"assets/images/bananas.jpeg","id":"yellow"});
$("#images").append(bananaImage);

//assigns random numbers to the fruit buttons
strawberries = Math.floor(Math.random () * 12) + 1;
//console.log (strawberries);
$("#red").on("click", function(){
    score += strawberries;
    console.log(score)
})

blueberries = Math.floor(Math.random () * 12) + 1;
//console.log (blueberries);
$("#blue").on("click", function(){
    score += blueberries;
    console.log(score)
})

raspberries = Math.floor(Math.random() * 12) +1;
//console.log (raspberries);
$("#magenta").on("click", function(){
    score += raspberries;
    console.log(score)
})

bananas = Math.floor(Math.random () * 12) + 1;
//console.log (bananas);
$("#yellow").on("click", function(){
    score += bananas;
    console.log(score)
})




newGame ();


})