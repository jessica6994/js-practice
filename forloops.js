console.log("all nums between -10 and 19")
for(var num = -10; num < 20; num++){
  console.log(num);
}

console.log("all even nums between 10 and 40")
for(var num = 10; num <=40; num++){
  if (num % 2 === 0){
    console.log(num);
  }
}

console.log("all odd nums between 300 and 333")
for(var num = 300; num <= 333; num++){
  if (num % 2 !== 0){
    console.log(num);
  }
}

console.log("all nums divisible by 3 and 5 between 5 and 50")
for(var num = 5; num <=50; num++){
  if (num % 3 === 0 && num % 5 === 0){
    console.log(num);
  }
}
