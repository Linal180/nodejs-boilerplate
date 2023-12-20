import mongoose from "mongoose";

const userReviewModel = new mongoose.Schema(
    {
        userEmail:{
        type:String,
        required:true
        },
        userReviews:[
            {
              reviewId:{type: String},
              reviesStatus:{type:Boolean,default:false},
              reviewDate:{type:String},
              reviesDetails:{type:String},
              reviesRating:{type:Number},
              reviesHelpful:{type:Boolean,default:false},
              reviesImmages:[],
            }
          ],
    }
)

export default mongoose.model("userReviews", userReviewModel);