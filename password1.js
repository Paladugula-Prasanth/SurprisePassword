
var todos = ["walk turtle"];
var input = prompt("enter password");
while(input !== "242892"){
	if(input === "list"){
		listTodos();
	} else if(input === "new"){
		newTodos();
	}else if(input == "delete"){
		deleteTodos();
	}
	input = prompt("What Would you like to do?");
}
console.log("ok, you quit the app");

function listTodos(){
	console.log("********");
	todos.forEach(function(todos , index){
		console.log(index+": "+todos);
	});
	console.log("********");
}
function newTodos(){
	var newTodo = prompt("enter newTodo");
	todos.push(newTodo);
}
function deleteTodos(){
	var i = prompt("Enter index of todo to delete:");
	todos.splice(i,1);
	console.log("Deleted Todo");
}
