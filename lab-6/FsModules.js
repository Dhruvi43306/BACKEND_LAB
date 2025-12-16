 const fs = require("fs");

// fs.readFile("data.txt","utf-8",(err,data)=>{
    
//     if(!err){
//         console.log("SuccessFully Read The Data.\n",data);
//     }
//     else{
//         console.log("Error:",err);
//     }
// })
//or i have write like this error replace _
//and err write a perminetly because if i can not write a error then output will b null.
// fs.readFile("data.txt","utf-8",(_,data)=>{

//===========================================================================================    
// try{
//     const data = fs.readFileSync("data.txt","utf-8");
//     console.log("Data are SucessFully!");
// }
// catch(err){
//     console.log("Error:",err);
// }



//===========================================================================================
// fs.writeFile("output.txt","Hello! Dhruvi Savaliya",(err,data)=>{
//     if(!err){
//         console.log("Succefully Write the Data.");
//     }
//     else{
//         console.log("Error:",err);
//     }
// })




//===========================================================================================
// fs.appendFile("output.txt","\nI am Student!",(err,data)=>{
//     if(!err){
//         console.log("Data append are Successfully!");
//     }
//     else{
//         console.log("Eroor:",err);
//     }
// })



//===========================================================================================
// fs.unlink("temp.txt",(err)=>{
//     if(!err){
//         console.log("File Deleted SuccessFully!")
//     }
//     else{
//         console.log("Error:",err);
//     }
// })




//===========================================================================================
// fs.mkdir("my-data",(err,data)=>{
//     if(err){
//         if(err.code === "EEXIST"){
//             console.log("Folder Already Exits.");
//         }
//         else{
//             console.log("Folder are Not Exits.",err);
//         }
//     }
//     else{
//         console.log("Folder SuccessFully Created.");

//     }
// })




//===========================================================================================
// fs.readdir("my-data",(err,data)=>{
//     if(!err){
//         console.log("Succesfully Read the Directory.",data);
//        data.forEach(element => {
//         console.log(element);  
// });
//     }
//     else{
//         console.log("Error:",err);
//     }
// })




//===========================================================================================
// fs.copyFile("data.txt","info.txt",(err,data)=>{
//     if(!err){
//         console.log("Successfully Copied Data.",data);
//     }
//     else{
//         console.log("Error:",err);
//     }
// })



//===========================================================================================
// What can it detect?

// fs.watch() sends a notification when:

// ✔ File is edited
// ✔ File is deleted
// ✔ File is renamed
// ✔ New file is added to a folder
// ✔ A file inside a folder is modified

// You don’t have to manually check again and again — Node keeps watching automatically.
fs.watch("info.txt",(err)=>{
    if(err){
        console.log("Changed!!");
    }
})




//===========================================================================================

