const mongoose = require('mongoose')
const connectDB = async () =>{
    try{
        const conct= await mongoose.connect(process.env.MONGO_URI ,{
            useNewUrlParser: true,
            //useCreateIndex: true,
            useUnifiedTopology: true

        } );
        console.log(`Mongodb connected: ${conct.connection.host}`);
    }
    catch (err){
        console.log(`Error: ${err.message}`);
        process.exit(1);
    }
}
module.exports = connectDB;