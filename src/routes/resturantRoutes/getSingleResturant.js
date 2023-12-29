import express from 'express';
import { getSingleResturant } from '../../../controllers/resturantController/getsingleResturant.js';
const router = express.Router();


router.post("/getSingleResturant",getSingleResturant);

export default router;
