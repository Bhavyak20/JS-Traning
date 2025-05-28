function years (){
    this.fistmonths="January";
    this.firstday="monday";
    this.diferrentmonth="FEBRUARY"
    console.log("this is main function");
    //console.log(this);
}

years.prototype.months=function(){
         this.oddmonth="february";
         console.log("FIRST MONTH OF YEAR IS ", this.firstday)
         
         //console.log(this)
}

{
    years.prototype.leap=function(){
        console.log("we see leap year when we have 29 days in ", this.diferrentmonth)
        
        //console.log(this)
    }
}
let weeks=new years()
weeks.months()
weeks.leap()
console.log(this)
