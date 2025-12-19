//1.print Hello World using Express.

// const express = require("express")
// const app = express();
// app.get('/',(req,res)=>{
//    res.send("Hello Vishu and Priyanshi!!")
// })
// app.listen(3000,()=>{
//     console.log("Web Server is started @3000 http://localhost:3000/")
// })




//---------------------------------------------------------------------
//2.match the 5 rout in url and print user wanted messag using express.

// const express = require("express")
// const app = express();
// app.get('/',(req,res)=>{
//     res.send("Welcom My HomePage")
// })
// app.get('/vishva',(req,res)=>{
//     res.send("Hello vishu!!")
// })
// app.get('/priyanshi',(req,res)=>{
//     res.send("Hello Priyanshi!!")
// })
// app.get('/dhruvi',(req,res)=>{
//     res.send("Hello Dhruvi!!")
// })
// app.get('/netri',(req,res)=>{
//     res.send("Hello Netri")
// })
// app.listen(3000,()=>{
//     console.log("Web server is started.@3000 http://localhost:3000/")
// })



//---------------------------------------------------------------------
//3.read file and print data using express.
// const express = require("express")
// const fs = require('fs')
// const app = express();
// app.get('/',(req,res)=>{
//    res.send("Hello Vishu and Priyanshi!!")
// })
// app.get('/file',(req,res)=>{
    
//     fs.readFile("demo.txt",'utf-8',(err,data)=>{
//         if(err){
//             res.send("Error")
//         }
//         else{
//             res.send("<h1>welcome</h1>"+data)
//         }
//     })
// })
// app.listen(3000,()=>{
//     console.log("Web Server is started @3000 http://localhost:3000/")
// })

const express = require("express")
const app = express();
app.get('/',(req,res)=>{
   res.send("Hello Vishu and Priyanshi!!")
})
app.get("/json",(req,res)=>{
    // res.statusCode = 200;
    // res.setHeader('Content-Type','application/json')
    // res.send(JSON.stringify({message:"Welcome Json-Data!!"}))

    res.json([{Roll_no:101,name:"Dhruvi",age:25},{Roll_no:102,name:"Vishva",age:19}])
    res.json({Roll_no:101,name:"Dhruvi",age:25},{Roll_no:102,name:"Vishva",age:19})

})
app.listen(3000,()=>{
    console.log("Web Server is started @3000 http://localhost:3000/")
})

