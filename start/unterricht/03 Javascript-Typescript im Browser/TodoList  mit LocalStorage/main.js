//bereitstellen der benötighten elemente
var todoListe = document.getElementById("todoListe");
var todoAddButton = document.getElementById("todoAddButton");
var todoInput = document.getElementById("todoInput");
var listString = window.localStorage.getItem("todoList") || "[]";
var todoListArray = JSON.parse(listString);
// funktion wleche einträge zur ToDoListe hinzufügt
function addItemToList(item) {
    var newListItem = document.createElement("li");
    newListItem.innerHTML = "\n    <div>\n      <span>" + item + "</span>\n      <a href=\"#!\" class=\"secondary-content\">\n        <i class=\"material-icons done\">done</i>\n        <i class=\"material-icons delete\">delete</i>\n      </a>\n    </div>\n  ";
    newListItem.className = "collection-item";
    var todoRemoveButton = newListItem.querySelector(".delete");
    var todoDoneButton = newListItem.querySelector(".done");
    var todoSpan = newListItem.querySelector("span");
    todoDoneButton.addEventListener("click", function () {
        todoSpan.style.textDecoration = "line-through";
    });
    todoRemoveButton.addEventListener("click", function () {
        todoListe.removeChild(newListItem);
        todoListArray.splice(todoListArray.indexOf(todoSpan.textContent || ""), 1);
        window.localStorage.setItem("todoList", JSON.stringify(todoListArray));
    });
    todoListe.appendChild(newListItem);
}
var itemToListListerner = function () {
    if (todoInput.value) {
        todoListArray.push(todoInput.value);
        addItemToList(todoInput.value);
        window.localStorage.setItem("todoList", JSON.stringify(todoListArray));
        todoInput.value = "";
    }
};
todoAddButton.addEventListener("click", itemToListListerner);
todoInput.addEventListener("change", itemToListListerner);
todoListArray.forEach(function (x) {
    addItemToList(x);
});
