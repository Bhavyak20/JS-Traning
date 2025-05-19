function customerdetails(location,dob,number,company){
    let customername="Bhavya";
    console.log("CustomerName: " +customername);
    console.log("CustomerLocation: "+location)
    console.log("CustomerDOB: "+dob)
    console.log("CustomerNumber: " +number)
    console.log("CustomerCompany: " +company)
    
}
customerdetails("Hyd","09/09/2000","1234567890","DXC")

//here (location,dob,number,comapny )these are parameters.
//here ("Hyd","09/09/2000","1234567890","DXC") are arguments.

function companydetails( name,branchno,numofbranches){
    let branchesstates=["AP","TS","TN"]
    let telanganabranches=["HYD","WARANGAL"] //Implemented array
    var andhrabranches ={                   //Implemented Object
        branch1:"Vijayawada",
        branch2:"Amaravathi",
        branch3:"Kadapa",
 
    }
    console.log("CompanyName: " +name)
    console.log("TamilBranche:" +branchesstates[2])
    console.log("TS Branch:" +telanganabranches[0])
    console.log("Branches in Rayalaseema: " +andhrabranches.branch3)

}
companydetails("DXC","2","5")
