//IIFE without using parameters
(
    function(){
        console.log("HELLO");
    }
)();




//IIFE(uusing parameters)
  
(
          function(moviename,director="SSR"){
            console.log("nameof movie:" +moviename);
            console.log("DIECTOER:" +director)
        }
      )("BAHUBALI");
//using settimeout predefined function

      setTimeout(function() {
        console.log("PRINTING TIMEOUT")
      }, 10000);

      setInterval(() => {
    console.log("Javascript");
    document.write("HELLO WORLD")
},5000);

      