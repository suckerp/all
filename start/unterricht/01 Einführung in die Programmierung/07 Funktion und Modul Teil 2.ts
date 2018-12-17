
//###############################################################
//#### lambda funktion
//###############################################################
{
    const Plus =  (summand1 : number, summand2 : number ) => summand1 + summand2

    const Minus = (summand1 : number, summand2 : number ) => {
        return summand1 - summand2
    }

    const summe = Plus(1,1) 
    summe
    const diverenz = Minus(1,1) 
    diverenz
}

    
//###############################################################
//#### function höherer ordnung 
//#### lambda funktion
//#### callbacks
//###############################################################
{
    //###########################################################
    //#### Funktion als Rückgabewert
    //###########################################################

    function erstelleHalloWelt():Function{
        return () => { console.log("Hallo Welt") }
    }

    //erstelleHalloWelt()()
    const halloWelt = erstelleHalloWelt()

    halloWelt()

    //###########################################################
    //#### Funktion als Eingabeparameter
    //###########################################################


    function ausführen( callback:Function ){
        callback()
    }

    ausführen(function(){ console.log("Hallo") })
    ausführen(() => { console.log("Hallo") })
    
}

//###############################################################
//#### map filter reduce
//###############################################################
{
    const array = [1,2,3,4,5,6,7,8,9,10]


    const filterArray = array.filter( x => x > 5 ) 
    filterArray
    
    
    const mapArray = array.map( x => x + 4 )
    mapArray
    
    
    const reduceArray = array.reduce( (acc , val) => acc + val , 10 )
    reduceArray
}


//#################################################################
// Currying
//#################################################################

{
    let summe : number
    let plus : (x:number) => (y:number) => number


    plus = function(x:number){
        return function(y:number){
            return x + y
        }
    }

    plus = (x) => (y) => x + y

    summe = plus(4)(7)
    summe

    const plus_10 = plus(10)
    plus_10

    summe = plus_10(5)
    summe
}


{
    const Einkauf: [string,number][] = [
        ["Äpfel",3],
        ["Äpfel",7],
        ["Brot",4],
        ["Butter",2],
        ["Brot",2]
    ] 

    const produktFilter = (produktname:string) => 
        (posten:[string,number]) => posten[0] === produktname

    const Äpfel = Einkauf
        .filter( produktFilter("Brot") )
        .reduce( (acc,val) => acc + val[1], 0)

    Äpfel


}



//###############################################################
//#### Functionen Optionale Parameter und ParameterArray
//###############################################################
{
    let result

    function functionMitOptional(value = 0){
        return value
    }



    result = functionMitOptional() 
    result
    result = functionMitOptional(4) 
    result


    function functionMitParameterArray(...parameterarray){
        for(let i of parameterarray){
            i
        }
    }

    functionMitParameterArray(1,2,3,4)



//###############################################################
//##### Array.of , Array.from
//###############################################################

    result = Array.of<any>(1,2,3,4,5) 
    result 

    result = Array.from("hallo welt") 
    result

}
//##############################################################################
//#### String: fromCharCode, Trim, toLowerCase , toLocaleUpperCase ...
//##############################################################################
{
    const zeichenkette = "abcde"

    const charCode = zeichenkette.charCodeAt(0) 
    charCode

    const zeichen = String.fromCharCode(97) 
    zeichen


}
