window.setTimeout(function() {

//start to do list as an empty array
  var todos =[];
//ask user for input
  var input = prompt("What would you like to do?");

  while (input !== "quit"){
    if (input === "list"){    //if "list" then view all todos in array
      console.log(todos);
    } else if (input === "new"){    //if "new" then ask what new todo is
      var newTodo = prompt("Enter new todo");
      todos.push(newTodo);      //add the new todo to the todos array list
    }
    input = prompt("What would you like to do?"); //ask again on repeat
  }
  console.log("ok you quit the app") //this will only run if input is "quit" and loop will end

}, 500);
