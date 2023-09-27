const express = require("express");
const router = new express.Router();
const bodyparser = require("body-parser");

const Student = require("../../models/student")

router.use(bodyparser.json());
router.use(bodyparser.urlencoded({extended:true}))

// Get all students data from database
router.get("/student", async (req,res)=>{

    try {

        const data = await Student.find();
        if(!data){
            return res.status(400).send("Unable to fetch data");
        }
        return res.status(200).send(data);

    } catch (e) {
        return res.status(400).send(e);
    }

})


// Get particular student data based on id from database 
router.get("/student/:id", async (req,res)=>{

    try{
        const data = await Student.findById({_id:req.params.id})
        if(!data){
            return res.status(400).send("Data not found");
        }
        return res.status(200).send(data);
    } catch (e) {
        return res.status(400).send(e);
    }
    
})


// Add student to database
router.post("/student", async (req,res)=>{

    let student = new Student(req.body);
    try {
        student = await student.save();
        if(!student){
            return res.status(400).send("Unable to Save data");
        }
        return res.status(201).send(student);

    } catch (e) {
        return res.status(400).send(e);
    }

})


// Patch data of particular student from the database
router.patch("/student/:id" , async (req,res)=>{
    
    try{
        const data = await Student.findByIdAndUpdate({_id:req.params.id},req.body,{new:true})
        if(!data){
            return res.status(400).send("Unable to modify data");
        }
        return res.status(201).send(data)
    } catch(e) {
        return res.status(400).send(e)
    }

})


// Delete data of particular student from the database
router.delete("/student/:id", async (req,res)=>{
    
    try{
        const deletedData = await Student.findByIdAndDelete({_id:req.params.id});
        if(!deletedData){
            return res.status(400).send("Unable to delete the data");
        }
        return res.status(200).send(deletedData);
    } catch (e){
        return res.status(400).send(e);
    }

})

module.exports = router;
