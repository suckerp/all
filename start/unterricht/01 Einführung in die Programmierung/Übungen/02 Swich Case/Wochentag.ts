
// Aufgaben: Wochentagname für (Tag im Jahr) ausgeben

{   

    const tagImJahr:number = 32 * 7 + 1

    const ersterMontagImJahr:number = 1
    const wochentagNummer:number = tagImJahr % 7 - (ersterMontagImJahr - 1)

    switch ( wochentagNummer) {
        case 1: 
            console.log(`Der ${tagImJahr} Tag im Jahr ist ein Montag`)
            break
        case 2: 
            console.log(`Der ${tagImJahr} Tag im Jahr ist ein Dinstag`)
            break
        case 3: 
            console.log(`Der ${tagImJahr} Tag im Jahr ist ein Mittwoch`)
            break
        case 4:
            console.log(`Der ${tagImJahr} Tag im Jahr ist ein Donnerstag`) 
            break
        case 5: 
            console.log(`Der ${tagImJahr} Tag im Jahr ist ein Freitag`)
            break
        case 6: 
            console.log(`Der ${tagImJahr} Tag im Jahr ist ein Samstag`)
            break
        case 0: 
            console.log(`Der ${tagImJahr} Tag im Jahr ist ein Sontag`)
            break
    }

    
}

