

// //below is example of global context
// //console.log(this)


// //below we can replace variables like... let, var, const in place this while assigning keywords
// //below one is global scope example and using this key word in it.

// this.movies=["RRR","BB1","BB2","EEGA"] 
// this.directors={
//     director1:"SSR",
//     director2:"MANIRATNAM"}

// var totaldirector=function(){
// //           console.log("hello")
// return movies;
//  }
// //    totaldirector("Bhavya","9")
// //    totaldirector() 
// console.log("first director:", this.directors.director1)
// console.log(this)


// // // //object context
// // // //if we give "this" key word in method(it means in function) it will print whole object in console.

// var telugu="language";
//     var obj = {
//     name :"Harry Potter",
//     numofseries:6,
//     maincharacters:["harry","ron","hermoine"],
//     seriesdetails:function(){
//         //console.log(this)
//         console.log("name", this.name)
//         console.log("numofseries", this.numofseries)
//         console.log(this)
//     }
// }
// obj.seriesdetails();

// //global cotext
// var school="NRI";

// // //  var branch="SRI"
// // //  console.log(this)

// //constructor function

// var delivery=function(item,price,brand){
//     this.itemname = item;
//     this.priceofitem = price
// console.log(this)
// }
// new delivery("mobile","30k","samsung")
//delivery("mobile","30k","samsung")

//arrow function
var laptop =["mack book","lenovo","dell"];
var gadgetdetails={
    mobile:"samsung",
    price:30000,
    laptops:()=>{
        console.log("name of mobile",this.mobile)
        console.log("name of laptop", this.laptop)
        console.log(`price`,this.price)
         //console.log(this)
       
    }
}
gadgetdetails.laptops()
console.log(this)