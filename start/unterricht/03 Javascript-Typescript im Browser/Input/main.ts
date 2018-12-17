

const inputField1 = document.getElementById("input1") as HTMLInputElement
const inputField2 = document.getElementById("input2") as HTMLInputElement

inputField1.addEventListener("input",() => {
    inputField2.value = inputField1.value
})

inputField2.addEventListener("input",() => {
    inputField1.value = inputField2.value
})














