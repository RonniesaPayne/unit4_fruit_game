$(document).ready(function() {
var goal; 
var score = 0;
var strawberries;
var blueberries;
var bananas;
var raspberries;
var wins = 0;
var losses = 0;
//var currentScore;

//generates the random number that the user tries to match
var newGame = function () {
    goal = Math.floor(Math.random() * 102)+ 19;
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

//assigns random numbers to the fruit buttons - 
//not sure why, but the scores keep going, it registers the win, but the game does 
//reset itself...score is tied to all 4 images individually... so 4 separate times
strawberries = Math.floor(Math.random () * 12) + 1;
    console.log (strawberries);
    
$("#red").on("click", function(){
    score += strawberries;
    console.log(score);
    //currentScore;
    $("#yourScore").text("Your Score:  " + score);
});

blueberries = Math.floor(Math.random () * 12) + 1;
console.log (blueberries);
$("#blue").on("click", function(){
    score += blueberries;
    console.log(score);
   //currentScore;
    $("#yourScore").text("Your Score:  " + score);
});

raspberries = Math.floor(Math.random() * 12) +1;
console.log (raspberries);
$("#magenta").on("click", function(){
    score += raspberries;
    console.log(score)
    //currentScore;
    $("#yourScore").text("Your Score:  " + score);
});

bananas = Math.floor(Math.random () * 12) + 1;
console.log (bananas);
$("#yellow").on("click", function(){
    score += bananas;
    console.log(score)
    //currentScore;
    $("#yourScore").text("Your Score:  " + score);


if (score === goal) {
        console.log ("You Made a Milkshake!")
        wins++
        console.log(wins)
        newGame();
    } else if (score > goal){
        console.log ("You Spilled the Milk!  No milkshake for you!!")
        losses++
        console.log(losses)
        newGame();
    }
    $("#wins").text("Wins: " + wins);
    $("#losses").text("Losses: " + losses);

});



newGame ()


});





