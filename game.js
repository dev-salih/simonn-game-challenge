// 3
var buttonColours = ["red", "blue", "green", "yellow"];
// 5
var gamePattern = []; 

var userClickedPattern = [];
$(".btn").click(function(){
    var userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);
    console.log(userClickedPattern);
})

//1
function nextSequence(){
    // 2
    var randomNumber = Math.floor(Math.random() * 4);
    // 4
    var randomChosenColour = buttonColours[randomNumber];
    // 6
    gamePattern.Push(randomChosenColour);

    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);

    var audio = new Audio("sounds/" + randomChosenColour + ".mp3")
    audio.play();
};


