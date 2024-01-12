const User= require("../models/userModel");
const ErrorHander= require("../utils/errorhander");
const catchAyncError= require("../middleware/catchAsyncError");

//Register a user
exports.registerUser= catchAyncError(async(req,res,next)=>{
    const {name,email,password}=req.body;
    const user= await User.create({
        name,
        email,
        password,
        avatar:{
            public_id:"This is a sample picture",
            url:"profilePicUrl"
        }
    })
    res.status(201).json({
        success:true,
        user
    })
})