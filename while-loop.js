
let bookposition=0;
let bookdetails=[
    {booknumber:1, nameofbook:"ENGLISH"},
    {booknumber:2, nameofbook:"TELUGU"},
    {booknumber:3, nameofbook:"HINDI"},
    {booknumber:4, nameofbook:"MATHS"},
    {booknumber:5, nameofbook:"SCIENCE"},
    {booknumber:6, nameofbook:"SOCIAL"},
]

// while(bookposition < 6){
//     console.log(`Names of book is ${bookdetails[bookposition].nameofbook}`)
//     console.log("position of book is ", bookdetails[bookposition].booknumber)
    
//     if(bookdetails[bookposition].nameofbook=="SOCIAL"){
//      console.log("I have read  ", bookdetails[bookposition].nameofbook)
//     }
//         bookposition=bookposition+1
// }


// do while 
do{
console.log("I have read all books in the list:", bookdetails[bookposition].nameofbook)
bookposition=bookposition+1
}while(bookposition < 6)

//example-2
let stro=0
let stories=[{
    story:"HEN & CHICK",
    pages:200,
    author:"bhavya"
},
{
    story:"world tour",
    pages:200,
    author:"kolli"
}]
while(stro < 2){
 console.log(`${stories[stro].story} is written by ${stories[stro].author}`)
 stro =stro+1
}

//example-3

let gam=0;
let games=[{
    game:"chess",
    touurnment:"NORWAY CHESS",
    year:2025,
},{
    game:"cricket",
    touurnment:"ipl",
    year:2025,
}
,{game:"hockey",
    touurnment:"asiagames",
    year:2025,}
]
do{
    console.log(`name of tournamnet is ${games[gam].touurnment} is held in ${games[gam].year} and game name is ${games[gam].game} `)
if(games[gam].touurnment == "ipl"){
    console.log("IPL is very popular game and game name is ", games[gam].touurnment)
}
gam++

}while(gam<games.length)