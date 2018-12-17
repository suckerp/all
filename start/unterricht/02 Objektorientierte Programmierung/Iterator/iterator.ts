

const personen = ["max","john","Lisa"]

for(let person of personen){
    person
}

const  iterator = personen[Symbol.iterator]()

let next

next = iterator.next()
next

next = iterator.next()
next

next = iterator.next()
next

next = iterator.next()
next

class RandomNumbers implements Iterable<number> {

    constructor(
        private min:number,
        private max:number,
        private count:number
    ){}

    [Symbol.iterator]() {

        function randomMinMax():number{
            return Math.round(
                (Math.random() * (this.max - this.min) ) + this.min
            )
        }
        const _this = this

        let _count = this.count

        return {
            next():IteratorResult<number> {
                if(_count-- > 0)
                    return { 
                        value:randomMinMax.call(_this) , 
                        done: false
                    }
                else 
                    return { value : undefined , done:true}
            }
        }
    }
}


const randomNum = new RandomNumbers(10,50,5)

for(let num of randomNum){
    num
}