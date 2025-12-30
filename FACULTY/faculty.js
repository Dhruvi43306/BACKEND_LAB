// //sechma
// mongooes require
// .schmea monogoes nu function che method nathi

const mongoose = require("mongoose");
const faculty = new mongoose.Schema(
    {
    name:{
        type:String,
        required:true
    },
    department:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true  //ama data empty n rakhi shkiye beacuse you ghave write true(aya validation muki  shkay like this max ,min)
//(bacuse email are uniq)
    },
    experianse:{
        type:String,
        required:true
    }
}
)
module.exports = mongoose.model("faculty",faculty)