
//###############################################################
//#### Enum
//###############################################################
{

    enum Zahl {
        Eins = 1,
        Zwei = 2
    }

    const zahl = Zahl.Zwei
    zahl

    enum Wochentag {
        Montag = "Montag",
        Dinstag = "Dinstag",
        //...
    }

    const  wochentag = Wochentag.Dinstag 
    wochentag


    enum Schalter {
        Aus,
        Ein
    }

    const schalter = Schalter.Ein


    function istSchalterAus(e:Schalter){
        if(e === Schalter.Aus){
            return true
        } else {
            return false
        }
    }

    const schalterAus =  istSchalterAus(schalter)
    schalterAus
    
}