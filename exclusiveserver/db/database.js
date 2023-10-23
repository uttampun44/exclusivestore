import mongoose from 'mongoose';


const db = 'mongodb+srv://Ryderuttam:Ryderuttam@cluster0.rs3wn4v.mongodb.net/exclusivestore?retryWrites=true&w=majority'
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