//in below example we used extends keyword to use father class details in son class

// class father{
//     constructor(character,color,hair){
//     this.character=character;
//     this.eyecolor=color;
//     this.haircolour=hair
    
    
//     }
//     details(){
//         console.log("Hair colour of father is ", this.haircolour)
//         console.log(`Father has ${this.character} heartand his eye colour is ${this.eyecolor}`)
//     }
// }

// class son extends father{
//     sondetails(){
//         this.details()
        
//         console.log("Hair colour of son is ", this.haircolour)
//         console.log(`son has very ${this.character} nature.`)
//         console.log(`son has same eye colour as his father which is ${this.eyecolor}`)
//     }
// }

// // let fatherdetails=new father("Kind","Black","Brown")
// // fatherdetails.details()

// let kid1=new son("Kind","Black","Brown")
// kid1.sondetails()


//in below example we used super keyword to use daughter class details in mother class
//by using super keyword we accessed motherdetails in daughter class
class mother{
    constructor(character,tone){
        this.charcater=character;
        this.tone=tone;
    }
    motherdetails(){
        console.log(`mother has ${this.charcater} character`)
        console.log(`mother has ${this.tone} tone` )
    }
}

class daughter extends mother{
    constructor(character,tone){
        super(character,tone)
    }
    daughterdetails(){
        console.log(`daughter has same character as mother ${this.charcater}`)
        this.motherdetails()//by using super keyword we accessed motherdetails in daughter class
    }
}
// let details=new mother("Soft", "Fair")
// details.motherdetails()

let kid2=new daughter("kind","fair");
kid2.motherdetails()//by using super keyword we accessed motherdetails in daughter class
kid2.daughterdetails()

class car1{
    constructor(name,type,colour){
        this.carname=name;
        this.cartype=type;
        this.carcolour=colour;
    }

    cardetails(){
        console.log(`I bought new, car name is ${this.carname} and it ${this.cartype} which was in ${this.carcolour} colour`)
    }
}

class car2 extends car1{
    nextcardetails(){
            console.log(`I bought second car in next year which was ${this.cartype} and same ${this.carcolour}`)
    }

    
}
let firstcar=new car1("TATA","High end","Gray")
firstcar.cardetails();
let secondcar = new car2("TATA","High end","Gray")
secondcar.nextcardetails()