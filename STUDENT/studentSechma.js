const mongoose = require("mongoose")
const studentSechma = new mongoose.Schema({
    StudentEnrollmentNumber:{
        type:String,
        required:true
    },
    StudentName:{
        type:String,
        required:true
    },
    StudentRollNumber:{
        type:Number,
        required:true
    },
    StudentDepartment:{
        type:String,
        required:true
    }

})
module.exports = mongoose.model("Student",studentSechma)
