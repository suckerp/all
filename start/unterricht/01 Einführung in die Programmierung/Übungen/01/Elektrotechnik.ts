//gegeben const
//gesucht let

//############################################################################################
/*
    Muster
        gegeben:
            A = 10
            B = 5
        gesucht: 
            Summe C 
*/

{
    const A:number = 10
    const B:number = 5

    let C :number

    C = A + B
   
    console.log( A + " plus " + B + " ist " + C)
}


//############################################################################################
/*
    Netzteil
        gegeben:
            Stromspannung U = 230 Volt (V)
            Leistung P = 950 Watt (W)

        gesucht: 
            Stromstärke I in Ampere (A)
*/
{
    const U = 230
    const P = 950
    
    let I :number 

    I = P/U
    I

    console.log("Die Stromstärke berägt " + I + " Ampere")
}




//############################################################################################
/*
    Stab-Mixer

        gegeben:
            Stromspannung U = 12 Volt (V)
            Ausgangsleistung P_aus = 400 Watt (W)
            Wirkungsgrad n = 78%

        gesucht: 
            Eingangsleistung P_ein in Watt
            Stromstärke I in Ampere (A)

        P = U * I
        I = P/U

*/
{
    const U = 12
    const P_aus = 400
    const n = 78/100

    let P_ein :number
    let I :number

    P_ein = P_aus/n
    I = P_ein/U
    I

    console.log("Die Stromstärke berägt " + I + " Ampere")
}



//############################################################################################
/*
    Sie sollen einen Klassenraum mit 15 PC`s bestücken.
    Das Netzteil hat eine Eingangsleistung 650W.
    Wie hoch ist der Gesamtstrom ?

        gegeben:
            Stromspannung U = 230 Volt (V)
            Eingangsleistung (pro PC) P = 650 Watt (W)
            Anzahl = 15
        
        gesucht:
            P_ges, I

*/

{
    const U = 230
    const P = 650
    const Anzahl = 15

    let P_ges :number
    let I :number

    P_ges = P * Anzahl
    P_ges

    I = P_ges/U
    I 

    console.log("Die Stromstärke berägt " + I + " Ampere")
}


