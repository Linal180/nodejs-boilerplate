import express from 'express';
const router = express.Router();
import { dellResturant } from '../../controllers/restaurantController/dellRestaurantController.js';

router.delete('/dellResturant',dellResturant);

export default router
