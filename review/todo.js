const toDoForm = document.querySelector(".js-toDoForm");
const input = toDoForm.querySelector("input");
const toDoList = document.querySelector(".js-toDoList");

let toDos = [];

function saveToDo() {
  localStorage.setItem("toDos", JSON.stringify(toDos));
}

function handleClick(event) {
  const btn = event.target;
  const li = btn.parentNode;
  toDoList.removeChild(li);
  const removedToDos = toDos.filter(function(toDo) {
    return toDo.id !== parseInt(li.id);
  });
  toDos = removedToDos;
  saveToDo();
}

function handleSubmit(event) {
  event.preventDefault;
  const userInput = input.value;
  showToDos(userInput);
  input.value = "";
}

function showToDos(todo) {
  const toDoLi = document.createElement("li");
  const text = document.createElement("span");
  const delBtn = document.createElement("button");
  delBtn.addEventListener("click", handleClick);
  const id = toDos.length + 1;
  text.innerText = todo;
  delBtn.innerText = "❌";
  toDoLi.appendChild(delBtn);
  toDoLi.appendChild(text);
  toDoLi.id = id;
  toDoList.appendChild(toDoLi);
  const toDoObj = {
    todo: todo,
    id: id
  }
  toDos.push(toDoObj);
  saveToDo();
}

function loadToDos() {
  const toDos_LS = localStorage.getItem("toDos");
  if (toDos_LS !== null) {
    const parsedToDos = JSON.parse(toDos_LS);
    parsedToDos.forEach(function(toDo) {
      showToDos(toDo.todo);
    });
  }
}

function init() {
  loadToDos();
  toDoForm.addEventListener("submit", handleSubmit);
}

init();