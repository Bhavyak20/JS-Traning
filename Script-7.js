//for loop have three different types for loop,for of ,for in

//for of loop is used for iterate methods it means array
var cars=[
    {carbrand:"HONDA",carcolour:"Gray"},
    {carbrand:"TATA",carcolour:"Black"},
    {carbrand:"KIA",carcolour:"Red"},
    {carbrand:"HUNDAI",carcolour:"Blue"},
]

for (var car of cars) {
    console.log("Brands of cars is:", car.carbrand);
    console.log(`Colours of ${car.carbrand} is ${car.carcolour}`);
    if (car.carbrand == "TATA") {
        console.log(`${car.carbrand} is famous in india`)
    }
}


var family=[
    {member:"Father",Job:"Govt.Emp"},
    {member:"Mother",Job:"Bank Emp"},
    {member:"Brother",Job:"Software"},
    {member:"Sister",Job:"Docter"}
]
for(var fam of family){
    console.log("Members of family is:" +fam.member);
    console.log(`Occupation of ${fam.member} is:${fam.Job}`)

    if(fam.member != "Sister"){
        console.log(`${fam.member} are part of on family`)
    }
}

//for in loop is used for object
var bikes={
    bikename:"HONDA",
    bikecolour:"Red & Black",
    bikemilaege: 90,
    bikeowner:"Adhvik",
}
for(var bike in bikes){
    console.log("Value names of bikes object is: ", bike);
    console.log("values of  names is: ", bikes[bike])
}

const myhouse={
    type:"Indivdual",
    location:"USA",
    rooms:3,
    area:"Dallas"
}
for (var house in myhouse){
    console.log("names of the properties is: " +house)
    console.log("values of properties :" +myhouse[house])
}