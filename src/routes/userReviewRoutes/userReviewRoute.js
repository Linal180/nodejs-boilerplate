import express from 'express';
import {addUserReviews} from '../../controllers/reviewsController/index.js';
const router = express.Router();

router.post("/userReviews",addUserReviews);

export default router;
