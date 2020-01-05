//changed text from black to pink
var h1 = document.querySelector("h1");
h1.style.color = "pink";

//every second background of body changes between white and blue
var body = document.querySelector("body");
var isBlue = false;

setInterval(function(){
  if (isBlue){
    body.style.background= "white";
  }else{
    body.style.background = "blue";
  }
  isBlue = !isBlue;
}, 1000);
