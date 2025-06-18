// //asyncronous call

// function cycle(cyclebrand,cyclecolour){
//    setTimeout(()=>{
// console.log(`I  used to have ${cyclebrand} cycle in my childhood,which is ${cyclecolour} colour.`);
//  },7000)
// }

// function bike(bikebrand,bikecolour){
// setTimeout(()=>{
// console.log(`I  used to have ${bikebrand} in my college,which is ${bikecolour} colour.`);
// },3000)   
// }

// function car(carbrand,carcolour){
//   setTimeout(()=>{
// console.log(`I have ${carbrand} now,which is ${carcolour} colour.`);
//   },1000)
// }
// console.time("Time taken")
// cycle("Lady Bird","Pink");
// bike("Enfield","Black")
// car("Audi","Blue");
// console.timeEnd("Time taken")

//asyncwait

//in async wait we use promises
//promise is a cinstructor function where we use two paarmeters resolve and reject

let promise = new Promise((resolve, reject) => {
    let myname = "Bhavya";
    if (myname == "Bhavya") {
        console.log("name is correct")
        resolve("Bhavya")
    }
    else {
        reject("Incorret name")
    }
})

let  friend2= new Promise((resolve,reject)=>{
resolve("aditya")
})
    


async function friend() {
    // return new Promise((resolve,reject)=>{
    //     resolve("Adhvik")
   await promise.then((correct) => {
        console.log(correct)
    }).catch((incorrect) => {
        console.log(incorrect)
})
  await friend2.then((two)=>{
        console.log(two)
        }).catch((fail)=>{
            console.log(fail)
        })
console.log("My friend name is adhvik")
}
friend()
// promise.then((correct)=>{
//    console.log(correct)
// }).catch((incorrect)=>{
// console.log(incorrect)
// })