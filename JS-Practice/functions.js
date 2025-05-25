//Named function
function cardetails(brand,carnum,carowner){
console.log(brand)
console.log("CAR NUM-" +carnum)
console.log(`${brand} car belongs to ${carowner}.`)

}
cardetails("JAGUAR","AP1234","Bhavya");
//Anonymous function using optional parameter,default parameter
var bikedetails=function( bikebrand,bikenum,bikeprice,bikeowner,bikecolor="Black"){
    console.log("Brand of bike:" +bikebrand)
    bikeowner= bikeowner || "advik"
    console.log("owner of bike:" +bikeowner)
    console.log("num of bike:" +bikenum)
    console.log("Colour of bike:" +bikecolor)
    console.log("PRICE OF BIKE:" +bikeprice)

}
bikedetails("HONDA","TS1234","1lakh")

//named function using optional parameter

function aeroplane( ...parameetrs){
console.log("TYPE OF PLANE:" +parameetrs[0]);
console.log("AVAILABLE SEATINGS:" +parameetrs[1])

}
aeroplane("PRIVATE JET","100")

//return function

var typesofhouses=function(type1,type2,type3,type4){
    let houses=("TYPE-1:" +type1 + "TYPE2:" +type2 + "TYPE-3:" +type3 +"TYPE4:" +type4);
    return(houses);
}
console.log(typesofhouses("VILLA","APARTMENT","INDIVIDUAL","MANSION"))

//arrow function with anonymous function

const typesofcoffee=(first,second,third)=>{
console.log(first);
console.log(second);
console.log(third);
}
typesofcoffee("BLACK COFFEE","ESSPRESSO","REGUALR COFFEE")


//arrow function with anonymous
biryanis= ()=>{
    console.log("DUM BIRYANI")

 }
 biryanis()

 //arrow function with anonymous
 let typesoffunction=(one,two,three)=>{
console.log(three)
 } 
 typesoffunction("named","anonymous","Arrow")

 
 
 