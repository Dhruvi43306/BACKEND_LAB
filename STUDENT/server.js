const express = require("express")
const app = express()
const mongoose = require("mongoose")
const StudentRoute = require("./studentRoute")
app.use(express.json())

mongoose.connect("mongodb://127.0.0.1:27017/studentDB")
.then(()=>console.log("Mongooes Connected."))
.catch(err=>console.log(err))

app.use("/api/student",StudentRoute)

app.listen(3000,()=>{
    console.log("Server Started")
})