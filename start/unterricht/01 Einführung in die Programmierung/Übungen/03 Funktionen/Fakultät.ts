{
    function fakultät (num:number):number{
        if(num <= 1 ){
            return 1
        } else {
            return num * fakultät(num-1)
        }   
    }

    const summe = fakultät(10) 
    summe
    
}
