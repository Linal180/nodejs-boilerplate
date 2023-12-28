import express from 'express';
import { getallResturants } from "../../controllers/resturantController/getallResturantController.js";
const router = express.Router();
router.get("/getallResturants", getallResturants);
export default router;

