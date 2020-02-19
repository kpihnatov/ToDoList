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




loadTasks();


function createTasks() {
    var input = document.getElementById('i').value
    var inputTask = document.createElement('li');
    inputTask.classList.add('taskinput');
    inputTask.type = 'text';
    inputTask.innerHTML = input;
    console.log(input)
    console.log(inputTask)
        //Create Buttons EDIT/DELETE
    var editButton = document.createElement('button');
    editButton.innerHTML = "edit"
    editButton.classList.add('editbutton');
    var deleteButton = document.createElement('button');
    deleteButton.innerHTML = "delete"
    deleteButton.classList.add('deletebutton');

    //append child
    taskBox.appendChild(inputTask);
    taskBox.appendChild(editButton);
    taskBox.appendChild(deleteButton);
    deleteButton.addEventListener('click', () => deleteTask(taskBox));
    editButton.addEventListener('click', () => editTask());
    document.getElementById('i').value = "";

    saveTasks();
    console.log(lists);

    function deleteTask() {

        taskBox.removeChild(inputTask);
        taskBox.removeChild(editButton);
        taskBox.removeChild(deleteButton);
        saveTasks();
    }

}





//delete task


//*********WEB_STORAGE********
function saveTasks() {
    localStorage.setItem('1', taskBox.innerHTML);
}

function loadTasks() {
    if (localStorage.getItem('1')) {
        taskBox.innerHTML = localStorage.getItem('1');

    }
    console.log(taskBox)
}
//Temporary
function cleartasks() {
    localStorage.clear()
}