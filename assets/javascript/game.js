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
	var matchNum = 0;

 	// To start game, generate a new random number between 19 and 120
 	function getNumber() {
		matchNum = Math.floor((Math.random() * 120) + 19);
		console.log(matchNum);
		document.getElementById("randomNumber").innerHTML = matchNum;
	};
	getNumber();

	$("#blue").on('click', function() {
			currentScore = currentScore + blueCounter;
			document.getElementById("currentScore").innerHTML = currentScore;
			scoreKeeper();
		});

	$("#green").on('click', function() {
			currentScore = currentScore + greenCounter;
			document.getElementById("currentScore").innerHTML = currentScore;
			scoreKeeper();
		});

	$("#yellow").on('click', function() {
			currentScore = currentScore + yellowCounter;
			document.getElementById("currentScore").innerHTML = currentScore;
			scoreKeeper();	
		});

	$("#red").on('click', function() {
			currentScore = currentScore + redCounter;
			document.getElementById("currentScore").innerHTML = currentScore;
			scoreKeeper();
		});
	//Create if else statemnets: if current score > matchNum, game over, if matches you win.

function scoreKeeper(){
		if (currentScore > matchNum) {
			lossCounter++;
			$("#loss").html(lossCounter);
			playAgain();
		}
		if (currentScore === matchNum) {
			winCounter++;
			$("#win").html(winCounter);
			playAgain();
		}
	};

//Reset game to set values back to 0.
	function playAgain() {
		blueCounter = Math.floor((Math.random() * 11) + 1);  
   		greenCounter = Math.floor((Math.random() * 11) + 1);
   		yellowCounter = Math.floor((Math.random() * 11) + 1);
   		redCounter = Math.floor((Math.random() * 11) + 1);
		
		matchNum = 0;
		currentScore = 0;
		document.getElementById("currentScore").innerHTML = currentScore;
		getNumber();

		};
		});