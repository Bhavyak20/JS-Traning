
//example-1 using varaibale function
let myPromise = new Promise((resolve,reject)=>{
    let myname="bhavya";
    if(myname == "bhavya"){
    resolve("Her name is Bhavya")
    }
    else{
        reject("her name is not mentioned")
    }
})

myPromise.then((result)=>{
    console.log(result)
}).catch((error)=>{
       console.log(error)
})
//example-2 using named function

function mypromise (){
    return new Promise((resolve, reject) => {
        let name= "bhavya";
if (name != "bhavya") {
    resolve("her name is true")
}
else{
    reject("her name is flase")
}
    })

}
mypromise().then((success)=>{
console.log(success)
}).catch((Fail)=>{
console.log(Fail)
})

