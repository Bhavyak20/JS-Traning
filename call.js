// let gadgetdetails={
//     name:"gadgets",
//     howmany:3,
//     accessories:function(secondargument,thirdargument){
//         this.first="pp"
//       console.log(`i have ${this.first} in my home`)
//       console.log(thirdargument)
//       console.log(`I have ${this.second} and the brand is ${this.name}.`)
//     }
// }
// //gadgetdetails.accessories("mobile","laptop","headset")

// let mobiles={
//     first:"phone",
//    second:"lapii",
//    name:"lenovo",
   
// }
// let mackbook={
//     name:"apple",
//     origin:"USA",
// }
// //gadgetdetails.accessories.call(mackbook,["lap","headset"])
// gadgetdetails.accessories.apply(mobiles, ["laptop","headset"])


// //using call

// let seasons={
//     season1:"winter",
//     name:"fav",
//     months:function(){
//         this.howmanymonths="4"
        
//         console.log(this.howmanymonths)
//         console.log(`${this.season1} will come in January`)
//         console.log(`${this.name} will start in the year`)
//     }
// }

// let season2={
//     name:"summer",
//     startmonth:"March",
// }
// seasons.months()
// seasons.months.call(season2)

//using apply

// let zoo={
//     totalzones:2,
//     zone2:function(parameter1,parameter2){
//      console.log(`we have ${parameter1} in zone1`)
//      console.log(this.howmany)
//      console.log(`there are ${this.wateranimals} in the zoo park`)
//      console.log(`there are ${this.flying} in the zoo park`)
//      console.log(this)
//     }
// }

// let water={
//     wateranimals:"fishes",
//     howmany:"infinity",
    
// }

// let birds={
//     flying:"peacock",
//     count:"somany"
// }
// //zoo.zone2("wild animals","domestic animals")
// //zoo.zone2.call(water,"wild animals","domestic animals")
// //zoo.zone2.apply(birds,["wild animals","domestic animals"])
// console.log(zoo.zone2.bind(water, "wild animals","domestic animals"))

let obj={
   totalcompanies:3,
   firstcompanay:function(name,location,numofbranches){
    this.employeeID=12345;
    this.project="Prod"
    console.log(`I'm currently working in ${name} and location is ${location}.There are total ${numofbranches} branches`)
    console.log(`My project is ${this.project}`)
    console.log(`My second otion is ${this.companyname}`)
   }
}
let secondacompaany={
    companyname:"TCS",
    locationofsecondcompany:"Banglore"
}
//obj.firstcompanay("DXC","HYD","3")

//obj.firstcompanay.call(secondacompaany,"DXC","HYD","3")
//obj.firstcompanay.apply(secondacompaany,["DXC","HYD","3"])
console.log(obj.firstcompanay.bind(secondacompaany,"DXC","HYD","3"))