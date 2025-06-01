// // //prototype
// // function trees(treename,treeage){
// //     //console.log(this)
// //     console.log(treename)
// //     this.ageoftree= treeage;
// //     console.log(`there is a tree in my house which is ${this.ageoftree} old and it's name is ${treename} `)

// // }
// // trees.prototype.plants=function(){
// //      console.log(this.ageoftree);
// //      //console.log(this)
// // }

// // let data=new trees("baniyan tree","50 years")
// // data.plants();


// //this using in global scope
// var day = "morning";
// var climate = "humid";
// console.log(this)

// //this using in obj context
// var obj = {
//     key: "home",
//     house: "individual",
//     numofhouses: 4,

//     details: function () {
//         console.log(`there are total ${this.numofhouses} in our village.`)
//         //console.log(this)
//     },
//     hello: function () {
//         console.log(`my house is ${obj.house}`)
//         console.log(obj.key)
//         console.log(this)
//     }
// }
// obj.details()
// obj.hello()

// //constructor function

// var filimindustry=function(name,acres){
//     this.owner="RAMOJI RAO"
//     this.acres=acres
//     console.log(`${name} is biggest filim city in asia`)
//     console.log(`${name} is owned by ${this.owner}`)
//     console.log("Ramoji filim city exists in", this.acres, "acres in Hyderabad")
//     console.log(this)
// }
// new filimindustry("RAMOJI FILIM CITY","1666")

// //arrow function
// // var shapes={
// //     shape:"rectangle",
// //     sides:4,
//     let details=()=>{
//         this.length="10";
//         this.breadth="5"
//         console.log("area of rectangle is:", this.length*this.breadth)
//         console.log(this.day)
//         console.log(this.climate)
//     }
// // }
// details()


//call//apply//bind
let rainbow=function(colours,howmany){
    this.howmany=howmany
console.log(`we see rainbow in rainy season and there are ${this.howmany} colours in it.`)
console.log(`rainy season starts in ${this.startmonths}`)
console.log(this)
}

let rainyseason={
    startmonths:"July",
    endmonths:"October"

}
//rainbow("VIBGYOR","7")
//rainbow.call(rainyseason,"VIBGYOR","7")
rainbow.apply(rainyseason,["VIBGYOR","7"])
console.log(rainbow.bind(rainyseason,"VIBGYOR","7"))
//let bind=(rainbow.bind(rainyseason,"VIBGYOR","7"))
//bind()


