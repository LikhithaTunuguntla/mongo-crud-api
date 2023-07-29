import express from 'express'

import EmployeeModel from '../routes/index.js'

const router = express.Router();

//getting the data from database
router.get('/employees',async(req,res)=>{
    try{
        const result = await EmployeeModel.find();
        console.log(result);
        res.send(result);
    }
    catch(err){
        console.log(err);
    }
});

//To create the data 
router.post('/employees',async(req,res)=>{
    try{
        const {name,email,salary} = req.body;
        const doc = new EmployeeModel({
            name:name,
            email:email,
            salary:salary
        })
        const result = await doc.save();
        res.send(result);
    }
    catch(err){
        console.log(err);
    }
})

//Get the required data based on id
router.get('/employees/:id',async(req,res)=>{
    try{
        const id = req.params.id;
        const result = await EmployeeModel.findById(id);
        res.send(result);
    }
    catch(err){
        console.log(err);
    }
})

//update the data based on id
router.put('/employees/:id',async(req,res)=>{
    try{
        const result = await EmployeeModel.findByIdAndUpdate(req.params.id,req.body);
        res.send(result);
    }
    catch(err){
        console.log(err);
    }
})

//Delete the data based on id
router.delete('/employees/:id',async(req,res)=>{
    try{
        const result = await EmployeeModel.findByIdAndDelete(req.params.id);
        res.send("Employee Deleted");
    }
    catch(err){
        console.log(err);
    }
})

export default router;