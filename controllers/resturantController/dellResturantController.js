import resturantModel from "../../models/resturantModel/resturantModel.js";

export const dellResturant = async (req,res)=>{
    try {
        const dellResturant = await resturantModel.deleteOne({id:req.params.id});
        if(!dellResturant){
            res.status(400).josn({message:"Failed to delete Resturant",error:error})
        }else{
            res.status(200).json({message:"Resturant deleted successfully"});
        }
    } catch (error) {
        console.log(error);
        console.log("Internal error: " + error);
        res.status(500).json({message: "Internal server error", error: error})
    }
}