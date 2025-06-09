//while loop

let col=0;
let colours =["red","blue","green","voilet","piink"]

while(col <5){
    console.log("List of colours are: ", colours[col])
 col++
}
//do while
// do{
//     console.log(`List of colours are ${colours}`)
// col++
// }while(col<5)


//example-2
let value=0;
let countries=[
    {country:"INDIA",continent:"ASIA"},
    {country:"CHINA",continent:"ASIA"},
    {country:"SRI LANKA",continent:"ASIA"},
    {country:"JAPAN",continent:"ASIA"}
]

// while(value < 4){
//     console.log(`${countries[value].country} is in ${countries[value].continent} continent.`);
    
//     if(countries[value].country == "INDIA"){
//         console.log("I'm from INDIA")
//     }
//    value++
// }

do{
console.log(`LIST OF the countries are ${countries[value].country}`);

 value++
}while(value<4)

    //example-3
let lapi=0
let obj=[{
    gadget:"LAPTOP",
    name:"DELL",
    count:3,
    from:"USA"
},
{
    gadget:"Mobile",
    name:"APPLE",
    count:3,
    from:"USA"
}]
// while(lapi<2){

//     //console.log("DETAILS OF the laptop: ", obj)
//     console.log(`I bought a ${obj[lapi].gadget} from ${obj[lapi].from}`)
//     console.log(`Company name of my ${obj[lapi].gadget} is ${obj[lapi].name}`)
//     lapi++
// }

do{
console.log(`I bought a ${obj[lapi].gadget} from ${obj[lapi].from}`)
    console.log(`Company name of my ${obj[lapi].gadget} is ${obj[lapi].name}`)

    lapi++
}while(lapi<2)