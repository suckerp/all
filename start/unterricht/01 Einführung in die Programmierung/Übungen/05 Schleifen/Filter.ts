{

    function filterGrösserX(original:number[], zahl:number){
        let rückgabeArray : number[] = []
        for (let item of original){
            if(item > zahl){
                //rückgabeArray.push(item)
                rückgabeArray = [...rückgabeArray,item]
            }
        }
        return rückgabeArray
    }

    const array = [2, 17, 10, 9, 16, 3, 9, 16, 5, 1, 17, 14]

    const gefiltert = filterGrösserX(array,10) 

    gefiltert
}

{

    function filterGrösserX_rec(original:number[],  zahl:number){
        if(original.length > 0){
            const [head,...tail] : number[] = original
            if(head > 10){
                return [head,...filterGrösserX_rec(tail, zahl)]
            } else {
                return  filterGrösserX_rec(tail,zahl)
            }
        } else { 
            return []
        }
    }

    const array = [2, 17, 10, 9, 16, 3, 9, 16, 5, 1, 17, 14]

    const gefiltert = filterGrösserX_rec(array,10) 

    gefiltert
}