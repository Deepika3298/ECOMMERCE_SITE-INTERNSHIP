const mongoose= require('mongoose');

const productSchema= new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Please enter Product name"],
        trim: true //Remove whitespaces from string
    },
    description:{
        type:String,
        required:[true,"Please enter Product description"]
    },
    price:{
        type:Number,
        required:[true,"Please enter Product price"],
        maxLength:[8,"Price cannot exceed 8 characters"]
    },
    rating:{
        type:Number,
        default:0
    },
    images:[
        {
            public_id:{
                type:String,
                required:true
            },
            url:{
                type:String,
                required:true
            }
        }
        
    ],
    category:{
        type:String,
        required:[true, "Please enter Product category"]
    },
    stock:{
        type:Number,
        required:[true, "Please enter Product stock"],
        maxLength:[4,"Stock cannot exceed 4 characters"],
        default:1
    },
    numOfReviews:{
        type:Number,
        default:0
    },
    reviews:[
        {
            name:{
                type:String,
                required:true
            },
            ratings:{
                type:Number,
                required:true
            },
            comment:{
                type:String,
                required:true
            }
        }
    ],

    user:{
        type:mongoose.Schema.ObjectId,
        ref:"User",
        required: true
    },
    createdAt:{
        type:Date,
        default:Date.now
    }
})

module.exports=mongoose.model("Product",productSchema)