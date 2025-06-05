// let trail=function(callback){
// callback()

// }
// trail(()=>{
//     console.log("hellow world")
// })


// let maths=function(callbackfn){
// callbackfn(5,10)
// }

// maths((a,b)=>{
//    console.log(b / a)
//    console.log(a * b)
//    console.log(a + b)
// }
// )


// let shapes=function(one,two,more){
// more(100,50)
// console.log("circle has radius and diameter");
// console.log("square has 4 sides")
// }

// shapes("circle","square",(length,breadth)=>{
//     //  length="100";
//     //  breadth="50";
//      console.log("area of the rectangle is equal to:", length * breadth)
// })



// let seasons=function(season1,season2,more){
//     more("Rainy season")

// }
// seasons("winter","summer",(season3,month="July",climate)=>{
// //    season3="Rainy";
// //    month="July";
//  climate= climate || "Rainy";
//    console.log(`${season3}  will start in month of ${month} and the climate will be ${climate}`)
// })

// const world=function(call){
// call("peoples","wild and domestic animals")
// }
// world(function(humans,animals){
//     console.log("people lives in world")
//     console.log(`humans are the ${humans}`)
//     console.log("There are two catogerios in animals they are: ", animals )
// })

function name(){
    console.log("hello world")
}
//name()

function bhavya(callback){
console.log("hello")
callback()
}
bhavya(name)


//anonymous function as callback
function vehicles(a,b,call){
call("bhavya","siva")
console.log(a+b)
}
vehicles(1,2,function(person1,person2){
    console.log(`${person1} age is 10`)
    
})

