 $(document).ready(function() {
 	//Create a counter for each crystal
   //create counters to hold Wins, Losses, user's current and matched score
   	var blueCounter = Math.floor((Math.random() * 11) + 1);  
   	var greenCounter = Math.floor((Math.random() * 11) + 1);
   	var yellowCounter = Math.floor((Math.random() * 11) + 1);
   	var redCounter = Math.floor((Math.random() * 11) + 1);

	var winCounter = 0;
	var lossCounter = 0;
	var currentScore = 0;
	var matchScore = 0;

 	// To start game, generate a new random number between 19 and 120
 	function getScore() {
		matchScore = Math.floor((Math.random() * 120 - 1) + 19);
		console.log(matchScore);
		document.getElementById("randomNumber").innerHTML = matchScore;
	};
	getScore();

$("#blue").on('click', function() {
			currentScore = currentScore + blueCounter;
		//Replaces the HTML for the element with the currentScore Id that includes the points from clicked crytal.
			document.getElementById("currentScore").innerHTML = currentScore;
		//Calling the function that will handle the scorekeeping.
		});

$("#green").on('click', function() {
			currentScore = currentScore + greenCounter;
			document.getElementById("currentScore").innerHTML = currentScore;
		});

$("#yellow").on('click', function() {
			currentScore = currentScore + yellowCounter;
			document.getElementById("currentScore").innerHTML = currentScore;	
		});

$("#red").on('click', function() {
			currentScore = currentScore + redCounter;
			document.getElementById("currentScore").innerHTML = currentScore;
		});

function scoreKeeper(){
		if (currentScore > matchScore) {
			lossCounter++;
			$("#loss").html(lossCounter);
			playAgain();
		}
		if (currentScore == matchScore) {
			wins++;
			$("#wins").html(winCounter);
			playAgain();
		}
	};

//Reset game to set values back to 0.
	function playAgain() {
		$("#buttonReset").click(function() {
			scoreToMeet = 0;
			scoreNow = 0;
			blueNum = 0;
			greenNum = 0;
			redNum = 0;
			yellowNum = 0;
			givenScore();
			$("#buttonReset").hide();
		});
		};
		});