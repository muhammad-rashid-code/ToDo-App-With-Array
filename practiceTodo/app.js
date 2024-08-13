let todoConTainer = document.querySelectorAll("div")[0];
let inputField = document.querySelectorAll("input")[0];
let addButton = document.querySelectorAll("button")[0];
let outPutDivCon = document.querySelectorAll("div")[1];
let myTodoDataBase = [];
let editTodoIndex = null;

function add() {
  let toDoValue = inputField.value;
  if (inputField.value === "") {
    return;
  }
  if (editTodoIndex !== null) {
    myTodoDataBase[editTodoIndex] = toDoValue;
    editTodoIndex = "";
    addButton.innerHTML = "Add";
  } else {
    myTodoDataBase.push(toDoValue);
  }
  inputField.value = "";
  inputField.focus();
  printAllTodos();
}

function printAllTodos() {
  outPutDivCon.innerHTML = ``;
  for (let i = myTodoDataBase.length - 1; i >= 0; i--) {
    outPutDivCon.innerHTML += `
<p id="${i}">
${i + 1}
${myTodoDataBase[i]}
<button onclick="editTodo(${i})">Eidt</button>
<button onclick="deleteTodo(${i})">Delete</button>
</p>`;
    console.log(myTodoDataBase);
  }
}
function deleteTodo(deletIndex) {
  myTodoDataBase.splice(deletIndex, 1);
  printAllTodos();
}

function editTodo(editIndex) {
  inputField.value = myTodoDataBase[editIndex];
  addButton.innerHTML = "Update";
  editTodoIndex = editIndex;
}
