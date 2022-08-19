import mongoose from "mongoose"
import validator from "validator"

const UserSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Please Provide name"],
        minlength:3,
        maxlength:20,
        trim:true,
    },
    email:{
        type:String,
        required:[true,"Please Provide email"],
        validate:{
            validator:validator.isEmail,
            message:"Please provide a valid email"
        },
        unique:true,
    },
    password:{
        type:String,
        required:[true,"Please Provide password"],
        minlength:6
    },
    lastName:{
        type:String,
        maxlength:20,
        trim:true,
        default:"lastName",
    },
    location:{
        type:String,
        maxlength:20,
        trim:true,
        default:"myCity",
    },
})

export default mongoose.model("User",UserSchema)