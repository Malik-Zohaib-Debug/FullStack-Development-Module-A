const reason = document.getElementById('reason');
const list = document.getElementById('list');
const form = document.getElementById('add-form');
const close = document.getElementById('close-btn');

let tasks = [
   // {id: 1, reason: 'Learn JS'},
    //{id: 2, reason: 'Create Website'}
]

function displayTasks(tasks) {
    const tasksLI = document.createElement('li');
    tasksLI.innerHTML = `
        ${tasks.reason}<button id="close-btn" onClick="deleteTask(${tasks.id})"> X </button>
    `
    list.appendChild(tasksLI);
}

function createID() {
    return Math.floor(Math.random() * 1000000000000);
}

function addTasks(e){
    e.preventDefault();
    if(reason.value.trim() === '') {
        alert("Please add a valid task to do!");
    } else {
        let eachTask = {
            id: createID(),
            reason: reason.value
        }

        tasks.push(eachTask);
        displayTasks(eachTask);

        reason.value = '';
    }
}

function deleteTask(id) {
    tasks = tasks.filter(alltask => alltask.id !== id);
    init();
}

function init() {
    list.innerHTML = '';
    tasks.forEach(displayTasks);
}

init();

form.addEventListener('submit', addTasks);