//async call is easy to understand and fast to execute
//it will execute whole block at a time ... not like sync call


//example-3

function car1 (){
  setTimeout(()=>{
   console.log("My first car is TATA")
  },8000)

}
function car2 (){
  setTimeout(()=>{
  console.log("My second car is KIA")
  },2000)
  
}
function car3(){
  setTimeout(()=>{
   console.log("My dream car is Audi")
  },1000)
 
}

car1();
car2();
car3();

// function years(){
//   setTimeout(()=>{
//     console.log("there are total 12 montsh in a year")
//   },5000)
    
    
// }
// function months(){
     
//     console.log("theer are total 4 weeks in a month")
    
// }
// function weeks(){
//      setTimeout(()=>{
//         console.log("theer are 7 days in a week")
//      },2000)
//     //console.log("theer are 7 days in a week")
// }
// years();
// months();
// weeks();

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

