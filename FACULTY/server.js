//Connectivity
// Express,monogoes,facultyrout require
// const app = express()
// app.use(express.json), Expression.json()bulitin in middlewera che means buffre ma data vyo jase aetle .json ma nakhi devano data
//  mogoes ma three dots ma copy connection string

const express = require("express")
const app = express()
const mongoose = require("mongoose")
const facultyRoute = require("./facultyRoute")
//Middlerwear
app.use(express.json())
mongoose.connect("mongodb://127.0.0.1:27017/facultyDB")

// mongodb://localhost:27017
// atlas link: ama farjiyta ip address and password nakhva j pade aetle yad rakhvana

.then(()=>console.log("MongoDB connected"))
.catch(err=>console.log(err))

//Routes
app.use("/api/faculty",facultyRoute);
app.listen(3000,()=>{
    console.log("Server Started.")
})



