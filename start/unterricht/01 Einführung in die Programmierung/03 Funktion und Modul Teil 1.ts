
//###############################################################
//#### Sequenz (Procedure, Funktion)
//###############################################################






//###############################################################
//#### Funktion
//###############################################################

{
//  function name ( patameter1 : datentyp , patameter2 : datentyp ) : rückgabedatentyp  {...}
    function Plus ( summand1   : number   , summand2   : number   ) : number            {
        const summe =  summand1 + summand2
        return summe
    }
    const summe = Plus(1,1) 
    summe

}

{
    let summe : number = 1

    function addiereZuSumme(zahl:number){
        summe += zahl
    }

    summe

    addiereZuSumme(2)

    summe

    addiereZuSumme(2)

    summe

}

//Aufgabe : 
//   Teilbarkeit:    function istTeilbar(zahl:number, teiler:number):boolean
//   Wochentag:      function wochentagname(ersterMontagImJahr:number,tagImJahr:number):string


//###############################################################
//#### Programmablaufplan (PAP) 
//#### Aktivitätsdiagramm
//#### Nassi-Shneiderman-Diagramm / Struktogramme 
//#### Pseudocode
//###############################################################
/*
    Struktogramme : Verweis auf Unterverarbeitung (keine DIN)
    https://web.archive.org/web/20070928094836/http://wwwlrh.fh-bielefeld.de/IN_Prak/inprak6.ht

    Programmablaufplan : Unterprogramm
    http://www.holzers-familie.de/schule/book/pap.html

    Aktivitätsdiagramm : 
        zu einer Aktivität (viereck abgerundet) kann wiederum 
        ein Aktivitätsdiagramm erstellt werden

        zb Aktivität[ Wahre versenden ] = Aktivität[verpacken >> prüfen >> absenden ] 
*/

//###############################################################
//#### recursive Funktion
//###############################################################

{
    function Countdown( number:number ){
        console.log(number)
        if( number > 0 ) Countdown(number - 1)
    }

    Countdown(10)


    function summebisX(num:number){
        if(num <= 0 ){
            return 0
        } else {
            return num + summebisX(num-1)
        }   
    }

    const summe = summebisX(10) 
    summe

}


//Aufgabe 
//    Fakultät:                   function fakultät (num:number):number
//    Rest der Division ohne %:   function divisionsRest(zahl:number, teiler:number):number



//###############################################################
//#### namespace oder module
//###############################################################

namespace modulname {

    const Welt = "Welt"

    function hallo(){
        return "hallo"
    }

    export function halloWelt(){
        return hallo() + " " +Welt
    }

}

{
    const hallo = modulname.halloWelt()  
    hallo
}
    


//###############################################################
//#### Math
//###############################################################
{

    const gerundet = Math.round(3.666) 
    gerundet

    const abgeschnitten = Math.floor(3.666) 
    abgeschnitten

    const zufällig_zwischen_0_und_1 = Math.random() 
    zufällig_zwischen_0_und_1

    const zufällig_zwischen_0_und_10 = Math.random() * 10 
    zufällig_zwischen_0_und_10

    const zufällig_zwischen_20_und_30 =  (Math.random() * 10 ) + 20
    zufällig_zwischen_20_und_30

}

// Aufgabe:  function randomMinMax (min:number, max:number):number








