import express from "express";
import {addResturant} from "../../controllers/resturantController/resturantController.js"
const router = express.Router();
router.post('/addResturant',addResturant);
export default router;