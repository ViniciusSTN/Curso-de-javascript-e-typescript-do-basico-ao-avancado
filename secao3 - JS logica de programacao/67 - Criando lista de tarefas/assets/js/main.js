const inputTask = document.querySelector('.input-new-task');
const btnAdd = document.querySelector('.btn-add-task');
const tasks = document.querySelector('.tasks');

// create task on button click
btnAdd.addEventListener('click', () => {
    if (!inputTask.value) return;
    setTask(inputTask.value);
});

// create task by pressing enter
inputTask.addEventListener('keypress', (e) => {
    if (e.keyCode === 13) {
        // console.log('Enter pressionado');
        if (!inputTask.value) return;
        setTask(inputTask.value);
    }
});

// remove parent
document.addEventListener('click', e => {
    const element = e.target;
    if (element.classList.contains('delete')) {
        // console.log('apagar clicado');
        element.parentElement.remove();
        saveTasks();
    }
});

// clear input text
function clearInput() {
    inputTask.value = '';
    inputTask.focus();
}

// set task
function setTask(txt) {
    const li = createLi();
    li.innerText = txt;
    tasks.appendChild(li);
    clearInput();
    createDeleteButton(li);
    saveTasks();
}

// create li
function createLi() {
    const li = document.createElement('li');
    return li;
}

// create delete button
function createDeleteButton(li) {
    const btn = document.createElement('button');
    btn.innerText = 'Apagar';
    btn.setAttribute('class', 'delete');
    btn.setAttribute('title', 'Apagar essa tarefa');
    li.appendChild(btn);
}

// save tasks in local storage
function saveTasks() {
    const liTasks = tasks.querySelectorAll('li');
    const tasksList = [];

    for (let i of liTasks) {
        let taskText = i.innerText;
        taskText = taskText.replace('Apagar', '').trim();
        tasksList.push(taskText);
    }

    const tasksJSON = JSON.stringify(tasksList); 
    localStorage.setItem('tasks', tasksJSON);
}

// show tasks saved in local storage
function setSavedTaks() {
    const tasks = localStorage.getItem('tasks');
    const tasksList = JSON.parse(tasks);

    for (let task of tasksList) {
        setTask(task);
    }
}
setSavedTaks();