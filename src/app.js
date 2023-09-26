const express = require("express");
const bodyparser = require("body-parser");

require("../db/conn");
const Student = require("../models/student");

const app = express();
app.use(bodyparser.json());


// Get all students data from database
app.get("/student", async (req,res)=>{

    try {

        const data = await Student.find();
        if(data){
            return res.status(200).send(data);
        } else {
            return res.status(400).send("Unable to fetch data");
        }

    } catch (e) {
        return res.status(400).send("An error Occured !");
    }

})


// Get particular student data based on id from database 
app.get("/student/:id", async (req,res)=>{

    try{
        const data = await Student.findById({_id:req.params.id})
        if(data){
            return res.status(200).send(data);
        } else {
            return res.status(400).send("Data not found");
        }
    } catch (e) {
        return res.status(400).send("An error Occured !");
    }
    
})


// Add student to database
app.post("/student", async (req,res)=>{

    let student = new Student(req.body);
    try {

        student = await student.save();
        if(student){
            return res.status(201).send(student);
        } else {
            return res.status(400).send("Unable to Save data");
        }

    } catch (e) {
        return res.status(400).send("An error Occured !");
    }

})


app.listen(8000,()=>{
    console.log("server started at port 8000")
})