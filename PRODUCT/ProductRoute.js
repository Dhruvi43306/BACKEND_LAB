const express = require("express")
const app = express();
const Product = require("./ProductSchema")
app.get("/",async(req,res)=>{
    try{
        const ProductSchema = await Product.findOne()
        res.json(ProductSchema)
    }
    catch(err){
        res.status(500).json({err:err.message})

    }
})

//Get by ProductID
app.get("/:id",async(req,res)=>{
    try{
        const productid = await Product.findById(req.params.id)
        if(!productid){
            return res.status(201).send("Product Not Found!")
        }
        res.json(productid)
    }
    catch(err){
        res.status(500).json({err:err.messag})
    }
})

//Update Product
app.put("/:id",async(req,res)=>{
    try{
        const Updateproduct = await Product.findByIdAndUpdate(req.params.id,req.body, { new: true })
        if(!Updateproduct){
            return res.status(201).send("Product Not Found!")
        }
        res.json(Updateproduct)    
    }
    catch(err){
        res.status(500).json({err:err.messag})
    }
})

//Delete Product
app.delete("/:id", async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);
    if (!product)
      return res.status(404).json("Product Not Found!");
    res.status(204).send("Product are Deleted!");
  } catch (err) {
    res.status(500).json({ err: err.message });
  }
});


//Send Product
app.post("/",async(req,res)=>{
    try{
        const ProductSchema = new Product(req.body)
        const savedProduct = await ProductSchema.save();
        res.status(201).json(savedProduct)
    }
    catch(err){
        res.status(400).json({err:err.messag})
    }
})

module.exports = app