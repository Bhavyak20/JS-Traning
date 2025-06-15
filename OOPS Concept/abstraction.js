// class bankdetails{
//     constructor(banknam,holdername,accountnum,ammount){
//     this.bankename=banknam;
//     this.accountholder=holdername;
//     this.accountnumber=accountnum;
//     this.initialammount=ammount;
//      }
//    depositammount(ammountdeposited){
//         this.initialammount = this.initialammount +  ammountdeposited;
//         //console.log(`Ammount deposited in ${this.accountholder} account is ${ammountdeposited}`)
//     }
//     withdraw(ammountwithdraw){
//         if(this.initialammount >= ammountwithdraw){
//             this.initialammount = this.initialammount - ammountwithdraw
//      //console.log()
//         }
//         else{
//             console.log("Ammount insufficient in account of", this.accountholder )
//         }
//     }
//     checkbalance(){
//         return this.initialammount;
//     }
// }
// let bank=new bankdetails("SBI","Deepu","0123456",5000);
// bank.depositammount(200);

// let bankstatement=bank.checkbalance();
// console.log(`Balance after ammount deposited is ${bankstatement}`);
// setTimeout(()=>{
//     bank.withdraw(1000)
// let statement=bank.checkbalance();
// console.log(`Balance after ammount withdraw is ${statement}`);

// },3000)


class cardetails{
    constructor(brand,count,colour){
    this.brandofcar=brand;
    this.numofcars=count;
    this.colourofcars=colour
    }

    brought(name,type,number){
        this.numofcars=this.numofcars+ number
        console.log(`I bought new car and its name is ${name}.`)
    }


    sell(name,number){
    this.numofcars= this.numofcars-number
    console.log(`I sold ${number}  of my old ${name} cars`)
    }
    currentcount(){
        console.log(`current count of my cars is ${this.numofcars}`)
    }
}
let car= new cardetails("TATA",10,"Red")

let afterbuy=car.brought("KIA","Highend",1)
car.currentcount()

let aftersell= car.sell("BENZ", 3)
car.currentcount()
