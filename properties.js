 class School{
     #_sName;    //Private
     constructor(sname){
         this.#_sName = sname;
     }
     get studentName(){
        return this.#_sName;
     }
     set studentName(value){
        // your wish
        if(typeof value == "string"){
            this.#_sName = value;
        }
        else{
             console.log("!!!Hey you are not madan . pleae try with madan only...")
            //console.log(`Please enter the string value only not the ${this.#_sName}`);
        }
     }
}
let mySchool = new School(123);
console.log(mySchool.studentName);
mySchool.studentName  = 456;
console.log(mySchool.studentName);
///mySchool.getTeachersDetails();
// class Details {
//     constructor() {
//         this._S_name = "sree";  // Use a private variable convention
//         this.S_id = "123";
//     }
 
//     get S_name() {
//         return this._S_name;
//     }
 
//     set S_name(value) {
//         if (typeof value === "string") {
//             this._S_name = value;
//         } else {
//             console.log("You have entered wrong data type");
//         }
//         // if (typeof value === "string" && /^[a-zA-Z]+$/.test(value)) {
//         //     this._S_name = value;
//         // } else {
//         //     console.log("Only alphabetic characters are allowed.");
//         // }
//         // this.S_name = String(value);
//     }
// }
// let rDetails = new Details();
 
// console.log(rDetails.S_name);  // Outputs: sree
// rDetails.S_name = "vardhan";    
// console.log(rDetails.S_name);   // Output: vardhan
 
// // rDetails.S_name = 12345;        //  Invalid input
// // console.log(rDetails.S_name);   // Output: vardhan (unchanged)
 
// // rDetails.S_name = "abc123";     //  Invalid input (contains numbers)
// // console.log(rDetails.S_name);   // Output: vardhan
 
// // rDetails.S_name = "Sree";       // Valid input (letters only)
// // console.log(rDetails.S_name);  //Outpu : Sree