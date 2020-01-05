var answer = prompt("Are we there yet?");

//.indexOf function will return -1 if the string is not found.
//Therefore if -1 is returned, the answer is not "yes", so
//site will ask again.
while(answer.indexOf("yes") === -1 ){
  var answer = prompt("Are we there yet?");
}
//This alert will only run when the above has finished looping
//Therefore will run when answer is finally yes.
alert("YAY! We finally made it!");
