//###############################################################
//#### javascript/Typescript Object Literal (ReferenzType)
//###############################################################
{

    const person = { 
        NachName:"Mustermann",
        VorName:"Max",
        Alter: 33,

        Adresse:{
            Strasse:"Musterstrasse",
            Hausnummer:4
        },

        Kinder: []
    }


//###############################################################
//#### Types
//###############################################################


    type Adresse = {
        Strasse:string,
        Hausnummer:number
    }

    type Person = {
        NachName:string,
        VorName:string,
        Alter: number,
        Adresse:Adresse,
    }

    function AlterVonPerson(pers:Person):number{
        return pers.Alter
    }




    type Posten = {
        Bezeichnung:string, 
        Preis:number,
        Menge:number
    }

    const einkauf : Posten[]  = [
        {Bezeichnung:"Butter", Preis:1.22, Menge:10},
        {Bezeichnung:"Wasser", Preis:2.33, Menge:5}
    ]

    function EinkaufGesamtPreis(einkauf:Posten[]){
        let summe:number = 0
        for(let posten of einkauf){
            summe += posten.Menge * posten.Preis
        }
        return summe
    }

    EinkaufGesamtPreis(einkauf) //?



    const EKGesamtPreis = 
        (einkauf:Posten[]) => 
            einkauf
                .map(x => x.Menge*x.Preis)
                .reduce((acc,val) => acc+val,0)

    EKGesamtPreis(einkauf) //?


//###############################################################
//#### Destructuring und SpreadOperaor
//###############################################################

    const { VorName,NachName } = person

    VorName
    NachName

    const User01 = { ...person , Passwort:"******" } 

    User01.Passwort //?

    function getPasswort({ Passwort }){
        return Passwort
    }

    getPasswort(User01) //?


//###############################################################
//#### Sum Type
//###############################################################

    type User = Person & { Passwort:string }

    let user2 : User

}



//###############################################################
//#### Union Type
//###############################################################

{
    type Schwierigkeitsgrad = "leicht" | "mittel" | "schwer"

    // vorschlag vom compiler "leicht" , "mittel" , "schwer"
    const schwierigkeit : Schwierigkeitsgrad = "mittel" 

    
    type Person = string
                | {name:string} 
                | {vorname:string,nachname:string}


    function hasName(name:Person): name is {name:string}{
        return (<{name:string}>name).name !== undefined
    }


    function logName(person:Person){
        if(hasName(person)){
            return person.name

        } else if(typeof person === "string"){
            return person

        } else {
            return person.vorname + " " + person.nachname
        }
    }

    console.log(logName("Max Mustermann")) 
    console.log(logName({vorname:"Max", nachname: "Mustermann"})) 
    console.log(logName({name:"Max Mustermann"})) 
}


//###############################################################
//#### Union Type
//###############################################################

const wörterbuch = {
    A:"wert1",
    B:"wert2"
}

const wert = wörterbuch["A"]
wert
