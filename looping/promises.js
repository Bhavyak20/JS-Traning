
// //example-1 using varaibale function
// let myPromise = new Promise((resolve,reject)=>{
//     let myname="bhavya";
//     if(myname == "bhavya"){
//     resolve("Her name is Bhavya")
//     }
//     else{
//         reject("her name is not mentioned")
//     }
// })

// myPromise.then((result)=>{
//     console.log(result)
// }).catch((error)=>{
//        console.log(error)
// })
// //example-2 using named function

// function mypromise (){
//     return new Promise((resolve, reject) => {
//         let name= "bhavya";
// if (name != "bhavya") {
//     resolve("her name is true")
// }
// else{
//     reject("her name is flase")
// }
//     })

// }
// mypromise().then((success)=>{
// console.log(success)
// }).catch((Fail)=>{
// console.log(Fail)
// })

let car1 = new Promise((resolve, reject) => {
    let name = "tata"
    if (name == "tata") {
        resolve("TATA")
        //console.log("TATA is good car")
    }
    else {
        reject("no car details")
    }

})
let car2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("KIA")
        // console.log("KIA is made in INDIA")
    }, 5000)

})

// car1.then((success)=>{
//     console.log(success)
//     return car2
// }).catch((fail)=>{
//     console.log(fail)

// }).then((two)=>{
//   console.log(two)
// })


async function cardetails() {
    // return new Promise((resolve, reject) => {
    //     resolve("More car details")
    await car1.then((one) => {
        console.log(one)
    }).catch((fail) => {
        console.log(fail)
    })

    await car2.then((two) => {
        console.log(two)
    })
    console.log("More car details")
}

cardetails()