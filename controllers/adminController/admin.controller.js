import adminModel from "../../models/adminModel/admin.model.js";
import { hashPassword } from "../../helpers/authHelper/authHelper.js";

// add a  admin
export const addAdmin= async(req,res)=>{
    try{
        const {name,email,password,cellPhone,role} = req.body
        const existAdmin = await adminModel.findOne({email})
        if(existAdmin){
            return res.status(200).send({success:true, message:"admin already exists"})
        }
        //get hasedPassword
        const hashedPassword = await hashPassword(password);

        // saving posting data to mongodb including hashed password
        let admin = await new adminModel({  
            name,
            email,
            password:hashedPassword,
            cellPhone,
            role,
        }).save();
        res.status(201).send({
            success: true,
            message: "admin added successfully",
            admin,
          });
    }catch(error){
        console.log(error);
    }
}