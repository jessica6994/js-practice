//convert age to a Number as prompts always return strings!
var age = Number(prompt("How old are you?"));

//if less than 18
if (age < 18){
  console.log("Sorry you are not old enough to enter the venue.")
}
//if less than 21
else if (age < 21){
  console.log("You can enter the venue but you cannot drink.")
}
//If age is negative
else if(age < 0){
  console.log("ERROR. NOT VALID AGE.")
}
//If 21 years old
else if (age === 21){
  console.log("Happy 21st Birthday! Go to the bar for a free shot!")
}
//BONUS If age is odd (if age mod 2 isn't 0 then must be odd)
else if (age % 2 !== 0){
  console.log("Your age is odd!")
}
//BONUS If age is a square number... ??
else if (age % Math.sqrt(age) === 0){
  console.log("perfect square!")
}
else{
  console.log("Come on in. You can drink.")
}
