import express from "express";
import { siginUser } from "../../controllers/userController/userSiginController.js";

const router=express.Router();

router.post('/usersigin',siginUser);

export default router
