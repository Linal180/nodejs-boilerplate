import express from 'express';
const router = express.Router();
import {getSingleResturant} from "../../controllers/resturantController/getSingleResturant.js"


router.post("/getSingleResturant",getSingleResturant);

export default router;