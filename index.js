import express from 'express';
import dotenv from "dotenv";
import cors from "cors";
import dbConnection from './configuration/DataBase/db.js';

import userRoutes from './src/routes/userRoutes/index.js';
import addUserReviews from "./src/routes/userReviewRoutes/userReviewRoute.js"
import addResturant from "./src/routes/restaurantRoutes/restaurantRoutes.js";
import getallResturants from "./src/routes/restaurantRoutes/getallRestaurantRoutes.js";
import dellResturant from './src/routes/restaurantRoutes/dellRestaurantRoute.js';
import updateResturant from "./src/routes/restaurantRoutes/updateRestaurantRoute.js"

const app = express();

dotenv.config();
dbConnection();

// middleware
app.use(cors());
app.use(express.json());
// middlewares end here


app.use('/api', userRoutes);
app.use('/api', addUserReviews);
app.use('/api', addResturant);
app.use('/api', getallResturants);
// app.use('/api',getSingleResturant);
app.use("/api", dellResturant);
app.use('/api', updateResturant);

const Port = 3001;

app.listen(Port, (req, res) => {
    console.log(`Server is running at port ${Port}`);
})

