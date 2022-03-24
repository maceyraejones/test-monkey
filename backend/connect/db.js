

const mongoose = require("mongoose");



MONGO_URI = "mongodb+srv://vpham:vpham@cluster0.yqbww.mongodb.net/test";

const connectDB = async() =>{

    try {
        await mongoose.connect(MONGO_URI,{

            useNewUrlParser: true,
            useUnifiedTopology: true,
            // useCreateIndex: true,
            // useFindAndModify: true,
        });
console.log('DB connected')
        } catch (error){
            console.error('DB failed')
        }
    
}
module.exports = connectDB;