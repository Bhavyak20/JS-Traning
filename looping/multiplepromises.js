//multiple promises using named function

// function firstmovie(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log(" RRR is directed by SSR")
//             resolve("RRR");
//         }, 1000)
//     })
// }

// function secondmovie(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log(" BB is directed by SSR")
//             resolve("BB")
//             }, 3000)
            
//     })
// }
// function thirdmovie(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log(" EEGA is directed by SSR")
//             resolve("EEGA")
//         },1000)
//     })
// }
// Promise.all([firstmovie(),secondmovie(),thirdmovie()]).then((telugu)=>{
//     console.log(telugu)
// })

// // firstmovie().then((first)=>{
// //     console.log(first)
// //     return secondmovie();
// // }).then((second)=>{
// //     console.log(second)
// //     return thirdmovie()
// // }).then((third)=>{
// //     console.log(third)
// // })

// //multiple promises using variable function

// let musicdirectors= new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         console.log("A.R.RAHMAN is the music director of Bombay movie")
//         resolve("A.R.RAHMAN")
//     },3000)
// })

// let moviedirector= new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         console.log("MANI RATNAM is the  director of Bombay movie")
//         resolve("Mani Ratnam")
//     },1000)
// })
//  let movie = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         console.log("BOMBAY is an excellent movie")
//         resolve("BOMBAY")
//     })
//  })
// // musicdirectors.then((one)=>{
// //        console.log(one)
// //        return moviedirector
// // }).then((two)=>{
// //     console.log(two)
// //     return movie
// // }).then((three)=>{
// //     console.log(three)
// // })
// Promise.all([musicdirectors,moviedirector,movie]).then((test)=>{
//   console.log(test)
// })

//variables function with multiple promises

let seasons=new Promise((resolve,reject)=>{
    setTimeout(()=>{
console.log("Hellow winter");
    resolve("Winter")
    }, 3000)
    
})

let months= new Promise((resolve,reject)=>{
    setTimeout(()=>{
    console.log("heello December");
    resolve("December")
    }, 6000)
    
})

let weeks=new Promise((resolve,reject)=>{
    setTimeout(()=>{
     console.log("Hello Monday");
     resolve("Monday")
    },5000)
   
})

// seasons.then((one)=>{
//     console.log(one)
//     return months
// }).then((two)=>{
//     console.log(two)
//     return weeks
// }).then((three)=>{
//     console.log(three)
// })
Promise.all([seasons,months,weeks]).then((msg)=>{
 console.log(msg)
})

























// function getFirstAuthorDetails() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("✅ Task One Completed (4s)"); //emojipeida.org
//             resolve("RabindranathTagore")
//         }, 4000)
//     });
// }


// function getSecondAuthorDetails() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("✅ Task Two Completed (2s)"); //emojipeida.org
//             resolve("JKRoling")
//         }, 2000)
//     });
// }


// function getThirdAuthorDetails() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("✅ Task Two Completed (5s)"); //emojipeida.org
//             resolve("Arundhati Roy")
//         }, 5000)
//     });
// }
// //Usage
// //console.time("TimeStarts");

// getFirstAuthorDetails()
// .then((result) => {
//     console.log(result);
//     return getSecondAuthorDetails();
// })
// .then((getSecondAuthorDetailsResult) => {
//     console.log(getSecondAuthorDetailsResult);
//     return getThirdAuthorDetails()
// })
// .then((getThirdAuthorDetailsresult)=>{
//     console.log(getThirdAuthorDetailsresult);
//     //console.timeEnd("TimeStarts");
// })



// // Promise.all([getFirstAuthorDetails(),getSecondAuthorDetails(),getThirdAuthorDetails()]).then((notifications)=>{
// //     console.log(notifications);
// //     console.timeEnd("TimeStarts");
// // })