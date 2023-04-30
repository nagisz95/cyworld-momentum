const todoForm = document.querySelector(".todoForm");
const todoInput = document.querySelector(".todoInput");
const todoUl = document.querySelector(".todoUl");

let todos = [];

function saveTodos() {
    localStorage.setItem("todos", JSON.stringify(todos));
}

function DeleteTodo(event) {
    const li = event.target.parentElement;
    li.remove();
    todos = todos.filter((newTodo) => newTodo.id !== parseInt(li.id));
    saveTodos();
}

function paintTodo(newTodo) {
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click", DeleteTodo);
    li.appendChild(span);
    li.appendChild(button);
    todoUl.appendChild(li);
}

function submitTodo(event) {
    event.preventDefault();
    const newTodo = todoInput.value;
    todoInput.value = "";
    const newTodoObj = {
        text: newTodo, 
        id: Date.now(),
    };
    todos.push(newTodoObj);
    paintTodo(newTodoObj);
    saveTodos();
}

todoForm.addEventListener("submit", submitTodo);

const savedTodos = localStorage.getItem("todos");

if (savedTodos) {
    const parsedTodos = JSON.parse(savedTodos);
    todos = parsedTodos;
    parsedTodos.forEach(paintTodo);
}