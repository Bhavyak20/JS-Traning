//in this scipt debugs are set and used execution context 


let typesoftransport=4;
let type1="ROAD";
console.log(typesoftransport)
console.log(type1)

debugger

let type2="TRACK";
let trackvehicle="TRAIN";
console.log(trackvehicle)

debugger

{
function watertransport(one,two,three){
console.log(`Types of vehicles go on track ${one},${two},${three}`)
console.log(typesoftransport)
}
watertransport("BOAT","FERRI","YACHT")


debugger
{
    function airtransport(first,second){
        console.log(second)

    }
    airtransport("JET","PLANE");
        
}

console.log(type2)
}
