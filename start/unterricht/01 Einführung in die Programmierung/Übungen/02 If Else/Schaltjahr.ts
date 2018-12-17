
{
    const jahr = 2016

    if(jahr % 4 === 0){
        if(jahr % 100 === 0){
            if(jahr % 400 === 0){
                console.log(`${jahr} ist ein Schaltjahr`)
            } else {
                console.log(`${jahr} ist kein Schaltjahr`)
            }

        } else {
            console.log(`${jahr} ist ein Schaltjahr`)
        }

    } else {
        console.log(`${jahr} ist kein Schaltjahr`)
    }
}

{
    const jahr = 2016

    const A = jahr % 4 === 0
    const B = jahr % 100 === 0
    const C = jahr % 400 === 0

    const Schaltjahr = (A && !B) || (A && B && C)

    if (Schaltjahr) {
        console.log(`${jahr} ist ein Schaltjahr`)
    } else {
        console.log(`${jahr} ist kein Schaltjahr`)
    }

}