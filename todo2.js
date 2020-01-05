window.setTimeout(function() {

//start to do list as an empty array
  var todos =[];
//ask user for input
  var input = prompt("What would you like to do?");

//REFACTORED LOOP USING FUNCTIONS
  while (input !== "quit"){
    if (input === "list"){
      listTodos();
    } else if (input === "new"){
      addTodo();
    }else if (input === "delete"){
      deleteTodo();
    }
    input = prompt("What would you like to do?"); //ask again on repeat
  }
  console.log("ok you quit the app") //this will only run if input is "quit" and loop will end

// FUNCTIONS LIST
  function listTodos(){
    todos.forEach(function(todoList, index){ //anon functions can take up to 3 arguments
    console.log(index + ": " + todoList); //if "list" then view all todos in array
    });
  }

  function addTodo(){
    var newTodo = prompt("Enter new todo"); // ask what new todo is
    todos.push(newTodo); //add the new todo to the todos array list
    console.log("To-do added!")
  }

  function deleteTodo(){
    var indexOfTodo = prompt("specify the index of the todo you wish to remove");
    todos.splice(indexOfTodo,1);
    console.log("Okay, this to-do has been removed.")
  }

}, 500);
