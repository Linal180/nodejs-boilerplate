import express from 'express';
import { signIn, signUp } from "../../controllers/userController/index.js";

const router = express.Router();

router.post('/users/sign-in', signIn);
router.post('/users/sign-up', signUp);

export default router;
