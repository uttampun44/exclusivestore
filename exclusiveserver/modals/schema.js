import mongoose from "mongoose";
import validator from "validator";
import bcrypt from 'bcrypt';
import  Jwt  from "jsonwebtoken";
import dotenv from 'dotenv'

dotenv.config()

const secret_key = process.env.SECRET_KEY


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
    },
    tokens: [
        {
            token: {
                type : String,
                required: true
            }
        }
    ]
})

// password hashing
user.pre("save", async function(next){
    if (this.isModified('password')) {
        this.password = await bcrypt.hash(this.password, 8);
    }
   next();
})

// generate token
user.methods.generateAuthtoken = async function(){
    try {

        let tokenGenerate = Jwt.sign({id:this._id}, secret_key,  {
            // token will expires after one day
            expiresIn : '1d'
        })

        this.tokens = this.tokens.concat({token:tokenGenerate})
        await this.save();
        return tokenGenerate;

    } catch (error) {
        throw new Error
    }
}

// creating model
const exclusivestoreUser = new mongoose.model("exclusiveUser", user);
export default exclusivestoreUser
