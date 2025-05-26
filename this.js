//global context

// var temp="30 degrees c";
// var weather="cloudy";
// var time=12;
// console.log(this)

//object context

var climate={
    season:"winter",
    month:"january",
    numofseasons:function(season1,season2,season3){
      //console.log("favoute season is",this.season)
      console.log(this)
      console.log(season1);
      console.log(season3)
}

}
climate.numofseasons("winter","summer","Rainy")

//constructor function


//     function cricketdetails(name,bowl,country){
//      this.nameofplayer=name;
//      this.bowlorbat=bowl
//      this.countryofplayer=country
// console.log(this)
// }
// //cricketdetails("patcummins","Bowler","Australian")
// new cricketdetails("patcummins","Bowler","Australian")

//arrow function
// var name = "patcummins";

// var cricketdetails=(name,bowl,country)=>{
//      this.nameofplayer=name;
//      console.log("SRH captain is ", this.name)
//      console.log("THIS:", this)
// //console.log(this)
// }
// cricketdetails("patcummins","Bowler","Australian")
//new cricketdetails("patcummins","Bowler","Australian")



