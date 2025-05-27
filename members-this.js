//members
// //in below object name,location numofbranhes are properties and languges is method
// var schooldetails={
//     name:"NRI",
//     location:"hyd",
//     numofbranches:3,
//     languages:function(s1,s2){
//         console.log(s1)
//     }
// }
// schooldetails.languages("win","sum")

// //array example for members
// var collegedetails=["VELTECH","VIT","CHAITANYA","NARAYANA",
//     {
//         principal:"abc",
//         places:function(){
//             console.log(`hello world ${collegedetails[4].principal}`)
//         }
//     }
// ]
// console.log(collegedetails[0])
// collegedetails[4].places()

//this keyword in global context

// var name="b";
// var age=2;
// var dob=2000;
// console.log(this)

//this key word in object


// var school={
//     name:"NRI",
//     branches:4,
//     location:function(loc1,loc2,loc3){
//       this.firstlocation=loc1;
//       console.log("name of school", this.name)
//       //console.log("secon branch",this.location.length)
//       console.log(this)
//     }
// }

// school.location("hyd","banglo","chenn")


//constructor function
function details(detail1,detail2){
    //console.log(`hello world` )
   
    this.firstlocation=detail1;
    // console.log("beautiful", this)
    console.log(this)
     
}
 new details( "hello","life")



