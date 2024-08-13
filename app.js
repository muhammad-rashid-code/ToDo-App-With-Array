// approaching all html fields
let btnAdd = document.querySelectorAll("button")[0];
console.log(btnAdd);
let inputCont = document.querySelectorAll("div")[0];
let todoInputField = document.querySelectorAll("input")[0];
let outPutDiv = document.querySelectorAll("div")[1];
let myDataBase = [];
let editIndexFor = null;

// function adding ToDo
function add() {
  let todovalue = todoInputField.value;
  if (editIndexFor !== null) {
    myDataBase[editIndexFor] = todovalue;
    editIndexFor = null;
    btnAdd.innerHTML = "Add";
  } else {
    myDataBase.push(todovalue);
  }
  printAllTodos();
  todoInputField.value = "";
  todoInputField.focus();
}

// function domPrinting
function printAllTodos() {
  outPutDiv.innerHTML = "";
  for (let i = myDataBase.length - 1; i >= 0; i--) {
    outPutDiv.innerHTML += `
<p id="${i + 1}">
${i + 1} ${myDataBase[i]} 
<button onclick="editTodo(${i})">Edit</button>
<button onclick="deleteTodo(${i})">Delete</button>
</p>`;
    console.log(myDataBase);
  }
}

// function delete
function deleteTodo(deleteIndex) {
  myDataBase.splice(deleteIndex, 1);
  printAllTodos();
}

// function edit
function editTodo(editIndex) {
  todoInputField.value = myDataBase[editIndex];
  btnAdd.innerHTML = "Update";
  editIndexFor = editIndex;
}
