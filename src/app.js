const express = require("express");

require("../db/conn");
const Student = require("../models/student");

const app = express();


app.get("/",(req,res)=>{
    res.status(200).send("<h1>hello</h1>")
})

app.post("/student", async (req,res)=>{
    let student = new Student({
        name:"john",
        mobile: 8474984908,
        email:"john@gmail.com",
        address:"pune"
    });
    student = await student.save();
    console.log(student);
    res.status(201).send(student);
})

app.listen(8000,()=>{
    console.log("server started at port 8000")
})