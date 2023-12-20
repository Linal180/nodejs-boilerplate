import mongoose from "mongoose";

const dbConnection =async()=>{
    try{
        const connection = await mongoose.connect(process.env.DATABASE)
        if(connection){
            console.log("DataBase connection established")
        }
        else{
            console.log("Couldn't connect to the Database")
        }
    }catch(error){
        console.log("Couldn't connect to the Database internal server error")
    }
}
export default dbConnection;