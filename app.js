function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskList = document.getElementById("taskList");

    if (taskInput.value === '') {
        alert("Please enter a task.");
        return;
    }

    // Create a new list item
    const li = document.createElement("li");
    li.innerText = taskInput.value;

    // Create a remove button
    const removeButton = document.createElement("button");
    removeButton.innerText = "Remove";
    removeButton.onclick = function() {
        taskList.removeChild(li);
    };

    // Add the button to the list item
    li.appendChild(removeButton);

    // Add the list item to the task list
    taskList.appendChild(li);

    // Clear the input field
    taskInput.value = '';
}