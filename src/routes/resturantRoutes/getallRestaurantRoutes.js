import express from 'express';
import { getallResturants } from "../../controllers/restaurantController/getallRestaurantController.js";
const router = express.Router();
router.get("/getallResturants", getallResturants);
export default router;

