
const mongoose = require("mongoose");
const schema = mongoose.Schema;

const studentschema = new schema({
    name:{
        type:String,
        required:true
    },
    mobile:{
        type:Number,
        required:true,
        min:10,
        unique:true
    },
    email:{
        type:String,
        unique:true,
        required:true
    },
    address:{
        type:String,
        required:true
    }
});

const Student = mongoose.model("Student",studentschema);

module.exports = Student;