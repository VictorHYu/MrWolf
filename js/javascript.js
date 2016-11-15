window.onload = onLoad;

function showTime() {
	$("#timeText").fadeTo(3000,1);
}

function onLoad () {
	setTimeout(fadeIn , 1000);
	document.getElementById('timeText').innerHTML = Date();
	var wolf = new Audio("./audio/wolf.mp3");
	wolf.play();
}

function fadeIn () {
	$("#backgroundImage").fadeTo(5000,1);
	setTimeout(fadeIn2 , 3000);
}

function fadeIn2 () {
	$("#mainButton").fadeTo(3000,1);
}

$(document).ready(function(){
	$("button").click(
		fadeToBlack
	);
});

function fadeToBlack () {
	$("#mainButton").fadeTo(3000,0);
	$("#backgroundImage").fadeTo(3000,0);
	setTimeout(showTime, 5000);
	setTimeout(spook, 3000);
}

function spook () {
	document.getElementById('backgroundImage').src = "./img/wolfSbg.jpg";
	$("#backgroundImage").fadeTo(5000,1);
	$("#wolfS").fadeTo(5000,1);
	setTimeout(step, 5000);
}

function step () {
	var d = new Date();
    var n = d.getHours();
    n = n % 12;
    if (n == 0)
    	n = 12; 
    for (var i = 0; i < n; i++) {
    	setTimeout(playStep,1000*i);
    	setTimeout(moveDown,0 + 1000 * i);
    	setTimeout(moveUp, 300 + 1000* i);
    }
}

function moveDown() {
  var elem = document.getElementById('wolfS');
  elem.style.transform="translateY(10px)";
}

function moveUp() {
  var elem = document.getElementById('wolfS');
  elem.style.transform="translateY(0px)";
}

function playStep (){
	var step = new Audio("./audio/step.wav");
	step.play();
}