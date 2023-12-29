import express from 'express';
import dotenv from "dotenv";
import cors from "cors";
import dbConnection from './configuration/DataBase/db.js';

// Admin routes end here
// User routes
import  addnewuser  from './src/routes/userRoutes/userRoutes.js';
//
import siginUser from "./src/routes/userRoutes/userSiginRoute.js"
//
import addUserReviews from "./src/routes/userReviewRoutes/userReviewRoute.js"
//
import  addResturant  from "./src/routes/resturantRoutes/resturantRoutes.js";
//
import getallResturants from "./src/routes/resturantRoutes/getallResturantRoutes.js";
//
// import getSingleResturant from "./src/routes/resturantRoutes/getSingleResturant.js"
//
import  dellResturant  from './src/routes/resturantRoutes/dellResturantRoute.js';
//
import updateResturant from "./src/routes/resturantRoutes/updateResturantRoute.js"
//
import addProductModel from "./src/routes/foodRoutes/foodRoutes.js"
const app = express();

dotenv.config();
dbConnection();

// middleware
app.use(cors());
app.use(express.json());
// middlewares end here


app.use('/api',addnewuser);
app.use('/api',siginUser);
app.use('/api',addUserReviews);
app.use('/api',addResturant);
app.use('/api',getallResturants);
// app.use('/api',getSingleResturant);
app.use("/api",dellResturant);
app.use('/api',updateResturant);
const Port= 8500;
app.listen(Port, (req,res) =>{
    console.log(`Server is running at port ${Port}`);
})

