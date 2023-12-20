import express from 'express';
import dotenv from "dotenv";
import cors from "cors";
import dbConnection from './configuration/DataBase/db.js';

// Admin routes
import  addAdmin  from './routes/adminRoutes/admin.Route.js';
// Admin routes end here
// User routes
import  addnewuser  from './routes/userRoutes/userRoutes.js';
// 
import siginUser from "./routes/userRoutes/userSiginRoute.js"
// 
import addUserReviews from "./routes/userReviewRoutes/userReviewRoute.js"
// 
import  addResturant  from "./routes/resturantRoutes/resturantRoutes.js";
// 
import getallResturants from "./routes/resturantRoutes/getallResturantRoutes.js";
// 
import getSingleResturant from "./routes/resturantRoutes/getSingleResturant.js"
// 
import  dellResturant  from './routes/resturantRoutes/dellResturantRoute.js';
// 
import updateResturant from "./routes/resturantRoutes/updateResturantRoute.js"
// 
import addProductModel from "./routes/foodRoutes/foodRoutes.js"
const app = express();
 
dotenv.config();
dbConnection();

// middleware
app.use(cors());
app.use(express.json());
// middlewares end here


app.use('/api',addAdmin);
app.use('/api',addnewuser);
app.use('/api',siginUser);
app.use('/api',addUserReviews);
app.use('/api',addResturant);
app.use('/api',getallResturants);
app.use('/api',getSingleResturant);
app.use("/api",dellResturant);
app.use('/api',updateResturant);
const Port= 8500;
app.listen(Port, (req,res) =>{
    console.log(`Server is running at port ${Port}`);
})

