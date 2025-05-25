
//here in execution context.
//we can define global block varaibles in anyhwre in javascript,
//but we can't define variables in local block to anyother localblock or global block


//global block

let name="Bhavya";
age=9;
const place="VIJ"

//local block

{
let girls=["SREE","DEVI","HEMA",
    {
        boy:"Advik",
        age:2,
        }
]
console.log(girls[3].age)
console.log(place)
console.log(name)
 console.log(girls[1])
}
{
    let boys={
        boy1:"babu",
        boy2:"deepu",
        boyslocation:["CHENNAI","BANGLORE"]

    }
    console.log(boys.boyslocation[0])
    console.log(place)
    console.log(name)
    
}