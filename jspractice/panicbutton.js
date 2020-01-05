var userName = prompt("Hi welcome to The Grape Escape! We think we have the best name...What's yours?");

if (userName !== undefined){
  alert("That's a lovely name.")
  setTimeout(function(){
    alert("Service Desk Note: We're having some technical difficulties at present and apologise for any inconvenience caused. PLEASE ignore any pop ups that may occur on this page and try again in 48 hours when we have hopfeully fixed the problem.")
  }, 1000);
}

var button = document.querySelector("button");

button.addEventListener("mouseover", function(){
	this.textContent = "DON'T DO IT!";
});

button.addEventListener("mouseout", function(){
	this.textContent = "No Entry";
});



var buttonText = document.querySelector("button").textContent;
var isRed = false;

button.addEventListener("click", function(){
  this.textContent = "WHAT HAVE YOU DONE?!";
  if (button.textContent = "WHAT HAVE YOU DONE?!"){
      setInterval(function(){
        if (isRed){
          document.querySelector(".body").style.backroundColor = "white";
          document.querySelector(".jumbotron").style.color = "white";
        }else{
          document.querySelector(".body").style.backgroundColor = "red"; //why won't this loop?
          document.querySelector(".jumbotron").style.color = "red";
        }
        isRed = !isRed;
      }, 500);

    setTimeout(function(){
      alert("Hello");
    }, 2000);

    setTimeout(function(){  //why won't these follow set interval times?
      alert("What's your name?");
    }, 3000);

    setTimeout(function(){
      alert("I'm Karen.");
    }, 4000);

    setTimeout(function(){
      alert("You left your door unlocked.");
    }, 5000);
  }
});

/*
setTimeout(function(){
  alert("Uh Oh")
  }
}, 4000);
*/
