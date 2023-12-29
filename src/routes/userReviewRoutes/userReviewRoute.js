import express from 'express';
import {addUserReviews} from '../../controllers/reviewsController/reviewsControllers.js';
const router = express.Router();

router.post("/userReviews",addUserReviews);

export default router;
