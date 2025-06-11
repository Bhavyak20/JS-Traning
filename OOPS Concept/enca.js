class bank{
    bankname;
    banklocation
    constructor(name,loc){
        this.bankname=name;
        this.banklocation=loc;
        console.log(`${this.bankname} is having one branch in ${this.banklocation}`)
    }
    //empdetails(ename,enumber){
     //console.log(`${ename} is working in ${this.bankname} and his id is ${enumber}`)
    //}
    empdetails(trail){
    console.log(`${trail.employeename} is from ${this.banklocation} and working in ${this.bankname}.`)
    console.log(`Number of ${trail.employeename} is ${trail.employeenumber} `)    
}
}

let bankdetails=new bank("SBI","HYD")
//bankdetails.empdetails("Aditya","919191")

class employee{

    constructor(employee1name,employee1number){
this.employeename=employee1name;
this.employeenumber=employee1number;
//console.log(`${employeename} id is ${employeenumber}`)
    }
}

class secondemployee{
    constructor(employee2name,employee2number){
    this.employeename=employee2name;
    this.employeenumber-employee2number
    }
}

let employee1=new employee("Priya",456456)
bankdetails.empdetails(employee1)

let employee2=new secondemployee("DEVI",232323)
bankdetails.empdetails(employee2)


































// class School{
   
//     #schoolName;
//     #schoolLocation;
//     #students = [];
//     static schoolName = "XyzSschool"
//     constructor(name,location){
//         this.#schoolName =  name;
//         this.#schoolLocation = location;
//         //School.schoolName
//     }
//     //void 
//     //return non-void -> string  , boolean

//     //Terminalogy
//     //what is the type of your method.... TL 
//     enrollStudent(studentDetails){
//         //console.log(studentDetails);
//       console.log(`Student ${studentDetails.name} 
//         has enrolled and Id is ${studentDetails.id}
//          and schoolname ${this.#schoolName}`);
//     }
//     // enrollStudent(studentDetails){
//     //     console.log(studentDetails);
//     //     // let student = {
//     //     //     name : "John",
//     //     //     ID   :   "123456"
//     //     // }
//     //     // this.#students.push(student);
//     //     // console.log(`Student ${this.#students[0].name} has enrolled and school name is ${this.#schoolName}`);
//     // }

// }
// class Student{
//     // name;
//     // grade;
//     constructor(sname,sid){
//         this.name = sname;
//         this.id = sid;
//     }
// }

// //School.schoolName
// let student1 = new Student("Alice" , 5);
// //let school1 = new School("xyz school", "Bengolore");
// let school1 = new School("xyz school", "Bengolore");
// school1.enrollStudent(student1);

// //let school1 = new School("xyz school", "Bengolore");
// let student2 = new Student("Clerk" , 2);
// let school2 = new School("abc school", "Hyderabad");
// school2.enrollStudent(student2);

