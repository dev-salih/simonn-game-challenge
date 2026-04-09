
var buttonColours = ["red", "blue", "green", "yellow"];// 3

var gamePattern = []; // 5
var userClickedPattern = [];

var started = false;
var level = 0;
$(document).keypress(function (){
  if (!started) {
    $("#level-title").text("level " + level);
    nextSequence();
    started = true;
  }
});


$(".btn").click(function(){

  var userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);

  playSound(userChosenColour);
  animatePress(userChosenColour);
});


function nextSequence(){   //1
  level++;
  $("#level-title").text("level " + level);

  var randomNumber = Math.floor(Math.random() * 4); // 2
  var randomChosenColour=buttonColours[randomNumber];// 4
  gamePattern.push(randomChosenColour);  // 6

  $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
  playSound(randomChosenColour);
};

function playSound(name){
  var audio = new Audio("sounds/" + name + ".mp3")
  audio.play();
}

function animatePress(currentColour){
  $("#" + currentColour).addClass("pressed");
  setTimeout(function() {
  $("#" + currentColour).removeClass("pressed");
  }, 100);    
};



