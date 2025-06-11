class trail{
    //fields
    language="English";
    #planet="Earth";
    //constructor member
    constructor(one,two){
        this.on=one
        this.tw=two
        //console.log("hello world.we live in a planet name is ",this.planet)
        console.log(`${one} and ${two}`)
        console.log(this.on)
        this.#planet="SATURN"
        console.log(`another planet is ${this.#planet}`)
    }
       // function as member but we don't use function keyword
    trailfunction(para1,para2){
     console.log("this is method")
    console.log(`we only have one ${this.on}`)
    console.log(` we only ${this.tw} once`)
    console.log(`there are two types we greet in ${this.language} ${para1} and ${para2}`)
    }
    secondtrailfunction(){
        return["TELUGU","ENGLISH","HINDI","MATHS"]
    }
}
const secondtrail= new trail("life","live").secondtrailfunction();
console.log(secondtrail)

//new trail("life","live").secondtrailfunction()
// const test=new trail("life","live")
// test.trailfunction("hi","hello")
new trail("life","live").trailfunction("hi","hello")

