//player guess converted to number
var stringGuess = prompt("What number am I thinking of?");
var guess = Number(stringGuess);
//secret number
var secretNumber = 7;

//check guess
if(guess === secretNumber){
  alert("Well Done! You guessed it!");
}
else if(guess > secretNumber){
  alert("Too high. Try again.");
}
else{
  alert("Too Low. Try again.");
}
  
