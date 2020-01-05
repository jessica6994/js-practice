//we want li's to turn green when mouse hovers over
//1: SELECT LIs
var lis = document.querySelectorAll("li");
//for loop to add event listener to each li, on mouse over - turn green, on mouse off return to black;
for(var i = 0; i < lis.length; i++){
  lis[i].addEventListener("mouseover", function(){
    this.classList.add("selected"); //'this' refers to item interacted with within lis
  });
  lis[i].addEventListener("mouseout", function(){
    this.classList.remove("selected");
  });
  lis[i].addEventListener("click", function(){
    this.classList.toggle("done");
  })
};
