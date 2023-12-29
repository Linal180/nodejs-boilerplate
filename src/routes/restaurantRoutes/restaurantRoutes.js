import express from "express";
import { addResturant } from "../../controllers/restaurantController/RestaurantController.js"
const router = express.Router();
router.post('/addResturant',addResturant);
export default router;
