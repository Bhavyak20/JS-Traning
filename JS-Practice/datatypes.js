//primitive data type

//numbers

let age = 2
let dob = 9092000
let timeofbirth = "2 am"

console.log("AGE OF BOY:" + age);
console.log("DOB OF BOY:" + dob);
console.log("BIRTH TIME:" + timeofbirth);
//console.log(`A boy with ${age} years is born on ${dob} at ${timeofbirth}`)

//string
let boydetails = (`A boy with ${age} years is born on ${dob} at ${timeofbirth}`)
console.log(boydetails)

//boolean

boydetails = "true"
console.log(boydetails);


//undefined

var placeofbirth;
console.log(placeofbirth)

//null
let motherofboy = null;
console.log(motherofboy)


//nonprimitive data types

//array

let monthsofyear = ["JANUARY", "FEBRUARY", "MARCH", "APRIL",
    ["MAY", "JUNE", "JULY"],
     {
        week1: "MONDAY",
        week2: "TUESDAY",
        numofday: 7
    }

]

console.log(monthsofyear[0])
console.log(monthsofyear[4][0])
console.log(monthsofyear[5])
console.log(monthsofyear[5].numofday)
console.log(monthsofyear)

//objects
  var companydetail ={
  comapnyname:"TCS",
    branches:5,
    CEO:"RATAN TATA",
    location:["HYD","CHENNAI","BANGLORE","PUNE","NOIDA"]
}
console.log(companydetail.location[4]);
console.log(companydetail.location[0])

//function

//anonymous function
var maths=function(lesson1,lesson2){
console.log(lesson1)
}
maths("INETGERS","ALGEBRA")

//named function


function science(){
    console.log("bodyparts")
}

science()
//arrow function
const social=()=>{
console.log("ECONOMICS")
}
social()

//return function
{
let language=function( language1,language2,language3){
let differentlanguages=console.log(language1 + language2 + language3)
return(differentlanguages);
}
language("TELUGU","HINDI","ENGLISH")
}
//IIFE'S
(
    function  (subject1,subject2){
        console.log(subject2)
    }
)
("TELUGU","HINDI")



