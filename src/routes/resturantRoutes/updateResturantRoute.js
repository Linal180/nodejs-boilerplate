import express from 'express';
const router = express.Router();
import { updateResturant } from '../../controllers/resturantController/updateResturant.js';

router.put('/updateResturant/:id',updateResturant);

export default router;
