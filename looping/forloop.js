//for loop
//syntax:for(initialization;condition;increment/decrement){
//           code to be xecuted                 
//}

let temples=[
    {temple:"TIRUPATHI",god:"BALAJI"},
    {temple:"SRISAILAM",god:"SIVA"},
    {temple:"PURI",god:"JAGANADH"},
    {temple:"BADHRACHALAM",god:"SRI RAM"}
]

for(var index=0;index<4;index++){
  console.log(`Famous place of the lord ${temples[index].god} is ${temples[index].temple}`);
}

//for of loop is mostly used for array /strings

let movies=["RRR","BAHUBALI","EEGA","SYE","YAMADONGA"]
for(var mov of movies){
    console.log("List of the movies are ", mov);
}

//example-2
const music =[
    {region:"TELUGU",director:"MM.Keeravani"},
     {region:"TAMIL",director:"ILAYARAJA"},
      {region:"HINDI",director:"A.R.RAHMAN"},
       {region:"CANADA",director:"ANIRUDH"}
]
for(var mus of music){
    console.log(`Most poupular directors in INDIA are:`, mus.director)
    console.log(`${mus.director} is famous for ${mus.region} language music,`)
}

//for in loop mostly used in object

const obj={
    movie:"BOMBAY",
    musicdirector:"A.R.RAHMAN",
    moviedirector:"MANI RATANAM",
    language:"TAMIL"
}
for (var movi in obj){
    console.log("Property Name: ", movi)
    console.log("Values of Properties: ", obj[movi] )
    if(obj[movi] == "BOMBAY"){
        console.log(`${obj.movie} is released in all south languages`)
    }
}

//example-2

var games={
    name:"CRICKET",
    tournament:"ICC",
    overs:50,
    place:"AUSTRALIA"
}
for(var gam in games){
    console.log(`PROPERTIES NAME: `, gam);
    console.log("Values of peroperties: ", games[gam]);
    if(games[gam] == 50){
        console.log("ICC world champion ship has total 50 overs and held in ", games.place)
    }
}