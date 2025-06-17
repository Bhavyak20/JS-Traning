//callback function

function seasons(season1,season2,season3){
  console.log(`we see ${season1} in Month of decmber`)
  console.log(`we see ${season2} in the month of March`)
}


function months (month1,month2,month3,callback){
callback(("winter","summer","rainy"))
console.log(`we gave three months in this function they are ${month1},${month2},${month3}`)
}
months("December","March","July",seasons)


//example-2

let transports=function(type1,type2,type3,call){
    call("Track")
console.log("we have three types of transports they are:" +[type1,type2,type3])
}
transports("Road","Water","Air",function(type4){
  console.log(`we have another type of transport that is ${type4}`)
})

//example-3

let gadgets=((gadget1,gadget2,gadget3,callbackfn)=>{
 console.log(`we often use ${gadget1} for communication in calls`);
 callbackfn("Headset","Ear buds")
})
gadgets("Mobile","Laptop","Tab",((gadget4,gadget5)=>{
   console.log("we use two types of gadgets as ear plugs:", gadget4 , gadget5)
}))