window.setTimeout(function() {

//start to do list as an empty array
  var todos =[];
//ask user for input
  var input = document.getElementById("todo");

  function addToDo(){
    todos.push(input);
  }
  function viewToDo(){
    console.log(todos);
  }

  document.getElementById("add").onClick = addToDo();

  document.getElementById("view").onclick = viewToDo();

}, 500);
