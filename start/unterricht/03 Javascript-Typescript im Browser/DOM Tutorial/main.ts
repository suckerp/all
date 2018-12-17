
//###############################################################################################
// Helper
//###############################################################################################

interface ArrayConstructor {
    from<T>(arrayLike:ArrayLike<T>): Array<T>;
}

//materialize 
let M :any


let list = document.getElementById("liste") as HTMLUListElement

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
  list.appendChild(newListItem)
}

fetch("https://jsonplaceholder.typicode.com/posts")
  .then(x => x.json())
  .then((posts:{title:string}[]) => posts.map(x => x.title))
  .then(titles => {
    titles.forEach((title) => {
      addItemToList(title)
    })
  })


