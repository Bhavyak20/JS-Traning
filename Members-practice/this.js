//global context

// var name="bhavya"
// var school="nri";
// var details=function(){
//     console.log("hello")
//     console.log(`my name is ` +name)
// }
// details()
// console.log(this)

//object context

// let ipl={
//     team1:"srh",
//     team2:"csk",
//     team3:"rcb",
//     teams:function(one,two,three){
//         console.log("my fav team is ", this.team1)
//         this.mumbai= one
        
//         console.log(this)
        
//     }
// }
// ipl.teams("MI","RR","GT")

//constructor function
function games ( game1,game2,game3 ){
 this.first=game3
 console.log(this);
 console.log("my fav game is ", this.first);
 console.log("hello", game1)

}
new games("hockey","cricket","chess")

//arrow function
//  var hello="world";
// let school={
//     name:"nri",
//     brnaches:3,
//     places:function(){
//         console.log(this.brnaches)
//         console.log(this)
//     },
//     countries:()=>{
//         console.log(this.brnaches)
//         console.log(this.hello)
//         //console.log(this)  in arrow function this is global it will accept value out of function/obj
//     }

// }
// school.places()
// school.countries()




