
const button = document.getElementById("button") as HTMLButtonElement
button.style.backgroundColor = "red"

button.addEventListener("click",()=>{
    if(button.style.backgroundColor === "red"){
        button.style.backgroundColor = "blue"
    } else {
        button.style.backgroundColor = "red"
    }
})










