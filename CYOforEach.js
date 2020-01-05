function myForEach(arr, func){
  for(var i = 0; i < arr.length; i++) {   //loop through array
    func(arr[i]);                         //call func for each item in array
  }
}

var colors = ["red", "orange", "yellow"];

myForEach(colors, function(color){
  console.log(color);
});


//creating .myForEach

Array.prototype.myForEach = function(func){
  for(var i = 0; i < this.length; i++){    //this = keyword!, refers to the array that our "myForEach" will be stuck onto
  func(this[i]);
  }
}

var friends = ["greg", "dave", "mads"];

friends.myForEach(function(name){
  console.log("I Love " + name);
 });
