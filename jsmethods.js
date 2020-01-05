var obj = {
  name: "chuck",
  age: 20,
  isCool: true,
  friends: ["bob", "tina"],
  add: function(x,y){
    return x + y;
  }
}

obj.add(5,4);

/*
function speak (){
  return "WOOF!";
}
function speak (){    speak(); will only return "MEOW!" because this is a namespace collsion.
  return "MEOW!";     adding functions to objects (Methods) helps us avoid this!
}
*/


var dog = {};               //empty object called dog
dog.speak = function (){  //add a method called speak to dog object
  return "WOOF!";
}

var cat = { };               // empty objects called cat
cat.speak = function (){  // add a method called speak to cat object
  return "MEOW!";
}

dog.speak();    //call "WOOF!"
cat.speak();    // call "MEOW!"       same function name, different name space


//THIS KEYWORD

var comments = {};

comments.data = ["good job", "lame...", "unbelievable"];

function print(arr){
  arr.forEach(function(el){
    console.log(el)
  });
}
print(comments.data);

comments.print = function(){    //how do we make this function talk to the data section inside comments
  this.data.forEach(function(el){  //this - refers to the object "comments"
    console.log(el)
  });
}
comments.print();
