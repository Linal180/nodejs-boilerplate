import express from 'express';
const router = express.Router();
import { updateResturant } from '../../controllers/restaurantController/updateRestaurant.js';

router.put('/updateResturant/:id',updateResturant);

export default router;
