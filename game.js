// 3
var buttonColours = ["red", "blue", "green", "yellow"];
// 5
var gamePattern = []; 
var randomChosenColour = buttonColours.randomNumber;
//1
function nextSequence(){
    // 2
    var randomNumber = Math.floor(Math.random() * 4);
    // 4
    var randomChosenColour = buttonColours[randomNumber];
    // 6
    gamePattern.Push(randomChosenColour);
}