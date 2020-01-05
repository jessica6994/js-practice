//SEE BELOW FOR MY ATTEMPT - ALL WORK BUT NOT REFACTORED.
//SOLUTION VIDEO = NO NEED TO DEFINE ARRAY (ITS EMPTY ANYWAY!)


//PRINT REVERSE

function printReverse(arr){ //only accepts array when calling the function now that "array" place holder is there
  for(var i = (arr.length-1); i > -1; i--){
    console.log(arr[i]);
  }
}


//IS UNIFORM
function isUniform(arr){
  var zeroIndexValue = arr[0];
  for(var i = 1; i < arr.length; i++){
    if (zeroIndexValue !== arr[i]){
      return false;
    }
  }return true;
}


//SUM ARRAY
function sumArray(arr){
  var total = 0;
  arr.forEach(function(arrElement){
    total += arrElement;
  });
  return total;
}

//MAX
function max(arr){
  var max = arr[0];
  for( var i = 1; i < arr.length; i++){
    if(arr[i] > max){
      max = arr[i];
    }
  }
  return max;
}


/*
//PRINT REVERSE
var reverseArray = [];

function printReverse(reverseArray){ //only accepts array when calling the function now that "array" place holder is there
  for(var i = (reverseArray.length-1); i > -1; i--){
    console.log(reverseArray[i]);
  }
}


//IS UNIFORM
var uniformArray = [];

function isUniform(uniformArray){
  var zeroIndexValue = uniformArray[0];
  for(var i = 1; i < uniformArray.length; i++){
    if (zeroIndexValue !== uniformArray[i]){
      return false;
    }
  }return true;
}


//SUM ARRAY
var numArray = [];

function sumArray(numArray){
  if (numArray.length <= 1){    //if array has only 1 number console.log number
    console.log(numArray[0]);
  }else{                        //if array has more than one number use loop
  var answer = numArray[0];     // [0] = answer
  for(var i = 1; i < numArray.length; i++){
    answer = answer + numArray[i];      //answer + [1] = answer
    }                                   //answer + [2] = answer
    console.log(answer);                //answer + [3] = answer
  }
}

//MAX
var maxArray = [];

function max(maxArray){
    if (maxArray.length <= 1){    //if array has only 1 number console.log number
      console.log(maxArray[0]);
    }else{                        //if array has more than one number use loop
    var maxNum = maxArray[0];     // [0] = max
    for(var i = 1; i < maxArray.length; i++){
      if (maxArray[i] > maxNum){
        maxNum = maxArray[i];
      }
    }
    console.log(maxNum);
  }
}
*/
