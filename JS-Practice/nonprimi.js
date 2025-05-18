//Nonprimitive Data Type

//Arrays

let rainbow=[
    ["Voilet","Indigo","Blue","Green","Yellow","Orange","Red"],
{
coloursinrainbow:7,
rainbowcalled:"VIBGYOR",

},

];
console.log(rainbow)
console.log(rainbow[0][2])
console.log(rainbow[1])
console.log(rainbow[1].rainbowcalled)
let view=`There are ${rainbow[1].coloursinrainbow} colours in rainbow.Usually the colours are remind using one term that it ${rainbow[1].rainbowcalled}.The colours are ${rainbow[0]}.`
console.log(view)
document.write(view)

//objects

var seasons={
    numofseasons:4,
    season1:"Winter",
    season2:"Summer",
    season3:"rainy",
    season4:"autumn",
   climate:["Cold","Hot","Rainy","Mixed"],
   months:12,
}
console.log(seasons)
console.log(seasons.numofseasons)
console.log(seasons.season2)
console.log(seasons.climate)
console.log(seasons);
let show=`There are total ${seasons.numofseasons} seasons are there.In four seasons the coldest is ${seasons.season1},the hotest is ${seasons.season2}.`
console.log(show)
//function
function week(){
    const daysinweeks=7;
    console.log(daysinweeks);
    
    let day1="Sunday";
    console.log(day1)

    let day2="Monday";
    console.log(day2)

    let day3="Tuesday";
console.log(day3)
    let weekend;
    console.log(weekend)
}
console.log(week);
// doubt
// let explain=`There are ${week.daysinweeks} in a week.`
//console.log(explain)
week()



//styles
console.log("%cpurple","color:purple")
console.log("%cwhite", "background-color:black")