const mongoose= require('mongoose');
mongoose.set('strictQuery',false);
const connectDB= ()=>{
        mongoose.connect(process.env.DB_URI).then((data)=>{
            console.log(`Database connected:${data.connection.host}`);
        })
}

module.exports=connectDB