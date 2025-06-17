let companydetails={
    name:"DXC",
    location:"Hyd",
    employee1:function(employeename,employeeid,experience){
      this.employe1name=employeename;
      this.employe1ID=employeeid;
      this.employe1experience=experience
      console.log(`${this.employe1name} is working in ${companydetails.name} and his employee id is${this.employe1ID}`)

      console.log(`${this.employe2name} is working in same comapany ${companydetails.name} has experince for ${this.employe1experience} and his employe id is ${this.employe2id}`)
    }
}

let employe2={
    employe2name:"chandu",
    employe2id:5678,
}
//companydetails.employee1("deepak",1234,2)
companydetails.employee1.call(employe2,"deepak",1234,2)

//example for apply 

let shapes={
    shape1:function(firstshape,numofsides){
this.shape1name=firstshape;
this.sidesforhape1=numofsides;
console.log(`${this.shape1name} has ${this.sidesforhape1} sides.`)
console.log(`example for ${this.shape1name} is ball and moon`)
console.log(`we have another shape that is ${this.secondshape} and it has ${this.sides} sides`)
    }
}

let shape2={
    secondshape:"Rectangle",
    sides:4,
}
//shapes.shape1("circle",0)
shapes.shape1.apply(shape2,["circle",0])