let tasks = [];

function addTask() {
  let taskInput = document.getElementById("taskInput");
  let taskText = taskInput.value.trim();
  if (taskText !== "") {
    let task = {
      text: taskText,
      timestamp: new Date(),
    };
    tasks.push(task);
    displayTasks();
    taskInput.value = "";
  }
}

function displayTasks() {
  let pendingTasksList = document.getElementById("pendingTasks");
  let completedTasksList = document.getElementById("completedTasks");

  pendingTasksList.innerHTML = "";
  completedTasksList.innerHTML = "";

  tasks.forEach((task, index) => {
    let listItem = document.createElement("li");
    listItem.innerHTML = `<span>${task.text}</span>
                              <div>
                                <button onclick="completeTask(${index})">Complete</button>
                                <button onclick="editTask(${index})">Edit</button>
                                <button onclick="deleteTask(${index})">Delete</button>
                              </div>`;
    pendingTasksList.appendChild(listItem);
  });
}

function completeTask(index) {
  let completedTask = tasks.splice(index, 1)[0];
  completedTask.timestamp = new Date();
  displayTasks();
}

function deleteTask(index) {
  tasks.splice(index, 1);
  displayTasks();
}

function editTask(index) {
  let newTaskText = prompt("Enter new task text:");
  if (newTaskText !== null) {
    tasks[index].text = newTaskText.trim();
    displayTasks();
  }
}

// Initial display
displayTasks();
