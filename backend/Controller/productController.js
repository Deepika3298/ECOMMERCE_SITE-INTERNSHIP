const Product= require("../models/productModel");
const ErrorHander= require("../utils/errorhander");
const catchAyncError= require("../middleware/catchAsyncError");
const ApiFeatures= require('../utils/apiFeatures');

//Create Product---Admin
exports.createProduct=catchAyncError(async (req,res,next)=>{

    const product= await Product.create(req.body);

    res.status(201).json({
        success:true,
        product
    })
});

//Get All products
exports.getAllProducts=catchAyncError(async (req,res)=>{
    const resultPerPage=5;
    const productCount= await Product.countDocuments();
    const apiFeatures= new ApiFeatures(Product.find(), req.query)
    .search()
    .filter()
    .pagination(resultPerPage);

    const products= await apiFeatures.query;

    res.status(200).json({
        success:true,
        products})
});

//Get Product Details
exports.getProductDetails= catchAyncError(async (req,res,next)=>{
    const product= await Product.findById(req.params.id);

    if(!product){
        return next(new ErrorHander("Product not Found",404));
    }
    
    res.status(200).json({
        success:true,
        product,
        productCount
    })
});

//Update product---Admin
exports.updateProduct= catchAyncError(async (req,res,next)=>{

    let product= await Product.findById(req.params.id);

    if(!product){
        return next(new ErrorHander("Product not Found",404));
    }

    product= await Product.findByIdAndUpdate(req.params.id,req.body,{
        new:true,
        runValidators:true,
        useFindAndModify:false
    });

    res.status(200).json({
        success:true,
        product
    })
});

//Delete Product---Admin
exports.deleteProduct= catchAyncError(async(req,res,next)=>{

    const product= await Product.findById(req.params.id);

    if(!product){
        return next(new ErrorHander("Product not Found",404));
    }

    await product.deleteOne();

    res.status(200).json({
        success:true,
        message:"Product Deleted Successfully"
    })
});