//while loop 

var gadgets=0;
var gadgetDetails=[
    {gadgetname:"Mobile",gadgetprice:20000},
    {gadgetname:"Laptop",gadgetprice:200000},
    {gadgetname:"Headset",gadgetprice:15000},
    {gadgetname:"Charger",gadgetprice:2000}
]
// while (gadgets<5) {
//     console.log(`Gadget name is ${gadgetDetails[gadgets].gadgetprice}`);
//     console.log(`Gadget name is ${gadgetDetails[gadgets].gadgetname}`)
    
//     gadgets=gadgets+1;
// }

while(gadgets<4){
    console.log("gadget list:" +gadgetDetails[gadgets].gadgetname);
    if(gadgetDetails[gadgets].gadgetprice == 2000){
        console.log(`price of ${gadgetDetails[gadgets].gadgetname} is ${gadgetDetails[gadgets].gadgetprice}`)
    }
    gadgets++;
}

//example-2\\whileloop

let vehicals=0;
let vehicalsdetails=[
    {vehicalname:"Bike",price:200000},
    {vehicalname:"Car",price:1500000},
    {vehicalname:"scooty",price:100000},
    {vehicalname:"Cycle",price:90000}
]

// while(vehicals<4){
//     console.log("List of all vehicals:", vehicalsdetails[vehicals].vehicalname);
//     if(vehicalsdetails[vehicals].price == 100000){
//         console.log(`Price of ${vehicalsdetails[vehicals].vehicalname} is ${vehicalsdetails[vehicals].price}`)
//     }
//     vehicals++
// }

do{
console.log(`Available prices for diferent vehicles is${vehicalsdetails[vehicals].price}`)
vehicals++
}while(vehicals<4)