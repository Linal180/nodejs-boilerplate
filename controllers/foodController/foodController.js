import  foodModel  from "../../models/foodMoel/foodModel.js";

export const addProductModel = async(req,res)=>{
    try {
        const {
            category,
            subcategories,
            products,
          } = req.body;
      
          // Create a new subcategory instance using the provided data
          const newSubcategory = new SubcategoryModel({
            category,
            subcategories,
            products,
          });
      
          // Save the new subcategory to the database
          const savedSubcategory = await newSubcategory.save();
      
          res.status(201).json({
            success: true,
            message: "Subcategory Registration Success",
            subcategory: savedSubcategory,
          });
    } catch (error) {
        console.log(error);
        console.log("Internal error: " + error);
        res.status(500).json({message: "Internal server error", error: error})
    }
}