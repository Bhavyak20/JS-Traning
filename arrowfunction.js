let schooldetails=()=>{
console.log("NRI")
}
schooldetails()


//arrow function using parameetrs
let collegedetaisl=( name,location)=>{
    console.log("NAME OF THE COLLEGE:" +name , "LOCATION OF COLLEGE:" +location)
}
collegedetaisl("VELTECH","CHENNAI")

//arrow function using return 

let movie=(name,director,collection="550cr")=>{
    var mvoiedetails=("MOVIE NAME:" +name,"DIRECTOR NAME:" +director,"MOVIE COLLECTION:" +collection )
    return mvoiedetails
}

console.log(movie("RRR","SSR"))

//arrow function using 