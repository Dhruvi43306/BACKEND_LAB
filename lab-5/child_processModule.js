//Using Exec Method
const child_process = require("child_process")
 child_process.exec("node -v",(err,stdout)=>{
    if(!err){
         console.log("Node Version:",stdout);
         console.log("ALL Child_Processes Method:",child_process)
     }
     else{
        console.log("Error");
     }
 })



