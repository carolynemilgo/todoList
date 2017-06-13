//business logic

 // var Todo=[];

function Todo(task) {
  this.todoList = task;
}

Todo.prototype.myTodoList= function() {
  return this.todoList;
}


//user interface logic
$(document).ready(function() {
  $("form#taskManager").submit(function(event) {
    event.preventDefault();

    var inputtedTask = $("input#task").val();

    var newTask = new Todo(inputtedTask);
    $("ul#todo").append("<li><span class='listings'>" + newTask.myTodoList() + "</span><input type='checkbox'></li>");

    $("input#task").val("");

    $("input[type='checkbox']").click(function () {
      if($(this).prop('checked')){
        $("li").click("input[type='checkbox']", function () {
          $(this).remove();
        })
      }
    })
