
interface ArrayConstructor {
    from<T>(arrayLike:ArrayLike<T>): Array<T>;
}

//bereitstellen der benötighten elemente
const todoListe = document.getElementById("todoListe") as HTMLUListElement
const todoAddButton = document.getElementById("todoAddButton") as HTMLButtonElement
const todoInput = document.getElementById("todoInput") as HTMLInputElement

// funktion wleche einträge zur ToDoListe hinzufügt
function addItemToList(item:string){
  const newListItem = document.createElement("li") as HTMLLIElement
  newListItem.innerHTML = `
    <div>
      ${item}
      <a href="#!" class="secondary-content">
        <i class="material-icons">delete</i>
      </a>
    </div>
  `
  newListItem.className = "collection-item"

  const todoRemoveButton = newListItem.querySelector("i") as HTMLElement

  todoRemoveButton.addEventListener("click",()=>{
    todoListe.removeChild(newListItem)
  })

  todoListe.appendChild(newListItem)
  
}


todoAddButton.addEventListener("click",()=>{
  addItemToList(todoInput.value)
  todoInput.value = ""
})



