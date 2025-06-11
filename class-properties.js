//class has few imp members they are 1.constructor 2.properties 3.methods 4.fields

class companay{
    //fields
    employeename;
    compname;

    constructor(employe,organization){
     this.employeename=employe;
     this.compname=organization;
     console.log(`${this.employeename} is working in ${this.compname}` )
    }
    get employeedetails(){
        return this.employeename
    }
    set employeedetails(value){
        this.employeename = value;
        if(typeof value == "string"){
              console.log("hello thiru")
        }
        else{
            console.log("employee details are wrong!!!!")
        }
    }
    get companydetails(){
        return this.compname;
    }
    set companydetails(value){
      this.compname=value;
      if(typeof value != Number){
        console.log(`${this.employeename} is working in ${this.compname}`)
      }
      else{
        console.log("No details available")
      }
    }
}
let details=new companay("dev","dxc");
console.log(details.employeedetails);
details.employeedetails = "thiru";
console.log(details.employeedetails)

console.log(details.companydetails)
details.companydetails="tcs"
console.log(details.companydetails)




















//     get employeedetails(){
//         return employe;
//     }

//     set employeedetails(value){
//     if(typeof value == "string"){
//          this.employeename=value
//     }
//     else{
//         console.log("EMPLOYEE DETAILS ARE WRONG!!!")
//     }
     
//     }
// }
// let companaydetails=new companay("Dev","123")
// console.log(companaydetails.employeedetails)
// companaydetails.employeename = 123;
// console.log(companaydetails.employeedetails)
