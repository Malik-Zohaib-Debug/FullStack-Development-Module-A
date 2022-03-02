const reason = document.getElementById('reason');
const list = document.getElementById('list');
const form = document.getElementById('add-form');
const close = document.getElementById('close-btn');

const tasks = [
    {id: 1, reason: 'Learn JS'},
    {id: 2, reason: 'Create Website'}
]

let task = tasks

function displayTasks(tasks) {
    const tasksLI = document.createElement('list');
    tasksLI.innerHTML = `
    <li>${tasks.reason}<button id="close-btn" onClick="deleteTask(${tasks.id})">X</button></li>
    `
    list.appendChild(tasksLI);
}

function createID() {
    return Math.floor(Math.random * 1000000000000);
}

function addTasks(e){
    e.preventDefault();
    if(reason.value.trim() === '') {
        alert("Please add a valid task to do!");
    } else {
        const task = {
            id: createID(),
            reason: reason.value
        }

        tasks.push(task);
        displayTasks(task);

        reason.values = '';

    }
}

function deleteTask(id) {
    task = tasks.filter(task => task.id !== id);
    init();
}

function init() {
    list.innerHTML = '';
    tasks.forEach(displayTasks);
}

init();

form.addEventListener('submit', addTasks);