let movies=function(telugu,hindi,Kannada,tamil){
 console.log(`telugu fil industry is called as ${telugu}`)
 //console.log(`${this.lanaguage} language if for ${telugu}`)
 console.log("movie from sandalwood industry will be in ", this.lanaguage )
}

let tfi={
    lanaguage:"TELUGU",
    topmovie:"Bahubali"
    
}
let sandal={
    lanaguage:"cannada",
    topmovie:"KGF",
    
}


//movies("TOLLY","BOLLY","SANDAL","KOLLY")
//movies.call(tfi, "TOLLY","BOLLY","SANDAL","KOLLY")
//movies.apply(tfi, ["TOLLY","BOLLY","SANDAL","KOLLY"])
//movies.call(sandal, "TOLLY","BOLLY","SANDAL","KOLLY")
movies.apply(sandal, ["TOLLY","BOLLY","SANDAL","KOLLY"])
console.log(movies.bind(sandal, "TOLLY","BOLLY","SANDAL","KOLLY"))




// let rainbow=function(colours,howmany){
//     this.howmany=howmany
// console.log(`we see rainbow in rainy season and there are ${this.howmany} colours in it.`)
// console.log(`rainy season starts in ${this.startmonths}`)
// //console.log(this)
// }

// let rainyseason={
//     startmonths:"July",
//     endmonths:"October"

// }
// //rainbow("VIBGYOR","7")
// rainbow.call(rainyseason,"VIBGYOR","7")
// rainbow.apply(rainyseason,["VIBGYOR","7"])
// console.log(rainbow.bind(rainyseason,"VIBGYOR","7"))
// //let bind=(rainbow.bind(rainyseason,"VIBGYOR","7"))
// //bind()