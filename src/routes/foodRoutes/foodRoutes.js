import {addProductModel} from  "../../controllers/foodController/index.js"
import express from "express";
const router = express.Router();

router.post("/addfood",addProductModel);

export default router;
