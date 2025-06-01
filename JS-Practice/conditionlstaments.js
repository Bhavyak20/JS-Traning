//if
let myname =true;
let hername=false;


if (myname){
    console.log("my name is bhavya")
}
if (hername){
    console.log("her name is teja")
}

//else if and else
let mynameisbhavya=false;
let mynameissri=false;
let mynameiskolli=false;
let mynameiskollibhavyasri=false

if (mynameisbhavya){
    console.log("myname is bhvaya")
}
 
else if (mynameissri){
   console.log("myname is sri")
}
else if(mynameiskolli){
    console.log("myname is kolli")
}
else if(mynameiskollibhavyasri){
    console.log("myname is kollibhavyasri")
}
else {
    console.log("my name is not in the option")
}

//switch case

let iamfrom="INDIA"

let country1="AUS";
let country2="USA";
let country3="UK"

switch (iamfrom){
    case country1:{
        console.log("I'm from AUS")
    }
    break;
    case country2:{
        console.log("I'm from USA")
    }
    break;
    case country3:{
        console.log("I'm from UK")
    }
    break;
    default:{
        console.log("my country name is not in option")
    }
}