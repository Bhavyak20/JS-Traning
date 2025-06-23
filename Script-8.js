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

while(gadgets<5){
    console.log("gadget list:", gadgetDetails[gadgets].gadgetname)
    if(gadgetDetails[gadgets].gadgetprice == 2000){
        console.log(`price of ${gadgetDetails[gadgets].gadgetname} is ${gadgetDetails[gadgets].gadgetprice}`)
    }
    gadgets++;
}
