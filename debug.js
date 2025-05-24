let englishseries="AMERICAN FAMILY";
console.log(englishseries);

debugger

let teluguseries="DOOTHA";
console.log(teluguseries)
 debugger

 //scope chain
{
let hindiseries = function( name,language){
console.log("NAME OF THE SERIES:" + name);
console.log(`LANGUAGE OF SERIES:` +language)
}
 hindiseries("FAMILY MAN","HINDI")

//debugger
    function tamil(tamilseriesname){
        console.log("NAME OF TAMIL SERIES:" +tamilseriesname);

    }
    tamil("UFF")

}
debugger
//IIFE
(
    function(country){
        console.log( "NAME OF OUR COUNTRY:" +country);

    }
    ("INDIA")
)
