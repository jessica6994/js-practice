/*EXAMPLES
//prints odd numbers from 1-9
var num = 1;
while (num <=10){
  console.log(num);
  num+=2;
}

//prints multiples of 4 between 1 and 20
var num=1;
while (num<=20){
  if (num % 4 === 0 ){
    console.log(num);
  }
  num++;
}
*/
console.log("ALL NUMBERS -10 TO 19");

var num = -10;
while (num < 20){
  console.log(num);
  num++;
}

console.log("EVEN NUMBERS BETWEEN 10 AND 40");
var num = 10;
while (num <= 40){
  if (num % 2 === 0){
  console.log(num);
  }
  num++;
}

console.log("ODD NUMBERS BETWEEN 300 AND 333");
var num = 300;
while (num <=333){
  if(num % 2 !== 0){
    console.log(num);
  }
  num++;
}

console.log("NUMBER DIVISIBLE BY 5&3 BETWEEN 5 AND 50");
var num = 5;
while (num<=50){
  if ((num % 3 === 0) && (num % 5 === 0)){
    console.log(num);
  }
  num++;
}
