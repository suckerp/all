

//###############################################################
//#### if else
//###############################################################
{
    let wahrheitsWert:boolean = true

    if( wahrheitsWert ) {
        wahrheitsWert

    } else {
        wahrheitsWert
    }



    let buchstabe:string = "A"

    if( buchstabe === "A" ){
        console.log("A")

    } else if( buchstabe === "B" ) {
        console.log("B")

    } else {
        console.log("weder A noch B")
        
    }

}   // Aufgabe Teilbarkeit überprüfen


//###############################################################
//#### switch case
//###############################################################

{

    const zahl:number = 4
    switch ( zahl) {
        case 1:   
        case 2:
        case 3: console.log("drei")
            break
        default: console.log("default")

    }

    const buchstabe:string = "A"
    switch ( buchstabe) {
        case "A": console.log("A")
            break
        case "B": console.log("B")
            break
        case "C": console.log("C")
            break

    }

    const egal:any = true
    switch ( egal) {
        case 1: console.log("eins")
            break
        case "A": console.log("a")
            break
        case true: console.log("true")
            break

    }


}   // Aufgabe: Wochentage


//###############################################################
//#### Programmablaufplan (PAP) 
//#### Aktivitätsdiagramm
//#### Nassi-Shneiderman-Diagramm / Struktogramme 
//#### Pseudocode
//###############################################################
/*
    warum?
        -kann in beiden teilen der schriftliche prüfung vorkommen
        -leicht verdinte punkte

    Strukturierte Programierung (nur basiselemente)
        - Auswahl Selektion Verzweigung
        - Wiederholung/Iteration (Schleifen)
        - Sequenz (Procedure, Funktion)

    Pseudocode
        - basic/pascal style
        - java/c style
        - ungenormt
        - in der prüfung einfach TypeScript 


    Programmablaufplan (PAP)    
        https://www.hsg-kl.de/faecher/inf/algorithmus/pap/index.php
        https://de.wikipedia.org/wiki/Programmablaufplan

        - start und stop
        - Operation
        - verzweigung


    Aktivitätsdiagramm    
        https://msdn.microsoft.com/de-de/library/dd409360(v=vs.120).aspx

        - start und stop
        - Operation
        - verzweigung


    Nassi-Shneiderman-Diagramm / Struktogramme 
        https://web.archive.org/web/20070928094836/http://wwwlrh.fh-bielefeld.de/IN_Prak/inprak6.htm
        https://de.wikipedia.org/wiki/Nassi-Shneiderman-Diagramm
        https://www.hsg-kl.de/faecher/inf/algorithmus/struktogramm/index.php
        

        - Rahmen ???
        - Anweisung 
        - Verzweigung

*/ 
// 

/*  Aufgabe: 

        Wochentage und  Teilbarkeit überprüfen
            - Programmablaufplan (PAP) 
            - Aktivitätsdiagramm
            - Nassi-Shneiderman-Diagramm / Struktogramme 

*/


//###############################################################
//##### ternary operator
//###############################################################
{

    let wahrheitsWert = true

    let Elvis = (wahrheitsWert) ? "Ja" : "Nein"
    Elvis

}



