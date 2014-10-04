//===== Variables =====//
var gameMessage = $(".game-message");
var compThrow = "";
var userThrow = "";
var result = "";
var resultImgSrc = "";


//===== Event Listeners =====//
$('.ready').click(function(){
	var self = this;
	hideElement(self);
	countDown();
});

$('.throw-button').click(function(){
	userThrow = this.id;
	hideElement(".game-board");
	setComputerThrow();
	showAfterMath();
});

$(".reset").click(function(){
	resetGame();
})



//===== Functions =====//
function hideElement(elem){
	$(elem).addClass("hide")
		.removeClass("show");
}

function countDown(){
	gameMessage.html("<h2>one...</h2>");
	setTimeout(function(){gameMessage.html("<h2>two...</h2>")}, 400);
	setTimeout(function(){gameMessage.html("<h2>three...</h2>")}, 800);
	setTimeout(function(){gameMessage.html("<h2>SHOOT!</h2>")}, 1200);
	setTimeout(function(){showElement(".game-board")}, 1200);	
}

function showElement(elem){
	$(elem).addClass("show")
		.removeClass("hide");
}

function emptyElementContents(elem){
	$(elem).html("");
}

function setComputerThrow(){
	var randNum = Math.round(Math.random() * 3);

	if (randNum == 0){
		compThrow = "rock";
	} else if (randNum == 1){
		compThrow = "paper";
	} else {
		compThrow = "scissors";
	}
}

function showAfterMath(){
	setResultValue();
	setResultImage();
	setGameMessage();
	showElement(".after-math");
	fadeInElement(".reset", 900, 500);
}

function setResultValue(){
	if (userThrow == compThrow){
		result = "Tie!";
	} else if (userThrow == "rock"){
		if (compThrow == "scissors"){
			result = "You Win!";
		} else {
			result = "You Lose.";
		} 
	} else if (userThrow == "paper") {
		if (compThrow == "rock"){
			result = "You Win!";
		} else {
			result = "You Lose."
		}
	} else if (userThrow == "scissors") {
		if (compThrow == "paper"){
			result = "You Win!";
		} else {
			result = "You Lose."
		}
	}	 
}

function setResultImage(){
	if (result == "You Lose."){
		resultImgSrc = "http://cdn.fansided.com/wp-content/blogs.dir/276/files/2014/02/RonBurgandy.gif";
	} else if (result == "You Win!") {
		resultImgSrc = "http://gifatron.com/wp-content/uploads/2012/12/O04CH.gif";
	} else {
		resultImgSrc = "http://img.pandawhale.com/81101-alright-well-call-it-a-draw-gi-JonN.gif";
	}

	$(".after-math img").attr("src", resultImgSrc);
}

function setGameMessage(){
	gameMessage.html("<h2>You threw " + userThrow + "</h2><h2>Computer threw " + compThrow + "</h2><h1>" + result + "</h1>");
}

function fadeInElement(elem, timeToWait, duration){	
	$(elem).delay(timeToWait).fadeIn(duration);
}

function fadeOutElement(elem, duration){	
	$(elem).fadeOut(duration);
}

function resetGame(){
	hideElement(".after-math");
	fadeOutElement(".reset", 100);
	emptyElementContents(".game-message");
	countDown();
}