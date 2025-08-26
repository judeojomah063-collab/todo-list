const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText === "") return;

  const li = document.createElement("li");
  li.textContent = taskText;

  // Mark as done when clicked
  li.addEventListener("click", () => {
    li.classList.toggle("done");
  });

  // Delete button
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "X";
  deleteBtn.style.background = "red";
  deleteBtn.style.color = "white";
  deleteBtn.style.border = "none";
  deleteBtn.style.borderRadius = "3px";
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
  "📝 Update README with project links",
  "🎨 Improve CSS design for to-do app",
  "🐞 Fix bug in delete task feature",
  "📚 Learn JavaScript ES6+ features",
  "⚛️ Start learning React basics",
  "💼 Apply to 3 software engineer jobs",
  "🔗 Add project links to LinkedIn"
];
// Show default tasks when page loads
window.onload = () => {
  defaultTasks.forEach(task => {
    addTask(task);
  });
};
