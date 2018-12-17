{
    function wochentagname(ersterMontagImJahr:number,tagImJahr:number):string {
        
        const wochentagNummer:number = tagImJahr % 7 + ersterMontagImJahr - 1

        switch ( wochentagNummer) {
            case 1: 
                return `Montag`

            case 2: 
                return `Dinstag`
                
            case 3: 
                return `Mittwoch`
                
            case 4:
                return `Donnerstag`
                
            case 5: 
                return `Freitag`
                
            case 6: 
                return `Samstag`
                
            case 0: 
                return `Sontag`    
        } 
    }


    const tag = wochentagname(1, 32 * 7 + 1)

    tag
}


{
    function wochentagname2(ersterMontagImJahr:Number,tag:number){

    }
}