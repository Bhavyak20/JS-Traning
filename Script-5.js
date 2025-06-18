//synchronous call

function sleep(time){
    let starttime=new Date().getTime();
    let endtime=starttime + time;
    while(new Date().getTime() < endtime){

    }
        
}

function cars(brand,colour,callbackhell){
   sleep(5000);
 
console.log(`My friend bought an ${brand} and it's colour is ${colour}`)
callbackhell()
}

function bike(bikebrand,bikecolour,hell){
    sleep(3000)
console.log(`I bought an ${bikebrand} and it's colous is ${bikecolour}`)
sleep(2000)
    hell();
}

function cycle(cyclebrand,cyclecolour){
    sleep(2000)
console.log(`I had and cycle which name is ${cyclebrand} and it's colour is ${cyclecolour}`)
}
console.time("time taken")
cars("Audi","White",(()=>{
  bike("Enfield","Black", (()=>{
    cycle("Lady Bird", "Pink")
  }))
}))
console.timeEnd("time taken")
