var button = document.querySelector("button");
var body = document.querySelector("body");

button.addEventListener("click", function(){
  body.classList.toggle("purplebody"); //see css file
})




//without defining body variable first
/*
var button = document.querySelector("button");

button.addEventListener("click", function(){
  document.body.classList.toggle("purplebody"); //see css file
})
/*















//or method without using css class
/*
var button = document.querySelector("button");
var body = document.querySelector("body");
var isPurple = false;

button.addEventListener("click", function(){
  if (isPurple){
    body.style.background = "white";

  }else{
    body.style.background = "purple";
  }
  isPurple = !isPurple
})
*/
