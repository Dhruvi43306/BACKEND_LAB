const { error } = require("console")

//Here data are Asycronuous that first print hello world and then print ans
// fs = require("fs")
// const ans = fs.exists("darshan.txt",(ans)=>{
//     console.log(ans)})
//     console.log("Hello World")

// --------------------------------------------------------------
//Here data are Syncronouse that first print true then print Hello world
// const ans1 = fs.existsSync("darshan.txt") 
// console.log(ans1);
// console.log("Hello world")   

//---------------------------------------------------------------
// fs.stat("darshan.txt",(error,data)=>{
//     if(!error){
//         console.log(data);
//     }
//     else{
//         console.log(error);
//     }
// })

//------------------------------------------------------------------
//Here this path return the buffertype data,if i write a data.tostring then bufferdata convert to string.
// fs.readFile("darshan.txt",(error,data)=>{
//      if(!error){
//         console.log(data,"\n",data.toString);
//      }
//     else{
//         console.log(error);
//      }
// })

 //----------------------------------------------------------------
// fs.writeFile("darshan.txt","This is Updated Messaje",(error)=>{
//      if(!error){
//          console.log("SucessFully");
//      }
//      else{
//          console.log(error);
//      }
// })

 //----------------------------------------------------------------
// fs.appendFile("darshan.txt","This is install Messaje",(error)=>{
//      if(!error){
//          console.log("SucessFully");
//      }
//      else{
//          console.log(error);
//      }
// })

//-----------------------------------------------------------------
// fs.writeFileSync("darshanNew.txt","This is Updated Messaje",(error)=>{
//      if(!error){
//          console.log("SucessFully");
//      }
//      else{
//          console.log(error);
//      }
// })

//------------------------------------------------------------------
// fs.rename("darshan.txt","college.txt",(error)=>{
//      if(!error){
//          console.log("SucessFully");
//      }
//      else{
//          console.log(error);
//      }
// })

//====================================================================
const child_process = require("child_process")
const { stdout, stdin } = require("process")
child_process.exec("college.txt",(error,stdout,stdin)=>{
    console.log(stdin);
    console.log(stdout);
})