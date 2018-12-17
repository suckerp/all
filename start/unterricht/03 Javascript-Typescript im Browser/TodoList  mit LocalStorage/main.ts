
interface ArrayConstructor {
    from<T>(arrayLike:ArrayLike<T>): Array<T>;
}

//bereitstellen der benötighten elemente
const todoListe = document.getElementById("todoListe") as HTMLUListElement
const todoAddButton = document.getElementById("todoAddButton") as HTMLButtonElement
const todoInput = document.getElementById("todoInput") as HTMLInputElement
const listString = window.localStorage.getItem("todoList") || "[]"
const todoListArray:string[] = JSON.parse(listString)

// funktion wleche einträge zur ToDoListe hinzufügt
function addItemToList(item:string){
  const newListItem = document.createElement("li") as HTMLLIElement
  newListItem.innerHTML = `
    <div>
      <span>${item}</span>
      <a href="#!" class="secondary-content">
        <i class="material-icons done">done</i>
        <i class="material-icons delete">delete</i>
      </a>
    </div>
  `
  newListItem.className = "collection-item"

  const todoRemoveButton = newListItem.querySelector(".delete") as HTMLElement
  const todoDoneButton = newListItem.querySelector(".done") as HTMLElement
  const todoSpan = newListItem.querySelector("span") as HTMLSpanElement

  todoDoneButton.addEventListener("click",()=>{
    todoSpan.style.textDecoration = "line-through"
  })
 
  todoRemoveButton.addEventListener("click",()=>{
    todoListe.removeChild(newListItem)
    todoListArray.splice(todoListArray.indexOf(todoSpan.textContent || ""),1)
    window.localStorage.setItem("todoList", JSON.stringify(todoListArray))
  })

  todoListe.appendChild(newListItem)  
}

const itemToListListerner = ()=>{
  if(todoInput.value){
    todoListArray.push(todoInput.value)
    addItemToList(todoInput.value)
    window.localStorage.setItem("todoList", JSON.stringify(todoListArray))
    todoInput.value = ""
  }
}

todoAddButton.addEventListener("click",itemToListListerner)
todoInput.addEventListener("change",itemToListListerner)

todoListArray.forEach(x => {
  addItemToList(x)
})
