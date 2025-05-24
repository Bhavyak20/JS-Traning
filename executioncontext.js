//global block
var tollywood="TFI";
console.log("TELUGU FILIM INDUSTRY:" , tollywood);

//local block-1(we can't declare local block variables in another local block or global block.)
//It can be declare only in taht local block alone
{
let telugumovies="TELUGU";
console.log(`TELUGU MOVIES ARE IN ${telugumovies} Language`)
console.log(tollywood)//we can declare gloabal block variabale in any local block or anywhere in javascript

}
//local block-2
{let tamilmovies="TAMIL";
console.log(`TAMIL MOVIES ARE IN ${tamilmovies} Language`)
console.log(tollywood)
}


   // function()applied global variable tollywood
function moviesdetails(name,director){
    console.log(`MOVIE NAME:` +name)
    console.log(`${name} is the biggest sensation of ${tollywood} director by ${director}`)


}moviesdetails("RRR","SSR")

//anonymous function
var tollywooddetails= function( director,language){
    console.log(`TELUGU FILM INDUSTRY IS know as ${tollywood}`);

}
tollywooddetails( "KOATALA SIVA","TELUGU")
