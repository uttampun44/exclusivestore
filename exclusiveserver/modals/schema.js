import mongoose from "mongoose";
import validator from "validator";
import bcrypt from 'bcrypt';

const user = new mongoose.Schema({
    fullname:{
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("Email is not a valid");
            }
        }
    },
    password: {
        type: String,
        required: true,
        minlength: 8,
    }
})

user.pre("save", async function(next){
    if (this.isModified('password')) {
        this.password = await bcrypt.hash(this.password, 8);
    }
   next();
})

const exclusivestoreUser = new mongoose.model("exclusiveUser", user);
export default exclusivestoreUser
