//bereitstellen der benötighten elemente
var todoListe = document.getElementById("todoListe");
var todoAddButton = document.getElementById("todoAddButton");
var todoInput = document.getElementById("todoInput");
// funktion wleche einträge zur ToDoListe hinzufügt
function addItemToList(item) {
    var newListItem = document.createElement("li");
    newListItem.innerHTML = "\n    <div>\n      " + item + "\n      <a href=\"#!\" class=\"secondary-content\">\n        <i class=\"material-icons\">delete</i>\n      </a>\n    </div>\n  ";
    newListItem.className = "collection-item";
    var todoRemoveButton = newListItem.querySelector("i");
    todoRemoveButton.addEventListener("click", function () {
        todoListe.removeChild(newListItem);
    });
    todoListe.appendChild(newListItem);
}
todoAddButton.addEventListener("click", function () {
    addItemToList(todoInput.value);
    todoInput.value = "";
});
