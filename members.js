//IN JS a member refers to bothe properties and methods that belong to an object,array and ..
//.. function or any other datatype

//two types of members are there 1.PROPERTRY 2.METHOD

//--->example in object<---

let mobile = {
    brand: "SAMSUNG",
    series: "S22",
    price: 50000,
    madein: function () {
        //console.log("SAMSUNG BRAND IS ORIGANNLY FROM SOUTH KOREA")
        return("SAMSUNG BRAND IS ORIGANNLY FROM SOUTH KOREA")
    }
    
}
console.log(mobile.brand);
//mobile.madein()
console.log(mobile.madein())
console.log(mobile.price)

//in above example mobile,brand,series,price are properties
//madein is method.

//--->example in array<---

let laptops=["MAC BOOK","SAMSUNG","THINKPAD","DELL"]

console.log(laptops.length)
console.log(laptops)

laptops.pop()//this will delete last value in array
console.log(laptops.length)
console.log(laptops)
