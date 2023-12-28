import express from 'express';
import { signIn, signUp } from '../../controllers/userController/index.js';

const userRoutes = express.Router();

router.post('/sign-in', signIn);
router.post('/sign-up', signUp);

export default userRoutes;
