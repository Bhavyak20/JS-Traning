//if condition 
 
if(false)
{
    console.log("my name is:", "BHAVYA KOLLI");
}

let myname=true;

if(myname)

    {
        console.log("HERE myname is given as true. so the output will be printed")
    }

    //else if  

    let ihavecomapletedmygrad=false
    let ihavenotcompletedmygrad=false
    let impursuingmygard=true

    if(ihavecomapletedmygrad)
    {
        console.log("yes i have completed my graduation")
    }
    else if(ihavenotcompletedmygrad)
    {
        console.log("I have not completed my graduation")
    }
    else if(impursuingmygard) {
           console.log("I'm pursuing my final year")
    }
    
//else condition

let todayissunnyday=false
let todayisrainyday= false
let todayismoderate=false
 if(todayissunnyday)
 {
    console.log("yes today is sunny day.summer")
 }
 else if(todayisrainyday)
    {
        console.log("today is rainy Day.RAINY SEASON")
    }
 

 else if(todayismoderate){
    console.log("this is autumn so moderate")
 }
else
{
    console.log("this is winter season.it is very cold")
}

//switch case
 
let mybank = "AXIS BANK";

let option1= "SBI";
let option2="HDFC BANK";
let option3="YES BANK";
//above values we are assigning
switch(mybank)
//mybank is expression
{
    case option1:{
        console.log("I'm having SBI Account")
    }
    break;
    case option2:{
     console.log("I'm having HDFC Account")
    }
    break;
    case option3:{
        console.log("I'm having yES BANK Account")
        
    }
    break;
    default:{
          console.log("My bank account name is not mentioned")
    }
}