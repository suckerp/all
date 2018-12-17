function summeRekursive(feld:number[]){
    if(feld.length > 1){
        const [first, ... rest] = feld
        return first + summeRekursive(rest)
    } else return feld[0]
}

function produktRekursive(feld:number[]){
    if(feld.length > 1){
        const [first, ... rest] = feld
        return first * produktRekursive(rest)
    } else return feld[0]
}