import mongoose, { Schema } from "mongoose";
import validator from "validator"

const reservationSchema= new mongoose.Schema({
    firstName:{
        type:String,
        required:true,
        minlength:[3,"First name must contain at least 3 characters."],
        maxlength:[15,"First name must contain at most 15 characters."],
    },
    lastName:{
        type:String,
        required:true,
        minlength:[3,"Last name must contain at least 3 characters."],
        maxlength:[15,"Last name must contain at most 15 characters."],
    },

    email:{
        type:String,
        required:true,
        validate:[validator.isEmail,"Provide a valid Email"],

    },
    phone:{
        type:String,
        required:true,
        minlength:[10,"Phone number must contain 10 digits."],
        maxlength:[10,"Phone number must contain 10 digits."],
    },
    time:{
        type:String,
        required:true
    },
    date:{
        type:String,
        required:true
    }
}) 

export const Reservation= mongoose.model("Reservation",reservationSchema)