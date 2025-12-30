const mongoose = require("mongoose")
//new mongoose.Schema({}) defines the structure and validation rules for documents before storing them in MongoDB.
const ProductSchema = new mongoose.Schema(
{
        Name:{
            type:String,
            required:true
},
        
Prices:[
    {
        Price:{
            type:Number,
            required:true
        },
        Current:{
             type: Boolean,
            default: false
        },
        Currency:{
            type:String,
            required:true
        }
    }
],
Availabilty:[
    {
        In_stock:{
            type:Boolean,
            required:true
        },
         quantity:{
            type:Number,
            required:true
        }

    }
],
Description:
[
    {
        Feature_list:{
            type:String,
            required:true
        }
    
    }
]
}
)
module.exports = mongoose.model("Product",ProductSchema)
//It creates a Mongoose model and makes it usable in other files.
// Without this line:
// You cannot save data
// You cannot query MongoDB
// Other files cannot access this schema

// This does three things:
// Creates a Model (class)
// Connects schema to a MongoDB collection
// Adds MongoDB functions like:
// .create()
// .find()
// .findById()
// .updateOne()
