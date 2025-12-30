//All Routee
//expres,app,faculty ne require fculty ma relative path apvanu
//asynic hare await use thay
const express = require("express")

const app = express()
const Faculty = require("./faculty")
app.get("/",async(req,res)=>{
    try{
        const faculty = await Faculty.find();
        res.json(faculty);
    }
     catch(err){
        res.status(500).json({err:err.message})
    }
})
app.get("/:id",async(req,res)=>{
    try{
        const facultyid = await Faculty.findById(req.params.id);
        if(!facultyid)
            return res.status(201).send("Faculty are Not Found.")
        res.json(facultyid);
    }
     catch(err){
        res.status(500).json({err:err.message})
    }
})
app.put("/:id",async(req,res)=>{
    try{
        const updatefaculty = await Faculty.findByIdAndUpdate(req.params.id,req.body,{new:true})
        if(!updatefaculty)
            return res.status(201).send("Faculty Not Found!")
        res.json(updatefaculty)
    }
    catch(err){
        res.status(500).json({err:err.message})
    }
})
app.delete("/:id",async(req,res)=>{
    try{
        const deletefaculty = await Faculty.findByIdAndDelete(req.params.id)
        if(!deletefaculty)
            return res.status(201).send("Faculty Not Found!")
        res.json()
    }
    catch(err){
        res.status(500).json({err:err.message})
    }
})
app.post("/",async(req,res)=>{
    try{
        const faculty = new Faculty(req.body)
        const savedfaculty = await faculty.save();
        res.status(201).json(savedfaculty)
    }
    catch(err){
        res.status(400).json({err:err.message})
    }
})

module.exports = app;