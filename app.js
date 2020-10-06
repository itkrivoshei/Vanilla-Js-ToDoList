const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");

document.addEventListener("DOMContentLoaded", getTodos);
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteTodo);