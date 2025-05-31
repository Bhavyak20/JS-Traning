// if statement

if (true){
    let key=function (){

    
    console.log("this is true statement")
    console.log(`if we give true in if sttamenet it will give output`)
    };
    key()
}


let key=false;
if (key){
  console.log("hello world")
}

//else if

let summerseason=false
let winterseason=false
let rainyseason=false
let thisissummer=false
if(summerseason){
    console.log(`this is summer`)
}
else if(winterseason){
    console.log(`it is winter`)
}
else if(rainyseason){
    console.log(`it is rainy`)
}
else if(thisissummer){
    console.log(`it is summer season starts in march month of the year`)
}

//else

let employed=false
let unemployed=false
let intern=false
if(employed){
    function employedetails(name,age){
    console.log("Name of employee:" +name)
    console.log(`Age of employee is ${age}`)
    }
    employedetails("bhavya","9")
}
else if(unemployed){
    console.log("currently i'm unemployed")
}
else if(intern){
    console.log("I'm inter in dxc")
}
else{
    console.log("I'm in job trails")
}

//switch case condition
 let ourcountry="INDIA"

 let option1="USA";
 let option2="AUS"
 let option3="UK"

 switch(ourcountry){
    case option1:{
    console.log("I'm from USA")
    }
    break;
    case option2:{
        function aus(){
            console.log( `I'm from AUS`)
        }
        aus()
    }
    
    break;
    case option3:{
        console.log("I'm from UK")
    }
    break;
    default:{
        console.log("my country name is not mentioned in the list.")
    }
 }


