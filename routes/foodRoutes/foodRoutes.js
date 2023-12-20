import {addProductModel} from  "../../controllers/foodController/foodController.js"
import express from "express";
const router = express.Router();

router.post("/addfood",addProductModel);

export default router;