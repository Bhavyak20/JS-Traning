//prototype
function carsbrand(brand1,brand,brand3){
    this.brand1=brand1;
    this.brand2=this.brand2;
    this.brand3=brand3
console.log(`famous brand in India is ${this.brand3}`)
}

carsbrand.prototype.mycar=function(){
console.log("my first car brand is:", this.brand1)
}
var car=new carsbrand("Toyota","KIA","TATA")
car.mycar()

//example-2

let zoo=function(type1,type2,type3){
this.type1animals=type1;
this.type2animals=type2;
this.type3animals=type3;
console.log("The animals lives in water is called:",this.type3animals)
}

zoo.prototype.wildanimals=function(){
console.log(`Animals which lives in forest is called as ${this.type1animals}.`)
}
let zoodetails=new zoo("Wild Animals","Domestic Animals","Aqua Animals")
zoodetails.wildanimals();


//eample-3
let school=function(name,location,principal){
this.schoolname=name;
this.schoollocation=location;this.schoolprincipal=principal;
console.log(`I'm studying in ${this.schoolname} and location is ${this.schoollocation}`)
}

school.prototype.school2=function(){
console.log(`My friend is studying in ${this.schoolname} and their princiapl name is ${this.schoolprincipal}`)
}

let schooldetails= new school("NRI","VIJ","Venkat")
schooldetails.school2();