// // // //synchornous call has default function to add some timeinterval to print output.
// // // //synchr call using callback function and hellcallback .it is complicated.

// function sleep(){

// var startTime = new Date().getTime();
// var endTime= startTime + 5000

// while(new Date().getTime() < endTime){
//     //console.log("wait for 5 seconds")
// }
// }
// // // //test example
// // // // // function test(){
// // // // //     sleep();
// // // // //     console.log("test")
// // // // // }
// // // // // test()
// // // //example-1
// function myname (callback){
//     sleep();
//     console.log("bhavya")
//     callback()
// }
// function hername(callhell){
     
//     console.log("Her name is Deepaa")
//      sleep();
//     callhell()
// }
// function hisname(){
//     console.log("His name is gopi")
// }

// myname(()=>{
//     hername(()=>{
//         hisname()
//     })
// })

// // // //example-2
// // // function peep(millisecs){
// // //     let startTime = new Date().getTime();
// // //     let endTime = startTime + millisecs;
// // //     while(new Date().getTime() < endTime);{

// // //     }
// // // }


// // // function trail(callback){
   
// // //     console.log("Trail1")
// // //      peep(5000)
// // //     callback()
// // // }
// // // function secondtrail(call){
// // //     console.log("Trail 2")
// // //      peep(10000)
// // //     call()
// // // }
// // // function thirdtrail(){
    
// // //     console.log("Trail 3")
// // //     peep(4000)
// // // }

// // //  console.time("total time")
// // // trail(()=>{
// // //     secondtrail(()=>{
// // //         thirdtrail()
// // //     })
// // // })
// // // console.timeEnd("total time")

// //sync call in callback hell
function peep(millisecs){
    let startTime = new Date().getTime();
    let endTime = startTime + millisecs;
    while(new Date().getTime() < endTime);{

    }
}
function years(callback){
    peep(3000);
    console.log("there are total 12 montsh in a year")
    callback()
}
function months(call){
      peep(2000);
    console.log("theer are total 4 weeks in a month")
    call()
}
function weeks(){
      peep(6000);
    console.log("theer are 7 days in a week");
}

console.time("time taken")
years(()=>{
    months(()=>{
        weeks()
    })
})
console.timeEnd("time taken")

//example
function stepone(callback){
    setTimeout(()=>{
     console.log("Printing step 1")
     callback()
    },10000)
}
function steptwo(call){
    setTimeout(()=>{
     console.log("Printing step 2")
     call()
    }, 2000)
}
function stepthree(){
    setTimeout(()=>{
         console.log("Printing step 3")
    },6000)
    
}
stepone(()=>{
    steptwo(()=>{
        stepthree()
    })
})
