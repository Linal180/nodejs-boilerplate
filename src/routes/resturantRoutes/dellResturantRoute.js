import express from 'express';
const router = express.Router();
import { dellResturant } from '../../controllers/resturantController/dellResturantController.js';

router.delete('/dellResturant',dellResturant);

export default router
