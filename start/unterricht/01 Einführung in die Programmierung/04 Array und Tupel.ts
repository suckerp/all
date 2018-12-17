
//###############################################################
//#### Tupel / Array
//###############################################################
{
    const array : number[] = [1,2,3,4] 
    array

    const zahl = array[1]
    zahl

    const tupel :[number,string,boolean] = [1,"drei",true] 
    tupel

    const wert = tupel[2]
    wert


    const Einkauf = [
        ["Äpfel",3],
        ["Butter",2],
        //...
    ]
    Einkauf

    const produkt = Einkauf[0] 
    produkt

    //produkt[0][0]

    

}
//###############################################################
//#### Elemente einfügen
//###############################################################
{
    let array: number[] = []

    array[0] = 0
    array[1] = 1
    array[5] = 5

    array
}


//###############################################################
//#### ReferenzTypen vs WerteTypen
//###############################################################

{
    //###############################################################
    //#### Vergleich 
    //###############################################################

    //WerteTypen string number boolean ...
    
    const WerteType_A:string = "hallo"
    const WerteType_B:string = "hallo"

    console.log(WerteType_A === WerteType_B)

    //ReferenzTypen array tupel ...

    const ReferenzType_A:[string,number] = ["Brot",3]
    const ReferenzType_B:[string,number] = ["Brot",3]

    console.log(ReferenzType_A === ReferenzType_B)

    //wertmäßiger Vergleich über Einzelteile
    //import * as deepEqual from "deep-equal";

}

{
    //###############################################################
    //#### Zuweisung 
    //###############################################################

    //WerteTypen 

    let WerteType_A:string = "hallo"
    let WerteType_B:string = WerteType_A

    WerteType_A
    WerteType_B

    WerteType_A = "hallo Welt"

    WerteType_A
    WerteType_B

    

    //ReferenzTypen

    const ReferenzType_A:[string,number] = ["Brot",3]
    const ReferenzType_B:[string,number] = ReferenzType_A

    ReferenzType_A
    ReferenzType_B

    ReferenzType_B["0"] = "Wasser"

    ReferenzType_A
    ReferenzType_B
   

}



//###############################################################
//#### Spread-Operator und Destructuring
//###############################################################

{
    const array1 : number[] = [1,2,3,4] 
    const array2 = [ 0 , ...array1 , 5] 

    const [ position1 , position2, ...restArray ] = array2

    position1
    position2
    restArray


}


//###############################################################
//#### Array und  rekursive Funktionen
//###############################################################

{
    const namen = ["Tim", "Max", "Susi"]

    function hallo(namen:string[]){
        const [erster, ...rest ] = namen
        console.log("hallo " + erster)
        if(rest.length > 0)
            hallo(rest)
    }

    hallo(namen)



    function verkette(namen:string[]){
        const [erster, ...rest ] = namen
        if(rest.length > 1)
            return erster + ", " + verkette(rest)
        else 
            return erster + " und " + rest[0]
    }

    console.log(`Hallo ${verkette(namen)}`) 
}



//Aufgaben: 
//      Summe und Produkt rekursiv
//      

