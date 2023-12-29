import resturantModel from "../../models/resturantModel/resturantModel.js";
import fs from "fs";
export const addResturant = async (req, res) => {
    try {
        const {
            resturantId,
            resturantName,
            restaurantDescription,
            resturantOwner,
            resturantAddress,
        } = req.body;
        // const image = req.file.filename;
        // const images = req.files.map((file) => file.filename);
        const { name, email, phone } = resturantOwner;
        const { telephone, zipcode, city, street, currentLocation } = resturantAddress;

        // Initialize resturantExit here
        const resturantExit = await resturantModel.findOne({ resturantId: resturantId });

        if (resturantExit) {
            res.status(200).json({ message: "Restaurant is already Exists" });
        } else {
            const addResturant = await new resturantModel({
                resturantId,
                resturantName,
                restaurantDescription,
                resturantOwner: {
                    name,
                    email,
                    phone,
                },
                resturantAddress: {
                    telephone,
                    zipcode,
                    city,
                    street,
                    currentLocation,
                },
                // resturantImages: images,
                // image,
            }).save();

            res.status(201).json({
                success: true,
                message: "Restaurant Registration Success",
                addResturant,
            });
        }
    } catch (error) {
        console.log(error);
        console.log("Internal error: " + error);
        res.status(500).json({ message: "Internal error error: " + error });
    }
}
