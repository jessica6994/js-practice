//my solution isEven
function isEven(num){
  if (num % 2 === 0){
    return true;
  } else {
    return false;
  }
}
//COLT SOLUTION isEven
function isEven(num){
  return num % 2 === 0; //num%2===0 is a boolean statement
}

//COLT SOLUTION factorial
function factorial(num){
  if (num === 0){
    return 1;
  }
  var result = num;                 //define a result variable
  for(var i = num-1; i >= 1; i--){  //i = 1 less than num, and while i is more than or 1, then take 1 from num
  result *= i;                      //calculate factorial and store value in result
  } //aka result = result * x
  return result;                    //return result variable
}

//COLT SOLUTION found on stackoverflow
function kebabToSnake(str){
  var newStr = str.replace(/-/g, "_");
  return newStr;
}
