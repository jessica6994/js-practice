var p1Button = document.querySelector("#p1");
var p2Button = document.querySelector("#p2");
var resetButton = document.querySelector("#reset");
var p1Display = document.querySelector("#p1Display");
var p2Display = document.querySelector("#p2Display");
var numInput = document.querySelector("input"); //could also use querySelector("input[type='number']")in case there are any other inputs
var p = document.querySelector("#playingTo");
var p1Score = 0;
var p2Score = 0;
var gameOver = false;
var winningScore = 5;

p1Button.addEventListener("click",function(){
  if(!gameOver){ //if game is not over then add scores and update score display
    p1Score++;
    if (p1Score === winningScore){
      p1Display.classList.add("winner"); //see class in css
      gameOver = true; //if game is over then the code will not run so nothing will happen when buttons are clicked
    }
    p1Display.textContent = p1Score;
  }
});

p2Button.addEventListener("click",function(){
  if(!gameOver){
    p2Score++;
    if (p2Score === winningScore){
      p2Display.classList.add("winner");
      gameOver = true;
    }
    p2Display.textContent = p2Score;
  }
});

function reset () {
  p1Score = 0;
  p2Score = 0;
  p1Display.textContent = p1Score;
  p2Display.textContent = p2Score;
  p1Display.classList.remove("winner");
  p2Display.classList.remove("winner");
  gameOver = false;
} //separate function defined and used in resetButton and numInput rather than duplicate

resetButton.addEventListener("click", reset);

numInput.addEventListener("change", function(){ //change event will run any time the value changes, regardless of how ...click,keyboard
  playingTo.textContent = this.value; //.value returns the input value
  winningScore = Number(this.value); //input.value on its own returns a string!! change by wrapping in Number() so the scores triple equal (===)
  reset();
})
