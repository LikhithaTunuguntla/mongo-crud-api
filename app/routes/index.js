import mongoose from "mongoose";


//EMployee Schema
const EmployeeModel = mongoose.model('Employee',{
    name:String,
    email:String,
    salary:String
});

export default EmployeeModel;
