//members intorduction

// //obj,cricket,countries are properties
// //indaplayers is method
// var obj={
//     cricket:"T20",
//     countries:2,
//     INDIAPlayers:function(player1,player2,player3){
//       console.log("Captain of indian team is", player3)
//     }
// }
// obj.INDIAPlayers("Yasaswi","Abhishek","Bumrah");

//this key word

//object context

// var obj={
//    cricket:"T20",
//     countries:2,
//     totalplayers:22,
//     INDIAPlayers:function(player1,player2,player3){
//       console.log("Captain of indian team is", player3)
//       console.log(this)
//       console.log("there are total ", this.countries)
//     },
//     ausesplayers:()=>{

//         console.log("there are total ", this.countries)
//         console.log(this)
//     }
// }
// obj.INDIAPlayers("Yasaswi","Abhishek","Bumrah");
// obj.ausesplayers();

//construct function

// function colours(colour1,colour2){
    
//     this.firstcolour=colour1;
//     this.secondcolour=colour2;
//     console.log(this)
// }
// new colours("red","purple")


// var temparature="hot"
// var obj={
//     home:"sweethome",
//     life:"goodlife",
//     test:()=>{
//         console.log(this)
//         console.log("my home is", this.obj.home)
        
//     }
// }
// obj.test();

// var laptop =["mack book","lenovo","dell"];
// var phone="iphone";
// var gadgetdetails={
//     mobile:"samsung",
//     price:30000,
//     laptops:()=>{
//         console.log("name of mobile",this.mobile)
//         console.log("name of laptop", this.laptop)
//         console.log("apple mobile",this.phone)
//         console.log(`price`,this.price)
//          //console.log(this)
       
//     }
// }
// gadgetdetails.laptops()
// console.log(this)


///properties

// var birds=["parrot","peacock","sparrow",
//     animals={
//         wateranimal:"fish",
//         landanimal:"Lion"
//     },
//     ]
// birds[1]
// console.log(birds.length)

// function forest(wild,domestic){
// console.log(wild)

// }forest("LION","DOG")
// console.log(forest.name)


//prototype

var animals=function(){
    this.type1="WILD";
    this.type2="Domestic";
    console.log("this is main function" )
    console.log(this)
}

animals.prototype.wildanimals=function(){
    console.log("first function")
    console.log("first type is ", this.type1)
console.log(this)
}

var combined = new animals()
combined.wildanimals()
animals()
//console.log(this)
//new animals()

