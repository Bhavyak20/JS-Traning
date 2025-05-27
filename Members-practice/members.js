//there are two types of members 1.property 2.method


let obj={
    name:"bhavya",
    age:1,
    place:"hyd",
    child:"girl",
    girldetails:function(){
        console.log(`${obj.name} is ${obj.child}`)
    }
}
obj.girldetails()