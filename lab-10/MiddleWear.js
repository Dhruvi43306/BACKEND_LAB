//Bulit-in Middleware
// const express = require("express")
//  function sayHello(req,res,next){

//      console.log("Hell Middlewear!!")
//      console.log("Request URL:",req.url);
//      next();
//  }
// const app = express();
   
//     app.get("/",sayHello,(req,res)=>{
//         res.send("Hello world from Homepage")
//     })
//     app.listen(3000,()=>{
//         console.log("Server Started http://localhost:3000")
//     })




//Custom MiddleWare
// const express = require("express")
// const app = express()
// function checkLogin(req,res,next){
//     if(req.query.admin === "true"){
//         console.log("Request Url:",req.url)
//         next();
//     }
//     else{
//         res.status(401).send("Unauthurized")
//     }
// }
//     app.use(checkLogin)
//     app.get("/",(req,res)=>{
//         res.send("Welcome, Admin!!")
//     })
// app.listen(3000,()=>{
//     console.log("Server Start at http://localhost:3000")
// })    


//Static Middleware
// const express = require("express")
// const app = express();
//     app.use(express.static(__dirname))
   
//     app.get("/",(req,res)=>{
//         res.send("Hello world from Homepage")
//     })
//     app.listen(3000,()=>{
//         console.log("Server Started http://localhost:3000")
// })



// Application-level Middlewear
//Middleware that is applied to the entire application using app.use() or app.get().
// const express = require("express");
// const app = express();

// app.use((req, res, next) => {
//     console.log("Request URL:", req.url);
//     next();
// });

// app.get("/", (req, res) => {
//     res.send("Home Page");
// });

// app.listen(3000);



//Router-level Middlewear
//Middleware that works only for a specific router using express.Router().
// const express = require("express");
// const app = express();
// const router = express.Router();

// router.use((req, res, next) => {
//     console.log("Router Middleware Executed");
//     next();
// });

// router.get("/user", (req, res) => {
//     res.send("User Page");
// });

// app.use("/api", router);

// app.listen(3000);



//Error-Handling Middlewear
//Middleware used to handle errors.
// const express = require("express");
// const app = express();

// app.get("/", (req, res) => {
//     throw new Error("Something went wrong!");
// });

// app.use((err, req, res, next) => {
//     res.status(500).send("Error: " + err.message);
// });

// app.listen(3000);


//Built-in Middleware
//Middleware provided by Express itself.
//Common Built-in Middlewares

// express.json()

// express.urlencoded()

// express.static()
const express = require("express")
const app = express()
app.use(express.json())
app.post("/data",(req,res)=>{
    res.send(req.body)
})
app.listen(3000)


//5️⃣ Third-party Middleware

//  Middleware created by external developers and installed using npm.
//npm install morgan
// const express = require("express");
// const morgan = require("morgan");
// const app = express();

// app.use(morgan("dev"));

// app.get("/", (req, res) => {
//     res.send("Home Page");
// });

// app.listen(3000);
