{//scope-1
    var hindimovies="WAR-2";
    let nameofhero="NTR";
    let releasedate=2;

    console.log(`THERE IS MOVIE IN HINDI that is ${hindimovies},hero of that movie is ${nameofhero}.`)
    {
        //scope-2

        let telugumovies="RRR";
        let director="SSR";
        let numofheros=2
        console.log(hindimovies);
        console.log(nameofhero)

        {
            //scope-3
            let englishmovies="HARRY POTTER";
            let language="ENGLISH"
            console.log(`${nameofhero} is filming new movie which is ${hindimovies}.He also acted in ${telugumovies},directed by ${director}.`)
            console.log(director);
            console.log(nameofhero);

        }
    }

}



//using function in scope chain

{
    //scope-1 using ANONYMOUS Function

    let seasons=(season1,season2,season3)=>{
     console.log(season1);
     seasondemo = season1

    }
    seasons("WINTER","SUMMER","RAINY")
     
    //scope-2 using NAME FUNCTION{
{
        function monthsoftheyear (month1,month2){
           //console.log(`${season1} can be seen in ${month1}`)
           console.log(seasondemo);
           console.log(month1);
           monthsdemo=month2;

        }
       monthsoftheyear("JANUARY","FEBRUARY")
       {
        //scope-3 using IIFE 
        (
            function(){
                console.log("HELLO WORLD")
                console.log(monthsdemo)
                console.log(seasondemo)
            }
            ()
        )
       }
    
}
}