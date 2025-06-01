//comparision operator are ==, !=, <, <=, >, >=, ===

let myname="bhavya";

if(myname == "lasya"){
    console.log("my name is bhavya")
}
else{
    console.log("my name is bhavya")
}

console.log(1+1 == 2)
console.log(9+9 != 18)

let favnum="9";
let givennum="99";

if(favnum > givennum){
    console.log("my favourite num is 9")
    
}
else if(favnum >= givennum ){
    console.log("my favourite num is 9 and it is less than given num 99")
}
else if(favnum == givennum){
    console.log("9 is less than 99")
}
else if(favnum === givennum){
    console.log("hello world")
}
else{
    console.log("end")
}

//what is difference between == and ===
//=== will chekc type in below example "1" is string but == didn't check wether it  is string or integer and gave output as true.
// but === has checked "1" and confirmed its type is string and said integer is not equal to string . so gave output as false.
console.log(1 == "1")
console.log(1 ==="1") 

//logical operators : && , ||

// && code both inputs has to be true.if anyone input is false,result will be false

let pi="3.14";
let min="60 seconds";

console.log(pi=="3.14" && min=="60 seconds")
if(pi=="3.4" && min=="60 seconds"){
    console.log("pi is 3.4 and min has 60 seconds")
}
else if(pi == "3.14" && min!="6 seconds"){
    console.log("pi is 3.14 and min has 6 seconds")
}
else if(pi ==3 && min ==6){
    console.log("pi is 3 and min has 6 ")
}
else{
    console.log("all values are wrong")
}

// || code any one input must be true.the result will be true. if both inputs are false result will be false
let length="10";
let breadth="5";
if(length == "1" || breadth == "4"){
    console.log("both values are correct")
}
else if(length !=10 || breadth < 5){
    console.log("both values are correct but comparisoon for length and breadth is wrong")
}
else if(length < "10" || breadth > "5"){
    console.log("both values are correct but comparison for breadth is wrong")
}
else{
    console.log("IN OR code atleast one input has to be true to get true result")
}

//trying in switch case

let season="SUMMER";
let month="JUNE";
switch(season == "SUMMER" && month=="June") {

    case season != "summer" || month == "JUNE":{
  console.log("this is summer season and june month")
    }
    break;
    case season == "SUMER" && month =="JUNE":{
        console.log("trying with AND operator")
    }
    break;
    default:{
        console.log("hello world")
    }
}

