// 1.
// const http = require("http");
// http.createServer((req,res)=>{
//     res.end("Hello World!");
// }).listen(3000,()=>{
//     console.log("Create Server @3000.http://localhost:3000/")
// })

// 2.
// const http = require("http");
// http.createServer((req,res)=>{
//     if(req.url === '/'){
//         res.end("This is a Home Page!");
//     }
//     if(req.url === '/login'){
//         res.end("This is a Login Page!");
//     }
//     if(req.url === '/about'){
//         res.end("This is a About Page!");
//     }
//     if(req.url === '/contact'){
//         res.end("This is a Contact Page!");
//     }
//     if(req.url === '/logout'){
//         res.end("This is a Logout Page!");
//     }
// }).listen(3000,()=>{
//     console.log("Create server @3000 http://localhost:3000/")
// })

//3.
const http = require("http")
const fs = require("fs");
http.createServer((req,res)=>{
    if(req.url === '/'){
        fs.readFile('about.txt','utf8',(err,data)=>{
            if(err){
                console.log(err);
                
            }
            else{
                res.end(data);
                
            }
        })
    }

}).listen(3000,()=>{
    console.log("Create a Server @3000 http://localhost:3000/")
})