import jwt from "jsonwebtoken";
import revokedTokenModel from "../../../models/adminModel/revokedTokenModel";

export const adminAuthenticationToken = async (req,res)=>{
    try{
        // extract the token from the request headers
        const token = req.headers.authorization;

        //  // check if the token exists in the revokedTokens collection
        const revokedTocken= await revokedTokenModel.findOne({token});
        if(revokedTocken){
            return res.status(401).json({message:'Tocke revoked'})
        }
        // verify the token and extract the user information
        const decodedToken = jwt.verify(token, process.env.JWT_SECRET);

        // attach the user information to the request object for further proessing
        req.user = decodedToken;

        // proceed to the next middleware or router handler
        next();
    }catch(error){
        console.log(error.message);
    }
}
