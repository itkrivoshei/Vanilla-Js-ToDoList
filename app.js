const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");

document.addEventListener("DOMContentLoaded", getTodos);
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteTodo);

function addTodo(e) {
  e.preventDefault();
  
  // Create todo div
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");
  
  // Create list
  const newTodo = document.createElement("li");
  newTodo.innerText = todoInput.value;
  
  // Save to local
  saveLocalTodos(todoInput.value);
  newTodo.classList.add("todo-item");
  todoDiv.appendChild(newTodo);
  todoInput.value = "";
  
  // Create Completed Button
  const completedButton = document.createElement("button");
  completedButton.innerHTML = `✓`;
  completedButton.classList.add("complete-btn");
  todoDiv.appendChild(completedButton);
  
  // Create trash button
  const trashButton = document.createElement("button");
  trashButton.innerHTML = `✗`;
  trashButton.classList.add("trash-btn");
  todoDiv.appendChild(trashButton);
  
  // Final Todo
  todoList.appendChild(todoDiv);
}

function deleteTodo(e) {
  const item = e.target;

  if (item.classList[0] === "trash-btn") {
    const todo = item.parentElement;
    
    todo.classList.add("fall");
    todo.classList.add("completed");
    removeLocalTodos(todo);
    
    todo.addEventListener("transitionend", (e) => {
      todo.remove();
    });
  }
  
  if (item.classList[0] === "complete-btn") {
    const todo = item.parentElement;
    
    todo.classList.toggle("completed");
  }
}

function saveLocalTodos(todo) {
  let todos;
  
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }
  
  todos.push(todo);
  localStorage.setItem("todos", JSON.stringify(todos));
}

function removeLocalTodos(todo) {
  let todos;
  
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }
  
  const todoIndex = todo.children[0].innerText;
  
  todos.splice(todos.indexOf(todoIndex), 1);
  localStorage.setItem("todos", JSON.stringify(todos));
}

function getTodos() {
  let todos;
  
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }
  
  todos.forEach(function (todo) {
    // Create todo div
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
    
    // Create list
    const newTodo = document.createElement("li");
    newTodo.innerText = todo;
    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo);
    todoInput.value = "";
    
    // Create Completed Button
    const completedButton = document.createElement("button");
    completedButton.innerHTML = `✓`;
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);
    
    // Create trash button
    const trashButton = document.createElement("button");
    trashButton.innerHTML = `✗`;
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);
    
    // Final Todo
    todoList.appendChild(todoDiv);
  });
}
