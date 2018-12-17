{
    function divisionsRest(zahl:number, teiler:number):number{
        if(zahl >= teiler) {
            return divisionsRest(zahl-teiler,teiler)
        } else {
            return zahl
        } 
    }

    
    const rest = divisionsRest(14,7)
    rest
    
}