const taskInput = document.getElementById("taskInput");
const addTaskButton = document.getElementById("addTaskButton");
const taskList = document.getElementById("taskList");

function createTaskElement(taskText) {
    const listItem = document.createElement("li");
    listItem.className = "task-item";

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.setAttribute("aria-label", `Marcar "${taskText}" como concluida`);

    const textSpan = document.createElement("span");
    textSpan.className = "task-text";
    textSpan.textContent = taskText;

    const deleteButton = document.createElement("button");
    deleteButton.type = "button";
    deleteButton.className = "delete-button";
    deleteButton.setAttribute("aria-label", `Remover a tarefa "${taskText}"`);
    deleteButton.innerHTML = `
        <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M3 6h18"></path>
            <path d="M8 6V4h8v2"></path>
            <path d="M19 6l-1 14H6L5 6"></path>
            <path d="M10 11v6"></path>
            <path d="M14 11v6"></path>
        </svg>
    `;

    listItem.appendChild(checkbox);
    listItem.appendChild(textSpan);
    listItem.appendChild(deleteButton);

    return listItem;
}

function addTask() {
    const taskText = taskInput.value.trim();

    if (!taskText) {
        taskInput.focus();
        return;
    }

    const newTask = createTaskElement(taskText);
    taskList.appendChild(newTask);
    taskInput.value = "";
    taskInput.focus();
}

addTaskButton.addEventListener("click", addTask);

taskInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        addTask();
    }
});

taskList.addEventListener("click", (event) => {
    const clickedCheckbox = event.target.closest('input[type="checkbox"]');

    if (clickedCheckbox) {
        const taskItem = clickedCheckbox.closest(".task-item");
        taskItem.classList.toggle("completed", clickedCheckbox.checked);
        return;
    }

    const deleteButton = event.target.closest(".delete-button");

    if (deleteButton) {
        const taskItem = deleteButton.closest(".task-item");
        taskItem.remove();
    }
});
