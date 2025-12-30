const express = require("express")
const app = express()
const mongoose = require("mongoose")

const ProductRoute = require("./ProductRoute")
// ✔ Reads the file
// ✔ Executes it
// ✔ Gets module.exports
// ✔ Stores it in ProductRoute
//But Express still does NOT know about these routes.


//It allows Express to read JSON data from the request body (req.body).
app.use(express.json());


mongoose.connect("mongodb://127.0.0.1:27017/productDB")
.then(()=>console.log("Mongooes Connected."))
.catch(err=>console.log(err))

//Application level Middlewear
app.use("/api/ProductSchema",ProductRoute)
//Registers the router with Express
// ✔ Tells Express WHEN to use it
// ✔ Tells Express WHERE to use it
//“If request starts with /api/ProductSchema, send it to ProductRoute.”
app.listen(3000,()=>{
    console.log("Server Started.")
})