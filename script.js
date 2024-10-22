const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
  if (inputBox.value === "") {
    alert("You must write something!");
  } else {
    let li = document.createElement("li"); // creates li element
    li.innerHTML = inputBox.value; // sets the text of the li element to input value
    listContainer.appendChild(li); // (to display the li) append li element to listContainer (ul)
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  inputBox.value = ""; // clear input after adding task
  saveToLocalStorage();
}

listContainer.addEventListener("click", function (e) {
  if (e.target.tagName === "LI") {
    // if u click a li tag (task), toggles the class "checked"
    e.target.classList.toggle("checked");
    saveToLocalStorage();
  } else if (e.target.tagName === "SPAN") {
    // if u click a span tag ("x"), removes the parent element (task) it is in
    e.target.parentElement.remove();
    saveToLocalStorage();
  }
});

function saveToLocalStorage() {
  localStorage.setItem("tasks", listContainer.innerHTML);
}

function getFromLocalStorage() {
  listContainer.innerHTML = localStorage.getItem("tasks");
}

getFromLocalStorage();
