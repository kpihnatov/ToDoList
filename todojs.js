//var ul = document.getElementById('list');
//var lists = document.getElementsByTagName('li');
//console.log(localStorage.value)
//loadTasks();
//deleteTasks();
//localStorage.clear();
//localStorage.setItem('1', "sas");
/*
function createTask() {
    var input = document.getElementById('inp').value;
    var li = document.createElement("li");
    
    button.appendChild(text);
    li.innerHTML = input;
    //li.innerHTML = "sas";
    ul.appendChild(li);
    ul.appendChild(button);
    document.getElementById("inp").value = "";
    saveTasks();
    console.log(li)
    console.log(input)

}

function saveTasks() {
    localStorage.setItem('1', ul.innerHTML);
}

function loadTasks() {
    if (localStorage.getItem('1')) {
        ul.innerHTML = localStorage.getItem('1')
    }

}

function deleteTasks() {


}*/
//var saveButton = document.querySelector('.create');
//var inpValue = document.querySelector('.inp');
//var container = document.querySelector('.container');

var taskBox = document.getElementById('tasks');
var lists = document.getElementsByTagName('li');
var divcont = document.getElementById('uid');
//var todoList = [];
loadTasks();

function createTasks() {
    //create
    createDiv();
    createInp();
    createEdit();
    createDel();
    document.getElementById('i').value = "";
    saveTasks();
    console.log(lists);
}

function createDiv() {
    var cont = document.createElement('div');
    cont.id = 'uid'
    divcont = cont;
    taskBox.appendChild(cont);
}

function createInp() {
    var input = document.getElementById('i').value

    var inputTask = document.createElement('li');
    inputTask.contentEditable = 'true';

    //inputTask.id = counter;
    inputTask.classList.add('taskinput');
    inputTask.type = 'text';
    inputTask.innerHTML = input;
    divcont.appendChild(inputTask);

}

function createEdit() {
    var editButton = document.createElement('button');
    editButton.innerHTML = "edit"
    editButton.classList.add('editbutton');
    editButton.onclick = editItem;
    divcont.appendChild(editButton);
    // divcont.appendChild(editButton);

}

function createDel() {
    var deleteButton = document.createElement('button');
    deleteButton.innerHTML = "delete"
    deleteButton.classList.add('deletebutton');
    deleteButton.onclick = deleteItem;
    divcont.appendChild(deleteButton);
    //divcont.appendChild(deleteButton);
}
let deleteItem = (e) => {
    e.target.parentNode.remove();
    saveTasks();
}
let editItem = (e) => {
    saveTasks();
}





//delete task


//*********WEB_STORAGE********
function saveTasks() {
    localStorage.setItem('1', JSON.stringify(taskBox.innerHTML));
}

function loadTasks() {
    if (localStorage.getItem('1')) {
        taskBox.innerHTML = JSON.parse(localStorage.getItem('1'));

    }
    console.log(taskBox)
}
//Temporary
function cleartasks() {
    localStorage.clear();
}