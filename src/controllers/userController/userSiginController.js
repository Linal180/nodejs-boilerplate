import userModel from "../../models/userModel/userModel.js";
import { comparePassword } from "../../helpers/authHelper/authHelper.js";
// import { addnewuser } from "../../models/userModel/userModel.js";
import jwt from "jsonwebtoken";


export const siginUser = async(req,res)=>{
    try{
        const {email,password}=req.body;
        if(!email || !password){
            return res.status(400).json({message:"Not Empty Fields Allowed"});
        }
        const userLogin = await userModel.findOne({email: email});
        if(userLogin){
            const isMatched = await comparePassword(password,userLogin.password);
            if(!isMatched){
                return res.status(400).json({ message: 'Invalid Credentials' });
            }
            else{
                const token = jwt.sign(
                    { userId:userLogin._id},
                    process.env.SCRET_KEY,{
                        expiresIn:"1h",
                    });
                    // update the user document with authToken
                    userLogin.authToken=token;
                    await userLogin.save();
                    // set cookies
                    res.cookie("authToken",token,{httpOnly:true});
                    console.log(token)
                    res.status(200).json({message:'Successfuly login'}
                );
                
            }    
        }
        else {
            return res.status(400).json({ message: 'Invalid Credentials' });
          }
    }catch(error){
        console.log(error.message);
        res.status(500).json({ error: "internal server error" });
        console.log("Internal Server Error: " + error.message);
    }
}
