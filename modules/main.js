import { bankname, customer } from "./bank.js";
import { banklocation, employee} from "./employe.js";
//bank file
console.log(bankname)
let customerdetails=customer("Aditya", 12345);
console.log(customerdetails)

//employee file
console.log(banklocation)
let employeedetails=employee("Ravi")
console.log(employeedetails)

document.body.innerHTML = `<h2> ${bankname} </h2> <h2> ${banklocation} <h2>` 
