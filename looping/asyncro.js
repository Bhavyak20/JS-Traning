//async call is easy to understand and fast to execute
//it will execute whole block at a time with not like sync call


function years(){
  setTimeout(()=>{
    console.log("there are total 12 montsh in a year")
  },5000)
    
    
}
function months(){
     
    console.log("theer are total 4 weeks in a month")
    
}
function weeks(){
     setTimeout(()=>{
        console.log("theer are 7 days in a week")
     },2000)
    //console.log("theer are 7 days in a week")
}
years();
months();
weeks();

// //example
// function StepOne() {
//     //sleep(5000);
//         setTimeout(() => {
//         console.log("Step One");
//     }, 7000)
// }


// function StepTwo() {
//     //sleep(10000);
    
//     setTimeout(() => {
//         console.log("Step Two");
//     }, 2000)

// }

// function StepThree() {
//     //sleep(7000);
//     setTimeout(() => {
//         console.log("Step Three");
//     }, 1000)
// }

// console.time("MyTaskTime");
// StepOne()
// StepTwo()
// StepThree()
// console.timeEnd("MyTaskTime")

