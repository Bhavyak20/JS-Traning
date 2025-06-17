// //this key word in global context

// var book="Harry potter";
// var bikebrand="Ymaha";
// var age = 9;
// var animaltypes=2;
// console.log(this);

// //this key word in object context

// let obj={
//     name:"Bhavya",
//     age:10,
//     details:function(school,grade){
//         console.log(this);
//    console.log(`${this.name} is studying ${grade} grade in ${school} School. `)
//     }
// }
// obj.details("NRI",4)

// //this key word in constructor function

var company=function (person,id,location){
this.name=person;
this.personid=id;
this.joblocation=location;
console.log(`${this.name} is working in IT at ${this.joblocation}`)
console.log(this)
}
new company("deepu",1234,"Banglore")

//this keyword in Arrow function

// var shopowner="Venkat";
// var nameofshop="Grocries"
// var shopdetails={
//      details:((shopname,shoptype)=>{
//     console.log(`There is a shop name ${this.nameofshop} `)
//    console.log(this)
// })
// }
// shopdetails.details("Textiles","Clothes")

var laptop =["mack book","lenovo","dell"];
var gadgetdetails={
    mobile:"samsung",
    price:30000,
    laptops:()=>{
        console.log("name of mobile", this.mobile)
        console.log("name of laptop", this.laptop)
        console.log(`price`,this.price)
         console.log(this)
       
    }
}
gadgetdetails.laptops()
//console.log(this)