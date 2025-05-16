let nums = [1,2,3,4,5];
let subjects = ["English","Maths", "Science","Social","GK"];
let schoolname = "NRI School";
let classrooms = ["Class 1","Class 2","Class 3","Class 4","Class 5", ];

console.log(subjects)
console.log(subjects[2])
console.log(nums[4])

document.write(nums[0])
document.write(subjects[0])

const details = `Exams will be held in ${schoolname}.Details of subjects (${subjects}) is given in Paper.Final exam will be ${subjects[4]}. Classrooms(${classrooms}) will be allocated accordingly`;
console.log(details)

const science = ["Biology",
               "Part A",
               1,
               false,
               null,
               ["Chapter1", "Chapter2","Chapter3","Chapter4","Chapter5"]]
console.log(science[0])
document.write(science[1])
window.alert(science[5][1])

var biology = `${science[0]} has total 5 chapter they are ${science[5]}.`
console.log(biology)

//array having objects

let seasons = [
    {
        season :"Winter",
        weather:"cold",

    },
    {
        season:"summer",
        weather:"Hot",
    },
    {
        season:"Rainy",
        weather:"Rain"
    }
]
console.log(seasons)
console.log(seasons[2])
