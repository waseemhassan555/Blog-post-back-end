 const router = require('express').Router();
 const User=require("../model/User");
  const bcrypt= require("bcrypt");

//  Register
router.post("/register",async(req,res)=>{
    try{
        const salt= await bcrypt.genSalt(10)
//        const hashedPass = await bcrypt.hash(req.body.password,salt)
const newUser=new User({
    username: req.body.username,
    email: req.body.email,
    password:req.body.password,
});
console.log("111111112345555555555556789");
console.log("user",newUser);
const user= await newUser.save();
if(user){
    res.status(200).json(user);
}
else {
    res.status(400).send("user not save");
}
    } catch (err){
        res.status(500).json(err);
    }
});
//  Login
router.post("/login",async(req,res)=>{
try{
    const user=await User.findOne({username:req.body.username})
    !user && res.status(400).json("worng deatils!")
    const validated= await bcrypt.compare(req.body.password,user.password)
    !validated && res.status(400).json("worng deatils!")
    const {password,...others}=users._doc;

    res.status(200).json(others);

}catch(err){

    res.status(500).json(err);

}
})
module.exports=router