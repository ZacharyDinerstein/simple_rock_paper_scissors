//===== Variables =====//
var gameMessage = $(".game-message");
var compThrow = "";
var userThrow = "";
var result = "";
var resultImgSrc = "";


//===== Event Listeners =====//
$('.ready').click(function(){
	var self = $(this);
	hideClickedElement(self);
	countDown();
});

$('.game-board button').click(function(){
	userThrow = this.id;
	hideGameBoard();
	computerThrow();
	showAfterMath();
});

$(".reset").click(function(){
	resetGame();
})



//===== Functions =====//
function hideClickedElement(elem){
	elem.addClass("hide");
}

function hideGameBoard(){
	$('.game-board').addClass('hide');
}

function countDown(){
	gameMessage.html("<h2>one...</h2>");
	setTimeout(function(){gameMessage.html("<h2>two...</h2>")}, 400);
	setTimeout(function(){gameMessage.html("<h2>three...</h2>")}, 800);
	setTimeout(function(){gameMessage.html("<h2>SHOOT!</h2>")}, 1200);
	setTimeout(function(){showGameBoard()}, 1200);	
}

function showGameBoard(){
	$(".game-board").addClass("show");
}

function computerThrow(){
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
	setResultText();
	setResultImage();
	setGameMessage();
	$(".after-math").addClass("show");
}

function setResultText(){
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

function setGameMessage(){
	gameMessage.html("<h2>You threw " + userThrow + "</h2><h2>Computer threw " + compThrow + "</h2><h1>" + result + "</h1>");
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

function resetGame(){

}