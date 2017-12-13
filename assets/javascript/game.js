 $(document).ready(function() {
 	//Create a counter for each crystal when clicked
   //create counters to hold Wins, Losses and user's current and matched score
   	var blueCounter = 0;   
   	var greenCounter = 0;
   	var yellowCounter = 0;
   	var redCounter = 0;

	var winCounter = 0;
	var lossCounter = 0;
	var currentScore = 0;
	var matchScore = 0;

 	// To start game, generate a new random number between 19 and 120
 	function matchScore() {
		matchScore= Math.floor((Math.random() * 120) + 19);
		document.getElementById("randomNumber").innerHTML = matchScore;
	};
});

$("#blue").on('click', function() {
		if (blueCounter) {
			currentScore = currentScore + blueCounter;
		//Replaces the HTML for the element with the currentScore Id that includes the points from clicked crytal.
			document.getElementById("currentScore").innerHTML = currentScore;
		//Calling the function that will handle the scorekeeping.
				scoreKeeper();
		} else {
			blueCounter = Math.floor((Math.random() * 11) + 1);
		}
	});
$("#green").on('click', function() {
		if (greenCounter) {
			currentScore = currentScore + greenCounter;
			document.getElementById("currentScore").innerHTML = currentScore;
			scoreKeeper();
		} else {
			greenCounter = Math.floor((Math.random() * 11) + 1);
		}	
	});
$("#yellow").on('click', function(){
		if (yellowCounter){
			currentScore = currentScore + yellowCounter;
			document.getElementById("currentScore").innerHTML = currentScore;
			scoreKeeper();
		} else {
			yellowCounter = Math.floor((Math.random() * 11) + 1);
		}
	});
$("#red").on('click', function(){
		if (redCounter){
			currentScore = currentScore + redNCounter;
			document.getElementById("currentScore").innerHTML = currentScore;
			scoreKeeper();
		} else {
			redCounter = Math.floor((Math.random() * 11) + 1);
		}
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