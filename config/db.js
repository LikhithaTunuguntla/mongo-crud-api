import mongoose from 'mongoose';

const connectDB = async(Database_Url)=>{
    try{
        const DB_OPTIONS= {
            dbName:"crud-api",
        };
        await mongoose.connect(Database_Url,DB_OPTIONS);
        console.log("connected successfully");
    }
    catch(err){
        console.log(err);
    }

};

export default connectDB;