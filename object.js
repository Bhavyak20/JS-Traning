//object:collection of key value

let student = {
Name:"Hari",
Age:15,
Class:9,
Schoolname:"NRI",
Percentage:99,
State:"ANdhra Pradesh",
}
console.log(student)
console.log(student.Name)
window.alert(student.Age)

let hari =`${student.Name} completed 9th standard and promoted to 10th in ${student.Schoolname} School`;
console.log(hari)
document.write(hari)

const space = {
             sky : ["Blue", "Black", "Orange","Purpule"],
             planets:[ "sun","stars","moon","asteroids"],
}
console.log(space)
console.log(space.sky)
console.log(space.sky[2])
console.log(space.planets[3])
document.write(space.planets[2])


//defined array in object

let transportways={
      roadways:"Car",
      waterways:"ship",
      typesoftransport:["road","water","track","air"]
      
}
console.log(transportways)
console.log(transportways.typesoftransport[1])