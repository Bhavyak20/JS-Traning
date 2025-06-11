class bankdetails{
    constructor(banknam,holdername,accountnum,ammount){
    this.bankename=banknam;
    this.accountholder=holdername;
    this.accountnumber=accountnum;
    this.initialammount=ammount;
     }
   depositammount(ammountdeposited){
        this.initialammount = this.initialammount +  ammountdeposited;
        //console.log(`Ammount deposited in ${this.accountholder} account is ${ammountdeposited}`)
    }
    withdraw(ammountwithdraw){
        if(this.initialammount >= ammountwithdraw){
            this.initialammount = this.initialammount - ammountwithdraw
     //console.log()
        }
        else{
            console.log("Ammount insufficient in account of", this.accountholder )
        }
    }
    checkbalance(){
        return this.initialammount;
    }
}
let bank=new bankdetails("SBI","Deepu","0123456",5000);
bank.depositammount(200);

let bankstatement=bank.checkbalance();
console.log(`Balance after ammount deposited is ${bankstatement}`);
setTimeout(()=>{
    bank.withdraw(1000)
let statement=bank.checkbalance();
console.log(`Balance after ammount withdraw is ${statement}`);

},3000)


// class Bank{

//     constructor(accountNumber , initialBalance , owerName){
//         this.accountNumber = accountNumber;   
//         this.balance = initialBalance;
//         this.ownerName = owerName;
//     }


//     deposit(depositamount){
//         this.balance = this.balance + depositamount;
//         console.log(`Deposited ${depositamount} into account ${this.accountNumber}`);
//     }

// //     withdraw(withDrawAmount){
//         if(this.balance >= withDrawAmount){
//             this.balance = this.balance - withDrawAmount;
//         }
//         else{
//             console.log("%cInSufficeint Funds" , 'color:red');
//         }
//     }

//     checkBalance(){
//         return this.balance;
//     }
// }

// let myBank = new Bank("12345667", 2000 , "Madan" );
// myBank.deposit(500);

// let myAmount = myBank.checkBalance();
// console.log(`Now my latest statement ${myAmount}`);

// //After 20 Seconds
// console.log("I am at bank. doing withdraw");
// setTimeout(()=>{
//     myBank.withdraw(1000);
//     let myAmount = myBank.checkBalance();
//     console.log(`Now my latest statement ${myAmount}`);
// },5000)


