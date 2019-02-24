window.setTimeout(function() {
    // put all of your JS code from the lecture here
    var todos = ["Buy New Turtle"];

    var input = prompt("What would you like to do?");

    while (input !== "quit" && input !== "exit") {
        if (input == "list") {
            listTodos();
        } else if (input == "new") {
            addTodo();
        } else if (input == "delete") {
            deleteTodo();
        }
        input = prompt("What would you like to do?");
    }

    console.log("Ok, you quit the app.");

    function listTodos() {
        console.log("~~~~~~~~~~~");
        todos.forEach(function(todo, i) {
            console.log(i + ": " + todo);
        });
        console.log("~~~~~~~~~~~");
    }

    function addTodo() {
        var newTodo = prompt("Enter new to-do");
        todos.push(newTodo);
        console.log("Added To-Do");
    }

    function deleteTodo() {
        var index = prompt("Enter index of to-do to delete");
        todos.splice(index, 1);
        console.log("Deleted To-Do");
    }
}, 500);