// // function cricketdetails(country,captain){
// // console.log("MY country is INDIA")

// // }
// // cricketdetails("AUSTRALIA","PATCUMMINS")
// // console.log(cricketdetails.length)    
// // console.log(cricketdetails.name)


// //using prototype

// function cricketdetails(captainname, numofplayers){
//     this.name="SHREYAS";
//     this.country="INDIA";
//     this.auscaptain=captainname;
//     this.auscountry="AUSTRALIA"
//     console.log(this)
    
// }

// cricketdetails.prototype.ausis=function(){

//     console.log("AUSTRALIAN CAPTAIN IS ", this.auscaptain)
//     console.log(this)

// }

// cricketdetails.prototype.playerdetails=function(){
//     console.log(`${this.country} is from India`);
//     console.log(`${this.country} and ${this.auscountry} are rivals.${this.auscaptain} is Australian captain`)
//     console.log(this);
// }


// let player=new cricketdetails("PAT","11");
// //player.ausis();
// player.playerdetails();
// console.log( cricketdetails.length)

//prototype secon example

// function bankdetails(type1,type2){
//     name="bhavya";
//     age="20";
//     this.place="Hyderabad";
//     this.Type1=type1
//     console.log(`my name is ${name} and I'm from ${this.place}`)
    
// }


//  bankdetails.prototype.customerdetails=function(){
//     bankaccount="sbi";
//     branch="chennai"
// console.log(name)
// console.log(this.place)
// console.log(`I'm having ${this.Type1} account in ${branch} `)
//  }


// bankdetails.prototype.accountdetails=function(){
//     console.log(age)
//     console.log("I live in :", this.place)
// }
// let more= new bankdetails("salary","savings")
// more.customerdetails()
// more.accountdetails()



//prototype example 

let shapes=function(shape1,shape2,shape3){
   subject="Maths";
   chapter=1;
   grade="First";
   name="Bhvaya"
   console.log(`I'm studying ${grade} class`)
}

shapes.prototype.science=function(){
  console.log(`My favrouite subject is ${subject}`)

}
shapes.prototype.student=function(lastname,age){
    console.log(`my name is ${name} and I'm studying ${grade} grade.My age is ${age}`)
}
let data=new shapes("Circle","Rectangle","Square")
data.science()
data.student("abc",9)
