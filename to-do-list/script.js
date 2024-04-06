//Functionn to add a new task to the list
function addTask() {
    //Get the input value
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();

    // add task to the list if the input is not ready
    if(taskText !== ''){
        const taskItem = document.createElement('li');
        taskItem.textContent = taskText;

        //Append task item to the list
        const taskList = document.getElementById('taskList');
        taskList.appendChild(taskItem);
        //clear the input field
        taskInput.value = '';
    }
}
document.getElementById('addTaskBtn').addEventListener('click',addTask);