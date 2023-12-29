import mongoos from "mongoose";
const RevokedTockeSchema= new mongoos.Schema({
    token:{
        type:String,
        required:true
    },
});
export default mongoos.model("RevokedTockem",RevokedTockeSchema)
