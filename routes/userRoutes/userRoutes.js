import express from 'express';
import { addnewuser } from "../../controllers/userController/userController.js";

const router = express.Router();

router.post('/addnewuser', addnewuser);

export default router;