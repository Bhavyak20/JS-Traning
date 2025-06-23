//if statement

var myname="Bhavya";
if (myname != "Bhavya") {
    console.log(`My name is Bhavya`)
}
else{
console.log("no name to print")
}


//else
let statement=true;
if(statement){
    function vehicals(name,brand,colour){
console.log(`I bought an ${name} which colour is ${colour}`)
    }
    vehicals("Car","Audi","White")
}
else{
    console.log("no statement to print")
}

//else if

let season="winter";
if(season != "winter"){
    console.log("This is not winter season")
}
else if(season == "summer"){
console.log("this is summer season")
}
else if(season =="rainy"){
console.log("this is rainy season")
}
else if(season =="winter"){
console.log("This is winter season")
}
else{
    console.log("Season is not mentioned")
}

//switch case

let vehical = "Car";

let option1="Bike";
let option2="Cycle";
let option3="Car";
let option4="Helicopter";

switch (vehical) {
    case option1:{
         console.log("I came to office via ", option1);
    }
        break;
        case option2:{
            console.log("I came to office via " +option2);
        }
        break;
        case option3:{
            console.log("i came to office via ", option3);
        }
        break;
        case option4:{
            console.log(`I came to office via ${option4}`)
        }
        break;
    default:{
        console.log(`I came via ${vehical} to my office.`)
    }
        break;
}