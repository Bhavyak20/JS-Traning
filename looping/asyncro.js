//async call is easy to understand and fast to execute
//it will execute whole block at a time with not like sync call


function years(){
  setTimeout(()=>{
    console.log("there are total 12 montsh in a year")
  },5000)
    
    
}
function months(){
     
    console.log("theer are total 4 weeks in a month")
    
}
function weeks(){
     setTimeout(()=>{
        console.log("theer are 7 days in a week")
     },2000)
    //console.log("theer are 7 days in a week")
}
years();
months();
weeks();