

const hour = document.getElementById("hour") as HTMLElement

let test = 0

setInterval(()=>{
    
    hour.setAttribute('transform', `rotate(${test++}, 100, 100)`)
},10)



