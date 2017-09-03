var userScore = 0;
var wins = 0;
var losses = 0;
var computerScore = Math.floor(Math.random()*102+19);

// Utilized different pools of possible numbers so they'd always be between 1-12 without repeats. 
// The instructions ask to have 1 as a possible number...but that would result in a permanent win state...
var redCrystal = Math.floor(Math.random()*3+10);
var blueCrystal = Math.floor(Math.random()*3+4);
var greenCrystal = Math.floor(Math.random()*3+7);
var yellowCrystal = Math.floor(Math.random()*3+1);

$("#cpuScore").html(computerScore);

console.log("The value of the Red Crystal is " + redCrystal);
console.log("The value of the Blue Crystal is " + blueCrystal);
console.log("The value of the Green Crystal is " + greenCrystal);
console.log("The value of the Yellow Crystal is " + yellowCrystal);

 $(".rButton").on("click", function() {
 	userScore += redCrystal;
 	$("#userScore").html(userScore);

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
	  	redCrystal = Math.floor(Math.random()*3+10);
		blueCrystal = Math.floor(Math.random()*3+4);
		greenCrystal = Math.floor(Math.random()*3+7);
		yellowCrystal = Math.floor(Math.random()*3+1);
		console.log("-----------------------------------");
		console.log("The new value of the Red Crystal is " + redCrystal);
		console.log("The new value of the Blue Crystal is " + blueCrystal);
		console.log("The new value of the Green Crystal is " + greenCrystal);
		console.log("The new value of the Yellow Crystal is " + yellowCrystal);
	  	$("#losses").html("Losses: " + losses);
	  	userScore = 0;
	  	$("#userScore").html(userScore);
  	}
 });

  $(".bButton").on("click", function() {
  	userScore += blueCrystal;
 	$("#userScore").html(userScore);

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
  	losses++;
  	alert("You lose! Try again with new crystal values and a new computer score to match!");
  	computerScore = Math.floor(Math.random()*102+19);
  	$("#cpuScore").html(computerScore);
  	redCrystal = Math.floor(Math.random()*3+10);
	blueCrystal = Math.floor(Math.random()*3+4);
	greenCrystal = Math.floor(Math.random()*3+7);
	yellowCrystal = Math.floor(Math.random()*3+1);
	console.log("-----------------------------------");
	console.log("The new value of the Red Crystal is " + redCrystal);
	console.log("The new value of the Blue Crystal is " + blueCrystal);
	console.log("The new value of the Green Crystal is " + greenCrystal);
	console.log("The new value of the Yellow Crystal is " + yellowCrystal);
  	$("#losses").html("Losses: " + losses);
  	userScore = 0;
  	$("#userScore").html(userScore);
  }
 });

  $(".gButton").on("click", function() {
  	userScore += greenCrystal;
 	$("#userScore").html(userScore);

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
	  	losses++;
	  	alert("You lose! Try again with new crystal values and a new computer score to match!");
	  	computerScore = Math.floor(Math.random()*102+19);
	  	$("#cpuScore").html(computerScore);
	  	redCrystal = Math.floor(Math.random()*3+10);
		blueCrystal = Math.floor(Math.random()*3+4);
		greenCrystal = Math.floor(Math.random()*3+7);
		yellowCrystal = Math.floor(Math.random()*3+1);
		console.log("-----------------------------------");
		console.log("The new value of the Red Crystal is " + redCrystal);
		console.log("The new value of the Blue Crystal is " + blueCrystal);
		console.log("The new value of the Green Crystal is " + greenCrystal);
		console.log("The new value of the Yellow Crystal is " + yellowCrystal);
	  	$("#losses").html("Losses: " + losses);
	  	userScore = 0;
	  	$("#userScore").html(userScore);
  }
 });

  $(".yButton").on("click", function() {
  	userScore += yellowCrystal;
 	$("#userScore").html(userScore);

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
	  	losses++;
	  	alert("You lose! Try again with new crystal values and a new computer score to match!");
	  	computerScore = Math.floor(Math.random()*102+19);
	  	$("#cpuScore").html(computerScore);
	  	redCrystal = Math.floor(Math.random()*3+10);
		blueCrystal = Math.floor(Math.random()*3+4);
		greenCrystal = Math.floor(Math.random()*3+7);
		yellowCrystal = Math.floor(Math.random()*3+1);
		console.log("-----------------------------------");
		console.log("The new value of the Red Crystal is " + redCrystal);
		console.log("The new value of the Blue Crystal is " + blueCrystal);
		console.log("The new value of the Green Crystal is " + greenCrystal);
		console.log("The new value of the Yellow Crystal is " + yellowCrystal);
	  	$("#losses").html("Losses: " + losses);
	  	userScore = 0;
	  	$("#userScore").html(userScore);
  }
 });