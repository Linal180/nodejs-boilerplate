import userReviewModel from "../../models/userReviewModel/userReviewModel.js";

export const addUserReviews = async(req,res)=>{
    try{
        const {resturantId,resturantName,resturantDiscrition} = req.body;
        const {telephone,zipcode,city,street,currentLocation} = resturantAddress;

    }catch(error){
        console.log(error);
        console.log("Internl Server error: " + error);
        return res.status(500).json({message:"Internl Server error: " + error});
    }
}