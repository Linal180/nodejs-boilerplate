import { RestaurantModel } from "../../models/restaurantModel/restaurantModel";

export const updateResturant = async (req, res) => {
    try {
        const { id } = req.params;
        const updateData = req.body;

        // Use the `new` option to return the updated document
        const updatedResturant = await RestaurantModel.findByIdAndUpdate(id, updateData, { new: true });

        if (!updatedResturant) {
            return res.status(404).json({ message: "Restaurant not found" });
        }

        res.status(200).json({
            success: true,
            message: "Restaurant updated successfully",
            updatedResturant,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal error: " + error });
    }
};
