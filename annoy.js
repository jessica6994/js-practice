var answer = prompt("Are we there yet?");

while(answer !== "yes" && answer !== "yeah"){
  var answer = prompt("Are we there yet?");
}
//This code will only run when the above code has finished looping
//Therefore this code will run when answer is finally yes.
alert("YAY! We finally made it!");
