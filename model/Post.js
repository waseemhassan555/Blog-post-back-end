const mongoose= require("mongoose")


const PostSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true,
        unique:true
    },desc:{
        type:String,
        required:true
    },Photo:{
        type:String,
        required:false,
    },username:{
        type:String,
        required:true,
    },catagories:{
        type:Array,
        required:false,
    },


 
},
{timestamps:true}
    
);
module.exports=mongoose.model("Post",PostSchema);