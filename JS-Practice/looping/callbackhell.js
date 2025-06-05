function years(callback){
  
    console.log("there are total 12 montsh in a year")
    callback()
}
function months(call){
     
    console.log("theer are total 4 weeks in a month")
    call()
}
function weeks(){
     
    console.log("theer are 7 days in a week")
}

years(()=>{
    months(()=>{
        weeks()
    })
})
