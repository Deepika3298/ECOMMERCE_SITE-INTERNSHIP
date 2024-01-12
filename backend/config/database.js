const mongoose= require('mongoose');
mongoose.set('strictQuery',false);
const connectDB= ()=>{
        mongoose.connect('mongodb+srv://dka3298:sBau9snYgBkRgh0l@cluster0.11nilta.mongodb.net/').then((data)=>{
            console.log(`Database connected:${data.connection.host}`);
        })
}

module.exports=connectDB