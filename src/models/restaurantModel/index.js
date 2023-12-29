import mongoose from "mongoose";

const resturantModel = new mongoose.Schema(
    {
        resturantId:{
            type:Number,
        },
        resturantName:{
            type:String,
            required:true,
        },
        restaurantDescription:{
            type:String,
            required:true,
        },
        resturantImages:[String],
        resturantOwner:{
            name:{type:String},
            email:{type:String},
            phone:{type:Number,required:true},
        },
        resturantAddress: {
            telephone: Number,
            zipcode: Number,
            city: String,
            street: String,
            currentLocation: String,
        },
    }
);

export const RestaurantModel =  mongoose.model("restaurants",resturantModel)
