const router = require('express').Router();
const Catagories=require("../model/Catagories");



router.post("/",async(req,res)=>{
const newCat=new Catagories(req.body);
try{
const savedCat=await newCat.save();
res.status(200).json(saved);
}catch(err){
    res.status(401).json(err);
}
});


router.get("/",async(req,res)=>{
    try{
    const cats=await Catagories.find();
    res.status(200).json(cats);
    }catch(err){
        res.status(401).json(err);
    }
    });





module.exports=router