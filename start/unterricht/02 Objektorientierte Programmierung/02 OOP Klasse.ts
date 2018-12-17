
class Datum {
    Jahr:number
    Monat:number
    Tag:number
}

class Person {

/*
    public Vorname:string
    public Nachname:string
    private Geburtstag:Datum

    constructor(vorname:string,nachname:string){
    
        this.Vorname = vorname
        this.Nachname = nachname
    }

*/
    constructor(
        public Vorname:string,
        public Nachname:string,
        private Geburtstag:Datum
    ){}

    public Name(){
        return this.Vorname + " " + this.Nachname
    }
}

const maxGeburtsdatum = new Datum()
maxGeburtsdatum.Tag = 4
maxGeburtsdatum.Monat = 11
maxGeburtsdatum.Jahr = 2000

const max = new Person("Max","Mustermann",maxGeburtsdatum)
const tim = new Person("Tim","Mustermann",{
    Tag: 7,
    Monat:4,
    Jahr:1980
})






console.log(max.Name())


const array = new Array(1,2,3,4,5,6,7)

console.log(array.length) 




