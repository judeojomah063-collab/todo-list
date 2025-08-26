// Select elements
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

// Function to add a task
function addTask(taskText) {
  let inputValue = taskText || taskInput.value.trim();
  if (inputValue === "") return;

  // Create new list item
  const li = document.createElement("li");
  li.textContent = inputValue;

  // Create delete button
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "❌";
  deleteBtn.style.marginLeft = "10px";
  deleteBtn.style.cursor = "pointer";

  deleteBtn.addEventListener("click", () => {
    li.remove();
  });

  li.appendChild(deleteBtn);
  taskList.appendChild(li);

  taskInput.value = "";
}

// Default tasks
const defaultTasks = [
  "🚀 Deploy portfolio site on GitHub Pages",
  "📄 Update README with project links",
  "🎨 Improve CSS design for to-do app",
  "🐛 Fix bug in delete task feature",
  "📘 Learn JavaScript ES6+ features",
  "⚛️ Start learning React basics",
  "💼 Apply to 3 software engineer jobs",
  "🔗 Add project links to LinkedIn"
];

// Load default tasks on page load
window.onload = () => {
  defaultTasks.forEach(task => addTask(task));
};
