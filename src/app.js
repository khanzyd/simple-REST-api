const express = require("express");

require("../db/conn");
const studentRouter = require("./Router/student_Router")

const app = express();
app.use(studentRouter);


app.listen(8000,()=>{
    console.log("server started at port 8000")
})