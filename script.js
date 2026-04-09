const addBtn = document.getElementById("addBtn");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

addBtn.addEventListener("click", addTask);

function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText === "") return;

    const li = document.createElement("li");

    li.innerHTML = `
        <span class="task">${taskText}</span>
        <button class="remove">X</button>
    `;

    li.querySelector(".task").addEventListener("click", () => {
        li.classList.toggle("completed");
    });

    li.querySelector(".remove").addEventListener("click", () => {
        li.remove();
    });

    taskList.appendChild(li);
    taskInput.value = "";
}
