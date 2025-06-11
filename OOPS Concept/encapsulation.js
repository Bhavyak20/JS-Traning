class school{
    #schoolname;//this is private field we can't use outside the class
    #schoollocation;
    #student=[];
    //static schoolpricipal ="vijay"
    constructor (name,location){
    this.#schoolname=name;
    this.#schoollocation=location
    }
//     enrollstudent(){
//         let studentdetails={
//             name:"dev",
//             id:1234,
//         }
//         this.#student.push(studentdetails)//here i used .push to push object studentdetails to #student[] it will take studentdetails as input in array
//     console.log(`${studentdetails.name} studies in ${this.#schoolname} and it is located at ${this.#schoollocation}`)
//     //console.log(`${this.#student[0].name} studies in ${this.#schoolname} and it is located at ${this.#schoollocation}`)
       
// }
    enrollstudent(studentdetails){
        console.log(`${studentdetails.name} is studying in ${this.#schoollocation}`)
    }
 }

class student{
    constructor(sname,sid){
    this.name=sname;
    this.id=sid
    }
}

let schooldetails=new school("NRI","VIJ");
//schooldetails.enrollstudent();
//school.schoolpricipal

let student1=new student("aarthi","999")
schooldetails.enrollstudent(student1);

let student2=new student("deepu", 999);
schooldetails.enrollstudent(student2)

