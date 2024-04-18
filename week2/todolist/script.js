document.addEventListener('DOMContentLoaded', function () {
    const taskInput = document.getElementById('taskInput');
    const addTaskBtn = document.getElementById('addTaskBtn');
    const taskList = document.getElementById('taskList');

    addTaskBtn.addEventListener('click', addTask);

    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText !== '') {
            const taskItem = document.createElement('li');
            const taskTextSpan = document.createElement('span');
            taskTextSpan.textContent = taskText;
            taskItem.appendChild(taskTextSpan);

            const editBtn = document.createElement('button');
            editBtn.textContent = 'Edit';
            editBtn.classList.add('editBtn');
            editBtn.addEventListener('click', editTask);
            taskItem.appendChild(editBtn);

            const deleteBtn = document.createElement('button');
            deleteBtn.textContent = 'Delete';
            deleteBtn.classList.add('deleteBtn');
            deleteBtn.addEventListener('click', deleteTask);
            taskItem.appendChild(deleteBtn);

            taskList.appendChild(taskItem);
            taskInput.value = '';
        }
    }

    function editTask() {
        const taskItem = this.parentElement;
        const taskTextSpan = taskItem.querySelector('span');
        const newText = prompt('Edit task:', taskTextSpan.textContent);
        if (newText !== null) {
            taskTextSpan.textContent = newText.trim();
        }
    }

    function deleteTask() {
        const taskItem = this.parentElement;
        taskList.removeChild(taskItem);
    }

    taskInput.addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            addTask();
        }
    });
});
