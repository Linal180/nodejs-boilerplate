import resturantModel from "../../models/resturantModel/resturantModel.js";

export const getSingleResturant = async (req, res) => {
    try {
        const getSingle_Resturant = await resturantModel.findOne({ id: req.params.id });

        if (!getSingle_Resturant) {
            res.status(400).json({ message: "No Restaurant Found" });
        } else {
            res.send(getSingle_Resturant);
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error. Failed to get Restaurants List" });
    }
}

//     let result = await resturantModel.findOne({ _id: req.params.id });
//   res.send(result).json({ message:result});
// }
   
