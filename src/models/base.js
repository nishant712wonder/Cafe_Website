const mongoose = require("mongoose");

const empSchema= new mongoose.Schema({
    Name : {
        type:String,
        required:true
    },
    email : {
        type:String,
        required:true,
        unique:true
    },
    time : {
        type:String,
        required:true
    },
    order: {
        type:[String],
        required:true
    }

})