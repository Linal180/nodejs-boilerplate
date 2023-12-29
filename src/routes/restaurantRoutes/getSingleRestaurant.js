import express from 'express';
import { getSingleResturant } from '../../controllers/restaurantController/getsingleRestaurant.js';
const router = express.Router();


router.post("/getSingleResturant",getSingleResturant);

export default router;
