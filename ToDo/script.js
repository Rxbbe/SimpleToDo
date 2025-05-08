document.addEventListener("DOMContentLoaded", () => {
    const taskInput = document.getElementById("taskInput");
    const addTaskButton = document.getElementById("addTaskButton");
    const taskList = document.getElementById("taskList");
    const completedTaskList = document.getElementById("completedTaskList");
    const clearTasksButton = document.getElementById("clearTasksButton");

    console.log("Clear button:", clearTasksButton); // Debug

    addTaskButton.addEventListener("click", () => {
        const taskText = taskInput.value.trim();
        if (taskText === "") return;

        const li = createTaskItem(taskText);
        taskList.appendChild(li);
        taskInput.value = "";
    });

    function createTaskItem(text) {
        const li = document.createElement("li");
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.className = "complete-checkbox";

        const span = document.createElement("span");
        span.textContent = text;

        checkbox.addEventListener("change", () => {
            if (checkbox.checked) {
                taskList.removeChild(li);
                completedTaskList.appendChild(li);
            } else {
                completedTaskList.removeChild(li);
            }
        });

        li.appendChild(checkbox);
        li.appendChild(span);
        return li;
    }

    clearTasksButton.addEventListener("click", () => {
        taskList.innerHTML = "";
        completedTaskList.innerHTML = "";
    });
});
