import  userModel  from "../../models/userModel/userModel.js";
import { hashPassword } from "../../helpers/authHelper/authHelper.js";

export const addnewuser = async (req, res) => {
    try {
        const { name, email, password, contactInfo } = req.body;
        const { telephone, zipcode, city,street,houseNumber } = contactInfo;

        const existingUser = await userModel.findOne({ email });

        if (existingUser) {
            res.status(200).json({ success: true, message: "Email already registered" });
        } else {
            // Get hashed password
            const hashedPassword = await hashPassword(password);

            const user = await new userModel({
                name,
                email,
                password: hashedPassword,
                contactInfo: {
                telephone,
                zipcode,
                city,
                street,
                houseNumber
                },
            }).save();

            res.status(201).json({
                success: true,
                message: "User Registration Success",
                user,
            });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};
