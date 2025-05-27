// function cricketdetails(country,captain){
// console.log("MY country is INDIA")

// }
// cricketdetails("AUSTRALIA","PATCUMMINS")
// console.log(cricketdetails.length)    
// console.log(cricketdetails.name)


//using prototype

function cricketdetails(captainname, numofplayers){
    this.name="SHREYAS";
    this.country="INDIA";
    this.auscaptain=captainname;
    this.auscountry="AUSTRALIA"
    console.log(this)
    
}

cricketdetails.prototype.ausis=function(){

    console.log("AUSTRALIAN CAPTAIN IS ", this.auscaptain)
    console.log(this)

}

cricketdetails.prototype.playerdetails=function(){
    console.log(`${this.country} is from India`);
    console.log(`${this.country} and ${this.auscountry} are rivals.${this.auscaptain} is Australian captain`)
    console.log(this);
}


let player=new cricketdetails("PAT","11");
//player.ausis();
player.playerdetails();
console.log( cricketdetails.length)

