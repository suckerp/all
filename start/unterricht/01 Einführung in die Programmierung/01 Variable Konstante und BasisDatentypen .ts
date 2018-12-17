

//###############################################################
//#### const,let,var
//###############################################################

// <const,let,var> <name> : <datentyp> = <wert>

// deklaration und initialisierung von halloWeltVar
let halloWeltVar  = "" 

// zuweisung eines neuen Wertes für halloWeltVar
halloWeltVar = "Hallo Welt"
halloWeltVar


const halloWeltConst  = "Hallo Welt" 
// Konstanten können nicht neu zugewiesen werden
// halloWeltConst = "" wird als fehler erkannt
halloWeltConst


//###############################################################
//#### Gültigkeitsbereiche
//###############################################################



let testVal_A = 0

{
    let testVal_A = 1
    testVal_A
}

testVal_A


{
    testVal_A = 1
    testVal_A
}

testVal_A

{
    let testVal_B = 2
}

// testVal_B fail




//###############################################################
//#### Ausgabe 
//###############################################################

{
    const hallo = "hallo Welt"

    // mit Quokka
    hallo

    //consolenausgabe
    console.log(hallo)
    console.log("hallo Welt")

}



//###############################################################
//#### string
//###############################################################
{
    let  zeichenkette : string 

    zeichenkette = ""
    zeichenkette

    zeichenkette = "hallo Welt" 
    zeichenkette

    const buchstabe = zeichenkette[0] 
    buchstabe

    const länge = zeichenkette.length 
    länge

    zeichenkette = "Hallo " + "Welt " 
    zeichenkette

}


//###############################################################
//#### interpulation
//###############################################################

{
    let Max = "Max Mustermann"
    let HalloMax = `Hallo:  ${Max}`
    HalloMax
}


//###############################################################
//#### boolean
//###############################################################
{
    let wahrheitsWert : boolean = true 

    // und
    wahrheitsWert = true  && true  
    wahrheitsWert

    wahrheitsWert = true  && false 
    wahrheitsWert

    wahrheitsWert = false && false 
    wahrheitsWert


    // oder 
    wahrheitsWert = true  || true  
    wahrheitsWert

    wahrheitsWert = true  || false 
    wahrheitsWert

    wahrheitsWert = false || false 
    wahrheitsWert

    // nicht
    wahrheitsWert = !true 
    wahrheitsWert

    wahrheitsWert = !false 
    wahrheitsWert



    wahrheitsWert = ( true || false ) && false 
    wahrheitsWert

    wahrheitsWert =  true || (false  && false) 
    wahrheitsWert
}

// Aufgaben 01 Boolsche Algebra


//###############################################################
//#### number
//###############################################################
{
    let nummer :number 

    nummer = 1 
    nummer
    
    nummer = 1.1 
    nummer
    
    nummer = 1 + 1 
    nummer
    
    nummer = 1.1 + 1 
    nummer
    
    nummer = 1 - 1 
    nummer
    
    nummer = 2 * 2 
    nummer
    
    nummer = 4/3 
    nummer
    
    nummer = 0/0 
    nummer
    
    nummer = 1/0
    nummer

    //rest einer Division
    nummer = 3%2
    nummer
    
}

// Aufgaben Elektrotechnik



//###############################################################
//##### Basistypen umwandeln
//###############################################################
{
    // eingaben: true false  "" "1" "hallo" 1 0

    const irgendwas : any = true

    const wahrheitswert =  Boolean(irgendwas) 
    wahrheitswert

    const nummer =  Number(irgendwas) 
    nummer

    const zeichenkette = String(irgendwas) 
    zeichenkette
}


//###############################################################
//#### Vergleich  <= ,  >= , == , === , < , > , != , !==
//###############################################################

{
    const  nummer         : any =  1
    const  zeichenkette   : any = "1"

    let wahrheitsWert:boolean


    // vergleich ohne bezug auf Typensystem
    wahrheitsWert = zeichenkette == nummer
    wahrheitsWert

    wahrheitsWert = zeichenkette != nummer
    wahrheitsWert

    // vergleich mit bezug auf Typensystem
    wahrheitsWert = zeichenkette === nummer
    wahrheitsWert

    wahrheitsWert = zeichenkette !== nummer
    wahrheitsWert


    wahrheitsWert = 1 <= 2 
    wahrheitsWert

    wahrheitsWert = 2 >= 1 
    wahrheitsWert

    wahrheitsWert = 1 < 2 
    wahrheitsWert

    wahrheitsWert = 1 > 2 
    wahrheitsWert

}





//###############################################################
//##### undefind oder default
//###############################################################

let undef = "hallo"

let def = undef || "nichts eingegeben"

def






