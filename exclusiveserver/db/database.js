import mongoose from 'mongoose';
import dotenv from 'dotenv'

dotenv.config()

const db = process.env.MONGO_DATABASE
const exclusiveStore = async() => {

    try {
        await mongoose.connect(db, {
            useUnifiedTopology: true,
            useNewUrlParser: true
        })
        console.log("Database Connect");
    } catch (error) {
        throw new Error
    }
}

export default exclusiveStore;