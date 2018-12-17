{
    function berechneProdukt(feld:number[]){
        let summe = 1
        for(let i of feld ){
            summe = summe * i
        }
        return summe
    }
    
    const ZahlenArray = [2, 17, 10, 9, 16, 3, 9, 16, 5, 1, 17, 14]

    const produkt = berechneProdukt(ZahlenArray) 

    produkt
}