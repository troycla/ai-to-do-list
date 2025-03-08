// Select DOM elements
const taskForm = document.getElementById("task-form");
const taskInput = document.getElementById("task-input");
const taskList = document.getElementById("task-list");

// Add task
taskForm.addEventListener("submit", function(e) {
    e.preventDefault(); // Prevent form from refreshing the page
    const taskText = taskInput.value.trim();

    if (taskText !== "") {
        const listItem = document.createElement("li");

        const taskSpan = document.createElement("span");
        taskSpan.textContent = taskText;

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.classList.add("delete");

        deleteButton.addEventListener("click", () => {
            listItem.remove(); // Remove the task from the list
        });

        listItem.appendChild(taskSpan);
        listItem.appendChild(deleteButton);
        taskList.appendChild(listItem);

        taskInput.value = ""; // Clear the input field
    }
});
