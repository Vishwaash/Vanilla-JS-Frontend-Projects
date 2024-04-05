document.addEventListener('DOMContentLoaded', function(){
    const taskInput = document.getElementById('task-input');
    const addTaskBtn = document.getElementById('add-task-btn');
    const taskList = document.getElementById('task-list');

    addTaskBtn.addEventListener('click',function() {
        const taskText = taskInput.value.trim();
        if (taskText !== ''){
            addTask(taskText);
            taskInput.value = '';
        }
    });

    function addTask(Text){
        const li = document.createElement('li');
        li.className = 'task';
        li.innerHTML = `
        <span>${Text}</span>
        <button class= "delete-btn">Delete</button>
        <button class= "complete-btn">Complete</button>
        `;
        taskList.appendChild(li);
        
        const deleteBtn = li.querySelector('.delete-btn');
        deleteBtn.addEventListener('click',function(){
            li.remove();
        });
        
        const completeBtn = li.querySelector('.complete-btn');
        completeBtn.addEventListener('click',function(){
            li.classList.toggle('completed');
        });
    }
});