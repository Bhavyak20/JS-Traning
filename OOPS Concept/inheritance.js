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

let kid2=new daughter("soft","fair");
kid2.motherdetails()//by using super keyword we accessed motherdetails in daughter class
kid2.daughterdetails()