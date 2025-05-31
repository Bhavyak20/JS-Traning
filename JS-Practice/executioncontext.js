//global block

let obj = {
    key: "hello",
    program: "JS",
    execution: "Visual studio",
    numofclasses: 30,
    topics: function (one, two, three, four) {
        console.log("First topic is :" + one)
    }

}
debugger;
obj.topics("variables", "Data Types", "Parameters", "Functions")
//console.log(fewmoreclasses)  -->this will not execute.because fewmoreclasses varaiable is in local block.


//local block1
{
    let fewmoreclasses = 20;
    console.log("total classes:", fewmoreclasses + obj.numofclasses)
    console.log(obj.execution)

}
debugger;


//scope chain
{
    //scope1
    let srh = "hyd";
    let csk = "chennai";
    let rcb = "Bang"

    {
        //scope2

        let space = ["sun", "moon", "stars"]
        let planets = ["earth", "jupiter", "saturn"]
        console.log(space[2])
        console.log(planets[0])
        console.log(rcb)

debugger;

        {
            //scope3
            let object = {
                press: "one",
                dail: 2,
            }
            debugger;
            console.log(planets[2])
            console.log(space[1])
            console.log(object.dail)
        }
    }
}