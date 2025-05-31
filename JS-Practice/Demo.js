//Named function

function mobile(brands,prices,model){
    console.log("Mobile or Named function");
    console.log("Brands that availble right now :" +brands)
    console.log("What si the type of mobiles: " +model)
}
mobile(["SAMSUNG","APPLE"],["30k","35k"],"Touch")



// variable function 


let gadgets=function(gadget1,gadget2,gadget3,gadget4){
    console.log("There are total 4 gadgets in this function.");
    console.log(`I have ${gadget1} and the brand is APPLE`);
    console.log(`we have multiple gadets to use they are ${gadget1},${gadget2},${gadget3},${gadget4},`);
    console.log("what is gadeget3:" +gadget3);

}

gadgets("MOBILE","LAPTOP","HEADSET","POWER BANK");
console.log(gadgets.length)


//Arrow Function
// let laptops ={
//     key:(apple,price="1alkh",origin)=>{
// console.log("brand of the laptop:" +apple)
// console.log(`The ${apple} costs nearly ${price}`)
// origin=origin || "USA"
// console.log("Origin of Mac book is: " +origin)
// }
// }
// laptops.key("mac book")

//--->example of arrow without defining in object<----

let laptops=(apple,price="1alkh",origin)=>{
console.log("brand of the laptop:" +apple)
console.log(`The ${apple} costs nearly ${price}`)
origin=origin || "USA"
console.log("Origin of Mac book is: " +origin)
}
laptops("mac book")



// //IIFE's
// (function(){
//     console.log("Hello this is example of IIFE")
// })
// ()

// //callback functions

// setTimeout(function(){
//     console.log("Life")
// },2000)

// setInterval(function(){
//     document.write("Beautiful")
// },5000)

