//return function

function schooldetails( schoolname,schoollocation, schoolprincipal="SRINIVAS"){
    let school= ("NAME OF THE SCHOOL:" +schoolname +"SCHOOL LOCATION:" +schoollocation + "NAME OF THE PRINCIPAL:" +schoolprincipal)
     return school;
}
console.log(schooldetails("CHAITANYA","VIJAYAWADA"))

//return function
function collegedetails (collegename,collegeplace,numofbranches){
let college=("NAME OF THE COLLEGE:" +collegename + "LOCATION OF COLLEGE:" +collegeplace +"NUM of Branches: " +numofbranches)
return college;
//console.log("NAME OF THE COLLEGE: " +collegename,"LOCATION OF COLLEGE:" +collegeplace, "NUM of Branches: " +numofbranches)
}
console.log(collegedetails("VELTECH", "CHENNAI","7"))
