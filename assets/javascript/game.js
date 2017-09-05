var userScore = 0;
var wins = 0;
var losses = 0;
var computerScore = Math.floor(Math.random()*102+19);

// I would have recommended that the floor be 2 since a crystal value of 1 can result in a permanent win state, but...

var redCrystal = Math.floor(Math.random()*11+1);
var blueCrystal = Math.floor(Math.random()*11+1);
var greenCrystal = Math.floor(Math.random()*11+1);
var yellowCrystal = Math.floor(Math.random()*11+1);

$("#cpuScore").html(computerScore);

// For debugging and grading purposes. Should be easy to test the win and loss states this way.

console.log("The value of the Red Crystal is " + redCrystal);
console.log("The value of the Blue Crystal is " + blueCrystal);
console.log("The value of the Green Crystal is " + greenCrystal);
console.log("The value of the Yellow Crystal is " + yellowCrystal);

// The main function of the game...

function crystalGame() {

	if ((computerScore === userScore)) {
 		++wins;
	  	alert("You win! How many wins can you get with this crystal set?");
	  	computerScore = Math.floor(Math.random()*102+19);
	  	$("#wins").html("Wins: " + wins);
	  	userScore = 0;
	  	$("#cpuScore").html(computerScore);
	  	$("#userScore").html(userScore);
  	}

	if ((userScore >= computerScore)) {
	  	++losses;
	  	alert("You lose! Try again with new crystal values and a new computer score to match!");
	  	computerScore = Math.floor(Math.random()*102+19);
	  	$("#cpuScore").html(computerScore);
	  	redCrystal = Math.floor(Math.random()*11+1);
		blueCrystal = Math.floor(Math.random()*11+1);
		greenCrystal = Math.floor(Math.random()*11+1);
		yellowCrystal = Math.floor(Math.random()*11+1);
		console.log("-----------------------------------");
		console.log("The new value of the Red Crystal is " + redCrystal);
		console.log("The new value of the Blue Crystal is " + blueCrystal);
		console.log("The new value of the Green Crystal is " + greenCrystal);
		console.log("The new value of the Yellow Crystal is " + yellowCrystal);
	  	$("#losses").html("Losses: " + losses);
	  	userScore = 0;
	  	$("#userScore").html(userScore);
	  	crystalCheck();
	  	crystalCheck();
  	}
}

// To prevent matching crystal values, this function reduces the chance of unavoidable 
// loss states while keeping the game interesting.

function crystalCheck () {

	if ((redCrystal === blueCrystal)) {
	redCrystal = Math.floor(Math.random()*11+1);
	console.log("-----------------------------------");
	console.log("Crystal value match found - assigning new values...");
	console.log("The new value of the Red Crystal is " + redCrystal);
	}

	if ((redCrystal === greenCrystal)) {
	redCrystal = Math.floor(Math.random()*11+1);
	console.log("-----------------------------------");
	console.log("Crystal value match found - assigning new values...");
	console.log("The new value of the Red Crystal is " + redCrystal);
	}

	if ((redCrystal === yellowCrystal)) {
	redCrystal = Math.floor(Math.random()*11+1);
	console.log("-----------------------------------");
	console.log("Crystal value match found - assigning new values...");
	console.log("The new value of the Red Crystal is " + redCrystal);
	}

	if ((blueCrystal === greenCrystal)) {
	blueCrystal = Math.floor(Math.random()*11+1);
	console.log("-----------------------------------");
	console.log("Crystal value match found - assigning new values...");
	console.log("The new value of the Blue Crystal is " + blueCrystal);
	}

	if ((blueCrystal === yellowCrystal)) {
	blueCrystal = Math.floor(Math.random()*11+1);
	console.log("-----------------------------------");
	console.log("Crystal value match found - assigning new values...");
	console.log("The new value of the Blue Crystal is " + blueCrystal);
	}

	if ((greenCrystal === yellowCrystal)) {
	greenCrystal = Math.floor(Math.random()*11+1);
	console.log("-----------------------------------");
	console.log("Crystal value match found - assigning new values...");
	console.log("The new value of the Green Crystal is " + greenCrystal);
	}
}

// Three checks for equal values to significantly reduce the likelihood of repeats...

crystalCheck();
crystalCheck();
crystalCheck();

// The on click functions...

 $(".rButton").on("click", function() {
 	userScore += redCrystal;
 	$("#userScore").html(userScore);
 	crystalGame()
 });

  $(".bButton").on("click", function() {
  	userScore += blueCrystal;
 	$("#userScore").html(userScore);
 	crystalGame()
 });

  $(".gButton").on("click", function() {
  	userScore += greenCrystal;
 	$("#userScore").html(userScore);
 	crystalGame()
 });

  $(".yButton").on("click", function() {
  	userScore += yellowCrystal;
 	$("#userScore").html(userScore);
 	crystalGame()
 });