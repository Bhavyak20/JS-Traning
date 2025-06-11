localStorage.setItem("UserName","Adhvik")
localStorage.setItem("Class", "L.K.G")
localStorage.setItem("School","GreenDale")

localStorage.removeItem("Class")
localStorage.clear()

localStorage.setItem("UserName","Adhvik")
localStorage.setItem("Class", "L.K.G")
localStorage.setItem("School","GreenDale")

// let name= localStorage.getItem("UserName")
// document.writeln(`${name} welcome to ${localStorage.getItem("School")}`)


sessionStorage.setItem("studentname", "Aditya")
sessionStorage.setItem("studying", "Fourth")
sessionStorage.setItem("Schoolname","Greendale")

sessionStorage.removeItem("studying")

sessionStorage.setItem("studying", "Fourth")

let studentname=sessionStorage.getItem("studentname")
document.writeln(`${studentname} is studying 4th class in ${sessionStorage.getItem("Schoolname")}`)
