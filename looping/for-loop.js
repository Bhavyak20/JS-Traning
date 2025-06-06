//syntax for(initialization; condition;increment/ decrement){
//  code to execute}


//example-1
for (var step = 0; step < 5; step = step + 1) {
    console.log(`${step + 1} times is printed`)
}
//example-2
var movieslist = [
    // { moviename: "RRR", mvnumber:1},
    // { moviename: "KGF",  mvnumber:2},
    // { moviename: "KHALEJA",  mvnumber:3},
    // { moviename: "DEVARA", mvnumber:4 }
    { moviename: "RRR",director:"SSR"},
    { moviename: "KGF",director:"NEEL"},
    { moviename: "KHALEJA",director:"TRIVIKRAM"},
    { moviename: "DEVARA",director:"K.SIVA" }

]
for(var index=0; index<4; index=index+1){
    // console.log(movieslist[index])
    console.log(movieslist[index].director)
var trail =movieslist[index].director
    if(trail=="NEEL"){
        console.log(`${movieslist[index].moviename} is directed by ${movieslist[index].director}`)
    }
    
}
//example-3
var studentdetails=["RAJU","RAVI","RAJESH","RAKESH","RITVIK","RIYANSH","RITU"]

for(var number=0; number<studentdetails.length; number=number+1){
    console.log("Name of the students:", number+1)
}


//example-4
let trasports=[    
    {type1:"ROAD",vehicle:"CAR"},
    {tyep2:"WATER", vehicle:"SHIP"},
    {type3:"TRACK", vehicle:"TRAIN"},
    {type4:"AIR", vehicle:"FLIGHT"}
]
for(let trans=0; trans<trasports.length;trans=trans+1){
    console.log("Types of trans:", trans+1)
   // console.log("There are 4 types of trasports are there they are:", trasports[trans].type1)
}





//for of example for(variable of iterable)
let colleges=[
    {name:"VELTECH",location:"chennai"},
    {name:"SRM",location:"banglore"},
    {name:"VIT",location:"amaravti"},
    {name:"KLU",location:"vij"}
    
]
//for of
for (var list of colleges){
    
    console.log(`List of colleges: ${list.name}`)
     console.log(`Location of college is ${list.location}`)
     console.log("list of colleges:", list)
 
     if (list.location == "chennai"){
    console.log(`I'm from ${list.name} ${list.location}`)
     }
}
//example-2
let vegetables=["ONIAON","TOMATO","BRINJAL","OKRA"]
for(var veg of vegetables){
    console.log("List of vegetables: ", veg )
}
//example-3
let fruits=[
    {nameoffruit:"APPLE",colour:"RED"},
    {nameoffruit:"MANGO",colour:"YELLOW"},
    {nameoffruit:"ORANGE",colour:"ORANGE"},
    {nameoffruit:"KIWI",colour:"GREEN"}
]
for(var fru of fruits){
    //console.log("Details of fruits", fru)
    console.log("List of fruits",fru.nameoffruit)
    console.log(`Colour of ${fru.nameoffruit} is ${fru.colour}`)
    
}
//example-4
let seasons=["Winter","summer","rainy"]
for(let seas of seasons){
    //console.log(`our seasons in the year is ${seas}`)
    console.log("List of seasons is ", seas)
}
//example-5

let climate=[
    {climates:"sunny", month:"March"},
    {climates:"Cold", month:"November"},
    {climates:"Rainy",month:"August"},
]
for(let cli of climate){
    console.log("We have different climate names they are ", cli.climates )
    console.log(`we can see ${cli.climates} climate in the month of ${cli.month}`)
if(cli.month == "August"){
    console.log("We see Rains in Augst to Spetember mostly")
}
}



//for in
//(variable in object)
var obj={
    industry:"HOLLYWOOD",
    series:"Harry potter",
    numofparts:6,
    language:"English"
}
for(var holly in obj){
    console.log(`propertyname: ${holly}`)
    console.log(`values of property:  ${obj[holly]}`)
    //console.log(`${obj.industry} is for ENGLISH MOVIES`)
    //console.log(obj[holly])

    if(obj[holly] =="6"){
        console.log("i have seen all 6 parts of harry potter")
    }
    
}

//example-2

let martdetails={
    location:"Vij",
    name:"D-mart",
    opentime:"10 am",
    closetime:"11 pm"
}
for(let mart in martdetails){
    console.log(`name of property: ${mart}`)
    console.log(`Details of property: ${martdetails[mart]}`)
    

if(martdetails[mart] == "Vij"){
    console.log(`${martdetails.location} is in andhra`)
}
}

//example-3

let houses={
    types:4,
    type1:"Villa",
    type2:"Apartment",
    type3:"Individual",
    type4:"Bnaglow"
}
for(var hous in houses){
    console.log("Nmaes of properties", hous)
    console.log("Values of properties:", houses[hous])
if(houses[hous] == "4"){
    console.log("Details of Houses")
}
}
