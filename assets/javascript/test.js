$(document).ready(function(){

$("#buttonReset").hide();

//Global Variables, to be referred to throughout any function.
var blueNum = 0;
var greenNum = 0;
var redNum = 0;
var yellowNum = 0;
var scoreNow = 0;
var matchScore = 0;
var wins = 0;	
var losses = 0;

		//If the given gem does not already have a number attributed to it, then it will generate a random number for that gem.  Otherwise, it will use the number given to the gem, and add it to the current score. 
		$("#blueGem").on('click', function(){
			if (blueNum){
				scoreNow = scoreNow + blueNum;
				//Replaces the HTML for the element with the scoreNow Id, with the current score, that includes the points from the clicked gem.
				document.getElementById("scoreNow").innerHTML = scoreNow;
				//Calling the function that will handle the scorekeeping.
				scoreKeeper();
			}else{
				blueNum = Math.floor((Math.random() * 11) + 1);
			}
		});

		$("#greenGem").on('click', function(){
			if (greenNum){
				scoreNow = scoreNow + greenNum;
				document.getElementById("scoreNow").innerHTML = scoreNow;
				scoreKeeper();
			}else{
				greenNum = Math.floor((Math.random() * 11) + 1);
			}
		});

		$("#redGem").on('click', function(){
			if (redNum){
				scoreNow = scoreNow + redNum;
				document.getElementById("scoreNow").innerHTML = scoreNow;
				scoreKeeper();
			}else{
				redNum = Math.floor((Math.random() * 11) + 1);
			}
		});

		$("#yellowGem").on('click', function(){
			if (yellowNum){
				scoreNow = scoreNow + yellowNum;
				document.getElementById("scoreNow").innerHTML = scoreNow;
				scoreKeeper();
			}else{
				yellowNum = Math.floor((Math.random() * 11) + 1);
			}
		});

	//This function will run when it is time to reset the game, which will set all of the following values back to 0.
	function playAgain(){
		//When the button is clicked, the following will occur. It will set the following values to 0, call the given score function, and hide the div with the gems, for a cleaner look.
		$("#buttonReset").click(function(){
			scoreToMeet = 0;
			scoreNow = 0;
			blueNum = 0;
			greenNum = 0;
			redNum = 0;
			yellowNum = 0;
			givenScore();
			$("#buttonReset").hide();
			$("#gemRow").show();
		});
	};

	//This function will check whether the current score equals the given score to match.  If it does, then the user wins will add by one.  If it does not, then the user losses will add by one.  It will then be posted to the HTML page, through the element with that given Id.  It will also hide and show certain content, for a cleaner look.
	function scoreKeeper(){
		if (scoreNow > matchScore){
			losses++;
			$("#losses").html('Losses: ' + losses);
			$("#buttonReset").show();
			$("#gemRow").hide();
			playAgain();
		}

		if (scoreNow == matchScore){
			wins++;
			$("#wins").html('Wins: ' + wins);
			$("#buttonReset").show();
			$("#gemRow").hide();
			playAgain();
		};
	};

	//This function will provide the score to match, through generating a random number.  It will then populate the HTML with this number.
	function givenScore(){
		matchScore= Math.floor((Math.random() * 101) + 19);
		document.getElementById("scoreToMeet").innerHTML = matchScore;
	};

//This will call the givenScore function.
givenScore();

});
