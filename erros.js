let myname = "bhavya";
myname=myname.toUpperCase()
// try{
// let hernme=myname.toUpperCase()
// console.log("her name is " +hername)
// }
// catch(ex){
//     throw new Error("her name is BHAVYA SRI");
    
// }

try{
if(myname){
    console.log("my name is BHAVYA ")
}
else{
    console.log("my name is srii")
}
}
catch(name){
    throw new Error("her name is not mentioned in the variable")
}