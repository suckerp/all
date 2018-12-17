{
    function berechneSumme(feld:number[]){
        let summe = 0
        for(let i of feld ){
            summe = summe + i
        }
        return summe
    }

    const ZahlenArray = [2, 17, 10, 9, 16, 3, 9, 16, 5, 1, 17, 14]

    const summe = berechneSumme(ZahlenArray) 

    summe

}