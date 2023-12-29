import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        name:{
            type:String,
            required:true,
        },
        email:{
            type:String,
            required:true,
            undefined:true,
        },
        password:{
            type:String,
            required:true,
        },
        contactInfo: {
            telephone: Number,
            zipcode: Number,
            city: String,
            street: String,
            houseNumber: String
        }
        
    }
);

export default mongoose.model('user',userSchema);