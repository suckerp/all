class BaseClass{
    constructor(){
        console.log("BaseClass constructor")
    }
    toString(){
        return "hallo BaseClass"
    }

}

class ChildClass extends BaseClass{
    constructor(){
        super()
        
    }

    toString(){
        return "hallo ChildClass"
    }
}


console.log("hallo")



class Person {
    constructor(
        public Nachname:string,
        public Vorname:string
    ){}

    tostring(){
        return this.Vorname + " " + this.Nachname
    }
}

class User extends Person {

    constructor(
        Nachname:string,
        Vorname:string,
        public  email:string
    ){
        super(Nachname,Vorname)
    }

    tostring(){
        return `
            Vorname: ${this.Vorname} \n
            Nachname: ${this.Nachname} \n
            Email: ${this.email} \n
        `
    }
}



const max = new Person("Mustermann","Max")

console.log(max.tostring())

const usermax: Person = new User("Mustermann","Max","Max@Mustermann.de")

console.log(usermax.tostring())


