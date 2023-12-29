import { RestaurantModel } from "../../models/restaurantModel/index.js";

export const getallResturants = async(req,res)=>{
   try {
       const allResturantslist = await RestaurantModel.find();
    if(allResturantslist.length<=0){
        res.ststus(200).json({message:"No Resturants found"});
    }
    else{
        res.send(allResturantslist);
    }
    
   } catch (error) {
    console.log(error);
    console.log("internal error " + error.message);
    res.status(500).json({message:"Internal Server Erroe Failled to get Resturants List"});
   }
} 
